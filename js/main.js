import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
  {
    'title': "A Chatbot",
    'href': "https://d1wnhq2wvl9n5a.cloudfront.net/client.html",
    'desc': "A chatbot using multiple AWS services. It can tell you more information about it's creation or about Chuck Norris",
    'image': {
      'desc': "A Chatbot",
      'src': "images/Chatbot.png",
      'comment': ""
    }
  },
  {
    'title': "This Serverless Webpage",
    'href': "https://github.com/adurr234/my-portfolio",
    'desc': "A Serveless website utilizing AWS and ReactJS",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/example2a.png",
      'comment': ""
    }
  },
  {
    'title': "Chef Cookbooks",
    'href': "https://github.com/adurr234/chef-fluency-badge",
    'desc': "A collection of Chef resources and cookbooks.",
    'image': {
      'desc': "example screenshot",
      'src': "images/example3.png",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork  work={myWork}/>, document.getElementById('example-work'))
