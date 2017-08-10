const User=require('../model/user');

exports.getUser=function(query){
    return User.findOne(query).exec();
}

exports.getUsers=function(query){
    return User.find(query).exec();
}

exports.deleteUser=function(userId){
    console.log("delete user id:"+userId);
    return User.remove({userId:userId});
}

exports.saveUser=function(user){
    console.log("save user:"+JSON.stringify(user));
    return new User(user).save();
}

exports.updateUser=function(user){
    console.log("update user:"+JSON.stringify(user));
    return User.where({userId:user.userId}).update(user);
}
