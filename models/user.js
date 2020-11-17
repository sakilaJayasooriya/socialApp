const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firebaseId:String,
    email:String,
    phone:String,
    isVarifiedUser:Boolean,
    firstName:String,
    lastName:String,
    birthday:Date, 
    country:String,
    city:String,
    recentlyActive:Boolean, 
    personality:String,
    sociability:String,
    bodyType:String,
    height:Number,
    weight:Number,
    hairColor:String,
    eyeColor:String,
    education:String,
    monthlyIncome:Number,
    vehicle:String,
    smoking:String,
    drinking:String,
    biggestAchementInLife:String
});
module.exports=mongoose.model('users',userSchema);