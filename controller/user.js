const router=require('koa-router')();
const userService=require('../service/userService');

//查询单个用户
router.get('/user/:id',async(ctx)=>{
    var id=ctx.params.id;
    var user=await userService.getUser({userId:id});
    ctx.body=user;
    console.log('Process user');

});

//查询用户列表
router.get('/users',async(ctx)=>{
    users=await userService.getUsers({});
    ctx.body=users;
    console.log('Process users');
})

//删除用户
router.get('/user/delete/:id',async(ctx)=>{
    var id=ctx.params.id;
    await userService.deleteUser(id);
    ctx.body='del user id:'+id;
    console.log('Delete user,id=' +id);
})

//更新用户
router.post('/user/update',async(ctx)=>{    
    var userJson=ctx.request.body;    
    //update user
    const user=await userService.updateUser(userJson);
    ctx.body='更新成功';
    console.log('Update user,id='+user.userId+'name='+user.name+',password='+user.password);
})

////创建用户
router.post('/user/save',async(ctx)=>{
    var userJson=ctx.request.body;    
    //save user
    const user=userService.saveUser(userJson);
    ctx.body='注册成功';
    console.log('Insert user,id='+user.userId+'name='+user.name+',password='+user.password);
})

//用户表单
router.get('/user',async(ctx) =>{
    ctx.response.body = `<h1>User</h1>
        <form action="/user/save" method="post">
            <input type="hidden" name="userId" value="1">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.get('/',async(ctx)=>{
    ctx.body='index';

});

module.exports=router.routes();

