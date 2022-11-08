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
const generateIndexHTML=(appName)=>
{
	const data=`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <title>`+appName+`</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;
	fs.writeFileSync(appName+"/ui/public/index.html",data);
}
const appName=process.argv[2];
fs.mkdirSync(appName);
fs.mkdirSync(appName+"/ui/");
fs.mkdirSync(appName+"/ui/src");
fs.mkdirSync(appName+"/ui/public");
generateIndex(appName);
generateApp(appName);
generateIndexHTML(appName);