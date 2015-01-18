var User = require('../modules/user')

exports.showSignin = function(req, res){
	res.render('signin' , {
		title: 'signin'
	})
}
exports.signin = function(req, res){
	var _user = req.body;
	console.log(_user)
	User.findOne({userName : _user.userName}, function(err , user){
		console.log(user)
		if(err){
			console.log(err);
		}
		if(!user){
			res.send({code:1 , msg : '用户不存在'})
		}
		if(user){
			user.comparePassword(_user.userPassword , function(err, isMatch){
				if(err){
					console.log(err);
				}
				if(isMatch){
					req.session.user = user;
					res.send({code:0 , msg : '恭喜您，登陆成功!'})
				}else{
					res.send({code:1 , msg : '亲,密码好像不对噢!'})
				}
			})
		}
	})
}
exports.showSignup = function(req, res){
	res.render('signup' , {
		title : 'signup'
	})
}
exports.signup = function(req, res){
	var _user = req.body;
	console.log('user:' + req.body )
	User.find({name : _user.userName} , function(err , user){
		if(err){
			console.log(err);
		}
		if(user.length){
			console.log(user.userName + '11000');
		}else{
			var user = new User(_user);
			user.save(function(err, _user){
				if(err){
					console.log(err);

				}else{
					return res.send({code: 0, data: true});
					console.log(user);
				}
			})
		}
	})
}