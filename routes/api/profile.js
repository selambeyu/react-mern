const express=require('express');
const router=express.Router();
const verifyToken=require('../../config/verifyToken');
const Profile=require('../../model/Profile');
const jwt=require('jsonwebtoken')
const User=require('../../model/User')


router.get('/test',(req,res)=>{
    res.send("Profile  works");
});
router.get('/',verifyToken,(req,res)=>{
    jwt.verify(req.token,"secret",(err,authData)=>{
        console.log(authData);
        if(err){
            res.sendStatus(404);
        }
        Profile.findOne({user:req.user}).then(profile=>{
                if(!profile){
                  return  res.status(404).json({
                        msg:"User not found"
                    })
                }
            }).catch(err=>{
                res.json({
                    profile:err
                })
            })
    })
    
    
})
router.post('/',verifyToken,(req,res)=>{
    jwt.verify(req.token,"secret",(err,authData)=>{
        if(err){
            res.sendStatus(404);
        }
        const profileField={};
        profileField.user=authData._id
    })
});
// router.put();
// router.delete();

module.exports=router;