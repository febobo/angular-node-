app.controller('signup',['$scope' , 'data' ,function($scope , data){
        var vm = $scope.vm = {
            show_error: false,
            user: {

            }
        };

        vm.submit = function (basic_form , user) {
            console.log(user)
            vm.show_error = true;
            basic_form.$setDirty();
            if(basic_form.$valid){
                // alert("提交成功！");
                data.user.signup(user.name, user.password , user.email)
                .success(function(data){
                    if(!data.code)
                    window.location.href = '/signin'
                })
            }
        };
}]).controller('signin',['$scope' , 'data' ,function($scope , data){
        var vm = $scope.vm = {
            show_error: false,
            user: {

            }
        };

        vm.submit = function (basic_form , user) {
            vm.show_error = true;
            basic_form.$setDirty();
            if(basic_form.$valid){
                data.user.signin(user.name, user.password )
                .success(function(result){
                    console.log(result)
                    if(!result.code) window.location.href = '/'
                    if(result.code == 1){
                        alert(result.msg)
                    }else{
                        alert(result.msg)
                    }
                }).error(function(result){
                    console.log(status)
                })
            }
        };
}])