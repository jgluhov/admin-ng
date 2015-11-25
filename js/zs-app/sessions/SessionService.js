'use strict';

function SessionService($rootScope, $http, Constants, localStorageService) {
  var self = this;
  self.authorize = function () {
    if (_.isNull(localStorageService.get('sessionId'))) return;

    $http.get(Constants.domains.production + 'auth?sessionId=' + self.getSession() + '&token=' + Constants.token).then(function (res) {
      var user = res.data;
      localStorageService.set('email', user.email);
      localStorageService.set('status', !_.isUndefined(user.confirmedEmail));
      localStorageService.set('sessionId', user.sessionId);
    });
  };

  self.getSession = function () {
    var id = localStorageService.get('sessionId');
    return _.isNull(id) ? '' : id;
  };

  self.currentUser = function() {
    var user =  {
      email: localStorageService.get('email'),
      status: localStorageService.get('status'),
      sessionId: localStorageService.get('sessionId')
    };
    return user;
  };

  self.newSession = function (user) {
    localStorageService.set('email', user.email);
    localStorageService.set('status', !_.isUndefined(user.confirmedEmail));
    localStorageService.set('sessionId', user.sessionId);
  };

  self.deleteSession = function () {
    localStorageService.remove('email');
    localStorageService.remove('status');
    localStorageService.remove('sessionId');
  }

}


//self.saveUser = function (user) {
//  localStorageService.set('email', user.email);
//  localStorageService.set('status', !_.isUndefined(user.confirmedEmail));
//  localStorageService.set('sessionId', user.sessionId);
//};

//self.getCurrentUser = function () {
//  return {
//    email: localStorageService.get('email'),
//    status: localStorageService.get('status'),
//    session: localStorageService.get('sessionId')
//  }
//};

//self.removeCurrentUser = function () {
//  $http.delete(commonConstants.production + 'auth?sessionId=' + self.sessionUser() + '&token=' + commonConstants.token).then(function() {
//    localStorageService.remove('email');
//    localStorageService.remove('status');
//    localStorageService.remove('sessionId');
//    $rootScope.user = null;
//  })
//};







