(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56f9afa0"],{"21c4":function(e,t,n){},"30d8":function(e,t,n){"use strict";n("21c4")},"5a99":function(e,t,n){"use strict";n("6159")},6159:function(e,t,n){e.exports={menuBg:"#304156",menuText:"#bfcbd9",menuActiveText:"#409EFF"}},ede4:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"container"},[n("div",{staticClass:"center"},[n("div",{staticClass:"main"},[n("div",{staticClass:"loginInput"},[n("el-form",{ref:"numberValidateForm",staticClass:"demo-ruleForm",attrs:{model:e.numberValidateForm,"label-width":"20%"}},[n("el-form-item",{attrs:{label:"账号",prop:"username",rules:[{required:!0,message:"账号不能为空"}]}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.numberValidateForm.username,callback:function(t){e.$set(e.numberValidateForm,"username",t)},expression:"numberValidateForm.username"}})],1),n("el-form-item",{attrs:{label:"密码",prop:"password",rules:[{required:!0,message:"密码不能为空"}]}},[n("el-input",{attrs:{type:"password",autocomplete:"off"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm("numberValidateForm")}},model:{value:e.numberValidateForm.password,callback:function(t){e.$set(e.numberValidateForm,"password",t)},expression:"numberValidateForm.password"}})],1),n("el-form-item",[n("el-button",{staticClass:"loginButton",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("numberValidateForm")}}},[e._v("登录")])],1)],1)],1)])])]),n("div",{staticClass:"footer"})])},a=[],o=(n("96cf"),n("1da1")),u=n("d4ec"),i=n("bee2"),s=n("262e"),c=n("2caf"),l=n("9ab4"),m=n("2b0e"),f=n("60a3"),d=(n("d3b7"),n("f486")),p=(n("a15b"),function(){function e(){Object(u["a"])(this,e)}return Object(i["a"])(e,null,[{key:"GetString",value:function(e){var t=[];for(var n in e){var r=encodeURIComponent(n),a=encodeURIComponent(e[n]);t.push(r+"="+a)}var o=t.join("&");return o}}]),e}()),b=function(){function e(){Object(u["a"])(this,e)}return Object(i["a"])(e,null,[{key:"getUrl",value:function(e,t){return new Promise((function(n,r){d["a"].Get("/yzzy-pcs-jwtsp/v1"+e+"?"+p.GetString(t)).then((function(e){n(e)})).catch((function(e){r(e)}))}))}},{key:"GetKey",value:function(e){return new Promise((function(t,n){d["a"].Get(e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}},{key:"PostUrl",value:function(e,t){return new Promise((function(n,r){d["a"].Post(e,t).then((function(e){n(e)})).catch((function(e){r(e)}))}))}},{key:"PutUrl",value:function(e,t){return new Promise((function(n,r){d["a"].Put(e,t).then((function(e){n(e)})).catch((function(e){r(e)}))}))}},{key:"PutUrlHeader",value:function(e,t){return new Promise((function(n,r){d["a"].Put(e+"?"+p.GetString(t)).then((function(e){n(e)})).catch((function(e){r(e)}))}))}},{key:"DeleteUrlHeader",value:function(e,t){return new Promise((function(n,r){d["a"].Delete(e+"?"+p.GetString(t)).then((function(e){n(e)})).catch((function(e){r(e)}))}))}}]),e}(),v=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.apply(this,arguments),e.userMsg={},e.choose=["inputActive",""],e.numberValidateForm={username:"",password:""},e}return Object(i["a"])(n,[{key:"mounted",value:function(){this.$route.query.area&&this.$route.query.code&&this.getLogin("/fourA-login/login",{id:this.$route.query.code})}},{key:"getLogin",value:function(e,t){var n=this;b.PostUrl(e,t).then((function(e){0===e.code?console.log(e):-1===e.code&&n.$message({showClose:!0,type:"warning",message:e.msg})}))}},{key:"submitForm",value:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,t.getLogin("/support/login",{username:t.numberValidateForm.username,password:t.numberValidateForm.password});case 3:e.next=7;break;case 5:return console.log("error submit!!"),e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}]),n}(m["default"]);v=Object(l["a"])([Object(f["a"])({name:"login"})],v);var h=v,g=h,w=(n("30d8"),n("5a99"),n("2877")),y=Object(w["a"])(g,r,a,!1,null,"517df2ee",null);t["default"]=y.exports}}]);
//# sourceMappingURL=chunk-56f9afa0.936fad4f.js.map