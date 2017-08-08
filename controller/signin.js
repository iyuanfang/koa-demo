const router=require('koa-router')();

router.get('/signin',async(ctx) =>{
    ctx.response.body = `<h1>User</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});


router.post('/signin',async(ctx)=>{
    var name=ctx.request.body.name ||'';
    var password=ctx.request.body.password ||'';
    console.log(`signin with name:${name},password:${password}`);
    if (name === 'koa' && password === '123456') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/signin">重新登录</a></p>
        <p><a href="/user">注册</a></p>`;
    }
});

module.exports=router.routes();