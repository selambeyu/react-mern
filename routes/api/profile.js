const express=require('express');
const router=express.Router();
const verifyToken=require('../../config/verifyToken');
const Profile=require('../../model/Profile');
const jwt=require('jsonwebtoken')
const User=require('../../model/User')


router.get('/test',(req,res)=>{
    res.send("Profile  works");
});
router.get('/:id',verifyToken,(req,res)=>{
    jwt.verify(req.token,"secret",(err,authData)=>{
        console.log(authData);
        if(err){
            res.sendStatus(404);
        }
        console.log(authData._id);
        console.log(authData.name);
        console.log(authData.email);
        console.log(req.params.id);
        console.log
        Profile.findOne({user:req.params.id}).then(profile=>{
           
                if(profile.user===authData._id){
                    console.log("this is profile usrid",profile.user);
                    return res.json({
                        profile:profile,
                        msg:"user Profile"
                    })
                }else{
                    return res.json({
                        msg:"profile not found"
                    })
                }

            }).catch(err=>{
                res.json({
                    profile:err
                })
            })
    })
    
    
})
router.post('/add',verifyToken,(req,res)=>{
    jwt.verify(req.token,"secret",(err,authData)=>{
        if(err){
            res.sendStatus(404);
        }
        const experience=[];
        experience.push({
            title:req.body.title,
            company:req.body.company,
            location:req.body.location,
            from:req.body.from,
            To:req.body.To,
            current:req.body.current
        });
        const education=[];
        education.push({
            school:req.body.school,
            degree:req.body.degree,
            fieldofstudy:req.body.fieldofstudy,
            from:req.body.from,
            To:req.body.To,
            current:req.body.current
        });
        const social=[];
        social.push({
            
                facebook:req.body.facebook,
                twitter:req.body.twitter,
                youtube:req.body.youtube,
                linkedin:req.body.linkedin,
                instagram:req.body.instagram
        });
        
        const newProfile= new Profile({
            user:authData._id,
            handle:req.body.handle,
            company:req.body.company,
            location:req.body.location,
            status:req.body.status,
            skill:req.body.skill,
            website:req.body.website,
            experience:req.body.experience,
            education:req.body.education,
            social:req.body.social


        });
        newProfile.save().then(nwprofile=>{
            res.json({
                nwprofile:nwprofile,
                msg:"profile uploaded"
            })
        }).catch(err=>{
            res.json({
                nwprofile:err
            })
        })

        
    })
});
// router.put();
// router.delete();

module.exports=router;