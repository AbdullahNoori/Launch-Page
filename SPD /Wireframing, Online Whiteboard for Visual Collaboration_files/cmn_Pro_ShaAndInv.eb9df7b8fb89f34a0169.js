(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1126:function(n,t,e){var i=e(1127);"string"===typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(24)(i,o);i.locals&&(n.exports=i.locals)},1127:function(n,t,e){(n.exports=e(23)(!1)).push([n.i,".select-input {\n  font-size: 16px;\n}\n.select-input .select-value {\n  box-sizing: border-box;\n  display: inline-block;\n  height: 40px;\n  line-height: 40px;\n  font-size: 16px;\n  padding: 0 17px 0 9px;\n  color: #4262ff;\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n.select-input .select-value .icon {\n  display: inline-block;\n  margin-right: 5px;\n}\n.select-input .select-value span.content {\n  display: inline-block;\n}\n.select-input .select-value span.content:after {\n  content: '';\n  border-style: solid;\n  border-width: 4px 4px 0 4px;\n  border-color: #4262ff transparent transparent transparent;\n  width: 0;\n  height: 3px;\n  display: inline-block;\n  margin-left: 10px;\n}\n",""])},1128:function(n,t){n.exports='<div class="select-input" hm-tap="toggleOptions()">\n    <div class="select-value">\n        <icon icon-name="\'application--\' + getSelectedOption().iconName" ng-show="getSelectedOption().iconName"></icon>\n        <span class="content">{{getSelectedOption().key}}</span>\n    </div>\n</div>'},116:function(n,t,e){"use strict";e.d(t,"a",function(){return c});var i=e(21),o=e(99),r=e(43),a=e(148);function c(n,t,e){var c;void 0===t&&(t=null),void 0===e&&(e=[]);var s=n.displayName||"";return s.startsWith("CerebralWrapping_")?(c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.d)(e,t),e.prototype.render=function(){return r.React.createElement(r.CerebralContainer,{controller:o.a.getInstance(),strict:!0},r.React.createElement(n,Object(i.a)({},this.props)))},e}(r.React.PureComponent)).displayName="React2Angular_"+s:c=n,Object(a.react2angular)(c,t,e)}e.d(t,"b",function(){return a.react2angular})},1475:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var i=e(147),o=e(33),r=e(134);function a(n,t){return(n===i.a.EDITOR||n===i.a.OWNER)&&Object(o.a)(t)&&Object(o.Q)(t.organization,r.a.FREE_RESTRICTED_LICENSE_MEMBERS)}},1479:function(n,t,e){"use strict";var i=e(540);t.a=function(){Object(i.a)()}},2141:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return r});var i=e(319);function o(n){return n?n.state===i.a.REGISTERED?n.name:n.email:""}function r(n,t){return'<span content="'+function(n){var t=n.length;return t>10?n.slice(0,10).map(function(n){return o(n)}).join(", ")+" and "+(t-10)+" more":n.map(function(n){return o(n)}).join(", ")}(n)+'" class="rtb-tooltip rtb-tooltip--bottom rtb-link rtb-link--dashed">'+n.length+" of "+t+" users</span>"}},2150:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var i=e(21),o=e(2151),r=e(319),a=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(i.d)(t,n),t.prototype.convert=function(n,t){var e=this,i=[];return n.forEach(function(n){var o=n.user;if(!(t.excludeEmails||{})[o.email]){var a={email:o.email,name:o.state===r.a.NOT_REGISTERED?"":o.name,id:o.id,picture:o.picture,disabled:!1,checked:!1,user:o,accountConnectionId:n.id};n.organizationConnection&&(a.organizationLicense=n.organizationConnection.license,a.organizationRole=n.organizationConnection.role),e.makeCheckedProperty(a,o.id),i.push(a)}}),i},t.prototype.updateCheckedAll=function(n){if(n){var t=this.checked.size+Object.keys(this.searchParam.excludeEmails||{}).length;this.allChecked=t===this.maxArrayCount||this.allChecked}else this.allChecked=!1},t.prototype.loadObjects=function(t,e,i){var o=this;return this.isOldLoader(this.loader)?this.loader({limit:e,offset:i,search:t.search,roles:t.roles,fields:"id,user{id,email,name,picture,state},organizationConnection{license}"}).then(function(n){o._currentArrayCount=n.size;var e=n.data||[];return o.convert(e,t)}):n.prototype.loadObjects.call(this,t,e,i)},t}(o.a)},2151:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var i=e(21),o=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return Object(i.d)(t,n),t.prototype.mapBy=function(n){return n&&n.email},t}(e(2118).a)},2153:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var i=e(45),o=e(163),r=e(2141);function a(n,t){var e={info:!0,title:"Some users cannot edit",text:c(n,t),submitButton:{caption:"Send request and invite"},cancelButton:{caption:"Cancel"}},r=Object(i.a)().show(Object(o.a)(e));return new Promise(function(n,t){r.submitted.addOnce(n),r.canceled.addOnce(t)})}function c(n,t){var e=Object(r.a)(n[0])||"Some users";return 1===n.length?"<span><b>"+e+"</b> will be invited as commenter until assigned a license. You can ask Company Admin to assign license. </span>":"<span>"+Object(r.b)(n,t)+"  will be invited as commenters until assigned a license. You can ask Company Admin to assign licenses. </span>"}},810:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var i=e(58),o=e(131),r=e(25);function a(){e(1126),Object(r.b)().directive("selectInput",c)}function c(n){return{replace:!0,restrict:"E",template:e(1128),scope:{options:"=",optionsOffsetBottom:"=",optionsOffsetRight:"=",onSelected:"&"},link:function(t,e){var r;function a(n){n.keyCode!=i.a.ESCAPE&&n.keyCode!=i.a.ENTER||c()}function c(e){void 0===e&&(e=!1),window.removeEventListener("keydown",a),t.optionsVisible=!1,e||n.$broadcast("hideSelectOptions"),n.safeApply()}t.toggleOptions=function(){if(t.optionsVisible=!t.optionsVisible,t.optionsVisible){var i=e.offset();i.top+=e.height()+parseInt(t.optionsOffsetBottom||0,10),i.left+=e.width()+parseInt(t.optionsOffsetRight||0,10),n.$broadcast("showSelectOptions",i,t.options,t),r=o.c(null,function(){c()},".select-options",".select-input"),window.addEventListener("keydown",a)}else c(),r.destroy()},t.getSelectedOption=function(){for(var n=0;n<t.options.length;n++){var e=t.options[n];if(e.selected)return e}return null},t.$on("optionSelected",function(n,e,i){i==t&&(e.disabled||t.options.forEach(function(n){n.selected=n==e}),t.onSelected({option:e}),c())}),t.$on("closeSelectInputForce",function(n,e){e==t&&c(!0)}),t.$on("$destroy",c)}}}c.$inject=["$rootScope"]}}]);
//# sourceMappingURL=cmn~Pro~ShaAndInv.eb9df7b8fb89f34a0169.js.map