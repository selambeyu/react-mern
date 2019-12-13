const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const passport=require('passport-jwt');
const cors=require('cors');
const db=require('./config/config')
const app=express();
const userRouter=require('./routes/api/users');
const profileRouter=require('./routes/api/profile');
const postRouter=require('./routes/api/posts')
const port=process.env.PORT ||4000;

db_connect=mongoose.connect(db.dbURL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
});
 if(db_connect){
     console.log("the  database is connected");
 }else{
     console.log("the database is not connected")
 }

app.get('/',(req,res)=>{
    res.send('Hello, This is React');
});
// passport middleware
// app.use(passport.ini);

// passport config 
require('./config/passport')

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/users',userRouter);
app.use('/profile',profileRouter);
app.use('/post',postRouter);

 app.listen(port,()=>{
     console.log(`server running on port ${port}`);
}); 