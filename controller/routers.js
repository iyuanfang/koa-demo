module.exports = function(app){
    console.log("routers");
    app.use(require('./user'));
}
