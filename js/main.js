import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Portfolio Boilerplate",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot",
      'src': "images/example3.png",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork  work={myWork}/>, document.getElementById('example-work'))
