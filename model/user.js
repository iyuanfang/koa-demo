const mongoose=require('../common/mongoose');

const Schema=mongoose.Schema;

const UserSchema=Schema({
    userId:String,
    name:String,
    password:String
});

const User=mongoose.model('user',UserSchema);

module.exports=User;