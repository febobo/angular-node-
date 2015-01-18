app.controller('adminController',function($scope){
	var vm = $scope.vm = {};
	vm.group = [
		{'href' : '/category' , 'title' :'网站栏目管理'},
		{'href' : '/' , 'title' :'网站文章管理'},
		{'href' : '/' , 'title' :'待审核文章管理'},
		{'href' : '/' , 'title' :'网站会员管理'},
		{'href' : '/' , 'title' :'网站评论管理'},
	]
}).controller('category' ,['$scope' , 'data', function($scope,data){
	var vm = $scope.vm = {
		show_error : false,
		category : {}
	};
	vm.page = {
		size : 5,
		index :1
	}
	vm.listInfo = [
		{'width':'30%','title' :'标题'},
		{'width':'30%','title' :'时间'},
		{'width':'20%','title' :'状态'},
		{'width':'10%','title' :'编辑'},
		{'width':'10%','title' :'操作'},
	]
	
	vm.showCategory = function(){
		data.category.showCategory()
		.success(function(data){
			vm.category = data.category ;
			console.log(data)
		})
		.error(function(data){
			console.log(data)
		})
	}
	vm.showCategory();
	vm.addcategory = function(form , category){
		console.log(category)
		vm.show_error = true;
		form.$setDirty();
		if(form.$valid){
			data.category.add(category.title)
			.success(function(data){
				window.location.href = 'category'
			}).error(function(data){

			})
		}
	}
	vm.updataCategory = function(id){
		console.log(id)
	}

}])
