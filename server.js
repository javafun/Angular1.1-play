/**
 * Created by vincent on 20/08/15.
 */


var express = require('express'),
    routes = require('./routes'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    serveStatic = require('serve-static'),
    //multer = require('multer'),
    errorHandler = require('errorHandler'),
    http = require('http'),
    path = require('path');



var app = express();

var env = process.env.NODE_ENV || 'development';

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').__express);
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(multer());
app.use(methodOverride());

app.use(serveStatic(path.join(__dirname, 'public')));


// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

var congoServer = require("./lib/mongoapi_server")(app);
app.get('/', routes.index);


var server = http.createServer(app);
server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

//var port = process.env.PORT || 3000;
//app.listen(port, function() {
//    console.log('Our app is running on http://localhost:' + port);
//});


