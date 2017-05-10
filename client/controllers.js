angular.module('ContactList.controllers', [])
.controller('ContactController', ['$scope', '$route', '$location',  'Contact', function($scope, $route, $location, Contact){
    $scope.contacts = Contact.query();
    $scope.saveContact = function(){
        var contact = new Contact({
            name: $scope.name,
            email: $scope.email,
            phone: $scope.phone,
            
        });
        contact.$save(function(success){
            $route.reload();
        })
    }
}])

.controller('SingleController', ['$scope', '$location', '$routeParams',  'Contact',
        function ($scope, $location, $routeParams, Contact) {
            Contact.get({ id: $routeParams.id }, function (success) {
                console.log(success);
                $scope.contacts = success;
               
            });
            $scope.sendEmail = function () {
		var newMessage = new Contact({
			email: $scope.from,
			subject: "a new friend",
			message: $scope.content
		});
		

			newMessage.$save(function () {
				// alert("Message sent!");
				$location.path('/');

			});
            console.log(to);
            console.log(subject);
            console.log(content);
        };
        $scope.deleteContact = function () {
                if (confirm("Are you sure you want to delete this post?")) {
                    
                        $scope.contacts.$delete(function () {
                            $location.path('/');
                        })
                    }
                };
        }])