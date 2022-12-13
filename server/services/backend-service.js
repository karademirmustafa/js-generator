const fs = require("fs");
const BACKEND_TMP_DIR = "./backend_tmp";
const zipFolder = require("../utils/zip");

const {
  createFolder,generateGitignore
} = require("./frontend-generate-functions");
const {
    generatePackage
} = require("./backend-generate-functions");
module.exports = function createBackend(projectDetails, callback) {
  if (fs.existsSync(BACKEND_TMP_DIR)) {
    fs.rmSync(BACKEND_TMP_DIR, { recursive: true, force: true });
  }
  createFolder(BACKEND_TMP_DIR);
  generateGitignore(BACKEND_TMP_DIR);
  generatePackage(BACKEND_TMP_DIR,projectDetails);
  
  zipFolder(BACKEND_TMP_DIR, projectDetails.name, callback);
  return projectDetails?.name + ".zip";
};
