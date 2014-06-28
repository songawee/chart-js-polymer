myApp.config(function($stateProvider, $urlRouterProvider){

  $urlRouteProvider.otherwise("/state1");

  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/test.html",
      controller: "HomePageController as controller"
    })
});
