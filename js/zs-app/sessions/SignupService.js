function SignupService($q, $http, Constants, SessionService) {
  var self = this;
  self.signup = function (user) {
    var defer = $q.defer();

    $http.post(Constants.domains.production + 'auth?token=' + Constants.token, user).then(function (res) {
      defer.resolve(res);
      SessionService.newSession(res.data);
    }).catch(function (err) {
      defer.reject(err)
    });

    return defer.promise;
  };
}
