!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.ProgressBar=t()}}(function(){var t;return function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var p=n[s]={exports:{}};t[s][0].call(p.exports,function(e){var n=t[s][1][e];return i(n?n:e)},p,p.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,n,r){!function(e){"undefined"==typeof SHIFTY_DEBUG_NOW&&(SHIFTY_DEBUG_NOW=function(){return+new Date});var i=function(){"use strict";function i(){}function o(t,e){var n;for(n in t)Object.hasOwnProperty.call(t,n)&&e(n)}function s(t,e){return o(e,function(n){t[n]=e[n]}),t}function a(t,e){o(e,function(n){"undefined"==typeof t[n]&&(t[n]=e[n])})}function u(t,e,n,r,i,o,s){var a,u=(t-o)/i;for(a in e)e.hasOwnProperty(a)&&(e[a]=h(n[a],r[a],d[s[a]],u));return e}function h(t,e,n,r){return t+(e-t)*n(r)}function p(t,e){var n=l.prototype.filter,r=t._filterArgs;o(n,function(i){"undefined"!=typeof n[i][e]&&n[i][e].apply(t,r)})}function f(t,e,n,r,i,o,s,a,h){S=e+n,x=Math.min(v(),S),O=x>=S,t.isPlaying()&&!O?(h(t._timeoutHandler,y),p(t,"beforeTween"),u(x,r,i,o,n,e,s),p(t,"afterTween"),a(r)):O&&(a(o),t.stop(!0))}function c(t,e){var n={};return"string"==typeof e?o(t,function(t){n[t]=e}):o(t,function(t){n[t]||(n[t]=e[t]||g)}),n}function l(t,e){this._currentState=t||{},this._configured=!1,this._scheduleFunction=_,"undefined"!=typeof e&&this.setConfig(e)}var d,_,g="linear",w=500,y=1e3/60,m=Date.now?Date.now:function(){return+new Date},v=SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:m;_="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame||setTimeout:setTimeout;var S,x,O;return l.prototype.tween=function(t){return this._isTweening?this:(void 0===t&&this._configured||this.setConfig(t),this._start(this.get()),this.resume())},l.prototype.setConfig=function(t){t=t||{},this._configured=!0,this._pausedAtTime=null,this._start=t.start||i,this._step=t.step||i,this._finish=t.finish||i,this._duration=t.duration||w,this._currentState=t.from||this.get(),this._originalState=this.get(),this._targetState=t.to||this.get(),this._timestamp=v();var e=this._currentState,n=this._targetState;return a(n,e),this._easing=c(e,t.easing||g),this._filterArgs=[e,this._originalState,n,this._easing],p(this,"tweenCreated"),this},l.prototype.get=function(){return s({},this._currentState)},l.prototype.set=function(t){this._currentState=t},l.prototype.pause=function(){return this._pausedAtTime=v(),this._isPaused=!0,this},l.prototype.resume=function(){this._isPaused&&(this._timestamp+=v()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0;var t=this;return this._timeoutHandler=function(){f(t,t._timestamp,t._duration,t._currentState,t._originalState,t._targetState,t._easing,t._step,t._scheduleFunction)},this._timeoutHandler(),this},l.prototype.stop=function(t){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=i,t&&(s(this._currentState,this._targetState),p(this,"afterTweenEnd"),this._finish.call(this,this._currentState)),this},l.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused},l.prototype.setScheduleFunction=function(t){this._scheduleFunction=t},l.prototype.dispose=function(){var t;for(t in this)this.hasOwnProperty(t)&&delete this[t]},l.prototype.filter={},l.prototype.formula={linear:function(t){return t}},d=l.prototype.formula,s(l,{now:v,each:o,tweenProps:u,tweenProp:h,applyFilter:p,shallowCopy:s,defaults:a,composeEasingObject:c}),"function"==typeof SHIFTY_DEBUG_NOW&&(e.timeoutHandler=f),"object"==typeof r?n.exports=l:"function"==typeof t&&t.amd?t(function(){return l}):"undefined"==typeof e.Tweenable&&(e.Tweenable=l),l}();!function(){i.shallowCopy(i.prototype.formula,{easeInQuad:function(t){return Math.pow(t,2)},easeOutQuad:function(t){return-(Math.pow(t-1,2)-1)},easeInOutQuad:function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},easeInCubic:function(t){return Math.pow(t,3)},easeOutCubic:function(t){return Math.pow(t-1,3)+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},easeInQuart:function(t){return Math.pow(t,4)},easeOutQuart:function(t){return-(Math.pow(t-1,4)-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeInQuint:function(t){return Math.pow(t,5)},easeOutQuint:function(t){return Math.pow(t-1,5)+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},easeInSine:function(t){return-Math.cos(t*(Math.PI/2))+1},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:-Math.pow(2,-10*t)+1},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-Math.pow(t-1,2))},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeOutBounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*t*t*(((e*=1.525)+1)*t-e):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},elastic:function(t){return-1*Math.pow(4,-8*t)*Math.sin(2*(6*t-1)*Math.PI/2)+1},swingFromTo:function(t){var e=1.70158;return(t/=.5)<1?.5*t*t*(((e*=1.525)+1)*t-e):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},swingFrom:function(t){var e=1.70158;return t*t*((e+1)*t-e)},swingTo:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},bounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bouncePast:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?2-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},easeFromTo:function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeFrom:function(t){return Math.pow(t,4)},easeTo:function(t){return Math.pow(t,.25)}})}(),function(){function t(t,e,n,r,i,o){function s(t){return((l*t+d)*t+_)*t}function a(t){return((g*t+w)*t+y)*t}function u(t){return(3*l*t+2*d)*t+_}function h(t){return 1/(200*t)}function p(t,e){return a(c(t,e))}function f(t){return t>=0?t:0-t}function c(t,e){var n,r,i,o,a,h;for(i=t,h=0;8>h;h++){if(o=s(i)-t,f(o)<e)return i;if(a=u(i),f(a)<1e-6)break;i-=o/a}if(n=0,r=1,i=t,n>i)return n;if(i>r)return r;for(;r>n;){if(o=s(i),f(o-t)<e)return i;t>o?n=i:r=i,i=.5*(r-n)+n}return i}var l=0,d=0,_=0,g=0,w=0,y=0;return _=3*e,d=3*(r-e)-_,l=1-_-d,y=3*n,w=3*(i-n)-y,g=1-y-w,p(t,h(o))}function e(e,n,r,i){return function(o){return t(o,e,n,r,i,1)}}i.setBezierFunction=function(t,n,r,o,s){var a=e(n,r,o,s);return a.x1=n,a.y1=r,a.x2=o,a.y2=s,i.prototype.formula[t]=a},i.unsetBezierFunction=function(t){delete i.prototype.formula[t]}}(),function(){function t(t,e,n,r,o){return i.tweenProps(r,e,t,n,1,0,o)}var e=new i;e._filterArgs=[],i.interpolate=function(n,r,o,s){var a=i.shallowCopy({},n),u=i.composeEasingObject(n,s||"linear");e.set({});var h=e._filterArgs;h.length=0,h[0]=a,h[1]=n,h[2]=r,h[3]=u,i.applyFilter(e,"tweenCreated"),i.applyFilter(e,"beforeTween");var p=t(n,a,r,o,u);return i.applyFilter(e,"afterTween"),p}}(),function(t){function e(t,e){C.length=0;var n,r=t.length;for(n=0;r>n;n++)C.push("_"+e+"_"+n);return C}function n(t){var e=t.match(S);return e?(1===e.length||t[0].match(v))&&e.unshift(""):e=["",""],e.join(b)}function r(e){t.each(e,function(t){var n=e[t];"string"==typeof n&&n.match(T)&&(e[t]=i(n))})}function i(t){return u(T,t,o)}function o(t){var e=s(t);return"rgb("+e[0]+","+e[1]+","+e[2]+")"}function s(t){return t=t.replace(/#/,""),3===t.length&&(t=t.split(""),t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),M[0]=a(t.substr(0,2)),M[1]=a(t.substr(2,2)),M[2]=a(t.substr(4,2)),M}function a(t){return parseInt(t,16)}function u(t,e,n){var r=e.match(t),i=e.replace(t,b);if(r)for(var o,s=r.length,a=0;s>a;a++)o=r.shift(),i=i.replace(b,n(o));return i}function h(t){return u(O,t,p)}function p(t){for(var e=t.match(x),n=e.length,r=t.match(k)[0],i=0;n>i;i++)r+=parseInt(e[i],10)+",";return r=r.slice(0,-1)+")"}function f(r){var i={};return t.each(r,function(t){var o=r[t];if("string"==typeof o){var s=w(o);i[t]={formatString:n(o),chunkNames:e(s,t)}}}),i}function c(e,n){t.each(n,function(t){for(var r=e[t],i=w(r),o=i.length,s=0;o>s;s++)e[n[t].chunkNames[s]]=+i[s];delete e[t]})}function l(e,n){t.each(n,function(t){var r=e[t],i=d(e,n[t].chunkNames),o=_(i,n[t].chunkNames);r=g(n[t].formatString,o),e[t]=h(r)})}function d(t,e){for(var n,r={},i=e.length,o=0;i>o;o++)n=e[o],r[n]=t[n],delete t[n];return r}function _(t,e){W.length=0;for(var n=e.length,r=0;n>r;r++)W.push(t[e[r]]);return W}function g(t,e){for(var n=t,r=e.length,i=0;r>i;i++)n=n.replace(b,+e[i].toFixed(4));return n}function w(t){return t.match(x)}function y(e,n){t.each(n,function(t){for(var r=n[t],i=r.chunkNames,o=i.length,s=e[t].split(" "),a=s[s.length-1],u=0;o>u;u++)e[i[u]]=s[u]||a;delete e[t]})}function m(e,n){t.each(n,function(t){for(var r=n[t],i=r.chunkNames,o=i.length,s="",a=0;o>a;a++)s+=" "+e[i[a]],delete e[i[a]];e[t]=s.substr(1)})}var v=/(\d|\-|\.)/,S=/([^\-0-9\.]+)/g,x=/[0-9.\-]+/g,O=new RegExp("rgb\\("+x.source+/,\s*/.source+x.source+/,\s*/.source+x.source+"\\)","g"),k=/^.*\(/,T=/#([0-9]|[a-f]){3,6}/gi,b="VAL",C=[],M=[],W=[];t.prototype.filter.token={tweenCreated:function(t,e,n,i){r(t),r(e),r(n),this._tokenData=f(t)},beforeTween:function(t,e,n,r){y(r,this._tokenData),c(t,this._tokenData),c(e,this._tokenData),c(n,this._tokenData)},afterTween:function(t,e,n,r){l(t,this._tokenData),l(e,this._tokenData),l(n,this._tokenData),m(r,this._tokenData)}}}(i)}(this)},{}],2:[function(t,e,n){var r=t("./shape"),i=t("./utils"),o=function(t,e){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",r.apply(this,arguments)};o.prototype=new r,o.prototype.constructor=o,o.prototype._pathString=function(t){var e=t.strokeWidth;t.trailWidth&&t.trailWidth>t.strokeWidth&&(e=t.trailWidth);var n=50-e/2;return i.render(this._pathTemplate,{radius:n,"2radius":2*n})},o.prototype._trailString=function(t){return this._pathString(t)},e.exports=o},{"./shape":6,"./utils":8}],3:[function(t,e,n){var r=t("./shape"),i=t("./utils"),o=function(t,e){this._pathTemplate="M 0,{center} L 100,{center}",r.apply(this,arguments)};o.prototype=new r,o.prototype.constructor=o,o.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 "+e.strokeWidth),t.setAttribute("preserveAspectRatio","none")},o.prototype._pathString=function(t){return i.render(this._pathTemplate,{center:t.strokeWidth/2})},o.prototype._trailString=function(t){return this._pathString(t)},e.exports=o},{"./shape":6,"./utils":8}],4:[function(t,e,n){var r=t("./line"),i=t("./circle"),o=t("./square"),s=t("./path");e.exports={Line:r,Circle:i,Square:o,Path:s}},{"./circle":2,"./line":3,"./path":5,"./square":7}],5:[function(t,e,n){var r=t("shifty"),i=t("./utils"),o={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},s=function(t,e){e=i.extend({duration:800,easing:"linear",from:{},to:{},step:function(){}},e);var n;n=i.isString(t)?document.querySelector(t):t,this.path=n,this._opts=e,this._tweenable=null;var r=this.path.getTotalLength();this.path.style.strokeDasharray=r+" "+r,this.set(0)};s.prototype.value=function(){var t=this._getComputedDashOffset(),e=this.path.getTotalLength(),n=1-t/e;return parseFloat(n.toFixed(6),10)},s.prototype.set=function(t){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(t);var e=this._opts.step;if(i.isFunction(e)){var n=this._easing(this._opts.easing),r=this._calculateTo(t,n);e(r,this._opts.shape||this,this._opts.attachment)}},s.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},s.prototype.animate=function(t,e,n){e=e||{},i.isFunction(e)&&(n=e,e={});var o=i.extend({},e),s=i.extend({},this._opts);e=i.extend(s,e);var a=this._easing(e.easing),u=this._resolveFromAndTo(t,a,o);this.stop(),this.path.getBoundingClientRect();var h=this._getComputedDashOffset(),p=this._progressToOffset(t),f=this;this._tweenable=new r,this._tweenable.tween({from:i.extend({offset:h},u.from),to:i.extend({offset:p},u.to),duration:e.duration,easing:a,step:function(t){f.path.style.strokeDashoffset=t.offset,e.step(t,e.shape||f,e.attachment)},finish:function(t){i.isFunction(n)&&n()}})},s.prototype._getComputedDashOffset=function(){var t=window.getComputedStyle(this.path,null);return parseFloat(t.getPropertyValue("stroke-dashoffset"),10)},s.prototype._progressToOffset=function(t){var e=this.path.getTotalLength();return e-t*e},s.prototype._resolveFromAndTo=function(t,e,n){return n.from&&n.to?{from:n.from,to:n.to}:{from:this._calculateFrom(e),to:this._calculateTo(t,e)}},s.prototype._calculateFrom=function(t){return r.interpolate(this._opts.from,this._opts.to,this.value(),t)},s.prototype._calculateTo=function(t,e){return r.interpolate(this._opts.from,this._opts.to,t,e)},s.prototype._stopTween=function(){null!==this._tweenable&&(this._tweenable.stop(),this._tweenable.dispose(),this._tweenable=null)},s.prototype._easing=function(t){return o.hasOwnProperty(t)?o[t]:t},e.exports=s},{"./utils":8,shifty:1}],6:[function(t,e,n){var r=t("./path"),i=t("./utils"),o="Object is destroyed",s=function a(t,e){if(!(this instanceof a))throw new Error("Constructor was called without new keyword");if(0!==arguments.length){this._opts=i.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{autoStyle:!0,color:null,value:"",className:"progressbar-text"}},e,!0);var n,o=this._createSvgView(this._opts);if(n=i.isString(t)?document.querySelector(t):t,!n)throw new Error("Container does not exist: "+t);this._container=n,this._container.appendChild(o.svg),this.text=null,this._opts.text.value&&(this.text=this._createTextElement(this._opts,this._container),this._container.appendChild(this.text)),this.svg=o.svg,this.path=o.path,this.trail=o.trail;var s=i.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new r(o.path,s)}};s.prototype.animate=function(t,e,n){if(null===this._progressPath)throw new Error(o);this._progressPath.animate(t,e,n)},s.prototype.stop=function(){if(null===this._progressPath)throw new Error(o);void 0!==this._progressPath&&this._progressPath.stop()},s.prototype.destroy=function(){if(null===this._progressPath)throw new Error(o);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,null!==this.text&&(this.text.parentNode.removeChild(this.text),this.text=null)},s.prototype.set=function(t){if(null===this._progressPath)throw new Error(o);this._progressPath.set(t)},s.prototype.value=function(){if(null===this._progressPath)throw new Error(o);return void 0===this._progressPath?0:this._progressPath.value()},s.prototype.setText=function(t){if(null===this._progressPath)throw new Error(o);null===this.text&&(this.text=this._createTextElement(this._opts,this._container),this._container.appendChild(this.text)),this.text.removeChild(this.text.firstChild),this.text.appendChild(document.createTextNode(t))},s.prototype._createSvgView=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(e,t);var n=null;(t.trailColor||t.trailWidth)&&(n=this._createTrail(t),e.appendChild(n));var r=this._createPath(t);return e.appendChild(r),{svg:e,path:r,trail:n}},s.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 100")},s.prototype._createPath=function(t){var e=this._pathString(t);return this._createPathElement(e,t)},s.prototype._createTrail=function(t){var e=this._trailString(t),n=i.extend({},t);return n.trailColor||(n.trailColor="#eee"),n.trailWidth||(n.trailWidth=n.strokeWidth),n.color=n.trailColor,n.strokeWidth=n.trailWidth,n.fill=null,this._createPathElement(e,n)},s.prototype._createPathElement=function(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",t),n.setAttribute("stroke",e.color),n.setAttribute("stroke-width",e.strokeWidth),e.fill?n.setAttribute("fill",e.fill):n.setAttribute("fill-opacity","0"),n},s.prototype._createTextElement=function(t,e){var n=document.createElement("p");return n.appendChild(document.createTextNode(t.text.value)),t.text.autoStyle&&(e.style.position="relative",n.style.position="absolute",n.style.top="50%",n.style.left="50%",n.style.padding=0,n.style.margin=0,i.setStyle(n,"transform","translate(-50%, -50%)"),n.style.color=t.text.color?t.text.color:t.color),n.className=t.text.className,n},s.prototype._pathString=function(t){throw new Error("Override this function for each progress bar")},s.prototype._trailString=function(t){throw new Error("Override this function for each progress bar")},e.exports=s},{"./path":5,"./utils":8}],7:[function(t,e,n){var r=t("./shape"),i=t("./utils"),o=function(t,e){this._pathTemplate="M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}",this._trailTemplate="M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}",r.apply(this,arguments)};o.prototype=new r,o.prototype.constructor=o,o.prototype._pathString=function(t){var e=100-t.strokeWidth/2;return i.render(this._pathTemplate,{width:e,strokeWidth:t.strokeWidth,halfOfStrokeWidth:t.strokeWidth/2})},o.prototype._trailString=function(t){var e=100-t.strokeWidth/2;return i.render(this._trailTemplate,{width:e,strokeWidth:t.strokeWidth,halfOfStrokeWidth:t.strokeWidth/2,startMargin:t.strokeWidth/2-t.trailWidth/2})},e.exports=o},{"./shape":6,"./utils":8}],8:[function(t,e,n){function r(t,e,n){t=t||{},e=e||{},n=n||!1;for(var i in e)if(e.hasOwnProperty(i)){var o=t[i],s=e[i];t[i]=n&&p(o)&&p(s)?r(o,s,n):s}return t}function i(t,e){var n=t;for(var r in e)if(e.hasOwnProperty(r)){var i=e[r],o="\\{"+r+"\\}",s=new RegExp(o,"g");n=n.replace(s,i)}return n}function o(t,e,n){for(var r=0;r<f.length;++r){var i=f[r];t.style[i+s(e)]=n}t.style[e]=n}function s(t){return t.charAt(0).toUpperCase()+t.slice(1)}function a(t){return"string"==typeof t||t instanceof String}function u(t){return"function"==typeof t}function h(t){return"[object Array]"===Object.prototype.toString.call(t)}function p(t){if(h(t))return!1;var e=typeof t;return"object"===e&&!!t}var f="Webkit Moz O ms".split(" ");e.exports={extend:r,render:i,setStyle:o,capitalize:s,isString:a,isFunction:u,isObject:p}},{}]},{},[4])(4)});