var express = require('express');
var reload = require('reload');
var app =express();
var dataFile = require('./data/data.json');
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.locals.siteTitle = 'Csgeeks';

//1
app.use(express.static('app/public'));
app.use(require('./routers/index'));
app.use(require('./routers/friends'));


//2



var Server =app.listen(app.get('port'),function(){
	console.log('listen to port '+ app.get('port'));
});



reload(Server,app);

























/*var http =require('http');
var myServer = http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type": "text/plain"});
	res.write('<h1><connection meetup</h1>');
	res.end();
});
myServer.listen(3000);
console.log('go to port 3000');*/
