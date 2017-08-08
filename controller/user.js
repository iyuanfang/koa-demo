const router=require('koa-router')();

//查询单个用户
router.get('/user/:id',async(ctx)=>{
    var id=ctx.params.id;
    var name='yuanfang'+id;
    ctx.body=JSON.stringify({id:id,name:name});
    console.log('Process user');

});

//查询用户列表
router.get('/users',async(ctx)=>{
    ctx.body='users';
    console.log('Process users');
})

//删除用户
router.get('/user/del/:id',async(ctx)=>{
    var id=ctx.params.id;
    ctx.body='del user '+id;
    console.log('Delete user,id=' +id);
})

//创建或更新用户
router.post('/user',async(ctx)=>{
    var id=ctx.request.body.id ||'';
    var name=ctx.request.body.name ||'';
    var password=ctx.request.body.password ||'';
    if(id===''){
        //new user
        ctx.body='注册成功';
        console.log('Insert user,name='+name+',password='+password);
    }else{
        //update user
        ctx.body='修改用户信息成功';
        console.log('Update user,id='+id+',name='+name+',password='+password);
    }
})

//用户表单
router.get('/user',async(ctx) =>{
    ctx.response.body = `<h1>User</h1>
        <form action="/user" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.get('/',async(ctx)=>{
    ctx.body='index';

});

module.exports=router.routes();

