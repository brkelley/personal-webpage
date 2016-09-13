(function() {

    var appConfig = function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'script/home/home.html'
            })

            .state('resume', {
                url: '/resume',
                template: '<h1>Resume!</h1>'
            })

            .state('about me', {
                url: '/about-me',
                template: '<h1>About Me!</h1>'
            })

            .state('projects', {
                url: '/projects',
                template: '<h1>Projects!</h1>'
            })

            .state('ems 480', {
                url: '/ems-480',
                template: '<h1>EMS 480!</h1>'
            })

    };

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular.module('brendankelley', ['ui.router', 'HomeModule'])

        .config(appConfig);

})();