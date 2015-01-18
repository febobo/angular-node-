var Category = require('../modules/category');


exports.admin = function(req ,res){
	res.render('admin' , {
		title : 'admin'
	})
}
exports.category = function(req , res){
	Category.find({})
	.exec(function(err , category){
		if(err){
			console.log(err)
		}
		console.log(category)
		res.render('category' , {
			title : 'category',
			category : category
		})
	})


}