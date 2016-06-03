/**
 * Created by user on 18.04.2016.
 */
(function(){
    var app = angular.module('store-products', []);
    var PanelControllerConstructor = function(){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    };
    //registrating html tag <product-title></product-title>
    app.directive('productTitle', function(){
        return {
            restrict: 'E',//means Element
            templateUrl: 'product-title.html'
        };
    });
    //<h3 product-title-attr></h3>
    app.directive('productTitleAttr', function(){
        return {
            restrict: 'A',//means Attribute
            templateUrl: 'product-title.html'
        };
    });
    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: PanelControllerConstructor,
            controllerAs: 'panel'
        };
    });
})();