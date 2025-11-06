const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/resumeDb')
.then( ()=> console.log('Connection established'))
.catch(err => console.error(err));

const Resume = require('./models/resumeModel')

app.get('/resume', async (req,res)=>{
    try {
        const data = await Resume.find();
        res.json(data);
        console.log(data);
    }
     catch (err){
        res.status(500).json({message: err.message});
     }
});







app.listen(2000, ()=> console.log("Port number is : http://localhost:2000"))