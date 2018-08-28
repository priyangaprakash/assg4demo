(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuListController', MainMenuListController);


MainMenuListController.$inject = ['categories'];
function MainMenuListController(categories) {
  var list = this;
   list.categories = categories;
}

})();