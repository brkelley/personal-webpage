(function() {

    var tabCtrl = function($scope, $location) {

        $scope.activeTab = function(newTab) {
            return ('/' + newTab) === $location.path();
        }

    };

    tabCtrl.$inject = ['$scope', '$location'];

    angular.module("brendankelley").controller("TabController", tabCtrl);

})();