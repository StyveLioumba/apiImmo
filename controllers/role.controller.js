const  Role = require('../models').Role;

const attributes = ['id','name'];

exports.allRoles=(req,res,next)=>{
    Role.findAll({
        attributes
    }).then(data=>{
        res.status(200).json({data});
    }).catch(erreur=>res.status(400).json({erreur}))
}

exports.addRoles=(req,res,next)=>{
    Role.create(req.body)
        .then(data=>{
            res.status(200).json({message:"role added",data});
        })
        .catch(erreur => res.status(400).json({erreur}))
}

exports.updateRole=(req,res,next)=>{
    Role.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.status(200).json({message:"role updated"});
    }).catch(erreur => res.status(400).json({erreur}))
}

exports.deleteRole=(req,res,next)=>{
    Role.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.status(200).json({message:"role deleted"});
    }).catch(erreur => res.status(400).json({erreur}))
}