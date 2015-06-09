/**=========================================================
 * Module: addNote
 =========================================================*/

App.directive('addNote', function() {
  return {   
    restrict: 'E',
    scope: true,
    templateUrl:'/app/views/templates/add-note.html',
    link: function(scope, element, attribute) {
      scope.toggleNote = function(){
          element.addClass('open');
      };
      scope.openNote = function(){
          element.openNote('open');
      };
      scope.closeNote = function(){
          element.removeClass('open');
      };

    }
   };
});