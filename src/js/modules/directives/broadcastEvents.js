App.directive('broadcastEvents', function($window) {
  return {
  	restrict:'A',
    link: function(scope) {
      angular.element($window).on('resize', function(e) {
        // Namespacing events with name of directive + event to avoid collisions
        scope.$broadcast('window::resize');
      });
      angular.element($window).on('scroll', function(e) {
        // Namespacing events with name of directive + event to avoid collisions
        scope.$broadcast('window::scroll');
      });
    }
  }
});