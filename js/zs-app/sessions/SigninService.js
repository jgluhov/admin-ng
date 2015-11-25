function SigninService($q, $http, Constants, SessionService) {
  this.login = function (user) {
    var defer = $q.defer();

    $http.get(Constants.domains.production + 'auth?token=' + Constants.token + '&email=' + user.email + '&password=' + user.password)
      .then(function (res) {
        SessionService.newSession(res.data);
        defer.resolve(user);
      }).catch(function(err) {
      defer.reject(err);
    });

    return defer.promise;
  }
}
