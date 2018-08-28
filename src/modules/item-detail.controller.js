(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['items']
function ItemDetailController(items) {
  var itemCtrl = this;
  itemCtrl.items = items;
}

})();