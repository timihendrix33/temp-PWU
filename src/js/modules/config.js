/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/

App.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider',
function ($stateProvider, $locationProvider, $urlRouterProvider, helper) {
  'use strict';

  // Set the following to true to enable the HTML5 Mode
  // You may have to set <base> tag in index and a routing configuration in your server
  $locationProvider.html5Mode(false);

  // default route
  $urlRouterProvider.otherwise('/detail');

  // 
  // Application Routes
  // -----------------------------------   
  $stateProvider
    .state('home', {
        url: '/',
        controller: 'AppController',
        templateUrl: helper.basepath('app.html'),
        resolve: helper.resolveFor('fastclick', 'modernizr', 'fontawesome')
 
    })
    .state('detail', {
        url: '/detail',
        controller: 'courseDetailController',
        templateUrl: helper.basepath('detail.html'),
        resolve: helper.resolveFor('fastclick', 'modernizr', 'fontawesome','angular-carousel','progressbar')
 
    })
    .state('roadmap', {
        url: '/roadmap',
        controller: 'roadmapController',
        templateUrl: helper.basepath('roadmap.html'),
        resolve: helper.resolveFor('fastclick', 'modernizr', 'fontawesome')
 
    })
    .state('dashboard', {
        url: '/dashboard',
        controller: 'dashboardController',
        templateUrl: helper.basepath('dashboard.html'),
        //resolve: helper.resolveFor('fastclick', 'modernizr', 'fontawesome')
 
    })
    // 
    // CUSTOM RESOLVES
    //   Add your own resolves properties
    //   following this object extend
    //   method
    // ----------------------------------- 
    // .state('app.someroute', {
    //   url: '/some_url',
    //   templateUrl: 'path_to_template.html',
    //   controller: 'someController',
    //   resolve: angular.extend(
    //     helper.resolveFor(), {
    //     // YOUR RESOLVES GO HERE
    //     }
    //   )
    // })
    ;


}]).config(['$ocLazyLoadProvider', 'APP_REQUIRES', function ($ocLazyLoadProvider, APP_REQUIRES) {
    'use strict';

    // Lazy Load modules configuration
    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
      modules: APP_REQUIRES.modules
    });

}]).config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ( $controllerProvider, $compileProvider, $filterProvider, $provide) {
      'use strict';
      // registering components after bootstrap
      App.controller = $controllerProvider.register;
      App.directive  = $compileProvider.directive;
      App.filter     = $filterProvider.register;
      App.factory    = $provide.factory;
      App.service    = $provide.service;
      App.constant   = $provide.constant;
      App.value      = $provide.value;

}]).config(['$translateProvider', function ($translateProvider) {


}]).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 500;
    cfpLoadingBarProvider.parentSelector = '.wrapper > section';
}]).config(['$tooltipProvider', function ($tooltipProvider) {

    $tooltipProvider.options({appendToBody: true});

}])
;
