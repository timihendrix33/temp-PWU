!function(e,o){"undefined"!=typeof module&&module.exports?module.exports=o(require("angular")):"function"==typeof define&&define.amd?define(["angular"],o):o(e.angular)}(this,function(e){"use strict";var o=e.module("ngDialog",[]),a=e.element,n=e.isDefined,t=(document.body||document.documentElement).style,l=n(t.animation)||n(t.WebkitAnimation)||n(t.MozAnimation)||n(t.MsAnimation)||n(t.OAnimation),i="animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",r="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",c=!1,s={},d=[],g=!1;return o.provider("ngDialog",function(){var o=this.defaults={className:"ngdialog-theme-default",plain:!1,showClose:!0,closeByDocument:!0,closeByEscape:!0,closeByNavigation:!1,appendTo:!1,preCloseCallback:!1,overlay:!0,cache:!0,trapFocus:!0,preserveFocus:!0,ariaAuto:!0,ariaRole:null,ariaLabelledById:null,ariaLabelledBySelector:null,ariaDescribedById:null,ariaDescribedBySelector:null};this.setForceBodyReload=function(e){c=e||!1},this.setDefaults=function(a){e.extend(o,a)};var n,t=0,u=0,p={};this.$get=["$document","$templateCache","$compile","$q","$http","$rootScope","$timeout","$window","$controller","$injector",function(f,m,v,y,h,D,b,C,$,B){var A=f.find("body");c&&D.$on("$locationChangeSuccess",function(){A=f.find("body")});var S={onDocumentKeydown:function(e){27===e.keyCode&&k.close("$escape")},activate:function(e){var o=e.data("$ngDialogOptions");o.trapFocus&&(e.on("keydown",S.onTrapFocusKeydown),A.on("keydown",S.onTrapFocusKeydown))},deactivate:function(e){e.off("keydown",S.onTrapFocusKeydown),A.off("keydown",S.onTrapFocusKeydown)},deactivateAll:function(){e.forEach(function(o){var a=e.element(o);S.deactivate(a)})},setBodyPadding:function(e){var o=parseInt(A.css("padding-right")||0,10);A.css("padding-right",o+e+"px"),A.data("ng-dialog-original-padding",o)},resetBodyPadding:function(){var e=A.data("ng-dialog-original-padding");e?A.css("padding-right",e+"px"):A.css("padding-right","")},performCloseDialog:function(e,o){var a=e.attr("id"),t=s[a];if(t){if("undefined"!=typeof C.Hammer){var r=t.hammerTime;r.off("tap",n),r.destroy&&r.destroy(),delete t.hammerTime}else e.unbind("click");1===u&&A.unbind("keydown"),e.hasClass("ngdialog-closing")||(u-=1);var c=e.data("$ngDialogPreviousFocus");c&&c.focus(),D.$broadcast("ngDialog.closing",e),u=0>u?0:u,l?(t.$destroy(),e.unbind(i).bind(i,function(){e.remove(),0===u&&(A.removeClass("ngdialog-open"),S.resetBodyPadding()),D.$broadcast("ngDialog.closed",e)}).addClass("ngdialog-closing")):(t.$destroy(),e.remove(),0===u&&(A.removeClass("ngdialog-open"),S.resetBodyPadding()),D.$broadcast("ngDialog.closed",e)),p[a]&&(p[a].resolve({id:a,value:o,$dialog:e,remainingDialogs:u}),delete p[a]),s[a]&&delete s[a],d.splice(d.indexOf(a),1),d.length||(A.unbind("keydown",S.onDocumentKeydown),g=!1)}},closeDialog:function(o,a){var n=o.data("$ngDialogPreCloseCallback");if(n&&e.isFunction(n)){var t=n.call(o,a);e.isObject(t)?t.closePromise?t.closePromise.then(function(){S.performCloseDialog(o,a)}):t.then(function(){S.performCloseDialog(o,a)},function(){}):t!==!1&&S.performCloseDialog(o,a)}else S.performCloseDialog(o,a)},onTrapFocusKeydown:function(o){var a,n=e.element(o.currentTarget);if(n.hasClass("ngdialog"))a=n;else if(a=S.getActiveDialog(),null===a)return;var t=9===o.keyCode,l=o.shiftKey===!0;t&&S.handleTab(a,o,l)},handleTab:function(e,o,a){var n=S.getFocusableElements(e);if(0===n.length)return void(document.activeElement&&document.activeElement.blur());var t=document.activeElement,l=Array.prototype.indexOf.call(n,t),i=-1===l,r=0===l,c=l===n.length-1,s=!1;a?(i||r)&&(n[n.length-1].focus(),s=!0):(i||c)&&(n[0].focus(),s=!0),s&&(o.preventDefault(),o.stopPropagation())},autoFocus:function(e){var o=e[0],n=o.querySelector("*[autofocus]");if(null===n||(n.focus(),document.activeElement!==n)){var t=S.getFocusableElements(e);if(t.length>0)return void t[0].focus();var l=S.filterVisibleElements(o.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span"));if(l.length>0){var i=l[0];a(i).attr("tabindex","-1").css("outline","0"),i.focus()}}},getFocusableElements:function(e){var o=e[0],a=o.querySelectorAll(r);return S.filterVisibleElements(a)},filterVisibleElements:function(e){for(var o=[],a=0;a<e.length;a++){var n=e[a];(n.offsetWidth>0||n.offsetHeight>0)&&o.push(n)}return o},getActiveDialog:function(){var e=document.querySelectorAll(".ngdialog");return 0===e.length?null:a(e[e.length-1])},applyAriaAttributes:function(e,o){if(o.ariaAuto){if(!o.ariaRole){var a=S.getFocusableElements(e).length>0?"dialog":"alertdialog";o.ariaRole=a}o.ariaLabelledBySelector||(o.ariaLabelledBySelector="h1,h2,h3,h4,h5,h6"),o.ariaDescribedBySelector||(o.ariaDescribedBySelector="article,section,p")}o.ariaRole&&e.attr("role",o.ariaRole),S.applyAriaAttribute(e,"aria-labelledby",o.ariaLabelledById,o.ariaLabelledBySelector),S.applyAriaAttribute(e,"aria-describedby",o.ariaDescribedById,o.ariaDescribedBySelector)},applyAriaAttribute:function(e,o,n,t){if(n&&e.attr(o,n),t){var l=e.attr("id"),i=e[0].querySelector(t);if(!i)return;var r=l+"-"+o;return a(i).attr("id",r),e.attr(o,r),r}}},k={open:function(l){function i(e,o){return h.get(e,o||{}).then(function(e){return e.data||""})}function r(o){return o?e.isString(o)&&c.plain?o:"boolean"!=typeof c.cache||c.cache?m.get(o)||i(o,{cache:!0}):i(o,{cache:!1}):"Empty template"}var c=e.copy(o),f=++t,E="ngdialog"+f;d.push(E),l=l||{},e.extend(c,l);var w;p[E]=w=y.defer();var F;s[E]=F=e.isObject(c.scope)?c.scope.$new():D.$new();var P,T,x=e.extend({},c.resolve);return e.forEach(x,function(o,a){x[a]=e.isString(o)?B.get(o):B.invoke(o,null,null,a)}),y.all({template:r(c.template||c.templateUrl),locals:y.all(x)}).then(function(o){var t=o.template,l=o.locals;if(m.put(c.template||c.templateUrl,t),c.showClose&&(t+='<div class="ngdialog-close"></div>'),P=a('<div id="ngdialog'+f+'" class="ngdialog"></div>'),P.html(c.overlay?'<div class="ngdialog-overlay"></div><div class="ngdialog-content" role="document">'+t+"</div>":'<div class="ngdialog-content" role="document">'+t+"</div>"),P.data("$ngDialogOptions",c),c.data&&e.isString(c.data)){var i=c.data.replace(/^\s*/,"")[0];F.ngDialogData="{"===i||"["===i?e.fromJson(c.data):c.data}else c.data&&e.isObject(c.data)&&(F.ngDialogData=c.data);if(c.controller&&(e.isString(c.controller)||e.isArray(c.controller)||e.isFunction(c.controller))){var r=c.controller;c.controllerAs&&e.isString(c.controllerAs)&&(r+=" as "+c.controllerAs);var s=$(r,e.extend(l,{$scope:F,$element:P}));P.data("$ngDialogControllerController",s)}if(c.className&&P.addClass(c.className),T=c.appendTo&&e.isString(c.appendTo)?e.element(document.querySelector(c.appendTo)):A,S.applyAriaAttributes(P,c),c.preCloseCallback){var d;e.isFunction(c.preCloseCallback)?d=c.preCloseCallback:e.isString(c.preCloseCallback)&&F&&(e.isFunction(F[c.preCloseCallback])?d=F[c.preCloseCallback]:F.$parent&&e.isFunction(F.$parent[c.preCloseCallback])?d=F.$parent[c.preCloseCallback]:D&&e.isFunction(D[c.preCloseCallback])&&(d=D[c.preCloseCallback])),d&&P.data("$ngDialogPreCloseCallback",d)}if(F.closeThisDialog=function(e){S.closeDialog(P,e)},b(function(){var e=document.querySelectorAll(".ngdialog");S.deactivateAll(e),v(P)(F);var o=C.innerWidth-A.prop("clientWidth");A.addClass("ngdialog-open");var a=o-(C.innerWidth-A.prop("clientWidth"));a>0&&S.setBodyPadding(a),T.append(P),S.activate(P),c.trapFocus&&S.autoFocus(P),c.name?D.$broadcast("ngDialog.opened",{dialog:P,name:c.name}):D.$broadcast("ngDialog.opened",P)}),g||(A.bind("keydown",S.onDocumentKeydown),g=!0),c.closeByNavigation&&D.$on("$locationChangeSuccess",function(){S.closeDialog(P)}),c.preserveFocus&&P.data("$ngDialogPreviousFocus",document.activeElement),n=function(e){var o=c.closeByDocument?a(e.target).hasClass("ngdialog-overlay"):!1,n=a(e.target).hasClass("ngdialog-close");(o||n)&&k.close(P.attr("id"),n?"$closeButton":"$document")},"undefined"!=typeof C.Hammer){var p=F.hammerTime=C.Hammer(P[0]);p.on("tap",n)}else P.bind("click",n);return u+=1,k}),{id:E,closePromise:w.promise,close:function(e){S.closeDialog(P,e)}}},openConfirm:function(o){var n=y.defer(),t={closeByEscape:!1,closeByDocument:!1};e.extend(t,o),t.scope=e.isObject(t.scope)?t.scope.$new():D.$new(),t.scope.confirm=function(e){n.resolve(e);var o=a(document.getElementById(l.id));S.performCloseDialog(o,e)};var l=k.open(t);return l.closePromise.then(function(e){return e?n.reject(e.value):n.reject()}),n.promise},isOpen:function(e){var o=a(document.getElementById(e));return o.length>0},close:function(e,o){var n=a(document.getElementById(e));if(n.length)S.closeDialog(n,o);else if("$escape"===e){var t=d[d.length-1];n=a(document.getElementById(t)),n.data("$ngDialogOptions").closeByEscape&&S.closeDialog(n,o)}return k},closeAll:function(e){for(var o=document.querySelectorAll(".ngdialog"),n=o.length-1;n>=0;n--){var t=o[n];S.closeDialog(a(t),e)}},getDefaults:function(){return o}};return k}]}),o.directive("ngDialog",["ngDialog",function(o){return{restrict:"A",scope:{ngDialogScope:"="},link:function(a,n,t){n.on("click",function(n){n.preventDefault();var l=e.isDefined(a.ngDialogScope)?a.ngDialogScope:"noScope";e.isDefined(t.ngDialogClosePrevious)&&o.close(t.ngDialogClosePrevious);var i=o.getDefaults();o.open({template:t.ngDialog,className:t.ngDialogClass||i.className,controller:t.ngDialogController,controllerAs:t.ngDialogControllerAs,scope:l,data:t.ngDialogData,showClose:"false"===t.ngDialogShowClose?!1:"true"===t.ngDialogShowClose?!0:i.showClose,closeByDocument:"false"===t.ngDialogCloseByDocument?!1:"true"===t.ngDialogCloseByDocument?!0:i.closeByDocument,closeByEscape:"false"===t.ngDialogCloseByEscape?!1:"true"===t.ngDialogCloseByEscape?!0:i.closeByEscape,preCloseCallback:t.ngDialogPreCloseCallback||i.preCloseCallback})})}}}]),o});