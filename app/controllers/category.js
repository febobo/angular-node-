var Category = require('../modules/category');

exports.addCategory = function(req , res ){
	var _category = req.body;
	var category = new Category(_category);
	category.save(function(err , category){
		if(err){
			console.log(err);
		}else{
			res.send({code:1 , msg: "添加成功"})
		}
	})
}
exports.updataCategory = function(req, res){
	var _id = req.params.id;
	console.log(_id);
	if(_id){
		Category.findById(_id , function(err , category){
			if(err){
				console.log(err);
			}else{
				console.log(category)
				res.send({code : 0 , category : category})
			}
		})
	}
	
}
exports.showCategory = function(req , res){
	Category.find({} , function(err , category){
		if(err){
			console.log(err)
		}else{
			res.send({code:0 , category : category})
		}
	})
}