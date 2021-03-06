const  Role = require('../models').Role;

const attributes = ['id','name'];

exports.allRoles=(req,res,next)=>{
    Role.findAll({
        attributes
    }).then(data=>{
        res.status(200).json({data});
    }).catch(error=>res.status(400).json({error}))
}

exports.addRoles=(req,res,next)=>{
    Role.create(req.body)
        .then(data=>{
            res.status(200).json({message:"role added",data});
        })
        .catch(error => res.status(400).json({error}))
}

exports.updateRole=(req,res,next)=>{
    Role.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.status(200).json({message:"role updated"});
    }).catch(error => res.status(400).json({error}))
}

exports.deleteRole=(req,res,next)=>{
    Role.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.status(200).json({message:"role deleted"});
    }).catch(error => res.status(400).json({error}))
}