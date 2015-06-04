/**=========================================================
 * Module: addNote
 =========================================================*/

App.directive('addNote', function() {
  return {   
    restrict: 'E',
    scope: true,
    templateUrl:'/app/views/templates/add-note.html',
    link: function(scope, element, attribute) {
      var note = $('.addNote');
      var cancel = $('a');
      element.on('click',function(){
          element.toggleClass('open');
      });
      cancel.on('click',function(){
          $(note).toggleClass('open');
      });
    }
   };
});