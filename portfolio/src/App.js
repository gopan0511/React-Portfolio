import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="My Portfolio" scroll>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <a href="/GopanResume.pdf" target="_blank">Resume</a>
                      {/* <Link to="/resume">Resume</Link> */}
                      <Link to="/aboutme">Photography</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="My Portfolio">
                  <Navigation>
                      <Link to="/">Home</Link>
                      <a href="/GopanResume.pdf" target="_blank">Resume</a>
                      {/* <Link to="/resume">Resume</Link> */}
                      <Link to="/aboutme">Photography</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
