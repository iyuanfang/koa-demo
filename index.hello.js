const koa= require('koa');
const app= new koa();

//hello world!
app.use(async(ctx) =>{
    ctx.body= 'hello world';
});


app.listen(3000);
console.log('start 3000');