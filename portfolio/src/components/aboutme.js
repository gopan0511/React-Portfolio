import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

class Sample extends React.Component {
    render() {
    return (
        <Gallery photos={PHOTO_SET} />
    );
    }
}
const PHOTO_SET = [
  {
    src: require('../images/IMG-20180210-WA0004.jpg'),
    width: 0.85,
    height: 1
  },
  {
    src: require('../images/IMG-20180720-WA0015.jpg'),
    width: 0.9,
    height: 1
  },
  {
    src: require('../images/IMG-20180720-WA0016.jpg'),
    width: 1,
    height: 1
  },
  {
    src: require('../images/IMG-20180819-WA0002.jpg'),
    width: 0.75,
    height: 1
  },
  {
    src: require('../images/IMG-20181006-WA0004.jpg'),
    width: 1,
    height: 1
  },
  {
    src: require('../images/IMG-20181006-WA0005.jpg'),
    width: 1,
    height: 1
  },
  {
    src: require('../images/IMG-20181006-WA0004.jpg'),
    width: 1,
    height: 1
  },
  {
    src: require('../images/IMG-20181006-WA0060.jpg'),
    width: 1,
    height: 1
  },
  {
    src: require('../images/IMG-20181006-WA0061.jpg'),
    width: 1,
    height: 1
  },
  {
    src: require('../images/IMG-20181006-WA0062.jpg'),
    width: 1,
    height: 1
  },
  {
    src: require('../images/IMG-20181006-WA0102.jpg'),
    width: 1,
    height: 1
  },
  {
    src: require('../images/IMG-20181006-WA0156.jpg'),
    width: 1,
    height: 1
  },
  {
    src: require('../images/IMG-20181006-WA0160.jpg'),
    width: 1,
    height: 1
  },
  {
    src: require('../images/IMG-20181006-WA0163.jpg'),
    width: 1,
    height: 1
  }
];



export default Sample;