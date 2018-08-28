(function(){
    'use strict';   

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider,$urlRouterProvider)
    {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home',{
            url:'/',
            template:'<a ui-sref = "categories">List of Categories</a>' //home.template.html
        })

        .state('categories',{
            url:'/categories',            
           template:'<a ui-sref = "home">Home</a> &lt; <menu-list categories="list.categories"></menu-list>',//main-categories.template.html
            controller:'MainMenuListController as list',
            resolve:{
                categories:['MenuListService',function(MenuListService)
                {
                    return MenuListService.getAllCategories().then(function(success)
                    {
                        return success.data;
                    });
                }]
            }
        })

        .state('items',{
            url:'/items/{categoryId}',
            template:'<a ui-sref="home">Home</a> &lt;<a ui-sref="categories">List</a> &lt; <item-list items ="itemCtrl.items"></item-list>',
            controller:'ItemDetailController as itemCtrl',
            resolve:{
                items: ['$stateParams', 'MenuListService',
               function ($stateParams, MenuListService)
                {
                    console.log('params:',$stateParams.categoryId);
                      return MenuListService.getItemsForCategory($stateParams.categoryId)
                      .then(function(response){
                           console.log("Response",response.data.menu_items);
                          return response.data.menu_items;
                         
                      });
                     
            }]
            }
        });
    };
})();