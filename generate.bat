:: Create Project Folder
mkdir %1

:: Create UI
node %~dp0generate\ui.js %1
cd %1\ui
npm init -y
npm i react react-scripts react-dom react-router-dom axios
node %~dp0generate\ui-package.js

:: Create Docker Compose
cd ..
node %~dp0generate\docker-compose.js