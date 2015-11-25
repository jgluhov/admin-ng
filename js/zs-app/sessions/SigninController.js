function SigninController($scope, $rootScope, SigninService, Constants, notify) {
  $scope.submitted = false;

  $scope.template = 'views/common/notify.html';

  $scope.submit = function (user, form) {
    if(form.$invalid) {
      $scope.submitted = true;
      return;
    }

    SigninService.login(user)
      .then(function () {
        $rootScope.$state.go(Constants.root);
      })
      .catch(function (err) {
        notify({ message: 'Error', classes: 'alert-danger', templateUrl: $scope.template});
      });
  };
}
