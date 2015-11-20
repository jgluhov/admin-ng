Constants = {
  token: 'ae33d6face3d0a8882059e2583725b786c2c4fb96e7c5805b4cdb0590292edfc',
  domains: {
    local: 'http://192.168.0.120:8011/',
    production: 'https://idemind-api.herokuapp.com/'
  }
};

angular
  .module('inspinia')
  .constant('Constants', Constants);