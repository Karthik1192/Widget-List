angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'serialNumber'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchColor   = '';     // set the default search/filter term
  
  // create the wserialNumberget list 
  $scope.list = [
    { color: 'Red', date: '2006-01-01', serialNumber: 1 },
    { color: 'Blue', date: '2007-01-02', serialNumber: 2 },
    { color: 'Red', date: '2006-01-03', serialNumber: 3 },
    { color: 'Green', date: '2009-01-04', serialNumber: 4 },
    { color: 'Green', date: '2011-01-05', serialNumber: 5 },
    { color: 'Yellow', date: '2006-02-01', serialNumber: 6 },
    { color: 'Orange', date: '2007-03-01', serialNumber: 7 },
    { color: 'White', date: '2008-04-01', serialNumber: 8 },
    { color: 'Black', date: '2009-05-01', serialNumber: 9 },
    { color: 'Pink', date: '2010-06-01', serialNumber: 10 },
    { color: 'Purple', date: '2011-07-01', serialNumber: 11 },
    { color: 'Voilet', date: '2012-08-01', serialNumber: 12 }
  ];
  
});