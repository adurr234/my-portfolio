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
      'src': "images/chatbot.png",
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
    'title': "Work Example",
    'href': "https://github.com/adurr234/Serverless-web",
    'desc': "A simple Node.js web service deployed by AWS CloudFormation to AWS Lambda and Amazon API Gateway.",
    'image': {
      'desc': "example screenshot",
      'src': "images/example3.png",
      'comment': ""
    }
  }
]
ReactDOM.render(<ExampleWork  work={myWork}/>, document.getElementById('example-work'))
