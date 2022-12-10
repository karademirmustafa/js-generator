let file_system = require("fs");
let archiver = require("archiver");
module.exports =  function zipFolder(path, fileName,callback) {
  let output = file_system.createWriteStream(`${fileName}.zip`);
  let archive = archiver("zip");

  output.on("close", function () {
    callback(fileName+".zip")
    console.log(archive.pointer() + " total bytes");
    console.log(
      "archiver has been finalized and the output file descriptor has closed."
    );
  });

  archive.on("error", function (err) {
    console.log("bişey", err);
    throw err;
  });

  archive.pipe(output);

  // append files from a sub-directory, putting its contents at the root of archive
  archive.directory(`${path}`, false);

  // append files from a sub-directory and naming it `new-subdir` within the archive
  // archive.directory('subdir/', 'new-subdir');

  archive.finalize();
};
