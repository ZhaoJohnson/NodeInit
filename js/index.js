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
        var name = document.querySelector("#name"),
            password = document.querySelector("#password"),
            submit = document.querySelector("#submit");
        name.onfocus = function() {
            this.style.border = "none";
        };
        password.onfocus = function() {
            this.style.border = "none";
        };
        /*name.onblur = function() {
         var val = this.value;
         var reg = /[a-zA-Z0-9_]{3,16}/ ;
         //var reg = /^[\u4e00-\u9fa5]{2,4}$/;
         if(val == '') {
         this.style.border = "1px solid red";
         } else if(reg.test(val)){
         this.style.border = "none";
         }else {
         this.style.border = "1px solid red";
         }
         }*/
        name.onblur = function() {
            var val = this.value;
            //var reg = /[a-zA-Z0-9_]{3,16}/ ;
            var reg = /^[\u4e00-\u9fa5]{2,4}$/;
            if(val == '') {
                this.style.border = "1px solid red";
            } else if(checkReg(val,reg)){
                this.style.border = "none";
            }else {
                this.style.border = "1px solid red";
            }
        }

        password.onblur = function() {
            var val = this.value;
            var reg = /^[a-zA-Z]\w{5,17}$/;  //以字母开头，长度在6~18之间，只能包含字符、数字和下划线
            if(val == '') {
                this.style.border = "1px solid red";
            } else if(checkReg(val,reg)){
                this.style.border = "none";
            }else {
                this.style.border = "1px solid red";
            }
        }

        submit.onclick = function() {
            if(check()) {
                //alert("OK");
                var data = getData();
                console.log(data);
               // window.location.href = "../html/main.html";
                window.location.href = "../main.html";
                /*window.location.href = "http://www.baidu.com";*/
            }else {
                //alert("error");
                $('#myModal').modal('show');
                document.querySelector(".modal-body").innerText = '信息输入错误';
            }
        }

        function checkReg(val,reg) {
            if (reg.test(val))
                return true;
            else
                return false;
        };
        function check() {
            var nameVal = name.value,
                //regName = /[a-zA-Z0-9_]{3,16}/,
                regName = /^[\u4e00-\u9fa5]{2,4}$/,
                passwordVal = password.value,
                regPassword = /^[a-zA-Z]\w{5,17}$/;
            if(nameVal==''){
                name.style.border = "1px solid red";
                return false;
            } else  if(!checkReg(nameVal,regName)) {
                name.style.border = "1px solid red";
                return false;
            }
            if(passwordVal==''){
                password.style.border = "1px solid red";
                return false;
            } else  if(!checkReg(passwordVal,regPassword)) {
                password.style.border = "1px solid red";
                return false;
            }
            return true;
        }

        function getData() {
            var data = {
                name: name.value.trim(),
                password: password.value.trim()
            }
            return data;
        }

});