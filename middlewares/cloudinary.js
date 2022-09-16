const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'dcasl9rot',
  api_key: '189525371476122',
  api_secret: '3d8mWYW-30-x65p7TDtJJ02nWyQ',
});

module.exports = cloudinary;
