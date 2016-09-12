(function() {

    var appConfig = function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                template: '<h1>Hello!</h1>'
            })

            .state('resume', {
                url: '/resume',
                template: '<h1>Resume!</h1>'
            });

    };

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular.module('brendankelley', ['ui.router'])

        .config(appConfig);

})();