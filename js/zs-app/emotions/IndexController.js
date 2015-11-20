function EmotionsIndexController($scope, $sce, $compile, $http, $resource, Constants, DTOptionsBuilder, DTColumnBuilder) {
  var self = $scope;
  $scope.delete = function () {
    console.log('Hello')
  };

  $scope.dtOptions = DTOptionsBuilder.newOptions()
    .withOption(
      'ajax', {
        url: Constants.domains.production + 'emotions_datatable?token=' + Constants.token,
        type: 'GET'
      })
    .withOption('rowCallback', rowCallback)
    .withDataProp('data')
    .withOption('processing', true)
    .withOption('serverSide', true)
    .withPaginationType('full_numbers');

  function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
    return $compile(nRow)(self)
  }

  $scope.dtColumns = [
    DTColumnBuilder.newColumn('active').withTitle('Active').notSortable().renderWith(function (data, type, full, meta) {
      return '<button class="btn btn-default" ng-click="delete()">del</button>';
    }),
    DTColumnBuilder.newColumn('name').withTitle('Name').renderWith(function (data, type, full) {
      return data
    }),
    DTColumnBuilder.newColumn('synonyms').withTitle('Synonyms').renderWith(function (data, type, full) {
      if (_.isUndefined(data)) return '';
      return _.map(data, function (item) {
        return item.name;
      }).join(',');
    }),
    DTColumnBuilder.newColumn('antonym').withTitle('Antonym').renderWith(function (data, type, full) {
      if (_.isUndefined(data)) return '';
      return data.name
    })
    //DTColumnBuilder.newColumn('antonymSynonyms').withTitle('Syn. for ant.').renderWith(function(data, type, full) {
    //  if(_.isUndefined(data)) return '';
    //  return _.map(data, function(item) {
    //    return item.name;
    //  }).join(',');
    //})
    //DTColumnBuilder.newColumn('color').withTitle('Color').renderWith(function(data, type, full) {
    //  if(_.isUndefined(data)) return '';
    //  return data
    //}),
    //DTColumnBuilder.newColumn('element').withTitle('Element').renderWith(function(data, type, full) {
    //  if(_.isUndefined(data)) return '';
    //  return data
    //}),
    //DTColumnBuilder.newColumn('power').withTitle('Power').renderWith(function(data, type, full) {
    //  if(_.isUndefined(data)) return '';
    //  return data
    //}),
    //DTColumnBuilder.newColumn('lang').withTitle('Language').renderWith(function(data, type, full) {
    //  if(_.isUndefined(data)) return '';
    //  return data.code
    //})
  ];

}
