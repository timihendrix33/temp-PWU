App.controller('dashboardController',function($scope,$rootScope,$timeout){	

	$rootScope.breadCrumb = false;

	function showSlide(slide){
		slide.removeClass('hiddenTop hiddenLeft');
	}

	$timeout(function(){
			showSlide($('.slide1'));
		$timeout(function(){
				showSlide($('.slide2'));
			$timeout(function(){
					showSlide($('.slide3'));
			},1500)
		},1500)
	},1500)
