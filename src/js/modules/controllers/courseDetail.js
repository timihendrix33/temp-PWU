App.controller('courseDetailController',function($scope,$rootScope,ngDialog){

	$rootScope.breadCrumb = {
		text:"Cloud Readiness Roadmap",
		url:"/#/roadmap"
	}

	$scope.timeStats = {
		duration:120,
		timeSpent:45,
		timeLeft:45
	}
	$scope.title = 'Cloud Defined';
	$scope.chapters = [
		{
			'class':'fa-chevron-right complete',
			'tip':'try this out'
		},
		{
			'class':'fa-chevron-right complete',
			'tip':'try this out'
		},
		{
			'class':'fa-chevron-right',
			'tip':'Chapter 3: What is Cloud'
		},
		{
			'class':'fa-chevron-right',
			'tip':'try this out'
		},
		{
			'class':'fa-check end',
			'tip':'Survey: What you\'ve learned'
		}
	]


$scope.clickToOpen = function (template) {
		var templateURL = '/app/views/templates/overlays/ask-question.html';
		if(template=='email')templateURL = '/app/views/templates/overlays/email-course.html';
        ngDialog.open({
        	template:templateURL,
        	scope: $scope
        });
    };

	$scope.instructor = {
		name:'Ted Hatcher',
		title:'Sales Manager',
		email:'ted.hatcher@ibm.com',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed t, consectetur adipisicing elit, sed ',
		image:'/images/course-detail/profile-image.png'
	}

	$scope.relatedTags = {
		'Magna':'link',
		'Elusmod':'link',
		'Elusmod':'link',
		'Elusmod':'link',
		'Elusmod':'link'
	}

	$scope.rating = {
		ratings:25,
		stars:{
			star1:1,
			star2:1,
			star3:.5,
			star4:0,
			star5:0
		}
	}
	$scope.rating.text = ($scope.rating.ratings==1 ? $scope.rating.ratings + ' Rating' : $scope.rating.ratings + ' Ratings');
	if($scope.rating.ratings==0)$scope.rating.stars = {
			star1:0,
			star2:0,
			star3:0,
			star4:0,
			star5:0
	}
	$scope.relatedContent = [
		{
			title:'Identifying opportunities for cloud infrastucture',
			difficulty:'Foundational & Intermediate',
			duration:60,
			remaining:42,
			cardType:'video',
			description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			tags:[{
				name:'magna',
				link:'link'
			}],
			chapters:[
					{
						'class':'fa-chevron-right complete',
						'tip':'try this out'
					},
					{
						'class':'fa-chevron-right complete',
						'tip':'try this out'
					},
					{
						'class':'fa-chevron-right complete',
						'tip':'Chapter 3: What is Cloud'
					},
					{
						'class':'fa-chevron-right complete',
						'tip':'try this out'
					},
					{
						'class':'fa-check end',
						'tip':'Survey: What you\'ve learned'
					}],
				},
		{
			title:'Celerisque',
			difficulty:'Advanced',
			duration:60,
			remaining:60,
			cardType:'lecture',
			description:'Greek Text',
			tags:[{
				name:'Nula',
				link:'link'
			},{
				name:'Maxima',
				link:'link'
			}],
			chapters:[
				{
					'class':'fa-chevron-right',
					'tip':'try this out'
				},
				{
					'class':'fa-chevron-right',
					'tip':'try this out'
				},
				{
					'class':'fa-chevron-right',
					'tip':'Chapter 3: What is Cloud'
				},
				{
					'class':'fa-chevron-right',
					'tip':'try this out'
				},
				{
					'class':'fa-check end',
					'tip':'Survey: What you\'ve learned'
				}
			]
		},
		{
			title:'IBM Systems CASE for power sales',
			difficulty:null,
			duration:60,
			remaining:60,
			cardType:'external',
			description:'Greek Text',
			tags:[{
				name:'Nula',
				link:'link'
			},{
				name:'Maxima',
				link:'link'
			}],
			chapters:[
				{
					'class':'fa-chevron-right',
					'tip':'try this out'
				},
				{
					'class':'fa-chevron-right',
					'tip':'try this out'
				},
				{
					'class':'fa-chevron-right',
					'tip':'Chapter 3: What is Cloud'
				},
				{
					'class':'fa-chevron-right',
					'tip':'try this out'
				},
				{
					'class':'fa-check end',
					'tip':'Survey: What you\'ve learned'
				}
			]
		},
		{
			title:'Cloud Readiness',
			difficulty:null,
			duration:60,
			remaining:60,
			cardType:'roadmap',
			description:'Greek Text',
			tags:[{
				name:'Nula',
				link:'link'
			},{
				name:'Maxima',
				link:'link'
			}],
			chapters:[
				{
					'class':'fa-chevron-right',
					'tip':'try this out'
				},
				{
					'class':'fa-chevron-right',
					'tip':'try this out'
				},
				{
					'class':'fa-chevron-right',
					'tip':'Chapter 3: What is Cloud'
				},
				{
					'class':'fa-chevron-right',
					'tip':'try this out'
				},
				{
					'class':'fa-check end',
					'tip':'Survey: What you\'ve learned'
				}
			]
		}
	];



 		$scope.showHideCarousel = function(show){
 			if(show){
 				$('.carousel').attr('rn-carousel','true');
 			}else{
 				$('.carousel').removeAttr('rn-carousel');
 				$('.carousel li').attr('style','');
 			}
 		}

 		$scope.isMobile = function(){
 			return ($(window).width() < 768);
 		}

 		$scope.showHideCarousel($scope.isMobile());

        $scope.$on('window::resize', function() {
        	$scope.showHideCarousel($scope.isMobile());
        });
		$scope.slideIndex = 0;
        $scope.$watch('carouselIndex', function (newIndex, oldIndex) {
        	console.log(newIndex,oldIndex);
        });




	$scope.courseDetails = {
		title: $scope.title,
		format:'video',
		timeStats:$scope.timeStats,
		instructor : $scope.instructor,
		rating : $scope.rating,
		chapters : $scope.chapters,
		relatedTags : $scope.relatedTags,
		relatedContent : $scope.relatedContent
	}


});