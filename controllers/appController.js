
module.exports.head =(req, res, next)=>{
    // if(!req.user) return res.json({message:'You must send user data'})
    // if(!req.body.name) return res.json({message:'user must have a name'})
    console.log(req.headers);
    next()
}
module.exports.root = (req, res, next)=> {
   return res.json({message:'This is app Controllers router'});
   
}
module.exports.about =(req, res, next)=>{
    console.log(req.body);
    return res.json({message:'About info accepted'});
}