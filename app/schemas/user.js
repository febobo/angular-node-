var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT = 10 ;
var UserSchema = new mongoose.Schema({
	userName : {type : String},
	userPassword : {type : String},
	userEmail : {type : String},
	role : {
		type : Number,
		default : 0
	},
	meta : {
		createAt : {
			type : Date,
			default : Date.now()
		},
		updateAt : {
			type : Date,
			default : Date.now()
		}
	}
})
UserSchema.pre('save' , function(next){//存储的时候并行加密
	var user = this;
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	}else{
		this.meta.updateAt = Date.now();
	}
	bcrypt.genSalt(SALT , function(err , salt){
		if(err){
			return next(err);
		}
		if(user.userPassword){
			bcrypt.hash(user.userPassword , salt , function(err , hash){
				if(err){
					return next(err);
				}else{
					user.userPassword = hash;
					next();
				}
			})
		}
	})
})

UserSchema.methods = {
	comparePassword : function(_password , cb){ //登陆密码校验
		bcrypt.compare(_password , this.userPassword , 
			function(err , isMatch){
				if(err){
					return cb(err);
				}else{
					cb(null , isMatch);
				}
			}
		)
	}
}

UserSchema.statics = {
	fetch : function(cb){
		return this.find({}).sort('meta.updateAt').exec(cb);
	},
	findById : function(id , cb){
		return this.findOne({_id : id}).sort('meta.updateAt').exec(cb);
	}
}
module.exports = UserSchema;









