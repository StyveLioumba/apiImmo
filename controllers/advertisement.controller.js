const Advertisement = require('../models').Advertisement;
const User = require('../models').User;
const Type = require('../models').Type;
const Tag = require('../models').Tag;
const Advantage = require('../models').Advantage;
const AdvertisementTag = require('../models').AdvertisementTag;
const AdvertisementAvantage = require('../models').AdvertisementAdvantage

const {Op} =require('sequelize');

const  attributes=['id','title','price','sector','room','description','picture']

exports.addAdvertisement = (req,res,next)=>{
    Tag.findByPk(req.body.tag).then(tag=>{
        if (tag){
            Advantage.findByPk(req.body.advantage).then(advantage=>{
                if (advantage){
                    let adveertisement = req.body;
                    if(req.file){
                        adveertisement.picture =`upload/advertisement/${req.file.filename}`
                    }
                    Advertisement.create(req.body).then(advertisement=>{
                        advertisement.setTags(req.body.tag)
                            .then(()=> {
                                advertisement.setAdvantages(req.body.advantage)
                                    .then(()=> res.status(200).json({message:"advertisement added",advertisement}))
                                    .catch(error=>console.log(error))
                            }).catch(error=>console.log(error))
                    }).catch(error=>res.status(400).json({error}));
                }else {
                    res.status(404).json({message:'advantage not found'})
                }
            })
        }else{
            res.status(404).json({message:'tag not found'})
        }
    })

}

exports.addTag = (req,res,next)=>{
    Tag.findByPk(req.body.tag).then(tag=>{
        if (tag){
            AdvertisementTag.create(req.body)
                .then(data=>res.status(200).json({data}))
                .catch(error=>res.status(400).json({error}))
        }else {
            res.status(401).json({message:"tag not found"})
        }
    }).catch(error=>res.status(400).json({error}))
}

exports.addAdvantage = (req,res,next)=>{
    Advantage.findByPk(req.body.advantage).then(advantage=>{
        if (advantage){
            AdvertisementAvantage.create(req.body)
                .then(data=>res.status(200).json({data}))
                .catch(error=>res.status(400).json({error}))
        }else {
            res.status(401).json({message:"tag not found"})
        }
    }).catch(error=>res.status(400).json({error}))
}

exports.detailAdvertisement =(req,res,next)=>{
    Advertisement.findByPk(req.params.id,{
        attributes,
        include:[
            {
                model:User,
                attributes:['id','name','age','email','phone','picture']
            },
            {
                model:Type,
                attributes:['id','name']
            },
            {
                model:Advantage,
                attributes:['id','name']
            },
            {
                model:Tag,
                attributes:['id','name']
            }
        ]
    }).then(data=>res.status(200).json({data}))
        .catch(error=>res.status(400).json(error))
}

exports.updateAdvertisement =(req,res,next)=>{
    Advertisement.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(()=>res.status(200).json({message:"advertisement updated"}))
        .catch(error=>res.status(400).json(error))
}

exports.deleteAdvertisement =(req,res,next)=>{
    Advertisement.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>res.status(200).json({message:"advertisement deleted"}))
        .catch(error=>res.status(400).json(error))
}

exports.allAdvertisement =(req,res,next)=>{
    Advertisement.findAll({
        attributes:attributes,
        include:[
            {
                model:User,
                attributes:['id','name','age','email','phone','picture']
            },
            {
                model:Type,
                attributes:['id','name']
            },
            {
                model:Advantage,
                attributes:['id','name']
            },
            {
                model:Tag,
                attributes:['id','name']
            }
        ]
    }).then(data=>{
        res.status(200).json({data})
    }).catch(error=>res.status(400).json({error}));
}


exports.searchAdvertisement =(req,res,next)=>{
    const search =`%${req.params.q}%`;
    Advertisement.findAll({
        order:[
            ['title', 'ASC'],
        ],
        attributes,
        include:[
            {
                model:User,
                attributes:['id','name','age','email','phone','picture']
            },
            {
                model:Type,
                attributes:['id','name']
            },
            {
                model:Advantage,
                attributes:['id','name']
            },
            {
                model:Tag,
                attributes:['id','name']
            }
        ],
        where:{
            [Op.or]:[
                {
                    title:{
                        [Op.like]:search
                    }
                },
                {
                    description:{
                        [Op.like]:search
                    }
                },
                {
                    price:{
                        [Op.like]:search
                    }
                }
            ]

        }
    }).then(data=>res.status(200).json({data}))
        .catch(error=>console.log(error))
}