const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  githubLink: String,
  liveDemo: String
});

module.exports = mongoose.model('Project', ProjectSchema);
