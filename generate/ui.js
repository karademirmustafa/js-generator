const fs = require("fs");
const appName=process.argv[2];

const generateIndex=()=>
{
	const data=`
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;
	fs.writeFileSync("src/index.js",data);
}
const generateApp=()=>
{
	const data=`
export default function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}`;
	fs.writeFileSync("src/app.js",data);
}
const generateIndexHTML=()=>
{
	const data=`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>`+appName+`</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;
	fs.writeFileSync("public/index.html",data);
}
const generateGitignore=()=>
{
	const data=`
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
	fs.writeFileSync(".gitignore",data);
}
const generateEnv=()=>
{
	const data=`
REACT_APP_BACKEND_URL=http://localhost:5000`;
	fs.writeFileSync(".env",data);
}
const generateDockerfile=()=>
{
	const data=`
FROM node:16-alpine3.15 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:1.20.2-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY .nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`;
	fs.writeFileSync("Dockerfile",data);
}
const generateNginx=()=>
{
	const data=`
server {
	listen 80;
	location / {
		root   /usr/share/nginx/html;
		index  index.html index.htm;
		try_files $uri $uri/ /index.html;
	}
}`;
	fs.writeFileSync(".nginx/nginx.conf",data);
}
const generateDockerignore=()=>
{
	const data=`
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
yarn-error.log*

# git
.git
.gitignore

# Docker
Dockerfile
.dockerignore`;
	fs.writeFileSync(".dockerignore",data);
}
const generatePackage=()=>
{
	const data=`
{
  "name": "url-shortener",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "^0.24.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.0",
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
	fs.writeFileSync("package.json",data);
}
const createFolder=name=>
{
	fs.mkdirSync(name);
}
createFolder("src");
createFolder("public");
createFolder(".nginx");
generateIndex();
generateApp();
generateIndexHTML();
generateGitignore();
generateEnv();
generateDockerfile();
generateDockerignore();
generateNginx();
generatePackage();