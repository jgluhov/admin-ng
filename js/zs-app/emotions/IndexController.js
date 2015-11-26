function EmotionsIndexController($scope, $sce, $compile, $http, $resource, Constants, DTOptionsBuilder, DTColumnBuilder) {
  var self = $scope;
  $scope.delete = function () {
    console.log('Hello')
  };
  var languages = 'en,ru,es,de';

  $scope.dtOptions = DTOptionsBuilder.newOptions()
    .withOption(
      'ajax', {
        url: Constants.domains.production + 'emotions_datatable?token=' + Constants.token + '&lang_codes=' + 'ru,es,de',
        type: 'POST'
      })
    .withOption('rowCallback', rowCallback)
    .withDataProp('data')
    .withOption('processing', true)
    .withOption('serverSide', true)
    .withPaginationType('full_numbers');

  function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
    console.log(nRow);
    return $compile(nRow)(self)
  }

  var length = languages.split(',').length + 1;


  var columns = [];

  _.forEach(languages.split(','), function(lang_code) {
    columns.push(DTColumnBuilder.newColumn(lang_code).withTitle('Emotion').notSortable().renderWith(function (data, type, full, meta) {
      if(_.isUndefined(data)) return '';
      return data.name
    }));
    columns.push(DTColumnBuilder.newColumn(lang_code).withTitle('Synonyms').notSortable().renderWith(function (data, type, full, meta) {
      if(_.isUndefined(data)) return '';
      if(_.isUndefined(data.synonyms)) return '';
      return _.map(data.synonyms, function (item) {
          return item.name;
        }).join(',');
    }));
    columns.push(DTColumnBuilder.newColumn(lang_code).withTitle('Antonym').notSortable().renderWith(function (data, type, full, meta) {
      if(_.isUndefined(data)) return '';
      if(_.isUndefined(data.antonym)) return '';
      return data.antonym.name;
    }));
    columns.push(DTColumnBuilder.newColumn(lang_code).withTitle('Syn. for ant.').notSortable().renderWith(function (data, type, full, meta) {
      if(_.isUndefined(data)) return '';
      if(_.isUndefined(data.antonymSynonyms)) return '';
      return _.map(data.antonymSynonyms, function (item) {
        return item.name;
      }).join(',');
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