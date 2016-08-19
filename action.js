/**
 * Created by yangjinfeng on 2016/8/19.
 */
var validator;
 $(document).ready(function(){
     $.validator.setDefaults({
         debug: true
     });

     validator = $('#demoForm').validate({
         rules:{
             username:{
                 required:true,
                /* minlength:2,
                 maxlength:10*/
                 rangelength:[2,10],
                 chinese:true
             },
             password:{
                 required:true,
                /* minlength:6,
                 maxlength:20*/
                 rangelength:[6,20],
                 pass:true
             },
             "confirm-password":{
                 equalTo:"#password"
             }
         },
         messages:{
             username:{
                 required:'用户名必须填写',
                 minlength:'用户名长度不能小于2',
                 maxlength:'用户名长度不能超过10',
                 rangelength:"用户名应在2-10位"
             },
             password:{
                 required:'密码不能为空',
                 minlength:'密码长度不能小于6',
                 maxlength:'密码长度不能超过20',
                 rangelength:"密码应在6-20位"
             },
             "confirm-password":{
                 equalTo:"两次密码输入不一致"
             }
         }

     });
    /* $.validator.addClassRules({
         txt:{
             required:true
         }
     });*/
     //中文用户名
     $.validator.addMethod('chinese',function(value,element,params){
         var name=/^[\u4e00-\u9fa5]+$/;
         return this.optional(element) || (name.test(value));
     }, "必须为中文用户名");

//密码限制
     $.validator.addMethod("pass", function(value, element,params) {
         return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
     }, "只能包括英文字母和数字");

    /* $('.error').fadeIn("slow");*/
    /* $('button').click(function(){
         if($("#checkbox").checked){
             localStorage.setItem('password',$("password"));
         }
     })*/
 });
