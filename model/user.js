const mongoose=require('../common/mongoose');

const Schema=mongoose.Schema;

const UserSchema=Schema({
    userId:String,
    name:String,
    password:String
});

//第三个参数才是指定创建的表名
const User=mongoose.model('user',UserSchema,'user');

module.exports=User;