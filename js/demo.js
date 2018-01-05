require.config({
    shim: {      //配置不兼容的模块
        'bootstrap': {
            deps: ['jquery'],   //deps数组，表明该模块的依赖性
            exports: 'bootstrap'    //输出的变量名
        }
    },
    paths: {
        "jquery": "../lib/jquery/dist/jquery.min",
        "bootstrap": "../lib/bootstrap/dist/js/bootstrap.min",
        "demo1":"demo1"
    }
});
require(['jquery','bootstrap','demo1'], function ($,bootstrap,demo1){
    console.log(demo1.web.add(2));
    //console.log(demo1.add(2,3));
    //console.log(demo1.web.ride(2,3));
});