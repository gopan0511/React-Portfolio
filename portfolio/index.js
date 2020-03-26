const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const chromeLauncher = require('chrome-launcher')
const lighthouse = require('lighthouse')
const { URL } = require('url');

const SAMPLE_SIZE = 30; 
const INDENT_COUNT_THRESHOLD = 20; 

async function getHarData(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const recorder = new PuppeteerHar(page);
    
    await recorder.start({ saveResponse: true, captureMimeTypes: ['text/html', 'application/javascript', 'text/css']});

    await page.goto(url);

    // const perfTiming = page.evaluate(() => window.performance.navigation.toJSON())
    // console.log(perfTiming)

    const har = await recorder.stop();
    await browser.close();
    console.log(har)
    const files = ['vendor.js', 'framework.js', 'framework.css', 'platform.js']
    const paramValues = getNetworkMetrics(har, files)
    return paramValues
}


function getNetworkMetrics(har, onlyShowFiles) {
    onlyShowFiles = new Set(onlyShowFiles);
    return har.log.entries
    .filter(entry => onlyShowFiles.has(getFileName(entry.request.url)))
    .map(entry => ({
        url: entry.request.url,
        size: entry.response.content.size,
        transferredBytes: entry.response._transferSize,
        gzipped: isGZipped(entry.response),
        minified: isMinified(entry.response.content.text)
    }));
}

function getFileName(urlString) {
    const url = new URL(urlString)
    const path = url.pathname

    const fileName = path.substring(path.lastIndexOf('/') + 1)
    return fileName
}

function isGZipped(response) {
    return response.headers.some(header => header.name === 'Content-Encoding' && header.value === 'gzip')
}

function isMinified (str) {
    if(!str) {
        return null
    }

    let isMinified;
    let lineEndIndex = 0;
    let lineStartIndex = 0;
    let lines = 0;
    let indentCount = 0;
  
    // Strip comments.
    str = str.replace(/\/\*[\S\s]*?\*\/|\/\/(.+|\n)/g, "");
  
    while (lines++ < SAMPLE_SIZE) {
      lineEndIndex = str.indexOf("\n", lineStartIndex);
      if (lineEndIndex == -1) {
         break;
      }
      if (/^\s+/.test(str.slice(lineStartIndex, lineEndIndex))) {
        indentCount++;
      }
      lineStartIndex = lineEndIndex + 1;
    }
    isMinified = ((indentCount / lines ) * 100) < INDENT_COUNT_THRESHOLD;
  
    return isMinified;
};
  

async function getLightHouseData(url, opts = {}, config = null) {
    const chrome = await chromeLauncher.launch();
    opts.port = chrome.port;

    const results = await lighthouse(url, opts, config)
    await chrome.kill()
    

    const audits = ['time-to-first-byte', 'interactive', 'first-contentful-paint', 'first-meaningful-paint'];

    return new Map(audits.map(audit => [audit, results.lhr.audits[audit].numericValue]));
}

(async () => {
    const urls = ['https://appointments.wellsfargo.com/maa/appointment/topic'];

    urls.forEach(async url => {
        const [harData, lightHouseData] = await Promise.all([
            getHarData(url),
            getLightHouseData(url)
        ]);

        console.log(harData);
        console.log(lightHouseData);
    });

})();
