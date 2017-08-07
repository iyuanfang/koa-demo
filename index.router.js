const koa= require('koa');
const app= new koa();

const router=require('koa-router')();

router.get('/user/:id',async(ctx)=>{
    var id=ctx.params.id;
    ctx.body='user:'+id;
    console.log('Process user');

});

router.get('/',async(ctx)=>{
    ctx.body='index';

});

app.use(router.routes());

app.listen(3000);
console.log('start 3000');