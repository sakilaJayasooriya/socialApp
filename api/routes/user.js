const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=require('../../models/user');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'get request for user/'
    });
});
router.post('/',(req,res,next)=>{
    const user=new User({
        _id:new mongoose.Types.ObjectId(),
        firebaseId:req.body.firebaseId,
        email:req.body.email,
        phone:req.body.phone,
        isVarifiedUser:req.body.isVarifiedUser,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        birthday:req.body.birthday, 
        country:req.body.country,
        city:req.body.city,
        recentlyActive:req.body.recentlyActive, 
        personality:req.body.personality,
        sociability:req.body.sociability,
        bodyType:req.body.bodyType,
        height:req.body.height,
        weight:req.body.weight,
        hairColor:req.body.hairColor,
        eyeColor:req.body.eyeColor,
        education:req.body.education,
        monthlyIncome:req.body.monthlyIncome,
        vehicle:req.body.vehicle,
        smoking:req.body.smoking,
        drinking:req.body.drinking,
        biggestAchementInLife:req.body.biggestAchementInLife
    });
    user
        .save()
        .then(result=>{
            //console.log(result);
            res.status(201).json({
                status:'success',
                message:'success create new user',
                data:user
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                status:'failed',
                message:'create new user failed',
                error:err
            });
        });
    
});
router.get('/:uID',(req,res,next)=>{
    const uID=req.params.uID;
    User.findOne({"firebaseId":uID})
        .exec()
        .then(doc=>{
            //console.log(doc);
            if (doc) {
                res.status(200).json({
                    status:'success',
                    message:'user by fairbase id',
                    data:doc
                });
            } else {
                res.status(404).json({
                    status:'failed',
                    message:'user not found',
                    error:'user not found',
                });
            }
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                status:'failed',
                message:'Failed to load data',
                error:err
            });
        });

});
router.patch('/:uID',(req,res,next)=>{
    const uID=req.params.uID;
    const updateOps={};
    for(const op of req.body){
        updateOps[op.propName]=op.value;
    }
    User.update({"firebaseId":uID},{ $set:updateOps})
        .exec()
        .then(result=>{
            //console.log(doc);
            res.status(200).json({
                status:'success',
                message:'User Updated',
                data:result
            });
            
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                status:'failed',
                message:'Update data Failed',
                error:err
            });
        });
});
router.delete('/:uID',(req,res,next)=>{
    const uID=req.params.uID;
    User.deleteMany({"firebaseId":uID})
        .exec()
        .then(result=>{
            res.status(200).json({
                status:'success',
                message:'user removed by fairbase id',
                data:result
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                status:'failed',
                message:'Failed to Remove User',
                error:err
            });
        });
});

module.exports=router;