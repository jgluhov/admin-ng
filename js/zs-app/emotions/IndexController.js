function EmotionsIndexController($scope, $http, $resource, DTOptionsBuilder, DTColumnBuilder) {

  $scope.dtOptions = DTOptionsBuilder.newOptions()
    .withOption('ajax', {
      url: 'http://192.168.0.120:8011/emotions_datatable',
      type: 'GET'
    })
    .withDataProp('data')
    .withOption('processing', true)
    .withOption('serverSide', true)
    .withPaginationType('full_numbers');

  $scope.dtColumns = [
    DTColumnBuilder.newColumn('name').withTitle('Name'),
    DTColumnBuilder.newColumn('synonyms').withTitle('Synonyms').renderWith(function(data, type, full) {
      if(_.isUndefined(data)) return '';
      var str = '';
      _.forEach(data, function(item) {
        str += item.name + ' '
      });
      return str;
    }),
    DTColumnBuilder.newColumn('antonym').withTitle('Antonym').renderWith(function(data, type, full) {
      if(_.isUndefined(data)) return '';
      return data.name
    }),
    DTColumnBuilder.newColumn('color').withTitle('Color').renderWith(function(data, type, full) {
      if(_.isUndefined(data)) return '';
      return data
    }),
    DTColumnBuilder.newColumn('element').withTitle('Element').renderWith(function(data, type, full) {
      if(_.isUndefined(data)) return '';
      return data
    }),
    DTColumnBuilder.newColumn('power').withTitle('Power').renderWith(function(data, type, full) {
      if(_.isUndefined(data)) return '';
      return data
    }),
    DTColumnBuilder.newColumn('lang').withTitle('Language').renderWith(function(data, type, full) {
      if(_.isUndefined(data)) return '';
      return data.code
    })
  ];

}
