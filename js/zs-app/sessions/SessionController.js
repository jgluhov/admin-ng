function SessionController($scope, $http, $rootScope, $location, SessionService) {
  $rootScope.user = $scope.user = SessionService.currentUser();

  $scope.logout = function() {
    $http.delete(Constants.domains.production + 'auth?sessionId=' + SessionService.getSession() + '&token=' + Constants.token).then(function () {
      SessionService.deleteSession();
      $rootScope.user = $scope.user = SessionService.currentUser();
      $location.path('/signin');
    });
  };
}
