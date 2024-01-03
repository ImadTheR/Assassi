var Preload=function(){var s=function e(){};var o=function e(t){return Object.prototype.toString.call(t).match(/\w+/g)[1].toLowerCase()};var a=function e(t){if(typeof t!=="string"){throw"param str is not a string"}return t.replace(/^[\s\u00A0]+|[\s\u00A0]+$/g,"")};var i=function e(t,i,r){if(!t){t="#null"}if(typeof t==="string"){this.url=t||"#null"}if(!i){i=s}if(typeof i==="function"){this.success=i}if(!r){r=s}if(typeof i==="function"){this.error=r}this.times=0};i.prototype={valid:function e(){this.url=a(this.url);return typeof this.url==="string"&&this.url!=="#null"&&this.url!==""}};var h=function e(t){if(o(t)==="string"){return new i(t)}else if(o(t)==="object"){return new i(t.url,t.success,t.error)}else{return new i}};var u={notRunning:1,running:2,done:3,pause:4,stop:5};var c=function e(t){var i=document.createElement("img");i.style.cssText="position:absolute; top:-9999px; left:-9999px;";var r=function e(){if(typeof t.success==="function"){t.success.call(this,t)}this.onload=this.onerror=this.onabort=s;document.body.removeChild(this)};var n=function e(){if(typeof t.error==="function"){t.error.call(this,t)}this.onload=this.onerror=this.onabort=s;document.body.removeChild(this)};i.src=t.url;document.body.appendChild(i);if(i.complete){r.call(i)}else{i.onload=r;i.onerror=i.onabort=n}};var f=function e(t,i){var r=0,n=t.length;var s=-1;for(;r<n;r++){if(t[r]===i){s=r;break}}return s};var e=function e(t){var r=this._={};r.status=u.notRunning;r.queue=[];r.thread=[];r.retry=[];r.fail=[];r.done=[];r.cfg={thread:4,retry:1};if(t){var i=parseInt(t.thread);if(i&&i>0){r.cfg.thread=i}i=parseInt(t.retry);if(i&&i>=0){r.cfg.retry=i}}var n=function e(){if(r.retry.length){[].push.apply(r.queue,r.retry.splice(0,r.retry.length))}return r.queue.length&&r.queue.splice(0,1)[0]};var s=function e(){switch(r.status){case u.pause:{};break;case u.stop:{r.queue.splice(0,r.queue.length);r.retry.splice(0,r.retry.length)};break;case u.notRunning:case u.running:case u.done:{if(r.thread.length<=r.cfg.thread){var t=n();if(t){a(t)}else if(!r.thread.length){r.status=u.done}}};break;default:;}};var a=function e(t){r.thread.push(t);c(t)};var l=function e(t,i){var r=t.success;var n=t.error;t.success=function(){r.apply(this,arguments);var e=f(i.thread,t);i.thread.splice(e,1);i.done.push(t);s()};t.error=function(){n.apply(this,arguments);var e=f(i.thread,t);i.thread.splice(e,1);if(t.times<i.cfg.retry){i.retry.push(t);t.times++}else{i.fail.push(t)}s()};return t};r.ctrl={start:function e(){r.status=u.running;var t=r.cfg.thread-r.thread.length;while(t--&&r.queue.length){s()}},pause:function e(){r.status=u.pause},stop:function e(){r.status=u.stop}};this.load=function(e){var t,i;if(o(e)==="array"){for(t=0;t<e.length;t++){i=h(e[t]);if(i.valid()){l(i,r);this._.queue.push(i)}}}else{i=h(e);if(i.valid()){l(i,r);this._.queue.push(i)}}this._.ctrl.start();return this}};e.prototype={isLoaded:function e(t){t=a(t);var i=false;var r=this._.done;var n=0,s=r.length;for(;n<s;n++){if(a(r[n].url)===t){i=true;break}}return i},isLoading:function e(t){var i=false;var r=this._.thread;var n=0,s=r.length;for(;n<s;n++){if(r[n].url===t){i=true;break}}return i},isFailed:function e(t){var i=false;var r=this._.fail;var n=0,s=r.length;for(;n<s;n++){if(r[n].url===t){i=true;break}}return i}};return e}.call(this);var CSSRuleOperator=function(){var a=function e(t,i){for(var r in i){t[r]=i[r]}};var s=function e(t){var i=/(^|\s+)[A-Z]+/g;return t.replace(i,function(e){return e.toLowerCase()})};var e=function e(t){if(!t){t=document.createElement("style");t.type="text/css";document.getElementsByTagName("head")[0].appendChild(t)}this.sheet=t.sheet||t.styleSheet||t;this.rules=this.sheet.cssRules||this.sheet.rules};e.prototype={get:function e(i){var r;var t=parseInt(i);if(typeof t==="number"&&t>-1&&t<this.rules.length){r=this.rules[t]}else if(typeof i==="string"){i=s(i);var n;this.each(function(e,t){n=s(t.selectorText);if(n===i){r=this.rules[e];return true}})}return r?{selectorText:r.selectorText,cssText:r.cssText||r.selectorText+"{"+r.style.cssText+"}",style:this.split(r.cssText||r.style.cssText)}:r},set:function e(t,i,r,n){var s={selectorText:t,style:{}};if(n){s=this.get(t)||s;try{this.del(s.selectorText)}catch(e){}}if(typeof i==="string"){i=this.split(i)}a(s.style,i);r=r||this.rules.length;r=r>=this.rules.length||r<0?this.rules.length:r;if(this.sheet.insertRule){this.sheet.insertRule(this.toCssText(s.selectorText,s.style),r)}else{r=r>this.rules.length?-1:r;this.sheet.addRule(s.selectorText,this.toRuleStr(s.style),r)}},del:function e(i){if(this.sheet.removeRule){this.sheet.removeRule(i);return true}var t=parseInt(i);if(typeof t==="number"&&t>-1&&t<this.rules.length){this.sheet.deleteRule(t)}else if(typeof i==="string"){i=s(i);var r;this.each(function(e,t){r=s(t.selectorText);if(r===i){this.sheet.deleteRule(e);return true}})}},exist:function e(i){i=s(i);var r,n;this.each(function(e,t){r=s(t.selectorText);if(r===i){n=true;return true}});return n},each:function e(t){var i=0,r=this.rules.length;var n;for(;i<r;i++){n=t.call(this,i,this.rules[i]);if(n){break}}return this},split:function e(t){var i=/([-a-zA-Z]+)\s*\:\s*([^;]+)/g;var r={};t.replace(i,function(e,t,i){r[t.toLowerCase()]=i});return r},toRuleStr:function e(t){var i=[];for(var r in t){i.push(r,":",t[r],";")}return i.join("")},toCssText:function e(t,i){var r=[t,"{"];r.push(this.toRuleStr(i));r.push("}");return r.join("")}};return e}.call(this);var Magnifier=function(a,b,e){var l=function e(){};var o=9999;var i=function e(){var t=b.createElement("style");t.type="text/css";b.getElementsByTagName("head")[0].appendChild(t);this.rule=new T.Rule(t)};var r=function e(){var t=["position:absolute; top:-",o,"px; left:-",o,"px;"];if(T.browser.msie&&T.browser.version<9){t.push("background-color:",this.config.layer.bgColor,"\\9; filter:alpha(opacity=",this.config.layer.alpha*100,")\\9;")}else{var i=T.color.toRGB(this.config.layer.bgColor);t.push("background-color:rgba(",i.R,",",i.G,",",i.B,",",this.config.layer.alpha,");")}if(this.config.layer.bgImage){t.push("background-image:url('",this.config.layer.bgImage,"');");if(T.browser.msie){t.push("filter:alpha(opacity=",this.config.layer.alpha*100,");")}else{t.push("opacity:",this.config.layer.alpha,";")}}t.push("cursor:",this.config.layer.cursor,"; diplay:block; width:90px; height:60px;");this.rule.set(".magnifier_layer_"+this.uuid,t.join(""));t=["position:absolute; overflow:hidden; top:-",o,"px; left:-",o,"px;"];t.push("width:",this.config.detail.width,"px;");t.push("height:",this.config.detail.height,"px;");t.push("border:",this.config.detail.borderWidth,"px ",this.config.detail.borderStyle," ",this.config.detail.borderColor,";");t.push("background-color:",this.config.detail.bgColor,";");t.push("opacity:",this.config.detail.alpha,"; filter:alpha(opacity=",this.config.detail.alpha*100,");");t.push("z-index:1000;");this.rule.set(".magnifier_detail_"+this.uuid,t.join(""));t=["display:block; overflow:hidden; position:absolute; top:50%; left:50%;"];this.rule.set(".magnifier_loading_"+this.uuid,t.join(""));t=["display:block; overflow:hidden; position:absolute; top:50%; left:50%;"];this.rule.set(".magnifier_detailLayer_"+this.uuid,t.join(""));t=["display:block; margin:0 auto; position:relative;"];this.rule.set(".magnifier_detailImg_"+this.uuid,t.join(""))};var t={layer:{bgColor:"#000",alpha:.3,bgImage:"",opacity:1,cursor:"move"},detail:{width:450,height:300,borderColor:"#ccc",borderWidth:1,borderStyle:"solid",bgColor:"#fff",opacity:1,offsetX:10,offsetY:0},target:null,detailImg:"",loading:"",isSA:false};var n=new Abstract({show:function e(t,i,r){},hide:function e(){},changeTarget:function e(t){},dispose:function e(){},turn:function e(t){},showLayer:function e(){},hideLayer:function e(){},showDetailImg:function e(){},hideDetailImg:function e(){},showLoading:function e(){},hideLoading:function e(){},setDetailImageSrc:function e(t){},changeDetail:function e(t,i,r){}});var h=new Clazz(n,{inherit:Component,config:t},function(e){if(this===a){return new h(e)}var t=this;this.setConfig(e);if(!this.config.target){throw"target is required"}this.uuid=(new Date).valueOf()+""+T.random(0,1e3);i.call(this);r.call(this);this.loader=new T.Preload({thread:2,retry:1});this.__init();this.loader.load({url:this.config.loading,success:function e(){t.elems.loading.src=this.src;u.call(this,t.elems.loading)}})});h.readyState=false;h.ready=function(e){if(typeof e==="function"){if(h.readyState){e()}else{s.readyHandle.push(e)}}};var s=h._={};s.readyHandle=[];var T=h.tools={};T.random=function(e,t){return Math.floor((t-e)*Math.random()+e)};T.type=function(e){var t;if(typeof e==="undefined"){t="undefined"}else if(e===null){t="null"}else{t=Object.prototype.toString.call(e).match(/\w+/g)[1].toLowerCase()}if(t==="number"&&isNaN(e)){t="nan"}return t};T.search=function(e,t){var i=0,r=e.length;var n=-1;for(;i<r;i++){if(e[i]===t){n=i;break}}return n};T.color={RESULT:{RGB:"rgb",HEX:"hex",UNKNOWN:null},valid:function e(t){var i=T.type(t);var r=this.RESULT.UNKNOWN;if(i==="object"&&"R"in t&&+t.R>=0&&+t.R<=255&&"G"in t&&+t.G>=0&&+t.G<=255&&"B"in t&&+t.B>=0&&+t.B<=255){r=this.RESULT.RGB}else if(i==="string"&&/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.test(t)){r=this.RESULT.HEX}return r},toHEX:function e(t){var i="#";if(this.valid(t)===this.RESULT.RGB){i+=parseInt(t.R).toString(16);i+=parseInt(t.G).toString(16);i+=parseInt(t.B).toString(16)}else{i="#000"}return i},toRGB:function e(t){var i={R:0,G:0,B:0};if(this.valid(t)===this.RESULT.HEX){t=t.replace(/#/,"").toLowerCase();if(t.length===3){t=t.replace(/([0-9a-f])/g,"$1$1")}t=t.match(/[0-9a-f]{2}/g);i.R=parseInt(t[0],16);i.G=parseInt(t[1],16);i.B=parseInt(t[2],16)}return i}};T.getScript=function(e,t,i){var r=b.getElementsByTagName("head")[0];var n=b.createElement("script");n.type="text/javascript";n.defer=true;n.aysnc=true;var s=function e(){n.onreadystatechange=l;n.onload=l;n.onerror=l};n.src=e;r.appendChild(n);if(n.complete||n.loaded||n.readyState==="complete"||n.readyState==="loaded"){s()}else{n.onreadystatechange=function(e){if(n.readyState==="complete"||n.readyState==="loaded"){t.call(n,e||a.event);s()}};n.onload=function(e){(t||l).call(n,e||a.event);s()};n.onerror=function(e){(i||l).call(n,e||a.event);s()}}};T.require=function(){var e=[].slice.call(arguments);var t=l;if(typeof e[e.length-1]==="function"){t=e.pop()}if(e.length){var i=new Array(e.length+1).join(0).split("");for(var r=0;r<e.length;r++){typeof e[r]==="string"&&T.getScript(e[r],function(e){return function(){i[e]="1";if(T.search(i,"0")===-1){t()}}}(r))}}else{t()}};s.init=function(){var e;while(e=s.readyHandle.shift()){e()}};T.pageXY=function(e){var t=e.getBoundingClientRect();var i=a.scrollTop||b.documentElement&&b.documentElement.scrollTop||b.body.scrollTop||0;var r=a.scrollLeft||b.documentElement&&b.documentElement.scrollLeft||b.body.scrollLeft||0;var n=b.documentElement||b.getElementsByTagName("html")[0];var s=n.getBoundingClientRect();s={left:s.left<0?0:s.left,top:s.top<0?0:s.top};if(/msie\s*6/i.test(a.navigator.appVersion)){s={left:s.left+2,top:s.top+2}}return{left:t.left+r-s.left,top:t.top+i-s.top}};var u=function e(t,i,r){t.width=this.width;t.height=this.height;var n=T.type(i);var s=T.type(r);i=n==="number"?-i+"px":n==="undefined"?-this.width/2+"px":i;r=s==="number"?-r+"px":s==="undefined"?-this.height/2+"px":r;t.style.cssText+=";margin-top:"+r+"; margin-left:"+i+";";t.src=this.src};var c={e:{clientX:0,clientY:0},_fix:function e(t){if(this.loader.isLoaded(this.config.detailImg)){var i=this.elems.target;var r=this.elems.layer;var n=this.elems.detail;var s=this.elems.detailLayer;var a=this.elems.detailImg;var l=i.getBoundingClientRect();var o=l.left;var h=l.left+i.clientWidth;var u=l.top;var c=l.top+i.clientHeight;var f=parseInt(i.currentStyle?i.currentStyle.borderTopWidth:b.defaultView.getComputedStyle(i,null).borderTopWidth);f=T.type(f)==="nan"?2:f;var d=t.clientX-l.left-f;var p=t.clientY-l.top-f;var g,v,y,m;if(d>i.clientWidth-r.clientWidth/2){g="auto";y=0}else{g=d>r.clientWidth/2?d-r.clientWidth/2:0;y="auto"}if(p>i.clientHeight-r.clientHeight/2){v="auto";m=0}else{v=p>r.clientHeight/2?p-r.clientHeight/2:0;m="auto"}r.style.cssText+=";left:"+(g==="auto"?g:g+"px")+"; top:"+(v==="auto"?v:v+"px")+"; right:"+(y==="auto"?y:y+"px")+"; bottom:"+(m==="auto"?m:m+"px")+";";var x=i.clientWidth/s.clientWidth;s.style.cssText+=";left:"+(g==="auto"?g:-g/x+"px")+"; top:"+(v==="auto"?v:-v/x+"px")+"; right:"+(y==="auto"?y:-y/x+"px")+"; bottom:"+(m==="auto"?m:-m/x+"px")+";"}},timer:0,_enter:function e(t,i,r){if(i.STATUS===f.OFF){i.hide();return}var n=r.detailImg;if(n){var s=i.loader.isLoaded(n);if(s){i.show(n)}else if(!i.loader.isLoading()){i.showLoading();i.show(n)}else{}}},_leave:function e(t,i){i.hideLayer();i.hide()},_move:function e(t,i){if(i.STATUS===f.OFF){i.hide();return}c._fix.call(i,t)}};var f=h.SWITCH_STATUS={OFF:0,ON:1};h.extend({showLayer:function e(){},hideLayer:function e(){this.elems.layer.style.cssText+=";left:-"+o+"px; top:-"+o+"px;"},showDetailImg:function e(){this.elems.detailLayer.style.cssText+=";left:0; top:0;"},hideDetailImg:function e(){this.elems.detailLayer.style.cssText+=";left:-"+o+"px; top:-"+o+"px;"},showLoading:function e(){this.elems.loading.style.cssText+=";left:50%; top:50%;";this.fire("loading")},hideLoading:function e(){this.elems.loading.style.cssText+=";left:-"+o+"px; top:-"+o+"px;";this.fire("loaded")},setDetailImageSrc:function e(t){if(T.type(t)==="string"){this.hideDetailImg();this.config.detailImg=t;this.fire("setDetailImageSrc",{src:t})}return this},changeDetail:function e(t,a,l){var o=this;t=t||this.config.detailImg;if(!t){return}else{this.showLoading();this.hideDetailImg();this.config.detailImg=t;var i=T.type(a);var r=T.type(l);a=i==="number"?a:i==="undefined"?"auto":0;l=r==="number"?l:r?"auto":0;this.loader.load({url:t,success:function e(){var t=o.elems.layer;var i=o.elems.detail;var r=o.elems.target;var n=o.elems.detailLayer;var s=o.elems.detailImg;u.call(this,s,a,l);if(r.clientWidth*this.height>r.clientHeight*this.width){n.style.height=this.height+"px";n.style.width=this.height*r.clientWidth/r.clientHeight+"px";s.style.marginTop="0px"}else{n.style.width=this.width+"px";n.style.height=this.width*r.clientHeight/r.clientWidth+"px";s.style.marginTop=Math.abs((n.clientHeight-this.height)/2)+"px"}t.style.cssText+=";width:"+r.clientWidth*i.clientWidth/n.clientWidth+"px; height:"+r.clientHeight*i.clientHeight/n.clientHeight+"px;";o.showDetailImg();o.hideLoading()}});this.fire("changeDetail",{src:t,x:a,y:l})}return this},show:function e(t,i,r){if(this.STATUS===f.OFF){this.hide();return}if(T.type(t)==="string"){this.changeDetail(t)}var n=T.pageXY(this.elems.target);i=T.type(i)==="number"?i:this.config.detail.offsetX;r=T.type(r)==="number"?r:this.config.detail.offsetY;if(this.config.isSA){this.elems.detail.style.cssText+=";left:"+(n.left+i-this.config.detail.width)+"px; top:"+(n.top+r)+"px;"}else{this.elems.detail.style.cssText+=";left:"+(n.left+this.elems.target.offsetWidth+i)+"px; top:"+(n.top+r)+"px;"}this.fire("show",{src:t,offsetX:i,offsetY:r});return this},hide:function e(){this.elems.detail.style.cssText+=";left:-"+o+"px; top:-"+o+"px;";this.fire("hide");return this},__init:function e(){this.fire("beforeInit");var t=this.elems;t.target=this.config.target;if(!/relative|absolute/i.test(t.target.style.position)){t.target.style.cssText+=";position:relative"}t.target.style.cssText+="; overflow:hidden;";var i=b.createElement("div");i.className="magnifier_detail_"+this.uuid;i.style.cssText+=";left:-"+o+"px; top:-"+o+"px;";b.body.appendChild(i);t.detail=i;var r=b.createElement("img");r.className="magnifier_loading_"+this.uuid;r.style.cssText+=";z-index:10;";i.appendChild(r);t.loading=r;var n=b.createElement("div");n.className="magnifier_detailLayer_"+this.uuid;n.style.cssText+=";z-index:100;";i.appendChild(n);t.detailLayer=n;var s=b.createElement("img");s.className="magnifier_detailImg_"+this.uuid;n.appendChild(s);t.detailImg=s;var a=b.createElement("div");a.className="magnifier_layer_"+this.uuid;a.style.cssText+=";left:-"+o+"px; top:-"+o+"px;";t.target.appendChild(a);t.layer=a;h.bindEvt(t.target,"mousemove",function(){var t=this;return function(e){c._move.call(e.target||e.srcElement,e,t)}}.call(this));h.bindEvt(t.target,"mouseenter",function(){var t=this;return function(e){c._enter.call(e.target||e.srcElement,e,t,t.config)}}.call(this));h.bindEvt(t.target,"mouseleave",function(){var t=this;return function(e){c._leave.call(e.target||e.srcElement,e,t)}}.call(this));try{delete this.init}catch(e){}this.fire("init")},changeTarget:function e(t){var i=this.elems.target;this.elems.target=this.config.target=t;this.fire("changeTarget",{target:t,prevTarget:i});return this},dispose:function e(){return this},turn:function e(t){if(typeof t==="undefined"){t="ON"}else{if((t+"").toUpperCase()in f){t=(t+"").toUpperCase()}else{t=t?"ON":"OFF"}}this.STATUS=f[t];this.fire("turn",{status:t});return this}});var d=function e(){jQuery(function(){h.readyState=true;T.browser=jQuery.browser;h.bindEvt=function(e,t,i){jQuery(e).bind(t,i)};h.unbindEvt=function(e,t,i){jQuery(e).unbind(t,i)};T.Preload=a.Preload;T.Rule=a.CSSRuleOperator;s.init()})};var p={0:{name:"preload",namespace:"Preload",src:"/script/magnifier/preload.js"},1:{name:"CSSRuleOperator",namespace:"CSSRuleOperator",src:"/script/magnifier/cssrule.js"}};var g=function(){var e=[];for(var t in this){if(!a[this[t].namespace]){e.push(this[t].src)}}return e}.call(p);g.push(d);T.require.apply(this,g);return h}.call(this,window,document);
//# sourceMappingURL=../../../../__sources__/common/js/assets/magnifier/magnifier_4ce62d50.js.map