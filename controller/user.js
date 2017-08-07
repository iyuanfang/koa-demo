const router=require('koa-router')();
const bodyParser=require('koa-bodyparser');
router.use(bodyParser());

router.get('/user/:id',async(ctx)=>{
    var id=ctx.params.id;
    ctx.body='user:'+id;
    console.log('Process user');

});

router.get('/users',async(ctx)=>{
    ctx.body='users';
    console.log('Process users');
})

router.get('/user',async(ctx) =>{
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
        <p><a href="/user">Try again</a></p>`;
    }
});

router.get('/',async(ctx)=>{
    ctx.body='index';

});

module.exports=router.routes();

