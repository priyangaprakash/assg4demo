(function () {
'use strict';

angular.module('MenuApp')
.service('MenuListService', MenuListService);

MenuListService.$inject = ['$http'];
function MenuListService($http) {
  var service = this;


  service.getAllCategories = function() {
   return $http({
     method: 'GET',
     url: 'https://davids-restaurant.herokuapp.com/categories.json'
   });

 };

 service.getItemsForCategory = function(categoryShortName) {
   console.log("param in service is ", categoryShortName);
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
      params: {category: categoryShortName}
    });
  }
}

})();
