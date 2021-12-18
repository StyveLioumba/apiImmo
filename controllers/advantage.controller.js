const  Advantage = require('../models').Advantage;

const attributes = ['id','name'];

exports.allAdvantages=(req,res,next)=>{
    Advantage.findAll({
        attributes
    }).then(data=>{
        res.status(200).json({data});
    }).catch(error=>res.status(400).json({error}))
}

exports.addAdvantage=(req,res,next)=>{
    Advantage.create(req.body)
        .then(data=>{
            res.status(200).json({message:"Advantage added",data});
        })
        .catch(error => res.status(400).json({error}))
}

exports.updateAdvantage=(req,res,next)=>{
    Advantage.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.status(200).json({message:"Advantage updated"});
    }).catch(error => res.status(400).json({error}))
}

exports.deleteAdvantage=(req,res,next)=>{
    Advantage.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.status(200).json({message:"Advantage deleted"});
    }).catch(error => res.status(400).json({error}))
}