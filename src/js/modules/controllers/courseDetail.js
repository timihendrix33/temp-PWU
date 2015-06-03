App.controller('courseDetailController',function($scope){
	$scope.timeLeft = 45;
	$scope.chapters = [
		{'class':'fa-chevron-right complete'},
		{'class':'fa-chevron-right complete'},
		{'class':'fa-chevron-right'},
		{'class':'fa-chevron-right'},
		{'class':'fa-check'}
	]




	$scope.instructor = {
		name:'Ted Hatcher',
		title:'Sales Manager',
		email:'ted.hatcher@ibm.com',
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
			title:'Suspendisse Fermentum',
			difficulty:1,
			catagory:'Cloud',
			description:'Greek Text',
			tags:[{
				name:'magna',
				link:'link'
			}]
		},
		{
			title:'Celerisque',
			difficulty:2,
			catagory:'Cloud',
			description:'Greek Text',
			tags:[{
				name:'Nula',
				link:'link'
			},{
				name:'Maxima',
				link:'link'
			}]
		}
	];



	$scope.courseDetails = {
		instructor : $scope.instructor,
		rating : $scope.rating,
		chapters : $scope.chapters,
		relatedTags : $scope.relatedTags,
		relatedContent : $scope.relatedContent
	}



});