const koa= require('koa');
const app= new koa();

var routers=require('./controller/routers');

routers(app);

app.listen(3000);
console.log('start 3000');
