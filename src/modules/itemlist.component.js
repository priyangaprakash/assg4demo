(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  template: '<ul><li ng-repeat = "item in $ctrl.items">{{item.name}}</li></ul>', //src/shoppinglist/templates/shoppinglist.template.html
  bindings: {
    items: '<'
  }
});

})();