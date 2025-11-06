const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  email: { type: String },
  place: { type: String },
  summary: { type: String },
  education: [
    {
      college: String,
      college_year: String,
      course: String,
      university: String,
      plustwo: String,
      class: String,
      mark: String,
      school_year: String
    }
  ],
  skills: [String],   
  hobbies: [String]  
});


module.exports = mongoose.model('Resume', resumeSchema, 'resume');