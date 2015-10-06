angular
    .module('myApp', [])
    .controller('myController', myController)
;

function myController($http) {
    var vm = this;
    $http.get("http://angularfox.com/data-api/test-data-1.php")
        .success(function (response) {vm.names = response.records;});
    vm.predicate = 'name';
    vm.reverse = true;
    vm.order = order;

    function order(predicate) {
        vm.reverse = (vm.predicate === predicate) ? !vm.reverse : false;
        vm.predicate = predicate;
    }
}