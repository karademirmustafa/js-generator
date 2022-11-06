const fs = require("fs");

const generateIndex=(appName)=>
{
	fs.mkdirSync(appName);
	fs.mkdirSync(appName+"/src");
	const data=`
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`;
	fs.writeFileSync(appName+"/src/index.js",data);
}
generateIndex("app");