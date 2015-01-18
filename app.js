var express = require('express') ;
var path = require('path') ;
var mongoose = require('mongoose');
var port = process.env.POTR || 3000;
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
app.locals.moment = require('moment')
mongoose.connect('mongodb://localhost/febobo')
app.set('views','./app/views/pages'); 
app.set('view engine' ,'jade' ); //设置默认模板引擎
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
	secret : 'user'
}))
app.use(express.static(path.join(__dirname,'public'))); //配置静态资源
if('development' === app.get('env')){
	app.set('showStackError' ,true);
	app.use(logger(':method :url :status'));
	app.locals.pretty = true;
	mongoose.set('debug' , true);
}
app.listen(port);
// console.log(app)
require('./config/routes')(app);
console.log(port)