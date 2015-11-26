function EmotionsIndexController($scope, $sce, $compile, $http, $resource, Constants, DTOptionsBuilder, DTColumnBuilder) {
  var self = $scope;
  $scope.delete = function () {
    console.log('Hello')
  };
  var languages = 'en,ru,de,fr,es';

  $scope.dtOptions = DTOptionsBuilder.newOptions()
    .withOption(
      'ajax', {
        url: Constants.domains.production + 'emotions_datatable?token=' + Constants.token + '&lang_codes=' + languages,
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

  var length = languages.split(',').length;


  var columns = [];

  _.forEach(languages.split(','), function(lang_code) {
    columns.push(DTColumnBuilder.newColumn('active').withTitle('Status').notSortable().renderWith(function (data, type, full, meta) {
      return data === true ? '<span class="badge">active</span>' : '<span class="badge">inactive</span>';
    }));
    columns.push(DTColumnBuilder.newColumn('active').withTitle('Status').notSortable().renderWith(function (data, type, full, meta) {
      return data === true ? '<span class="badge">active</span>' : '<span class="badge">inactive</span>';
    }));
    columns.push(DTColumnBuilder.newColumn('active').withTitle('Status').notSortable().renderWith(function (data, type, full, meta) {
      return data === true ? '<span class="badge">active</span>' : '<span class="badge">inactive</span>';
    }));
    columns.push(DTColumnBuilder.newColumn('active').withTitle('Status').notSortable().renderWith(function (data, type, full, meta) {
      return data === true ? '<span class="badge">active</span>' : '<span class="badge">inactive</span>';
    }));
  });

  $scope.dtColumns = columns;


  //$scope.dtColumns = [
  //  DTColumnBuilder.newColumn('active').withTitle('Status').notSortable().renderWith(function (data, type, full, meta) {
  //    return data === true ? '<span class="badge">active</span>' : '<span class="badge">inactive</span>';
  //  })
    //DTColumnBuilder.newColumn('name').withTitle('Name').renderWith(function (data, type, full) {
    //  return data
    //}),
    //DTColumnBuilder.newColumn('synonyms').withTitle('Synonyms').renderWith(function (data, type, full) {
    //  if (_.isUndefined(data)) return '';
    //  return _.map(data, function (item) {
    //    return item.name;
    //  }).join(',');
    //}),
    //DTColumnBuilder.newColumn('antonym').withTitle('Antonym').renderWith(function (data, type, full) {
    //  if (_.isUndefined(data)) return '';
    //  return data.name
    //}),
    //DTColumnBuilder.newColumn('antonymSynonyms').withTitle('AntonymSynonyms').renderWith(function (data, type, full) {
    //  if (_.isUndefined(data)) return '';
    //  return _.map(data, function (item) {
    //    return item.name;
    //  }).join(',');
    //})
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
  //];

}

//
//$scope.dtOptions = DTOptionsBuilder.newOptions()
//  .withOption(
//  'ajax', {
//    url: Constants.domains.production + 'emotions_datatable?token=' + Constants.token,
//    type: 'GET'
//  })
//  .withOption('rowCallback', rowCallback)
//  .withDataProp('data')
//  .withOption('processing', true)
//  .withOption('serverSide', true)
//  .withPaginationType('full_numbers');
//
//function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
//  return $compile(nRow)(self)
//}
//
//$scope.dtColumns = [
//  DTColumnBuilder.newColumn('active').withTitle('Active').notSortable().renderWith(function (data, type, full, meta) {
//    return '<button class="btn btn-default" ng-click="delete()">del</button>';
//  }),