const fs = require("fs");

function generateIndex(path) {
  const data = `
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );`;
  fs.writeFileSync(`${path}/src/index.js`, data);
}

const generateApp = (path) => {
  const data = `
export default function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}`;
  fs.writeFileSync(`${path}/src/App.js`, data);
};

const generateIndexHTML = (path, appName) => {
  const data =
    `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>` +
    appName +
    `</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;
  fs.writeFileSync(`${path}/public/index.html`, data);
};

const generateGitignore = (path) => {
  const data = `
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*`;
  fs.writeFileSync(`${path}/.gitignore`, data);
};

const generateEnv = (path) => {
  const data = `
REACT_APP_BACKEND_URL=http://localhost:5000`;
  fs.writeFileSync(`${path}/.env`, data);
};

const generatePackage = (
  path,
  projectDetails,
  dependencies,
  devDependencies
) => {
  const data =
    `
{
  "name": "` +
    projectDetails?.name +
    `",
  "version": "` +
    projectDetails.version +`",
  "description": "`+
    projectDetails.description +`",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "^5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

`;
  fs.writeFileSync(`${path}/package.json`, data);
};
const createFolder = (path) => {
  fs.mkdirSync(path);
};

module.exports = {
  generateIndex,
  generateIndexHTML,
  generateApp,
  generateEnv,
  generateGitignore,
  generatePackage,
  createFolder,
};
