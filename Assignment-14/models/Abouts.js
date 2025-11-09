const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  name: String,
  title: String,
  about: String,
  education: String,
  socialLinks: {
    instagram: String,
    github: String
  }
});

module.exports = mongoose.model('About', AboutSchema);
