const fs = require("fs");
const FRONTEND_TMP_DIR = "./frontend_tmp";
const zipFolder = require("../utils/zip");

const {
  generateIndex,
  generateIndexHTML,
  generateApp,
  generateEnv,
  generateGitignore,
  generatePackage,
  createFolder,
} = require("./frontend-generate-functions");

module.exports = function createFrontend(appName, callback) {
  if (fs.existsSync(FRONTEND_TMP_DIR)) {
    fs.rmSync(FRONTEND_TMP_DIR, { recursive: true, force: true });
  }
  createFolder(FRONTEND_TMP_DIR);
  createFolder(`${FRONTEND_TMP_DIR}/src`);
  createFolder(`${FRONTEND_TMP_DIR}/public`);
  generateIndex(FRONTEND_TMP_DIR);
  generateIndexHTML(FRONTEND_TMP_DIR, appName);
  generateApp(FRONTEND_TMP_DIR);
  generateEnv(FRONTEND_TMP_DIR);
  generateGitignore(FRONTEND_TMP_DIR);
  generatePackage(FRONTEND_TMP_DIR,appName);
  
  zipFolder(FRONTEND_TMP_DIR, appName + "-ui", callback);
  return appName + "-ui.zip";
};
