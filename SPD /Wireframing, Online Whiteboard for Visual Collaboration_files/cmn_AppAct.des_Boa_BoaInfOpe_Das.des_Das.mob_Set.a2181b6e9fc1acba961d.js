(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{104:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(110);function o(e){return r.c(),e().catch(function(e){throw r.a(),e})}},1137:function(e,t){e.exports='<div class="rtb-modal">\n    <div class="rtb-modal-container">\n        <ng-transclude></ng-transclude>\n    </div>\n</div>'},1139:function(e,t,n){e.exports='<div class="rtb-modal-container__close rtb-modal-close" data-autotest-id="rtbModalCloseAction">\n    <svg  class="rtb-modal-close__icon"  ><use xlink:href="'+n(118)+'"></use></svg>\n</div>'},1149:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(21),o=n(94),i=n.n(o),a=n(346),c=n(234),u=n(492),s=n(1728),l=n(64),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.yearPlanPriceCoefficient=.8,t.maxBoards=Object(c.g)(),t}return Object(r.d)(t,e),Object.defineProperty(t.prototype,"canUseCoupon",{get:function(){return 0===this.centsCredits},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxTeamSize",{get:function(){return Math.max(this.membersLimit,rtb.config.maxTeamSize)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"costPerMonthInMonthPlan",{get:function(){return this.paymentMemberCount*this.pricePerMonth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"costPerMonthInYearPlan",{get:function(){return this.costPerMonthInMonthPlan*this.yearPlanPriceCoefficient},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"totalDiscount",{get:function(){var e=0;switch(this.discountType){case u.a.COUPON:var t=this.coupon;t&&t.valid&&t.percentOff&&(e=this.totalCost*t.percentOff/100),t&&t.valid&&t.amountOff&&(e=t.amountOff/100);break;case u.a.CREDITS:e=this.centsCredits/100}return e>this.totalCost?this.totalCost:e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"discountWasApplied",{get:function(){return this.totalDiscount>0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nextPurchaseDate",{get:function(){var e=i()();return(this.paymentInterval===l.d.MONTHLY?e.add(1,"M"):e.add(1,"y")).format("LL")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"discountType",{get:function(){return this.hasCreditsFeature&&this.centsCredits>0?u.a.CREDITS:u.a.COUPON},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasCreditsFeature",{get:function(){return this.accountInfo.hasCreditsFeature},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"centsCredits",{get:function(){return this.accountInfo.centsCredits||0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"creditsMonthsCount",{get:function(){return Math.floor(this.centsCredits/100/this.costPerMonthInYearPlan)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"discountInMonthPlan",{get:function(){return this.totalDiscount},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"discountInYearPlan",{get:function(){return this.costPerMonthInYearPlan*this.yearPlanPriceCoefficient*12},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"costPerMonthInMonthPlanOneLicence",{get:function(){return this.pricePerMonth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"costPerMonthInYearPlanOneLicence",{get:function(){return this.pricePerMonth*this.yearPlanPriceCoefficient},enumerable:!0,configurable:!0}),Object(r.c)([a.a],t.prototype,"costPerMonthInMonthPlan",null),Object(r.c)([a.a],t.prototype,"costPerMonthInYearPlan",null),Object(r.c)([a.a],t.prototype,"totalDiscount",null),Object(r.c)([a.a],t.prototype,"discountWasApplied",null),Object(r.c)([a.a],t.prototype,"nextPurchaseDate",null),Object(r.c)([a.a],t.prototype,"discountType",null),Object(r.c)([a.a],t.prototype,"creditsMonthsCount",null),t}(s.a)},1150:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(){function e(e,t){void 0===t&&(t={}),this.accountInfo=e,this.paymentOptions=t}return Object.defineProperty(e.prototype,"membersCount",{get:function(){return this.accountInfo.membersCount},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"boardsCount",{get:function(){return this.accountInfo.boardsCount},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"centsCredits",{get:function(){return this.accountInfo.centsCredits},enumerable:!0,configurable:!0}),e}()},118:function(e,t){e.exports="#img__close-24"},124:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(141),o={id:{},usersNumber:{},limits:{},title:{},currentUserPermission:{},participantPostInvitationPaymentTest:{},type:{},trial:{},features:{},expired:{},expirationDate:{},boardsNumber:{},role:{},invitationLink:{}};r.b("ShareAndInvite",function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(6),n.e(7),n.e(12),n.e(10),n.e(13),n.e(11),n.e(19),n.e(20),n.e(26),n.e(18),n.e(32),n.e(48),n.e(46),n.e(47),n.e(77)]).then(n.bind(null,4377)).then(function(e){return e.default})}),t.b=r.a("ShareAndInvite")},1728:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(21),o=n(1150),i=n(346),a=n(64),c=function(e){function t(t,n){return void 0===n&&(n={}),e.call(this,t,n)||this}return Object(r.d)(t,e),Object.defineProperty(t.prototype,"paymentMemberCount",{get:function(){var e=this.paymentOptions.paymentMemberCount;return void 0!==e?e:this.paymentMemberCountFromAccount},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paymentMemberCountFromAccount",{get:function(){return this.accountInfo.hasMemberLimit?this.accountInfo.membersLimit:this.minTeamSize},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"changedMemberCount",{get:function(){return this.paymentMemberCount!=this.paymentMemberCountFromAccount},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"coupon",{get:function(){return this.paymentOptions.coupon},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"totalCost",{get:function(){return this.paymentInterval===a.d.MONTHLY?this.costPerMonthInMonthPlan:12*this.costPerMonthInYearPlan},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"totalCostInMonth",{get:function(){return this.paymentInterval===a.d.MONTHLY?this.costPerMonthInMonthPlan:this.costPerMonthInYearPlan},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"paymentInterval",{get:function(){return this.paymentOptions.paymentInterval?this.paymentOptions.paymentInterval:a.d.MONTHLY},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"totalSum",{get:function(){return this.totalCost-this.totalDiscount},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"membersLimit",{get:function(){return this.accountInfo.membersLimit},enumerable:!0,configurable:!0}),Object(r.c)([i.a],t.prototype,"paymentMemberCount",null),Object(r.c)([i.a],t.prototype,"coupon",null),Object(r.c)([i.a],t.prototype,"paymentInterval",null),t}(o.a)},173:function(e,t,n){"use strict";var r;!function(e){e.FREE="free",e.FREE_2018="free2018",e.TEAM="team",e.COMPANY="company",e.PERSONAL="professional",e.INFO="info",e.CONSULTANT="consultant",e.BUSINESS="business"}(r||(r={})),t.a=r},346:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(21),o={};function i(e,t,n){if("function"===typeof n.value)return function(e,t,n){if(n.value.length>0)throw new Error("@memoize decorator can only be applied to methods of zero arguments");var i="_memoized_"+t,a=n.value;return e[i]=o,Object(r.a)(Object(r.a)({},n),{value:function(){return this[i]===o&&(this[i]=a.call(this)),this[i]}})}(e,t,n);if("function"===typeof n.get)return function(e,t,n){var i="_memoized_"+t,a=n.get;return e[i]=o,Object(r.a)(Object(r.a)({},n),{get:function(){return this[i]===o&&(this[i]=a.call(this)),this[i]}})}(e,t,n);throw new Error("@memoize decorator can be applied to methods or getters, got "+String(n.value)+" instead")}},492:function(e,t,n){"use strict";var r;n.d(t,"a",function(){return r}),function(e){e.COUPON="coupon",e.CREDITS="credits"}(r||(r={}))},493:function(e,t,n){"use strict";var r=n(21),o=n(182),i=n(32),a=n(114),c=n(117),u=n(346),s=n(33),l=n(234),p=n(86),f=n.n(p),b=n(673),m=function(){function e(e){this.account=e}return Object.defineProperty(e.prototype,"isChargeable",{get:function(){return!this.isFree},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isPaidTeam",{get:function(){return this.account.type===a.a.PAID_TEAM||this.account.type===a.a.TEAM||this.account.type===a.a.TRIAL_TEAM},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"expired",{get:function(){return!!this.account.expired},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"expirationDate",{get:function(){return this.account.expirationDate},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"trial",{get:function(){return!!this.account.trial},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"membersLimit",{get:function(){return null!=this.account.limits&&this.account.limits.usersPerAccount||1/0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasMemberLimit",{get:function(){return this.membersLimit!==Object(l.g)()&&this.membersLimit!==1/0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"boardsLimit",{get:function(){return null!=this.account.limits&&this.account.limits.boardsPerAccount||1/0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasBoardsLimit",{get:function(){return this.membersLimit!==Object(l.g)()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"planName",{get:function(){switch(this.account.type){case a.a.FREE_TEAM:case a.a.FREE_TEAM_2018:return"Free";case a.a.PAID_TEAM:return this.trial?"Team trial":"Team";default:return""}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this.account.type||""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isFree",{get:function(){return!Object(s.pb)(this.account)&&(Object(s.db)(this.account)||Object(s.cb)(this.account))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isFreeTeam2018",{get:function(){return!Object(s.pb)(this.account)&&Object(s.fb)(this.account)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"expireBoards",{get:function(){return this.hasBoardsLimit&&this.boardsCount>this.boardsLimit},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"expireMember",{get:function(){return this.hasMemberLimit&&this.membersCount>this.membersLimit},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"membersCount",{get:function(){return null!=this.account.usersNumber&&this.account.usersNumber||0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"boardsCount",{get:function(){return null!=this.account.boardsNumber&&this.account.boardsNumber||0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeBoardsLimit",{get:function(){return null!=this.account.limits&&this.account.limits.activeBoardsPerAccount||Object(l.g)()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"centsCredits",{get:function(){return null!=this.account.credits&&this.account.credits.totalSumCents||0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasCreditsFeature",{get:function(){return Object(s.Q)(this.account,c.a.CREDITS)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"expireLimits",{get:function(){return this.expireBoards||this.expireMember},enumerable:!0,configurable:!0}),e.prototype.daysToExpiration=function(){return Object(s.I)(this.account,o.a.getTime())},e.prototype.usersSeats=function(e){return Object(s.Ab)(this.account)?Math.max(e,this.membersLimit):e},e.prototype.getReceiver=function(){var e=this;return i.a.billing.selectById(this.account.id).get().then(function(t){return e.receiver=t,f()(t)})},Object.defineProperty(e.prototype,"role",{get:function(){return this.account.role||this.account.currentUserPermission&&this.account.currentUserPermission.role||""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"userIsAdmin",{get:function(){return Object(s.W)(this.account)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this.account.title||"team"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"currentUserEmail",{get:function(){return this.account.currentUserPermission&&this.account.currentUserPermission.user.email||""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this.account.id||"no account id"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasFeaturePostInvitationPayments",{get:function(){return Object(s.m)(this.account)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isPersonal",{get:function(){return!Object(s.pb)(this.account)&&Object(s.sb)(this.account)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isTeam",{get:function(){return!this.isPersonal},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isOrganizationType",{get:function(){return Object(s.pb)(this.account)},enumerable:!0,configurable:!0}),e.prototype.getCurrentPaymentInfo=function(e){return!this.currentStripePaymentInfo&&this.receiver&&(this.currentStripePaymentInfo=new b.a(this,this.receiver,{billingPlans:e})),this.currentStripePaymentInfo},Object.defineProperty(e.prototype,"isTrialTeam",{get:function(){return this.account.type===a.a.TRIAL_TEAM},enumerable:!0,configurable:!0}),Object(r.c)([u.a],e.prototype,"isChargeable",null),Object(r.c)([u.a],e.prototype,"isPaidTeam",null),Object(r.c)([u.a],e.prototype,"expired",null),Object(r.c)([u.a],e.prototype,"expirationDate",null),Object(r.c)([u.a],e.prototype,"trial",null),Object(r.c)([u.a],e.prototype,"membersLimit",null),Object(r.c)([u.a],e.prototype,"hasMemberLimit",null),Object(r.c)([u.a],e.prototype,"boardsLimit",null),Object(r.c)([u.a],e.prototype,"hasBoardsLimit",null),Object(r.c)([u.a],e.prototype,"planName",null),Object(r.c)([u.a],e.prototype,"type",null),Object(r.c)([u.a],e.prototype,"isFree",null),Object(r.c)([u.a],e.prototype,"isFreeTeam2018",null),Object(r.c)([u.a],e.prototype,"expireBoards",null),Object(r.c)([u.a],e.prototype,"expireMember",null),Object(r.c)([u.a],e.prototype,"membersCount",null),Object(r.c)([u.a],e.prototype,"boardsCount",null),Object(r.c)([u.a],e.prototype,"activeBoardsLimit",null),Object(r.c)([u.a],e.prototype,"expireLimits",null),Object(r.c)([u.a],e.prototype,"getReceiver",null),Object(r.c)([u.a],e.prototype,"role",null),Object(r.c)([u.a],e.prototype,"userIsAdmin",null),Object(r.c)([u.a],e.prototype,"title",null),Object(r.c)([u.a],e.prototype,"hasFeaturePostInvitationPayments",null),Object(r.c)([u.a],e.prototype,"isPersonal",null),Object(r.c)([u.a],e.prototype,"isTeam",null),Object(r.c)([u.a],e.prototype,"isOrganizationType",null),Object(r.c)([u.a],e.prototype,"isTrialTeam",null),e}();t.a=m},494:function(e,t,n){"use strict";n.d(t,"c",function(){return f}),n.d(t,"b",function(){return b}),n.d(t,"h",function(){return y}),n.d(t,"f",function(){return h}),n.d(t,"i",function(){return g}),n.d(t,"g",function(){return P}),n.d(t,"d",function(){return v}),n.d(t,"j",function(){return j}),n.d(t,"e",function(){return I}),n.d(t,"a",function(){return C});var r,o=n(21),i=n(32),a=n(64),c=n(173),u=n(341),s=n(114),l=n(33),p=n(234);function f(e){return{subscription:{card:e.id},info:e.card&&{country:e.card.country,city:e.card.address_city,zip:e.card.address_zip,name1:e.card.name,state:e.card.address_state,street1:e.card.address_line1}||{}}}function b(e,t){return function(e,t){return Object(o.b)(this,void 0,Promise,function(){var n;return Object(o.e)(this,function(r){switch(r.label){case 0:return[4,t.getPlans()];case 1:return n=r.sent(),[2,m(Object(o.a)(Object(o.a)({},e),{plans:n}),t)]}})})}(e,t).then(function(e){return function(e,t){var n,r=e.receiver,a=i.a.billing.selectById(r.receiverId),c=function(){var t={};return Object.keys(e.info||{}).forEach(function(n){e.info[n]&&(t[n]=e.info[n])}),a.updateInfo(t)},u=!r.hasCustomer&&!Object(l.pb)(e.activePlan.account)&&Object(l.rb)({type:e.activePlan.account.type});if(r.hasCustomer)n=c();else if(u&&Object(l.pb)({type:e.targetPlanType})){var s=Object(o.a)(Object(o.a)({},d(e)),{planType:e.targetPlanType,appendAccountId:e.receiverId});n=i.a.organizations.createOrganization(s).then(function(t){e=Object(o.a)(Object(o.a)({},e),{subscriptionWasCreated:!0}),r=t.billingReceiver})}else n=function(e,t){return i.a.billing.selectById(e.receiverId).createCustomer(d(e)).then(function(e){return t.setReceiverDeprecated(),e})}(e,t).then(function(t){r.customer=t,r.hasCustomer=!0,r.hasSubscription=!0,e.customerWasCreated=!0,e.subscriptionWasCreated=!0}).then(function(){return c()});return n.then(function(){return Object(o.a)(Object(o.a)({},e),{receiver:r})})}(e,t)}).then(function(e){return function(e,t){if(!function(e){return!e.customerWasCreated&&!e.receiver.hasSubscription}(e))return Promise.resolve(e);var n=i.a.billing.selectById(e.receiverId);return e.subscriptionWasCreated=!0,n.createSubscription(d(e)).then(function(n){return n&&n.receiverId&&e.receiverId!==n.receiverId&&(e.receiverId=n.receiverId),t.setReceiverDeprecated(),t.getReceiver(e.receiverId).then(function(t){return Object(o.a)(Object(o.a)({},e),{receiver:t})})})}(e,t)}).then(function(e){return function(e,t){if(function(e){var t=e.receiver.customer.subscription.plan;return!e.subscriptionWasCreated&&(e.currentQuantity!==e.quantity||t&&t.interval!==e.paymentInterval||e.targetPlanIdent!==h(e.receiver))}(e)){var n=i.a.billing.selectById(e.receiverId);return n.updateSubscription(d(e)).then(function(n){t.setReceiverDeprecated();var r=e.receiverId;return n.receiverId&&n.receiverId!==e.receiverId&&(r=n.receiverId),t.getReceiver(r)})}return Promise.resolve(e.receiver)}(e,t)})}function m(e,t){if(e.receiverId)return t.getReceiver(e.receiverId).then(function(t){return Object(o.a)(Object(o.a)({},e),{receiver:t})});var n=d(e);return function(e,t,n){if(Object(l.pb)({type:e})){var r=Object(o.a)(Object(o.a)({},t),{planType:e,appendAccountId:n});return i.a.organizations.createOrganization(r).then(function(e){return e.billingReceiver})}return i.a.billing.createReceiver(t)}(e.targetPlanType,n,e.appendAccountId).then(function(t){return Object(o.a)(Object(o.a)({},e),{receiver:t,subscriptionWasCreated:!0,receiverId:t.receiverId})})}function d(e){var t=e.subscription,n=y(e.paymentInterval,e.activePlan,e.plans,e.targetPlanIdent,e.receiver),r=e.receiver&&e.receiver.customer&&e.receiver.customer.accountBalance?void 0:e.couponId;return{card:t.card,quantity:e.quantity,plan:n,coupon:r,name:e.name,cancelAtPeriodEnd:e.cancelAtPeriodEnd}}function y(e,t,n,r,o){if(o&&(!r||r===h(o))&&o.customer&&"Team_yearly_30off"===o.customer.subscription.plan.id&&!t.expired)return"Team_yearly_30off";var i=P(o);return(!r||r&&r===h(o))&&i?e===a.d.YEARLY?function(e,t,n,r){var o=n&&n.customer,i=o&&o.subscription,c=i&&i.plan&&i.plan.id;if(!Object.keys(t).map(function(e){return t[e].id}).includes(c)&&i)return r===a.d.YEARLY?void 0:t.team_yearly.id;if(c){var u=c.split("_")[0];return O(t,u,a.d.YEARLY)}return e.isTeam?t.team_yearly.id:t.professional_yearly.id}(t,n,o,i):function(e,t,n){var r=n&&n.customer,o=r&&r.subscription,i=o&&o.plan&&o.plan.id;if(!Object.keys(t).map(function(e){return t[e].id}).includes(i)&&o)return;if(i){var c=i.split("_")[0];return O(t,c,a.d.MONTHLY)}return e.isTeam?t.team_monthly.id:t.professional_monthly.id}(t,n,o):O(n,r,e)}function h(e){var t=e&&e.customer,n=t&&t.subscription,r=n&&n.plan&&n.plan.id;return r?r.split("_")[0].toLowerCase():void 0}function g(e,t,n){if(t){var r=t.toLowerCase();return n===a.d.MONTHLY?r+="_monthly":r+="_yearly",e[r]}}function O(e,t,n){var r=g(e,t,n);return r?r.id:void 0}function P(e){if(e){var t=e&&e.customer,n=t&&t.subscription,r=n&&n.plan&&n.plan.interval;if(r)return"month"===r?a.d.MONTHLY:a.d.YEARLY}}function v(e,t){return i.a.accounts.createTeamInOrganization(e,Object(p.g)(),t)}function j(e,t){return i.a.organizations.selectById(e).toggleDayPasses(t)}function I(e){switch(e){case c.a.COMPANY:return u.a.COMPANY;case c.a.CONSULTANT:return u.a.CONSULTANT_SLF;case c.a.BUSINESS:return u.a.BUSINESS;case c.a.FREE:return s.a.FREE_TEAM;case c.a.FREE_2018:return s.a.FREE_TEAM_2018;case c.a.PERSONAL:return s.a.NEW_PREMIUM;case c.a.TEAM:return s.a.PAID_TEAM;default:return}}var M=((r={})[s.a.FREE_TEAM]=[c.a.TEAM,c.a.CONSULTANT,c.a.BUSINESS,c.a.COMPANY],r[s.a.FREE_TEAM_2018]=[c.a.TEAM,c.a.CONSULTANT,c.a.BUSINESS,c.a.COMPANY],r[s.a.PAID_TEAM]=[c.a.CONSULTANT,c.a.BUSINESS,c.a.COMPANY],r[s.a.TRIAL_TEAM]=[c.a.CONSULTANT,c.a.BUSINESS,c.a.COMPANY],r[s.a.PREMIUM]=[c.a.TEAM,c.a.CONSULTANT,c.a.BUSINESS,c.a.COMPANY],r[s.a.NEW_PREMIUM]=[c.a.TEAM,c.a.CONSULTANT,c.a.BUSINESS,c.a.COMPANY],r[s.a.TEAM]=[c.a.TEAM,c.a.COMPANY],r);function C(e,t){var n=M[e];return!(!n||void 0===n.includes)&&n.includes(t)}},495:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var r=new(function(){function t(){}return t.prototype.tryCopyText=function(t){return e.log("DumbClipboard","[tryCopyText]",t),!1},t}()),o=r;function i(e){o=e||r}function a(){return o}}).call(this,n(29))},62:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(30),o=n(25),i=n(1137);function a(){return Object(o.b)().directive("rtbModal",c),i}function c(){return Object(r.a)({restrict:"E",template:i,transclude:!0})}},64:function(e,t,n){"use strict";n.d(t,"g",function(){return l}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return u});var r=n(141),o=n(672);n.d(t,"e",function(){return o.a});var i=n(493);n.d(t,"a",function(){return i.a});var a,c,u,s=["Please, bear with us! We are loading your billing info.","Take a moment to meditate while your billing info is loading.","We are loading your billing info and appreciating your patience!","While your billing info is loading, let us remind you that Miro loves you <3","Who else can you invite to your Miro team while your billing info is loading?"];function l(){var e=Math.floor(Math.random()*s.length);return s[e]}!function(e){e.SUBMIT="submit",e.CANCEL="cancel",e.NOT_LOCKED="not_locked"}(a||(a={})),function(e){e.SUBMIT="submit",e.CANCEL="cancel"}(c||(c={})),function(e){e.YEARLY="year",e.MONTHLY="month"}(u||(u={}));r.b("Billing",function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(12),n.e(11),n.e(19),n.e(20),n.e(18),n.e(32),n.e(31),n.e(51)]).then(n.bind(null,5558)).then(function(e){return e.default})}),t.f=r.a("Billing")},67:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(30),o=n(25),i=n(1139);function a(){return Object(o.b)().directive("rtbModalCloseButton",c),i}function c(){return Object(r.a)({restrict:"E",template:i})}},672:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(21),o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.pricePerMonth=10,t}return Object(r.d)(t,e),Object.defineProperty(t.prototype,"minTeamSize",{get:function(){return Math.max(this.membersCount,rtb.config.minTeamSize)},enumerable:!0,configurable:!0}),t}(n(1149).a)},673:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return m});var r=n(21),o=n(94),i=n.n(o),a=n(32),c=n(1728),u=n(492),s=n(346),l=n(494),p=n(234),f=n(64);function b(e){return+e.toFixed(2)}var m=function(t){function n(n,r,o){var i=t.call(this,n,o)||this;return i.receiver=r,i._costPerMonthInMonthPlanOneLicence=0,i._costPerMonthInYearPlanOneLicence=0,i.updated=new e.Signal,i.loading=!1,i.discountType=u.a.COUPON,i.maxBoards=Object(p.g)(),o&&o.billingPlans&&(i.billingPlans=o.billingPlans),i.loadStripeInfo(),i}return Object(r.d)(n,t),Object.defineProperty(n.prototype,"receiverPaymentInterval",{get:function(){return Object(l.g)(this.receiver)||f.d.MONTHLY},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"planIdent",{get:function(){return Object(l.f)(this.receiver)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"minTeamSize",{get:function(){return Math.max(this.membersCount,this.paymentOptions.minAccountSize||rtb.config.minTeamSize)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxTeamSize",{get:function(){return Math.max(this.membersLimit,rtb.config.maxTeamSize)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"paymentInterval",{get:function(){return this.paymentOptions.paymentInterval||this.receiverPaymentInterval},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"costPerMonthInMonthPlan",{get:function(){return b(this.costPerMonthInMonthPlanOneLicence*this.paymentMemberCount)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"costPerMonthInYearPlan",{get:function(){return b(this.costPerMonthInYearPlanOneLicence*this.paymentMemberCount)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"totalDiscount",{get:function(){var e=0,t=this.coupon;return t&&t.valid&&t.percentOff&&(e=this.totalCost*t.percentOff/100),t&&t.valid&&t.amountOff&&(e=t.amountOff/100),b(e)>this.totalCost?this.totalCost:e},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"totalCost",{get:function(){return this.paymentInterval===f.d.MONTHLY?this.costPerMonthInMonthPlan:b(12*this.costPerMonthInYearPlan)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"totalCostInMonth",{get:function(){return this.paymentInterval===f.d.MONTHLY?this.totalCost:b(this.totalCost/12)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"totalSum",{get:function(){var e=this.stripeUpcomingInfo;if(e){var t=e.total-e.prorationAmount,n=e.amountDue;if(!this.changedPaymentInterval){n=e.amountDue-t;var r=this.baseOn;r&&(n-=100*r.totalSum)}return n<0?0:b(n/100)}return 0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"customer",{get:function(){return this.receiver.customer},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"canUseCoupon",{get:function(){return this.paymentMemberCount>=this.accountInfo.membersLimit&&!!this.customer&&!this.customer.accountBalance},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"nextPurchaseDate",{get:function(){var e=this.stripeUpcomingInfo;if(e&&!this.changedPaymentInterval)return i()(e.date,"X").format("LL");var t=i()();return(this.paymentInterval===f.d.MONTHLY?t.add(1,"M"):t.add(1,"y")).format("LL")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"prorationPaymentDate",{get:function(){if(this.paymentInterval===f.d.YEARLY){var e=this.stripeUpcomingInfo;return e?i()(e.prorationPaymentDate,"X").format("LL"):i()().endOf("month").format("LL")}return this.nextPurchaseDate},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"discountWasApplied",{get:function(){return!1},enumerable:!0,configurable:!0}),n.prototype.directionUpgrade=function(){return this.changedPaymentInterval||this.paymentMemberCount>this.paymentMemberCountFromAccount},n.prototype.directionDowngrade=function(){return this.paymentMemberCount<this.paymentMemberCountFromAccount},Object.defineProperty(n.prototype,"changedPaymentInterval",{get:function(){return!!this.stripeUpcomingInfo&&this.receiverPaymentInterval!==this.paymentInterval},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"changedMemberCount",{get:function(){return!!this.stripeUpcomingInfo&&this.paymentMemberCount!==this.paymentMemberCountFromAccount},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"discountInMonthPlan",{get:function(){return this.totalDiscount},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"discountInYearPlan",{get:function(){return this.totalDiscount},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"baseOn",{get:function(){return this.paymentOptions.baseOn},enumerable:!0,configurable:!0}),n.prototype.loadStripeInfo=function(){var e=this;this.loading=!0;var t,n=this.baseOn;n?(this.loadingAllInfoForCurrentPlanPromise=n.loadingAllInfoForCurrentPlanPromise,t=this.loadAllInfo()):(this.loadingAllInfoForCurrentPlanPromise=this.loadAllInfo(),t=this.loadingAllInfoForCurrentPlanPromise.then(function(){})),t.then(function(){e.loading=!1,e.updated.dispatch()})},n.prototype.getBillingPlans=function(){var e=this;return this.billingPlans?Promise.resolve(this.billingPlans):a.a.billing.getPlans().then(function(t){return e.billingPlans=t,t})},n.prototype.loadAllInfo=function(){var e=this;return this.getBillingPlans().then(function(t){var n=e.paymentMemberCount,r=a.a.billing.selectById(e.accountInfo.id),o=r.getUpcoming({plan:Object(l.h)(f.d.YEARLY,e.accountInfo,t,e.paymentOptions.targetPlanIdent,e.receiver),quantity:n}),i=r.getUpcoming({plan:Object(l.h)(f.d.MONTHLY,e.accountInfo,t,e.paymentOptions.targetPlanIdent,e.receiver),quantity:n});return Promise.all([o,i]).then(function(t){var r=t[0],o=t[1];e.paymentInterval===f.d.YEARLY?e.stripeUpcomingInfo=r:e.stripeUpcomingInfo=o,e._costPerMonthInYearPlanOneLicence=b((r.total-r.prorationAmount)/12/n/100),e._costPerMonthInMonthPlanOneLicence=b((o.total-o.prorationAmount)/n/100)})})},Object.defineProperty(n.prototype,"costPerMonthInYearPlanOneLicence",{get:function(){return this._costPerMonthInYearPlanOneLicence},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"costPerMonthInMonthPlanOneLicence",{get:function(){return this._costPerMonthInMonthPlanOneLicence},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"prorationQuantityIncrement",{get:function(){return this.stripeUpcomingInfo&&this.stripeUpcomingInfo.prorationQuantityIncrement||0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isCurrentPlan",{get:function(){return this.paymentOptions&&this.paymentOptions.targetPlanIdent&&this.paymentOptions.targetPlanIdent===Object(l.f)(this.receiver)},enumerable:!0,configurable:!0}),Object(r.c)([s.a],n.prototype,"receiverPaymentInterval",null),Object(r.c)([s.a],n.prototype,"planIdent",null),Object(r.c)([s.a],n.prototype,"paymentInterval",null),n}(c.a)}).call(this,n(38))}}]);
//# sourceMappingURL=cmn~AppAct.des~Boa~BoaInfOpe~Das.des~Das.mob~Set.a2181b6e9fc1acba961d.js.map