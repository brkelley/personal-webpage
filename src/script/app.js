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
            })

            .state('work experience', {
                url: '/work-experience',
                template: '<h1>Work Experience!</h1>'
            })

            .state('github', {
                url: '/github',
                template: '<h1>Github!</h1>'
            })

            .state('classes', {
                url: '/classes',
                template: '<h1>Classes!</h1>'
            })

    };

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular.module('brendankelley', ['ui.router', 'HomeModule'])

        .config(appConfig);

})();