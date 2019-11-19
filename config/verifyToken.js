module.exports=(req,res,next)=>{
    const bearerHeader=req.headers['authorization'];
    if(typeof bearerHeader!=='undefined'){
  // sprlit at thes space
  const bearer=bearerHeader.split(' ');
  //get tokent from array 
  const bearerToken=bearer[1];
  req.token=bearerToken;
  
  next();
    }else{
      res.sendStatus(403);
    }
}



