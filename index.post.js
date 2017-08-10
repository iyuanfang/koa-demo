const koa= require('koa');
const app= new koa();

const router=require('koa-router')();

const bodyParser=require('koa-bodyparser');
app.use(bodyParser());


// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next();
    console.log(`Process ${ctx.request.url}`);
    
});

router.get('/user/:id',async(ctx)=>{
    var id=ctx.params.id;
    ctx.body='user:'+id;
    console.log('Process user');

});

router.get('/user/',async(ctx) =>{
    ctx.response.body = `<h1>Index</h1>
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
        <p><a href="/user/">Try again</a></p>`;
    }
});


router.get('/',async(ctx)=>{
    ctx.body='index';

});

app.use(router.routes());

app.listen(3001);
console.log('start 3000');