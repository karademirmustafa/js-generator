:: Create Project Folder
mkdir %1
cd %1

:: Create Docker Compose
node %~dp0generate\docker-compose.js

:: Create UI
mkdir ui
cd ui
node %~dp0generate\ui.js %1