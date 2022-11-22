const fs = require("fs");

const generateIndex=(appName)=>
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
    <title>`+appName+`</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;
	fs.writeFileSync(appName+"/ui/public/index.html",data);
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
	fs.writeFileSync(appName+"/ui/.gitignore",data);
}
const generateEnv=()=>
{
	const data=`
REACT_APP_BACKEND_URL=http://localhost:5000`;
	fs.writeFileSync(appName+"/ui/.env",data);
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
	fs.writeFileSync(appName+"/ui/Dockerfile",data);
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
	fs.writeFileSync(appName+"/ui/.nginx/nginx.conf",data);
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
	fs.writeFileSync(appName+"/ui/.dockerignore",data);
}
const appName=process.argv[2];
fs.mkdirSync(appName+"/ui/");
fs.mkdirSync(appName+"/ui/src");
fs.mkdirSync(appName+"/ui/public");
generateIndex(appName);
generateApp(appName);
generateIndexHTML(appName);
generateGitignore();
generateEnv();
generateDockerfile();
generateDockerignore();
fs.mkdirSync(appName+"/ui/.nginx");
generateNginx();