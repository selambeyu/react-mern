const express=require('express');
const User=require('../../model/User');
const bcrypt=require('bcrypt');
const verifyToken=require('../../config/verifyToken');
const gravatar=require('gravatar');;
const jwt=require('jsonwebtoken');
const router =express.Router();

// const validatRegisterIput= require('../../validation/register')
router.get('/test',(req,res)=>{
    res.send("Api connecte with react client");
})


router.post('/register',(req,res)=>{
    // const {errors, isValid} = validatRegisterIput(req.body);
    // if(isValid){
    //     return res.sendStatus(400).json(errors);
    // }
    User.findOne({email:req.body.email}).then(user=>{
        if(user){
            res.status(404).json({user:"email already exist"})
        }else{
            const avatar=gravatar.url(req.body.email,{
                s:'200',
                r:'pg',
                d:'mm'
            })
            const newUser=new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                avatar
                
            })
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                if(err){
                    res.json({err:err})
                }else{
                    newUser.password=hash;
                    newUser.save().then(newUser=>{
                        res.json({
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

router.post('/login',(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    User.findOne({email:req.body.email}).then(user=>{
        if(!user){
            return  res.json({
                message:"User not found"
            })

        }
        bcrypt.compare(req.body.password,user.password).then(isMatch=>{
            if(isMatch){
            const token=jwt.sign({email:user.email,name:user.name,_id:user._id},"secret",{expiresIn:60000});
            res.json({
                msg:"logged in",
                token:token

            })
        }else{
            res.json({msg:"password missmatch"});
        }
        }).catch(err=>{
            res.json({isMatch:err})
        })
    })
})


router.get('/profile',verifyToken,(req,res)=>{
    jwt.verify(req.token,"secret",(err,authData)=>{
        if(err){
            res.sendStatus(404);
        }
        res.json({
            msg:"usr profile",
            authData:authData
    })

})
})



module.exports=router;