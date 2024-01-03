function _typeof(e){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function e(t){return typeof t}}else{_typeof=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return _typeof(e)}var JSON;if(!JSON){JSON={}}(function(){"use strict";function f(e){return e<10?"0"+e:e}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,o,i,f=gap,u,a=t[e];if(a&&_typeof(a)==="object"&&typeof a.toJSON==="function"){a=a.toJSON(e)}if(typeof rep==="function"){a=rep.call(t,e,a)}switch(_typeof(a)){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a){return"null"}gap+=indent;u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){i=a.length;for(n=0;n<i;n+=1){u[n]=str(n,a)||"null"}o=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+f+"]":"["+u.join(",")+"]";gap=f;return o}if(rep&&_typeof(rep)==="object"){i=rep.length;for(n=0;n<i;n+=1){if(typeof rep[n]==="string"){r=rep[n];o=str(r,a);if(o){u.push(quote(r)+(gap?": ":":")+o)}}}}else{for(r in a){if(Object.prototype.hasOwnProperty.call(a,r)){o=str(r,a);if(o){u.push(quote(r)+(gap?": ":":")+o)}}}}o=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+f+"}":"{"+u.join(",")+"}";gap=f;return o}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(e,t,n){var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1){indent+=" "}}else if(typeof n==="string"){indent=n}rep=t;if(t&&typeof t!=="function"&&(_typeof(t)!=="object"||typeof t.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":e})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(e,t){var n,r,o=e[t];if(o&&_typeof(o)==="object"){for(n in o){if(Object.prototype.hasOwnProperty.call(o,n)){r=walk(o,n);if(r!==undefined){o[n]=r}else{delete o[n]}}}}return reviver.call(e,t,o)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})();(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if((typeof exports==="undefined"?"undefined":_typeof(exports))==="object"){e(require("jquery"))}else{e(jQuery)}})(function(l){var t=/\+/g;function y(e){return v.raw?e:encodeURIComponent(e)}function d(e){return v.raw?e:decodeURIComponent(e)}function g(e){return y(v.json?JSON.stringify(e):String(e))}function r(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(t," "));return v.json?JSON.parse(e):e}catch(e){}}function h(e,t){var n=v.raw?e:r(e);return l.isFunction(t)?t(n):n}var v=l.cookie=function(e,t,n){if(t!==undefined&&!l.isFunction(t)){n=l.extend({},v.defaults,n);if(typeof n.expires==="number"){var r=n.expires,o=n.expires=new Date;o.setTime(+o+r*864e5)}return document.cookie=[y(e),"=",g(t),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}var i=e?undefined:{};var f=document.cookie?document.cookie.split("; "):[];for(var u=0,a=f.length;u<a;u++){var c=f[u].split("=");var s=d(c.shift());var p=c.join("=");if(e&&e===s){i=h(p,t);break}if(!e&&(p=h(p))!==undefined){i[s]=p}}return i};v.defaults={};l.removeCookie=function(e,t){if(l.cookie(e)===undefined){return false}l.cookie(e,"",l.extend({},t,{expires:-1}));return!l.cookie(e)}});function htmlEncodeByRegExp(e){var t="";if(e.length==0){return t}t=e.replace(/</g,"");t=t.replace(/>/g,"");return t}$(document).ready(function(){var t=10;var o=3;var i="_v_h";var f="/";window.getExistHistories=function(){var e=new Array;$.cookie.json=true;var t=$.cookie(i);$.cookie.json=false;t=t?t:"{}";var n=JSON.parse(t);var r=0;for(var o in n){e[r++]=n[o]}return e};window.addHistoryRecord=function(e){e=htmlEncodeByRegExp(e);e=$.trim(e);if(e==null||e==""){return false}var t=getExistHistories();var n=isExist(e,t);if(n<0){if(!isNotFull(t)){t.shift()}t[t.length]=e;$.cookie.json=true;$.cookie(i,JSON.stringify(t),{expires:o,path:f});$.cookie.json=false;return true}else{var r=t[n];t.splice(n,1);t[t.length]=r;$.cookie.json=true;$.cookie(i,JSON.stringify(t),{expires:o,path:f});$.cookie.json=false;return true}};window.deleteHistoryRecord=function(){$.removeCookie(i)};window.isNotFull=function(e){return e.length<t};window.isHistoryEmpty=function(e){return e==null||e.length<=0};window.isExist=function(e,t){if(e==null||$.trim(e)==""||t==null||t.length==0){return-1}for(var n in t){if($.trim(t[n])==$.trim(e)){return n}}return-1};window.cookieLink=function(e){if(e&&e.length>0){e.each(function(){$(this).click(function(e){e.preventDefault();addHistoryRecord($(this).text());url=$(this).attr("href");window.location.href=url})})}}});
//# sourceMappingURL=../../../__sources__/athena/js/productSearch/searchBarNew_8f3d58ca.js.map