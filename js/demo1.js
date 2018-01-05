define(function (require, exports, module){
    /* var add = function (x,y){
        return x+y;
    };
    var ride = function (x,y){
        return x*y;
    };*/
   /*var web = {
        add:function(x,y) {
            return x+y;
        },
        ride:function(x,y) {
            return x*y;
        }
    };*/
    var demoA = require('demoA');
    var y = demoA.doSomething();
    var web = {
        add:function(x) {
            return x+y;
        }
    };
    return {
        //add: add,
        //ride: ride
        web:web
    };
});

/*
//AMD
define(['a','b','c'],function (a,b,c){

});
//cmd
define(function (){
var a = require('a');
    a.info();
var b = require('b');
    b.info2();
});*/
