function SignupController($scope, $rootScope, Constants, SignupService) {
  $scope.submitted = false;

  $scope.submit = function (user, form) {
    if(form.$invalid) {
      $scope.submitted = true;
      return;
    }
    SignupService.signup(user)
      .then(function (res) {
        $rootScope.$state.go(Constants.root);
      }).catch(function () {
      notify({ message: 'Error', classes: 'alert-danger', templateUrl: $scope.template});
    });
  };
}