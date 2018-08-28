(function () {
'use strict';

angular.module('MenuApp')
.component('menuList', {
  template: '<ul><li ng-repeat = "category in $ctrl.categories" ui-sref="items({categoryId:category.short_name})">{{category.name}} {{category.short_name}}</li></ul>', //src/shoppinglist/templates/shoppinglist.template.html
  bindings: {
    categories: '<'
  }
});

})();