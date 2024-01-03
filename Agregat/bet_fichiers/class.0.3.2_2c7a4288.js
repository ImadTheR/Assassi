function _typeof(t){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function t(n){return typeof n}}else{_typeof=function t(n){return n&&typeof Symbol==="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n}}return _typeof(t)}var Lass=window.Lass||{};void function(){var f=this.util=this.util||{};f.type=function(t){var n,e=/\{\s*\[native\s*code\]\s*\}/i;null===t?n="null":"undefined"===typeof t?n="undefined":(n=Object.prototype.toString.call(t).match(/\w+/g)[1].toLowerCase(),"object"===n&&e.test(t+"")&&(n="function"));return n};f.trim=function(t){return(t+"").replace(/^[\s\u00A0]+|[\s\u00A0]+$/g,"")};f.extend=function(){var t=arguments.callee,n,e;"object"!==f.type(arguments[0])?(n=1,e=!!arguments[0]):(n=0,e=!1);var i=arguments[n]||{};n=[].slice.call(arguments,n+1);for(var o,r;n.length;){if(o=n.shift(),"object"===f.type(o)){var s,c;for(c in o){if(s=o[c],"object"===f.type(s)){if(s==window||s==document||"childNodes"in s&&"nextSibling"in s&&"nodeType"in s){if(e||!(c in i))i[c]=s}else if(s.jquery&&/^[\d\.]+$/.test(s.jquery))i[c]=s;else{r=f.type(i[c]);if(!(c in i)||"undefined"===r||"null"===r)i[c]={};"object"===f.type(i[c])&&t(e,i[c],s)}}else if(e||!(c in i))i[c]=s}}}return i};f.console=f.console||function(e){var i=!0,t={turn:function t(n){i=!!n},warn:function t(){}};return!e?t:f.extend(!0,t,{warn:function t(n){i&&e.warn(n)}})}.call(window,window.console);f.indexOf=function(t,n,e){var i=-1;e=("number"===f.type(e)?e:-1)+1;for(var o=t.length;e<o;e++){if(t[e]===n){i=e;break}}return i};return f}.call(Lass);void function(){var l=this.util,u=function t(){},a={impl:function t(n,e){"function"===l.type(e)&&(this[n]=e)},mix:function t(){l.extend.apply(null,[!0,this].concat([].slice.call(arguments)))}},h=function t(n,e){e=e||"impl super mix __getDefaultConfig __proto__ toString valueOf".split(" ");var i=l.extend(!0,{},n);try{for(var o=0;o<e.length;o++){delete i[e[o]]}}catch(t){}return i},p=function t(n,e){var i={},o=h(n),r;for(r in o){r in e&&"function"===l.type(e[r])&&(i[r]=e[r])}return i},t=function i(){for(var i,t,o,n=[],e=0;3>e;e++){n.push(l.type(arguments[e]))}e=l.indexOf(n,"function");o=-1===e?u:arguments[e];for(e=-1;-1!==(e=l.indexOf(n,"object",e))&&!(!i&&arguments[e].constructor===_?i=arguments[e]:t||(t=arguments[e]),i&&t);){}i||(i={});t||(t={});var r=t.config||{},s=[],c=t.inherit||u;t=t.mix||[{}];n=l.type(t);"object"===n?t=[t]:"array"!==n&&(t=[{}]);for(e=0;e<t.length;e++){"object"===l.type(t[e])&&s.push(t[e])}t=null;var f=function t(){var n=p(c.prototype,this);this["super"]=l.extend(!0,{},c.prototype,n);c.apply(this["super"],[].slice.call(arguments));n=h(this["super"]);l.extend(!0,this,n,{__getDefaultConfig:function t(){return r}});this.mix.apply(this,s);for(var e in i){"function"===l.type(this[e])&&this[e].__IS_ABSTRACT_METHOD__&&(this[e]=function(n){var t=function t(){i[n]()};t.__IS_ABSTRACT_METHOD__=i[n].__IS_ABSTRACT_METHOD__;var e=this;t.impl=t.implement=function(t){e.impl(n,t)};return t}.call(this,e))}this.constructor=arguments.callee;n=o.apply(this,[].slice.call(arguments));for(e in i){if("function"===l.type(this[e])&&this[e].__IS_ABSTRACT_METHOD__)i[e]()}if("object"===_typeof(n)&&null!==n)return n};f.prototype=l.extend(!0,{},a,i);f.extend=function(t){var n=l.extend.apply(null,[!0,{}].concat([].slice.call(arguments)));l.extend.call(null,!0,f.prototype,n)};return f},n=this.Empty=new t,_=new t({inherit:n},function(t,n){var e,i;for(i in t){e=l.type(t[i]),"function"===e?(this[i]=function(t,n){return function(){n&&l.console.warn(t+" method is not implement.")}}.call(this,i,n),this[i].__IS_ABSTRACT_METHOD__=!0):this[i]="object"===e?l.extend(!0,{},t[i]):t[i]}}),t={Clazz:t,Abstract:_};l.extend(!0,this,t);l.extend(!0,window,t)}.call(Lass);void function(){var c=this.util,r=function t(n,e,i){this.handle=n;this.once=!!e;this.data=i||{}},f=function t(n,e){this.type=n;this.data=e},t=function t(){this._||(this._={});this._.events={}};t.prototype={__initEvent:function t(n){this._.events[n]||(this._.events[n]=[]);return this._.events[n]},__eventParams:function t(n,e){var i=c.type(n);"function"===i?e=[n]:"array"===i?e=n:"object"!==i&&(n={});i=c.type(e);"function"===i?e=[e]:"array"!==i&&(e=[]);return{data:n,handle:e}},__bindEvent:function t(n,e,i,o){n=c.trim(n);n=this.__initEvent(n);e=this.__eventParams(e,i);for(i=0;i<e.handle.length;i++){"function"===c.type(e.handle[i])&&n.push(new r(e.handle[i],!!o,c.extend(!0,{},e.data)))}},__search:function t(n,e){for(var i=-1,o=0;o<n.length;o++){if(n[o].handle===e){i=o;break}}return i},on:function t(n,e,i){this.__bindEvent(n,e,i,!1);return this},one:function t(n,e,i){this.__bindEvent(n,e,i,!0);return this},off:function t(n,e){n=c.trim(n);"function"===c.type(e)&&(e=[e]);if("array"===c.type(e))for(var i=this.__initEvent(n),o,r=0;r<e.length;r++){"function"===c.type(e[r])&&(o=this.__search(i,e[r]),-1!==o&&i.splice(o,1))}else this._.events[n]=[];return this},fire:function t(n,e){n=c.trim(n);e="object"===c.type(e)&&e||{};for(var i=this.__initEvent(n),o=[],r,s=0;s<i.length;s++){r=i[s],r.handle.call(this,new f(n,c.extend(!0,{},r.data,e))),r.once&&o.push(r.handle)}this.off(n,o);return this}};this.Events=t}.call(Lass);void function(){var e=this.util,t=this.Events,n=new this.Clazz({mix:{_:{},elems:{},config:{},setConfig:function t(n){return this.config=e.extend(!0,{},this.__getDefaultConfig(),this.config,n)}},inherit:this.Empty});n.extend(new t);window.Component=this.Component=n}.call(Lass);
//# sourceMappingURL=../../../__sources__/common/js/libs/class.0.3.2_2c7a4288.js.map