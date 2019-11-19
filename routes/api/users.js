const express=require('express');
const User=require('../../model/User');
const bcrypt=require('bcrypt');
const router =express.Router();

router.post('/register',(req,res)=>{
    User.findOne({email:req.body.email}).then(user=>{
        if(user){
            res.status(404).json({user:"email already exist"})
        }else{
            const newUser=new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                avatar:req.body.avatar
                
            })
            bcrypt.hash(password,10,(err,hash)=>{
                if(err){
                    res.json({err:err})
                }else{
                    newUser.password=hash;
                    newUser.save().then(newUser=>{
                        res.json({
                            newUser:newUser,
                            message:"User Registered"
                        })
                    }).catch(err=>{
                        res.json({
                            newUser:err,
                            message:"error"
                        })
                    })
                }
            })

        }
    })
})

module.exports=router;