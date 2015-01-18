var Index = require('../app/controllers/index');
var User = require('../app/controllers/user')
var Admin = require('../app/controllers/admin');
var Category = require('../app/controllers/category');
var CategoryShow = require('../app/modules/category');



module.exports = function(app){
	// console.log(app)
	app.use(function(req , res , next){
		var _user = req.session.user;
		if(_user){
			app.locals.user = _user;
		}
		CategoryShow.find({})
		.exec(function(err , category){
			if(err){
				console.log(err)
			}else{
				app.locals.category = category;
			}
		})
		return next()
	})
	// Index
	app.get('/' , Index.index)
	// User
	app.get('/signin'  , User.showSignin)
	app.post('/api/user/signin'  , User.signin)
	app.get('/signup' , User.showSignup)
	app.post('/api/user/signup' , User.signup)
	//Admin
	app.get('/admin' , Admin.admin)
	app.get('/category' , Admin.category)
	//Category
	app.post('/api/admin/newCategory' , Category.addCategory);
	app.get('/api/category/updata/:id' , Category.updataCategory)
	app.get('/api/category/showCategory' , Category.showCategory)




}