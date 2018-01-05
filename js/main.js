require.config({
    //baseUrl: "../lib",
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    },
    paths: {
        /*"jquery": [
            'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min',
            '../lib/jquery/dist/jquery.min'
        ],*/
        "jquery": "../lib/jquery/dist/jquery.min",
        "bootstrap": "../lib/bootstrap/dist/js/bootstrap.min",
        //"selector":"selector"
    }
});
/*require(['jquery','bootstrap','selector'], function ($,bootstrap,selector){*/
require(['jquery','bootstrap'], function ($,bootstrap){
    $('#myCarousel').carousel({
        interval: 2000
    })
});