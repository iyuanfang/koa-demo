const koa= require('koa');
const app= new koa();

app.use(async(ctx) =>{
    let url=ctx.request.url;
    let query=ctx.query;
    let queryString=ctx.querystring;
    let method=ctx.method;

    ctx.body={
        url,
        method,
        query,
        queryString
    }
})

app.listen(3000);
console.log('start 3000');