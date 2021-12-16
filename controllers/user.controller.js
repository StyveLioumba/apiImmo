const User = require('../models').User;
const Role = require('../models').Role;


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const passwordService = require('../services/password.service');


const attributes =['id','name','age','email','phone','picture'];

exports.addUser=(req,res,next)=>{
    Role.findByPk(req.body.role).then(data=>{
        if (data){
            passwordService.verifyPassword(req.body.password)
                .then(result=>{

                    if (result && result!==false){
                        let user = req.body;
                        user.password = result;

                        User.create(req.body)
                            .then(user => {
                                user.setRoles(req.body.role)
                                    .then(()=>{
                                        res.status(200).json({message:"user added",user})
                                    })
                            }).catch(erreur=>res.status(404).json({erreur}))
                    }else {
                        res.status(404).json({message:"your password must have more than 7 character"})
                    }
                }).catch(()=>res.status(404).json({message:"your password must have more than 7 character"}))

        }else {
            res.status(404).json({message:'role not found'})
        }
    })

}

exports.updateUser = (req, res, next)=>{
    let user = req.body;

    if(req.file){
        user.picture =`public/upload/users/${req.file.filename}`
    }

    User.update(req.body,{
        attributes:attributes,
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.status(200).json({message:'user updated'})
    }).catch(erreur=>res.status(404).json({erreur}))
}

exports.deleteUser =(req,res, next)=>{
    User.destroy({
        attributes:attributes,
        where:{
            id:req.params.id
        }
    }).then(()=>{
        res.status(200).json({message:'user deleted'})
    }).catch(erreur=>res.status(404).json({erreur}))
}

exports.allUser=(req, res,next)=>{
    User.findAll({
        attributes:attributes,
    }).then(data=>{
        res.status(200).json({data})
    }).catch(erreur=>res.status(404).json({erreur}))
}

exports.detailUser = (req,res,next)=>{
    User.findByPk(req.params.id,{
        attributes:attributes
    }).then(data=>{
        res.status(200).json({data})
    }).catch(erreur=>res.status(404).json({erreur}))
}

exports.userLogin = (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err){
                    res.status(500).end()
                }
                else if(result){
                    const token = jwt.sign({name: user.name, email: user.email}, process.env.SECRET, { expiresIn:'1h'});
                    res.status(200).json({token: token});
                }
                else{
                    res.status(404).json({message: 'Bad login or password'});
                }
            })
        }
    }).catch( err => res.status(500).end())
}