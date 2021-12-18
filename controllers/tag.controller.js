const  Tag = require('../models').Tag;

const attributes = ['id','name'];

exports.allTags=(req,res,next)=>{
    Tag.findAll({
        attributes
    }).then(data=>{
        res.status(200).json({data});
    }).catch(error=>res.status(400).json({error}))
}

exports.addTag=(req,res,next)=>{
    Tag.create(req.body)
        .then(data=>{
            res.status(200).json({message:"Tag added",data});
        })
        .catch(error => res.status(400).json({error}))
}

exports.updateTag=(req,res,next)=>{
    Tag.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.status(200).json({message:"Tag updated"});
    }).catch(error => res.status(400).json({error}))
}

exports.deleteTag=(req,res,next)=>{
    Tag.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.status(200).json({message:"Tag deleted"});
    }).catch(error => res.status(400).json({error}))
}