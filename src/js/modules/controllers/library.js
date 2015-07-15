App.controller('libraryController',function($scope,$rootScope){	
	// $rootScope.breadCrumb = {
	// 	text:"Cloud Readiness Roadmap",
	// 	url:"/#/roadmap"
	// }

	$scope.roadmapCards = [
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

	$scope.library = {
		title: $scope.title,
		format:'video',
		timeStats:$scope.timeStats,
		instructor : $scope.instructor,
		rating : $scope.rating,
		chapters : $scope.chapters,
		relatedTags : $scope.relatedTags,
		roadmapCards : $scope.roadmapCards
	}


});
