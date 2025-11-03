var express = require('express')
const app = express()

const User = require('./models/user')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.get('',(req,res) => res.render('home'));
app.get('/signup',(req,res) => res.render('signup'))
app.post('/signup', async(req,res) => {

   try{
    const { name , email , phone , password } = req.body;
    const newUser = new User({ name, email , phone , password });
    await newUser.save();
    res.send("Data inserted")
    console.log(req.body)
   }catch(eror){
      console.error(error);
      res.status(500).send('❌ Error saving user.');
   }
}
 );
app.get('/login',  (req,res) => res.render('login'));

app.post('/login', async(req,res)=> {
   try {
      console.log(req.body)
      const {email , password } = req.body;
      const user = await User.findOne({ email: email });
      if(!user) {
         return res.render('login', {message : "User not found"} );
      }
      if(user.password != password){
         return res.render('login', {message: "wrong password"});
      }
      
    res.send(`Welcome, ${user.name}!`);

   }
   catch(error){
      console.error(error);
      res.status(505,res.send('error during login'))
   }
});

app.listen(2000);