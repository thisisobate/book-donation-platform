const upload = require("./../utils/multer");
const path = require("path");

async function addPathToBody(req, res, next) {
  if (req.files)
    // req.body["file"] = req.files.map((file) => file.path.replace("\\", "/"));
    req.body["file"] = req.files.file.path.replace("\\", "/");

  if (req.file) req.body["file"] = req.file.path.replace("\\", "/");

  console.log("req ", req.files);
  console.log('path', req.files.file.path);
  next();
}

module.exports = (field) => {
  return [upload.single(field), addPathToBody];
};
