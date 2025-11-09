const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const About = require('./models/Abouts');
const Project = require('./models/Projects');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://anandog12_db_user:3w4IKRJJd1h8SI9O@cluster0.vlfdesn.mongodb.net/website")
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.error(" MongoDB Connection Error:", err));

app.get('/', (req, res) => res.send('Portfolio  is running '));

app.get('/abouts', async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000) 
