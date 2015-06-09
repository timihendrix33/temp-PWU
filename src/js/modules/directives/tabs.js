App.directive('ibmDyntabs', function() {
  return {   
    restrict: 'C',
    scope: true,
    //templateUrl:'/app/views/templates/add-note.html',
    link: function(scope, element, attribute) {
    	var tabLinks = $('.ibm-tabs li a',element);
    	var tabs = $('.ibm-container-body .ibm-tabs-content',element);

    	function activeTab(link,active){
			tabLinks.parent().removeClass('ibm-active');
			tabs.hide();

			active.show();
			link.parent().addClass('ibm-active');
    	}


      tabLinks.on('click',function(){
      	activeTab($(this),$($(this).attr('href')))
      });
      activeTab($(tabLinks[0]),$(tabs[0]))
    }
   };
});