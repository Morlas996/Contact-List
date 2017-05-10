angular.module('ContactList.factories', [])

  .factory('Contact', ['$resource', function($resource) {
        return $resource("http://localhost:3000/api/contact/:id", {id: "@id"}, 
        {
            "update": {method: "PUT"},
            "get": {isArray: false}
        });
    }])