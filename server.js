const nunjucks = require('nunjucks');
const express = require('express');
const dataPlans = require("./db/plans");
const server = express();
const route = server;


// Server conf
const PORT = 5001;
const HOST = '127.0.0.1';

server.use(express.static('public/'));
server.set('view engine', 'njk');
nunjucks.configure('view', {
    express: server
});

server.listen(PORT, function(){
    console.log(`Server is run! http://${HOST}:${PORT}`);
});


route.get("/", function(req, res){
    return res.render('index', {plans: dataPlans});
});