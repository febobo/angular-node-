var Category = require('../modules/category')

exports.index = function(req , res){
	Category.find({})
	.exec(function(err , category){
		if(err){
			console.log(err)
		}else{
			res.render('index',{
				title : 'index',
				category : category
			})
		}
	})

}