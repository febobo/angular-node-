var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var ObjectId = Schema.types.ObjectId;

var CategorySchema = new Schema({
	title : String,
	// lists : [{
	// 	type : ObjectId,
	// 	// ref : 'List'
	// }],
	meta : {
		type : Date,
		default : Date.now()
	},
	updateAt : {
		type : Date,
		default : Date.now()
	}
})

CategorySchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now()
	}else{
		this.meta.updateAt = Date.now();
	}
	next()
})
CategorySchema.statics = {
	fetch : function(cb){ //取出所有数据
		return this.find({}).sort('meta.updateAt').exec(cb);
	},
	findById : function(id,cb){ //取出所有数据
		return this.findOne({_id : id}).sort('meta.updateAt').exec(cb);
	}	
}
module.exports = CategorySchema;