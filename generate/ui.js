const fs = require("fs");

const generateIndex=(appName)=>
{
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
	fs.writeFileSync(appName+"/ui/src/index.js",data);
}
const generateApp=(appName)=>
{
	const data=`
export default function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}`;
	fs.writeFileSync(appName+"/ui/src/app.js",data);
}
const appName=process.argv[2];
fs.mkdirSync(appName);
fs.mkdirSync(appName+"/ui/");
fs.mkdirSync(appName+"/ui/src");
fs.mkdirSync(appName+"/ui/public");
generateIndex(appName);
generateApp(appName);