app.factory('data' , ['$http' , function($http){
	return {
		user : {
			signin : function(userName , userPassword , isMatch){
				return $http.post('/api/user/signin' , {
					userName : userName , userPassword : userPassword , isMatch : isMatch
				})
			},
			signup : function(userName  ,userPassword, userEmail){
				return $http.post('api/user/signup' , {
					userName : userName , userPassword : userPassword , userEmail : userEmail
				})
			}
		},
		category : {
			showCategory : function(){
				return $http.get('/api/category/showCategory',{

				})
			},
			add : function(title){
				return $http.post('/api/admin/newCategory' , {
					title : title 
				})
			},
			updata : function(id){
				return $http.post('/api/category/updata/:id' , {
					id : id
				})
			}
		}
	}
}])