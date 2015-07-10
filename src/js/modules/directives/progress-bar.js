/**=========================================================
 * Module: progress Bar
 =========================================================*/

App.directive('progressBar', function(colors) {
  return {   
    restrict: 'AE',
    scope: true,
    link: function(scope, element, attribute) {

        console.log(scope);

        var moveTo = (attribute.duration - attribute.remaining) / attribute.duration;

        var circle = new ProgressBar.Circle($(element)[0], {
              color: colors.byName('ibm-orange'),
              strokeWidth: 10,
              trailColor: '#fff'
          });
          circle.animate(moveTo, {
              duration: 2500,
              easing: 'easeInOut'
          });


      }
   }
});