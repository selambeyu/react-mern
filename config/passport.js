const  JWTStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const mongoose=require('mongoose');
const User=require('../model/User');

const opt={};
opt.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
opt.secretOrKey="secret";

module.exports=passport=>{
    passport.use(new JWTStrategy(opt,(jwt_paylad,done)=>{
        console.log(jwt_paylad)

    }))
}