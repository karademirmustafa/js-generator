const fs = require("fs");
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
      "main": "index.js",
      "scripts": {
        "test": "echo \\"Error: no test specified\\" && exit 1",
        "dev": "nodemon index",
        "start": "node index"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "express": "^4.18.2"
      },
      "devDependencies": {
        "nodemon": "^2.0.20"
      }
  }
  
  `;
    fs.writeFileSync(`${path}/package.json`, data);
  };


  module.exports= {generatePackage}