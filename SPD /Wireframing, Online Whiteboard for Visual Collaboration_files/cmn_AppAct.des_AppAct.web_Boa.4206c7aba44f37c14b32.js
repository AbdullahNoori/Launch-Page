(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1003:function(t,n,e){"use strict";var i,o;e.d(n,"a",function(){return o}),function(t){t.Timeout="timeout",t.IdleTimeout="idleTimeout"}(i||(i={})),function(t){t.EmailNotConfirmed="userBlocked",t.NotConfirmed="notConfirmed",t.SuspiciousActivity="suspiciousActivity",t.TermsViolations="termsViolation",t.UserDeleted="userDeleted",t.Deleted="deleted",t.Spam="spam",t.UserLockout="userLockout",t.AuthorizationFailed="authorizationFailed",t.EmailFormat="emailFormat",t.EmailNotUnique="emailNotUnique",t.PasswordNotSet="passwordNotSet",t.UserMustAuthUsingSaml="userMustAuthUsingSaml",t.UserMustRegisterUsingSaml="userMustRegisterUsingSaml",t.FacebookEmailPermissionDeclined="facebookEmailPermissionDeclined",t.SocialProfileWithoutEmail="socialProfileWithoutEmail",t.SessionNotFound="sessionNotFound",t.SessionExpired="sessionExpired",t.InviteCreation="inviteCreation",t.InsufficientPermission="insufficientPermission",t.UserIsNotInAccount="userIsNotInAccount",t.InvalidCode="invalidCode",t.CodeNotFound="codeNotFound",t.EmailRateLimit="emailRateLimit",t.UserNotFound="userNotFound",t.UserAlreadyRequestedAccessToAccount="userAlreadyRequestedAccessToAccount"}(o||(o={}))},1142:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return d}),e.d(n,"c",function(){return f});var i,o,r=e(30),u=e(25),c=e(57);function a(){Object(u.b)().directive("customScroll",s)}function s(){return Object(r.a)({restrict:"A",link:function(t,n){n.attr("no-prevent-default","true");var e=function(t){var n,e,r,u,a,s,d,f,p=325,l=!1,g=v(),h=0,m=0,b=!1;function v(){return t.scrollHeight-parseInt(getComputedStyle(t).height,10)}function A(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function y(n){if(b)return!1;var e=!0;return n>g?(m=g,e=!1):n<h?(m=h,e=!1):m=n,t.scrollTop=m,e}function _(){var t,n,i;t=Date.now(),n=t-u,u=t,i=m-r,r=m,e=.8*(1e3*i/(1+n))+.2*e}function S(){var t,n;if(s)if(t=Date.now()-u,(n=-s*Math.exp(-t/p))>.5||n<-.5){var e=y(d+n);l=e,e&&requestAnimationFrame(S)}else l=!1,y(d)}function T(t){Object(c.e)(t.target,function(t){return t.hasAttribute("no-custom-scroll")})||(document.addEventListener("touchmove",w),document.addEventListener("touchend",E),o=k,b=!1,n=A(t),e=s=0,r=m,u=Date.now(),clearInterval(a),a=setInterval(_,100),function(t){var n=t.target;return!!n&&("A"===n.tagName||"INPUT"===n.tagName||"TEXTAREA"===n.tagName||"SELECT"===n.tagName||"BUTTON"===n.tagName)}(t)||t.preventDefault(),l&&(l=!1,t.stopPropagation()))}function w(e){var o=A(e),r=n-o;return(r>5||r<-5)&&(n=o,i=t,y(m+r)),e.preventDefault(),!1}function E(t){k(),(e>10||e<-10)&&(s=.8*e,d=Math.round(m+s),u=Date.now(),requestAnimationFrame(S))}function k(){document.removeEventListener("touchmove",w),document.removeEventListener("touchend",E),i=void 0,clearInterval(a)}i=void 0;var N=setInterval(function(){f!==t.scrollHeight&&(f=t.scrollHeight,g=v(),i=void 0,b=!0,e=s=0)},200);return t.addEventListener("touchstart",T,!0),function(){i=void 0,clearInterval(N),t.removeEventListener("touchstart",T,!0),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",E),clearInterval(a)}}(n[0]);t.$on("$destroy",e)}})}function d(t){return!!t&&t===i}function f(){o&&o()}},1671:function(t,n,e){"use strict";e.d(n,"c",function(){return s}),e.d(n,"a",function(){return f}),e.d(n,"b",function(){return p}),e.d(n,"d",function(){return l});var i=e(654),o=e(182),r=e(52),u=e(35),c=e(42),a=e(1003);function s(t){return t&&!t.errorAlreadyProcessed&&(p(t)?(d(i.a(a.a.SessionExpired)),setTimeout(function(){return r.n()},3e3),t.errorAlreadyProcessed=!0):f(t)&&null==t.responseJSON&&(d("Sorry, the text you have entered appears to be too long"),t.errorAlreadyProcessed=!0)),Promise.resolve()}function d(t){c.b(u.c())&&u.b()().showError(t)}function f(t){return t&&413==t.status||414==t.status}function p(t){return t&&401==t.status}function l(t){o.e(t)}},324:function(t,n,e){"use strict";e.d(n,"a",function(){return h}),e.d(n,"e",function(){return I}),e.d(n,"g",function(){return L}),e.d(n,"f",function(){return C}),e.d(n,"n",function(){return P}),e.d(n,"k",function(){return U}),e.d(n,"l",function(){return j}),e.d(n,"m",function(){return F}),e.d(n,"d",function(){return K}),e.d(n,"h",function(){return W}),e.d(n,"j",function(){return D}),e.d(n,"i",function(){return R}),e.d(n,"o",function(){return M}),e.d(n,"p",function(){return V}),e.d(n,"c",function(){return x}),e.d(n,"b",function(){return q});var i=e(557),o=[[0,0],[1,10],[11,49],[50,99],[100,199],[200,299],[300,399],[400,499],[500,999],[1e3,1/0]],r=window.ga?window.ga:null,u=[],c=null;function a(t,n){u.find(function(n){return n.id===t})||(n.length?r("create",t,"auto",n):r("create",t,"auto"))}function s(t,n,e){r(e?e+"."+t:t,n)}function d(t,n,e){n.hitType=t,s("send",n,e)}function f(t,n,e,i,o){var r={timingCategory:t,timingVar:n,timingValue:Math.round(e)};o&&(r.timingLabel=o),d("timing",r,i)}function p(t,n,e){d("event",{eventCategory:t,eventAction:n},e)}function l(t,n,e){var i;s("set",((i={})["dimension"+t]=n,i),e)}function g(t,n){for(var e,i=0;i<n.length&&!(t>=(e=n[i])[0]&&t<=e[1]);i++);return e[0]+" - "+(isFinite(e[1])?e[1]:"> "+e[0])}function h(){return null!==r&&!!rtb.config.app.gaKey}var m,b="rtbAppTracker",v="rtbApp",A="boardLoadingTracker",y="Board",_="AppInitLoadingTracker",S="Application",T="LoadingTracker",w="Loading",E="WidgetsLoadingTracker",k="Loading-Widgets",N="WidgetOrderLoadingTracker",O="Loading-WidgetOrder";function I(t,n){a(rtb.config.app.gaKey,_),f(S,"Init",t,_),n&&f(S,"InitForNewUser",t,_)}function L(t,n,e){a(rtb.config.app.gaKey,A),f(y,t,n,A,g(e,o))}function C(t,n){a(rtb.config.app.gaKey,T),f(w,t,n,T,"Info")}function P(t,n){a(rtb.config.app.gaKey,T),f(w,t,n,T,"WS")}function U(t,n){a(rtb.config.app.gaKey,T),f(w,t,n,T,"InitRequest")}function j(t,n){a(rtb.config.app.gaKey,T),f(w,t,n,T,"InitResponse")}function F(t,n){a(rtb.config.app.gaKey,T),f(w,t,n,T,"OpenSpace")}function K(){(c=new i.a("objects-loading")).start()}function W(t){c&&(c.stop(),a(rtb.config.app.gaKey,T),f(w,t,c.duration,T,"Board"),c.start())}function D(t){c&&(c.stop(),a(rtb.config.app.gaKey,T),f(w,t,c.duration,T,"Chat"),c.start())}function R(t){c&&(c.stop(),a(rtb.config.app.gaKey,T),f(w,t,c.duration,T,"Canvas"),c=null)}function M(t,n,e){a(rtb.config.app.gaKey,N),f(O,t,n,N,g(e,o))}function V(t,n,e){a(rtb.config.app.gaKey,E),f(k,t,n,E,g(e,o))}function x(t){a(rtb.config.app.gaKey,b),l(m.ROLE,t,b),p(v,"Role selected",b)}function q(t){a(rtb.config.app.gaKey,b),l(m.COMPANY_SIZE,t,b),p(v,"Company size selected",b)}!function(t){t[t.USE_CASE=2]="USE_CASE",t[t.ROLE=3]="ROLE",t[t.COMPANY_SIZE=4]="COMPANY_SIZE"}(m||(m={}))},345:function(t,n,e){"use strict";var i=function(){function t(){}return t.isTipShown=function(){return this.tipShown},t.toggleTipAsShown=function(){this.tipShown=!0},t.toggleTipAsHidden=function(){this.tipShown=!1},t.addTipToShowWithoutVariation=function(t){this.tipsWithoutABCVariation.push(t)},t.isTipToShowWithoutVariation=function(t){return this.tipsWithoutABCVariation.includes(t)},t.showTipWhenPossible=function(t){var n=this;this.isTipShown()?setTimeout(function(){n.showTipWhenPossible(t)},250):t()},t.tipShown=!1,t.tipsWithoutABCVariation=[],t}();n.a=i},416:function(t,n,e){"use strict";e.d(n,"d",function(){return o}),e.d(n,"c",function(){return r}),e.d(n,"b",function(){return u}),e.d(n,"a",function(){return c});var i=e(112);function o(){Object(i.b)("ui_tip_for_external_shown",Object(i.a)({}))}function r(t){Object(i.b)("ui_tip_for_external_clicked",Object(i.a)({ui_tip_for_external_clicked_on:t}))}function u(t){Object(i.b)("tooltip_shown",Object(i.a)(t))}function c(t){Object(i.b)("tooltip_clicked",Object(i.a)({tip_type:t.tip_type,type_of_trigger:t.type_of_trigger,button_name_clicked:t.button_name_clicked?t.button_name_clicked:""}))}},557:function(t,n,e){"use strict";var i=function(){function t(t){this._tracked=!1,this.beginAt=0,this.endAt=0,this.id=t}return Object.defineProperty(t.prototype,"started",{get:function(){return this.beginAt},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ended",{get:function(){return this.endAt},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this.endAt-this.beginAt},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tracked",{get:function(){return this._tracked},enumerable:!0,configurable:!0}),t.prototype.stop=function(){this._tracked&&(this._tracked=!1,this.endAt=Date.now())},t.prototype.start=function(){this._tracked=!0,this.beginAt=Date.now(),this.endAt=1/0},t.prototype.reset=function(){this._tracked=!1,this.beginAt=0,this.endAt=0},t}();n.a=i}}]);
//# sourceMappingURL=cmn~AppAct.des~AppAct.web~Boa.4206c7aba44f37c14b32.js.map