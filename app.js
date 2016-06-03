/**
 * Created by user on 06.04.2016.
 */

(function () {
    var app = angular.module('store', ['store-products']);

    //controller name and constructor
    app.controller('StoreController', ['$http', function ($http) {
        //this.products = [];// = gems;\
        var store = this;
        store.products = [];

        $http.get('/angular1/products.json').success(function(data){
            store.products = data;
        });
    }]);


    /*var gems = [
        {
            name: "Dodecahedron",
            price: 2,
            description: "..description..",
            canPurchase: true,
            reviews:[
                {
                    stars: 4,
                    body: "review 1",
                    author: "author@1"
                },
                {
                    stars:3,
                    body: "review 2",
                    author: "author@2"
                }
            ]
        },
        {
            name: "Pentagonal gem",
            price: 5.25,
            description: "..pentagonal gem..",
            canPurchase: true,
            reviews:[
                {
                    stars:3,
                    body: "review 21",
                    author: "author@21"
                }
            ]
        }
    ];*/

    app.controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        }
    });


})();
