const jwt =require('jsonwebtoken');

module.exports = () => {
    return (req,res,next)=>{
        if(req.headers.authorization){
            const token = req.headers.authorization.split(" ")[1];
            try{
                if(jwt.verify(token,process.env.SECRET)){
                    next();
                }else{
                    res.status(401).json({message:'Token altere'});
                }
            }catch(err){
                res.status(401).json({message:`you do not have the rights `})
            }
        }
        //pas de headers donc pas d'authorization
        else{
            res.status(401).json({message:`you do not have the rights`})
        }
    }
}