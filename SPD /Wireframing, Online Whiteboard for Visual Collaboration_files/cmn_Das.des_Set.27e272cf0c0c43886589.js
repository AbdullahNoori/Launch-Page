(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1767:function(e,t,n){"use strict";n.d(t,"a",function(){return _});var r=n(21),o=n(54),i=n(71),p=n(26),a=n(168),s=n(63),c=n(64),u=n(110),l=n(52),d=n(33),f=n(77),h=n(279),m=function(){function e(){this.showPopup=!1,this.DEFAULT_USER_AVATAR=i.j}return e.prototype.captionClicked=function(){this.showPopup=!this.showPopup},e.prototype.openAccountSettings=function(){if(Object(d.s)(this.currentSpace)){var e=this.currentSpace;Object(p.dh)({open_new_settings_app_from:p.n.PROFILE_SETTINGS_FROM_DASHBOARD,role:e.currentUserPermission&&e.currentUserPermission.role||"",org_id:"",account_plan:e.type}),l.a.teamUserProfile(e.id,void 0,!0)}else if(this.currentSpace&&Object(d.a)(this.currentSpace)&&this.currentSpace.organization&&Object(d.e)(this.currentSpace.organization)){var t=this.currentSpace.organization;Object(p.dh)({open_new_settings_app_from:p.n.PROFILE_SETTINGS_FROM_DASHBOARD,role:!!t&&t.currentUserPermission&&t.currentUserPermission.role||"",org_id:!!t&&t.id||"",account_plan:!!t&&t.type||""}),l.a.companyUserProfile(t.id,void 0,!0)}else Object(l.w)().openInNewTab();this.showPopup=!1},e.prototype.canShowUpgradeButton=function(){return _(this.currentSpace)},e.prototype.upgrade=function(){var e=this,t=Object(a.c)(this.currentSpace,p.f.StatFeatureList.dashboard_menu);p.f.clickUpgrade(t),Object(f.a)().sendApiEvent("click_upgrade",t),this.showPopup=!1,Object(u.c)(),Object(c.f)().then(function(t){return t.openPricing(e.currentSpace,h.a.USER_PROFILE)})},e.prototype.logout=function(){this.showPopup=!1,Object(l.o)()},Object(r.c)([Object(o.c)("user.profile")],e.prototype,"user",void 0),Object(r.c)([Object(o.c)("dashboard.currentSpace")],e.prototype,"currentSpace",void 0),e}();function _(e){return s.a.upgradeIsSupported&&(!Object(d.a)(e)||Object(d.vb)(e.organization))&&Object(d.q)(e)}t.b=m},1768:function(e,t,n){var r=n(2886);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(24)(r,o);r.locals&&(e.exports=r.locals)},2373:function(e,t,n){"use strict";var r=n(30),o=n(1767),i=n(21),p=n(43),a=n(382),s=n(71),c=n(823);n(1768);var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isOpen:!1},t.captionRef=p.React.createRef(),t}return Object(i.d)(t,e),t.prototype.renderPopup=function(){var e=this.state.isOpen,t=this.props,n=t.name,r=t.email,o=t.picture,i=t.popupClassName;return p.React.createElement(p.CSSTransition,{in:e,timeout:200,classNames:{appear:"ng-appear",appearActive:"ng-appear-active",appearDone:"ng-leave-appear",enter:"ng-enter",enterActive:"ng-enter-active",enterDone:"ng-leave-enter",exit:"ng-leave",exitActive:"ng-leave-active",exitDone:"ng-leave-exit"},unmountOnExit:!0},p.React.createElement(c.a,{onTapOut:this.onTapOut},p.React.createElement("div",{className:Object(p.classNames)(i,"user-profile__popup white-popup white-popup--arrow top fade-in-out")},p.React.createElement("div",{className:"user-profile__profile"},p.React.createElement("img",{src:o&&o.size180||s.j}),p.React.createElement("div",{className:"user-profile__profile__info"},p.React.createElement("div",{className:"user-profile__name"},n),p.React.createElement("div",{className:"user-profile__email"},r),p.React.createElement(p.Tappable.NoDom,{hmTap:this.openSettings},p.React.createElement("div",{className:"user-profile__settings_btn btn"},"Settings")))),this.props.canShowUpgradeButton&&p.React.createElement(p.Tappable.NoDom,{hmTap:this.upgrade},p.React.createElement("div",{className:"user-profile__btn btn"},"Upgrade")),p.React.createElement(p.Tappable.NoDom,{hmTap:this.logout},p.React.createElement("div",{className:"user-profile__btn btn"},"Log out")))))},t.prototype.render=function(){var e=this.props,t=e.className,n=e.picture,r=e.portalCssSelector;return p.React.createElement("div",{ref:this.captionRef,className:Object(p.classNames)("user-profile",t)},p.React.createElement(p.Tappable.NoDom,{hmTap:this.onCaptionClick},p.React.createElement("div",{className:"user-profile__button"},p.React.createElement(a.a,{pictureUrl:n&&n.size44}))),r?p.ReactDOM.createPortal(this.renderPopup(),document.querySelector(r)):this.renderPopup())},t.prototype.onCaptionClick=function(){var e=this.state.isOpen;this.setState({isOpen:!e})},t.prototype.openSettings=function(){var e=this.props.onOpenProfile;this.setState({isOpen:!1},e)},t.prototype.logout=function(){var e=this.props.onLogout;this.setState({isOpen:!1},e)},t.prototype.onTapOut=function(e){this.captionRef.current&&e.target&&!this.captionRef.current.contains(e.target)&&this.setState({isOpen:!1})},t.prototype.upgrade=function(){var e=this.props.onUpgrade;this.setState({isOpen:!1},e)},Object(i.c)([p.decorators.autobind],t.prototype,"onCaptionClick",null),Object(i.c)([p.decorators.autobind],t.prototype,"openSettings",null),Object(i.c)([p.decorators.autobind],t.prototype,"logout",null),Object(i.c)([p.decorators.autobind],t.prototype,"onTapOut",null),Object(i.c)([p.decorators.autobind],t.prototype,"upgrade",null),t}(p.React.PureComponent),l=n(25),d=n(116);function f(){n(1768),Object(l.b)().directive("userProfile",h),Object(l.b)().component("userProfileReact",Object(d.b)(u,["className","email","name","onLogout","onOpenProfile","picture","popupClassName","portalCssSelector","onUpgrade","canShowUpgradeButton"]))}function h(){return Object(r.a)({restrict:"E",template:n(2887),controller:o.b,controllerAs:"userProfile"})}n.d(t,"a",function(){return f})},2886:function(e,t,n){(e.exports=n(23)(!1)).push([e.i,".user-profile__button {\n  cursor: pointer;\n  white-space: nowrap;\n  width: 36px;\n  height: 36px;\n}\n.user-profile__button .user-picture {\n  float: left;\n  width: 36px;\n  height: 36px;\n}\n.user-profile__button .user-picture img {\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  min-width: 36px;\n  max-width: 36px;\n  min-height: 36px;\n  max-height: 36px;\n  overflow: hidden;\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .user-profile__button .user-picture img {\n    width: auto;\n    height: auto;\n  }\n}\n.user-profile__popup {\n  width: 320px;\n  margin: 20px 0 0 -284px;\n  padding-bottom: 16px;\n}\n.user-profile__popup.top:after,\n.user-profile__popup.top:before {\n  left: 94%;\n}\n.user-profile__profile {\n  margin: 0 30px 15px 30px;\n  border-bottom: 1px solid #eaeded;\n}\n.user-profile__profile img {\n  float: left;\n  margin: 29px 20px 0 0;\n  border-radius: 4px;\n  width: 74px;\n  height: 74px;\n  min-width: 74px;\n  max-width: 74px;\n  min-height: 74px;\n  max-height: 74px;\n  overflow: hidden;\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .user-profile__profile img {\n    width: auto;\n    height: auto;\n  }\n}\n.user-profile__profile__info {\n  margin-left: 91px;\n}\n.user-profile__name {\n  padding-top: 23px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.user-profile__email {\n  color: #827f9b;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.user-profile__btn {\n  text-align: center;\n  padding: 10px;\n  margin: 0 30px;\n}\n.user-profile__settings_btn {\n  height: 30px;\n  background-color: #4262ff;\n  display: inline-block;\n  color: #fff;\n  line-height: 30px;\n  padding: 0 14px;\n  border-radius: 15px;\n  margin-bottom: 16px;\n  margin-top: 13px;\n}\n.do-hovers .user-profile__btn:hover {\n  background-color: rgba(0, 0, 0, 0.03);\n}\n.do-hovers .user-profile__settings_btn:hover {\n  background-color: #455bed;\n}\n",""])},2887:function(e,t){e.exports='<div class="user-profile">\n    <div class="user-profile__button" hm-tap="userProfile.captionClicked()">\n        <user-picture picture-url="{{ ::userProfile.user.picture.size44 }}"></user-picture>\n    </div>\n    <div class="user-profile__popup white-popup white-popup--arrow top use-ng-animate fade-in-out"\n         ng-if="userProfile.showPopup"\n         do-if-click-out="userProfile.showPopup = false">\n        <div class="user-profile__profile">\n            <img ng-src="{{ ::userProfile.user.picture.size180 || account.DEFAULT_USER_AVATAR }}">\n            <div class="user-profile__profile__info">\n                <div class="user-profile__name">{{ ::userProfile.user.name }}</div>\n                <div class="user-profile__email">{{ ::userProfile.user.email }}</div>\n                <div class="user-profile__settings_btn btn" hm-tap="userProfile.openAccountSettings()">Settings</div>\n            </div>\n        </div>\n        <div class="user-profile__btn btn"\n             ng-show="userProfile.canShowUpgradeButton()"\n             hm-tap="userProfile.upgrade()">Upgrade</div>\n        <div class="user-profile__btn btn" hm-tap="userProfile.logout()">Log out</div>\n    </div>\n</div>'}}]);
//# sourceMappingURL=cmn~Das.des~Set.27e272cf0c0c43886589.js.map