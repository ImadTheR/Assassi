function _typeof(t){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _regeneratorRuntime(){"use strict";_regeneratorRuntime=function t(){return i};var i={},t=Object.prototype,l=t.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",n=e.toStringTag||"@@toStringTag";function a(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function t(e,r,n){return e[r]=n}}function u(t,e,r,n){var o=e&&e.prototype instanceof c?e:c,a=Object.create(o.prototype),i=new S(n||[]);return s(a,"_invoke",{value:_(t,r,i)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}i.wrap=u;var f={};function c(){}function p(){}function y(){}var d={};a(d,o,function(){return this});var v=Object.getPrototypeOf,m=v&&v(v(T([])));m&&m!==t&&l.call(m,o)&&(d=m);var g=y.prototype=c.prototype=Object.create(d);function w(t){["next","throw","return"].forEach(function(e){a(t,e,function(t){return this._invoke(e,t)})})}function b(u,c){function f(t,e,r,n){var o=h(u[t],u,e);if("throw"!==o.type){var a=o.arg,i=a.value;return i&&"object"==_typeof(i)&&l.call(i,"__await")?c.resolve(i.__await).then(function(t){f("next",t,r,n)},function(t){f("throw",t,r,n)}):c.resolve(i).then(function(t){a.value=t,r(a)},function(t){return f("throw",t,r,n)})}n(o.arg)}var o;s(this,"_invoke",{value:function t(r,n){function e(){return new c(function(t,e){f(r,n,t,e)})}return o=o?o.then(e,e):e()}})}function _(a,i,u){var c="suspendedStart";return function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return A()}for(u.method=t,u.arg=e;;){var r=u.delegate;if(r){var n=L(r,u);if(n){if(n===f)continue;return n}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if("suspendedStart"===c)throw c="completed",u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);c="executing";var o=h(a,i,u);if("normal"===o.type){if(c=u.done?"completed":"suspendedYield",o.arg===f)continue;return{value:o.arg,done:u.done}}"throw"===o.type&&(c="completed",u.method="throw",u.arg=o.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(undefined===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=undefined,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=undefined),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function T(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(l.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=undefined,t.done=!0,t};return n.next=n}}return{next:A}}function A(){return{value:undefined,done:!0}}return p.prototype=y,s(g,"constructor",{value:y,configurable:!0}),s(y,"constructor",{value:p,configurable:!0}),p.displayName=a(y,n,"GeneratorFunction"),i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,a(t,n,"GeneratorFunction")),t.prototype=Object.create(g),t},i.awrap=function(t){return{__await:t}},w(b.prototype),a(b.prototype,r,function(){return this}),i.AsyncIterator=b,i.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var a=new b(u(t,e,r,n),o);return i.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},w(g),a(g,n,"Generator"),a(g,o,function(){return this}),a(g,"toString",function(){return"[object Generator]"}),i.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=T,S.prototype={constructor:S,reset:function t(e){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&l.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=undefined)},stop:function t(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function t(r){if(this.done)throw r;var n=this;function e(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=undefined),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var u=l.call(a,"catchLoc"),c=l.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function t(e,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&l.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function t(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),f},finish:function t(e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),f}},catch:function t(e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var a=o.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function t(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=undefined),f}},i}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(!t)return;if(typeof t==="string")return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor)r=t.constructor.name;if(r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(t,e)}function _iterableToArray(t){if(typeof Symbol!=="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){if(e==null||e>t.length)e=t.length;for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function asyncGeneratorStep(t,e,r,n,o,a,i){try{var u=t[a](i);var c=u.value}catch(t){r(t);return}if(u.done){e(c)}else{Promise.resolve(c).then(n,o)}}function _asyncToGenerator(u){return function(){var t=this,i=arguments;return new Promise(function(e,r){var n=u.apply(t,i);function o(t){asyncGeneratorStep(n,e,r,o,a,"next",t)}function a(t){asyncGeneratorStep(n,e,r,o,a,"throw",t)}o(undefined)})}}var use=function(){var f=function t(){};var u=function t(e){return e.replace(/^\s+|\s+$/g,"")};var c=function t(e,r,n){var o=document.createElement("script");o.type="text/javascript";o.async=o.defer=true;var a=false;var i=function t(){if(o.readyState==="complete"||o.readyState==="loaded"){u.call(o)}};var u=function t(){o.onload=o.onerror=f;if(a){o.detachEvent("onreadystatechange",i)}setTimeout(r,25)};var c=function t(){o.onload=o.onerror=f;setTimeout(n,25)};o.onload=u;o.onerror=c;if(o.readyState&&!o.addEventListener){a=true;o.attachEvent("onreadystatechange",i)}o.src=e;document.body.appendChild(o)};var l=function t(e,r,n){var o=document.createElement("link");o.rel="stylesheet";o.media="all";o.onload=function(){o.onload=o.onerror=f;setTimeout(r,25)};o.onerror=function(){o.onload=o.onerror=f;setTimeout(n,25)};o.href=e;document.getElementsByTagName("head")[0].appendChild(o)};var s=function t(e,r,n){var o=t;var a=e.shift();var i=function t(){if(e.length){o(e,r,n)}else{r()}};if(/\.css([\?\#].*)?$/.test(a)){l(a,i,n)}else{c(a,i,n)}};var t=function t(e,r,n){var o=[].slice.call(arguments);if(!o.length){return}r=f;n=f;if(typeof o[o.length-1]==="function"){r=o.pop()}if(typeof o[o.length-1]==="function"){n=r;r=o.pop()}var a=[];var e;for(var i=0;i<o.length;i++){e=o[i];if(typeof e==="function"){e=e()}if(typeof e==="string"){e=u(e);if(e){a.push(e)}}}if(!a.length){r()}else{s(a,r,n)}};return t}.call(this);void function(){var r=false;var n=false;var o=false;var a=false;var i=function t(e){return Promise.all(e.filter(function(t){return typeof t==="function"}).map(function(t){return t()}))};var u=[];var c=[];var f=function t(){var e=[];if(a){if(!u.length&&!r&&n){e=c.slice();c=[];if(e.length){i(e)}}else{e=u.slice();u=[];if(e.length){n=false;r=true;i(e).then(function(){n=true;r=false})}setTimeout(function(){t()},19)}}else if(o){e=u.slice();u=[];if(e.length){n=false;r=true;i(e).then(function(){n=true;r=false})}}};document.addEventListener("DOMContentLoaded",function(){o=true;f()},false);window.addEventListener("load",function(){a=true;if(!u.length&&!r){n=true}f()},false);var t=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var o,r,a,n,i=arguments;return _regeneratorRuntime().wrap(function t(e){while(1)switch(e.prev=e.next){case 0:o=i.length>0&&i[0]!==undefined?i[0]:"now";for(r=i.length,a=new Array(r>1?r-1:0),n=1;n<r;n++){a[n-1]=i[n]}a=a||[];if(a.length){e.next=5;break}return e.abrupt("return",true);case 5:return e.abrupt("return",new Promise(function(r,n){var t=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark(function t(){return _regeneratorRuntime().wrap(function t(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(t,e){use.apply(void 0,_toConsumableArray(a).concat([t,function(){e("loadError")}]))}).then(r).catch(n));case 1:case"end":return e.stop()}},t)}));return function t(){return e.apply(this,arguments)}}();if(o==="domReady"){u.push(t)}else if(o==="load"){c.push(t)}else{t()}f()}));case 6:case"end":return e.stop()}},t)}));return function t(){return e.apply(this,arguments)}}();var e=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var o,r,a,n,i=arguments;return _regeneratorRuntime().wrap(function t(e){while(1)switch(e.prev=e.next){case 0:o=i.length>0&&i[0]!==undefined?i[0]:"now";for(r=i.length,a=new Array(r>1?r-1:0),n=1;n<r;n++){a[n-1]=i[n]}a=a||[];if(a.length){e.next=5;break}return e.abrupt("return",true);case 5:return e.abrupt("return",new Promise(function(r,n){var t=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark(function t(){return _regeneratorRuntime().wrap(function t(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(a.map(function(r){return new Promise(function(t,e){use(r,t,function(){e("loadError")})})})).then(r).catch(n));case 1:case"end":return e.stop()}},t)}));return function t(){return e.apply(this,arguments)}}();if(o==="domReady"){u.push(t)}else if(o==="load"){c.push(t)}else{t()}f()}));case 6:case"end":return e.stop()}},t)}));return function t(){return e.apply(this,arguments)}}();window.asyncScripts=t;window.asyncScripts.parallel=e}.call();
//# sourceMappingURL=../../../../__sources__/common/js/assets/async-scripts/index_71d22c6d.js.map