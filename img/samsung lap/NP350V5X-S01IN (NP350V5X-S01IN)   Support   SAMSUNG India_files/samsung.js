/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);/* END FILE */
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",pdpWowScroll:false};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}if(!aq.pdpWowScroll){a7.preventDefault()}aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){if(!aq.pdpWowScroll){a7.preventDefault()}}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){if(!aq.pdpWowScroll){a7.preventDefault()}}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){if(!aq.pdpWowScroll){a7.preventDefault()}}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){if(!aq.pdpWowScroll){a7.preventDefault()}}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){if(!aq.pdpWowScroll){a7.preventDefault()}}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));
/* END FILE */

/*
 *	jQuery dotdotdot 1.6.16
 */
!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var f=this,h=t(f);if("undefined"==typeof f||3==f.nodeType&&0==t.trim(f.data).length)return!0;if(h.is(u))e.append(h);else{if(s)return!0;e.append(h),l&&e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==f.nodeType?o(h,n,i,d,l):r(h,n,i,d,l),s||(h.detach(),s=!0)),s||l&&l.detach()}}),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var f=s(c),h=-1!==f.indexOf(" ")?" ":"　",p="letter"==o.wrap?"":h,g=f.split(p),v=-1,w=-1,b=0,y=g.length-1;for(o.fallbackToLetter&&0==b&&0==y&&(p="",g=f.split(p),y=g.length-1);y>=b&&(0!=b||0!=y);){var m=Math.floor((b+y)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),a(r,o)?(y=w,o.fallbackToLetter&&0==b&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,y=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(f=i(s(c),o),l(c,f),T&&d&&t(c).parent().append(d))}else f=i(g.slice(0,v+1).join(p),o),l(c,f);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function f(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function h(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){e.preventDefault(),e.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:h(o),l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||d instanceof HTMLElement)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=f(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);

/** -- FILE: modernizr.js -- **/
/*!
 * Modernizr v2.6.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function( window, document, undefined ) {

    var version = '2.6.2',

    Modernizr = {},

    /*>>cssclasses*/
    // option for enabling the HTML classes to be added
    enableClasses = true,
    /*>>cssclasses*/

    docElement = document.documentElement,

    /**
     * Create our "modernizr" element that we do most feature tests on.
     */
    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    /**
     * Create the input element for various Web Forms feature tests.
     */
    inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,

    /*>>smile*/
    smile = ':)',
    /*>>smile*/

    toString = {}.toString,

    // TODO :: make the prefixes more granular
    /*>>prefixes*/
    // List of property values to set for css tests. See ticket #21
    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    /*>>prefixes*/

    /*>>domprefixes*/
    // Following spec is to expose vendor-specific style properties as:
    //   elem.style.WebkitBorderRadius
    // and the following would be incorrect:
    //   elem.style.webkitBorderRadius

    // Webkit ghosts their properties in lowercase but Opera & Moz do not.
    // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
    //   erik.eae.net/archives/2008/03/10/21.48.10/

    // More here: github.com/Modernizr/Modernizr/issues/issue/21
    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),
    /*>>domprefixes*/

    /*>>ns*/
    ns = {'svg': 'http://www.w3.org/2000/svg'},
    /*>>ns*/

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, // used in testing loop


    /*>>teststyles*/
    // Inject element with style element and some CSS rules
    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
          // After page load injecting a fake body doesn't work so check if body exists
          body = document.body,
          // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
          fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
          // In order not to give false positives we create a node for each test
          // This also allows the method to scale for unspecified uses
          while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

      // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
      // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
      // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
      // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
      // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
      style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
      // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
      // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
      (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
          //avoid crashing IE8, if background image is used
          fakeBody.style.background = '';
          //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
          fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
      // If this is done after page load we don't want to remove the body so check if body exists
      if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },
    /*>>teststyles*/

    /*>>mq*/
    // adapted from matchMedia polyfill
    // by Scott Jehl and Paul Irish
    // gist.github.com/786768
    testMediaQuery = function( mq ) {

      var matchMedia = window.matchMedia || window.msMatchMedia;
      if ( matchMedia ) {
        return matchMedia(mq).matches;
      }

      var bool;

      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                  getComputedStyle(node, null) :
                  node.currentStyle)['position'] == 'absolute';
      });

      return bool;

     },
     /*>>mq*/


    /*>>hasevent*/
    //
    // isEventSupported determines if a given element supports the given event
    // kangax.github.com/iseventsupported/
    //
    // The following results are known incorrects:
    //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
    //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
    //   ...
    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

        // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
        var isSupported = eventName in element;

        if ( !isSupported ) {
          // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
          if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

            // If property was created, "remove it" (by setting value to `undefined`)
            if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),
    /*>>hasevent*/

    // TODO :: Add flag for hasownprop ? didn't last time

    // hasOwnProperty shim by kangax needed for Safari 2.0 support
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }

    // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
    // es5.github.com/#x15.3.4.5

    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    /**
     * setCss applies given styles to the Modernizr DOM node.
     */
    function setCss( str ) {
        mStyle.cssText = str;
    }

    /**
     * setCssAll extrapolates all vendor-specific css strings.
     */
    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    /**
     * is returns a boolean for if typeof obj is exactly type.
     */
    function is( obj, type ) {
        return typeof obj === type;
    }

    /**
     * contains returns a boolean for if substr is found within str.
     */
    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    /*>>testprop*/

    // testProps is a generic CSS / DOM property test.

    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.

    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.

    // Because the testing of the CSS property names (with "-", as
    // opposed to the camelCase DOM properties) is non-portable and
    // non-standard but works in WebKit and IE (but not Gecko or Opera),
    // we explicitly reject properties with dashes so that authors
    // developing in WebKit or IE first don't end up with
    // browser-specific content by accident.

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }
    /*>>testprop*/

    // TODO :: add testDOMProps
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */
    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                // return the property name as a string
                if (elem === false) return props[i];

                // let's bind a function
                if (is(item, 'function')){
                  // default to autobind unless override
                  return item.bind(elem || obj);
                }

                // return the unbound function or obj or value
                return item;
            }
        }
        return false;
    }

    /*>>testallprops*/
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */
    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        // did they call .prefixed('boxSizing') or are we just testing a prop?
        if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

        // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
        } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }
    /*>>testallprops*/


    /**
     * Tests
     * -----
     */

    // The *new* flexbox
    // dev.w3.org/csswg/css3-flexbox

    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };

    // The *old* flexbox
    // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };

    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };

    // webk.it/70117 is tracking a legit WebGL feature detect proposal

    // We do a soft detect which may false positive in order to avoid
    // an expensive context creation: bugzil.la/732441

    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };

    /*
     * The Modernizr.touch test only indicates if the browser supports
     *    touch events, which does not necessarily reflect a touchscreen
     *    device, as evidenced by tablets running Windows 7 or, alas,
     *    the Palm Pre / WebOS (touch) phones.
     *
     * Additionally, Chrome (desktop) used to lie about its support on this,
     *    but that has since been rectified: crbug.com/36415
     *
     * We also test for Firefox 4 Multitouch Support.
     *
     * For more info, see: modernizr.github.com/Modernizr/touch.html
     */

    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };


    // geolocation is often considered a trivial feature detect...
    // Turns out, it's quite tricky to get right:
    //
    // Using !!navigator.geolocation does two things we don't want. It:
    //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
    //   2. Disables page caching in WebKit: webk.it/43956
    //
    // Meanwhile, in Firefox < 8, an about:config setting could expose
    // a false positive that would throw an exception: bugzil.la/688158

    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    // Chrome incognito mode used to throw an exception when using openDatabase
    // It doesn't anymore.
    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    // Vendors had inconsistent prefixing with the experimental Indexed DB:
    // - Webkit's implementation is accessible through webkitIndexedDB
    // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
    // For speed, we don't test the legacy (and beta-only) indexedDB
    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    // documentMode logic from YUI to filter out IE8 Compat Mode
    //   which false positives.
    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    // Per 1.6:
    // This used to be Modernizr.historymanagement but the longer
    // name has been deprecated in favor of a shorter and property-matching one.
    // The old API is still available in 1.6, but as of 2.0 will throw a warning,
    // and in the first release thereafter disappear entirely.
    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    // css-tricks.com/rgba-browser-support/
    tests['rgba'] = function() {
        // Set an rgba() color and check the returned value

        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

        setCss('background:url(https://),url(https://),red url(https://)');

        // If the UA supports multiple backgrounds, there should be three occurrences
        //   of the string "url(" in the return value for elemStyle.background

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };



    // this will false positive in Opera Mini
    //   github.com/Modernizr/Modernizr/issues/396

    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };


    // Super comprehensive table about all the unique implementations of
    // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    // WebOS unfortunately false positives on this test.
    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    // FF3.0 will false positive on this test
    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
        // Browsers that actually have CSS Opacity implemented have done so
        //  according to spec, which means their return values are within the
        //  range of [0.0,1.0] - including the leading zero.

        setCssAll('opacity:.55');

        // The non-literal . in this regex is intentional:
        //   German Chrome returns this value as 0,55
        // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
        return (/^0.55$/).test(mStyle.opacity);
    };


    // Note, Android < 4 will pass this test, but can only animate
    //   a single property at a time
    //   daneden.me/2011/12/putting-up-with-androids-bullshit/
    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        /**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */

        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
             // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
              (str1 + '-webkit- '.split(' ').join(str2 + str1) +
             // standard syntax             // trailing 'background-image:'
              prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

        // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
        //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
        //   some conditions. As a result, Webkit typically recognizes the syntax but
        //   will sometimes throw a false positive, thus we must do a more thorough check:
        if ( ret && 'webkitPerspective' in docElement.style ) {

          // Webkit allows this media query to succeed only if the feature is enabled.
          // `@media (transform-3d),(-webkit-transform-3d){ ... }`
          injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };


    /*>>fontface*/
    // @font-face detection routine by Diego Perini
    // javascript.nwbox.com/CSSSupport/

    // false positives:
    //   WebOS github.com/Modernizr/Modernizr/issues/342
    //   WP7   github.com/Modernizr/Modernizr/issues/538
    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };
    /*>>fontface*/

    // CSS generated content detection
    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };



    // These tests evaluate support of the video/audio elements, as well as
    // testing what types of content they support.
    //
    // We're using the Boolean constructor here, so that we can extend the value
    // e.g.  Modernizr.video     // true
    //       Modernizr.video.ogg // 'probably'
    //
    // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
    //                     thx to NielsLeenheer and zcorpan

    // Note: in some older browsers, "no" was a return value instead of empty string.
    //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
    //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                // Mimetypes accepted:
                //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                //   bit.ly/iphoneoscodecs
                bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    // In FF4, if disabled, window.localStorage should === null.

    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled

    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.

    // Because we are forced to try/catch this, we'll go aggressive.

    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files

    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    // Thanks to Erik Dahlstrom
    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    // specifically for SVG inline in HTML, not within XHTML
    // test page: paulirish.com/inline-svg
    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    // SVG SMIL animation
    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };

    // This test is only for clip paths in SVG proper, not clip paths on HTML content
    // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

    // However read the comments to dig into applying SVG clippaths to HTML content here:
    //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    /*>>webforms*/
    // input features and input types go directly onto the ret object, bypassing the tests loop.
    // Hold this guy to execute in a moment.
    function webforms() {
        /*>>input*/
        // Run through HTML5's new input attributes to see if the UA understands any.
        // We're using f which is the <input> element created early on
        // Mike Taylr has created a comprehensive resource for testing these attributes
        //   when applied to all input types:
        //   miketaylr.com/code/input-type-attr.html
        // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

        // Only input placeholder is tested while textarea's placeholder is not.
        // Currently Safari 4 and Opera 11 have support only for the input placeholder
        // Both tests are available in feature-detects/forms-placeholder.js
        Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
              // safari false positive's on datalist: webk.it/74252
              // see also github.com/Modernizr/Modernizr/issues/146
              attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        /*>>input*/

        /*>>inputtypes*/
        // Run through HTML5's new input types to see if the UA understands any.
        //   This is put behind the tests runloop because it doesn't return a
        //   true/false like all the other tests; instead, it returns an object
        //   containing each input type with its corresponding true/false value

        // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
        Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                // We first check to see if the type we give it sticks..
                // If the type does, we feed it a textual value, which shouldn't be valid.
                // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                      // Safari 2-4 allows the smiley as a value, despite making a slider
                      bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                              // Mobile android web browser has false positive, so must
                              // check the height to see if the widget is actually there.
                              (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                      // Spec doesn't define any special parsing or detectable UI
                      //   behaviors so we pass these through as true

                      // Interestingly, opera fails the earlier test, so it doesn't
                      //  even make it here.

                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                      // Real url and email support comes with prebaked validation.
                      bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                      // If the upgraded input compontent rejects the :) text, we got a winner
                      bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        /*>>inputtypes*/
    }
    /*>>webforms*/


    // End of test definitions
    // -----------------------



    // Run through all tests and detect their support in the current UA.
    // todo: hypothetically we could be doing an array of tests and use a basic loop here.
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
            featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    /*>>webforms*/
    // input tests need to run.
    Modernizr.input || webforms();
    /*>>webforms*/


    /**
     * addTest allows the user to define their own feature tests
     * the result will be added onto the Modernizr object,
     * as well as an appropriate className set on the html element
     *
     * @param feature - String naming the feature
     * @param test - Function returning true if feature is supported, false if not
     */
     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
           // we're going to quit if you're trying to overwrite an existing test
           // if we were to allow it, we'd do this:
           //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
           //   docElement.className = docElement.className.replace( re, '' );
           // but, no rly, stuff 'em.
           return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; // allow chaining.
     };


    // Reset modElem.cssText to nothing to reduce memory footprint.
    setCss('');
    modElem = inputElem = null;

    /*>>shiv*/
    /*! HTML5 Shiv v3.6.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
    ;(function(window, document) {
    /*jshint evil:true */
      /** Preset options */
      var options = window.html5 || {};

      /** Used to skip problem elements */
      var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

      /** Not all elements can be cloned in IE **/
      var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

      /** Detect whether the browser supports default html5 styles */
      var supportsHtml5Styles;

      /** Name of the expando, to work with multiple documents or to re-shiv one document */
      var expando = '_html5shiv';

      /** The id for the the documents expando */
      var expanID = 0;

      /** Cached data for each document */
      var expandoData = {};

      /** Detect whether the browser supports unknown elements */
      var supportsUnknownElements;

      (function() {
        try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
              // assign a false positive if unable to shiv
              (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
        } catch(e) {
          supportsHtml5Styles = true;
          supportsUnknownElements = true;
        }

      }());

      /*--------------------------------------------------------------------------*/

      /**
       * Creates a style sheet with the given CSS text and adds it to the document.
       * @private
       * @param {Document} ownerDocument The document.
       * @param {String} cssText The CSS text.
       * @returns {StyleSheet} The style element.
       */
      function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
            parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
      }

      /**
       * Returns the value of `html5.elements` as an array.
       * @private
       * @returns {Array} An array of shived element node names.
       */
      function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
      }

        /**
       * Returns the data associated to the given document
       * @private
       * @param {Document} ownerDocument The document.
       * @returns {Object} An object of data.
       */
      function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
        }
        return data;
      }

      /**
       * returns a shived element for the given nodeName and document
       * @memberOf html5
       * @param {String} nodeName name of the element
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived element.
       */
      function createElement(nodeName, ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
        }
        if (!data) {
            data = getExpandoData(ownerDocument);
        }
        var node;

        if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
            node = data.createElem(nodeName);
        }

        // Avoid adding some elements to fragments in IE < 9 because
        // * Attributes like `name` or `type` cannot be set/changed once an element
        //   is inserted into a document/fragment
        // * Link elements with `src` attributes that are inaccessible, as with
        //   a 403 response, will cause the tab/window to crash
        // * Script elements appended to fragments will execute when their `src`
        //   or `text` property is set
        return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
      }

      /**
       * returns a shived DocumentFragment for the given document
       * @memberOf html5
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived DocumentFragment.
       */
      function createDocumentFragment(ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
            i = 0,
            elems = getElements(),
            l = elems.length;
        for(;i<l;i++){
            clone.createElement(elems[i]);
        }
        return clone;
      }

      /**
       * Shivs the `createElement` and `createDocumentFragment` methods of the document.
       * @private
       * @param {Document|DocumentFragment} ownerDocument The document.
       * @param {Object} data of the document.
       */
      function shivMethods(ownerDocument, data) {
        if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
        }


        ownerDocument.createElement = function(nodeName) {
          //abort shiv
          if (!html5.shivMethods) {
              return data.createElem(nodeName);
          }
          return createElement(nodeName, ownerDocument, data);
        };

        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
          'var n=f.cloneNode(),c=n.createElement;' +
          'h.shivMethods&&(' +
            // unroll the `createElement` calls
            getElements().join().replace(/\w+/g, function(nodeName) {
              data.createElem(nodeName);
              data.frag.createElement(nodeName);
              return 'c("' + nodeName + '")';
            }) +
          ');return n}'
        )(html5, data.frag);
      }

      /*--------------------------------------------------------------------------*/

      /**
       * Shivs the given document.
       * @memberOf html5
       * @param {Document} ownerDocument The document to shiv.
       * @returns {Document} The shived document.
       */
      function shivDocument(ownerDocument) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
          data.hasCSS = !!addStyleSheet(ownerDocument,
            // corrects block display not defined in IE6/7/8/9
            'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
            // adds styling not present in IE6/7/8/9
            'mark{background:#FF0;color:#000}'
          );
        }
        if (!supportsUnknownElements) {
          shivMethods(ownerDocument, data);
        }
        return ownerDocument;
      }

      /*--------------------------------------------------------------------------*/

      /**
       * The `html5` object is exposed so that more elements can be shived and
       * existing shiving can be detected on iframes.
       * @type Object
       * @example
       *
       * // options can be changed before the script is included
       * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
       */
      var html5 = {

        /**
         * An array or space separated string of node names of the elements to shiv.
         * @memberOf html5
         * @type Array|String
         */
        'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',

        /**
         * A flag to indicate that the HTML5 style sheet should be inserted.
         * @memberOf html5
         * @type Boolean
         */
        'shivCSS': (options.shivCSS !== false),

        /**
         * Is equal to true if a browser supports creating unknown/HTML5 elements
         * @memberOf html5
         * @type boolean
         */
        'supportsUnknownElements': supportsUnknownElements,

        /**
         * A flag to indicate that the document's `createElement` and `createDocumentFragment`
         * methods should be overwritten.
         * @memberOf html5
         * @type Boolean
         */
        'shivMethods': (options.shivMethods !== false),

        /**
         * A string to describe the type of `html5` object ("default" or "default print").
         * @memberOf html5
         * @type String
         */
        'type': 'default',

        // shivs the document according to the specified `html5` object options
        'shivDocument': shivDocument,

        //creates a shived element
        createElement: createElement,

        //creates a shived documentFragment
        createDocumentFragment: createDocumentFragment
      };

      /*--------------------------------------------------------------------------*/

      // expose html5
      window.html5 = html5;

      // shiv the document
      shivDocument(document);

    }(this, document));
    /*>>shiv*/

    // Assign private properties to the return object with prefix
    Modernizr._version      = version;

    // expose these for the plugin API. Look in the source for how to join() them against your input
    /*>>prefixes*/
    Modernizr._prefixes     = prefixes;
    /*>>prefixes*/
    /*>>domprefixes*/
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;
    /*>>domprefixes*/

    /*>>mq*/
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
    Modernizr.mq            = testMediaQuery;
    /*>>mq*/

    /*>>hasevent*/
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
    Modernizr.hasEvent      = isEventSupported;
    /*>>hasevent*/

    /*>>testprop*/
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };
    /*>>testprop*/

    /*>>testallprops*/
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
    Modernizr.testAllProps  = testPropsAll;
    /*>>testallprops*/


    /*>>teststyles*/
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
    Modernizr.testStyles    = injectElementWithStyles;
    /*>>teststyles*/


    /*>>prefixed*/
    // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
    // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to, you might do something like...
    //
    //     var transEndEventNames = {
    //       'WebkitTransition' : 'webkitTransitionEnd',
    //       'MozTransition'    : 'transitionend',
    //       'OTransition'      : 'oTransitionEnd',
    //       'msTransition'     : 'MSTransitionEnd',
    //       'transition'       : 'transitionend'
    //     },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
        // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
        return testPropsAll(prop, obj, elem);
      }
    };
    /*>>prefixed*/


    /*>>cssclasses*/
    // Remove "no-js" class from <html> element, if it exists:
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                            // Add the new classes to the <html> element.
                            (enableClasses ? ' js ' + classes.join(' ') : '');
    /*>>cssclasses*/

    return Modernizr;

})(this, this.document);
/* END FILE */
/*
jquery.animate-enhanced plugin v1.05
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/
(function(d,B,C){function H(a,b,l,c){if("d"!=l&&D(a)){var g=I.exec(b),e="auto"===a.css(l)?0:a.css(l),e="string"==typeof e?y(e):e;"string"==typeof b&&y(b);c=!0===c?0:e;var f=a.is(":hidden"),d=a.translation();"left"==l&&(c=parseInt(e,10)+d.x);"right"==l&&(c=parseInt(e,10)+d.x);"top"==l&&(c=parseInt(e,10)+d.y);"bottom"==l&&(c=parseInt(e,10)+d.y);g||"show"!=b?g||"hide"!=b||(c=0):(c=1,f&&a.css({display:J(a.context.tagName),opacity:0}));return g?(a=parseFloat(g[2]),g[1]&&(a=("-="===g[1]?-1:1)*a+parseInt(c,
10)),"%"==g[3]&&(a+="%"),a):c}}function K(a,b,l,c,g,e,f,p){var m=a.data(r),m=m&&!q(m)?m:d.extend(!0,{},L),s=g;if(-1<d.inArray(b,z)){var k=m.meta,n=y(a.css(b))||0,t=b+"_o",s=g-n;k[b]=s;k[t]="auto"==a.css(b)?0+s:n+s||0;m.meta=k;f&&0===s&&(s=0-k[t],k[b]=s,k[t]=0)}return a.data(r,M(a,m,b,l,c,s,e,f,p))}function M(a,b,d,c,g,e,f,p,m){var s=!1;f=!0===f&&!0===p;b=b||{};b.original||(b.original={},s=!0);b.properties=b.properties||{};b.secondary=b.secondary||{};p=b.meta;for(var r=b.original,n=b.properties,t=
b.secondary,h=k.length-1;0<=h;h--){var u=k[h]+"transition-property",v=k[h]+"transition-duration",q=k[h]+"transition-timing-function";d=f?k[h]+"transform":d;s&&(r[u]=a.css(u)||"",r[v]=a.css(v)||"",r[q]=a.css(q)||"");t[d]=f?!0===m||!0===A&&!1!==m&&E?"translate3d("+p.left+"px, "+p.top+"px, 0)":"translate("+p.left+"px,"+p.top+"px)":e;n[u]=(n[u]?n[u]+",":"")+d;n[v]=(n[v]?n[v]+",":"")+c+"ms";n[q]=(n[q]?n[q]+",":"")+g}return b}function N(a){for(var b in a)if(!("width"!=b&&"height"!=b||"show"!=a[b]&&"hide"!=
a[b]&&"toggle"!=a[b]))return!0;return!1}function q(a){for(var b in a)return!1;return!0}function J(a){a=a.toUpperCase();var b={LI:"list-item",TR:"table-row",TD:"table-cell",TH:"table-cell",CAPTION:"table-caption",COL:"table-column",COLGROUP:"table-column-group",TFOOT:"table-footer-group",THEAD:"table-header-group",TBODY:"table-row-group"};return"string"==typeof b[a]?b[a]:"block"}function y(a){return parseFloat(a.replace(a.match(/\D+$/),""))}function D(a){var b=!0;a.each(function(a,d){return b=b&&d.ownerDocument});
return b}function O(a,b,l){if(!D(l))return!1;var c=-1<d.inArray(a,P);"width"!=a&&"height"!=a&&"opacity"!=a||parseFloat(b)!==parseFloat(l.css(a))||(c=!1);return c}var P="top right bottom left opacity height width".split(" "),z=["top","right","bottom","left"],k=["-webkit-","-moz-","-o-",""],Q=["avoidTransforms","useTranslate3d","leaveTransforms"],I=/^([+-]=)?([\d+-.]+)(.*)$/,R=/([A-Z])/g,L={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},r="jQe",F=null,w=!1,x=(document.body||document.documentElement).style,
G=void 0!==x.WebkitTransition||void 0!==x.MozTransition||void 0!==x.OTransition||void 0!==x.transition,E="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,A=E;d.expr&&d.expr.filters&&(F=d.expr.filters.animated,d.expr.filters.animated=function(a){return d(a).data("events")&&d(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"]?!0:F.call(this,a)});d.extend({toggle3DByDefault:function(){return A=!A},toggleDisabledByDefault:function(){return w=!w},setDisabledByDefault:function(a){return w=
a}});d.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],null),b={x:0,y:0};if(a)for(var d=k.length-1;0<=d;d--){var c=a.getPropertyValue(k[d]+"transform");if(c&&/matrix/i.test(c)){a=c.replace(/^matrix\(/i,"").split(/, |\)$/g);b={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return b};d.fn.animate=function(a,b,l,c){a=a||{};var g=!("undefined"!==typeof a.bottom||"undefined"!==typeof a.right),e=d.speed(b,l,c),f=0,p=function(){f--;0===f&&"function"===typeof e.complete&&
e.complete.apply(this,arguments)};return!0===("undefined"!==typeof a.avoidCSSTransitions?a.avoidCSSTransitions:w)||!G||q(a)||N(a)||0>=e.duration||e.step?B.apply(this,arguments):this[!0===e.queue?"queue":"each"](function(){var b=d(this),c=d.extend({},e),l=function(c){var e=b.data(r)||{original:{}},f={};if(2==c.eventPhase){if(!0!==a.leaveTransforms){for(c=k.length-1;0<=c;c--)f[k[c]+"transform"]="";if(g&&"undefined"!==typeof e.meta){c=0;for(var h;h=z[c];++c)f[h]=e.meta[h+"_o"]+"px",d(this).css(h,f[h])}}b.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(e.original).css(f).data(r,
null);"hide"===a.opacity&&b.css({display:"none",opacity:""});p.call(this)}},n={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",
easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",
easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},t={},n=n[c.easing||"swing"]?n[c.easing||"swing"]:c.easing||"swing",h;for(h in a)if(-1===d.inArray(h,
Q)){var u=-1<d.inArray(h,z),v=H(b,a[h],h,u&&!0!==a.avoidTransforms);O(h,v,b)?K(b,h,c.duration,n,v,u&&!0!==a.avoidTransforms,g,a.useTranslate3d):t[h]=a[h]}b.unbind("webkitTransitionEnd oTransitionEnd transitionend");h=b.data(r);if(!h||q(h)||q(h.secondary))c.queue=!1;else{f++;b.css(h.properties);var w=h.secondary;setTimeout(function(){b.bind("webkitTransitionEnd oTransitionEnd transitionend",l).css(w)})}q(t)||(f++,B.apply(b,[t,{duration:c.duration,easing:d.easing[c.easing]?c.easing:d.easing.swing?"swing":
"linear",complete:p,queue:c.queue}]));return!0})};d.fn.animate.defaults={};d.fn.stop=function(a,b,l){if(!G)return C.apply(this,[a,b]);a&&this.queue([]);this.each(function(){var c=d(this),g=c.data(r);if(g&&!q(g)){var e,f={};if(b){if(f=g.secondary,!l&&void 0!==typeof g.meta.left_o||void 0!==typeof g.meta.top_o)for(f.left=void 0!==typeof g.meta.left_o?g.meta.left_o:"auto",f.top=void 0!==typeof g.meta.top_o?g.meta.top_o:"auto",e=k.length-1;0<=e;e--)f[k[e]+"transform"]=""}else if(!q(g.secondary)){var p=
window.getComputedStyle(c[0],null);if(p)for(var m in g.secondary)if(g.secondary.hasOwnProperty(m)&&(m=m.replace(R,"-$1").toLowerCase(),f[m]=p.getPropertyValue(m),!l&&/matrix/i.test(f[m])))for(e=f[m].replace(/^matrix\(/i,"").split(/, |\)$/g),f.left=parseFloat(e[4])+parseFloat(c.css("left"))+"px"||"auto",f.top=parseFloat(e[5])+parseFloat(c.css("top"))+"px"||"auto",e=k.length-1;0<=e;e--)f[k[e]+"transform"]=""}c.unbind("webkitTransitionEnd oTransitionEnd transitionend");c.css(g.original).css(f).data(r,
null)}else C.apply(c,[a,b])});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);/* END FILE */
/*! Samsung 2014-04-16 */
!function(a,b){function c(b,c){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,b.href&&f&&"map"===e.nodeName.toLowerCase()?(g=a("img[usemap=#"+f+"]")[0],!!g&&d(g)):!1):(/input|select|textarea|button|object/.test(h)?!b.disabled:"a"===h?b.href||c:c)&&d(b)}function d(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}var e=0,f=/^ui-id-\d+$/;a.ui=a.ui||{},a.extend(a.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),scrollParent:function(){var b;return b=a.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length)for(var d,e,f=a(this[0]);f.length&&f[0]!==document;){if(d=f.css("position"),("absolute"===d||"relative"===d||"fixed"===d)&&(e=parseInt(f.css("zIndex"),10),!isNaN(e)&&0!==e))return e;f=f.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})},removeUniqueId:function(){return this.each(function(){f.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function e(b,c,d,e){return a.each(f,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),e&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var f="Width"===d?["Left","Right"]:["Top","Bottom"],g=d.toLowerCase(),h={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?h["inner"+d].call(this):this.each(function(){a(this).css(g,e(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return"number"!=typeof b?h["outer"+d].call(this,b):this.each(function(){a(this).css(g,e(this,b,!0,c)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=-1===navigator.userAgent.toLowerCase().indexOf("trident")?!1:!0,a.support.selectstart="onselectstart"in document.createElement("div"),a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c){var d,e=a.plugins[b];if(e&&a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType)for(d=0;d<e.length;d++)a.options[e[d][0]]&&e[d][1].apply(a.element,c)}},hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)}})}(jQuery),function(a,b){var c=0,d=Array.prototype.slice,e=a.cleanData;a.cleanData=function(b){for(var c,d=0;null!=(c=b[d]);d++)try{a(c).triggerHandler("remove")}catch(f){}e(b)},a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?(arguments.length&&this._createWidget(a,b),void 0):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}(),void 0):(i[b]=d,void 0)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g)},a.widget.extend=function(c){for(var e,f,g=d.call(arguments,1),h=0,i=g.length;i>h;h++)for(e in g[h])f=g[h][e],g[h].hasOwnProperty(e)&&f!==b&&(c[e]=a.isPlainObject(f)?a.isPlainObject(c[e])?a.widget.extend({},c[e],f):a.widget.extend({},f):f);return c},a.widget.bridge=function(c,e){var f=e.prototype.widgetFullName||c;a.fn[c]=function(g){var h="string"==typeof g,i=d.call(arguments,1),j=this;return g=!h&&i.length?a.widget.extend.apply(null,[g].concat(i)):g,h?this.each(function(){var d,e=a.data(this,f);return e?a.isFunction(e[g])&&"_"!==g.charAt(0)?(d=e[g].apply(e,i),d!==e&&d!==b?(j=d&&d.jquery?j.pushStack(d.get()):d,!1):void 0):a.error("no such method '"+g+"' for "+c+" widget instance"):a.error("cannot call methods on "+c+" prior to initialization; "+"attempted to call method '"+g+"'")}):this.each(function(){var b=a.data(this,f);b?b.option(g||{})._init():a.data(this,f,new e(g,this))}),j}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(b,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(c,d){var e,f,g,h=c;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof c)if(h={},e=c.split("."),c=e.shift(),e.length){for(f=h[c]=a.widget.extend({},this.options[c]),g=0;g<e.length-1;g++)f[e[g]]=f[e[g]]||{},f=f[e[g]];if(c=e.pop(),d===b)return f[c]===b?null:f[c];f[c]=d}else{if(d===b)return this.options[c]===b?null:this.options[c];h[c]=d}return this._setOptions(h),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!b).attr("aria-disabled",b),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){return b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled")?("string"==typeof g?f[g]:g).apply(f,arguments):void 0}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^(\w+)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,a.unbind(b).undelegate(b)},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}})}(jQuery),function(a){var b=!1;a(document).mouseup(function(){b=!1}),a.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){return!0===a.data(c.target,b.widgetName+".preventClickEvent")?(a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(c){if(!b){this._mouseStarted&&this._mouseUp(c),this._mouseDownEvent=c;var d=this,e=1===c.which,f="string"==typeof this.options.cancel&&c.target.nodeName?a(c.target).closest(this.options.cancel).length:!1;return e&&!f&&this._mouseCapture(c)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(c)!==!1,!this._mouseStarted)?(c.preventDefault(),!0):(!0===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),c.preventDefault(),b=!0,!0)):!0}},_mouseMove:function(b){return a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button?this._mouseUp(b):this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target===this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(a){a.widget("ui.draggable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(b),this.handle?(a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"original"!==this.options.helper||a.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1):!1},_mouseUp:function(b){return a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){return this.options.handle?!!a(b.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d[0]===this.element[0]||/(fixed|absolute)/.test(d.css("position"))||d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){var b=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;return e.containment?"window"===e.containment?(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===e.containment?(this.containment=[0,0,a(document).width()-this.helperProportions.width-this.margins.left,(a(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):e.containment.constructor===Array?(this.containment=e.containment,void 0):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],d&&(b="hidden"!==c.css("overflow"),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c),void 0):(this.containment=null,void 0)},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:e.scrollTop(),left:e.scrollLeft()}),{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*d}},_generatePosition:function(b){var c,d,e,f,g=this.options,h="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=b.pageX,j=b.pageY;return this.offset.scroll||(this.offset.scroll={top:h.scrollTop(),left:h.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(d=this.relative_container.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,b.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),b.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),b.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),b.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),"drag"===b&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("ui-draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"ui-sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("ui-draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,"original"===d.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("ui-draggable"),e=this;a.each(d.sortables,function(){var f=!1,g=this;this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(f=!0,a.each(d.sortables,function(){return this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this!==g&&this.instance._intersectsWith(this.instance.containerCache)&&a.contains(g.instance.element[0],this.instance.element[0])&&(f=!1),f})),f?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(){var b=a("body"),c=a(this).data("ui-draggable").options;b.css("cursor")&&(c._cursor=b.css("cursor")),b.css("cursor",c.cursor)},stop:function(){var b=a(this).data("ui-draggable").options;b._cursor&&a("body").css("cursor",b._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("ui-draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("ui-draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(){var b=a(this).data("ui-draggable");b.scrollParent[0]!==document&&"HTML"!==b.scrollParent[0].tagName&&(b.overflowOffset=b.scrollParent.offset())},drag:function(b){var c=a(this).data("ui-draggable"),d=c.options,e=!1;c.scrollParent[0]!==document&&"HTML"!==c.scrollParent[0].tagName?(d.axis&&"x"===d.axis||(c.overflowOffset.top+c.scrollParent[0].offsetHeight-b.pageY<d.scrollSensitivity?c.scrollParent[0].scrollTop=e=c.scrollParent[0].scrollTop+d.scrollSpeed:b.pageY-c.overflowOffset.top<d.scrollSensitivity&&(c.scrollParent[0].scrollTop=e=c.scrollParent[0].scrollTop-d.scrollSpeed)),d.axis&&"y"===d.axis||(c.overflowOffset.left+c.scrollParent[0].offsetWidth-b.pageX<d.scrollSensitivity?c.scrollParent[0].scrollLeft=e=c.scrollParent[0].scrollLeft+d.scrollSpeed:b.pageX-c.overflowOffset.left<d.scrollSensitivity&&(c.scrollParent[0].scrollLeft=e=c.scrollParent[0].scrollLeft-d.scrollSpeed))):(d.axis&&"x"===d.axis||(b.pageY-a(document).scrollTop()<d.scrollSensitivity?e=a(document).scrollTop(a(document).scrollTop()-d.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<d.scrollSensitivity&&(e=a(document).scrollTop(a(document).scrollTop()+d.scrollSpeed))),d.axis&&"y"===d.axis||(b.pageX-a(document).scrollLeft()<d.scrollSensitivity?e=a(document).scrollLeft(a(document).scrollLeft()-d.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<d.scrollSensitivity&&(e=a(document).scrollLeft(a(document).scrollLeft()+d.scrollSpeed)))),e!==!1&&a.ui.ddmanager&&!d.dropBehaviour&&a.ui.ddmanager.prepareOffsets(c,b)}}),a.ui.plugin.add("draggable","snap",{start:function(){var b=a(this).data("ui-draggable"),c=b.options;b.snapElements=[],a(c.snap.constructor!==String?c.snap.items||":data(ui-draggable)":c.snap).each(function(){var c=a(this),d=c.offset();this!==b.element[0]&&b.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:d.top,left:d.left})})},drag:function(b,c){var d,e,f,g,h,i,j,k,l,m,n=a(this).data("ui-draggable"),o=n.options,p=o.snapTolerance,q=c.offset.left,r=q+n.helperProportions.width,s=c.offset.top,t=s+n.helperProportions.height;for(l=n.snapElements.length-1;l>=0;l--)h=n.snapElements[l].left,i=h+n.snapElements[l].width,j=n.snapElements[l].top,k=j+n.snapElements[l].height,h-p>r||q>i+p||j-p>t||s>k+p||!a.contains(n.snapElements[l].item.ownerDocument,n.snapElements[l].item)?(n.snapElements[l].snapping&&n.options.snap.release&&n.options.snap.release.call(n.element,b,a.extend(n._uiHash(),{snapItem:n.snapElements[l].item})),n.snapElements[l].snapping=!1):("inner"!==o.snapMode&&(d=Math.abs(j-t)<=p,e=Math.abs(k-s)<=p,f=Math.abs(h-r)<=p,g=Math.abs(i-q)<=p,d&&(c.position.top=n._convertPositionTo("relative",{top:j-n.helperProportions.height,left:0}).top-n.margins.top),e&&(c.position.top=n._convertPositionTo("relative",{top:k,left:0}).top-n.margins.top),f&&(c.position.left=n._convertPositionTo("relative",{top:0,left:h-n.helperProportions.width}).left-n.margins.left),g&&(c.position.left=n._convertPositionTo("relative",{top:0,left:i}).left-n.margins.left)),m=d||e||f||g,"outer"!==o.snapMode&&(d=Math.abs(j-s)<=p,e=Math.abs(k-t)<=p,f=Math.abs(h-q)<=p,g=Math.abs(i-r)<=p,d&&(c.position.top=n._convertPositionTo("relative",{top:j,left:0}).top-n.margins.top),e&&(c.position.top=n._convertPositionTo("relative",{top:k-n.helperProportions.height,left:0}).top-n.margins.top),f&&(c.position.left=n._convertPositionTo("relative",{top:0,left:h}).left-n.margins.left),g&&(c.position.left=n._convertPositionTo("relative",{top:0,left:i-n.helperProportions.width}).left-n.margins.left)),!n.snapElements[l].snapping&&(d||e||f||g||m)&&n.options.snap.snap&&n.options.snap.snap.call(n.element,b,a.extend(n._uiHash(),{snapItem:n.snapElements[l].item})),n.snapElements[l].snapping=d||e||f||g||m)}}),a.ui.plugin.add("draggable","stack",{start:function(){var b,c=this.data("ui-draggable").options,d=a.makeArray(a(c.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});d.length&&(b=parseInt(a(d[0]).css("zIndex"),10)||0,a(d).each(function(c){a(this).css("zIndex",b+c)}),this.css("zIndex",b+d.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("ui-draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("ui-draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})}(jQuery),function(a){function b(a,b,c){return a>b&&b+c>a}a.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var b=this.options,c=b.accept;this.isover=!1,this.isout=!0,this.accept=a.isFunction(c)?c:function(a){return a.is(c)
},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var b=0,c=a.ui.ddmanager.droppables[this.options.scope];b<c.length;b++)c[b]===this&&c.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(b,c){"accept"===b&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current,e=!1;return d&&(d.currentItem||d.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"ui-droppable");return b.options.greedy&&!b.options.disabled&&b.options.scope===d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance)?(e=!0,!1):void 0}),e?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element):!1):!1},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.ui.intersect=function(a,c,d){if(!c.offset)return!1;var e,f,g=(a.positionAbs||a.position.absolute).left,h=g+a.helperProportions.width,i=(a.positionAbs||a.position.absolute).top,j=i+a.helperProportions.height,k=c.offset.left,l=k+c.proportions.width,m=c.offset.top,n=m+c.proportions.height;switch(d){case"fit":return g>=k&&l>=h&&i>=m&&n>=j;case"intersect":return k<g+a.helperProportions.width/2&&h-a.helperProportions.width/2<l&&m<i+a.helperProportions.height/2&&j-a.helperProportions.height/2<n;case"pointer":return e=(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,f=(a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,b(f,m,c.proportions.height)&&b(e,k,c.proportions.width);case"touch":return(i>=m&&n>=i||j>=m&&n>=j||m>i&&j>n)&&(g>=k&&l>=g||h>=k&&l>=h||k>g&&h>l);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d,e,f=a.ui.ddmanager.droppables[b.options.scope]||[],g=c?c.type:null,h=(b.currentItem||b.element).find(":data(ui-droppable)").addBack();a:for(d=0;d<f.length;d++)if(!(f[d].options.disabled||b&&!f[d].accept.call(f[d].element[0],b.currentItem||b.element))){for(e=0;e<h.length;e++)if(h[e]===f[d].element[0]){f[d].proportions.height=0;continue a}f[d].visible="none"!==f[d].element.css("display"),f[d].visible&&("mousedown"===g&&f[d]._activate.call(f[d],c),f[d].offset=f[d].element.offset(),f[d].proportions={width:f[d].element[0].offsetWidth,height:f[d].element[0].offsetHeight})}},drop:function(b,c){var d=!1;return a.each((a.ui.ddmanager.droppables[b.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,c)))}),d},dragStart:function(b,c){b.element.parentsUntil("body").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var d,e,f,g=a.ui.intersect(b,this,this.options.tolerance),h=!g&&this.isover?"isout":g&&!this.isover?"isover":null;h&&(this.options.greedy&&(e=this.options.scope,f=this.element.parents(":data(ui-droppable)").filter(function(){return a.data(this,"ui-droppable").options.scope===e}),f.length&&(d=a.data(f[0],"ui-droppable"),d.greedyChild="isover"===h)),d&&"isover"===h&&(d.isover=!1,d.isout=!0,d._out.call(d,c)),this[h]=!0,this["isout"===h?"isover":"isout"]=!1,this["isover"===h?"_over":"_out"].call(this,c),d&&"isout"===h&&(d.isout=!1,d.isover=!0,d._over.call(d,c)))}})},dragStop:function(b,c){b.element.parentsUntil("body").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}}(jQuery),function(a){function b(a,b,c){return a>b&&b+c>a}function c(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))}a.widget("ui.sortable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===a.axis||c(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_setOption:function(b,c){"disabled"===b?(this.options[b]=c,this.widget().toggleClass("ui-sortable-disabled",!!c)):a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(b,c){var d=null,e=!1,f=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(b),a(b.target).parents().each(function(){return a.data(this,f.widgetName+"-item")===f?(d=a(this),!1):void 0}),a.data(b.target,f.widgetName+"-item")===f&&(d=a(b.target)),d?!this.options.handle||c||(a(this.options.handle,d).find("*").addBack().each(function(){this===b.target&&(e=!0)}),e)?(this.currentItem=d,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(b,c,d){var e,f,g=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),g.containment&&this._setContainment(),g.cursor&&"auto"!==g.cursor&&(f=this.document.find("body"),this.storedCursor=f.css("cursor"),f.css("cursor",g.cursor),this.storedStylesheet=a("<style>*{ cursor: "+g.cursor+" !important; }</style>").appendTo(f)),g.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",g.opacity)),g.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",g.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!d)for(e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("activate",b,this._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){var c,d,e,f,g=this.options,h=!1;for(this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<g.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+g.scrollSpeed:b.pageY-this.overflowOffset.top<g.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-g.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<g.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+g.scrollSpeed:b.pageX-this.overflowOffset.left<g.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-g.scrollSpeed)):(b.pageY-a(document).scrollTop()<g.scrollSensitivity?h=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<g.scrollSensitivity&&(h=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)),b.pageX-a(document).scrollLeft()<g.scrollSensitivity?h=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<g.scrollSensitivity&&(h=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed))),h!==!1&&a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),c=this.items.length-1;c>=0;c--)if(d=this.items[c],e=d.item[0],f=this._intersectsWithPointer(d),f&&d.instance===this.currentContainer&&e!==this.currentItem[0]&&this.placeholder[1===f?"next":"prev"]()[0]!==e&&!a.contains(this.placeholder[0],e)&&("semi-dynamic"===this.options.type?!a.contains(this.element[0],e):!0)){if(this.direction=1===f?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(d))break;this._rearrange(b,d),this._trigger("change",b,this._uiHash());break}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(b){if(a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b),this.options.revert){var d=this,e=this.placeholder.offset(),f=this.options.axis,g={};f&&"x"!==f||(g.left=e.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),f&&"y"!==f||(g.top=e.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,a(this.helper).animate(g,parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--)this.containers[b]._trigger("deactivate",null,this._uiHash(this)),this.containers[b].containerCache.over&&(this.containers[b]._trigger("out",null,this._uiHash(this)),this.containers[b].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[\-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l="x"===this.options.axis||d+j>h&&i>d+j,m="y"===this.options.axis||b+k>f&&g>b+k,n=l&&m;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?n:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(a){var c="x"===this.options.axis||b(this.positionAbs.top+this.offset.click.top,a.top,a.height),d="y"===this.options.axis||b(this.positionAbs.left+this.offset.click.left,a.left,a.width),e=c&&d,f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return e?this.floating?g&&"right"===g||"down"===f?2:1:f&&("down"===f?2:1):!1},_intersectsWithSides:function(a){var c=b(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),d=b(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?"right"===f&&d||"left"===f&&!d:e&&("down"===e&&c||"up"===e&&!c)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!==a&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return 0!==a&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor===String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){var c,d,e,f,g=[],h=[],i=this._connectWith();if(i&&b)for(c=i.length-1;c>=0;c--)for(e=a(i[c]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&h.push([a.isFunction(f.options.items)?f.options.items.call(f.element):a(f.options.items,f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),f]);for(h.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),c=h.length-1;c>=0;c--)h[c][0].each(function(){g.push(this)});return a(g)},_removeCurrentsFromItems:function(){var b=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=a.grep(this.items,function(a){for(var c=0;c<b.length;c++)if(b[c]===a.item[0])return!1;return!0})},_refreshItems:function(b){this.items=[],this.containers=[this];var c,d,e,f,g,h,i,j,k=this.items,l=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],m=this._connectWith();if(m&&this.ready)for(c=m.length-1;c>=0;c--)for(e=a(m[c]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&(l.push([a.isFunction(f.options.items)?f.options.items.call(f.element[0],b,{item:this.currentItem}):a(f.options.items,f.element),f]),this.containers.push(f));for(c=l.length-1;c>=0;c--)for(g=l[c][1],h=l[c][0],d=0,j=h.length;j>d;d++)i=a(h[d]),i.data(this.widgetName+"-item",g),k.push({item:i,instance:g,width:0,height:0,left:0,top:0})},refreshPositions:function(b){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var c,d,e,f;for(c=this.items.length-1;c>=0;c--)d=this.items[c],d.instance!==this.currentContainer&&this.currentContainer&&d.item[0]!==this.currentItem[0]||(e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item,b||(d.width=e.outerWidth(),d.height=e.outerHeight()),f=e.offset(),d.left=f.left,d.top=f.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(c=this.containers.length-1;c>=0;c--)f=this.containers[c].element.offset(),this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight();return this},_createPlaceholder:function(b){b=b||this;var c,d=b.options;d.placeholder&&d.placeholder.constructor!==String||(c=d.placeholder,d.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),e=a("<"+d+">",b.document[0]).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===d?b.currentItem.children().each(function(){a("<td>&#160;</td>",b.document[0]).attr("colspan",a(this).attr("colspan")||1).appendTo(e)}):"img"===d&&e.attr("src",b.currentItem.attr("src")),c||e.css("visibility","hidden"),e},update:function(a,e){(!c||d.forcePlaceholderSize)&&(e.height()||e.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10)))}}),b.placeholder=a(d.placeholder.element.call(b.element,b.currentItem)),b.currentItem.after(b.placeholder),d.placeholder.update(b,b.placeholder)},_contactContainers:function(d){var e,f,g,h,i,j,k,l,m,n,o=null,p=null;for(e=this.containers.length-1;e>=0;e--)if(!a.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(o&&a.contains(this.containers[e].element[0],o.element[0]))continue;o=this.containers[e],p=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",d,this._uiHash(this)),this.containers[e].containerCache.over=0);if(o)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",d,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(g=1e4,h=null,n=o.floating||c(this.currentItem),i=n?"left":"top",j=n?"width":"height",k=this.positionAbs[i]+this.offset.click[i],f=this.items.length-1;f>=0;f--)a.contains(this.containers[p].element[0],this.items[f].item[0])&&this.items[f].item[0]!==this.currentItem[0]&&(!n||b(this.positionAbs.top+this.offset.click.top,this.items[f].top,this.items[f].height))&&(l=this.items[f].item.offset()[i],m=!1,Math.abs(l-k)>Math.abs(l+this.items[f][j]-k)&&(m=!0,l+=this.items[f][j]),Math.abs(l-k)<g&&(g=Math.abs(l-k),h=this.items[f],this.direction=m?"up":"down"));if(!h&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return;h?this._rearrange(d,h,null,!0):this._rearrange(d,null,this.containers[p].element,!0),this._trigger("change",d,this._uiHash()),this.containers[p]._trigger("change",d,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",d,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):"clone"===c.helper?this.currentItem.clone():this.currentItem;return d.parents("body").length||a("parent"!==c.appendTo?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!d[0].style.width||c.forceHelperSize)&&d.width(this.currentItem.width()),(!d[0].style.height||c.forceHelperSize)&&d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;"parent"===e.containment&&(e.containment=this.helper[0].parentNode),("document"===e.containment||"window"===e.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a("document"===e.containment?document:window).width()-this.helperProportions.width-this.margins.left,(a("document"===e.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(e.containment)||(b=a(e.containment)[0],c=a(e.containment).offset(),d="hidden"!==a(b).css("overflow"),this.containment=[c.left+(parseInt(a(b).css("borderLeftWidth"),10)||0)+(parseInt(a(b).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(a(b).css("borderTopWidth"),10)||0)+(parseInt(a(b).css("paddingTop"),10)||0)-this.margins.top,c.left+(d?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a(b).css("borderLeftWidth"),10)||0)-(parseInt(a(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(d?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a(b).css("borderTopWidth"),10)||0)-(parseInt(a(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(e[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:e.scrollTop())*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:e.scrollLeft())*d}},_generatePosition:function(b){var c,d,e=this.options,f=b.pageX,g=b.pageY,h="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(h[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top)),e.grid&&(c=this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1],g=this.containment?c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3]?c:c-this.offset.click.top>=this.containment[1]?c-e.grid[1]:c+e.grid[1]:c,d=this.originalPageX+Math.round((f-this.originalPageX)/e.grid[0])*e.grid[0],f=this.containment?d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2]?d:d-this.offset.click.left>=this.containment[0]?d-e.grid[0]:d+e.grid[0]:d)),{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():i?0:h.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){e===this.counter&&this.refreshPositions(!d)})},_clear:function(a,b){this.reverting=!1;var c,d=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(c in this._storedCSS)("auto"===this._storedCSS[c]||"static"===this._storedCSS[c])&&(this._storedCSS[c]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!b&&d.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||b||d.push(function(a){this._trigger("update",a,this._uiHash())}),this!==this.currentContainer&&(b||(d.push(function(a){this._trigger("remove",a,this._uiHash())}),d.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),d.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer)))),c=this.containers.length-1;c>=0;c--)b||d.push(function(a){return function(b){a._trigger("deactivate",b,this._uiHash(this))}}.call(this,this.containers[c])),this.containers[c].containerCache.over&&(d.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[c])),this.containers[c].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!b){for(this._trigger("beforeStop",a,this._uiHash()),c=0;c<d.length;c++)d[c].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!1}if(b||this._trigger("beforeStop",a,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!b){for(c=0;c<d.length;c++)d[c].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}})}(jQuery),function(a,b){function c(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},a.extend(this._defaults,this.regional[""]),this.dpDiv=d(a("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function d(b){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.delegate(c,"mouseout",function(){a(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&a(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&a(this).removeClass("ui-datepicker-next-hover")}).delegate(c,"mouseover",function(){a.datepicker._isDisabledDatepicker(f.inline?b.parent()[0]:f.input[0])||(a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),a(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&a(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&a(this).addClass("ui-datepicker-next-hover"))
})}function e(b,c){a.extend(b,c);for(var d in c)null==c[d]&&(b[d]=c[d]);return b}a.extend(a.ui,{datepicker:{version:"1.10.3"}});var f,g="datepicker";a.extend(c.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return e(this._defaults,a||{}),this},_attachDatepicker:function(b,c){var d,e,f;d=b.nodeName.toLowerCase(),e="div"===d||"span"===d,b.id||(this.uuid+=1,b.id="dp"+this.uuid),f=this._newInst(a(b),e),f.settings=a.extend({},c||{}),"input"===d?this._connectDatepicker(b,f):e&&this._inlineDatepicker(b,f)},_newInst:function(b,c){var e=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:e,input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:c?d(a("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(b,c){var d=a(b);c.append=a([]),c.trigger=a([]),d.hasClass(this.markerClassName)||(this._attachments(d,c),d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(c),a.data(b,g,c),c.settings.disabled&&this._disableDatepicker(b))},_attachments:function(b,c){var d,e,f,g=this._get(c,"appendText"),h=this._get(c,"isRTL");c.append&&c.append.remove(),g&&(c.append=a("<span class='"+this._appendClass+"'>"+g+"</span>"),b[h?"before":"after"](c.append)),b.unbind("focus",this._showDatepicker),c.trigger&&c.trigger.remove(),d=this._get(c,"showOn"),("focus"===d||"both"===d)&&b.focus(this._showDatepicker),("button"===d||"both"===d)&&(e=this._get(c,"buttonText"),f=this._get(c,"buttonImage"),c.trigger=a(this._get(c,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:f,alt:e,title:e}):a("<button type='button'></button>").addClass(this._triggerClass).html(f?a("<img/>").attr({src:f,alt:e,title:e}):e)),b[h?"before":"after"](c.trigger),c.trigger.click(function(){return a.datepicker._datepickerShowing&&a.datepicker._lastInput===b[0]?a.datepicker._hideDatepicker():a.datepicker._datepickerShowing&&a.datepicker._lastInput!==b[0]?(a.datepicker._hideDatepicker(),a.datepicker._showDatepicker(b[0])):a.datepicker._showDatepicker(b[0]),!1}))},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b,c,d,e,f=new Date(2009,11,20),g=this._get(a,"dateFormat");g.match(/[DM]/)&&(b=function(a){for(c=0,d=0,e=0;e<a.length;e++)a[e].length>c&&(c=a[e].length,d=e);return d},f.setMonth(b(this._get(a,g.match(/MM/)?"monthNames":"monthNamesShort"))),f.setDate(b(this._get(a,g.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())),a.input.attr("size",this._formatDate(a,f).length)}},_inlineDatepicker:function(b,c){var d=a(b);d.hasClass(this.markerClassName)||(d.addClass(this.markerClassName).append(c.dpDiv),a.data(b,g,c),this._setDate(c,this._getDefaultDate(c),!0),this._updateDatepicker(c),this._updateAlternate(c),c.settings.disabled&&this._disableDatepicker(b),c.dpDiv.css("display","block"))},_dialogDatepicker:function(b,c,d,f,h){var i,j,k,l,m,n=this._dialogInst;return n||(this.uuid+=1,i="dp"+this.uuid,this._dialogInput=a("<input type='text' id='"+i+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),a("body").append(this._dialogInput),n=this._dialogInst=this._newInst(this._dialogInput,!1),n.settings={},a.data(this._dialogInput[0],g,n)),e(n.settings,f||{}),c=c&&c.constructor===Date?this._formatDate(n,c):c,this._dialogInput.val(c),this._pos=h?h.length?h:[h.pageX,h.pageY]:null,this._pos||(j=document.documentElement.clientWidth,k=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,m=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[j/2-100+l,k/2-150+m]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),n.settings.onSelect=d,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),a.blockUI&&a.blockUI(this.dpDiv),a.data(this._dialogInput[0],g,n),this},_destroyDatepicker:function(b){var c,d=a(b),e=a.data(b,g);d.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),a.removeData(b,g),"input"===c?(e.append.remove(),e.trigger.remove(),d.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===c||"span"===c)&&d.removeClass(this.markerClassName).empty())},_enableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,g);e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===c||"span"===c)&&(d=e.children("."+this._inlineClass),d.children().removeClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}))},_disableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,g);e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===c||"span"===c)&&(d=e.children("."+this._inlineClass),d.children().addClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}),this._disabledInputs[this._disabledInputs.length]=b)},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]===a)return!0;return!1},_getInst:function(b){try{return a.data(b,g)}catch(c){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(c,d,f){var g,h,i,j,k=this._getInst(c);return 2===arguments.length&&"string"==typeof d?"defaults"===d?a.extend({},a.datepicker._defaults):k?"all"===d?a.extend({},k.settings):this._get(k,d):null:(g=d||{},"string"==typeof d&&(g={},g[d]=f),k&&(this._curInst===k&&this._hideDatepicker(),h=this._getDateDatepicker(c,!0),i=this._getMinMaxDate(k,"min"),j=this._getMinMaxDate(k,"max"),e(k.settings,g),null!==i&&g.dateFormat!==b&&g.minDate===b&&(k.settings.minDate=this._formatDate(k,i)),null!==j&&g.dateFormat!==b&&g.maxDate===b&&(k.settings.maxDate=this._formatDate(k,j)),"disabled"in g&&(g.disabled?this._disableDatepicker(c):this._enableDatepicker(c)),this._attachments(a(c),k),this._autoSize(k),this._setDate(k,h),this._updateAlternate(k),this._updateDatepicker(k)),void 0)},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(b){var c,d,e,f=a.datepicker._getInst(b.target),g=!0,h=f.dpDiv.is(".ui-datepicker-rtl");if(f._keyEvent=!0,a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker(),g=!1;break;case 13:return e=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv),e[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,e[0]),c=a.datepicker._get(f,"onSelect"),c?(d=a.datepicker._formatDate(f),c.apply(f.input?f.input[0]:null,[d,f])):a.datepicker._hideDatepicker(),!1;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 35:(b.ctrlKey||b.metaKey)&&a.datepicker._clearDate(b.target),g=b.ctrlKey||b.metaKey;break;case 36:(b.ctrlKey||b.metaKey)&&a.datepicker._gotoToday(b.target),g=b.ctrlKey||b.metaKey;break;case 37:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?1:-1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 38:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,-7,"D"),g=b.ctrlKey||b.metaKey;break;case 39:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?-1:1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 40:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,7,"D"),g=b.ctrlKey||b.metaKey;break;default:g=!1}else 36===b.keyCode&&b.ctrlKey?a.datepicker._showDatepicker(this):g=!1;g&&(b.preventDefault(),b.stopPropagation())},_doKeyPress:function(b){var c,d,e=a.datepicker._getInst(b.target);return a.datepicker._get(e,"constrainInput")?(c=a.datepicker._possibleChars(a.datepicker._get(e,"dateFormat")),d=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode),b.ctrlKey||b.metaKey||" ">d||!c||c.indexOf(d)>-1):void 0},_doKeyUp:function(b){var c,d=a.datepicker._getInst(b.target);if(d.input.val()!==d.lastVal)try{c=a.datepicker.parseDate(a.datepicker._get(d,"dateFormat"),d.input?d.input.val():null,a.datepicker._getFormatConfig(d)),c&&(a.datepicker._setDateFromField(d),a.datepicker._updateAlternate(d),a.datepicker._updateDatepicker(d))}catch(e){}return!0},_showDatepicker:function(b){if(b=b.target||b,"input"!==b.nodeName.toLowerCase()&&(b=a("input",b.parentNode)[0]),!a.datepicker._isDisabledDatepicker(b)&&a.datepicker._lastInput!==b){var c,d,f,g,h,i,j;c=a.datepicker._getInst(b),a.datepicker._curInst&&a.datepicker._curInst!==c&&(a.datepicker._curInst.dpDiv.stop(!0,!0),c&&a.datepicker._datepickerShowing&&a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),d=a.datepicker._get(c,"beforeShow"),f=d?d.apply(b,[b,c]):{},f!==!1&&(e(c.settings,f),c.lastVal=null,a.datepicker._lastInput=b,a.datepicker._setDateFromField(c),a.datepicker._inDialog&&(b.value=""),a.datepicker._pos||(a.datepicker._pos=a.datepicker._findPos(b),a.datepicker._pos[1]+=b.offsetHeight),g=!1,a(b).parents().each(function(){return g|="fixed"===a(this).css("position"),!g}),h={left:a.datepicker._pos[0],top:a.datepicker._pos[1]},a.datepicker._pos=null,c.dpDiv.empty(),c.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),a.datepicker._updateDatepicker(c),h=a.datepicker._checkOffset(c,h,g),c.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":g?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),c.inline||(i=a.datepicker._get(c,"showAnim"),j=a.datepicker._get(c,"duration"),c.dpDiv.zIndex(a(b).zIndex()+1),a.datepicker._datepickerShowing=!0,a.effects&&a.effects.effect[i]?c.dpDiv.show(i,a.datepicker._get(c,"showOptions"),j):c.dpDiv[i||"show"](i?j:null),a.datepicker._shouldFocusInput(c)&&c.input.focus(),a.datepicker._curInst=c))}},_updateDatepicker:function(b){this.maxRows=4,f=b,b.dpDiv.empty().append(this._generateHTML(b)),this._attachHandlers(b),b.dpDiv.find("."+this._dayOverClass+" a").mouseover();var c,d=this._getNumberOfMonths(b),e=d[1],g=17;b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),e>1&&b.dpDiv.addClass("ui-datepicker-multi-"+e).css("width",g*e+"em"),b.dpDiv[(1!==d[0]||1!==d[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),b===a.datepicker._curInst&&a.datepicker._datepickerShowing&&a.datepicker._shouldFocusInput(b)&&b.input.focus(),b.yearshtml&&(c=b.yearshtml,setTimeout(function(){c===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml),c=b.yearshtml=null},0))},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},_checkOffset:function(b,c,d){var e=b.dpDiv.outerWidth(),f=b.dpDiv.outerHeight(),g=b.input?b.input.outerWidth():0,h=b.input?b.input.outerHeight():0,i=document.documentElement.clientWidth+(d?0:a(document).scrollLeft()),j=document.documentElement.clientHeight+(d?0:a(document).scrollTop());return c.left-=this._get(b,"isRTL")?e-g:0,c.left-=d&&c.left===b.input.offset().left?a(document).scrollLeft():0,c.top-=d&&c.top===b.input.offset().top+h?a(document).scrollTop():0,c.left-=Math.min(c.left,c.left+e>i&&i>e?Math.abs(c.left+e-i):0),c.top-=Math.min(c.top,c.top+f>j&&j>f?Math.abs(f+h):0),c},_findPos:function(b){for(var c,d=this._getInst(b),e=this._get(d,"isRTL");b&&("hidden"===b.type||1!==b.nodeType||a.expr.filters.hidden(b));)b=b[e?"previousSibling":"nextSibling"];return c=a(b).offset(),[c.left,c.top]},_hideDatepicker:function(b){var c,d,e,f,h=this._curInst;!h||b&&h!==a.data(b,g)||this._datepickerShowing&&(c=this._get(h,"showAnim"),d=this._get(h,"duration"),e=function(){a.datepicker._tidyDialog(h)},a.effects&&(a.effects.effect[c]||a.effects[c])?h.dpDiv.hide(c,a.datepicker._get(h,"showOptions"),d,e):h.dpDiv["slideDown"===c?"slideUp":"fadeIn"===c?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1,f=this._get(h,"onClose"),f&&f.apply(h.input?h.input[0]:null,[h.input?h.input.val():"",h]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),a.blockUI&&(a.unblockUI(),a("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(b){if(a.datepicker._curInst){var c=a(b.target),d=a.datepicker._getInst(c[0]);(c[0].id!==a.datepicker._mainDivId&&0===c.parents("#"+a.datepicker._mainDivId).length&&!c.hasClass(a.datepicker.markerClassName)&&!c.closest("."+a.datepicker._triggerClass).length&&a.datepicker._datepickerShowing&&(!a.datepicker._inDialog||!a.blockUI)||c.hasClass(a.datepicker.markerClassName)&&a.datepicker._curInst!==d)&&a.datepicker._hideDatepicker()}},_adjustDate:function(b,c,d){var e=a(b),f=this._getInst(e[0]);this._isDisabledDatepicker(e[0])||(this._adjustInstDate(f,c+("M"===d?this._get(f,"showCurrentAtPos"):0),d),this._updateDatepicker(f))},_gotoToday:function(b){var c,d=a(b),e=this._getInst(d[0]);this._get(e,"gotoCurrent")&&e.currentDay?(e.selectedDay=e.currentDay,e.drawMonth=e.selectedMonth=e.currentMonth,e.drawYear=e.selectedYear=e.currentYear):(c=new Date,e.selectedDay=c.getDate(),e.drawMonth=e.selectedMonth=c.getMonth(),e.drawYear=e.selectedYear=c.getFullYear()),this._notifyChange(e),this._adjustDate(d)},_selectMonthYear:function(b,c,d){var e=a(b),f=this._getInst(e[0]);f["selected"+("M"===d?"Month":"Year")]=f["draw"+("M"===d?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(e)},_selectDay:function(b,c,d,e){var f,g=a(b);a(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(g[0])||(f=this._getInst(g[0]),f.selectedDay=f.currentDay=a("a",e).html(),f.selectedMonth=f.currentMonth=c,f.selectedYear=f.currentYear=d,this._selectDate(b,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(b){var c=a(b);this._selectDate(c,"")},_selectDate:function(b,c){var d,e=a(b),f=this._getInst(e[0]);c=null!=c?c:this._formatDate(f),f.input&&f.input.val(c),this._updateAlternate(f),d=this._get(f,"onSelect"),d?d.apply(f.input?f.input[0]:null,[c,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.focus(),this._lastInput=null)},_updateAlternate:function(b){var c,d,e,f=this._get(b,"altField");f&&(c=this._get(b,"altFormat")||this._get(b,"dateFormat"),d=this._getDate(b),e=this.formatDate(c,d,this._getFormatConfig(b)),a(f).each(function(){a(this).val(e)}))},noWeekends:function(a){var b=a.getDay();return[b>0&&6>b,""]},iso8601Week:function(a){var b,c=new Date(a.getTime());return c.setDate(c.getDate()+4-(c.getDay()||7)),b=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((b-c)/864e5)/7)+1},parseDate:function(b,c,d){if(null==b||null==c)throw"Invalid arguments";if(c="object"==typeof c?c.toString():c+"",""===c)return null;var e,f,g,h,i=0,j=(d?d.shortYearCutoff:null)||this._defaults.shortYearCutoff,k="string"!=typeof j?j:(new Date).getFullYear()%100+parseInt(j,10),l=(d?d.dayNamesShort:null)||this._defaults.dayNamesShort,m=(d?d.dayNames:null)||this._defaults.dayNames,n=(d?d.monthNamesShort:null)||this._defaults.monthNamesShort,o=(d?d.monthNames:null)||this._defaults.monthNames,p=-1,q=-1,r=-1,s=-1,t=!1,u=function(a){var c=e+1<b.length&&b.charAt(e+1)===a;return c&&e++,c},v=function(a){var b=u(a),d="@"===a?14:"!"===a?20:"y"===a&&b?4:"o"===a?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=c.substring(i).match(e);if(!f)throw"Missing number at position "+i;return i+=f[0].length,parseInt(f[0],10)},w=function(b,d,e){var f=-1,g=a.map(u(b)?e:d,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if(a.each(g,function(a,b){var d=b[1];return c.substr(i,d.length).toLowerCase()===d.toLowerCase()?(f=b[0],i+=d.length,!1):void 0}),-1!==f)return f+1;throw"Unknown name at position "+i},x=function(){if(c.charAt(i)!==b.charAt(e))throw"Unexpected literal at position "+i;i++};for(e=0;e<b.length;e++)if(t)"'"!==b.charAt(e)||u("'")?x():t=!1;else switch(b.charAt(e)){case"d":r=v("d");break;case"D":w("D",l,m);break;case"o":s=v("o");break;case"m":q=v("m");break;case"M":q=w("M",n,o);break;case"y":p=v("y");break;case"@":h=new Date(v("@")),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"!":h=new Date((v("!")-this._ticksTo1970)/1e4),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"'":u("'")?x():t=!0;break;default:x()}if(i<c.length&&(g=c.substr(i),!/^\s+/.test(g)))throw"Extra/unparsed characters found in date: "+g;if(-1===p?p=(new Date).getFullYear():100>p&&(p+=(new Date).getFullYear()-(new Date).getFullYear()%100+(k>=p?0:-100)),s>-1)for(q=1,r=s;;){if(f=this._getDaysInMonth(p,q-1),f>=r)break;q++,r-=f}if(h=this._daylightSavingAdjust(new Date(p,q-1,r)),h.getFullYear()!==p||h.getMonth()+1!==q||h.getDate()!==r)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(a,b,c){if(!b)return"";var d,e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=function(b){var c=d+1<a.length&&a.charAt(d+1)===b;return c&&d++,c},j=function(a,b,c){var d=""+b;if(i(a))for(;d.length<c;)d="0"+d;return d},k=function(a,b,c,d){return i(a)?d[b]:c[b]},l="",m=!1;if(b)for(d=0;d<a.length;d++)if(m)"'"!==a.charAt(d)||i("'")?l+=a.charAt(d):m=!1;else switch(a.charAt(d)){case"d":l+=j("d",b.getDate(),2);break;case"D":l+=k("D",b.getDay(),e,f);break;case"o":l+=j("o",Math.round((new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime()-new Date(b.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=j("m",b.getMonth()+1,2);break;case"M":l+=k("M",b.getMonth(),g,h);break;case"y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":l+=b.getTime();break;case"!":l+=1e4*b.getTime()+this._ticksTo1970;break;case"'":i("'")?l+="'":m=!0;break;default:l+=a.charAt(d)}return l},_possibleChars:function(a){var b,c="",d=!1,e=function(c){var d=b+1<a.length&&a.charAt(b+1)===c;return d&&b++,d};for(b=0;b<a.length;b++)if(d)"'"!==a.charAt(b)||e("'")?c+=a.charAt(b):d=!1;else switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";break;case"D":case"M":return null;case"'":e("'")?c+="'":d=!0;break;default:c+=a.charAt(b)}return c},_get:function(a,c){return a.settings[c]!==b?a.settings[c]:this._defaults[c]},_setDateFromField:function(a,b){if(a.input.val()!==a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e=this._getDefaultDate(a),f=e,g=this._getFormatConfig(a);try{f=this.parseDate(c,d,g)||e}catch(h){d=b?"":d}a.selectedDay=f.getDate(),a.drawMonth=a.selectedMonth=f.getMonth(),a.drawYear=a.selectedYear=f.getFullYear(),a.currentDay=d?f.getDate():0,a.currentMonth=d?f.getMonth():0,a.currentYear=d?f.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(b,c,d){var e=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},f=function(c){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),c,a.datepicker._getFormatConfig(b))}catch(d){}for(var e=(c.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,f=e.getFullYear(),g=e.getMonth(),h=e.getDate(),i=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,j=i.exec(c);j;){switch(j[2]||"d"){case"d":case"D":h+=parseInt(j[1],10);break;case"w":case"W":h+=7*parseInt(j[1],10);break;case"m":case"M":g+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g));break;case"y":case"Y":f+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g))}j=i.exec(c)}return new Date(f,g,h)},g=null==c||""===c?d:"string"==typeof c?f(c):"number"==typeof c?isNaN(c)?d:e(c):new Date(c.getTime());return g=g&&"Invalid Date"===g.toString()?d:g,g&&(g.setHours(0),g.setMinutes(0),g.setSeconds(0),g.setMilliseconds(0)),this._daylightSavingAdjust(g)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),e===a.selectedMonth&&f===a.selectedYear||c||this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(b){var c=this._get(b,"stepMonths"),d="#"+b.id.replace(/\\\\/g,"\\");b.dpDiv.find("[data-handler]").map(function(){var b={prev:function(){a.datepicker._adjustDate(d,-c,"M")},next:function(){a.datepicker._adjustDate(d,+c,"M")},hide:function(){a.datepicker._hideDatepicker()},today:function(){a.datepicker._gotoToday(d)},selectDay:function(){return a.datepicker._selectDay(d,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return a.datepicker._selectMonthYear(d,this,"M"),!1},selectYear:function(){return a.datepicker._selectMonthYear(d,this,"Y"),!1}};a(this).bind(this.getAttribute("data-event"),b[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=new Date,P=this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth(),O.getDate())),Q=this._get(a,"isRTL"),R=this._get(a,"showButtonPanel"),S=this._get(a,"hideIfNoPrevNext"),T=this._get(a,"navigationAsDateFormat"),U=this._getNumberOfMonths(a),V=this._get(a,"showCurrentAtPos"),W=this._get(a,"stepMonths"),X=1!==U[0]||1!==U[1],Y=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(a,"min"),$=this._getMinMaxDate(a,"max"),_=a.drawMonth-V,ab=a.drawYear;if(0>_&&(_+=12,ab--),$)for(b=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-U[0]*U[1]+1,$.getDate())),b=Z&&Z>b?Z:b;this._daylightSavingAdjust(new Date(ab,_,1))>b;)_--,0>_&&(_=11,ab--);for(a.drawMonth=_,a.drawYear=ab,c=this._get(a,"prevText"),c=T?this.formatDate(c,this._daylightSavingAdjust(new Date(ab,_-W,1)),this._getFormatConfig(a)):c,d=this._canAdjustMonth(a,-1,ab,_)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>":S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>",e=this._get(a,"nextText"),e=T?this.formatDate(e,this._daylightSavingAdjust(new Date(ab,_+W,1)),this._getFormatConfig(a)):e,f=this._canAdjustMonth(a,1,ab,_)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>":S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>",g=this._get(a,"currentText"),h=this._get(a,"gotoCurrent")&&a.currentDay?Y:P,g=T?this.formatDate(g,h,this._getFormatConfig(a)):g,i=a.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(a,"closeText")+"</button>",j=R?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Q?i:"")+(this._isInRange(a,h)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+g+"</button>":"")+(Q?"":i)+"</div>":"",k=parseInt(this._get(a,"firstDay"),10),k=isNaN(k)?0:k,l=this._get(a,"showWeek"),m=this._get(a,"dayNames"),n=this._get(a,"dayNamesMin"),o=this._get(a,"monthNames"),p=this._get(a,"monthNamesShort"),q=this._get(a,"beforeShowDay"),r=this._get(a,"showOtherMonths"),s=this._get(a,"selectOtherMonths"),t=this._getDefaultDate(a),u="",w=0;w<U[0];w++){for(x="",this.maxRows=4,y=0;y<U[1];y++){if(z=this._daylightSavingAdjust(new Date(ab,_,a.selectedDay)),A=" ui-corner-all",B="",X){if(B+="<div class='ui-datepicker-group",U[1]>1)switch(y){case 0:B+=" ui-datepicker-group-first",A=" ui-corner-"+(Q?"right":"left");break;case U[1]-1:B+=" ui-datepicker-group-last",A=" ui-corner-"+(Q?"left":"right");break;default:B+=" ui-datepicker-group-middle",A=""}B+="'>"}for(B+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+A+"'>"+(/all|left/.test(A)&&0===w?Q?f:d:"")+(/all|right/.test(A)&&0===w?Q?d:f:"")+this._generateMonthYearHeader(a,_,ab,Z,$,w>0||y>0,o,p)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",C=l?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"",v=0;7>v;v++)D=(v+k)%7,C+="<th"+((v+k+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+m[D]+"'>"+n[D]+"</span></th>";for(B+=C+"</tr></thead><tbody>",E=this._getDaysInMonth(ab,_),ab===a.selectedYear&&_===a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,E)),F=(this._getFirstDayOfMonth(ab,_)-k+7)%7,G=Math.ceil((F+E)/7),H=X?this.maxRows>G?this.maxRows:G:G,this.maxRows=H,I=this._daylightSavingAdjust(new Date(ab,_,1-F)),J=0;H>J;J++){for(B+="<tr>",K=l?"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(I)+"</td>":"",v=0;7>v;v++)L=q?q.apply(a.input?a.input[0]:null,[I]):[!0,""],M=I.getMonth()!==_,N=M&&!s||!L[0]||Z&&Z>I||$&&I>$,K+="<td class='"+((v+k+6)%7>=5?" ui-datepicker-week-end":"")+(M?" ui-datepicker-other-month":"")+(I.getTime()===z.getTime()&&_===a.selectedMonth&&a._keyEvent||t.getTime()===I.getTime()&&t.getTime()===z.getTime()?" "+this._dayOverClass:"")+(N?" "+this._unselectableClass+" ui-state-disabled":"")+(M&&!r?"":" "+L[1]+(I.getTime()===Y.getTime()?" "+this._currentClass:"")+(I.getTime()===P.getTime()?" ui-datepicker-today":""))+"'"+(M&&!r||!L[2]?"":" title='"+L[2].replace(/'/g,"&#39;")+"'")+(N?"":" data-handler='selectDay' data-event='click' data-month='"+I.getMonth()+"' data-year='"+I.getFullYear()+"'")+">"+(M&&!r?"&#xa0;":N?"<span class='ui-state-default'>"+I.getDate()+"</span>":"<a class='ui-state-default"+(I.getTime()===P.getTime()?" ui-state-highlight":"")+(I.getTime()===Y.getTime()?" ui-state-active":"")+(M?" ui-priority-secondary":"")+"' href='#'>"+I.getDate()+"</a>")+"</td>",I.setDate(I.getDate()+1),I=this._daylightSavingAdjust(I);B+=K+"</tr>"}_++,_>11&&(_=0,ab++),B+="</tbody></table>"+(X?"</div>"+(U[0]>0&&y===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=B}u+=x}return u+=j,a._keyEvent=!1,u},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q=this._get(a,"changeMonth"),r=this._get(a,"changeYear"),s=this._get(a,"showMonthAfterYear"),t="<div class='ui-datepicker-title'>",u="";if(f||!q)u+="<span class='ui-datepicker-month'>"+g[b]+"</span>";else{for(i=d&&d.getFullYear()===c,j=e&&e.getFullYear()===c,u+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",k=0;12>k;k++)(!i||k>=d.getMonth())&&(!j||k<=e.getMonth())&&(u+="<option value='"+k+"'"+(k===b?" selected='selected'":"")+">"+h[k]+"</option>");u+="</select>"}if(s||(t+=u+(!f&&q&&r?"":"&#xa0;")),!a.yearshtml)if(a.yearshtml="",f||!r)t+="<span class='ui-datepicker-year'>"+c+"</span>";else{for(l=this._get(a,"yearRange").split(":"),m=(new Date).getFullYear(),n=function(a){var b=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?m+parseInt(a,10):parseInt(a,10);return isNaN(b)?m:b},o=n(l[0]),p=Math.max(o,n(l[1]||"")),o=d?Math.max(o,d.getFullYear()):o,p=e?Math.min(p,e.getFullYear()):p,a.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";p>=o;o++)a.yearshtml+="<option value='"+o+"'"+(o===c?" selected='selected'":"")+">"+o+"</option>";a.yearshtml+="</select>",t+=a.yearshtml,a.yearshtml=null}return t+=this._get(a,"yearSuffix"),s&&(t+=(!f&&q&&r?"":"&#xa0;")+u),t+="</div>"},_adjustInstDate:function(a,b,c){var d=a.drawYear+("Y"===c?b:0),e=a.drawMonth+("M"===c?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+("D"===c?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),("M"===c||"Y"===c)&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&c>b?c:b;return d&&e>d?d:e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return null==b?[1,1]:"number"==typeof b?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return new Date(a,b,1).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(0>b?b:e[0]*e[1]),1));return 0>b&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c,d,e=this._getMinMaxDate(a,"min"),f=this._getMinMaxDate(a,"max"),g=null,h=null,i=this._get(a,"yearRange");return i&&(c=i.split(":"),d=(new Date).getFullYear(),g=parseInt(c[0],10),h=parseInt(c[1],10),c[0].match(/[+\-].*/)&&(g+=d),c[1].match(/[+\-].*/)&&(h+=d)),(!e||b.getTime()>=e.getTime())&&(!f||b.getTime()<=f.getTime())&&(!g||b.getFullYear()>=g)&&(!h||b.getFullYear()<=h)},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));
    return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),a.fn.datepicker=function(b){if(!this.length)return this;a.datepicker.initialized||(a(document).mousedown(a.datepicker._checkExternalClick).find(document.body).append(a.datepicker.dpDiv),a.datepicker.initialized=!0),0===a("#"+a.datepicker._mainDivId).length&&a("body").append(a.datepicker.dpDiv);var c=Array.prototype.slice.call(arguments,1);return"string"!=typeof b||"isDisabled"!==b&&"getDate"!==b&&"widget"!==b?"option"===b&&2===arguments.length&&"string"==typeof arguments[1]?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c)):this.each(function(){"string"==typeof b?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(c)):a.datepicker._attachDatepicker(this,b)}):a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c))},a.datepicker=new c,a.datepicker.initialized=!1,a.datepicker.uuid=(new Date).getTime(),a.datepicker.version="1.10.3"}(jQuery),function(a,b){var c="ui-effects-";a.effects={effect:{}},function(a,b){function c(a,b,c){var d=l[b.type]||{};return null==a?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function d(b){var c=j(),d=c._rgba=[];return b=b.toLowerCase(),o(i,function(a,e){var f,g=e.re.exec(b),h=g&&e.parse(g),i=e.space||"rgba";return h?(f=c[i](h),c[k[i].cache]=f[k[i].cache],d=c._rgba=f._rgba,!1):void 0}),d.length?("0,0,0,0"===d.join()&&a.extend(d,f.transparent),c):f[b]}function e(a,b,c){return c=(c+1)%1,1>6*c?a+6*(b-a)*c:1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a}var f,g="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",h=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],j=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},k={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},l={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},m=j.support={},n=a("<p>")[0],o=a.each;n.style.cssText="background-color:rgba(1,1,1,.5)",m.rgba=n.style.backgroundColor.indexOf("rgba")>-1,o(k,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),j.fn=a.extend(j.prototype,{parse:function(e,g,h,i){if(e===b)return this._rgba=[null,null,null,null],this;(e.jquery||e.nodeType)&&(e=a(e).css(g),g=b);var l=this,m=a.type(e),n=this._rgba=[];return g!==b&&(e=[e,g,h,i],m="array"),"string"===m?this.parse(d(e)||f._default):"array"===m?(o(k.rgba.props,function(a,b){n[b.idx]=c(e[b.idx],b)}),this):"object"===m?(e instanceof j?o(k,function(a,b){e[b.cache]&&(l[b.cache]=e[b.cache].slice())}):o(k,function(b,d){var f=d.cache;o(d.props,function(a,b){if(!l[f]&&d.to){if("alpha"===a||null==e[a])return;l[f]=d.to(l._rgba)}l[f][b.idx]=c(e[a],b,!0)}),l[f]&&a.inArray(null,l[f].slice(0,3))<0&&(l[f][3]=1,d.from&&(l._rgba=d.from(l[f])))}),this):void 0},is:function(a){var b=j(a),c=!0,d=this;return o(k,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],o(e.props,function(a,b){return null!=g[b.idx]?c=g[b.idx]===f[b.idx]:void 0})),c}),c},_space:function(){var a=[],b=this;return o(k,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var d=j(a),e=d._space(),f=k[e],g=0===this.alpha()?j("transparent"):this,h=g[f.cache]||f.to(g._rgba),i=h.slice();return d=d[f.cache],o(f.props,function(a,e){var f=e.idx,g=h[f],j=d[f],k=l[e.type]||{};null!==j&&(null===g?i[f]=j:(k.mod&&(j-g>k.mod/2?g+=k.mod:g-j>k.mod/2&&(g-=k.mod)),i[f]=c((j-g)*b+g,e)))}),this[e](i)},blend:function(b){if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=j(b)._rgba;return j(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return null==a?b>2?1:0:a});return 1===c[3]&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return null==a&&(a=b>2?1:0),b&&3>b&&(a=Math.round(100*a)+"%"),a});return 1===c[3]&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(255*d)),"#"+a.map(c,function(a){return a=(a||0).toString(16),1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),j.fn.parse.prototype=j.fn,k.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=a[3],h=Math.max(d,e,f),i=Math.min(d,e,f),j=h-i,k=h+i,l=.5*k;return b=i===h?0:d===h?60*(e-f)/j+360:e===h?60*(f-d)/j+120:60*(d-e)/j+240,c=0===j?0:.5>=l?j/k:j/(2-k),[Math.round(b)%360,c,l,null==g?1:g]},k.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],f=a[3],g=.5>=d?d*(1+c):d+c-d*c,h=2*d-g;return[Math.round(255*e(h,g,b+1/3)),Math.round(255*e(h,g,b)),Math.round(255*e(h,g,b-1/3)),f]},o(k,function(d,e){var f=e.props,g=e.cache,i=e.to,k=e.from;j.fn[d]=function(d){if(i&&!this[g]&&(this[g]=i(this._rgba)),d===b)return this[g].slice();var e,h=a.type(d),l="array"===h||"object"===h?d:arguments,m=this[g].slice();return o(f,function(a,b){var d=l["object"===h?a:b.idx];null==d&&(d=m[b.idx]),m[b.idx]=c(d,b)}),k?(e=j(k(m)),e[g]=m,e):j(m)},o(f,function(b,c){j.fn[b]||(j.fn[b]=function(e){var f,g=a.type(e),i="alpha"===b?this._hsla?"hsla":"rgba":d,j=this[i](),k=j[c.idx];return"undefined"===g?k:("function"===g&&(e=e.call(this,k),g=a.type(e)),null==e&&c.empty?this:("string"===g&&(f=h.exec(e),f&&(e=k+parseFloat(f[2])*("+"===f[1]?1:-1))),j[c.idx]=e,this[i](j)))})})}),j.hook=function(b){var c=b.split(" ");o(c,function(b,c){a.cssHooks[c]={set:function(b,e){var f,g,h="";if("transparent"!==e&&("string"!==a.type(e)||(f=d(e)))){if(e=j(f||e),!m.rgba&&1!==e._rgba[3]){for(g="backgroundColor"===c?b.parentNode:b;(""===h||"transparent"===h)&&g&&g.style;)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(i){}e=e.blend(h&&"transparent"!==h?h:"_default")}e=e.toRgbaString()}try{b.style[c]=e}catch(i){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=j(b.elem,c),b.end=j(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},j.hook(g),a.cssHooks.borderColor={expand:function(a){var b={};return o(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},f=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function c(b){var c,d,e=b.ownerDocument.defaultView?b.ownerDocument.defaultView.getComputedStyle(b,null):b.currentStyle,f={};if(e&&e.length&&e[0]&&e[e[0]])for(d=e.length;d--;)c=e[d],"string"==typeof e[c]&&(f[a.camelCase(c)]=e[c]);else for(c in e)"string"==typeof e[c]&&(f[c]=e[c]);return f}function d(b,c){var d,e,g={};for(d in c)e=c[d],b[d]!==e&&(f[d]||(a.fx.step[d]||!isNaN(parseFloat(e)))&&(g[d]=e));return g}var e=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(b,c){a.fx.step[c]=function(a){("none"!==a.end&&!a.setAttr||1===a.pos&&!a.setAttr)&&(jQuery.style(a.elem,c,a.end),a.setAttr=!0)}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a.effects.animateClass=function(b,f,g,h){var i=a.speed(f,g,h);return this.queue(function(){var f,g=a(this),h=g.attr("class")||"",j=i.children?g.find("*").addBack():g;j=j.map(function(){var b=a(this);return{el:b,start:c(this)}}),f=function(){a.each(e,function(a,c){b[c]&&g[c+"Class"](b[c])})},f(),j=j.map(function(){return this.end=c(this.el[0]),this.diff=d(this.start,this.end),this}),g.attr("class",h),j=j.map(function(){var b=this,c=a.Deferred(),d=a.extend({},i,{queue:!1,complete:function(){c.resolve(b)}});return this.el.animate(this.diff,d),c.promise()}),a.when.apply(a,j.get()).done(function(){f(),a.each(arguments,function(){var b=this.el;a.each(this.diff,function(a){b.css(a,"")})}),i.complete.call(g[0])})})},a.fn.extend({addClass:function(b){return function(c,d,e,f){return d?a.effects.animateClass.call(this,{add:c},d,e,f):b.apply(this,arguments)}}(a.fn.addClass),removeClass:function(b){return function(c,d,e,f){return arguments.length>1?a.effects.animateClass.call(this,{remove:c},d,e,f):b.apply(this,arguments)}}(a.fn.removeClass),toggleClass:function(c){return function(d,e,f,g,h){return"boolean"==typeof e||e===b?f?a.effects.animateClass.call(this,e?{add:d}:{remove:d},f,g,h):c.apply(this,arguments):a.effects.animateClass.call(this,{toggle:d},e,f,g)}}(a.fn.toggleClass),switchClass:function(b,c,d,e,f){return a.effects.animateClass.call(this,{add:c,remove:b},d,e,f)}})}(),function(){function d(b,c,d,e){return a.isPlainObject(b)&&(c=b,b=b.effect),b={effect:b},null==c&&(c={}),a.isFunction(c)&&(e=c,d=null,c={}),("number"==typeof c||a.fx.speeds[c])&&(e=d,d=c,c={}),a.isFunction(d)&&(e=d,d=null),c&&a.extend(b,c),d=d||c.duration,b.duration=a.fx.off?0:"number"==typeof d?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,b.complete=e||c.complete,b}function e(b){return!b||"number"==typeof b||a.fx.speeds[b]?!0:"string"!=typeof b||a.effects.effect[b]?a.isFunction(b)?!0:"object"!=typeof b||b.effect?!1:!0:!0}a.extend(a.effects,{version:"1.10.3",save:function(a,b){for(var d=0;d<b.length;d++)null!==b[d]&&a.data(c+b[d],a[0].style[b[d]])},restore:function(a,d){var e,f;for(f=0;f<d.length;f++)null!==d[f]&&(e=a.data(c+d[f]),e===b&&(e=""),a.css(d[f],e))},setMode:function(a,b){return"toggle"===b&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:b.width(),height:b.height()},f=document.activeElement;try{f.id}catch(g){f=document.body}return b.wrap(d),(b[0]===f||a.contains(b[0],f))&&a(f).focus(),d=b.parent(),"static"===b.css("position")?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),b.css(e),d.css(c).show()},removeWrapper:function(b){var c=document.activeElement;return b.parent().is(".ui-effects-wrapper")&&(b.parent().replaceWith(b),(b[0]===c||a.contains(b[0],c))&&a(c).focus()),b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(){function b(b){function d(){a.isFunction(f)&&f.call(e[0]),a.isFunction(b)&&b()}var e=a(this),f=c.complete,h=c.mode;(e.is(":hidden")?"hide"===h:"show"===h)?(e[h](),d()):g.call(e[0],c,d)}var c=d.apply(this,arguments),e=c.mode,f=c.queue,g=a.effects.effect[c.effect];return a.fx.off||!g?e?this[e](c.duration,c.complete):this.each(function(){c.complete&&c.complete.call(this)}):f===!1?this.each(b):this.queue(f||"fx",b)},show:function(a){return function(b){if(e(b))return a.apply(this,arguments);var c=d.apply(this,arguments);return c.mode="show",this.effect.call(this,c)}}(a.fn.show),hide:function(a){return function(b){if(e(b))return a.apply(this,arguments);var c=d.apply(this,arguments);return c.mode="hide",this.effect.call(this,c)}}(a.fn.hide),toggle:function(a){return function(b){if(e(b)||"boolean"==typeof b)return a.apply(this,arguments);var c=d.apply(this,arguments);return c.mode="toggle",this.effect.call(this,c)}}(a.fn.toggle),cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}})}(),function(){var b={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,c){b[c]=function(b){return Math.pow(b,a+2)}}),a.extend(b,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a<((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),a.each(b,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return.5>a?c(2*a)/2:1-c(-2*a+2)/2}})}()}(jQuery),function(a){a.effects.effect.slide=function(b,c){var d,e=a(this),f=["position","top","bottom","left","right","width","height"],g=a.effects.setMode(e,b.mode||"show"),h="show"===g,i=b.direction||"left",j="up"===i||"down"===i?"top":"left",k="up"===i||"left"===i,l={};a.effects.save(e,f),e.show(),d=b.distance||e["top"===j?"outerHeight":"outerWidth"](!0),a.effects.createWrapper(e).css({overflow:"hidden"}),h&&e.css(j,k?isNaN(d)?"-"+d:-d:d),l[j]=(h?k?"+=":"-=":k?"-=":"+=")+d,e.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){"hide"===g&&e.hide(),a.effects.restore(e,f),a.effects.removeWrapper(e),c()}})}}(jQuery);/* END FILE */
(function(e){function d(){var e=o();if(e!==u){u=e;i.trigger("orientationchange")}}function E(t,n,r,i){var s=r.type;r.type=n;e.event.dispatch.call(t,r,i);r.type=s}e.attrFn=e.attrFn||{};var t=navigator.userAgent.toLowerCase(),n=t.indexOf("chrome")>-1&&(t.indexOf("windows")>-1||t.indexOf("macintosh")>-1||t.indexOf("linux")>-1)&&t.indexOf("chrome")<0,r={swipe_h_threshold:50,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,touch_capable:"ontouchstart"in document.documentElement&&!n,orientation_support:"orientation"in window&&"onorientationchange"in window,startevent:"ontouchstart"in document.documentElement&&!n?"touchstart":"mousedown",endevent:"ontouchstart"in document.documentElement&&!n?"touchend":"mouseup",moveevent:"ontouchstart"in document.documentElement&&!n?"touchmove":"mousemove",tapevent:"ontouchstart"in document.documentElement&&!n?"tap":"click",scrollevent:"ontouchstart"in document.documentElement&&!n?"touchmove":"scroll",hold_timer:null,tap_timer:null};e.isTouchCapable=function(){return r.touch_capable};e.getStartEvent=function(){return r.startevent};e.getEndEvent=function(){return r.endevent};e.getMoveEvent=function(){return r.moveevent};e.getTapEvent=function(){return r.tapevent};e.getScrollEvent=function(){return r.scrollevent};e.each(["tapstart","tapend","tap","singletap","doubletap","taphold","swipe","swipeup","swiperight","swipedown","swipeleft","swipeend","scrollstart","scrollend","orientationchange"],function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)};e.attrFn[n]=true});e.event.special.tapstart={setup:function(){var t=this,n=e(t);n.bind(r.startevent,function(e){n.data("callee",arguments.callee);if(e.which&&e.which!==1){return false}var i=e.originalEvent,s={position:{x:r.touch_capable?i.touches[0].screenX:e.screenX,y:r.touch_capable?i.touches[0].screenY:e.screenY},offset:{x:r.touch_capable?i.touches[0].pageX-i.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?i.touches[0].pageY-i.touches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};E(t,"tapstart",e,s);return true})},remove:function(){e(this).unbind(r.startevent,e(this).data.callee)}};e.event.special.tapend={setup:function(){var t=this,n=e(t);n.bind(r.endevent,function(e){n.data("callee",arguments.callee);var i=e.originalEvent;var s={position:{x:r.touch_capable?i.changedTouches[0].screenX:e.screenX,y:r.touch_capable?i.changedTouches[0].screenY:e.screenY},offset:{x:r.touch_capable?i.changedTouches[0].pageX-i.changedTouches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?i.changedTouches[0].pageY-i.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};E(t,"tapend",e,s);return true})},remove:function(){e(this).unbind(r.endevent,e(this).data.callee)}};e.event.special.taphold={setup:function(){var t=this,n=e(t),i,s,o={x:0,y:0};n.bind(r.startevent,function(e){if(e.which&&e.which!==1){return false}else{n.data("tapheld",false);i=e.target;var s=e.originalEvent;var u=(new Date).getTime(),a={x:r.touch_capable?s.touches[0].screenX:e.screenX,y:r.touch_capable?s.touches[0].screenY:e.screenY},f={x:r.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:e.offsetY};o.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX;o.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY;r.hold_timer=window.setTimeout(function(){var l=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,c=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY;if(e.target==i&&o.x==l&&o.y==c){n.data("tapheld",true);var h=(new Date).getTime(),p={x:r.touch_capable?s.touches[0].screenX:e.screenX,y:r.touch_capable?s.touches[0].screenY:e.screenY},d={x:r.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:e.offsetY};duration=h-u;var v={startTime:u,endTime:h,startPosition:a,startOffset:f,endPosition:p,endOffset:d,duration:duration,target:e.target};n.data("callee1",arguments.callee);E(t,"taphold",e,v)}},r.taphold_threshold);return true}}).bind(r.endevent,function(){n.data("callee2",arguments.callee);n.data("tapheld",false);window.clearTimeout(r.hold_timer)})},remove:function(){e(this).unbind(r.startevent,e(this).data.callee1).unbind(r.endevent,e(this).data.callee2)}};e.event.special.doubletap={setup:function(){var t=this,n=e(t),i,s,o,u;n.bind(r.startevent,function(e){if(e.which&&e.which!==1){return false}else{n.data("doubletapped",false);i=e.target;n.data("callee1",arguments.callee);u=e.originalEvent;o={position:{x:r.touch_capable?u.touches[0].screenX:e.screenX,y:r.touch_capable?u.touches[0].screenY:e.screenY},offset:{x:r.touch_capable?u.touches[0].pageX-u.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?u.touches[0].pageY-u.touches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};return true}}).bind(r.endevent,function(e){var a=(new Date).getTime();var f=n.data("lastTouch")||a+1;var l=a-f;window.clearTimeout(s);n.data("callee2",arguments.callee);if(l<r.doubletap_int&&l>0&&e.target==i&&l>100){n.data("doubletapped",true);window.clearTimeout(r.tap_timer);var c={position:{x:r.touch_capable?u.touches[0].screenX:e.screenX,y:r.touch_capable?u.touches[0].screenY:e.screenY},offset:{x:r.touch_capable?u.touches[0].pageX-u.touches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?u.touches[0].pageY-u.touches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};var h={firstTap:o,secondTap:c,interval:c.time-o.time};E(t,"doubletap",e,h)}else{n.data("lastTouch",a);s=window.setTimeout(function(e){window.clearTimeout(s)},r.doubletap_int,[e])}n.data("lastTouch",a)})},remove:function(){e(this).unbind(r.startevent,e(this).data.callee1).unbind(r.endevent,e(this).data.callee2)}};e.event.special.singletap={setup:function(){var t=this,n=e(t),i=null,s=null,o={x:0,y:0};n.bind(r.startevent,function(e){if(e.which&&e.which!==1){return false}else{s=(new Date).getTime();i=e.target;n.data("callee1",arguments.callee);o.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX;o.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY;return true}}).bind(r.endevent,function(e){n.data("callee2",arguments.callee);if(e.target==i){end_pos_x=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageX:e.pageX;end_pos_y=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageY:e.pageY;r.tap_timer=window.setTimeout(function(){if(!n.data("doubletapped")&&!n.data("tapheld")&&o.x==end_pos_x&&o.y==end_pos_y){var i=e.originalEvent;var u={position:{x:r.touch_capable?i.changedTouches[0].screenX:e.screenX,y:r.touch_capable?i.changedTouches[0].screenY:e.screenY},offset:{x:r.touch_capable?i.changedTouches[0].pageX-i.changedTouches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?i.changedTouches[0].pageY-i.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};if(u.time-s<r.taphold_threshold){E(t,"singletap",e,u)}}},r.doubletap_int)}})},remove:function(){e(this).unbind(r.startevent,e(this).data.callee1).unbind(r.endevent,e(this).data.callee2)}};e.event.special.tap={setup:function(){var t=this,n=e(t),i=false,s=null,o,u={x:0,y:0};n.bind(r.startevent,function(e){n.data("callee1",arguments.callee);if(e.which&&e.which!==1){return false}else{i=true;u.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX;u.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY;o=(new Date).getTime();s=e.target;return true}}).bind(r.endevent,function(e){n.data("callee2",arguments.callee);var a=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageX:e.pageX,f=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageY:e.pageY;if(s==e.target&&i&&(new Date).getTime()-o<r.taphold_threshold&&u.x==a&&u.y==f){var l=e.originalEvent;var c={position:{x:r.touch_capable?l.changedTouches[0].screenX:e.screenX,y:r.touch_capable?l.changedTouches[0].screenY:e.screenY},offset:{x:r.touch_capable?l.changedTouches[0].pageX-l.changedTouches[0].target.offsetLeft:e.offsetX,y:r.touch_capable?l.changedTouches[0].pageY-l.changedTouches[0].target.offsetTop:e.offsetY},time:(new Date).getTime(),target:e.target};E(t,"tap",e,c)}})},remove:function(){e(this).unbind(r.startevent,e(this).data.callee1).unbind(r.endevent,e(this).data.callee2)}};e.event.special.swipe={setup:function(){function f(t){n=e(t.target);n.data("callee1",arguments.callee);o.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX;o.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY;u.x=o.x;u.y=o.y;i=true;var s=t.originalEvent;a={position:{x:r.touch_capable?s.touches[0].screenX:t.screenX,y:r.touch_capable?s.touches[0].screenY:t.screenY},offset:{x:r.touch_capable?s.touches[0].pageX-s.touches[0].target.offsetLeft:t.offsetX,y:r.touch_capable?s.touches[0].pageY-s.touches[0].target.offsetTop:t.offsetY},time:(new Date).getTime(),target:t.target};var f=new Date;while(new Date-f<100){}}function l(t){n=e(t.target);n.data("callee2",arguments.callee);u.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX;u.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY;window.clearTimeout(r.hold_timer);var f;var l=n.data("xthreshold"),c=n.data("ythreshold"),h=typeof l!=="undefined"&&l!==false&&parseInt(l)?parseInt(l):r.swipe_h_threshold,p=typeof c!=="undefined"&&c!==false&&parseInt(c)?parseInt(c):r.swipe_v_threshold;if(o.y>u.y&&o.y-u.y>p){f="swipeup"}if(o.x<u.x&&u.x-o.x>h){f="swiperight"}if(o.y<u.y&&u.y-o.y>p){f="swipedown"}if(o.x>u.x&&o.x-u.x>h){f="swipeleft"}if(f!=undefined&&i){o.x=0;o.y=0;u.x=0;u.y=0;i=false;var d=t.originalEvent;endEvnt={position:{x:r.touch_capable?d.touches[0].screenX:t.screenX,y:r.touch_capable?d.touches[0].screenY:t.screenY},offset:{x:r.touch_capable?d.touches[0].pageX-d.touches[0].target.offsetLeft:t.offsetX,y:r.touch_capable?d.touches[0].pageY-d.touches[0].target.offsetTop:t.offsetY},time:(new Date).getTime(),target:t.target};var v=Math.abs(a.position.x-endEvnt.position.x),m=Math.abs(a.position.y-endEvnt.position.y);var g={startEvnt:a,endEvnt:endEvnt,direction:f.replace("swipe",""),xAmount:v,yAmount:m,duration:endEvnt.time-a.time};s=true;n.trigger("swipe",g).trigger(f,g)}}function c(t){n=e(t.target);var o="";n.data("callee3",arguments.callee);if(s){var u=n.data("xthreshold"),f=n.data("ythreshold"),l=typeof u!=="undefined"&&u!==false&&parseInt(u)?parseInt(u):r.swipe_h_threshold,c=typeof f!=="undefined"&&f!==false&&parseInt(f)?parseInt(f):r.swipe_v_threshold;var h=t.originalEvent;endEvnt={position:{x:r.touch_capable?h.changedTouches[0].screenX:t.screenX,y:r.touch_capable?h.changedTouches[0].screenY:t.screenY},offset:{x:r.touch_capable?h.changedTouches[0].pageX-h.changedTouches[0].target.offsetLeft:t.offsetX,y:r.touch_capable?h.changedTouches[0].pageY-h.changedTouches[0].target.offsetTop:t.offsetY},time:(new Date).getTime(),target:t.target};if(a.position.y>endEvnt.position.y&&a.position.y-endEvnt.position.y>c){o="swipeup"}if(a.position.x<endEvnt.position.x&&endEvnt.position.x-a.position.x>l){o="swiperight"}if(a.position.y<endEvnt.position.y&&endEvnt.position.y-a.position.y>c){o="swipedown"}if(a.position.x>endEvnt.position.x&&a.position.x-endEvnt.position.x>l){o="swipeleft"}var p=Math.abs(a.position.x-endEvnt.position.x),d=Math.abs(a.position.y-endEvnt.position.y);var v={startEvnt:a,endEvnt:endEvnt,direction:o.replace("swipe",""),xAmount:p,yAmount:d,duration:endEvnt.time-a.time};n.trigger("swipeend",v)}i=false;s=false}var t=this,n=e(t),i=false,s=false,o={x:0,y:0},u={x:0,y:0},a;n.bind(r.startevent,f);n.bind(r.moveevent,l);n.bind(r.endevent,c)},remove:function(){e(this).unbind(r.startevent,e(this).data.callee1).unbind(r.moveevent,e(this).data.callee2).unbind(r.endevent,e(this).data.callee3)}};e.event.special.scrollstart={setup:function(){function o(e,n){i=n;E(t,i?"scrollstart":"scrollend",e)}var t=this,n=e(t),i,s;n.bind(r.scrollevent,function(e){n.data("callee",arguments.callee);if(!i){o(e,true)}clearTimeout(s);s=setTimeout(function(){o(e,false)},50)})},remove:function(){e(this).unbind(r.scrollevent,e(this).data.callee)}};var i=e(window),s,o,u,a,f,l={0:true,180:true};if(r.orientation_support){var c=window.innerWidth||e(window).width(),h=window.innerHeight||e(window).height(),p=50;a=c>h&&c-h>p;f=l[window.orientation];if(a&&f||!a&&!f){l={"-90":true,90:true}}}e.event.special.orientationchange=s={setup:function(){if(r.orientation_support){return false}u=o();i.bind("throttledresize",d);return true},teardown:function(){if(r.orientation_support){return false}i.unbind("throttledresize",d);return true},add:function(e){var t=e.handler;e.handler=function(e){e.orientation=o();return t.apply(this,arguments)}}};e.event.special.orientationchange.orientation=o=function(){var e=true,t=document.documentElement;if(r.orientation_support){e=l[window.orientation]}else{e=t&&t.clientWidth/t.clientHeight<1.1}return e?"portrait":"landscape"};e.event.special.throttledresize={setup:function(){e(this).bind("resize",m)},teardown:function(){e(this).unbind("resize",m)}};var v=250,m=function(){b=(new Date).getTime();w=b-g;if(w>=v){g=b;e(this).trigger("throttledresize")}else{if(y){window.clearTimeout(y)}y=window.setTimeout(d,v-w)}},g=0,y,b,w;e.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe",swipeend:"swipe"},function(t,n,r){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)}}})})(jQuery);/* END FILE */
(function(e){var t=e([]),n=800,r=30,i=10,s=[],o={};var u=function(e){var t,n;for(t=0,n=s.length;t<n;t++){if(Math.abs(e.pageX-s[t].x)<r&&Math.abs(e.pageY-s[t].y)<r){e.stopImmediatePropagation();e.stopPropagation();e.preventDefault()}}};var a=true;if(Modernizr&&Modernizr.hasOwnProperty("touch")){a=Modernizr.touch}var f=function(){s.splice(0,1)};e.event.special.fastclick={touchstart:function(t){o.startX=t.originalEvent.touches[0].pageX;o.startY=t.originalEvent.touches[0].pageY;o.hasMoved=false;e(this).on("touchmove",e.event.special.fastclick.touchmove)},touchmove:function(t){if(Math.abs(t.originalEvent.touches[0].pageX-o.startX)>i||Math.abs(t.originalEvent.touches[0].pageX-o.startY)>i){o.hasMoved=true;e(this).off("touchmove",e.event.special.fastclick.touchmove)}},add:function(t){if(!a){return}var r=e(this);r.data("objHandlers")[t.guid]=t;var i=t.handler;t.handler=function(t){r.off("touchmove",e.event.special.fastclick.touchmove);if(!o.hasMoved){s.push({x:o.startX,y:o.startY});window.setTimeout(f,n);var u=this;var a=e([]);var l=arguments;e.each(r.data("objHandlers"),function(){if(!this.selector){if(r[0]==t.target||r.has(t.target).length>0)i.apply(r,l)}else{e(this.selector,r).each(function(){if(this==t.target||e(this).has(t.target).length>0)i.apply(this,l)})}})}}},setup:function(n,r,i){var s=e(this);if(!a){s.on("click",e.event.special.fastclick.handler);return}t=t.add(s);if(!s.data("objHandlers")){s.data("objHandlers",{});s.on("touchstart",e.event.special.fastclick.touchstart);s.on("touchend touchcancel",e.event.special.fastclick.handler)}if(!o.ghostbuster){e(document).on("click vclick",u);o.ghostbuster=true}},teardown:function(n){var r=e(this);if(!a){r.off("click",e.event.special.fastclick.handler);return}t=t.not(r);r.off("touchstart",e.event.special.fastclick.touchstart);r.off("touchmove",e.event.special.fastclick.touchmove);r.off("touchend touchcancel",e.event.special.fastclick.handler);if(t.length==0){e(document).off("click vclick",u);o.ghostbuster=false}},remove:function(t){if(!a){return}var n=e(this);delete n.data("objHandlers")[t.guid]},handler:function(t){var n=t.type;t.type="fastclick";e.event.trigger.call(this,t,{},this,true);t.type=n}}})(jQuery);
/* END FILE */
/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
 /*global document*/
(function(b){b.support.touch="ontouchend" in document;if(!b.support.touch){return;}var c=b.ui.mouse.prototype,e=c._mouseInit,a;function d(g,h){if(g.originalEvent.touches.length>1){return;}g.preventDefault();var i=g.originalEvent.changedTouches[0],f=document.createEvent("MouseEvents");f.initMouseEvent(h,true,true,window,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null);g.target.dispatchEvent(f);}c._touchStart=function(g){var f=this;if(a||!f._mouseCapture(g.originalEvent.changedTouches[0])){return;}a=true;f._touchMoved=false;d(g,"mouseover");d(g,"mousemove");d(g,"mousedown");};c._touchMove=function(f){if(!a){return;}this._touchMoved=true;d(f,"mousemove");};c._touchEnd=function(f){if(!a){return;}d(f,"mouseup");d(f,"mouseout");if(!this._touchMoved){d(f,"click");}a=false;};c._mouseInit=function(){var f=this;f.element.bind("touchstart",b.proxy(f,"_touchStart")).bind("touchmove",b.proxy(f,"_touchMove")).bind("touchend",b.proxy(f,"_touchEnd"));e.call(f);};})(jQuery);/* END FILE */
/**
 * Copyright (c) 2005 - 2010, James Auldridge
 * All rights reserved.
 *
 * Licensed under the BSD, MIT, and GPL (your choice!) Licenses:
 *  http://code.google.com/p/cookies/wiki/License
 *
 */
var jaaulde=window.jaaulde||{};jaaulde.utils=jaaulde.utils||{};jaaulde.utils.cookies=(function(){var resolveOptions,assembleOptionsString,parseCookies,constructor,defaultOptions={expiresAt:null,path:'/',domain:null,secure:false};resolveOptions=function(options){var returnValue,expireDate;if(typeof options!=='object'||options===null){returnValue=defaultOptions;}else
{returnValue={expiresAt:defaultOptions.expiresAt,path:defaultOptions.path,domain:defaultOptions.domain,secure:defaultOptions.secure};if(typeof options.expiresAt==='object'&&options.expiresAt instanceof Date){returnValue.expiresAt=options.expiresAt;}else if(typeof options.hoursToLive==='number'&&options.hoursToLive!==0){expireDate=new Date();expireDate.setTime(expireDate.getTime()+(options.hoursToLive*60*60*1000));returnValue.expiresAt=expireDate;}if(typeof options.path==='string'&&options.path!==''){returnValue.path=options.path;}if(typeof options.domain==='string'&&options.domain!==''){returnValue.domain=options.domain;}if(options.secure===true){returnValue.secure=options.secure;}}return returnValue;};assembleOptionsString=function(options){options=resolveOptions(options);return((typeof options.expiresAt==='object'&&options.expiresAt instanceof Date?'; expires='+options.expiresAt.toGMTString():'')+'; path='+options.path+(typeof options.domain==='string'?'; domain='+options.domain:'')+(options.secure===true?'; secure':''));};parseCookies=function(){var cookies={},i,pair,name,value,separated=document.cookie.split(';'),unparsedValue;for(i=0;i<separated.length;i=i+1){pair=separated[i].split('=');name=pair[0].replace(/^\s*/,'').replace(/\s*$/,'');try
{value=decodeURIComponent(pair[1]);}catch(e1){value=pair[1];}if(typeof JSON==='object'&&JSON!==null&&typeof JSON.parse==='function'){try
{unparsedValue=value;value=JSON.parse(value);}catch(e2){value=unparsedValue;}}cookies[name]=value;}return cookies;};constructor=function(){};constructor.prototype.get=function(cookieName){var returnValue,item,cookies=parseCookies();if(typeof cookieName==='string'){returnValue=(typeof cookies[cookieName]!=='undefined')?cookies[cookieName]:null;}else if(typeof cookieName==='object'&&cookieName!==null){returnValue={};for(item in cookieName){if(typeof cookies[cookieName[item]]!=='undefined'){returnValue[cookieName[item]]=cookies[cookieName[item]];}else
{returnValue[cookieName[item]]=null;}}}else
{returnValue=cookies;}return returnValue;};constructor.prototype.filter=function(cookieNameRegExp){var cookieName,returnValue={},cookies=parseCookies();if(typeof cookieNameRegExp==='string'){cookieNameRegExp=new RegExp(cookieNameRegExp);}for(cookieName in cookies){if(cookieName.match(cookieNameRegExp)){returnValue[cookieName]=cookies[cookieName];}}return returnValue;};constructor.prototype.set=function(cookieName,value,options){if(typeof options!=='object'||options===null){options={};}if(typeof value==='undefined'||value===null){value='';options.hoursToLive=-8760;}else if(typeof value!=='string'){if(typeof JSON==='object'&&JSON!==null&&typeof JSON.stringify==='function'){value=JSON.stringify(value);}else
{throw new Error('cookies.set() received non-string value and could not serialize.');}}var optionsString=assembleOptionsString(options);document.cookie=cookieName+'='+encodeURIComponent(value)+optionsString;};constructor.prototype.del=function(cookieName,options){var allCookies={},name;if(typeof options!=='object'||options===null){options={};}if(typeof cookieName==='boolean'&&cookieName===true){allCookies=this.get();}else if(typeof cookieName==='string'){allCookies[cookieName]=true;}for(name in allCookies){if(typeof name==='string'&&name!==''){this.set(name,null,options);}}};constructor.prototype.test=function(){var returnValue=false,testName='cT',testValue='data';this.set(testName,testValue);if(this.get(testName)===testValue){this.del(testName);returnValue=true;}return returnValue;};constructor.prototype.setOptions=function(options){if(typeof options!=='object'){options=null;}defaultOptions=resolveOptions(options);};return new constructor();})();(function(){if(window.jQuery){(function($){$.cookies=jaaulde.utils.cookies;var extensions={cookify:function(options){return this.each(function(){var i,nameAttrs=['name','id'],name,$this=$(this),value;for(i in nameAttrs){if(!isNaN(i)){name=$this.attr(nameAttrs[i]);if(typeof name==='string'&&name!==''){if($this.is(':checkbox, :radio')){if($this.attr('checked')){value=$this.val();}}else if($this.is(':input')){value=$this.val();}else
{value=$this.html();}if(typeof value!=='string'||value===''){value=null;}$.cookies.set(name,value,options);break;}}}});},cookieFill:function(){return this.each(function(){var n,getN,nameAttrs=['name','id'],name,$this=$(this),value;getN=function(){n=nameAttrs.pop();return!!n;};while(getN()){name=$this.attr(n);if(typeof name==='string'&&name!==''){value=$.cookies.get(name);if(value!==null){if($this.is(':checkbox, :radio')){if($this.val()===value){$this.attr('checked','checked');}else
{$this.removeAttr('checked');}}else if($this.is(':input')){$this.val(value);}else
{$this.html(value);}}break;}}});},cookieBind:function(options){return this.each(function(){var $this=$(this);$this.cookieFill().change(function(){$this.cookify(options);});});}};$.each(extensions,function(i){$.fn[i]=this;});})(window.jQuery);}})();/* END FILE */
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
 is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();/* END FILE */
/*
 * Swipe 2.0
 *
 * Brad Birdsall
 * Copyright 2013, MIT License
 *
 */

function Swipe(container, options) {
    'use strict';
    // utilities
    var noop = function() {}; // simple no operation function
    var offloadFn = function(fn) { setTimeout(fn || noop, 0); }; // offload a functions execution

    // check browser capabilities
    var browser = {
        addEventListener: !!window.addEventListener,
        touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
        transitions: (function(temp) {
            var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
            for ( var i in props ){
                if (temp.style[ props[i] ] !== undefined) {
                    return true;
                }
            }
            return false;
        })(document.createElement('swipe'))
    };

    // quit if no root element
    if (!container){
        return;
    }
    var element = container.children[0];
    /* ADD ADNStyle */
    if(!browser.transitions){
        var $lis = $('#'+container.id).find('> ul > li');
    }
    /* ADD ADNStyle */
    var slides, realSlideLen, slidePos, width, length;
    options = options || {};
    var index = parseInt(options.startSlide, 10) || 0;
    var speed = options.speed || 300;
    options.continuous = options.continuous !== undefined ? options.continuous : true;
    var init = true; // added to not double continuous class name

    function setup(isDomRefresh) {
        // cache slides
        if(isDomRefresh) index = 0;
        slides = element.children;
        if ( !$(element).attr('realChild') || isDomRefresh ) {
            $(element).attr('realChild', slides.length);
        }
		realSlideLen = $(element).attr('realChild');
        length = slides.length;

        // set continuous to false if only one slide
        if (slides.length <= 2) options.continuous = false;
        else options.continuous = true;

        //special case if two slides
		if (browser.transitions && options.continuous && (slides.length == 2)) {
            element.appendChild(slides[0].cloneNode(true));
            element.appendChild(element.children[1].cloneNode(true));
            slides = element.children;
        }

        // Adds a class to ss-carousel called not-continuous
        if (!options.continuous && init) {
            var currClass = container.parentNode.className;
            container.parentNode.className = currClass+' not-continuous';
            init = false;
        }

        // create an array to store current positions of each slide
        slidePos = new Array(slides.length);

        // determine width of each slide
        width = Math.ceil(container.getBoundingClientRect().width || container.offsetWidth);
        element.style.width = (slides.length * width) + 'px';

        if(!browser.transitions){
            $lis = $('#'+container.id).find('> ul > li');
        }

        /* ADD ADNStyle */
        if($lis){
            for(var i = 0, $lisLen = $lis.length; i < $lisLen; i++){
                $lis[i].style.position = 'absolute';
                if(i === index){
                    $lis[i].style.left = '0px';
                }else{
                    $lis[i].style.left = -width + 'px';
                }
            }
        }
        /* ADD ADNStyle */
        // stack elements
        var pos = slides.length;
        while(pos--) {
            var slide = slides[pos];
            slide.style.width = width + 'px';
            slide.setAttribute('data-index', pos);

            if (browser.transitions) {
                slide.style.left = (pos * -width) + 'px';
                if( options.isRTL ){
                	move(pos, index > pos ? width : (index < pos ? -width : 0), 0);
                }else{
                	move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
                }
                
            }
        }

        // reposition elements before and after index
        if (options.continuous && browser.transitions) {
        	if( options.isRTL ){
        		move(circle(index+1), -width, 0);
                move(circle(index-1), width, 0);
        	}else{
        		move(circle(index-1), -width, 0);
                move(circle(index+1), width, 0);
        	}
            
        }

        //if (!browser.transitions) element.style.left = (index * -width) + 'px';

        container.style.visibility = 'visible';
    }

    function prev() {
        if (options.continuous){
            slide(index-1);
        }else if (index){
            slide(index-1);
        }
    }

    function next() {
        if (options.continuous){
            slide(index+1);
        }else if (index < slides.length - 1){
            slide(index+1);
        }else{
            slide(index-1);// add adnstyle... caousel이 2개일 경우에도 auto slide 구현.
        }
    	/*
        if (options.continuous) slide(index+1);
        else if (index < slides.length - 1) slide(index+1);
        */
    }

    function circle(index) {
        // a simple positive modulo using slides.length
        return (slides.length + (index % slides.length)) % slides.length;
    }

    function slide(to, slideSpeed) {
        //console.log("slide index : " + index);
        //console.log(self);
        if(self.swipeEvent){
            self.swipeEvent();
        }
        if (index == to){
            return;
        } // do nothing if already on requested slide

        var direction;
        // BEGIN if browser.transitions
        if (browser.transitions) {
            direction = Math.abs(index-to) / (index-to); // 1: backward, -1: forward

            // get the actual position of the slide
            if (options.continuous) {
                var natural_direction = direction;
                if( options.isRTL ){
                	direction = slidePos[circle(to)] / width;
                }else{
                	direction = -slidePos[circle(to)] / width;
                }
                

                // if going forward but to < index, use to = slides.length + to
                // if going backward but to > index, use to = -slides.length + to
                if (direction !== natural_direction){
                    to =  -direction * slides.length + to;
                }

            }

            var diff = Math.abs(index-to) - 1;
//            console.log( "index : " + index + " / to :  " + to );
            // move all the slides between index and to in the right direction
            while (diff--){
                move( circle((to > index ? to : index) - diff - 1), width * direction, 0);
            }

            to = circle(to);
            
            if( options.isRTL ){
            	move(index, width * direction * -1, slideSpeed || speed);
            }else{
            	move(index, width * direction, slideSpeed || speed);
            }
           
            move(to, 0, slideSpeed || speed);

            if (options.continuous){
            	 if( options.isRTL ){
            		 move(circle(to - direction), (width * direction), 0);
                 }else{
                	 move(circle(to - direction), -(width * direction), 0);
                 }
            } // we need to get the next in place

        }
        else {
        	if( options.isRTL ){
        		direction = (Math.abs(index-to) / (index-to))*-1; // ADD ADNStyle
        	}else{
        		direction = Math.abs(index-to) / (index-to); // ADD ADNStyle
        	}
            
            to = circle(to);
            animate(direction, index, to, slideSpeed || speed); // ADD ADNStyle
            //no fallback for a circular continuous if the browser does not accept transitions
        }

        index = to;
       
        offloadFn(options.callback && options.callback(index, slides[index]));

    }

    function move(index, dist, speed) {
        /*
		if ( slides.length > 2 ) {
			translate(index, dist, speed);
		}*/
        translate(index, dist, speed);
        slidePos[index] = dist;
//        console.log("move : " +  index + " / " + dist );
    }

    function translate(index, dist, speed) {
        var slide = slides[index];
        var style = slide && slide.style;

        if (!style){
            return;
        }

        style.webkitTransitionDuration =
            style.MozTransitionDuration =
                style.msTransitionDuration =
                    style.OTransitionDuration =
                        style.transitionDuration = speed + 'ms';

        if(ss.metrics.isMobile()){
            style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
        }else{
            style.webkitTransform = 'translate(' + dist + 'px,0)';
        }

        style.msTransform =
            style.MozTransform =
                style.OTransform = 'translateX(' + dist + 'px)';
    }

    function animate(direction, from, to, speed) {

        //console.log("direction : " + direction);
        //console.log("from : " + from);
        //console.log("to : " + to);
        //console.log("speed : " + speed);

        var start = +new Date, fromLi = $lis[from], toLi = $lis[to],
            fromLi_x = 0, fromLi_tx = direction * width,
            toLi_x = -direction * width, toLi_tx = 0;


        // if not an animation, just reposition
        if (!speed) {
            fromLi.style.left = fromLi_x + 'px';
            toLi.style.left = toLi_x + 'px';
            return;
        }

        var timer = setInterval(function() {
            var timeElap = +new Date - start;

            if (timeElap > speed) {
                fromLi.style.left = fromLi_tx + 'px';
                toLi.style.left = toLi_tx + 'px';
                if (delay){
                    begin();
                }
                options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);
                clearInterval(timer);
                return;
            }

            fromLi.style.left = (( (fromLi_tx - fromLi_x) * (Math.floor((timeElap / speed) * 100) / 100) ) + fromLi_x) + 'px';
            toLi.style.left = (( (toLi_tx - toLi_x) * (Math.floor((timeElap / speed) * 100) / 100) ) + toLi_x) + 'px';
        }, 4);
    }

    // setup auto slideshow
    var delay = options.auto || 0;
    var interval;

    function begin() {
        interval = setTimeout(next, delay);
    }

    function stop() {
        delay = 0;
        clearTimeout(interval);
    }

    // setup initial vars
    var start = {};
    var delta = {};
    var isScrolling;

    // setup event capturing
    var events = {
        handleEvent: function(event) {
            switch (event.type) {
                case 'touchstart': this.start(event); break;
                case 'touchmove': this.move(event); break;
                case 'touchend': offloadFn(this.end(event)); break;
                case 'webkitTransitionEnd':
                case 'msTransitionEnd':
                case 'oTransitionEnd':
                case 'otransitionend':
                case 'transitionend': offloadFn(this.transitionEnd(event)); break;
                case 'resize': offloadFn(setup.call()); break;
                case 'orientationchange': this.setup(); break;
            }

            if (options.stopPropagation){
                event.stopPropagation();
            }
        },

        start: function(event) {
            var touches = event.touches[0];

            // measure start values
            start = {
                // get initial touch coords
                x: touches.pageX,
                y: touches.pageY,
                time: +new Date // store time to determine touch duration
            };


            isScrolling = undefined; // used for testing first move event
            delta = {}; // reset delta and end measurements

            // attach touchmove and touchend listeners
            element.addEventListener('touchmove', this, false);
            element.addEventListener('touchend', this, false);
        },

        move: function(event) {
			if ( realSlideLen == 1 ){
                return;
            }
            // ensure swiping with one touch and not pinching
			if ( event.touches.length > 1 || event.scale && event.scale !== 1){
                return;
            }

            if (options.disableScroll){
                event.preventDefault();
            }

            var touches = event.touches[0];

            // measure change in x and y
            delta = {
                x: touches.pageX - start.x,
                y: touches.pageY - start.y
            };

            // determine if scrolling test has run - one time test
            if ( typeof isScrolling == 'undefined') {
                isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
            }

            // if user is not trying to scroll vertically
            if (!isScrolling) {
                event.preventDefault(); // prevent native scrolling
                stop(); // stop slideshow

                // increase resistance if first or last slide
                if (options.continuous) { // we don't add resistance at the end
                    translate(circle(index-1), delta.x + slidePos[circle(index-1)], 0);
                    translate(index, delta.x + slidePos[index], 0);
                    translate(circle(index+1), delta.x + slidePos[circle(index+1)], 0);
                } else {
                    delta.x =
                        delta.x /
                            ( (!index && delta.x > 0 || index == slides.length - 1 && delta.x < 0) ? ( Math.abs(delta.x) / width + 1 ) : 1 );
                    // translate 1:1
                    translate(index-1, delta.x + slidePos[index-1], 0);
                    translate(index, delta.x + slidePos[index], 0);
                    translate(index+1, delta.x + slidePos[index+1], 0);
                }
            }
        },

        end: function(event) {
        	//console.log( slides );
            var duration = +new Date - start.time; // measure duration
            // determine if slide attempt triggers next/prev slide
            var isValidSlide =
                Number(duration) < 250 && Math.abs(delta.x) > 20 || Math.abs(delta.x) > width/2;
            // determine if slide attempt is past start and end
            var isPastBounds =
                !index && delta.x > 0 || index == slides.length - 1 && delta.x < 0;
            if (options.continuous){
                isPastBounds = false;
            }
            //var direction = delta.x < 0; // determine direction of swipe (true:right, false:left)
            var direction = ( options.isRTL ) ? delta.x > 0 : delta.x < 0; // determine direction of swipe (true:right, false:left)
            // if not scrolling vertically
            if (!isScrolling) {
//                console.log('direction : ' + direction + ', options.continuous : ' + options.continuous + ', isValidSlide : ' + isValidSlide + ', isPastBounds : ' + isPastBounds);
                if (isValidSlide && !isPastBounds) {
                    if (direction) {
                        if (options.continuous) { // we need to get the next in this direction in place
                        	if( options.isRTL ){
                        		move(circle(index-1), width, 0);
                                move(circle(index+2), -width, 0);
                        	}else{
                        		move(circle(index-1), -width, 0);
                                move(circle(index+2), width, 0);
                        	}
                        } else {
                            move(index-1, -width, 0);
                        }
                        
                        if( options.isRTL ){
                        	move(index, slidePos[index]+width, speed);
                            move(circle(index+1), slidePos[circle(index+1)]+width, speed);
                        }else{
                        	move(index, slidePos[index]-width, speed);
                            move(circle(index+1), slidePos[circle(index+1)]-width, speed);
                        } 
                        index = circle(index+1);
                    } else {
                        if (options.continuous) { // we need to get the next in this direction in place
                        	if( options.isRTL ){
                        		move(circle(index+1), -width, 0);
                                move(circle(index-2), width, 0);
                        	}else{
                        		move(circle(index+1), width, 0);
                                move(circle(index-2), -width, 0);
                        	}
                        } else {
                            move(index+1, width, 0);
                        }
                    	if( options.isRTL ){
                    		move(index, slidePos[index]-width, speed);
                            move(circle(index-1), slidePos[circle(index-1)]-width, speed);
                    	}else{
                    		move(index, slidePos[index]+width, speed);
                            move(circle(index-1), slidePos[circle(index-1)]+width, speed);
                    	}
                        
                        index = circle(index-1);
                    }

                    options.callback && options.callback(index, slides[index]);
                } else {
                    if (options.continuous) {
                    	if( options.isRTL ){
                    		move(circle(index-1), width, speed);
                            move(index, 0, speed);
                            move(circle(index+1), -width, speed);
                    	} else{
                    		move(circle(index-1), -width, speed);
                            move(index, 0, speed);
                            move(circle(index+1), width, speed);
                    	}
                        
                    } else {
                        move(index-1, -width, speed);
                        move(index, 0, speed);
                        move(index+1, width, speed);
                    }
                }
            }
            // kill touchmove and touchend event listeners until touchstart called again
            element.removeEventListener('touchmove', events, false);
            element.removeEventListener('touchend', events, false);
        },

        transitionEnd: function(event) {
            if (parseInt(event.target.getAttribute('data-index'), 10) == index) {
                if (delay){
                    begin();
                }
                options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);
            }
        }};

    // trigger setup
    setup();

    // START: RGA CODE
    // Allow recalc of slide dimensions on orientationchange
    // if (Modernizr.touch) {

    // 	$( window ).on( 'orientationchange', function(e) {

    // 		//console.log( 'swipe.orientationchange()' );

    // 		var curIndex = index;

    // 		// create an array to store current positions of each slide
    // 		slidePos = new Array(slides.length);

    // 		// determine width of each slide
    // 		width = container.getBoundingClientRect().width || container.offsetWidth;
    // 		element.style.width = (slides.length * width) + 'px';

    // 		// stack elements
    // 		var pos = slides.length;
    // 		while(pos--) {
    // 			var slide = slides[pos];
    // 			slide.style.width = width + 'px';
    // 			slide.setAttribute('data-index', pos);

    // 			if (browser.transitions) {
    // 				slide.style.left = (pos * -width) + 'px';
    // 				move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
    // 			}
    // 		}

    // 		// reposition elements before and after index
    // 		if (options.continuous && browser.transitions) {
    // 			move(circle(index-1), -width, 0);
    // 			move(circle(index+1), width, 0);
    // 		}

    // 		if (!browser.transitions) element.style.left = (index * -width) + 'px';

    // 	});

    // }



    // END: RGA CODE

    // start auto slideshow if applicable
    if (delay){
        begin();
    }

    // add event listeners
    if (browser.addEventListener) {
        // set touchstart event on element
        if (browser.touch){
            element.addEventListener('touchstart', events, false);
        }

        if (browser.transitions) {
            element.addEventListener('webkitTransitionEnd', events, false);
            element.addEventListener('msTransitionEnd', events, false);
            element.addEventListener('oTransitionEnd', events, false);
            element.addEventListener('otransitionend', events, false);
            element.addEventListener('transitionend', events, false);
        }

        // set resize event on window
        //window.addEventListener('resize', events, false);

        //RGA CUSTOM CODE
        eventBridge.on(eventDictionary.global.RESIZE, events.handleEvent);
        //END RGA CUSTOM CODE
    } else {
        //window.onresize = function () { setup() }; // to play nice with old IE
        //
        //RGA CUSTOM CODE
        eventBridge.on(eventDictionary.global.RESIZE, setup);
        //END RGA CUSTOM CODE
    }

    // expose the Swipe API

    var self = {
		isContinuous:function() { 
			return options.continuous;
		},
		getLiLen: function() {
			return realSlideLen;
		},
        setup: function(isDomRefresh) {
            setup(isDomRefresh);
        },

        slide: function(to, speed) {
            stop(); // cancel slideshow
            //console.log("slide to : " + to);
            slide(to, speed);
        },

        prev: function() {
            stop(); // cancel slideshow
            prev();
        },

        next: function() {
            stop(); // cancel slideshow
            next();
        },

        getPos: function() {
            if (index >= this.getNumSlides()) {
                index -= this.getNumSlides();
            }

            return index; // return current index position
        },

        getNumSlides: function() {
            return length; // return total number of slides
        },

        // cancels slideshow
        stop: function() {
            stop();
        },

        // START: RGA CODE
        /**
         * Recalculate swipe dimensions.
         *
         * @method reCalcDimensions
         **/
        reCalcDimensions: function() {

            // create an array to store current positions of each slide
            slidePos = new Array(slides.length);

            // determine width of each slide
            width = container.getBoundingClientRect().width || container.offsetWidth;
            element.style.width = (slides.length * width) + 'px';

            // stack elements
            var pos = slides.length;
            while(pos--) {
                var slide = slides[pos];
                slide.style.width = width + 'px';
                slide.setAttribute('data-index', pos);

                if (browser.transitions) {
                    slide.style.left = (pos * -width) + 'px';
                    move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
                }
            }

            // reposition elements before and after index
            if (options.continuous && browser.transitions) {
                move(circle(index-1), -width, 0);
                move(circle(index+1), width, 0);
            }

            if (!browser.transitions){
                element.style.left = (index * -width) + 'px';
            }

        },
        // END: RGA CODE

        resurrect: function () {

            // start auto slideshow if applicable
            if (delay){
                begin();
            }

            element.style.width = (slides.length * width) + 'px';
            if (!browser.transitions){
                element.style.left = (index * -width) + 'px';
            }

            var pos = slides.length;

            while(pos--) {
                var slide = slides[pos];
                slide.style.width = width + 'px';
                slide.setAttribute('data-index', pos);

                if (browser.transitions) {
                    slide.style.left = (pos * -width) + 'px';
                    move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
                }
            }

            var $el = $(element);
            var carouselDiv = $el.closest('.ss-carousel');
            carouselDiv.removeClass('killed');

            // add event listeners
            if (browser.addEventListener) {
                // set touchstart event on element
                if (browser.touch){
                    element.addEventListener('touchstart', events, false);
                }

                if (browser.transitions) {
                    element.addEventListener('webkitTransitionEnd', events, false);
                    element.addEventListener('msTransitionEnd', events, false);
                    element.addEventListener('oTransitionEnd', events, false);
                    element.addEventListener('otransitionend', events, false);
                    element.addEventListener('transitionend', events, false);
                }

                // set resize event on window
                //window.addEventListener('resize', events, false);
                //
                //RGA CUSTOM CODE
                eventBridge.on(eventDictionary.global.RESIZE, events.handleEvent);
                //END RGA CUSTOM CODE
            } else {
                //window.onresize = function () { setup() }; // to play nice with old IE
                //RGA CUSTOM CODE
                eventBridge.on(eventDictionary.global.RESIZE, setup);
                //END RGA CUSTOM CODE
            }
        },

        kill: function() {
            stop(); // cancel slideshow

            // reset element
            element.style.width = 'auto';
            element.style.left = 0;


            var $el = $(element);
            var carouselDiv = $el.closest('.ss-carousel');
            carouselDiv.addClass('killed');


            // reset slides
            var pos = slides.length;
            //console.log(213213);
            while(pos--) {
                var slide = slides[pos];
                slide.style.width = '100%';
                slide.style.left = 0;

                if (browser.transitions){
                    translate(pos, 0, 0);
                }
            }

            // removed event listeners
            if (browser.addEventListener) {
                // remove current event listeners
                element.removeEventListener('touchstart', events, false);
                element.removeEventListener('webkitTransitionEnd', events, false);
                element.removeEventListener('msTransitionEnd', events, false);
                element.removeEventListener('oTransitionEnd', events, false);
                element.removeEventListener('otransitionend', events, false);
                element.removeEventListener('transitionend', events, false);
                //window.removeEventListener('resize', events, false);

                //RGA CUSTOM CODE
                eventBridge.off(eventDictionary.global.RESIZE, events.handleEvent);
                //END RGA CUSTOM CODE
            } else {
                //window.onresize = null;

                //RGA CUSTOM CODE
                eventBridge.off(eventDictionary.global.RESIZE, setup);
                //END RGA CUSTOM CODE
            }
        }
    };
    return self;
}

if ( window.jQuery || window.Zepto ) {
    (function($) {
        $.fn.Swipe = function(params) {
            return this.each(function() {
                $(this).data('Swipe', new Swipe($(this)[0], params));
            });
        };
    })( window.jQuery || window.Zepto );
}
/* END FILE */
var ss = $;

//disable console when console does not exist
(function() {
    if (!window.console) {
        window.console = {};
    }
    // union of Chrome, FF, IE, and Safari console methods
    var m = [
        'log', 'info', 'warn', 'error', 'debug', 'trace', 'dir', 'group',
        'groupCollapsed', 'groupEnd', 'time', 'timeEnd', 'profile', 'profileEnd',
        'dirxml', 'assert', 'count', 'markTimeline', 'timeStamp', 'clear'
    ];
    // define undefined methods as noops to prevent errors
    var blankFunction = function(){};
    for (var i = 0; i < m.length; i++) {
        if (!window.console[m[i]]) {
            window.console[m[i]] = blankFunction;
        }    
    } 
})();

(function ($) {
    /* global window, console, document, setTimeout, clearTimeout, matchMedia, navigator, Modernizr, alert, requestAnimationFrame */

    $( document ).ajaxError( function( event, jqxhr, settings, exception ) {
        if( jqxhr.responseText ) {
            try {
                var resData = JSON.parse( jqxhr.responseText );
                if( resData && resData.jsonData && resData.jsonData.description ) {
                    location.href = resData.jsonData.description;
                }
            }
            catch( e ) {

            }
        }
    });

    /**
	Main object which lives on every page.  This object will handle the creation of other necessary objects for page functionality. 
		@class $.Main
		@constructor
		**/
    ss.Main = function () {

        var compareButtonController;

        // The appropriate page object.
        var pageObject;

        // DeeplinkManager object. NOTE: Reference code only.
        //var deepLinkManager;
        var accessibilityManager;
        var forms;

        // var backgroundScrollfix
        var backgroundScrollfix;

        /** 
			Init function will check for specific body classes and create the necessary page object.
			@function init
			**/
        function init() {

            //deepLinkManager = new ss.DeepLinkManager();
            ss.accessibilityManager = new ss.AccessibilityManager();
            backgroundScrollfix = new ss.backgroundScrollfix();

            ss.scrollWrapper = $(window);
            ss.htmlBody = $('html, body');

            //Stores the viewport metrics
            ss.metrics = ss.Detect();
            if (ss.metrics.isIE8() === 8 || ss.metrics.device === 'desktop') {
                ss.scrollWrapper = $('body');
            }
            
            try{
            	if( SITE_CD != "cn" ) ss.YoutubePlayer.init();
            }catch(e ){
            	//console.log( "error : 로컬에선 SITE_CD 접근할 수 없음.");
            }
            
            
            ss.CompareHeight();

            Modernizr.addTest('classList', function(){
                if( typeof document.body.classList === 'undefined'){
                    return false;
                }
                return true;
            });


            forms = new ss.Forms();
            forms.init();

            ss.clickEvent = (navigator && navigator.platform.substring(0, 3) === 'Win' && Modernizr.touch) ? 'click' : 'fastclick';

            // Initialzation of the carousel, anything with ss-carousel creates a carousel object.
            $('.ss-carousel').each(function (index, item) {
                var c = $(item),
                    args = {
                        curr: c.data('curr'),
                        rotate: c.data('rotate'),
                        speed: c.data('speed')
                    }
                	if( !args.speed ){
                		args.speed = ( !ss.metrics.isMobile() ) ? 300 : 50; 
                	}
                    carousel = new ss.Carousel(c, args);
                item.binder = carousel;

                carousel.init();
            });

			$('.ss-compare-button:not(.binded)').each(function (i) {
				$(this).addClass('binded');
                var compareButton = new ss.CompareButton({
                    container: $(this)
                });
            });

            $('.ss-similar-items').each(function (i) {
                new ss.SimilarItems({
                    container: $(this)
                });
            });

            $('body').on('focus', '.accessibility-reference', function () {
                $('#' + $(this).data('ref')).focus();
            });

            //Instore handling
            if ($('body').hasClass('instore')) {
                $('a[href="navigation-showsearch"]').on('click', function (ev) {
                    ev.preventDefault();
                    eventBridge.trigger(jQuery.Event(eventDictionary.navigation.NAVIGATION_SHOWSEARCH));
                });

                $('body').on('focus', '.animate-placeholder', function () {
                    $(this).addClass('active');
                }).on('blur', '.animate-placeholder', function () {
                    $(this).removeClass('active');
                });
            }

            // TODO MOVE TO STYLEGUIDE JS
            // $('.tabs a').on('click', function() {
            // 	new ss.Tabs($(this), $(this).parents('ul').data('contents'), test).init();
            // });

            // Inits the responsive images and the detect object
            window.InstResponsive = new ss.ResponsiveImages();
			window.InstResponsive.init();

            new ss.PopAlign().init();
            /*
            (function (){
                if(ss.metrics.isIE8() === 8 && $.cookies.get('ie8alert') !== true){
                    //$(".layer_popup").show();
                    var ie8alert = $('#ie8alert'), ie8PopAlign = ie8alert.find('.popAlign'), closeBtn = ie8PopAlign.find('.close-button'),  btn = ie8PopAlign.find('.button');
                    if(ie8PopAlign.length){
                        ie8alert.show();
                        ie8PopAlign[0].popAlign();
                        $('body').append('<div class="lightbox-skrim"></div>');
                        btn.on('click', function (e){
                            closePopup();
                            var date = new Date();
                            date.setTime(date.getTime() + (7*24*60*60*1000)); // 일주일
                            $.cookies.set('ie8alert','true', {expiresAt: date});
                        });
                        closeBtn.on('click', function (e){
                            closePopup();
                        });

                        function closePopup(){
                            $('.lightbox-skrim').remove();
                            ie8alert.hide();
                        }
                    }
                }
            })();
             */
            /*
            $('input').each(function (){
                if($(this).attr('placeholder')) ss.inputValue($(this), "");
            });
            */

            $('.ss-benefit').each(function () {
                new ss.Benefit({
                    container: $(this)
                });
            });

            $('.ss-a-closer-look').each(function () {
                new ss.ACloserLook({
                    container: $(this)
                });
            });

            try{
                Ts.onComplete(function (res){
                    var metrics = ss.Detect();
                    eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), metrics);
                    eventBridge.trigger(jQuery.Event(eventDictionary.global.SCROLL), metrics);
                });
            }catch(e){

            }

            bindEvents();
            if(!$('.ss-carousel').first().hasClass('kv_area')) $('.ss-carousel').first().addClass('kv_area');

        }

        /**
		@function bindEvents
		Bind events to elements on home page
		**/
        function bindEvents() {
            // Initialization of the custom toggle.
            function toggle(toggler) {
                var $toggler = $(toggler),
                    args = {
                        content: $toggler.data('content'),
                        afterText: $toggler.data('after-text'),
                        currText: $toggler.data('text'),
                        autoScroll: $toggler.data('autoscroll')
                    },

                    toggleView = new ss.Toggle($toggler, args);

				$($('._bind-init2click').attr('data-content')).find('[data-autoscroll="true"]').addClass('_protectScrollOnce');
				$('._bind-init2click').addClass('_protectScrollOnce');

                toggleView.action();
            }

            $('.toggle').on('click', function (e) {
                toggle(this);
            });

            var currentScreenSize = {
                width: 0,
                height: 0
            };
            //window.thelogger = $('<div></div>');
            //thelogger.css({
            //  'position':'fixed',
            //  'top':0,
            //  'left':0,
            //  'z-index':4000,
            //  'width':300,
            //  'min-height':100,
            //  'background-color':'red',
            //  'color':'black'
            //});

            //$('body').append(thelogger);

            /**
		  Function to throttle speed of events

		  @function throttle
		  **/
            var throttle = (function () {
                return function (fn, delay) {
                    delay || (delay = 100);
                    var last = (function () {
                        return +new Date();
                    })(),
                        timeoutId = null;

                    return function () {
                        var args = arguments;
                        if (timeoutId) {
                            clearTimeout(timeoutId);
                            timeoutId = null;
                        }

                        var now = (function () {
                            return +new Date();
                        })();
                        //thelogger.html(thelogger.html() + 'throt, ');
                        if (now - last > delay) {
                            fn.apply(this, args);
                            last = now;
                        } else {
                            timeoutId = setTimeout(function () {
                                //thelogger.html(thelogger.html() + 'timeout, ');
                                fn.apply(this, args);
                            }, delay);
                        }
                    };
                };
            })();


            //var startObserving = function() {
            //    var timer = null,
            //        interval = 20,
            //        metrics = ss.Detect(),
            //        currentHeight = metrics.height,
            //        currentWidth = metrics.width,
            //        currentScroll = metrics.scrollTop;

            //    var start = function () {
            //        if (!timer) {
            //            timer = setTimeout(function theTimeout() {
            //                metrics = ss.Detect();
            //                var newH = metrics.height,
            //                    newW = metrics.width,
            //                    newScroll = metrics.scrollTop;
            //                
            //              //console.log(currentScroll);
            //              //console.log(newScroll);
            //
            //                if (currentHeight !== newH || currentWidth !== newW) {
            //                  console.log('resize');
            //                  eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), metrics);
            //                }
            //                if (currentScroll !== newScroll) {
            //                  console.log('scroll');
            //                  eventBridge.trigger(jQuery.Event(eventDictionary.global.SCROLL), metrics);
            //                }
            //                currentScroll = newScroll;
            //                currentHeight = newH;
            //                currentWidth = newW;
            //                timer = setTimeout(theTimeout, interval)
            //            }, interval)
            //        }
            //    };
            //    //var stop = function () {
            //    //    $timeout.cancel(timer);
            //    //    timer = null
            //    //};

            //    start();
            //};

            //startObserving();


            var ticking = false,
                fireScroll = false,
                fireResize = false;

            function requestTick(ev) {
                //console.log(ticking, fireScroll, fireResize);
                if (!ticking) {
                    window.webkitRequestAnimationFrame(function () {
                        if (fireScroll) {
                            eventBridge.trigger(jQuery.Event(eventDictionary.global.SCROLL), ss.metrics);
                            fireScroll = false;
                        }
                        if (fireResize) {
                            eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), ss.metrics);
                            fireResize = false;
                        }

                        ticking = false;
                    });
                    ticking = true;
                }
            }

            $(window).on('resize', throttle(function (e) {
                // Updates the viewport metrics
                var metrics = ss.Detect();

                if (currentScreenSize.width !== metrics.width || currentScreenSize.height !== metrics.height) {
                    //thelogger.html(thelogger.html() + 'resize, ');
                    // Dispatch global resize event
                    currentScreenSize.width = metrics.width;
                    currentScreenSize.height = metrics.height;
                    fireResize = true;
                    if (typeof window.webkitRequestAnimationFrame !== 'undefined') {
                        requestTick();
                    } else {
						var ev = jQuery.Event(eventDictionary.global.RESIZE);
                        /*
                        if(e.originalEvent) e.originalEvent.originalEvent = {};
                        else{
                            e.originalEvent = {};
                            e.originalEvent.originalEvent = {};
                        }
                        e.originalEvent.originalEvent = {}; //fix for ie < 9
                        */
						e.originalEvent = {}; //modified adnstyle 140224 gnustory
   			 			ev.originalEvent = e;
                        eventBridge.trigger(ev, metrics);
                    }
                }
                if(!metrics.isIE8()) e.stopImmediatePropagation();

            }, 250));


            var enableTimer = 0;

            $(window).on('scroll', throttle(function (e) {
                //thelogger.html(thelogger.html() + 'scroll, ');
                // Updates the viewport metrics
                var metrics = ss.Detect();

                fireScroll = true;
                if (typeof window.webkitRequestAnimationFrame !== 'undefined') {
                    requestTick();
                } else {
                    eventBridge.trigger(jQuery.Event(eventDictionary.global.SCROLL), metrics);
                }

                /*
                 * Listen for a scroll and use that to remove
                 * the possibility of hover effects
                 * per http://www.html5rocks.com/en/tutorials/speed/unnecessary-paints/
                 */
                clearTimeout(enableTimer);
                removeHoverClass();

                // enable after 1 second, choose your own value here!
                enableTimer = setTimeout(addHoverClass, 1000);

                // Dispatch global scroll event
                //eventBridge.trigger(jQuery.Event(eventDictionary.global.SCROLL), metrics);
            }, 250));



            /**
             * Removes the hover class from the body. Hover styles
             * are reliant on this class being present
             */
            function removeHoverClass() {
                if ( Modernizr.classlist ) {
                    document.body.classList.remove('hover');
                }
            }

            /**
             * Adds the hover class to the body. Hover styles
             * are reliant on this class being present
             */
            function addHoverClass() {
                //console.log('adding hover back');
                if ( Modernizr.classlist ) {
                    document.body.classList.add('hover');
                }              
            }


            //Detect orientation changes
            //commenting this out now, as it crashes Safari.  Changed popovers to use resize event
            //if (typeof matchMedia !== 'undefined') {
            //  var orientationMatch = matchMedia('(orientation: portrait)'),
            //      currentOrientation = orientationMatch ? 'portrait' : 'landscape';
            //  var orientationHandler = function(matchList) {
            //      var oldOrientation = currentOrientation;
            //      if (matchList.matches) {
            //        currentOrientation = 'portrait';
            //      } else {
            //        currentOrientation = 'landscape';
            //      }

            //      if (oldOrientation !== currentOrientation) {
            //        eventBridge.trigger(jQuery.Event(eventDictionary.global.ROTATE));
            //      }

            //  };
            //   
            //  orientationMatch.addListener(orientationHandler);
            //  orientationHandler(orientationMatch);
            //}


            new ss.Expander();

            $('.ss_samsung').delegate('#sign_wrap .sign-inner-wrap .popup_cont > .chk', 'keypress', function (e){
                if (e.which === 32) {
                    $(this).find('input').trigger('click');
                    return false;
                }
            });

        }


        //function throttle(fn, threshold, scope) {
        //	threshold || (threshold = 150);
        //		
        //	var deferTimer = null;

        //	return function() {
        //		var context = scope || this,
        //		args = arguments;

        //    thelogger.html(thelogger.html() + deferTimer + ', ');
        //		if(!deferTimer) {
        //			deferTimer = setTimeout(function() {
        //          thelogger.html(thelogger.html() + 'execute, ');
        //					fn.apply(context, args);
        //          clearTimeout(deferTimer);
        //          deferTimer = null;
        //			}, threshold);
        //		}
        //	};
        //}

        init();
    };

}(jQuery));

var eventBridge;
/* Central Location for internal events */
var eventDictionary = {
    global: {
        RESIZE: 'resize',
        ROTATE: 'rotate',
        SCROLL: 'scroll'
    },
    dealerlocator: {
        DEALERLOCATOR_ITEM_CLICKED: 'listitemclicked',
        GEOLOCATION_SUCCESS: 'geolocationsuccess',
        STORE_INFO_DATALOADED: 'storeinfodataloaded'
    },
    navigation: {
        NAVIGATION_OPEN: 'navigation_open',
        NAVIGATION_CLOSE: 'navigation_close',
        NAVIGATION_HIDE: 'navigation_hide',
        NAVIGATION_SHOW: 'navigation_show',
        NAVIGATION_HIDESCROLLBARS: 'navigation_hidescrollbars',
        NAVIGATION_SHOWSCROLLBARS: 'navigation_showscrollbars',
        NAVIGATION_SHOWSEARCH: 'navigation_showsearch'
    },
    carousel: {
        CAROUSEL_SWIPE_KILL: 'carousel_swipe_kill',
        CAROUSEL_SWIPE_RESURRECT: 'carousel_swipe_resurrect'
    },
    comparison: {
        PRODUCT_COMPARISON_LOADED: 'productcomparisonloaded',
        PRODUCT_LIST_LOADED: 'productlistloaded'
    },
    dom: {
        DOM_REFRESH: 'dom_refresh'
    },
    compareButton: {
        EVENT_COMPARISON_ADDED: 'eventcomparisonadded',
        EVENT_COMPARISON_REMOVED: 'eventcomparisonremoved'
    },
    pdpStandard: {
        EVENT_HERO_SHOW: 'eventheroshow',
        EVENT_GALLERY_SHOW: 'eventgalleryshow',
        EVENT_SAMPLEIMAGES_SHOW: 'eventsampleimagesshow',
        EVENT_THREESIXTY_SHOW: 'eventthreesixtyshow',
        EVENT_THREESIXTY_PAUSE: 'eventthreesixtypause'
    },
    videoPlayer: {
        EVENT_HIDE_VIDEO: 'eventvideohide',
        EVENT_SHOW_VIDEO: 'eventvideoshow',
        EVENT_PAUSE_VIDEO: 'eventpausevideo',
        EVENT_UNPAUSE_VIDEO: 'eventunpausevideo'
    },
    popover: {
        EVENT_POPOVER_SHOW: 'eventpopovershow',
        EVENT_POPOVER_HIDE: 'eventpopoverhide'
    },
    location: {
        REQUEST_GEOLOCATION: 'request_location',
        REQUEST_STORES: 'request_stores',
        LOCATION_FOUND: 'location_found',
        LOCATION_NOT_FOUND: 'location_not_found',
        GEOLOCATION_RESOLVED: 'latlng_found',
        STORES_FOUND: 'stores_found',
        STORES_NOT_FOUND: 'stores_not_found'
    },
    autocomplete: {
        REQUEST_AUTOCOMPLETE: 'request_autocomplete',
        AUTOCOMPLETE_RESULT: 'autocomplete_result',
        AUTOCOMPLETE_ERROR: 'autocomplete_error',
        AUTOCOMPLETE_HIDE: 'autocomplete_hide'
    },
    bodyscroll: {
        SCROLL_OFF: 'scroll_off',
        SCROLL_ON: 'scroll_on'
    }
};

$(function () {
    /* Element for firing events through */
    eventBridge = $('<div/>');

    var main = new ss.Main();
});
/* END FILE */
var ss = $;
/** 
Page object for the Secondary Navigation.

@module SecNavigation
@main SecNavigation
**/
/*global Modernizr */
/*global window */
/*global document */
/*global history */
(function ($) {
    /**
    @class $.SecNavigation
    @constructor
    
    **/ 
    ss.SecNavigation = function () {
        
        var $nav = $('#sec-nav'),
            options = {};

        /**
        @function init
        Initialization of functions
        **/
        function init(initOptions) {
            options.title = initOptions.title || '';
            options.htmlTitle = initOptions.htmlTitle || false;
            options.actions = initOptions.actions || [];
            options.backButton = initOptions.backButton || false;
            options.backTitle = initOptions.backTitle || 'Back';
            options.backAction = initOptions.backAction || function(ev) {
                ev.preventDefault();
                history.back();
            };

            $nav.find('.nav-button.back')
                .on('click', options.backAction)
                .toggle(options.backButton);
            $nav.find('.nav-button.back span.title')
                .text(options.backTitle)
                .attr('aria-label', 'Back to ' + options.backTitle);

            if (options.htmlTitle) {
                $nav.find('.titleContainer .title').html(options.title);
            } else {
                $nav.find('.titleContainer .title').text(options.title);
            }

            var $actions = $nav.find('.actions.right');
            $.each(options.actions, function(i, e) {
                var title = e.title ? '<span class="title">' + e.title + '</span>' : '';
                var callback = e.callback || function(e) {e.preventDefault();};
                var actionIcon = e.iconSrc ? '<img src="' + e.iconSrc + '" class="icon" aria-hidden="true" />' : '<span class="icon ' + e.iconClass + '"></span>';

                var $action = $('<li/>')
                    .attr('id', e.id)
                    .html('<a href="#" alt="' + (e.title || '') + '" class="nav-button">' + actionIcon + title + '</a>')
                    .on('click', callback);
                $actions.append($action);
            });

            $nav.removeClass('hide');
        }

        function setTitle(newTitle) {
            var $title = $nav.find('.titleContainer .title');
            if (options.htmlTitle) {
                $title.html(newTitle);
            } else {
                $title.text(newTitle);
            }
        }

        return {init: init, setTitle: setTitle};
    };
} (jQuery));
/* END FILE */
var ss = $;
(function ($) {
	/* global eventBridge,eventDictionary,navigator,Modernizr,console */
    
    /**
    Autocomplete Service Wrapper
    @class $.AutoCompleteService
    @constructor
	
	@property {String} url - json url for autocomplete.
    **/
    ss.AutoCompleteService = function (url, map_param) {
		var pubMap = map_param || {},
			ajaxStatus;
		
		/** 
        @function init
        Enables cross domain url and adds event to trigger autocomplete.
        **/
        function init() {
            $.support.cors = true;
            eventBridge.on(eventDictionary.autocomplete.REQUEST_AUTOCOMPLETE, getAutocomplete);
        }
		
		/** 
        @function getAutocomplete
        Makes an Ajax call to the url specified.

        **/
        function getAutocomplete(){
            /* @SDS gets autocomplete from service should get handed data.string */
			if ( pubMap.isRun ) {
				if ( ajaxStatus && (ajaxStatus.readyState != 4) ) {
					ajaxStatus.abort();
				}

				var postMap = $.extend(true, {}, pubMap);
				delete postMap.isRun;

				if ( !!pubMap.jsonp && (pubMap.jsonp.length > 0) ) {
					//pubMap.callback = '?';	

					ajaxStatus = $.ajax({
						url: url,
						type: 'get',
						data: postMap,
						dataType: 'jsonp',
						jsonpCallback:postMap.jsonp,
						success: function(data) {
							var genData = { message : data };
							handleAutocomplete(genData);
						},
						error: function() {
						}
					});
				}
				else {
					ajaxStatus = $.ajax({
						url: url,
						type: 'get',
						cache : true,
						data: postMap,
						dataType: 'jsonp',
						success: function(data) {
							var genData = { message : data };
							handleAutocomplete(genData);
						},
						error: function() {
						}
					});
				}
				/*
	            $.getJSON(url,pubMap).then(handleAutocomplete, handleAutocompleteError);            
				*/
				pubMap.isRun = false;
			}
        }

		/** 
        @function handleAutocomplete
		Triggers the autocomplete result event.
		
		@param {Object} data - data being returned.
        **/
        function handleAutocomplete(data, e){
            eventBridge.trigger(jQuery.Event(eventDictionary.autocomplete.AUTOCOMPLETE_RESULT), data);
        }
		
		/** 
        @function handleAutocompleteError
        Triggers the autocomplete error event.
        **/
        function handleAutocompleteError(){
            eventBridge.trigger(jQuery.Event(eventDictionary.autocomplete.AUTOCOMPLETE_ERROR));
        }

        init();

		return pubMap;
    };
} (jQuery));
//--NotUse-- (function ($) {
//--NotUse-- 	/* global eventBridge,eventDictionary,navigator,Modernizr,console */
//--NotUse--     
//--NotUse--     /**
//--NotUse--     Autocomplete Service Wrapper
//--NotUse--     @class $.AutoCompleteService
//--NotUse--     @constructor
//--NotUse-- 	
//--NotUse-- 	@property {String} url - json url for autocomplete.
//--NotUse--     @property {String} id - the uppercase id of the autocomplete input.
//--NotUse--     **/
//--NotUse--     ss.AutoCompleteService = function (url, id) {
//--NotUse-- 
//--NotUse--         /**
//--NotUse--         Names the new events that are going to be unique to this autocomplete instance.
//--NotUse--         **/
//--NotUse--         var request = 'REQUEST_AUTOCOMPLETE_'+ id,
//--NotUse--             result = 'AUTOCOMPLETE_RESULT_'+ id,
//--NotUse--             error = 'AUTOCOMPLETE_ERROR_'+ id,
//--NotUse--             hide = 'AUTOCOMPLETE_HIDE_'+ id;
//--NotUse-- 		
//--NotUse-- 		/** 
//--NotUse--         @function init
//--NotUse--         Enables cross domain url and adds event to trigger autocomplete.
//--NotUse--         **/
//--NotUse--         function init() {
//--NotUse--             $.support.cors = true;
//--NotUse--             
//--NotUse--             registerDictionary();
//--NotUse-- 
//--NotUse--             eventBridge.on(eventDictionary.autocomplete[request], getAutocomplete);
//--NotUse--         }
//--NotUse-- 		
//--NotUse-- 		/** 
//--NotUse--         @function getAutocomplete
//--NotUse--         Makes an Ajax call to the url specified.
//--NotUse-- 
//--NotUse--         **/
//--NotUse--         function getAutocomplete(){
//--NotUse--             /* @SDS gets autocomplete from service should get handed data.string */
//--NotUse--             $.getJSON(url).then(handleAutocomplete, handleAutocompleteError);            
//--NotUse--         }
//--NotUse-- 
//--NotUse-- 		/** 
//--NotUse--         @function handleAutocomplete
//--NotUse-- 		Triggers the autocomplete result event.
//--NotUse-- 		
//--NotUse-- 		@param {Object} data - data being returned.
//--NotUse--         **/
//--NotUse--         function handleAutocomplete(data, e){
//--NotUse--             eventBridge.trigger(jQuery.Event(eventDictionary.autocomplete[result]), data);
//--NotUse--         }
//--NotUse-- 		
//--NotUse-- 		/** 
//--NotUse--         @function handleAutocompleteError
//--NotUse--         Triggers the autocomplete error event.
//--NotUse--         **/
//--NotUse--         function handleAutocompleteError(){
//--NotUse--             eventBridge.trigger(jQuery.Event(eventDictionary.autocomplete[error]));
//--NotUse--         }
//--NotUse-- 
//--NotUse--         /** 
//--NotUse--         @function registerDictionary
//--NotUse--         Registers the new events in the EventDictionary
//--NotUse--         **/
//--NotUse--         function registerDictionary(){
//--NotUse--             
//--NotUse--             var jsonString = '{"' + request + '":"' + request.toLowerCase() + '","' +
//--NotUse--                 result + '":"' + result.toLowerCase() + '","' +
//--NotUse--                 error + '":"' + error.toLowerCase() + '","' +
//--NotUse--                 hide + '":"' + hide.toLowerCase() +'"}';
//--NotUse-- 
//--NotUse--             // Adds the events to the dictionary under the autocomplete section
//--NotUse--             eventDictionary.autocomplete = $.extend(eventDictionary.autocomplete, $.parseJSON(jsonString));
//--NotUse-- 
//--NotUse--         }
//--NotUse-- 
//--NotUse--         init();
//--NotUse--     };
//--NotUse-- } (jQuery)); 
/* END FILE */
var ss = $;
var globalLayout;


(function ($){
    var winWidth = $(window).width(), real_width, mobile = undefined;

    checkWidth();
    //console.log('winWidth = ' + winWidth + 'real_width = ' + real_width);
    if (winWidth < 480) {
        globalLayout = 'mobile';
    } else if(winWidth < 768) {
        globalLayout = 'mobile-landscape';
    } else if (winWidth < 1024) {
        globalLayout = 'tablet-portrait';
    } else if (winWidth < 1280) {
        globalLayout = 'tablet-landscape';
    } else {
        globalLayout = 'desktop';
    }

    function isAndroid() {
        return navigator.userAgent.match(/Android/i);
    }
    function isBlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i);
    }
    function isiOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }
    function isOpera() {
        return navigator.userAgent.match(/Opera Mini/i);
    }
    function isWindows() {
        return navigator.userAgent.match(/IEMobile/i);
    }
    function isMobile() {
        if (mobile === undefined){
            mobile = (isAndroid() || isBlackBerry() || isiOS() || isOpera() || isWindows());
        }
        return mobile;
    }

    function checkWidth(){
        //console.log(isMobile());
        if (isMobile() !== null){
            real_width = winWidth;
        } else {
            real_width = window.outerWidth;
        }
        return real_width;
    }
    //console.log('globalLayout = ' + globalLayout);



    ss.kvLoad = function (selector) {
        // ADD ADNStyle
        var dataObj={};
        dataObj['mobile'] = 'mediaMobile', dataObj['mobile-landscape'] = 'mediaMobileLandscape', dataObj['tablet-portrait'] = 'mediaTabletPortrait',
            dataObj['tablet-landscape'] = 'mediaTabletLandscape', dataObj['desktop'] = 'mediaDesktop';

        $(selector).find('.responsive-image').each(function() {
            var $reImg = $(this);
            var device = globalLayout, initDevice = device, cnt=0, data = $reImg.data(), src; //ADD ADNStyle

            while( !data[dataObj[device]] ){
                if(device === 'mobile'){
                    device = 'tablet-portrait';
                    if( !data[dataObj[device]] ){
                        device = 'tablet-landscape';
                    }
                }else if(device === 'mobile-landscape'){
                    device = 'mobile';
                }else if(device === 'tablet-portrait'){
                    device = 'mobile';
                    if( !data[dataObj[device]] ){
                        device = 'tablet-landscape';
                    }
                }else if(device === 'tablet-landscape'){
                    device = 'desktop';
                    if( !data[dataObj[device]] ){
                        device = 'tablet-portrait';
                    }
                }else if(device === 'desktop'){
                    device = 'tablet-landscape';
                    if( !data[dataObj[device]] ){
                        device = 'tablet-portrait';
                    }
                }
                cnt++;
                if(cnt > 5){
                    break;
                }
            }
            // ADD ADNStyle
            var hiddenLoadAttr = $reImg.attr('data-hidden-load');
            var hiddenLoad = (typeof hiddenLoadAttr !== 'undefined' && hiddenLoadAttr === 'false' ? false : true);
            var haltLoad = false;

            if (!hiddenLoad && $reImg.is(':hidden')) {
                haltLoad = true;
            }

            if(!$reImg.hasClass('lazy') && !haltLoad) {
                var media = 'data-media-' + device;//ADD ADNStyle
                src = $reImg.attr(media);//ADD ADNStyle
                if ($reImg.prop('tagName') === 'IMG') {
                    $reImg.attr('src', src); //ADD ADNStyle
                } else {
                    // ADD ADNStyle
                    $reImg.css({
                        'background-image': 'url('+src+')',
                        '-ms-filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='+src+', sizingMethod="scale")'
                    });
                    //ADD ADNStyle
                }
            }
        });
    };




} (jQuery));

(function ($) {
    /* global window, document, Modernizr, console, eventDictionary, eventBridge, setTimeout, navigator, clearTimeout */

    // Device breakpoints
    var breakpoints = {
            mobile: 360,
            mobileLandscape: 640,
            tabletPortrait: 800,
            tabletLandscape: 1280
        },
        lastKeyDown,
        timeout;


    /**
     Autocomplete functionality.
     @class $.AC
     @constructor

     @property {HTMLElement} input - element that has autocomplete set on it.
     @property {Object} args - arguments passed to specify autocomplete paramaters (url, container).
     **/
    /*[ ADNStyle */
    ss.ACGroup = {};
    /*] ADNStyle */
    ss.AC = function (input, args) {

        //Check if the target element exists
        if(input.length === 0){
            return;
        }

        var results = {},
            appended = false,
            $autoComplete = $('.'+args.container),
            $input = $(input),
            allResults,
            inputValue,
            inputId = $input.attr('id'),
            upperID = inputId.toUpperCase(),
            _acListParent, _queryMap,
            _validFn= function(input_elm)
            {
                var result = false;
                try
                {
                    result = args.validFn(input_elm);
                }
                catch( exp )
                {
                    result = false;
                }
                return result;
            },
            customLayout = args.layout || false;

        /**
         @function init
         Initializaiton of functions.
         **/
        function init () {

            if(typeof inputId !== 'undefined'){
                ss.ACGroup[$input.attr('id')] = $input;
                results = {};

                // Initialization Autocomplete service
                /*
                 new ss.AutoCompleteService(args.url, upperID);
                 */
                _queryMap = new ss.AutoCompleteService(args.url, args.params);

                //Adds the autocomplete list component
                $autoComplete.append('<ul class="autocomplete-list" style="display:none" id="autocomplete-'+ inputId +'"></ul>');
                /*[ ADNStyle */
                _acListParent = $autoComplete.find('.autocomplete-list');
                ss.ACGroup[$input.attr('id')] = $input;
                /*] ADNStyle */

                bindEvents();

            } else {
                $.error('An id is needed for the autocomplete input');
                return false;

            }

        }

        /**
         @function bindEvents
         Bind events to elements.
         **/
        function bindEvents() {

            //Handles the clear text button
            $autoComplete.prev().find('.close-ac').on('click mousedown', function (){
                $(this).removeClass('showBtn');
                $input.focus().val('').val();
                hideAutoComplete(false);
            });
            /*[ ADNStyle */
			$input.on('focusout', function(e) {
				if ( !$autoComplete.hasClass('tapped') ) {
					//$autoComplete.hide();
				}
				$autoComplete.removeClass('tapped')
			});

            $input.on('keydown', function (e) {
				if ( e.keyCode == 13 ) {
					$autoComplete.hide();
					$autoComplete.find('.auto-complete-wrap').hide();
					$autoComplete.find('.popular').hide();
					$autoComplete.find('.recently-viewed').hide();
					$autoComplete.find('.autocomplete-list').hide();
				}
				else if ( e.keyCode == 9 ) {
					$autoComplete.addClass('tapped')
				}
                else if ( (e.keyCode == 38) || (e.keyCode == 40) ) {
                    //console.log('keyCode : ' + e.keyCode);
                    var selectedElm = _acListParent.find('.focus-key'),
                        isEventProtect = true,
                        scrollingTo = 0,
                        actScroll = 0,
                        actHeight = 0,
                        overCnt = 0,
                        oLis, activeElm;

                    if ( selectedElm.length === 0 ) {
                        activeElm = _acListParent.find('li a').first();
                    }
                    else {
                        switch(e.keyCode) {
                            case 38:
                                activeElm = selectedElm.parent().prev().find('a');
                                if ( activeElm.length === 0) {
                                    isEventProtect = false;
                                }
                                break;
                            case 40:
                                activeElm = selectedElm.parent().next().find('a');
                                break;
                        }
                    }

                    if ( activeElm.length === 0){
                        activeElm = selectedElm;
                    }else {
                        selectedElm.toggleClass('focus-key');
                        selectedElm.css('color', '');

                        activeElm.css('color', 'orange');
                        activeElm.toggleClass('focus-key');
                        $input.val(activeElm.attr('keyword'));

                        actHeight = activeElm.height();

                        oLis = activeElm.parent().prevAll();
                        oLis.each(function(k,elm){
                            scrollingTo += $(elm).outerHeight(true);

                            if ( (scrollingTo+actHeight) >= _acListParent[0].offsetHeight ) {
                                actScroll += oLis.eq(overCnt).outerHeight(true);
                                overCnt += 1;
                                _acListParent.scrollTop(actScroll);
                            }
							else {
                                _acListParent.scrollTop(0);
							}
                        });
                    }

                    if ( isEventProtect ){
                        e.preventDefault();
                    }
                }
            });
            // Input that needs autocomplete.
            $input.on('keyup', function (e) {
                if ( ((e.keyCode < 37) || (e.keyCode > 40)) && e.keyCode !== 13 ) {
                    var closeBtn = $(this).parent('form').find('.close-ac'),
                        eObj = this;

                    $.each(ss.ACGroup, function(k,o){
                        if ( k != $(eObj).attr('id') ) {
                            ss.ACGroup[k].val(eObj.value);
                        }
                    });

                    if ( _validFn(this) ) {
                        $autoComplete.addClass('on');

                        /*
                         if ( !!results[$(this).val()] ) {
                         allResults = results[$(this).val()];
                         buildHTML(args);
                         }
                         else { */
                        inputValue = this.value;
                        _queryMap.isRun = true;
                        eventBridge.trigger(eventDictionary.autocomplete.REQUEST_AUTOCOMPLETE);
                        /* } */
                        closeBtn.addClass('showBtn');
                    } else {
                        $autoComplete.removeClass('on results-returned no-results-returned');
						$autoComplete.show();
                        $autoComplete.find('.auto-complete-wrap').show();
                        $autoComplete.find('.popular').show();
                        $autoComplete.find('.recently-viewed').show();
                        $autoComplete.find('.autocomplete-list').hide();
                        $autoComplete.find('.autocomplete-list').empty().height(0);
                        closeBtn.removeClass('showBtn');
                    }
                }
            });
            /*] ADNStyle */

            // Handles inputting text in the input field
            /*
             $input.on('keyup', function (ev) {
             if(ev.which !== 9){
             var closeBtn = $(this).parent('form').find('.close-ac');

             if ($.trim($(this).val()) === '') {
             $autoComplete.removeClass('on results-returned no-results-returned');
             $autoComplete.find('.autocomplete-list').empty().height(0);
             closeBtn.removeClass('showBtn');
             } else {
             $autoComplete.addClass('on');

             eventBridge.trigger(eventDictionary.autocomplete['REQUEST_AUTOCOMPLETE_'+upperID]);

             inputValue = $(this).val();
             closeBtn.addClass('showBtn');
             }
             }else{
             if(!ev.shiftKey){
             ev.preventDefault();
             $autoComplete.find(':focusable').first().focus();
             }
             }
             });
             */

            //Closes the autocomplete dropdown when the user clicks outside an autocomplete element
            $('body').on('click', function(ev){
                var target = $(ev.target);
                if(target.hasClass('close-youtube-player')){
                    return;
                }else if(target.hasClass('close-video-player')){
                    return;
                }

                if(!target.hasClass('icon-cart') && !target.parent().hasClass('icon-cart') && $('.ss-nav-main').hasClass('lt2')){
                    var targetParent = target.parent();
                    while(targetParent.length){
                        if(targetParent.hasClass('mini-cart')){
                            break;
                        }
                        targetParent = targetParent.parent();
                    }
                    if(!targetParent.length && ss.metrics.device === 'desktop'){
                        $('.icon-cart').trigger('click');
                    }
                }


                /*else if($(ev.target).hasClass('icon-cart') || $(ev.target).parent().hasClass('icon-cart')){

                 }*/
                if( ($autoComplete.hasClass('on') || $autoComplete.css('display') !== 'none') && /*!$autoComplete.is(':hover')*/ !target.parents('.auto-complete').length){ // 140612 MODIFIED ADNSTYLE
                    eventBridge.trigger(eventDictionary.autocomplete['AUTOCOMPLETE_HIDE']);
                }

            });

            //Accesibility: closes the dropdown when the user tabs outside
            if($autoComplete.parents('.nav')){
                function lastTagDownHandler(ev){
                    if(ev.which === 9 && !ev.shiftKey){
                        eventBridge.trigger(eventDictionary.autocomplete['AUTOCOMPLETE_HIDE']);
                        $autoComplete.hide();
                        ev.preventDefault();
                        $('.nav .searchbox button').focus();
                    }
                }
                $autoComplete.find('.auto-complete-wrap').on('keydown', 'a:last', lastTagDownHandler);
                $autoComplete.find('.autocomplete-list').on('keydown', 'a:last', lastTagDownHandler);
            }


            //Handles submitting the search
            $input.parent('form').submit(function(e) {
                var thisInput = $(this).find('input'),
                    resultsContainer = $(this).next();

                if ($.trim(thisInput.val()) === '') {
                    e.preventDefault();
                    thisInput.focus();
                    resultsContainer.addClass('on no-results-returned');
                    resultsContainer.find('.ac-message').text('We\'re having trouble reading your mind. Please type your search.');
                }
				else {
					$autoComplete.hide();
					$autoComplete.find('.auto-complete-wrap').hide();
					$autoComplete.find('.popular').hide();
					$autoComplete.find('.recently-viewed').hide();
					$autoComplete.find('.autocomplete-list').hide();
				}

                if ( (typeof(args.submitFunc)).toLowerCase() == 'function' ) {
                    if ( args.submitFunc(thisInput, resultsContainer) ){
                        return false;
                    }
                }
            });

            //Registers the handler for the ss.autocomplete service events
            /*
             eventBridge.on(eventDictionary.autocomplete['AUTOCOMPLETE_RESULT_'+upperID], function(e, data) {autoCompleteResult(data);});
             eventBridge.on(eventDictionary.autocomplete['AUTOCOMPLETE_HIDE_'+upperID], function(e) {hideAutoComplete(true);});
             */
            eventBridge.on(eventDictionary.autocomplete['AUTOCOMPLETE_RESULT'], function(e, data) {autoCompleteResult(data);});
            eventBridge.on(eventDictionary.autocomplete['AUTOCOMPLETE_HIDE'], function(e) {hideAutoComplete(true);});
        }

        /**
         @function hideAutoComplete
         Removes the "on" class from the autocomplete.
         **/
        function hideAutoComplete (dontShow) {
            $autoComplete.removeClass('on results-returned no-results-returned');
			$autoComplete.find('.autocomplete-list').hide();
            $autoComplete.find('.autocomplete-list').empty().height(0);
            $autoComplete.hide();

            if ($(window).width() >= 1280) {
                $autoComplete.find('div').hide();
                if (!dontShow){
                    $('#ss_search .item').trigger('click');
                }
            }
        }

        /**
         @function autoCompleteResult
         Data being returned from service call.

         @param {Object} data - data being returned.
         **/
        function autoCompleteResult(data) {
            if(inputValue !== '' && inputValue !== undefined){
                allResults = data;
                /** sample
                 inputValue = inputValue.replace(/([\.\[\]\(\)\+\*\|\?\\\/])/g, '\\$1' );

                 switch(customLayout){

					case 'img':
						allResults = $.grep(data, function(item) {
							return item.txt.search(new RegExp(inputValue, 'ig')) !== -1;
						});
						break;

					default:
						allResults = $.grep(data, function(item) {
							return item.search(new RegExp(inputValue, 'ig')) !== -1;
						});
						break;

				}
                 */
            }else{
                allResults = [];
            }

            results[inputValue] = allResults;
            /*
             buildHTML(args.container);
             */
            buildHTML();
        }

        /**
         @function buildHTML
         Builds the HTML for the autocomplete element.

         @param {String} type (optional) - to specify different functionality.
         **/
        /*
         function buildHTML (type) {

         var inc = 0, total = 0, liHTML;

         $autoComplete.find('.autocomplete-list').empty();

         if (allResults.length === 0) {
         $autoComplete.removeClass('results-returned').addClass('no-results-returned');
         $autoComplete.find('.ac-message').text('Hmm, we couldn\'t find that in our records. Try again?');
         $autoComplete.find('.autocomplete-list').empty().height(0);
         }

         // Builds the <li> elements.
         switch(customLayout){

         case 'img':
         for (var i in allResults) {
         liHTML = '<a href="'+allResults[i].href+'"><div class="link">'+allResults[i].txt+'</div><div class="img-container"><img alt="'+allResults[i].img.alt+'" src="'+allResults[i].img.src+'"></div></a></li>';
         inc++;

         $autoComplete.find('.autocomplete-list').append('<li'+(inc === 1 ? ' class="first">' : '>')+liHTML);
         $autoComplete.addClass('results-returned').removeClass('no-results-returned');
         }
         break;

         default:
         for (var term in allResults) {
         liHTML = '<a href="/uk/category/search.html">'+allResults[term]+'</a></li>';
         inc++;

         $autoComplete.find('.autocomplete-list').append('<li'+(inc === 1 ? ' class="first">' : '>')+liHTML);
         $autoComplete.addClass('results-returned').removeClass('no-results-returned');
         }
         break;

         }


         // Adds up all the heights of each <li> element in autocomplete list.
         $autoComplete.find('.autocomplete-list li').each(function(i, item){
         total+=$(item).outerHeight(true);
         });

         $autoComplete.find('.autocomplete-list').height(total);
         }
         */
        function buildHTML () {
            var total = 0, limitDisp = args.params.dispLen||1000;

            _acListParent.empty();

            if (allResults && allResults.message && (allResults.message.length > 0)) {
                // Builds the <li> elements.
                for (var i=0; i <allResults.message.length; i++) {
                    if ( i < limitDisp ) {
                        _acListParent.append($('<li' + (i === 0 ? ' class="first"' : '') + '></li>').append($('<a href="javascript:void(0);"></a>').text(allResults.message[i]).attr('keyword', allResults.message[i])));
                        $autoComplete.addClass('results-returned').removeClass('no-results-returned');
                    }
                }

                // Adds up all the heights of each <li> element in autocomplete list.
				$autoComplete.find('.autocomplete-list').show();
                $autoComplete.find('.autocomplete-list li').each(function(i, item){
					//console.log(i);
                    total+=$(item).outerHeight(true);
					//console.log($(item).outerHeight(true));
                });

                _acListParent.height(total);
                _acListParent.find('li a').on(ss.E.click, function() {
                    args.clickFunc(this,$autoComplete);
                });
            }
            else {
                $autoComplete.removeClass('results-returned').addClass('no-results-returned');
                $autoComplete.find('.auto-complete').show();
                $autoComplete.find('.ac-message').text('Hmm, we couldn\'t find that in our records. Try again?');
                _acListParent.empty().height(0);
				_acListParent.hide();
            }


        }

        init();
    };

    var $thewindow = $(window),
        $thebodywrapper = null;
    /**
     Returns the device and width of the window
     @class $.Detect
     @constructor
     **/
    ss.Detect = function() {
        //var winWidth = $thewindow.width(),
        var winWidth = $thewindow.width(),
            winHeight = $thewindow.height(),
            wrapperWidth,
            prevLayout,
            layout,
            layoutId,
            mobile,
            real_width,
            aspectRatio = winWidth > winHeight ? 'landscape' : 'portrait',
            oldDevice = (typeof ss.metrics !== 'undefined' ? ss.metrics.device : 'desktop');
        checkWidth();

        /*
         if(isMobile() !== null) winWidth = $thewindow.innerWidth();
         else winWidth = window.outerWidth;
         */
        $thebodywrapper = $thebodywrapper ? $thebodywrapper : $('.body_wrapper');
        // Sets the layout/devices you are viewing based on window width and breakpoints
        if (real_width < 480) {
            layout = 'mobile';
            layoutId = 1;
        } else if(real_width < 768) {
            layout = 'mobile-landscape';
            layoutId = 1;
        } else if (real_width < 1024) {
            layout = 'tablet-portrait';
            layoutId = 2;
        } else if (real_width <= 1280) {
            layout = 'tablet-landscape';
            layoutId = 3;
        } else {
            layout = 'desktop';
            layoutId = 4;
        }

        /* ADD ADNStyle */
        if(ss.metrics){
            prevLayout = ss.metrics.device;
        }else{
            prevLayout = layout;
        }
        /* ADD ADNStyle */

        /**
         @function getMenuWidth()
         setswidth once per resize so we arent checking it 800 times
         */
        function checkWidth(){
            if (isMobile() !== null){
                real_width = $(window).width();
            } else {
                real_width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth;
            }
            /*
             if ($('body').height()===$(window).height()){
             real_width = $(window).width();
             }*/
            //console.log('real_width : ' + real_width + ', winWidth : ' + winWidth + ', window.outerWidth : ' + window.outerWidth + ', $(window).width() : ' + $(window).width());
            return real_width;
        }

        function isIOS() {
            var iOS=/iPhone|iPod|iPad/.test(window.navigator.userAgent);
            if (iOS) {
                $('body.ss_samsung').addClass('ios');
            }
            return (iOS);
        }

        function isIOS7() {
            var iOS7=/(iPad|iPhone);.*CPU.*OS 7_\d/i.test(window.navigator.userAgent);
            return (iOS7);
        }


        function isIE8Less() {
            if(!isIE()){
                return false;
            }

            var IE8 = /MSIE\s([\d.]+)/.test(window.navigator.userAgent),
                version = Number(RegExp.$1);
            if(version < 9) {
                return true;
            }
            return false;
        }

        function isIE8() {
            var IE8 = /MSIE\s([\d.]+)/.test(window.navigator.userAgent),
                version = Number(RegExp.$1);
            if(version === 8) {
                $('body.ss_samsung').addClass('ie8');
                return (version);
            }
        }

        function isIE9() {
            var IE9 = /MSIE\s([\d.]+)/.test(window.navigator.userAgent),
                version = Number(RegExp.$1);
            if(version === 9) {
                $('body.ss_samsung').addClass('ie9');
                return (version);
            }
            return false;
        }

        function isIE () {
            //var isIE = ((navigator.appName === 'Microsoft Internet Explorer') || ((navigator.appName === 'Netscape') && (new RegExp('Trident/.*rv:([0-9]{1,}[\.0-9]{0,})').exec(navigator.userAgent) !== null)));

            var app = navigator.appName,
                reg = new RegExp('Trident/.*rv:([0-9]{1,}[\/.0-9]{0,})'),
                result = false;

            if (app === 'Microsoft Internet Explorer' || (app === 'Netscape' && reg.exec(navigator.userAgent) !== null)) {
                result = true;
            }

            return result;
        }

        function isAndroid() {
            return navigator.userAgent.match(/Android/i);
        }
        function isBlackBerry() {
            return navigator.userAgent.match(/BlackBerry/i);
        }
        function isiOS() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
        function isOpera() {
            return navigator.userAgent.match(/Opera Mini/i);
        }
        function isWindows() {
            return navigator.userAgent.match(/IEMobile/i);
        }
        function isMobile() {
            if (mobile === undefined){
                mobile = (isAndroid() || isBlackBerry() || isiOS() || isOpera() || isWindows());
            }
            return mobile;
        }

        function isSafari() {
            var safari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
            if (safari) {
                $('body.ss_samsung').addClass('safari');
                return (safari);
            }
        }

        function scrollTop() {
            return $thewindow.scrollTop();
        }

        function region() {
            return window.location.pathname.split('/')[1];
        }

        function elemTop(elem) {
            var offset =  elem.offset(),
                extra = 0,
                dockedJumpModule = $('.jump-module.docked');
            //if (ss.metrics.isIE8()===8 || ss.metrics.device === 'desktop') {
            //	return offset.top;
            //}
            if(dockedJumpModule.length > 0) {
                extra += dockedJumpModule.outerHeight();
            }

            //if(ss.metrics.device === 'desktop') {
            //	extra += ss.scrollWrapper.offset().top;
            //}

            //return offset.top + ss.metrics.scrollTop - extra;
            return offset.top - extra;
        }

        var scroll = scrollTop();
        wrapperWidth = $thebodywrapper.width();
        var metrics = {
            deviceChanged: (oldDevice !== layout),
            device: layout,
            prevDevice:prevLayout,
            deviceLayoutId: layoutId,
            wrapperWidth: wrapperWidth,
            width: real_width,
            realWidth: checkWidth,
            height: winHeight,
            aspectRatio:aspectRatio,
            isIOS: isIOS,
            isIOS7: isIOS7,
            isIE8Less: isIE8Less,
            isIE: isIE,
            isIE8: isIE8,
            isIE9: isIE9,
            Android:isAndroid,
            BlackBerry:isBlackBerry,
            iOS:isiOS,
            Opera:isOpera,
            Windows:isWindows,
            isMobile:isMobile,
            isSafari: isSafari,
            scrollTop: scroll,
            scrollBottom: (winHeight + scroll),
            elemTop: elemTop,
            region: region,
            LAYOUT_ID_MOBILE: 1,
            LAYOUT_ID_TBLT_PORT: 2,
            LAYOUT_ID_TBLT_LAND: 3,
            LAYOUT_ID_DESKTOP: 4
        };

        ss.metrics = metrics;
        if(window.InstResponsive && layout !== prevLayout && !isIE8()){
            window.InstResponsive.initImages();
        }
        return metrics;
    };

    //ss.DetectScroll = function() {
    //  var st = $thewindow.scrollTop(),
    //      height = $thewindow.height(),
    //      sb = height + st;
    //
    //  ss.metrics.scrollTop = st;
    //  ss.metrics.scrollBottom = sb;
    //  ss.metrics.height = height;

    //  return ss.metrics;
    //};

    //ss.DetectDimensions = function() {
    //  var winWidth = $thewindow.width(),
    //		winHeight = $thewindow.height(),
    //		layout,
    //		layoutId,
    //		mobile;
    //
    //	// Sets the layout/devices you are viewing based on window width and breakpoints
    //	if (winWidth < 480) {
    //		layout = 'mobile';
    //		layoutId = 1;
    //	} else if(winWidth < 768) {
    //		layout = 'mobile-landscape';
    //		layoutId = 1;
    //	} else if (winWidth < 1024) {
    //		layout = 'tablet-portrait';
    //		layoutId = 2;
    //	} else if (winWidth < 1280) {
    //		layout = 'tablet-landscape';
    //		layoutId = 3;
    //	} else {
    //		layout = 'desktop';
    //		layoutId = 4;
    //	}

    //  ss.metrics.width = winWidth;
    //  ss.metrics.height = winHeight;
    //  ss.metrics.device = layout;
    //  ss.metrics.deviceLayoutId = layoutId;

    //  return ss.metrics;
    //};

    /**
     Scrolls to an element.
     @class $.scrollTo
     @constructor

     @param {HTMLElement} element - the element you want the body to scroll to.
     @param {Number} position (optional) - the top coordinate where to scroll to.
     @param {Number} speed (optional) - speed of scroll.
     @param {Function} func (optional) - callback function to be called after scroll
     **/
    ss.scrollTo = function(element, position, speed, func, area) {
        var pos = position || $(element).offset().top,
            _speed = speed || 800,
            callback = (func) ? func() : null,
            _area = area || 0;
        //console.log("scrollTo");
        ss.htmlBody.animate({scrollTop: ss.htmlBody.scrollTop() + pos - _area}, _speed, function () {callback;});
    };
    ss.scrollTop = function(element,position, speed, func) {
        var pos = position || $(element).offset().top,
            _speed = speed || 800,
            callback = (func) ? func() : null;
        //console.log("scrollTop");
        ss.htmlBody.animate({scrollTop: pos}, _speed, function () {callback;});
    };

    /**
     Scrolls to an element.
     @class $.backgroundScrollfix
     @constructor

     **/
    ss.backgroundScrollfix = function() {
        var bod=$('body');
        var doc = $(document);
        var scrollWrapper=$('.body_wrapper');
        var currentScroll;
        var selScrollable='#ss-nav-menu *,#ss-search-menu *,#ss-cart-menu *';

        function init(){
            eventBridge.on(eventDictionary.bodyscroll.SCROLL_OFF, scrollOff);
            eventBridge.on(eventDictionary.bodyscroll.SCROLL_ON, scrollOn);
        }

        function scrollOff(){
            //console.log('scrollOff');
            if (bod.hasClass('scrollOff')){
                return;
            }

            if (ss.metrics.isIOS()){
                doc.on('touchmove',preventDefault);
                bod.on('touchstart', selScrollable, touchstart);
                bod.on('touchend', selScrollable, touchend);

                bod.on('touchmove', selScrollable, stopPropagation);

                //bod.on('touchmove', '#ss-nav-menu', stopPropagation);

            }


            currentScroll=ss.metrics.scrollTop;
            bod.addClass('scrollOff');
            eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), ss.metrics);
            if ($(window).width()<=1280 && !ss.metrics.isIOS()){
                scrollWrapper.scrollTop(currentScroll);
            }

        }

        function preventDefault(e){
            e.preventDefault();
        }

        function touchstart(e){
            //console.log('touchstart',e);
            if ($(e.target).is('input')){
                return;
            }

            var target;
            if ($(e.target).parents('#ss-cart-menu').length > 0 ){
                target=$('#ss-cart-menu')[0];
                //console.log('target : cart');
            } else if ($(e.target).is('ul')){
                target=e.target;
                //console.log('target : ul');
            } else {
                var parents = $(e.target).parents('.tier1-li');
                if(parents.find('ul').length && !$(e.target).hasClass('tier1')){
                    target=parents.find('ul')[0];
                }else{
                    target=parents.parent()[0];
                }
            }

            if (target.scrollTop === 0) {
                target.scrollTop = 1;
            } else if (target.scrollHeight === target.scrollTop + target.offsetHeight) {
                target.scrollTop -= 1;
            }
        }

        function touchend(e){
            //console.log('touchend',e);
            if ($(e.target).is('input')){
                currentScroll=$(window).scrollTop();
                $(e.target).click();
                $(e.target).focus();
                $(window).scrollTop(currentScroll);
                $(window).on('orientationchange', orientationChange);
                return;
            }
        }

        function orientationChange(e){
            $(window).scrollTop(currentScroll);
        }

        function stopPropagation(e){
            //console.log('stopPropagation',e);

            var target;
            if ($(e.target).parents('#ss-cart-menu').length > 0 ){
                target=$('#ss-cart-menu')[0];
                //console.log('target : cart');
            } else if ($(e.target).is('ul')){
                target=e.target;
                //console.log('target : ul');
            } else {
                var parents = $(e.target).parents('.tier1-li');
                if(parents.find('ul').length && !$(e.target).hasClass('tier1')){
                    target=parents.find('ul')[0];
                }else{
                    target=parents.parent()[0];
                }
            }

            if (target.scrollHeight!==target.offsetHeight){
                e.stopPropagation();
            } else {
                e.preventDefault();
            }
        }

        function scrollOn(){
            if (!bod.hasClass('scrollOff')){
                return;
            }
            var rw=$(window).width();
            if (rw<=1280 && !ss.metrics.isIOS()){
                currentScroll=scrollWrapper.scrollTop();
                scrollWrapper.scrollTop(0);
            }
            bod.removeClass('scrollOff');
            if (rw<=1280 && !ss.metrics.isIOS()){
                //fix scroll issue 122293
                $(window).scrollTop(currentScroll);
                //fix scroll issue 122293
                //body.scrollTop(currentScroll);
                eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), ss.metrics);
            }

            if (ss.metrics.isIOS()){
                doc.off('touchmove',preventDefault);
                bod.off('touchstart', selScrollable, touchstart);
                bod.off('touchmove', selScrollable, stopPropagation);
                $(window).off('orientationchange', orientationChange);
            }
        }

        init();
    };

    ss.PopAlign = function (){
        return {
            /**
             @function bindEvents
             Bind events to elements on home page
             **/
            init: function () {
                var self = this;
                self.bindEvents();
            },

            bindEvents: function() {
                var self = this;

                $('.popAlign').each(function (){
                    this.popAlign = popAlign;
                });

                eventBridge.on(eventDictionary.global.RESIZE, function(e, data) {
                    $('.popAlign').each(function (){
                        popAlign($(this));
                    });
                });

                function popAlign(self){
                    if(!self){
                        self = $(this);
                    }
                    var metrics = ss.Detect(), metricsWidth = $(window).width(), scrollTop = metrics.scrollTop === 0 ? ($('#content').offset().top > 0 ? 0 : -$('#content').offset().top) : metrics.scrollTop;
                    if(metrics.isIE8() === 8 && metricsWidth > 1280) {
                        metricsWidth = 1280;
                    }
                    if(metrics.isMobile() !== null){
                        self.css('max-width', metricsWidth);
                    }
                    var l = parseInt((metricsWidth - self.width())*0.5);
                    var t = parseInt((metrics.height - self.height())*0.5) + scrollTop;
                    if(t < 0){
                        t = 0;
                    }
                    //console.log('window = ' + $(window).width() + ', metrics.width = ' + metricsWidth + ', self.width() = ' + self.width() + ', l = ' + l);
                    self.css({ 'top':t+'px', 'left':l+'px' }) ;
                }

                eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), ss.metrics);
            }

        };
    };


    /**
     ResponsiveImages Object which will change image paths for different breakpoints.
     @class $.ResponsiveImages
     @constructor

     @param {String} layout - the default layout, mobile.
     @param {Number} currentWidth - width of the window
     **/
    ss.ResponsiveImages = function () {
        return {
            layout: 'mobile',
            currentWidth: 0,
            lazy:[],

            /**
             @function bindEvents
             Bind events to elements on home page
             **/
            init: function () {
                var self = this;

                // Lazy loaded images
                self.lazy = $('.lazy');
                self.lazy.attr('data-lazy-loaded', 'false');
                eventBridge.on(eventDictionary.global.SCROLL, function(e, metrics) {
                    self.scan(metrics);
                });

                self.liveSiteLink();
                self.initImages();
                self.bindEvents();
                self.scan(ss.metrics);
            },

            scan: function(metrics) {
                var len=this.lazy.length;
                for (var i=0;i<len;i++) {
                    var $elem = $(this.lazy[i]);
                    //$('body').prepend('<h2>'+this.isInView($elem, metrics)+'</h2>');
                    if ($elem.attr('data-lazy-loaded') !== 'true' && this.isInView($elem, metrics)) {

                        $elem.attr('data-lazy-loaded', 'true');

                        if(ss.metrics.isIE8() === 8){
                            $elem.attr('src', $elem.data('media-desktop'));
                        } else if(metrics.device === 'mobile-landscape' && $elem.data('media-mobile-landscape') === undefined) {
                            $elem.attr('src', $elem.data('media-mobile'));
                        } else {
                        	var data = $elem.data();
                        	var device = ss.metrics.device;
                        	var dataObj={};
                        	var cnt = 0;
                            dataObj['mobile'] = 'mediaMobile', dataObj['mobile-landscape'] = 'mediaMobileLandscape', dataObj['tablet-portrait'] = 'mediaTabletPortrait',
                            dataObj['tablet-landscape'] = 'mediaTabletLandscape', dataObj['desktop'] = 'mediaDesktop';
                            while( !data[dataObj[device]] ){
                                if(device === 'mobile'){
                                    device = 'tablet-portrait';
                                    if( !data[dataObj[device]] ){
                                        device = 'tablet-landscape';
                                    }
                                }else if(device === 'mobile-landscape'){
                                    device = 'mobile';
                                }else if(device === 'tablet-portrait'){
                                    device = 'mobile';
                                    if( !data[dataObj[device]] ){
                                        device = 'tablet-landscape';
                                    }
                                }else if(device === 'tablet-landscape'){
                                    device = 'desktop';
                                    if( !data[dataObj[device]] ){
                                        device = 'tablet-portrait';
                                    }
                                }else if(device === 'desktop'){
                                    device = 'tablet-landscape';
                                    if( !data[dataObj[device]] ){
                                        device = 'tablet-portrait';
                                    }
                                }
                                cnt++;
                                if(cnt > 5){
                                    break;
                                }
                            }
                            if($elem.data('media-' + device)){
                            	$elem.attr('src', $elem.data('media-' + device));
                            }
                            
                        }

                        $elem.animate({'opacity':1});
                        $elem.removeClass('lazy');
                    }
                }
            },

            isInView: function(elem, metrics) {

                if (!elem.is(':visible')) {
                    return false;
                }

                var elemTop = metrics.elemTop(elem),
                    threshold = 100;

                //ignore elements that have a top of 0
                if (elemTop !== 0 && elemTop < metrics.scrollBottom + threshold) {
                    return true;
                }

                return false;
            },

            bindEvents: function() {
                var self = this;
                if( !ss.metrics.isIE8() ){ // ADD ADNStyle
                    eventBridge.on(eventDictionary.global.RESIZE, function(e, data) {
                        /* ADD ADNStyle */
                        //console.log("d = " + ss.metrics.device + ", pd = "  + ss.metrics.prevDevice);
                        if(ss.metrics.deviceChanged){
                            //console.log("device change");
                            self.initImages();
                        }
                        /* ADD ADNStyle */
                    });
                }
            },

            /* ADD ADNStyle */
            liveSiteLink:function (){
                var selector = $('.liveSiteLink');
                selector.each(function (){
                    var self = $(this), data = self.data(), link;
                    if(!data){return;}
                    if(ss.metrics.isMobile()){
                        link = data['mobileLink'];
                    }else{
                        link = data['desktopLink'];
                    }

                    if($(this).hasClass('popupStyle')){
                        self.attr('onclick', 'window.open("' + link + '", "open", "width=' + data['popupWidth'] + ', height=' + data['popupHeight'] + ', scrollbars=' + data['popupScrollable'] + ', resizable=no" );');
                        //self.attr('href', '#');
                    }else{
                        //console.log('href = ' + link);
                        self.attr('href', link);
                    }

                });

            },
            bindImages: function(elm) {
                var self = this;

                // ADD ADNStyle
                var dataObj={};
                dataObj['mobile'] = 'mediaMobile', dataObj['mobile-landscape'] = 'mediaMobileLandscape', dataObj['tablet-portrait'] = 'mediaTabletPortrait',
                    dataObj['tablet-landscape'] = 'mediaTabletLandscape', dataObj['desktop'] = 'mediaDesktop';
                // ADD ADNStyle

                elm.find('.responsive-image').each(function() {
                    var $reImg = $(this);
                    var device = ss.metrics.device, initDevice = device, cnt=0, data = $reImg.data(), src; //ADD ADNStyle


                    // ADD ADNStyle

                    while( !data[dataObj[device]] ){
                        if(device === 'mobile'){
                            device = 'tablet-portrait';
                            if( !data[dataObj[device]] ){
                                device = 'tablet-landscape';
                            }
                        }else if(device === 'mobile-landscape'){
                            device = 'mobile';
                        }else if(device === 'tablet-portrait'){
                            device = 'mobile';
                            if( !data[dataObj[device]] ){
                                device = 'tablet-landscape';
                            }
                        }else if(device === 'tablet-landscape'){
                            device = 'desktop';
                            if( !data[dataObj[device]] ){
                                device = 'tablet-portrait';
                            }
                        }else if(device === 'desktop'){
                            device = 'tablet-landscape';
                            if( !data[dataObj[device]] ){
                                device = 'tablet-portrait';
                            }
                        }
                        cnt++;
                        if(cnt > 5){
                            break;
                        }
                    }
                    // ADD ADNStyle
                    var hiddenLoadAttr = $reImg.attr('data-hidden-load');
                    var hiddenLoad = (typeof hiddenLoadAttr !== 'undefined' && hiddenLoadAttr === 'false' ? false : true);
                    var haltLoad = false;

                    if (!hiddenLoad && $reImg.is(':hidden')) {
                        haltLoad = true;
                    }

                    if(!$reImg.hasClass('lazy') && !haltLoad) {
                        var media = 'data-media-' + device;//ADD ADNStyle
                        src = $reImg.attr(media);//ADD ADNStyle
                        if( !src ) return;
                        if ($reImg.prop('tagName') === 'IMG') {
                            $reImg.attr('src', src); //ADD ADNStyle
                        } else {
                            // ADD ADNStyle
                            if(!Modernizr.csstransitions) {
                                $reImg.css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+src+'", sizingMethod="scale")');
                                $reImg.css('-ms-filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+src+'", sizingMethod="scale")');
                                var checkT = setTimeout(function(){clearTimeout(checkT); $reImg.css('background-image', '');},300);
                                var reCheckT = setTimeout(function(){ clearTimeout(reCheckT);$reImg.css('background-image', '');},1000);
                                //$reImg.css('background-image', '');
                                $reImg.addClass('d-bind-responsive');

                                if ( $reImg.hasClass('image') ) {
                                    $reImg.removeClass('image');
                                    $reImg.find('>div').remove();
                                }
                            }
                            else {
                            	if( src ){
                            		$reImg.css({
                                        'background-image': 'url('+src+')',
                                        '-ms-filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='+src+', sizingMethod="scale")'
                                    });
                            	}
                                
                            }
                            //ADD ADNStyle
                        }

                    }
                });
            },
            /* ADD ADNStyle */
            /**
             @function initImages
             Sets the responsive images to the element that has "responsive-image" in its class name.
             **/
            initImages: function () {
                var self = this;

                // ADD ADNStyle
                var dataObj={};
                dataObj['mobile'] = 'mediaMobile', dataObj['mobile-landscape'] = 'mediaMobileLandscape', dataObj['tablet-portrait'] = 'mediaTabletPortrait',
                    dataObj['tablet-landscape'] = 'mediaTabletLandscape', dataObj['desktop'] = 'mediaDesktop';
                // ADD ADNStyle
                if(ss.metrics.isIE8()) ss.metrics.device = 'desktop';
                $('.responsive-image:not(.d-bind-responsive)').each(function() {
                    var $reImg = $(this);
                    var device = ss.metrics.device, initDevice = device, cnt=0, data = $reImg.data(), src; //ADD ADNStyle

                    // ADD ADNStyle

                    while( !data[dataObj[device]] ){
                        if(device === 'mobile'){
                            device = 'tablet-portrait';
                            if( !data[dataObj[device]] ){
                                device = 'tablet-landscape';
                            }
                        }else if(device === 'mobile-landscape'){
                            device = 'mobile';
                        }else if(device === 'tablet-portrait'){
                            device = 'mobile';
                            if( !data[dataObj[device]] ){
                                device = 'tablet-landscape';
                            }
                        }else if(device === 'tablet-landscape'){
                            device = 'desktop';
                            if( !data[dataObj[device]] ){
                                device = 'tablet-portrait';
                            }
                        }else if(device === 'desktop'){
                            device = 'tablet-landscape';
                            if( !data[dataObj[device]] ){
                                device = 'tablet-portrait';
                            }
                        }
                        cnt++;
                        if(cnt > 5){
                            break;
                        }
                    }
                    // ADD ADNStyle
                    var hiddenLoadAttr = $reImg.attr('data-hidden-load');
                    var hiddenLoad = (typeof hiddenLoadAttr !== 'undefined' && hiddenLoadAttr === 'false' ? false : true);
                    var haltLoad = false;

                    if (!hiddenLoad && $reImg.is(':hidden')) {
                        haltLoad = true;
                    }

                    if(!$reImg.hasClass('lazy') && !haltLoad) {
                        var media = 'data-media-' + device;//ADD ADNStyle
                        src = $reImg.attr(media);//ADD ADNStyle
                        if ($reImg.prop('tagName') === 'IMG') {
                        	if( src ){
                        		$reImg.attr('src', src); //ADD ADNStyle
                        	} 
                        } else {
                        	// ADD ADNStyle
                        	if( src ){
                        		$reImg.css({
                                    'background-image': 'url('+src+')',
                                    '-ms-filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src='+src+', sizingMethod="scale")'
                                });
                                
                        	}
                            //ADD ADNStyle
                        }

                    }
                });
            }

        };
    };

    /**
     PointInTriangle: Tests to see if a point exists within a triangle using Barycentric coordinates triangle coordinates are in clockwise order

     @method $.PointInTriangle
     @constructor
     @param {p} test point object in form {x,y}
     @param {p0} triangle corner 1 object in form {x,y}
     @param {p1} triangle corner 2 object in form {x,y}
     @param {p2} triangle corner 3 object in form {x,y}
     **/
    ss.PointInTriangle = function (p, p0, p1, p2) {
        if (!p || !p0 || !p1 || !p2) {
            return false;
        }

        var A = 1/2 * (-p1.y * p2.x + p0.y * (-p1.x + p2.x) + p0.x * (p1.y - p2.y) + p1.x * p2.y);
        var sign = A < 0 ? -1 : 1;
        var s = (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * p.x + (p0.x - p2.x) * p.y) * sign;
        var t = (p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * p.x + (p1.x - p0.x) * p.y) * sign;

        return s > 0 && t > 0 && (s + t) < 2 * A * sign;
    };

    /**
     Cookies Object which will handle cookie operations.

     @class $.Cookies
     @constructor
     @param {Object} params External object settings passed into the object.
     **/
    ss.Cookies = function () {
        return {
            set: function (name, val, options) {
                $.cookies.set(name, val, options);
            },
            get: function (name){
                return $.cookies.get(name);
            }
        };
    };

    /**
     Object for loading image assets asynchronously.

     @class $.AsyncImageLoader
     @constructor
     @param {Object} params External object settings passed into the object.
     **/
    ss.AsyncImageLoader = function (params) {

        var self = this,
            container = params.container,
            imagePath = params.imagePath,
            altText = params.altText,
            instantLoad = params.instantLoad || false,
        /*
         loadingAnimPath = '/common/img/loading-animation.gif',
         */
            loadingAnimPath = '/common/next/img/loading-animation.gif',
            loadingAnimation, loadingAsset;

        function init() {
            container.append('<img class="loading-animation" src="' + loadingAnimPath + '" alt="Loading" />');
            container.append('<img class="loading-asset" />');

            loadingAnimation = container.find('.loading-animation');
            loadingAsset = container.find('.loading-asset');

            loadingAsset.attr('alt', altText);
            loadingAsset.css({'visibility':'hidden'});

            loadingAnimation.css({
                'left': Math.round((container.width() - loadingAnimation.width())/2),
                'top': Math.round((container.height() - loadingAnimation.height())/2)
            });

            /* Check to load img upon initialization or wait */
            if(instantLoad){
                self.loadImg();
            } else {
                //preloading img info into data attribute
                loadingAsset.attr('data-src', imagePath);
            }
        }

        /* Actual load image onto page */
        this.loadImg = function() {
            loadingAsset.on('load', function() {
                loadingAnimation.remove();
                loadingAsset.css({'visibility':'visible'});
            });

            loadingAsset.addClass('async-img').attr('src', imagePath);
            loadingAsset.removeAttr('data-src');
        };

        init();
    };


    /**
     JQuery Method for throttling fast tab issues. Call $(selector).fastTabFix(150) to implement fast tabbing throttle on any element.

     @class $.fn.fastTabFix
     @constructor
     @param {int} delay length in miliseconds for throttle delay.
     **/
    ss.fn.fastTabFix = function (delay){
        delay=delay || 300;
        var tabTimeout;

        $(this).on('keydown', function(e){
            if (tabTimeout !== undefined){
                e.preventDefault();
                return;
            }
            if (e.keyCode===9){
                tabTimeout = setTimeout(function(){
                    clearTimeout(tabTimeout);
                    tabTimeout = undefined;
                },delay);
            }
        });

    };

    ss.fn.redraw = function() {
        return this.hide(0, function(){$(this).show();});
    };

    ss.fn.htmlClean = function() {
        var textNodes = this.contents().filter(
            function() { return (this.nodeType === 3 && !/\S/.test(this.nodeValue)); })
            .remove();
        return this;
    };

    ss.fn.doFocus = function(tabindex){
        $(this).attr('tabindex', tabindex).focus().one('blur', function(){
            $(this).removeAttr('tabindex');
        });
    };

    ss.fn.tabfocus = function(fn){
        return this.each(function(){
            var $this = $(this),
                clicked = false;

            $this.mousedown(function(){
                clicked = true;
            });

            $this.focus(function(event){
                if (! clicked) {
                    fn.call(this, event);
                } else {
                    clicked = false;
                }
            });
        });
    };

    /**
     @function ieGrid
     Creates pattern effect in IE, as a shim for nth child.
     Applies class name by number ( 0 indexed )...eg. class="nth0", class="nth1", etc.
     @param Array kids - a list of all elements that are to be used in the grid
     @param int modulous - defaults to 3 - the number of elements you wish to cycle through before starting again at 0
     **/
    ss.ieGrid = function(kids, modulous) {
        modulous = modulous || 3;
        for(var i=0;i<kids.length; i++){
            var mod = i % modulous;
            $(kids[i]).addClass('nth'+mod);
        }
    };

    /**
     @function spinner
     Adds a loading animation during the course of the provided function

     @param Object params - The collection of optional arguments
     @param function func - The function to be "wrapped" by the spinner
     **/
    ss.spinner = function(params, func){

        // In case there isn't any optional parameter overriden
        var fn = func || arguments[arguments.length - 1],
            opts = (typeof params !== 'function')? opts : {};

        // Requires a function, since spinner is a function wrapper
        if(typeof fn === 'function'){

            /***** OPTIONAL ARGUMENTS *****

             containerClass - The class of the element that will contain the spinner IMG element.
             The function will either look for it or create a container with that class on the fly just once and then re-use it.

             spinnerImgPath - The relative path to the spinner image.

             where		   - The DOM jQuery Object for which the spinner will be placed against, according to the 'how' parameter criteria.

             how		       - The positioning criteria in regards to the DOM jQuery Object defined by the 'where' parameter.

             cb             - A callback function to be called after the spinner is hidden

             *******************************/

            // Defaults
            var defaults = {
                containerClass: 'spinner-container',
                /*
                 spinnerImgPath: '/common/img/loading-animation.gif',
                 */
                spinnerImgPath: '/common/next/img/loading-animation.gif',
                where: $('body').children(':eq(0)'),
                how: 'append',
                cb: function(){}
            };

            opts = $.extend(defaults, params);

            // Looks for the spinner DOM Object
            var $spinnerModule = $('.'+ opts.containerClass).first();

            // Verifies if the spinner that we looked for exists, and if not, creates it with the given data
            if( $spinnerModule.length === 0 ){
                $spinnerModule = $('<div class="'+opts.containerClass+'"><img alt="spinner" src='+ opts.spinnerImgPath +' class="loading-animation"></div>');
            }

            // Handles the spinner container placement
            switch(opts.how){
                case 'after':
                    $spinnerModule.insertAfter(opts.where);
                    break;
                case 'before':
                    $spinnerModule.insertBefore(opts.where);
                    break;
                case 'append':
                    $spinnerModule.appendTo(opts.where);
                    break;
                case 'prepend':
                    $spinnerModule.prependTo(opts.where);
                    break;

            }

            // Makes the spinner appear
            $spinnerModule.hide().slideDown(300, 'easeInOutQuad');

            // Adds a promise solver to the function arguments
            var newFunc = ss.promiseWrap(fn);

            // Sets up the response for the resolved promise, and calls the optional callback function afterwards
            $.when( newFunc.call() ).then(function(){
                $spinnerModule.hide();
                opts.cb();
            });


        }else{

            // Throws an error if there wasn't any function provided.
            $.error('The spinner requires a function in order to work!');

        }

    };

    /**
     @function promiseWrap
     Wraps a promise around a given function and adds a resolver to its parameters

     @param function func - The function to be "wrapped"
     **/
    ss.promiseWrap = function(func){
        return function() {
            var args = $.makeArray(arguments);

            var p = $.Deferred();

            args.push(p.resolve); //Adds deferred.resolve as an argument

            func.apply(this, args);

            return p.promise();
        };
    };

    /**
     @function extractNumber
     Extracts the numeric values of a prince string. For example 'U$S43.10' will return 43.10, '￡10' will return 10

     @param function str - The string where to extract the number
     **/
    ss.extractNumber = function(str) {
        return Number(str.match(/[+-]?((\.\d+)|(\d+(\.\d+)?)([eE][+-]?\d+)?)/g));
    };

    /**
     @function getNavMenuWidthDiff
     Calculates the current width difference of the nav state in contrast with the window

     **/
    ss.getNavMenuWidthDiff = function(){

        var ws = $(window).width(),
            $navMain = $('nav > ul'),
            nmw = $navMain.width();

        if (ws>1280){
            return -1;
        } else if (ws>=1024){
            return ((ws-nmw)/2);
        } else {
            return (ws-nmw);
        }
    };

    ss.formatNumber = function(n) {
        var parts = n.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    };

    ss.inputValue = function (selector, value){
        var placeholderActive = selector.attr('data-placeholder-active');
        if(arguments.length >= 2){
            value = value + '';
            if(value){
                try{
                    Placeholders.disable(selector[0]);
                }catch(e){
                }
                selector.val(value);
                return value;
            }else{
                selector.val('');
                try{
                    Placeholders.enable(selector[0]);
                }catch(e){
                }
                return '';
            }
        }else if(arguments.length === 1){
            if( placeholderActive === 'true' ){
                return '';
            }
            return selector.val();
        }
        return '';
    };

    ss.setLayerFocus = function (selector){
        var focusArea = selector.find('button input a'), firstFocus = focusArea.first(), lastFocus = focusArea.last();

        firstFocus.on('keydown', function (e){
            if(e.keyCode === 9 && e.shiftKey){
                lastFocus.focus();
                e.preventDefault();
            }
        });

        lastFocus.on('keydown', function (e){
            if(e.keyCode === 9 && !e.shiftKey){
                firstFocus.focus();
                e.preventDefault();
            }
        });
    };

    ss.CompareHeight = function (){

        var selectors = [];
        ss.CompareHeight.init = function (selector1, selector2, mobile, mobileL, tabletP, tabletL, desktop, verticalAlign){
            if(selector1.length && selector2.length){
                selectors.push({
                    'selector1':selector1,
                    'selector2':selector2,
                    'mobile':mobile,
                    'mobile-landscape':mobileL,
                    'tablet-portrait':tabletP,
                    'tablet-landscape':tabletL,
                    'desktop':desktop,
                    'verticalAlign':verticalAlign
                });
                compareCall();
            }
        };

        eventBridge.on(eventDictionary.global.RESIZE, function(e, data) {
            compareCall();
        });

        function compareCall(){
            var i, len = selectors.length, selectorInfo, selector1, selector2, s1OriginH, s2OriginH, verticalAlign, pdpInfoSpan, metrics = ss.metrics;
            for(i = 0; i < len; i++){
                selectorInfo = selectors[i];
                selector1 = selectorInfo['selector1'];
                selector2 = selectorInfo['selector2'];
                selector1.css('height', '').css('padding-top', '');
                selector2.css('height', '').css('padding-top', '');
                verticalAlign = selectorInfo['verticalAlign'];

                if(!selectorInfo[metrics.device]) continue;

                s1OriginH = selector1.outerHeight();
                s2OriginH = selector2.outerHeight();
                //console.log('s1OriginH = ' + s1OriginH + ', s2OriginH = ' + s2OriginH);
                if(s1OriginH > s2OriginH){
                    selector1.css('height', s1OriginH+'px');
                    selector2.css('height', s1OriginH+'px');
                    if(verticalAlign){
                        pdpInfoSpan = selector2.find('> span');
                        selector2.css('padding-top', (s1OriginH - pdpInfoSpan.outerHeight())*0.5);
                    }
                }else{
                    selector1.css('height', s2OriginH+'px');
                    selector2.css('height', s2OriginH+'px');
                    if(verticalAlign){
                        pdpInfoSpan = selector1.find('> span');
                        selector1.css('padding-top', (s2OriginH - pdpInfoSpan.outerHeight())*0.5);
                    }
                }
            }
        }
    };



    var isTouch = Modernizr.touch;

    var events = {
        'click':(isTouch ? 'touchend' : 'click')
    };
    ss.E = events;

} (jQuery));
/* END FILE */
/**
 * Created by gnustory on 14. 5. 7.
 */
var ss = $;
(function($) {
    /**
     @class $.Navigation
     @constructor
     **/

    ss.Navigation = function() {

        var self = this,
            DESKTOP_MODE = 'desktopMode',
            MOBILE_MODE = 'mobileMode',
            metrics = ss.metrics,
            $globalHeader = $('.global_header'),
            $scrollWrapper = $('.scrollwrapper'),
            body = $('body'),
            nav = $('.nav'),
            homebutton = nav.find('h1 a'),
            navbutton = nav.find('.navbutton'),

            cartwrap = nav.find('.cart-wrap'),
            cartbutton = cartwrap.find('.cartbutton'),
            cartclose = cartwrap.find('.cart-close'),

            searchbutton = nav.find('.searchbutton'),
            searchbox = nav.find('.searchbox'),
            searchbox_input = nav.find('.searchbox input'),
            searchbox_button = nav.find('.searchbox button'),
            autoComplete = nav.find('.auto-complete'),

            utillink = nav.find('.utillink'),
            utillink_a = utillink.find('> a'),
            utillink_firstA = utillink.find('a:first'),
            utillink_lastA = utillink.find('a:last'),
            utillink_expand = utillink.find('.expand'),
            utillink_expand_a = utillink_expand.find('> a'),
            utillink_expand_ul = utillink_expand.find('> ul'),
            utillink_expand_ul_lastA = utillink_expand_ul.find('> li > a:last'),
            overlay = $('#overlay'),

            navigation = nav.find('.navigation'),
            menu_tier1_firstA = navigation.find('> li:first > a'),
            menu_tier1_lastLi = navigation.find('> li:last'),
            menu_tier1_li = navigation.find('> .sub'),
            menu_tier2_ul = menu_tier1_li.find('> ul'),
            menu_tier2_li = menu_tier2_ul.find('> .sub'),
            menu_tier2_li_notException = menu_tier2_ul.find('> .sub:not(.exception)'),
            menu_tier3_ul = menu_tier2_ul.find('> .sub > ul'),
            menu_tier3_li = menu_tier3_ul.find('> .sub'),
            menu_tier4_ul = menu_tier3_li.find('> ul'),
            
            jumpUpBtn = $('footer .topBtn'),
            accNav = $('.accNav'),
            browserNotice = $('.browser_notice'),
            cookieNotice = $('.cookie_notice');
        

        function init(){
            menu_tier1_li.find('> a').on(ss.clickEvent, mobileMenu_ClickHandler).on('focusin', menu_FocusInHandler);
            menu_tier2_li.find('> a').on('focusin', menu_FocusInHandler);
            menu_tier2_li_notException.find('> a').on(ss.clickEvent, mobileMenu_ClickHandler);
            menu_tier3_li.find('> a').on(ss.clickEvent, mobileExceptionMenu_ClickHandler).on('focusin', menu_FocusInHandler);

            menu_tier1_li.on('mouseenter', desktopTier1Menu_OverHandler).on('mouseleave', desktopMenu_OutHandler);
            menu_tier2_li.on('mouseenter', desktopOthersMenu_OverHandler);
            menu_tier3_li.on('mouseenter', desktopOthersMenu_OverHandler);

            navigation.find('a').on('keydown', menu_KeydownHandler);
            menu_tier1_firstA.on('keydown', tier1FirstA_KeydownHandler);
            utillink_firstA.on('keydown', utillinkFirstA_KeydownHandler).on('focusin', utillinkFirstA_FocusInHandler);
            utillink_lastA.on('keydown', utillinkLastA_KeydownHandler);
            utillink_a.on('keydown', utilinkA_KeydownHandler);
            utillink_expand.on('mouseover', utillink_expand_OverHandler).on('mouseout', utillink_expand_OutHandler);
            utillink_expand_a.on('focusin', utillink_expand_a_FocusInHandler).on('keydown', utilink_expand_a_KeydownHandler).on(ss.clickEvent, utillink_expand_a_ClickHandler);
            utillink_expand_ul_lastA.on('keydown', utillink_expand_ul_lastA_KeydownHandler);

            cartbutton.on(ss.clickEvent, cartbutton_ClickHandler);
            cartbutton.on( "keydown", function( event ){
            	if( event.shiftKey && event.keyCode == 9 ) hideCart();
            });
            cartclose.on(ss.clickEvent, cartclose_ClickHandler);
            /* ADD NextGen Store public variable */
            self.miniCartHide = function(){hideCart(); };
            /* // End  */

            self.clearNav = function (){
                if(navbutton.hasClass('on')){
                    navbutton.trigger(ss.clickEvent);
                }
            };

            self.openSearch = function (){
                if(!searchbutton.hasClass('on')){
                    searchbutton.trigger(ss.clickEvent);
                }
            };

            searchbutton.on(ss.clickEvent, searchbutton_ClickHandler).on('keydown', searchbutton_KeydownHandler);
            navbutton.on(ss.clickEvent, navbutton_ClickHandler).on('keydown', navbutton_KeydownHandler);
            searchbox_input.on('focusin', searchbox_input_FocusInHandler).on('keydown', searchbox_input_KeydownHandler);
            searchbox_button.on('focusin', searchbox_button_FocusInHandler);

            homebutton.on('focusin', homebutton_FocusInHandler);
            overlay.on(ss.clickEvent, overlay_ClickHandler);

            accNav.find('a').on(ss.clickEvent, accNav_ClickHandler);
            browserNotice.find('.close').on(ss.clickEvent, browserNotice_ClickHandler);
            cookieNotice.find('.close').on(ss.clickEvent, cookieNotice_ClickHandler);

            eventBridge.on(eventDictionary.global.RESIZE, resizeEventHandler);

            if ($.cookies.get('cookiesaccepted')+'' !== 'true'){ //ie7에서 get 시 문자열로 전달되는 현상이 있음
                body.addClass('cookiewarning');
            }

            if ($.cookies.get('browseraccepted')+'' !== 'true' && metrics.isIE8Less()){ //ie7에서 get 시 문자열로 전달되는 현상이 있음
                body.addClass('browserwarning');
            }
            
            navigation.find( ".sub.exception > ul > li" ).last().addClass( "last-item");
        }

        // -------------------------------------------- event handler --------------------------------------------
        function mobileMenu_ClickHandler(e){
            if(checkMode() === DESKTOP_MODE) return; // tablet-portrait 이하일 경우에만 실행.
            mobileMenuClick($(this));
        }

        function mobileExceptionMenu_ClickHandler(e){
            if(checkMode() === DESKTOP_MODE) return; // tablet-portrait 이하일 경우에만 실행.
            var $self = $(this), $exception = $self.parents('.exception');
            mobileMenuClick($self, $exception);
        }

        function desktopTier1Menu_OverHandler(e){
            if(checkMode() === MOBILE_MODE) return; // tablet-landscape 이상일 경우에만 실행.
            if(cartwrap.hasClass('on')) cartbutton.trigger(ss.clickEvent);
            if(searchbutton.hasClass('on')) searchbutton.trigger(ss.clickEvent);
            desktopMenuOver($(this), 'tier1');
        }

        function desktopOthersMenu_OverHandler(e){
            if(checkMode() === MOBILE_MODE) return; // tablet-landscape 이상일 경우에만 실행.
            //console.log(123);
            desktopMenuOver($(this));
        }

        function desktopMenu_OutHandler(e){
            if(checkMode() === MOBILE_MODE) return; // tablet-landscape 이상일 경우에만 실행.
            var $self = $(this);
            //console.log('mouseout');
            if($self.hasClass('on')){
                $self.removeClass('on').find('.on').removeClass('on');
            }
        }

        function menu_FocusInHandler(e){
            var $self = $(this);
            if(checkMode() === DESKTOP_MODE){      // tablet-landscape & desktop
                $self.parent().trigger('mouseover');
            }
        }

        function menu_KeydownHandler(e){
            if(checkMode() === DESKTOP_MODE && e.keyCode === 9 && e.shiftKey){
                var $self = $(this), $li = $self.parent(), $prev = $li.prev();
                if($prev.length){
                    $prev.trigger('mouseover');
                    $prev.find('li:last').trigger('mouseover');
                }
            }
        }

        function tier1FirstA_KeydownHandler(e){
            if(checkMode() === MOBILE_MODE && e.keyCode === 9 && e.shiftKey){
                e.preventDefault();
                navbutton.focus();
            }
        }

        function utillinkFirstA_KeydownHandler(e){
            if(checkMode() === DESKTOP_MODE && e.keyCode === 9 && e.shiftKey){
                menu_tier1_lastLi.trigger('mouseover');
                menu_tier1_lastLi.find('li:last').trigger('mouseover');
            }
        }

        function utillinkFirstA_FocusInHandler(e){
            if(checkMode() === DESKTOP_MODE){
                if(menu_tier1_lastLi.hasClass('on')){
                    menu_tier1_lastLi.removeClass('on');
                    menu_tier1_lastLi.find('.on').removeClass('on');
                }
            }
        }

        function utillinkLastA_KeydownHandler(e){
            if(checkMode() === MOBILE_MODE && e.keyCode === 9 && !e.shiftKey){
                e.preventDefault();
                navbutton.focus();
                navbutton.trigger(ss.clickEvent);
            }
        }

        function navbutton_KeydownHandler(e){
            if(checkMode() === MOBILE_MODE && e.keyCode === 9){
                if(navbutton.hasClass('on')){
                    if(e.shiftKey) navbutton.trigger(ss.clickEvent);
                    else{
                        e.preventDefault();
                        menu_tier1_firstA.focus();
                    }
                }
            }
        }

        function navbutton_ClickHandler(e){
            if(navbutton.hasClass('on')){
                body.removeClass('navopen');
                navbutton.removeClass('on');
                navigation.find('.sub.on > a').trigger(ss.clickEvent);
                navbutton.focus();
            }else{
                body.addClass('navopen');
                navbutton.addClass('on');
                if(cartwrap.hasClass('on')) cartbutton.trigger(ss.clickEvent);
                if(searchbutton.hasClass('on')) searchbutton.trigger(ss.clickEvent);
                //$('.searchbox').removeClass('searchopen');
            }
            setOverlaySize();
            e.preventDefault();
        }

        function searchbutton_ClickHandler(e){
            hoverMenuOutTrigger();
            if(searchbutton.hasClass('on')){
                searchbutton.removeClass('on');
                searchbox.removeClass('searchopen');
            }else{
                searchbutton.addClass('on');
                searchbox.addClass('searchopen');
                if(cartwrap.hasClass('on')) cartbutton.trigger(ss.clickEvent);

                searchbox_input.focus();
            }
        }

        function searchbutton_KeydownHandler(e){
            if(metrics.deviceLayoutId === 3 && e.keyCode === 9 && e.shiftKey && utillink_lastA.parents('.expand').length){
                e.preventDefault();
                expandAFocus(utillink.find('.expand:last'));
            }
        }

        function searchbox_input_KeydownHandler(e){
            if( e.keyCode === 9 && e.shiftKey){

                if(metrics.deviceLayoutId === 2 || metrics.deviceLayoutId === 4){
                    if(utillink_lastA.parents('.expand').length){
                        e.preventDefault();
                        expandAFocus(utillink.find('.expand:last'));
                    }
                }
                autoComplete.hide();
                eventBridge.trigger(eventDictionary.autocomplete['AUTOCOMPLETE_HIDE']);
            }
        }

        function utilinkA_KeydownHandler(e){
            if(e.keyCode === 9 && e.shiftKey){
                var $prev = $(this).prev();
                if($prev.hasClass('expand')){
                    e.preventDefault();
                    expandAFocus($prev);
                }
            }
        }

        function utilink_expand_a_KeydownHandler(e){
            if(e.keyCode === 9 && e.shiftKey){
                var $parent = $(this).parent(), $ul = $parent.find('> ul'), $prev = $parent.prev();
                if($prev.hasClass('expand')){
                    e.preventDefault();
                    expandAFocus($prev);
                }
                if($ul.hasClass('on')){
                    $parent.trigger('mouseout');
                }
            }
        }

        function utillink_expand_OverHandler(e){
            if(checkMode() === MOBILE_MODE) return;
            var $self = $(this), $ul = $self.find('> ul');
            if(!$ul.hasClass('on')){
                $ul.addClass('on');
            }
        }

        function utillink_expand_OutHandler(e){
            if(checkMode() === MOBILE_MODE) return;
            var $self = $(this), $ul = $self.find('> ul');
            if($ul.hasClass('on')){
                $ul.removeClass('on');
            }
        }

        function utillink_expand_a_ClickHandler(e){
            if(checkMode() === DESKTOP_MODE) return;
            var $self = $(this), $expand = $self.parent(), $ul = $expand.find('> ul');
            if($ul.hasClass('on')){
                $ul.removeClass('on');
            }else{
                var $uls = $expand.parent().find('.expand > ul.on');
                $uls.removeClass('on');
                $ul.addClass('on');
            }
        }

        function utillink_expand_a_FocusInHandler(e){
            var $self = $(this), $expand = $self.parent(), $ul = $expand.find('> ul'), $a = $expand.find('> a');
            if($ul.hasClass('on')){
                $expand.trigger('mouseout');
                $a.trigger(ss.clickEvent);
            }else{
                $expand.trigger('mouseover');
                $a.trigger(ss.clickEvent);
            }
        }

        function utillink_expand_ul_lastA_KeydownHandler(e){
            var $expand = $(this).parents('.expand'), $a = $expand.find('> a');
            if(e.keyCode === 9 && !e.shiftKey){
                $expand.trigger('mouseout');
                $a.trigger(ss.clickEvent);
            }
        }

        function cartbutton_ClickHandler(e){
            hoverMenuOutTrigger();
            if(cartwrap.hasClass('on')){
                cartwrap.removeClass('on');
            }else{
                /* ADD NextGen Store Mini cart list api call*/
                try{
                    getNextGenMiniCartList(cartbutton, cartwrap.find('.cart-list-wrap'), function(){showCart();});
                }catch(e){
                    showCart();
                }
                /* // End  */
            }
        }

        function cartclose_ClickHandler(e){
            hideCart();
        }

        function searchbox_input_FocusInHandler(e){
            searchFocusCommon();
            //autoComplete.show();
        }

        function searchbox_button_FocusInHandler(e){
            searchFocusCommon();
        }

        function overlay_ClickHandler(e){
            $('body').removeClass('navopen');
            $('.navbutton').removeClass('on');
            setOverlaySize();
            e.preventDefault();
        }

        function accNav_ClickHandler(e) {
            var preventDefault = $(e.target).attr('data-prevent-default'),
                carousel = $('.ss-carousel'),
                index = carousel.find('.dots li.current a').attr('data-index');
            if (preventDefault) {
                return;
            }
            if (carousel.length > 0 && $('#cPlayPause').length > 0) {
                $('#cPlayPause').trigger('click');
                carousel.find('li[data-index="'+ index +'"] a:visible').first().focus();
                carousel.find('.controls.prev, .controls.next').attr('tabindex', -1);
            } else {
                e.preventDefault();
                location.hash = $(this).attr('href');

                var focusItem = $(location.hash);

                focusItem.find(':focusable')[0].focus();

                if ($(focusItem).attr('id') !== 'accHelp' && $('.accomodate-navbar').length > 0) {
                    $('html, body').animate({
                        scrollTop: $('.accomodate-navbar').offset().top
                    }, 500);
                }
            }
        }

        function browserNotice_ClickHandler(e){
            var opt={complete:function(){body.removeClass('browserwarning');}
            };
            browserNotice.slideUp(opt);
            var date = new Date();
            date.setTime(date.getTime() + (90*24*60*60*1000));
            $.cookies.set('browseraccepted','true', {expiresAt: date});
        }

        function cookieNotice_ClickHandler(e){
            var opt={complete:function(){body.removeClass('cookiewarning');}};
            cookieNotice.slideUp(opt);
            var date = new Date();
            date.setTime(date.getTime() + (90*24*60*60*1000));
            $.cookies.set('cookiesaccepted','true', {expiresAt: date});
        }

        function homebutton_FocusInHandler(e){
            if(metrics.deviceLayoutId > 2){
                navigation.find('.sub.on').trigger('mouseout');
            }else{
                navigation.find('.sub.on > a').trigger(ss.clickEvent);
            }
        }

        function resizeEventHandler(e){
            metrics = ss.metrics;
            if(metrics.deviceChanged && metrics.deviceLayoutId > 2){
                menu_tier2_ul.css('display', '');
                menu_tier3_ul.css('display', '');
                menu_tier4_ul.css('display', '');
            }

            setOverlaySize();


        }

        // -------------------------------------------- event handler --------------------------------------------


        // -------------------------------------------- function --------------------------------------------
        function setOverlaySize(){
            if(metrics.deviceLayoutId < 3 && body.hasClass('navopen')){
                //overlay.css('height', $document.height() + 'px');
                overlay.css('height', '').css('height', ( $globalHeader.height() + $scrollWrapper.height() )  + 'px');
            }else{
                overlay.css('height', '');
            }
        }

        function mobileMenuClick($self, $exception){
            var $li = $self.parent();
            if($li.hasClass('on')){
                $li.find('> ul').slideUp(200);
                $li.removeClass('on');
                if(!!$exception && $exception.hasClass('on')) $exception.removeClass('on');
            }else{
                $li.parent().find('.on:not(.exception) > a').trigger(ss.clickEvent);
                if(!!$exception) $exception.parent().find('> .on > a').trigger(ss.clickEvent);

                $li.find('> ul').slideDown(200);

                $li.addClass('on');
                if(!!$exception && !$exception.hasClass('on')) $exception.addClass('on');
            }
        }

        function desktopMenuOver($self, type){
            if(!$self.hasClass('on')){
                if(type === 'tier1' && navigation.find('> .on').length>0){
                    navigation.find('> .on').removeClass('on').find('.on').removeClass('on');
                }

                var $parent = $self.parent();
                if($parent.hasClass('exception')){//4뎁스일때
                    $parent.parent().find('.on').removeClass('on');
                }else{//3뎁스인데 같은 뎁스에 4뎁스 메뉴가 존재.
                    $parent.find('.exception.on').removeClass('on').find('.on').removeClass('on');
                }

                $parent.find('> .on').removeClass('on');
                $self.addClass('on');
            }
        }

        function hoverMenuOutTrigger(){
            if(metrics.deviceLayoutId > 2){
                navigation.find('> .on').trigger('mouseout');
            }
        }

        function searchFocusCommon(){
            if(!searchbutton.hasClass('on')) searchbutton.trigger(ss.clickEvent);
            if(metrics.deviceLayoutId > 2){
                navigation.find('> .on').trigger('mouseout').find('> a').trigger(ss.clickEvent);
                utillink.find('> .expand > ul.on').parent().trigger('mouseout').find('> a').trigger(ss.clickEvent);
            }
        }

        function expandAFocus($expand){
            $expand.trigger('mouseover');
            $expand.find('> a').trigger(ss.clickEvent);
            $expand.find('> ul > li:last > a').focus();
        }

        function checkMode(){
            if( (metrics.deviceLayoutId > 2 && !metrics.isMobile()) || metrics.isIE8() ){
                return DESKTOP_MODE;
            }else{
                return MOBILE_MODE;
            }
        }

        function showCart(){
            cartwrap.addClass('on');
            if(searchbutton.hasClass('on')) searchbutton.trigger(ss.clickEvent);
        }

        function hideCart(){
            if(cartwrap.hasClass('on')){
                cartbutton.trigger(ss.clickEvent);
                cartbutton.focus();
            }
        }
        // -------------------------------------------- function --------------------------------------------


        init();

        this.scrollToTop = function(duration) {
            $('html, body').animate({ scrollTop: 0 }, duration || 1000);
        };

        jumpUpBtn.click(function(e) {
            // Temporary fix ipad + IE8 not working:
            if(navigator.userAgent.toLowerCase().indexOf('trident') === -1 && navigator.userAgent.toLowerCase().indexOf('ipad') === -1) {
                e.preventDefault();
            }
            self.scrollToTop();
        });

    };

} (jQuery));

var navigation;

/* Instantiates navigation on page ready */
$(function() {
    navigation = new ss.Navigation();
});/* END FILE */
/**
 * Created by gnustory on 14. 5. 7.
 */
var ss = $;
(function($) {
    /**
     @class $.FooterNavi
     @constructor
     **/

    ss.FooterNavi = function() {

        var self = this,
            DESKTOP_MODE = 'desktopMode',
            MOBILE_MODE = 'mobileMode',
            metrics = ss.metrics,
            body = $('body'),
            footerNav = $('.footer-navi'),
            cols = footerNav.find('.col'),
            clickA = cols.find('> h3 > a'),
            uls = cols.find('> ul'),
            //colWraps = footerNav.find('.col-wrap'),
            utillink = footerNav.find('.utillink');

        function init(){
            clickA.on(ss.clickEvent, colsClickHandler);
            eventBridge.on(eventDictionary.global.RESIZE, resizeEventHandler);
            resizeEventHandler();
        }

        // -------------------------------------------- event handler --------------------------------------------
        function colsClickHandler(e){
            if(metrics.deviceLayoutId > 1) return;
            var $self = $(this), tUl = $self.parent().next();
            if(tUl.css('display') == 'block'){
                tUl.slideUp();
                $self.removeClass('on');
            }else{
                clickA.removeClass('on');
                uls.slideUp();
                $self.addClass('on');
                tUl.slideDown();
            }
        }

        var timeoutCnt;
        function resizeEventHandler(e){
            metrics = ss.metrics;
            var deviceLayoutId = metrics.deviceLayoutId;
            if(metrics.deviceChanged && deviceLayoutId > 1){
                uls.css('display', '');
            }

            utillink.css('height', '');
            footerNav.css('height', '');
            if(deviceLayoutId === 1){
                cols.css('height', '');
            }else if(deviceLayoutId === 2 || deviceLayoutId === 3){
                utillinkSize(4);
            }else if(deviceLayoutId === 4){
                utillinkHeightInit();
                if(timeoutCnt) clearTimeout(timeoutCnt);
                timeoutCnt = setTimeout(utillinkHeightInit, 100);
            }
        }
        // -------------------------------------------- event handler --------------------------------------------


        // -------------------------------------------- function --------------------------------------------
        function utillinkSize(lineLen){
            var tH= 0, thisH, utillinkH, headerH, lastColWrap;
            cols.css('height', '');
            var colsLen = cols.length;
            var loopLen = Math.ceil(cols.length / lineLen);
            var hArr = [];
            var currentLine;
            var innerH;
            var i;
            for(i = 0; i < colsLen; i++){
                currentLine = parseInt(i/lineLen);
                if(!hArr[currentLine]){
                    hArr[currentLine] = 0;
                    innerH = 0;

                }
                innerH = cols.eq(i).height();
                if(innerH > hArr[currentLine]) hArr[currentLine] = innerH;footerNav
            }

            for(i = 0; i < colsLen; i++){
                currentLine = parseInt(i/lineLen);
                cols.eq(i).css('height', hArr[currentLine] + 'px');
            }


        }

        function utillinkHeightInit(){
            if(footerNav.height() < utillink.height()){
                footerNav.css('height', ( utillink.height()-parseInt(footerNav.css('paddingBottom')) )+'px');
            }else{
                utillink.css('height', footerNav.innerHeight()+'px');
            }
            utillinkSize(8);
        }
        // -------------------------------------------- function --------------------------------------------


        init();

    };

} (jQuery));

var footerNavi;

/* Instantiates navigation on page ready */
$(function() {
    footerNavi = new ss.FooterNavi();
});/* END FILE */
/* global window, console, document, setTimeout, clearTimeout, matchMedia, eventBridge, ss, eventDictionary */
		ss.AccessibilityManager = function () {

				var tabsets = [],
						lastKbClick,
						currentFocusReturn = null, panel;

				/** 
				@function init
				**/
				var init = function() { 
					initNavigation();
					initTabs();

					eventBridge.on(eventDictionary.popover.EVENT_POPOVER_HIDE, function(e) {
						if (currentFocusReturn) {
							//console.log(currentFocusReturn);
							//currentFocusReturn.focus();
              setTimeout(function() {
							  currentFocusReturn = null;
              }, 100);
						}
					});

					// Distinguish keyboard and mouse events.
					$(document).on('keydown keyup', function(e) {
						if ((e.type === 'keydown' && e.keyCode === 13 /*ENTER*/) || (e.type === 'keyup' && e.keyCode === 32 /*SPACE*/)) {
								lastKbClick = (function() {return +new Date();})();
							}
					});
				};

				this.fromKeyboard = function($ev) {
					var newDate = (function() {return +new Date();})();

					return newDate < lastKbClick + 150;
				};


				var initNavigation = function() {
					var processed = false;	// To differentiate between [data-tab-next] and [data-tab-return], if applicable
					$(document.body).on('keydown', '[data-tab-next], [data-tab-previous], [data-enter-next], [data-tab-disable], [data-shifttab-disable]', function(e) {
						var tabTo = $('[data-focus-id="'+$(this).attr('data-tab-next')+'"]');
						var shiftTabTo = $('[data-focus-id="'+$(this).attr('data-tab-previous')+'"]');
						var enterTo = $('[data-focus-id="'+$(this).attr('data-enter-next')+'"]');
			            var tabDisable = $(this).attr('data-tab-disable');
			            var shiftTabDisable = $(this).attr('data-shifttab-disable');

			            tabDisable = (typeof tabDisable !== 'undefined' && tabDisable === 'true') ? true : false;
			            shiftTabDisable = (typeof shiftTabDisable !== 'undefined' && shiftTabDisable === 'true') ? true : false;

						if (tabTo.length < 1) {
							tabTo = null;
						}
						if (shiftTabTo.length < 1) {
							shiftTabTo = null;
						}
						if (enterTo.length < 1) {
							enterTo = null;
						}
						goHere(e, {
				              tabDisable:tabDisable,
				              shiftTabDisable:shiftTabDisable,
							  tab:tabTo, 
							  shiftTab:shiftTabTo,
							  enter:enterTo
						});
					});

					$(document.body).on('keydown', '[data-focus-return-to]', function(e) {
						currentFocusReturn = $('[data-focus-id="'+$(this).attr('data-focus-return-to')+'"]');

					});

					$(document.body).on( 'keydown', '[data-tab-next]', function(e) {
						if (e.keyCode === 9 || e.which === 9) {
							processed = true;
							currentFocusReturn = $('[data-focus-id="'+$(this).attr('data-tab-next')+'"]');
							if (currentFocusReturn) {
								var args = {
									tab:currentFocusReturn
								};
						
								goHere(e, args);
							}
						}
					});

					$(document.body).on('keydown', '[data-focus-return]', function(e) {
						if (!processed && currentFocusReturn) {
							var args = {
								tab:currentFocusReturn
							};
					
							goHere(e, args);
						}
					});
					$(document.body).on('keydown', '[data-focus-return-previous]', function(e) {
						if (!processed && currentFocusReturn) {
							var args = {
								shiftTab:currentFocusReturn
							};
					
							goHere(e, args);
						}
					});
					$(document.body).on('keydown', '[data-focus-return-keypress]', function(e) {
							var keydownKey = (typeof $(this).attr('data-focus-return-keypress') !== undefined ? ($(this).attr('data-focus-return-keypress')) : null),
									args = {};

							if (currentFocusReturn) {
								args[keydownKey] = currentFocusReturn;
								goHere(e, args);
							}
					});

					processed = false;
				};

				var initTabs = function() {
					var enterTimeout = null;

					$(document.body).on('keydown', '[role="tab"]', function(e) {

						clearTimeout(enterTimeout);
						enterTimeout = null;

						var code = e.keyCode || e.which;

						if (e.currentTarget !== e.target) {return;}

            //disables this functionality
            var autoFocusElem = $(this).closest('[data-auto-focus="false"]');
            if (autoFocusElem && autoFocusElem.length > 0 && autoFocusElem.attr('data-auto-focus') === 'false') {return;}

						panel = $('[data-focus-id="'+$(this).attr('data-controls')+'"]');

						//If there are multiple panels returned, check to see if they have a parent with [data-ignore-accessibility]...this is primarily for popovers where we have duplicated DOM elements
						panel.each(function() {
							var thisPanel = $(this);
							var ignore = thisPanel.closest('[data-ignore-accessibility]');

							if (ignore && ignore.length > 0) {
								return;
							} else {
								panel = thisPanel;
							}
						});

						if (!panel || panel.length < 1){ return;}

						//this check for display block is temporary
						//
            var tabTo = panel.find('[tabindex], a, button').first();

						if (code === 9 && panel.css('display') === 'block' && !e.shiftKey) {
							e.preventDefault();
							tabTo.focus();
							setTimeout(function() {
								tabTo.focus();
							}, 10);
						} else if (code === 13) {
							tabTo.focus();
							enterTimeout = setTimeout(function() {
								tabTo.focus();
							}, 100);
						}
					});
				};

				var releaseCurrentFocusReturn = function(elem) {
					if (elem && currentFocusReturn && elem[0] === currentFocusReturn[0]) {
						currentFocusReturn = null;
					}
				};

				var isHidden = function(elem) {
					return (elem.css('visibility') === 'hidden' || elem.css('display') === 'none');
				};
				var goHere = function(e, options) {
						var code = e.keyCode || e.which,
							tab = (typeof options.tab !== 'undefined' ? options.tab : null),
							shiftTab = (typeof options.shiftTab !== 'undefined' ? options.shiftTab : null),
							enter = (typeof options.enter !== 'undefined' ? options.enter : null),
							tabDisable = (typeof options.tabDisable !== 'undefined' ? options.tabDisable : null),
							shiftTabDisable = (typeof options.shiftTabDisable !== 'undefined' ? options.shiftTabDisable : null);

						if (e.currentTarget !== e.target) {return;}


						if (code === 9) {

              if (e.shiftKey && shiftTabDisable) {e.preventDefault(); return;}
              if (!e.shiftKey && tabDisable) {e.preventDefault(); return;}

							if (e.shiftKey && shiftTab && !isHidden(shiftTab)) {
								e.preventDefault();
								e.currentTarget.blur();
								shiftTab.focus();
								setTimeout(function() {
									shiftTab.focus();
								}, 50);
								releaseCurrentFocusReturn(shiftTab);
							} else if (tab && !e.shiftKey && !isHidden(tab)) {
								e.preventDefault();
								e.currentTarget.blur();
								tab.focus();
								setTimeout(function() {
									tab.focus();
								}, 50);
								releaseCurrentFocusReturn(tab);
							}
						} else if (code === 13 || code === 32) { //spacebar accounted for
							if (enter && !isHidden(enter)) {
								setTimeout(function() {
									enter.focus();
								}, 50);
								releaseCurrentFocusReturn(enter);
							}
						}
				};

				init();
		};
/* END FILE */
var ss = $;
/**  
Page object for the alert notifications.

@module Main
@submodule Notification
@submodule Popover
@main Main
    /**   
    @class $.Notification
    @constructor
    **/
/*global window, alert */

(function ($) {
  /* global eventBridge */
  /* global eventDictionary */
  /* global setTimeout: false */
  /* global clearTimeout */
	ss.Notification = function (containerId) {
		var $container;
		var $notification;
		var $notificationBg;

		function init() {
			$container = $('#' + containerId);
		}

		function show() {
			$notificationBg = $('<div class="notification-background"></div>').hide();
			$notification = $('<div id="open-notification" class="notification"><a class="close icon-close-x"></a></div>').hide();
			$notification.append($container.html());
			
			$notification.find('.close').on('click', hide);

			$('body').append($notificationBg).append($notification).css('overflow', 'hidden');
			$notificationBg.slideDown(function() {
				$notification.fadeIn('fast');
			});
		}

		function hide() {
			$notification.fadeOut('fast', function() {
				$notificationBg.slideUp('fast', function() {
					$notification.remove();
					$notificationBg.remove();
					$('body').css('overflow', '');
				});
			});
		}

		init();

		return {
			show: show,
			hide: hide
		};
	};
    /**   
    @class $.Popover
    @constructor
    **/
	ss.Popover = function (targetElementSelector, options) {
		var $targetElement;
	    var lastActionWasKb;
	    var focusTimeout = null;
	    var self = this;
	    var visible = false;
	    this.targetElementSelector = targetElementSelector;
	    this.hideOnScroll = (options.hideOnScroll === true);
		this.interOp2Show = options['interOp2Show'];
		this.interOp2Hide = options['interOp2Hide'];
		this.tapProtect = options['tapProtect'];

		function handlefocusOnHideDefault() {
	        //$targetElement.focus();
	        var popTimeout = setTimeout(function() {
	        	clearTimeout(popTimeout);
	         	$targetElement.focus();
	        }, 50);
		}

		function handlefocusOnShowDefault() {
	        if (focusTimeout) {
	          clearTimeout(focusTimeout);
	        }
        	//$elem.focus();
	        focusTimeout = setTimeout(function() {
	          var $elem = $('.popover.in .popover-content').find('button, a, input, select, [tabindex]').first();
	          $elem.focus();

			  

	        }, 100);
		}

		function init() {
			options.hoverActivated = true;
			options.handleFocusOnHide = typeof(options.handleFocusOnHide) === 'function' ? options.handleFocusOnHide : handlefocusOnHideDefault;
			options.handleFocusOnShow = typeof(options.handleFocusOnShow) === 'function' ? options.handleFocusOnShow : handlefocusOnShowDefault;

			try {
				$targetElement = $(targetElementSelector);
			}
			catch ( e  ){
				$targetElement = $(document.getElementById(targetElementSelector.substr(1)));
			}
			$targetElement.popover(options);
			
			$targetElement.on('show.bs.popover', function(ev) {
				if ( !!self.interOp2Show && (typeof(self.interOp2Show)=='function') ) {
					self.interOp2Show(self);
				}
				else {
					ss.Popover.hideActive(ev);
					eventBridge.trigger(jQuery.Event(eventDictionary.popover.EVENT_POPOVER_SHOW), this);
					lastActionWasKb = ss.accessibilityManager.fromKeyboard(ev);
				}
			});

			$targetElement.on('hidden.bs.popover', function(ev) {
				if ( !!self.tapProtect ) {
					if ( !!self.interOp2Hide && (typeof(self.interOp2Hide)=='function') ) {
						self.interOp2Hide(self);
					}
					visible = false;
					return;
				}
				else {
					ss.Popover.activePopover = undefined;
					eventBridge.trigger(jQuery.Event(eventDictionary.popover.EVENT_POPOVER_HIDE), this);
					visible = false;
				}
			});

			$targetElement.on('shown.bs.popover', function() {
				ss.Popover.activePopover = self;
			    if (lastActionWasKb) {
			    	options.handleFocusOnShow();
			    }
          		visible = true;
			});

			if(options.lightbox) {
				$targetElement.on('shown.bs.popover', function() {
					var container = containerP = $('.popover.in');
					if ( options.container ) {
						container = $(options.container).find('.popover.in');
						containerP = $(options.container);
					}

					container.addClass('lightbox');

					container.find('.arrow').hide();
					$('.lightbox-skrim').remove(); // ADD ADNStyle
					$('body').append('<div class="lightbox-skrim"></div>');
					
					var winMaxWidth = $(window).outerWidth();
					if ( (winMaxWidth > 1280)  && ( navigator.userAgent.indexOf('MSIE 8') != -1) ) {
						winMaxWidth = 1280;
					}
					var scrollTop = $(window).scrollTop();
                    var targetTop = scrollTop + Math.round(($(window).outerHeight() - container.outerHeight())/2);
                    if(targetTop < 0) targetTop = 0;
                    else if(targetTop < scrollTop) targetTop = scrollTop;
					container.css({
						'left': (-1 * container.parent().offset().left) + Math.round((winMaxWidth - container.outerWidth())/2),
						'top': targetTop
					});
				});
			}

      		//this is so the popover repositions on device rotation
			eventBridge.on(eventDictionary.global.RESIZE, function(e) {
		        if (visible) {
		          var repositioning = setTimeout(function() {
		          	clearTimeout(repositioning);
		            // self.show();
					var isOnSoftKeyboard = false;
					if ( document.activeElement ) {
						if ( document.activeElement.tagName.toLowerCase() == 'textarea' ) {
							isOnSoftKeyboard = true;
						}
						else if ( document.activeElement.tagName.toLowerCase() == 'input' ) {
							if ( document.activeElement.type.toLowerCase() == 'text' ) {
								isOnSoftKeyboard = true;
							}
						}
					}
					if ( !isOnSoftKeyboard && (navigator.userAgent.indexOf('MSIE 8')==-1) ) {
						$targetElement.popover('reposition');
					}
		            //eventBridge.trigger(jQuery.Event(eventDictionary.popover.EVENT_POPOVER_SHOW), self);
		          }, 400);
		        }
			});
		}

		this.toggle = function() {
			$targetElement.popover('toggle');
		};

		this.showOnly = function() {
			$targetElement.popover('showOnly');
			visible = true;
		};
		this.show = function() {
			$targetElement.popover('show');
		};

		this.hide = function(handleFocus, ev) {
			if ( !!self.tapProtect ) {
				if ( ev === true ) {
					$targetElement.popover('hide');
					if (handleFocus) {
						options.handleFocusOnHide();
					}
				}
			}
			else {
				$targetElement.popover('hide');
				if (handleFocus) {
					options.handleFocusOnHide();
				}
			}
		};

		init();

		return this;
	};

    // ss.Popover.activePopover;
	ss.Popover.handleKbActions = function(ev) {
		if(ev.which === 27 /*ESC*/) {
			ss.Popover.hideActive(true);
		} else if (ev.which === 9 /*TAB*/) {
			var kbAction = setTimeout(function() {
				clearTimeout(kbAction);
				if (!$(':focus').parents('.popover.in').length) {
					// Tabbed out of the active popover
					ss.Popover.hideActive(true);
				}
			}, 100);
		}
	};

	ss.Popover.hideActive = function() {
		var ev = arguments[0];
		var obj = arguments[1];
		if (typeof(ev)=='boolean') {
			if ( typeof(obj)=='object') {
				if ( !obj.parents ) {
					if ( $('.show.popover.in')[0] && $('.show.popover.in')[0].chainObj ) {
						$('.show.popover.in')[0].chainObj.hideOnly(true);
					}
					else {
						if ( ss.Popover.activePopover ) {
							ss.Popover.activePopover.hide(ev === true, obj);
						}
					}
					//$('.show.popover.in').removeClass('in').remove();
				}
				else {
					if ( obj.parents('.popover.in')[0] && obj.parents('.popover.in')[0].chainObj ) {
						obj.parents('.popover.in')[0].chainObj.hideOnly(true);
					}
					/*
					if ( ss.Popover.activePopover ) {
						ss.Popover.activePopover.hide(ev === true, false);
					}
					*/
				}
				$('.lightbox-skrim').remove();
				
				return;
			}
		}
		else if (!ss.Popover.activePopover) {
			return;
		} else if ((ev.type === 'scroll' || ev.type === 'resize') && $('html').hasClass('touch')) {
			// Event is scroll or resize and device is touch, in which case we need to ignore the event.
			return;
		} else if ((ev.type === 'scroll' || ev.type === 'resize') && ($('.popover.in').hasClass('lightbox') || $('.popover.in').attr('data-tap-scroll-override'))) {
			// Event is scroll or resize and using lightbox, in which case we need to ignore the event.
			return;
		} else if($('.popover.in').hasClass('lightbox') && !$(ev.target).is('.lightbox-skrim') && $(ev.target).is('.close-button')) {
			// If using lightbox, ignore events on skrim (and html backdrop), but not on close button
			return;
		}

		if (ev === true || 
				ev.type === 'resize' || 
				(ev.type === 'scroll' && ss.Popover.activePopover.hideOnScroll) ||
				(ev.type !== 'scroll' && ev.type !== 'resize' && $(ev.target).closest('.popover, ' + ss.Popover.activePopover.targetElementSelector).length === 0)) {
			$('.lightbox-skrim').remove();
			ss.Popover.activePopover.hide(ev === true, ev);
		}
	};

	$(function() {
		$('body').on('tap', function(ev){
			ss.Popover.hideActive(ev);
		});


		$('.scrollwrapper').on('scroll', function(ev){
			ss.Popover.hideActive(ev);
		});
		//$(window).on('resize', function(ev){
		//	ss.Popover.hideActive(ev);
		//});

		$('body').on('keydown', '.popover.in', function(ev){
			ss.Popover.handleKbActions(ev);
		});

		$('body').on('click', '.popover.in .close-button,.icon-close-x:not(.hide-parent)', function(ev) {
			if ( $(this).parents('.popover.in')[0] && $(this).parents('.popover.in')[0]['chainObj'] )  {
				ss.Popover.hideActive(true, $(this));
			}
			else {
				ss.Popover.hideActive(true, ev);
			}
		});

		$('body').on('click', '.popover.in .y_btnMore', function() {
			  $(this).parent().find('ul').height('100%');
			  $(this).hide();
		});
	});
} (jQuery));
/* END FILE */
var ss = $;
/**[ -- FILE: benefit.js -- **/
/**
 Main object for Benefit module.

 @module Main
 @submodule Benefit
 @main Main
 **/
/* global setInterval, clearInterval, window, eventBridge, eventDictionary, Modernizr, document, navigator, console, setTimeout, clearTimeout, alert */

(function ($) {

    /**
     @class $.Benefit
     @constructor
     @param {Object} settings - External object settings passed into the object.
     **/
    ss.Benefit = function(settings) {

        /**
         Main module container.
         @property container
         **/
        var container = settings.container;

        /**
         Video support flag.
         @property supportsVideo
         **/
        var	supportsVideo = Modernizr.video;

        /**
         Low bandwidth flag.
         @property isLowBandwidth
         **/
        var	isLowBandwidth = $('body').hasClass('lowbandwidth');

        /**
         Touch screen flag.
         @property isTouch
         **/
        var isTouch = Modernizr.touch;

        /**
         Animation flag.  Set to true while benefit features are animating.
         @property isAnimating
         **/
        var	isAnimating = false;

        /**
         Play button reference.  Used on mobile where auto play is disabled.
         @property playButton
         **/
        var	playButton = container.find('.play-button');

        /**
         Feature containers.
         @property features
         **/
        var	features = container.find('.feature');

        /**
         Array to hold feature objects.
         @property featureObjects
         **/
        var	featureObjects = [];

        /**
         Benefit carousel controls.
         @property controls
         **/
        var	controls = container.find('.controls');

        /**
         Reference to only the dots controls.
         @property dotsContainer
         **/
        var	dotsContainer = container.find('.dots');

        /**
         Reference to the previous (left) arrow.
         @property prevArrow
         **/
        var	prevArrow = container.find('.arrow.prev');

        /**
         Reference to the next (right) arrow.
         @property nextArrow
         **/
        var	nextArrow = container.find('.arrow.next');

        /**
         Index of the current page of the benefit carousel.
         @property currentPage
         **/
        var	currentPage = 0;

        /**
         Index of the previous page of the benefit carousel.
         @property previousPage
         **/
        var	previousPage = 0;

        /**
         Number of pages in the benefit carousel.
         @property numPages
         **/
        var	numPages = features.length;

        /**
         Current layout reported by the browser.
         @property currentLayout
         **/
        var	currentLayout = ss.metrics.device;

        /**
         Current height of the module container.
         @property currentContainerHeight
         **/
        var	currentContainerHeight = 0;

        /**
         Timeout used for creating a throttle on position checking.
         @property checkPositionTimer
         **/
        var checkPositionTimer = null;

        /**
         Reference to the animation player tag.
         @property animationPlayer
         **/
        var animationPlayer = container.find('.animation-player');

        /**
         @function init
         Initialization function, executed on object instantiation.
         **/
        function init() {
            setupControls();

            if (container.data('ignore') === true) {
                return false;
            }

            // For each feature in the benefit, create the appropriate feature object.
            features.each(function(i, el) {
                if(isTouch) {
                    featureObjects.push(new ss.Benefit.FeatureMobile({index: i, container: $(el), parentContainer: container, animationPlayer: animationPlayer, playButton: playButton, innerCopy: $(container.children('.inner.copy')[i]), controls: controls, featureAnimatingCB: featureAnimatingCB}));
                } else {
                    featureObjects.push(new ss.Benefit.FeatureDesktop({index: i, container: $(el), parentContainer: container, animationPlayer: animationPlayer, innerCopy: $(container.children('.inner.copy')[i]), controls: controls, featureAnimatingCB: featureAnimatingCB}));
                }

            });

            bindEvents();
            initControls(false, true);
        }
        init();

        /**
         @function featureAnimatingCB
         Callback for feature modules to toggle the isAnim flag.
         @param {Boolean} isAnim - Flag toggle value.
         **/
        function featureAnimatingCB(isAnim) {
            isAnimating = isAnim;
        }

        /**
         @function setupControls
         Setup the benefit carousel controls.
         **/
        function setupControls() {
            if(numPages > 1) {
                var ul = $('<ul></ul>');

                // Create a dot for each feature in the benefit.
                features.each(function(i) {
                    var li = $('<li data-page="' + i + '"><a href="javascript:void(0);">Slide ' + (i + 1) + '</a></li>');
                    ul.append(li);
                });

                dotsContainer.append(ul);
            }
        }

        /**
         @function bindEvents
         Bind various events needed by this object.
         **/
        function bindEvents() {
            sizeContainer(ss.metrics);
            checkPosition(null, ss.metrics);

            // When the user scrolls, check position to see if the benefit is in view.
            eventBridge.on(eventDictionary.global.SCROLL, checkPosition);

            // When the user resizes the browser, check to see if the layout has changed.
            eventBridge.on(eventDictionary.global.RESIZE, function(e, metrics) {

                var timeout=setTimeout(function(){
                    sizeContainer(metrics);

                    if(ss.metrics.device !== currentLayout) {
                        currentLayout = ss.metrics.device;

                        $.each(featureObjects, function(i) {
                            this.reinit();
                        });
                    }
                    checkPosition(null,metrics);
                    clearTimeout(timeout);
                },200);

            });

            // Apply a click listener to the dot controls.
            dotsContainer.on('fastclick', 'li', function() {
                if(isAnimating){
                    return;
                }
                if(!$(this).hasClass('current')) {
                    previousPage = currentPage;
                    currentPage = Number($(this).attr('data-page'));

                    var crossFade = false;

                    if(Math.abs(currentPage - previousPage) > 1) {
                        crossFade = true;
                    }

                    featureObjects[currentPage].setMostRecentActiveElement();
                    initControls(crossFade, false);
                }
            });

            // Apply a click listener to the previous arrow control.
            prevArrow.on('fastclick', function() {
                if(isAnimating){
                    return;
                }
                previousPage = currentPage;

                if(currentPage === 0) {
                    currentPage = numPages - 1;
                } else {
                    currentPage--;
                }

                featureObjects[currentPage].setMostRecentActiveElement();
                initControls(false, false);
            });

            // Apply a click listener to the next arrow control.
            nextArrow.on('fastclick', function() {
                if(isAnimating){
                    return;
                }
                previousPage = currentPage;

                if(currentPage === numPages - 1) {
                    currentPage = 0;
                } else {
                    currentPage++;
                }

                featureObjects[currentPage].setMostRecentActiveElement();
                initControls(false, false);
            });

            // On touch devices, apply the swipe listeners.
            if(isTouch){
                container.swipe({
                    swipeLeft: function(event, direction, distance, duration, fingerCount) {
                        if(currentPage < numPages - 1 && !isAnimating) {
                            previousPage = currentPage;

                            currentPage++;

                            initControls(false, false);
                        }
                    },
                    swipeRight: function(event, direction, distance, duration, fingerCount) {
                        if(currentPage > 0 && !isAnimating) {
                            previousPage = currentPage;

                            currentPage--;

                            initControls(false, false);
                        }
                    },
                    excludedElements: '',
                    threshold: 200,
                    pdpWowScroll:true
                });
            }
        }

        /**
         @function sizeContainer
         Global resize event callback, used to resize the module container.
         @param {Object} metrics - Object containing current metrics values.
         **/
        function sizeContainer(metrics) {
            var device = ss.metrics.device;
            var ratio;

            // Height/Width ratios determined based on video sizes.
            switch(device) {
                case 'mobile':
                    // 572/400
                    ratio = 1.43;
                    break;
                case 'mobile-landscape':
                    // 332/640
                    ratio = 0.51875;
                    break;
                case 'tablet-portrait':
                    // 1144/800
                    ratio = 1.43;
                    break;
                case 'tablet-landscape':
                    // 664/1280
                    ratio = 0.51875;
                    break;
                case 'desktop':
                    // 996/1920
                    ratio = 0.51875;
                    break;
            }

            // Set the container height equal to the width times the appropriate ratio.
            currentContainerHeight = container.width() * ratio;
            container.height(currentContainerHeight);
        }

        /**
         @function isInView
         Helper function containing the math to determine if the module is in view or not.
         @param {Object} m - Metrics values.
         **/
        function isInView (m) {
            var elemTop = ss.metrics.elemTop(container);
            if(ss.metrics.scrollBottom > (elemTop + (currentContainerHeight * 0.5)) &&
                ss.metrics.scrollTop < elemTop + (currentContainerHeight * 0.5)) {
                return true;
            }
            return false;
        }

        /**
         @function checkPosition
         Global scroll event callback.
         @param {Event} e - Event.
         @param {Object} metrics - Object containing current metrics values.
         **/
        function checkPosition(e, metrics) {

            if (checkPositionTimer) {
                clearTimeout(checkPositionTimer);
                checkPositionTimer = null;
            }

            // Position checking will only initialize the objects if the user waits over the module for 500ms.
            if (isInView(metrics)) {
                checkPositionTimer = setTimeout((function(m) {
                    return function theTimer(last) {
                        $.each(featureObjects, function(i) {
                            this.init();
                        });

                        clearTimeout(checkPositionTimer);
                        checkPositionTimer = null;

                    };
                })(metrics), 500);
            } else {
                checkPositionTimer = setTimeout(function() {
                    clearTimeout(checkPositionTimer);
                    $.each(featureObjects, function(i) {
                        if (this.promoVideoIsShowing()){
                            this.reposition();
                        }
                        this.deactivate();
                    });
                }, 10);
            }
        }
        function checkNext(){
            if (currentPage===0){
                nextArrow.children('.text').removeClass('blind');
                nextArrow.addClass('show-text');
            } else {
                nextArrow.children('.text').addClass('blind');
                nextArrow.removeClass('show-text');
            }
        }
        /**
         @function initControls
         Function which checks carousel position and initializes the controls.
         @param {Boolean} crossFade - Determines if the initializtion will result in a cross fade.
         @param {Boolean} initialInit - Flag determinining if this is the first init.
         **/
        function initControls(crossFade, initialInit) {
            checkNext();
            var dots = dotsContainer.find('li');
            dots.removeClass('current');
            $(dots[currentPage]).addClass('current');
            if(numPages === 1) {
                prevArrow.hide();
                nextArrow.hide();
            } else {
                if(currentPage === 0) {
                    prevArrow.hide();
                    nextArrow.show();
                } else if(currentPage === (numPages - 1)) {
                    prevArrow.show();
                    nextArrow.hide();
                } else {
                    prevArrow.show();
                    nextArrow.show();
                }
            }

            initObjects(crossFade, initialInit);
        }

        /**
         @function initObjects
         Function which initializes the appropriate feature objects.
         @param {Boolean} crossFade - Determines if the initializtion will result in a cross fade.
         @param {Boolean} initialInit - Flag determinining if this is the first init.
         **/
        function initObjects(crossFade, initialInit) {
            if(previousPage !== currentPage) {
                featureObjects[previousPage].hide(crossFade);
            }
            featureObjects[currentPage].show(crossFade, initialInit);
        }
    };

    /**
     @class $.Benefit.FeatureDesktop
     This is the feature object used on desktop browsers.
     @constructor
     @param {Object} settings - External object settings passed into the object.
     **/
    ss.Benefit.FeatureDesktop = function(settings) {

        /**
         Container for this feature object.
         @property container
         **/animationPlayer
        var	container = settings.container;

        /**
         Index of the object to determine if it is the first.
         @property index
         **/
        var index = settings.index;

        /**
         Reference to the parent's container.
         @property parentContainer
         **/
        var	parentContainer = settings.parentContainer;

        /**
         Benefit carousel controls.
         @property controls
         **/
        var	controls = settings.controls;

        /**
         Callback for feature modules to toggle the isAnim flag.
         @property featureAnimatingCB
         **/
        var	featureAnimatingCB = settings.featureAnimatingCB;

        /**
         Static end frame of the animation sequence, or during fallback.
         @property staticFrame
         **/
        var	staticFrame = container.find('.static-frame');

        /**
         Copy to be shown at the end of animation sequence, or during fallback.
         @property innerCopy
         **/
        var	innerCopy = settings.innerCopy;

        /**
         Initialization flag.
         @property isInit
         **/
        var	isInit = false;

        /**
         Flag for determining if the benefit is inview.
         @property isInViefallbackModew
         **/
        var	isInView = false;

        /**
         Flag for determining if the feature is active.
         @property isActive
         **/
        var	isActive = false;

        /**
         Referance to the animation player.
         @property animationPlayer
         **/
        var	animationPlayer = settings.animationPlayer;

        /**
         Referance to the animation player container.
         @property animationPlayerContainer
         **/
        var	animationPlayerContainer = container.find('.animation-player-container');

        /**
         Video player.
         @property video
         **/
        var	video = animationPlayer;

        /**
         Video player tag.
         @property videoTag
         **/
        var	videoTag = video.get(0);

        /**
         Video loading flag.
         @property videoIsLoading
         **/
        var	videoIsLoading = false;

        /**
         Video playing flag.
         @property videoIsPlaying
         **/
        var	videoIsPlaying = false;

        /**
         Video paused flag.
         @property videoIsPaused
         **/
        var	videoIsPaused = false;

        /**
         Video has played flag.
         @property videoHasPlayed
         **/
        var	videoHasPlayed = false;

        /**
         Flag for determining if video is supported.
         @property supportsVideo
         **/
        var	supportsVideo = Modernizr.mq('only all');

        /**
         Flag for determining if in low bandwidth mode.
         @property isLowBandwidth
         **/
        var	isLowBandwidth = $('body').hasClass('lowbandwidth');

        /**
         Reference to promo (brightcove) video play button.
         @property promoVideoPlayButton
         **/
        var	promoVideoPlayButton = $('#' + container.data('promo-video-play-button-id'));

        /**
         Reference to promo (brightcove) video.
         @property promoVideo
         **/
        var	promoVideo = $('.benefit-promo-video[data-benefit-promo-video=' + promoVideoPlayButton.data('target-video') + ']');

        /**
         Reference to promo (brightcove) video object.
         @property promoVideoObject
         **/
        var	promoVideoObject = promoVideo.find('.BrightcoveExperience');

        /**
         Flag for determining if promo video is showing.
         @property promoVideoIsShowing
         **/
        var	promoVideoIsShowing = false;

        /**
         Reference to most recent active element for accessibility.
         @property mostRecentActiveElement
         **/
        var	mostRecentActiveElement = null;

        /**
         Preveious feature's static frame.
         @property previousFeatureStaticFrame
         **/
        var	previousFeatureStaticFrame = container.prevAll('.feature').find('.static-frame');

        /** 2014-04-25
         Flag for defining the benefit fallback mode (no video).  Based on other variables.
         @property fallbackMode
         **/
        var	fallbackMode = (!animationPlayer.length) || (!supportsVideo) || isLowBandwidth;

        /**
         Setup function, executed on object instantiation.
         @property setup
         **/
        function setup() {
            if(index === 0) {
                staticFrame.css({opacity: 1});
                innerCopy.css({visibility:'visible', opacity: 1});
            }

            positionPromoVideo();
        }
        setup();

        /**
         @function bindEvents
         Bind various events needed by this object.
         **/
        function bindEvents() {
            // Promo (Brightcove) video events only needed if this benefit contains one.
            if(promoVideo.length > 0) {
                eventBridge.on(eventDictionary.videoPlayer.EVENT_SHOW_VIDEO, function() {
                    promoVideoIsShowing = true;
                });

                eventBridge.on(eventDictionary.videoPlayer.EVENT_HIDE_VIDEO, function() {
                    promoVideoIsShowing = false;
                });
            }
        }
        bindEvents();

        /**
         @function loadVideo
         Function to begin video loading sequence.
         **/
        function loadVideo() {
            videoIsLoading = true;

            previousFeatureStaticFrame.css({opacity: 1});

            if(ss.metrics.isIE()) {
                var canPlayEventFlag = false;
                var canPlayTimeout;

                videoTag.addEventListener('canplay', function() {
                    canPlayEventFlag = true;
                    clearTimeout(canPlayTimeout);

                    canPlay();
                });

                canPlayTimeout = setTimeout(function() {
                    clearTimeout(canPlayTimeout);

                    if(!canPlayEventFlag) {
                        videoTag.load();
                    }
                }, 5000);
            } else {
                videoTag.addEventListener('canplay', canPlay);
            }

            animationPlayerContainer.append(animationPlayer);
            setSrc();
        }

        /**
         @function setSrc
         Sets the source attribute to the current video element.
         **/
        function setSrc(){
            var device = ss.metrics.device;

            if(ss.metrics.width >= 768 && ss.metrics.width < 1024) {
                device = 'tablet-portrait';
            }

            var mpegSrc = animationPlayerContainer.data('src-mpeg-' + device),
                webmSrc = animationPlayerContainer.data('src-webm-' + device);

            // FOR REFERENCE ONLY 
            var winLoc =  document.domain,
                appDetect = navigator.appName,
                testSite = 'samsung-test.web.rga.com',
                stageSite = 'samsung-stg.web.rga.com';

            // remove src before setting src
            video.removeAttr('src');
            video.removeAttr('preload');

            // FOR REFERENCE ONLY 
            if (winLoc === testSite && !ss.metrics.isIE()) {
                video.children('[data-src-type="mpeg"]').attr('src','http://admin:ekVoszaj2@samsung-test.web.rga.com' + mpegSrc);
                video.children('[data-src-type="webm"]').attr('src','http://admin:ekVoszaj2@samsung-test.web.rga.com' + webmSrc);
            } else if (winLoc === stageSite && !ss.metrics.isIE()) {
                video.children('[data-src-type="mpeg"]').attr('src','http://admin:Iatiadaiv1@samsung-stg.web.rga.com' + mpegSrc);
                video.children('[data-src-type="webm"]').attr('src','http://admin:Iatiadaiv1@samsung-stg.web.rga.com' + webmSrc);
            } else if (ss.metrics.isIE() && device === 'tablet-portrait') {
                video.children('[data-src-type="mpeg"]').attr('src',animationPlayerContainer.data('src-mpeg-mobile'));
                video.children('[data-src-type="webm"]').attr('src',animationPlayerContainer.data('src-webm-mobile'));
            } else {
                // USE THIS IMPLEMENTATION FOR NON AUTHENTICATED PAGES
                video.children('[data-src-type="mpeg"]').attr('src',mpegSrc);
                video.children('[data-src-type="webm"]').attr('src',webmSrc);
            }

            if(ss.metrics.isIE()) {
                videoTag.load();
            }
        }

        /**
         @function canPlay
         Removes the canplay event, sets the video currentTime to 0 and plays the video if this module is active.
         **/
        function canPlay() {
            videoTag.removeEventListener('canplay', canPlay);
            videoIsLoading = false;
            pauseVideo();

            videoTag.currentTime = 0;

            if(isActive) {
                playVideo();
            }
        }

        /**
         @function pauseVideo
         Pause the video.
         @param {Boolean} removeSrc - Flag to determine if src attribute should be removed.
         **/
        function pauseVideo(removeSrc) {
            removeSrc = typeof removeSrc !== 'undefined' ? removeSrc : false;
            videoTag.pause();
            videoIsPaused = true;
            if (removeSrc) {
                videoTag.removeAttribute('src');
            }
        }

        /**
         @function playVideo
         Play the video.  Handles various related operations such as hiding controls and static content.
         **/
        function playVideo() {
            previousFeatureStaticFrame.css({opacity: 0});

            videoTag.addEventListener('ended', videoEnded);
            $(document).on('keydown', function(e) {
                if (e.which === 9 && !e.shiftKey) {
                    e.preventDefault();
                    return false;
                }
            });

            featureAnimatingCB(true);
            hideControls();
            showVideo();
            staticFrame.css({opacity: 0});
            innerCopy.animate({opacity: 0}, 250, function() {innerCopy.css('visibility', 'hidden');});

            videoIsPlaying = true;
            videoTag.play();

            videoIsPaused = false;

        }

        /**
         @function updateFocus
         Helper function for accessibility.
         **/
        function updateFocus() {
            if (mostRecentActiveElement && (parentContainer[0] === mostRecentActiveElement || $.contains(parentContainer[0], mostRecentActiveElement))) {
                innerCopy.focus();
                setTimeout(function() {
                    innerCopy.focus();
                }, 200);
            }
            mostRecentActiveElement = null;
        }

        /**
         @function videoEnded
         Callback for when video ends.  Handles displaying the static content and cleaning up.
         **/
        function videoEnded() {
            videoTag.removeEventListener('ended', videoEnded);

            videoHasPlayed = true;

            videoIsPlaying = false;
            pauseVideo();
            staticFrame.css({opacity: 1});
            innerCopy.css('visibility', 'visible').animate({opacity: 1}, 250);

            showPromoVideoPlayButton();

            var endedTimeout = setTimeout(function() {
                clearTimeout(endedTimeout);
                hideVideo();
                showControls();
                featureAnimatingCB(false);
            }, 1000);

            $(document).off('keydown');
            innerCopy.focus();
            updateFocus();
        }

        /**
         @function showControls
         Show the controls.
         **/
        function showControls() {
            controls.animate({
                opacity: 1
            }, 250)
                .removeClass('cursor-default');
        }

        /**
         @function hideControls
         Hide the controls.
         **/
        function hideControls() {
            controls.animate({
                opacity: 0
            }, 250)
                .addClass('cursor-default');

            promoVideoPlayButton.hide();
        }

        /**
         @function showPromoVideoPlayButton
         Show the promo (Brightcove) video play button.
         **/
        function showPromoVideoPlayButton() {
            promoVideoPlayButton.css({opacity: 1}).show();
        }

        /**
         @function hidePromoVideoPlayButton
         Hide the promo (Brightcove) video play button.
         **/
        function hidePromoVideoPlayButton() {
            promoVideoPlayButton.css({opacity: 0}).hide();
        }

        /**
         @function showVideo
         Show the video.
         **/
        function showVideo() {
            video.show();
            animationPlayerContainer.show();
        }

        /**
         @function hideVideo
         Hide the video.
         **/
        function hideVideo() {
            video.hide();
            animationPlayerContainer.hide();
        }

        /**
         @function positionPromoVideo
         Position the promo (Brightcove) video.
         **/
        function positionPromoVideo() {
            if(promoVideo.length > 0) {

                var device = ss.metrics.device;
                var ratio;

                switch(device) {
                    case 'mobile':
                        ratio = 1.43;
                        break;
                    case 'mobile-landscape':
                        ratio = 0.51875;
                        break;
                    case 'tablet-portrait':
                        ratio = 1.43;
                        break;
                    case 'tablet-landscape':
                        ratio = 0.51875;
                        break;
                    case 'desktop':
                        ratio = 0.51875;
                        break;
                }
                var toHeight=promoVideo.width() * ratio;
                var containerHeight=container.height();
                if (toHeight > containerHeight && containerHeight!==0) {
                    toHeight = containerHeight;
                }

                promoVideo.height(toHeight);
                var promoVideoClose=promoVideo.children('.close-video-bar');

                promoVideoObject.height(toHeight-promoVideoClose.height());
                //promoVideo.css({'top': ss.metrics.elemTop(container)});
                promoVideo.css({'top': container.parent()[0].offsetTop});
            }
        }

        /**
         @function init
         Public function to initialize the feature object when it comes in view.
         **/
        this.init = function() {
            if(!fallbackMode && supportsVideo && !isLowBandwidth && !videoIsLoading && !videoIsPlaying && !videoHasPlayed && isActive) {
                if ( animationPlayerContainer.length > 0 ) {
                    hideControls();
                    isInit = true;
                    isInView = true;
                    loadVideo();
                }
                else {
                    isInit = true;
                    isInView = true;
                }
            } else if(videoIsPlaying && isActive) {
                videoTag.play();
            }

            if(promoVideo.length > 0 && promoVideoIsShowing) {
                $(eventBridge).trigger(eventDictionary.videoPlayer.EVENT_UNPAUSE_VIDEO);
            }

            positionPromoVideo();
        };

        /**
         @function deactivate
         Public function to deactive the feature object when it leaves view.
         **/
        this.deactivate = function () {
            isInView = false;
            if(!fallbackMode && supportsVideo && !isLowBandwidth && isActive) {
                if(videoIsPlaying && !videoIsPaused) {
                    pauseVideo(true);
                }
            }

            if(promoVideo.length > 0 && promoVideoIsShowing) {
                $(eventBridge).trigger(eventDictionary.videoPlayer.EVENT_PAUSE_VIDEO);
            }
        };

        /**
         @function reinit
         Public function to reinit the feature object when the layout changes.
         **/
        this.reinit = function() {
            if(isInit && isActive && isInView) {
                videoIsPlaying = false;
                videoHasPlayed = false;
                this.init();
            }
        };

        /**
         @function show
         Public function to show the feature object when selected in the benefit carousel.
         @param {Boolean} crossFade - Flag to determine if this operation should include a crossfade.
         @param {Boolean} initialShow - Flag to determine if this is the first time shown.
         **/
        this.show = function(crossFade, initialShow) {
            isActive = true;

            if((crossFade && !fallbackMode && supportsVideo && !isLowBandwidth) || (!fallbackMode && supportsVideo && !initialShow && !isLowBandwidth)) {
                if ( animationPlayerContainer.length > 0 ) {
                    hideControls();
                    loadVideo();
                }
                else {
                    videoEnded();
                }
            } else if(crossFade || fallbackMode || !supportsVideo || isLowBandwidth) {
                featureAnimatingCB(true);

                staticFrame.animate({opacity: 1}, 250);
                innerCopy.css('visibility', 'visible').animate({opacity: 1}, 250, function() {
                    featureAnimatingCB(false);
                });
            }
        };

        /**
         @function hide
         Public function to hide the feature object when deselected in the benefit carousel.
         @param {Boolean} crossFade - Flag to determine if this operation should include a crossfade.
         **/
        this.hide = function(crossFade) {
            isActive = false;

            if(crossFade && !fallbackMode && supportsVideo) {
                featureAnimatingCB(true);

                staticFrame.animate({opacity: 0}, 250);
                innerCopy.animate({opacity: 0}, 250, function() {innerCopy.css('visibility', 'hidden');});
            } else if(crossFade || fallbackMode || !supportsVideo || isLowBandwidth) {
                featureAnimatingCB(true);

                staticFrame.animate({opacity: 0}, 250);
                innerCopy.animate({opacity: 0}, 250, function() {
                    featureAnimatingCB(false);
                    innerCopy.css('visibility', 'hidden');
                });
            } else {
                staticFrame.css({opacity: 0});
                innerCopy.css({opacity: 0, 'visibility': 'hidden'});
                hideVideo();
            }

            hidePromoVideoPlayButton();

        };

        /**
         @function setMostRecentActiveElement
         Public helper function used for setting mostRecentActiveElement accessibility flag.
         **/
        this.setMostRecentActiveElement = function() {
            mostRecentActiveElement = document.activeElement;
        };

        /**
         @function promoVideoIsShowing
         Public helper function used for getting promoVideoIsShowing flag.
         **/
        this.promoVideoIsShowing = function(){
            return promoVideoIsShowing;
        };

        /**
         @function reposition
         Public helper function used for forcing the promo video to reposition.
         **/
        this.reposition = function(){
            positionPromoVideo();
        };
    };

    /**
     @class $.Benefit.FeatureMobile
     This is the feature object used on mobile browsers.
     @constructor
     @param {Object} settings - External object settings passed into the object.
     **/
    ss.Benefit.FeatureMobile = function(settings) {

        /**
         Container for this feature object.
         @property container
         **/
        var	container = settings.container;

        /**
         Index of the object to determine if it is the first.
         @property index
         **/
        var index = settings.index;

        /**
         Reference to the parent's container.
         @property parentContainer
         **/
        var	parentContainer = settings.parentContainer;

        /**
         Play button reference.  Used on mobile where auto play is disabled.
         @property playButton
         **/
        var	playButton = settings.playButton;

        /**
         Benefit carousel controls.
         @property controls
         **/
        var	controls = settings.controls;

        /**
         Benefit carousel dots.
         @property controls
         **/
        var	dots = controls.not('.arrow');

        /**
         Callback for feature modules to toggle the isAnim flag.
         @property featureAnimatingCB
         **/
        var	featureAnimatingCB = settings.featureAnimatingCB;

        /**
         Static end frame of the animation sequence, or during fallback.
         @property staticFrame
         **/
        var	staticFrame = container.find('.static-frame');

        /**
         Copy to be shown at the end of animation sequence, or during fallback.
         @property innerCopy
         **/
        var	innerCopy = settings.innerCopy;

        /**
         Initialization flag.
         @property isInit
         **/
        var	isInit = false;

        /**
         Flag for determining if the feature is active.
         @property isActive
         **/
        var	isActive = false;

        /**
         Referance to the animation player.
         @property animationPlayer
         **/
        var	animationPlayer = settings.animationPlayer;

        /**
         Referance to the animation player container.
         @property animationPlayerContainer
         **/
        var	animationPlayerContainer = container.find('.animation-player-container');

        /**
         Video player.
         @property video
         **/
        var	video;

        /**
         Video player tag.
         @property videoTag
         **/
        var	videoTag;

        /**
         Video loading flag.
         @property videoIsLoading
         **/
        var	videoIsLoading = false;

        /**
         Video loaded flag.
         @property videoIsLoaded
         **/
        var	videoIsLoaded = false;

        /**
         Video playing flag.
         @property videoIsPlaying
         **/
        var	videoIsPlaying = false;

        /**
         Video paused flag.
         @property videoIsPaused
         **/
        var	videoIsPaused = false;

        /**
         Flag for determining if in low bandwidth mode.
         @property isLowBandwidth
         **/
        var	isLowBandwidth = $('body').hasClass('lowbandwidth');

        /**
         Reference to promo (brightcove) video play button.
         @property promoVideoPlayButton
         **/
        var	promoVideoPlayButton = $('#' + container.data('promo-video-play-button-id'));

        /**
         Reference to promo (brightcove) video.
         @property promoVideo
         **/
        var	promoVideo = $('.benefit-promo-video[data-benefit-promo-video=' + promoVideoPlayButton.data('target-video') + ']');

        /**
         Reference to promo (brightcove) video object.
         @property promoVideoObject
         **/
        var	promoVideoObject = promoVideo.find('.BrightcoveExperience');

        /**
         Flag for determining if promo video is showing.
         @property promoVideoIsShowing
         **/
        var	promoVideoIsShowing = false;

        /**
         Reference to most recent active element for accessibility.
         @property mostRecentActiveElement
         **/
        var	mostRecentActiveElement = null;

        /**
         Reinitialization flag.
         @property reinitFlag
         **/
        var	reinitFlag = false;

        /**
         Flag for determining if the Samsung Native browser is being used.
         @property isSamsungNativeBrowser
         **/
        var	isSamsungNativeBrowser = (navigator.userAgent.indexOf('Linux; U; Android') !== -1);

        /**
         Preveious feature's static frame.
         @property previousFeatureStaticFrame
         **/
        var	previousFeatureStaticFrame = container.prevAll('.feature').find('.static-frame');

        /**
         Flag for determining if video is supported.
         @property supportsVideo
         **/
        var	supportsVideo = Modernizr.mq('only all');


        /** 2014-04-25
         Flag for defining the benefit fallback mode (no video).  Based on other variables.
         @property fallbackMode
         **/
        var	fallbackMode = (!animationPlayer.length) || (!supportsVideo) || isLowBandwidth;

        /**
         @function setup
         Setup function, executed on object instantiation.
         **/
        function setup() {
            if(index === 0) {
                staticFrame.css({opacity: 1});
                innerCopy.css({opacity: 1, visibility: 'visible'});
            }

            animationPlayerContainer.append(animationPlayer.clone());
            video = animationPlayerContainer.find('video');
            videoTag = video.get(0);

            featureAnimatingCB(true);

            positionPromoVideo();

            if(!fallbackMode && !isLowBandwidth) {
                hideControls();
                canPlay();
            }
        }
        setup();

        /**
         @function bindEvents
         Bind various events needed by this object.
         **/
        function bindEvents() {
            if(index === 0) {
                playButton.on('fastclick', function() {
                    playButton.hide();

                    playVideo();
                });
            }

            if(promoVideo.length > 0) {
                eventBridge.on(eventDictionary.videoPlayer.EVENT_SHOW_VIDEO, function() {
                    promoVideoIsShowing = true;
                    promoVideo.css({width:'100%'});
                    positionPromoVideo();
                });

                eventBridge.on(eventDictionary.videoPlayer.EVENT_HIDE_VIDEO, function() {
                    promoVideoIsShowing = false;
                    promoVideo.css({height:'0',width:'0'});
                });
            }
        }
        bindEvents();

        /**
         @function loadVideo
         Function to begin video loading sequence.
         **/
        function loadVideo() {

            videoIsLoaded = true;
            videoIsLoading = false;

            if(index === 0) {
                playButton.show();
            }

            setSrc();
        }

        /**
         @function setSrc
         Sets the source attribute to the current video element.
         **/
        function setSrc(){
            var device = ss.metrics.device;

            if(ss.metrics.width >= 768 && ss.metrics.width < 1024) {
                device = 'tablet-portrait';
            }

            var mpegSrc = animationPlayerContainer.data('src-mpeg-' + device),
                webmSrc = animationPlayerContainer.data('src-webm-' + device);


            // FOR REFERENCE ONLY 
            var winLoc =  document.domain,
                appDetect = navigator.appName,
                testSite = 'samsung-test.web.rga.com',
                stageSite = 'samsung-stg.web.rga.com';

            // remove src before setting src
            video.removeAttr('src');

            video.attr('src',mpegSrc);

            // FOR REFERENCE ONLY 
            if (winLoc === testSite && !ss.metrics.isIE()) {
                video.children('[data-src-type="mpeg"]').attr('src','http://admin:ekVoszaj2@samsung-test.web.rga.com' + mpegSrc);
                video.children('[data-src-type="webm"]').attr('src','http://admin:ekVoszaj2@samsung-test.web.rga.com' + webmSrc);
            } else if (winLoc === stageSite && !ss.metrics.isIE()) {
                video.children('[data-src-type="mpeg"]').attr('src','http://admin:Iatiadaiv1@samsung-stg.web.rga.com' + mpegSrc);
                video.children('[data-src-type="webm"]').attr('src','http://admin:Iatiadaiv1@samsung-stg.web.rga.com' + webmSrc);
            } else if (ss.metrics.isIE() && device === 'tablet-portrait') {
                video.children('[data-src-type="mpeg"]').attr('src',animationPlayerContainer.data('src-mpeg-mobile'));
                video.children('[data-src-type="webm"]').attr('src',animationPlayerContainer.data('src-webm-mobile'));
            } else {
                // USE THIS IMPLEMENTATION FOR NON AUTHENTICATED PAGES
                video.children('[data-src-type="mpeg"]').attr('src',mpegSrc);
                video.children('[data-src-type="webm"]').attr('src',webmSrc);
            }

            video.load();
        }

        /**
         @function canPlay
         Removes the canplay event, sets the video currentTime to 0 and plays the video if this module is active.
         **/
        function canPlay() {
            if (ss.metrics.isIOS()) {
                videoTag.addEventListener('canplaythrough', videoReadyMobile);
                video.load();
            }
        }

        /**
         @function pauseVideo
         Pause the video.
         @param {Boolean} removeSrc - Flag to determine if src attribute should be removed.
         **/
        function pauseVideo(removeSrc) {
            removeSrc = typeof removeSrc !== 'undefined' ? removeSrc : false;
            videoTag.pause();
            videoIsPaused = true;
            if (removeSrc) {
                videoTag.removeAttribute('src');
            }
        }

        /**
         @function playVideo
         Play the video.  Handles various related operations such as hiding controls and static content.
         **/
        function playVideo() {
            if(isSamsungNativeBrowser) {

                videoTag.addEventListener('ended', videoEnded);

                featureAnimatingCB(true);
                hideControls();

                showVideo();
                staticFrame.css({opacity: 0});
                innerCopy.animate({opacity: 0}, 250, function() {innerCopy.css('visibility', 'hidden');});

                videoIsPlaying = true;
                videoTag.play();
            } else {
                previousFeatureStaticFrame.css({opacity: 1});

                featureAnimatingCB(true);
                hideControls();

                if (ss.metrics.isIOS()) {
                    videoTag.addEventListener('canplaythrough', videoReadyMobile);
                    video.load();
                }

                videoTag.addEventListener('timeupdate', videoReadyMobile);

                videoIsPlaying = true;
                videoTag.play();
            }
            videoIsPaused = false;
            updateFocus();
        }

        /**
         @function updateFocus
         Helper function for accessibility.
         **/
        function updateFocus() {
            if (mostRecentActiveElement && (parentContainer[0] === mostRecentActiveElement || $.contains(parentContainer[0], mostRecentActiveElement))) {
                innerCopy.focus();
                var timer = setTimeout(function() {
                    innerCopy.focus();
                    clearTimeout(timer);
                }, 200);
            }
            mostRecentActiveElement = null;
        }

        /**
         @function videoReadyMobile
         Callback for when video is ready to be played on mobile.
         **/
        function videoReadyMobile() {
            if (ss.metrics.isIOS()) {
                videoTag.removeEventListener('canplaythrough', videoReadyMobile);
            }

            videoTag.removeEventListener('timeupdate', videoReadyMobile);
            videoTag.addEventListener('ended', videoEnded);
            videoTag.addEventListener('webkitendfullscreen', videoEnded);

            pauseVideo();

            showVideo();

            staticFrame.css({opacity: 0});
            innerCopy.animate({opacity: 0}, 250, function() {innerCopy.css('visibility', 'hidden');});

            videoIsPlaying = true;
            videoTag.play();

            previousFeatureStaticFrame.css({opacity: 0});
        }

        /**
         @function videoEnded
         Callback for when video ends.  Handles displaying the static content and cleaning up.
         **/
        function videoEnded() {
            videoTag.removeEventListener('ended', videoEnded);

            videoTag.removeEventListener('webkitendfullscreen', videoEnded);
            videoTag.webkitExitFullScreen();

            videoIsPlaying = false;
            pauseVideo();
            staticFrame.css({opacity: 1});
            innerCopy.css('visibility', 'visible').animate({opacity: 1}, 250);

            if(reinitFlag) {
                reinitFlag = false;
            } else {
                showPromoVideoPlayButton();
            }

            var endedTimeout = setTimeout(function() {
                clearTimeout(endedTimeout);
                hideVideo();
                showControls();
                featureAnimatingCB(false);
            }, 1000);
        }

        /**
         @function showControls
         Show the controls.
         **/
        function showControls() {
            controls.animate({
                opacity: 1
            }, 250);
        }

        /**
         @function hideControls
         Hide the controls.
         **/
        function hideControls() {
            controls.animate({
                opacity: 0
            }, 250);

            promoVideoPlayButton.hide();
        }

        /**
         @function showPromoVideoPlayButton
         Show the promo (Brightcove) video play button.
         **/
        function showPromoVideoPlayButton() {
            promoVideoPlayButton.css({opacity: 1}).show();
        }

        /**
         @function hidePromoVideoPlayButton
         Hide the promo (Brightcove) video play button.
         **/
        function hidePromoVideoPlayButton() {
            promoVideoPlayButton.css({opacity: 0}).hide();
        }

        /**
         @function showVideo
         Show the video.
         **/
        function showVideo() {
            video.show();
            animationPlayerContainer.show();
        }

        /**
         @function hideVideo
         Hide the video.
         **/
        function hideVideo() {
            video.hide();
            animationPlayerContainer.hide();

            playButton.hide();
        }

        /**
         @function positionPromoVideo
         Position the promo (Brightcove) video.
         **/
        function positionPromoVideo() {
            if(promoVideo.length > 0) {

                var device = ss.metrics.device;
                var ratio;

                switch(device) {
                    case 'mobile':
                        ratio = 1.43;
                        break;
                    case 'mobile-landscape':
                        ratio = 0.51875;
                        break;
                    case 'tablet-portrait':
                        ratio = 1.43;
                        break;
                    case 'tablet-landscape':
                        ratio = 0.51875;
                        break;
                    case 'desktop':
                        ratio = 0.51875;
                        break;
                }
                var toHeight=promoVideo.width() * ratio;
                var containerHeight=container.height();
                if (toHeight > containerHeight && containerHeight!==0) {
                    toHeight = containerHeight;
                }

                promoVideo.height(toHeight);
                var promoVideoClose=promoVideo.children('.close-video-bar');

                promoVideoObject.height(toHeight-promoVideoClose.height());
                promoVideo.css({'top': ss.metrics.elemTop(container)});
            }
        }

        /**
         @function init
         Public function to initialize the feature object when it comes in view.
         **/
        this.init = function() {
            if(!isInit && !fallbackMode && !isLowBandwidth && !videoIsLoading && !videoIsLoaded && !videoIsPlaying) {
                hideControls();
                isInit = true;

                loadVideo();
            } else if(videoIsPlaying) {
                videoTag.play();
            }

            if(promoVideo.length > 0 && promoVideoIsShowing) {
                $(eventBridge).trigger(eventDictionary.videoPlayer.EVENT_UNPAUSE_VIDEO);
            }

            positionPromoVideo();
        };

        /**
         @function deactivate
         Public function to deactive the feature object when it leaves view.
         **/
        this.deactivate = function () {
            if(!fallbackMode && !isLowBandwidth) {
                if(videoIsPlaying && !videoIsPaused) {
                    pauseVideo(true);
                }
            }

            if(promoVideo.length > 0 && promoVideoIsShowing) {
                $(eventBridge).trigger(eventDictionary.videoPlayer.EVENT_PAUSE_VIDEO);
            }
        };

        /**
         @function reinit
         Public function to reinit the feature object when the layout changes.
         **/
        this.reinit = function() {
            if(isInit) {

                if (!fallbackMode && !isLowBandwidth) {
                    reinitFlag = true;

                    pauseVideo(true);
                    hideControls();

                    hidePromoVideoPlayButton();
                    loadVideo();
                }
            }

            positionPromoVideo();
        };

        /**
         @function show
         Public function to show the feature object when selected in the benefit carousel.
         @param {Boolean} crossFade - Flag to determine if this operation should include a crossfade.
         **/
        this.show = function(crossFade) {
            isActive = true;

            if(!videoIsLoaded) {
                if(crossFade || fallbackMode || isLowBandwidth) {
                    featureAnimatingCB(true);

                    staticFrame.animate({opacity: 1}, 250);
                    innerCopy.css('visibility', 'visible').animate({opacity: 1}, 250, function() {
                        featureAnimatingCB(false);
                    });
                } else {
                    staticFrame.css({opacity: 1});
                    innerCopy.css({opacity: 1, visibility:'visible'});
                }

            } else {
                playVideo();
            }

            if(innerCopy.hasClass('right')) {
                dots.addClass('mobile-left');
            } else {
                dots.removeClass('mobile-left');
            }
        };

        /**
         @function hide
         Public function to hide the feature object when deselected in the benefit carousel.
         @param {Boolean} crossFade - Flag to determine if this operation should include a crossfade.
         **/
        this.hide = function(crossFade) {
            isActive = false;

            if(crossFade && !fallbackMode && !isLowBandwidth) {
                featureAnimatingCB(true);

                staticFrame.animate({opacity: 0}, 250);
                innerCopy.animate({opacity: 0}, 250, function() {innerCopy.css('visibility', 'hidden');});
            } else if(crossFade && fallbackMode && isLowBandwidth) {
                featureAnimatingCB(true);

                staticFrame.animate({opacity: 0}, 250);
                innerCopy.animate({opacity: 0}, 250, function() {
                    featureAnimatingCB(false);
                    innerCopy.css('visibility', 'hidden');
                });
            } else {
                staticFrame.css({opacity: 0});
                innerCopy.css({opacity: 0, visibility:'hidden'});
                hideVideo();
            }

            hidePromoVideoPlayButton();
        };

        /**
         @function setMostRecentActiveElement
         Public helper function used for setting mostRecentActiveElement accessibility flag.
         **/
        this.setMostRecentActiveElement = function() {
            mostRecentActiveElement = document.activeElement;
        };

        /**
         @function promoVideoIsShowing
         Public helper function used for getting promoVideoIsShowing flag.
         **/
        this.promoVideoIsShowing = function(){
            return promoVideoIsShowing;
        };

        /**
         @function reposition
         Public helper function used for forcing the promo video to reposition.
         **/
        this.reposition = function(){
            positionPromoVideo();
        };

    };

} (jQuery));
/* END FILE */
/* END FILE */
var ss = $;

(function ($) {
	/* global eventBridge, eventDictionary, Modernizr, console */

    ss.BenefitAnimation = function(settings) {

		var container = settings.container,
			zeroPose = container.find('.zero-pose'),
			features = container.find('.feature'),
			featureObjects = [],
			dotsContainer = container.find('.dots'),
			prevArrow = container.find('.arrow.prev'),
			nextArrow = container.find('.arrow.next'),
			currentPage = 0,
			previousPage = 0,
			numPages = features.length;

		function init() {
			
			setupControls();

			zeroPose.load(function() {
				sizeContainer(null, ss.metrics);
			});

			zeroPose.css('visibility', 'hidden');

			features.each(function(i, el) {
				featureObjects.push(new ss.BenefitAnimation.Feature({container: $(el)}));
			});

			bindEvents();
			initControls();

			checkPosition(null, ss.metrics);
			eventBridge.on(eventDictionary.global.SCROLL, checkPosition);
		}

		function setupControls() {
			if(numPages > 1) {
				var ul = $('<ul></ul>');

				features.each(function(i) {
					var li = $('<li data-page="' + i + '"><a href="javascript:void(0);">Slide ' + (i + 1) + '</a></li>');
					ul.append(li);
				});

				dotsContainer.append(ul);
			}
		}

		function bindEvents() {

            eventBridge.on(eventDictionary.global.RESIZE, sizeContainer);

            dotsContainer.on('fastclick', 'li', function() {
            	if(!$(this).hasClass('current')) {
            		previousPage = currentPage;
	            	currentPage = Number($(this).attr('data-page'));
	            	initControls();
	            }
			});

            prevArrow.on('fastclick', function() {
            	previousPage = currentPage;

            	if(currentPage === 0) {
            		currentPage = numPages - 1;
            	} else {
            		currentPage--;
            	}

            	initControls();
            });

            nextArrow.on('fastclick', function() {
            	previousPage = currentPage;

            	if(currentPage === numPages - 1) {
            		currentPage = 0;
            	} else {
            		currentPage++;
            	}

            	initControls();
            });
		}

		function checkPosition(e, metrics) {
			if(metrics.scrollBottom > (metrics.elemTop(container) + (container.height() * 0.5))) {
        		//eventBridge.off(eventDictionary.global.SCROLL, checkPosition);

        		featureObjects[currentPage].init();
        	}
		}

		function sizeContainer(e, metrics) {
			container.height(zeroPose.height());
		}

		function initControls() {
			var dots = dotsContainer.find('li');
			dots.removeClass('current');
			$(dots[currentPage]).addClass('current');

			if(currentPage === 0) {
				prevArrow.hide();
				nextArrow.show();
			} else if(currentPage === (numPages - 1)) {
				prevArrow.show();
				nextArrow.hide();
			} else {
				prevArrow.show();
				nextArrow.show();
			}

			initObjects();
		}

		function initObjects() {
			if(previousPage !== currentPage) {
				featureObjects[previousPage].hide();
			}
			featureObjects[currentPage].show();
		}

		init();
	};

	ss.BenefitAnimation.Feature = function(settings) {
		var container = settings.container,
			staticFrame = container.find('.static-frame'),
			video = container.find('video'),
			videoIsLoading = false,
			videoIsLoaded = false,
			supportsVideo = Modernizr.mq('only all');

		function loadVideo() {
			videoIsLoading = true;

			var videoTag = video.get(0);
			
			videoTag.addEventListener('canplaythrough', function(e) {
				// video.css({opacity: 1});
				// staticFrame.css({opacity: 0});

				// videoTag.play();
			});

			video.attr('src', video.attr('data-src-' + ss.metrics.device));
		}

		this.init = function() {
			if(supportsVideo && !videoIsLoading && !videoIsLoaded) {
				loadVideo();
			}
		};

		this.show = function() {
			if(!videoIsLoaded) {
				staticFrame.fadeIn();
			}
		};

		this.hide = function() {
			staticFrame.fadeOut();
		};
	};

} (jQuery));/* END FILE */
var ss = $;

(function ($) {
    /* global setTimeout, clearTimeout, setInterval, Modernizr, document, Swipe, window, console, eventBridge, eventDictionary, alert */

    /**
     Main carousel object for Samsung.
     @class $.Carousel
     @constructor

     @property {HTMLElement} el - carousel element.
     @property {HTMLElement} slider - the <ul> in carousel.
     @property {Number} curr - current slide
     @property {Boolean} rotate - auto rotate settings
     @property {Object} lis - all the <li> elements in carousel
     @property {Function} timer - timer for auto rotate
     @property {Number} rotateSpeed - speed for slideshow.
     @property {Number} speed - speed of next/prev transitions.
     @property {Object} carouselSwipe - holds the swipe object for the carousel.
     **/
	var isPDPStandard = false;
    ss.Carousel = function (element, settings, func) {
        // Defaults for carousel object
        var defaults = {
                rotate: element.find('.pag .auto-rotate').length ? true : false,
                curr: 0,
                speed: 300
            },
            _throttleTO = 300,
            interval,
            autoPlaying = false,
            startAutoPlayTimer,
            options = $.extend(defaults, settings);
        isPDPStandard = $( "body" ).hasClass( "pdp_standard" );
        return {
            el: element,
            slider: null,
            curr: parseInt(options.curr),
            rotate: Boolean(options.rotate),
            lis: null,
            timer: null,
            rotateSpeed: 7,
            speed: parseInt(options.speed),
            carouselSwipe: null,
            callFn:null,

            autoPlay:function (){
                var self = this;
                //if ( self.lis.length > 1 ) {
                if(autoPlaying){
                    return;
                }
                autoPlaying = true;
                interval = setInterval(function(){
                    try{
                        self.slider.find('.close-youtube-player').trigger('click');
                        self.slider.find('.close-video-player').trigger('click');
                    }catch(e){
                        //console.log('youtube player loading...');
                    }
                    self.carouselSwipe.next();
                }, self.rotateSpeed*1000);
                //}
            },

            /**
             @function init
             Initialization of functions
             **/
            init: function () {
                var s = this,
                    viewerId = s.el.find('.viewer').attr('id');

                s.viewer = s.el.find('.viewer'); 
                s.slider = s.viewer.children('ul').first();
                s.lis = s.slider.children('li');
                //console.log("s.lis = " + s.lis.length);
                // Will only create dots if there is more than one slide
                if (s.lis.length > 1) {
                    s.createDots();
                    s.createPlayPause();
                }

                // Sets the swipe object to the viewer id.
                s.carouselSwipe = new Swipe(document.getElementById(viewerId), {
                    callback: function(index) {s.slideComplete(true);},
                    startSlide: s.curr,
                    //auto: (s.rotate) ? s.rotateSpeed*1000 : 0,
                    auto: 0,
                    continuous: true,
                    speed: s.speed,
                    isRTL: $( "html" ).hasClass( "rtl" )
                });

                if (s.el.is(':visible')) {
                    s.setLinkTabIndex();
                    s.trackInnerLinks();
                }

                $(eventBridge).on(eventDictionary.dom.DOM_REFRESH,function() {
                    s.carouselSwipe.setup(true);
                });

                s.slideComplete(false);
                s.bindEvents();
                if(s.el.find('.auto-rotate').length > 0 && s.lis.length > 1 ){
                    startAutoPlayTimer = setTimeout(function (){
                        s.autoPlay();
                    }, 5000);
                }

                //s.viewer.css('display', 'block');
                var agent = navigator.userAgent.toLowerCase();
                if (agent.indexOf('msie') >= 0 && parseFloat(/msie ([\d]+)/.exec(agent)[1]) < 10){
                    s.el.find('.kv-default-area').css('display', 'none');
                }else{
                    s.el.find('.kv-default-area a').removeAttr('href');
                }
            },

            /**
             @function bindEvents
             Binds events to the arrow buttons and the pagination.
             **/
            bindEvents: function () {
                var self = this;

                self.el.find('.next, .prev').on('click', function() {
                    //($(this).hasClass('prev')) ? self.carouselSwipe.prev() : self.carouselSwipe.next();
                    if($(this).hasClass('prev')){
                        self.carouselSwipe.prev();
                        sendClickCodeCarousel('kv rolling:leftarrow_' + (self.carouselSwipe.getPos()+1) );
                    }else{
                        self.carouselSwipe.next();
                        sendClickCodeCarousel('kv rolling:rightarrow_' + (self.carouselSwipe.getPos()+1) );
                    }

                    $('.close-video').trigger('click');
                    $('.close-video-player').trigger('click');
                    $('.close-youtube-player').trigger('click');
                });


                self.el.find('.play-btn').on('click',function(){
                    //self.carouselSwipe.kill();
                    //self.carouselSwipe.stop();
                    var playPauseBtn = self.el.find('.pag').find('.dots li a').end().find('#cPlayPause');
                    if(!playPauseBtn.hasClass('paused')){
                        playPauseBtn.trigger('click');
                    }
                });

                //resurrect a killed carousel if event fires with parent selector in data
                eventBridge.on(eventDictionary.carousel.CAROUSEL_SWIPE_RESURRECT, function(e, selector){
                    if($(selector).find(self.el).hasClass('killed')){
                        self.carouselSwipe.resurrect();
                        self.carouselSwipe.setup();
                    }
                });

                self.carouselSwipe.swipeEvent = function (){
                    if(autoPlaying){
                        autoPlaying = false;
                        clearInterval(interval);
                        self.autoPlay();
                    }
                };


                //listening on possibly dynamic element
                self.el.on('click', 'a.close-video', function(e){
                    var target = e.target;
                    //adding a check since .close-btn could be added dynamically
                    //when video requeres horizontal close bar
                    if(target.className === 'close-btn' || target.className === 'close-video'){
                        self.carouselSwipe.resurrect();
                        self.carouselSwipe.setup();
                    }
                });

                self.el.find('.pag').find('.dots li a').on('click touchend', function(e) {
                    var $this = $(this), index = parseInt($this.data('index'));

                    $('.close-video').trigger('click');
                    $('.close-video-player').trigger('click');
                    $('.close-youtube-player').trigger('click');
                    self.carouselSwipe.slide(index);
                    self.setLinkTabIndex();

                    sendClickCodeCarousel('kv rolling:index_' + (self.carouselSwipe.getPos()+1) );

                }).end().find('#cPlayPause').on('click keydown', function(ev){
                    ev.preventDefault();
                    if(ev.type === 'click' || ev.which === 13){
                        var $this = $(this), $thisChildren = $this.toggleClass('paused').children().toggleClass('icon-play-carousel icon-pause-carousel');
                        self.carouselSwipe.stop();
                        autoPlaying = false;
                        clearInterval(interval);
                        clearTimeout(startAutoPlayTimer);
                        if($thisChildren.hasClass('icon-pause-carousel')){
                            self.autoPlay();
                            $this.attr('title', self.el.find('.auto-rotate').attr('data-pause-text'));
                            sendClickCodeCarousel('kv rolling:play');
                        }else{
                            $this.attr('title', self.el.find('.auto-rotate').attr('data-play-text'));
                            sendClickCodeCarousel('kv rolling:stop');
                        }
                    }
                });

                self.accessibilityEvents();
            },

            /**
             @function accessibilityEvents
             Keyboard events added to links in the <li> elements for accesibility reasons.
             **/
            accessibilityEvents: function () {
                var self = this,
                    ss_carousel = self.el,
                    lis = $( ss_carousel.find( '.pag ul li') ),
                    viewer = lis.closest('.controls').siblings('.viewer'),
                    firstDot = lis.first().find('a'),
                    index = parseInt(lis.filter('.current').children('a').attr('data-index')),
                    $activeSlide = viewer.find('li[data-index="'+ index +'"]');

                $('#cPlayPause', self.el).on('keydown', function(e) {
                    if (e.which === 9) {
                        if (!$(this).hasClass('paused')) {
                            $(this).trigger('click');
                        }
                        var index = 0;//lis.filter('.current').children('a').attr('data-index');
                        if (!e.shiftKey) {
                            lis = ss_carousel.find('.pag ul li');
                            lis.find('[data-index="'+ index +'"]').focus();
                        } else {
                            var next = ss_carousel.find('.next'), prev = ss_carousel.find('.prev');
                            if(next.css('display') !== 'none'){
                                next.focus();
                            }else if(prev.css('display') !== 'none'){
                                prev.focus();
                            }else{
                                ss_carousel.find('li[data-index="'+ index +'"]').find(':focusable').last().focus();
                            }
                        }
                    }
                });
            },

            /**
             @function createDots
             Creates the dots for each slide.
             **/
            createDots: function () {
                var li = this.lis;
                var jump = this.el.find('.pag .dots');

                jump.empty();
                jump.append('<ul>');

                for (var i=0;i<li.length;i++) {
                    var link = '<a href="javascript:void(0);" data-index="'+i+'" aria-label="Go to slide '+(i+1)+'">Slide '+(i+1)+'</a>';
                    jump.find('ul').append('<li>'+link+'</li>');
                }
            },

            /**
             @function createPlayPause
             Creates the play and pause buttons for triggering the auto-rotation
             **/
            createPlayPause: function () {
                var self = this,
                    li = self.lis,
                    jump = self.el.find('.pag .auto-rotate');

                jump.empty();
                jump.append('<a href="javascript:void(0);" id="cPlayPause" title="' + self.el.find('.auto-rotate').attr('data-pause-text') + '"><span class="'+ (self.rotate?'icon-pause-carousel':'icon-play-carousel') + (ss.metrics.Android()!==null && window.chrome?' is-chromemobile':'') + '"></span></a>');

            },

            /**
             @function slideComplete
             Function is called after the sliding animation.

             @param {Boolean} init (optional) - if it is initialization of the function.
             **/
            slideComplete: function (init) {
                var self = this,
                    nxt = this.el.find('.next'),
                    prv = this.el.find('.prev'),
                    pag = this.el.find('.pag');

                self.curr = self.carouselSwipe.getPos();

                // Arrow functionality
                this.el.find('.next, .prev').removeClass('disabled');
                // Detecting if carousel is on first or last slide.
                if ( !self.carouselSwipe.isContinuous() ) {
                    if (self.curr === 0) {
                        self.el.removeClass('on-last-slide').addClass('on-first-slide');
                        if(self.carouselSwipe.getNumSlides() === 1){
                            self.el.addClass('on-last-slide');
                        }
                    } else if (self.curr === self.carouselSwipe.getNumSlides()-1) {
                        self.el.removeClass('on-first-slide').addClass('on-last-slide');
                    } else {
                        self.el.removeClass('on-first-slide').removeClass('on-last-slide');
                    }
                }

                if ( self.carouselSwipe.getLiLen() == 1 ) {
                    self.el.addClass('not-continuous').addClass('on-first-slide').addClass('on-last-slide');
                }
                // Adds current to active indicator/dot.
                pag.find('li').each(function(i, li) {
                    if ( self.carouselSwipe.getLiLen() == 2 ) {
                        $(li).toggleClass('current', (i===(self.curr%2)));
                    }
                    else {
                        $(li).toggleClass('current', (i===self.curr));
                    }
                });

                // Callback function if provided.
                if ( !!self.callFn ) {
                    self.callFn(self);
                }
                if (init && func) {
                    func(self);
                }
            },

            /**
             @function setLinkTabIndex
             Added for accessibility.
             Sets the tabindex for each link (inner link) in the <li>s to -1 or 0 depending on the current active slide, i.e. <li> element.
             **/
            setLinkTabIndex: function() {
                var s = this;

                for (var i=0; i<s.lis.length; i++) {
                    // //console.log( $(s.lis[i]).find('a, [tabindex]').attr('tabindex') );
                    $(s.lis[i]).find('a, [tabindex]').attr('tabindex', (s.curr !== i) ? -1 : 0);
                }
            },

            /**
             @function trackInnerLinks
             Added for accessibility.
             Loops through all the inner links in the <li>s and adds classes to them and other attributes.
             **/
            trackInnerLinks: function() {
                var self = this, allLis = self.lis, setClass;

                // In case if there is only one visible link in carousel.
                if (allLis.find('a:visible, [tabindex]:visible').length > 1) {
                    allLis.each(function(i, li){
                        var slideIndex = parseInt($(li).data('index')),
                            links = $(li).find('a:visible, [tabindex]:visible');

                        links.each(function(j, link) {
                            // Keeps track of slide number in link
                            $(link).attr('data-slide-index', i);
                            setClass = (j===0) ? 'firstInnerLink' : (j===links.length-1) ? 'lastInnerLink' : '';

                            // If only one link exists in slide
                            if (j === links.length-1 && j === 0) {
                                setClass = 'firstLastInnerLink';
                            }

                            $(link).addClass(setClass);
                        });
                    });
                }
            },

            /**
             @function resetTabIndexFocus
             Added for accessibility.
             Function is called after animation is completed. This resets the tab index for all the inner links and sets focus to one of them.

             @param {String} dir - direction of carousel, i.e tab = next, shift+tab = prev
             **/
            resetTabIndexFocus: function (dir) {
                var self = this, currLi = $(self.lis[self.curr]),
                    linkClass = (dir === 'next') ? 'firstInnerLink' : 'lastInnerLink';

                // setTimeout needed in order for animation to finish before adding focus.
                var timer = setTimeout(function(){
                    self.setLinkTabIndex();
                    currLi.find('.'+linkClass+', .firstLastInnerLink').focus();
                    clearTimeout(timer);
                }, self.speed+1);
            },

            /**
             @function destroy
             Function to destroy carousel.
             **/
            destroy: function() {
                var self = this;

                // Remove event handlers
                self.el.find('.next, .prev').off('click');
                self.el.find('a:not(.play-btn)').off('click');
                self.el.off('hover');
                self.el.find('.pag .dots a').off('click touchend focus');
                self.el.find('.pag .auto-rotate button').off('click touchend focus');
                self.el.find('.lastInnerLink, .firstLastInnerLink').off('keydown');
                self.el.find('.firstInnerLink, .firstLastInnerLink').off('keydown');
                $(self.el.find('.pag li')[0]).find('a').off('keydown');

                // Remove dots
                var jump = self.el.find('.pag').find('.dots, .auto-rotate');
                jump.empty();

                self.carouselSwipe.kill();
            },

            /**
             @function retore
             Function to restore the carousel, adds back all the events, swipes and etc...
             **/
            restore:function () {
                var self = this;

                // Will only create dots if there is more than one slide
                if (self.lis.length > 1) {
                    self.createDots();
                    self.createPlayPause();
                }

                self.slideComplete(false);
                self.bindEvents();
                self.carouselSwipe.resurrect();
            }
        };
    };

    function sendClickCodeCarousel(value){
        if( isPDPStandard ) return;
        //console.log('sendClickCodeCarousel : ' + value);
        if(typeof sendClickCode === 'function') sendClickCode('content_click_count', value);
    }

} (jQuery));
/* END FILE */
var ss = $;
/** -- FILE: common-widgets.js -- **/
/**

@module Main
@submodule CommonWidgets
@main Main
**/
/* For JSLint */
/*global setTimeout: false */
/*global document */
(function ($) {
    /**
    @class $.CommonWidgets
    @constructor
    @param {Object} params External object settings passed into the object.
    **/
    ss.CommonWidgets = function (params) {
        var container;
        var buyDirectContainer;
        var buyOnlineContainer;
        var buyInStoreContainer;

        var buyDirectColorPickerPopover;

        var buyOnlinePageSize = 5;
        var buyOnlineNumPages;
        var buyOnlineCurrentPage;
        var buyOnlineStores;
        var prev;
        var next;

    	function initShopWidget() {
			container = $('.popover .shop-popover');
            if(container.find('.tab-content.buy-direct').length !== 0) {
                buyDirectContainer = container.find('.tab-content.buy-direct');
                initBuyDirect();
            }

            if(container.find('.tab-content.buy-online').length !== 0) {
                buyOnlineContainer = container.find('.tab-content.buy-online');
                initBuyOnline();
            }

            if(container.find('.tab-content.buy-instore').length !== 0) {
                buyInStoreContainer = container.find('.tab-content.buy-instore');
                initBuyInStore();
            }

            container.on('keypress', '.quantity input', function(e) {
              var key = e.keyCode ? e.keyCode : e.which;
              if ( isNaN( String.fromCharCode(key) ) || ( (isTextSelected(e.target) || !e.target.value) && key === 48) ) {
                return false;
              }
            }); 

            function isTextSelected(input) {
                if (typeof input.selectionStart === 'number') {
                    return input.selectionStart === 0 && input.selectionEnd === input.value.length;
                } else if (typeof document.selection !== 'undefined') {
                    input.focus();
                    return document.selection.createRange().text === input.value;
                }
            }

            container.on('click', '.quantity input', function(e){
              this.select();
            });

            //This div will be changed to a label tag for accessibility 
            container.on('click', '.quantity .label', function(e){
              container.find('.quantity input').select();
            });

            container.on('click', '.tabs li a', function() {
                var myIndex = $(this).parents('li').index();

                //Change active tab
                $(this).parents('ul').children().removeClass('active').eq(myIndex).addClass('active');
                $(this).parents('.shop-popover').find('.shop-tab-contents').children().removeClass('show').eq(myIndex).addClass('show');
            });

            container.on('click', '.tab-content.buy-online .controls .prev', onClickPrev);

            container.on('click', '.tab-content.buy-online .controls .next', onClickNext);
        
            container.on('click', '.tab-content.buy-direct .add-to-cart', function() {
                // @SDS Callback for "Add to Cart" functionality.
            });

            container.on('click', function(e) {
                var target = $(e.target);
            });
    	}

        function initShareWidget() {
            var container = $( '.popover .share-popover' );
            container.find( 'ul li:first-child a' ).focus();

        }
        
        function setDefaultFocusInWidget( containerSelector ) {
        	$( containerSelector ).find( 'button, a, input, select, [tabindex]' ).first().focus();
        }
        
        function setFocusAtInWidget( selector ) {
        	//console.log( selector );
        	//console.log( $( selector ).first() )
        	$( selector ).first().focus();
        }


        function initOffersShareWidget() {

            var container = $( '.share-popover' );
            container.find( 'ul li:first-child a' ).focus();

        }

        function initCompareWidget() {

            var container = $( '.compare-button-popover' );
            container.find( 'ul li:first-child a' ).focus();

        }

        function initBuyInStore() {
        }

        function initBuyDirect() {
            
        }

        function initBuyOnline() {
            buyOnlineStores = buyOnlineContainer.find('li');

            prev = buyOnlineContainer.find('.prev');
            next = buyOnlineContainer.find('.next');

            if(buyOnlineStores.length > buyOnlinePageSize) {
                buyOnlineCurrentPage = 0;
                buyOnlineNumPages = Math.ceil(buyOnlineStores.length / buyOnlinePageSize);
                
                initControls();
                initPage(buyOnlineCurrentPage);
            } else {
                prev.hide();
                next.hide();
            }
        }

        function initPage(page) {

            var start = page * buyOnlinePageSize;
            var end = start + (buyOnlinePageSize - 1);

            buyOnlineStores.each(function(i) {
                if(i >= start && i <= end) {
                    $(this).removeClass('hide');
                } else {
                    $(this).addClass('hide');
                }
            });

            positionPopover();
        }

        function initControls() {
            if(buyOnlineCurrentPage === 0) {
                prev.removeClass('active');
                next.addClass('active');
            } else if(buyOnlineCurrentPage === buyOnlineNumPages - 1) {
                prev.addClass('active');
                next.removeClass('active');
            } else {
                prev.addClass('active');
                next.addClass('active');
            }
        }

        function hideColorPicker() {
            if(buyDirectColorPickerPopover) {
                buyDirectColorPickerPopover.hide();
            }
        }

        function onClickPrev() {
            if(buyOnlineCurrentPage - 1 >= 0) {
                buyOnlineCurrentPage--;
                initControls();

                initPage(buyOnlineCurrentPage);
            }
        }

        function onClickNext() {
            if(buyOnlineCurrentPage + 1 <= buyOnlineNumPages - 1) {
                buyOnlineCurrentPage++;
                initControls();

                initPage(buyOnlineCurrentPage);
            }
        }

        function onTabclick(tab) {
            positionPopover();
            hideColorPicker();
        }

        function positionPopover() {
            container.find('.popover').css({'top': (-1 * container.find('.popover').height()) - 3});
        }

    	return {
    		setDefaultFocusInWidget :	setDefaultFocusInWidget,
    		setFocusAtInWidget :		setFocusAtInWidget,
            initShopWidget:             initShopWidget,
            initShareWidget:            initShareWidget,
            initOffersShareWidget:      initOffersShareWidget,
            initCompareWidget:          initCompareWidget
        };
    };
} (jQuery));

$(function() {
   ss.commonWidgets = new ss.CommonWidgets();
});
/* END FILE */
var ss = $;

/*global console */

(function ($) {
    /**   
	Main expander object for Samsung.
    @class $.Expander
    @constructor
    **/
    ss.Expander = function() {

		$('.expander').on('click', '> .toggler', function(ev){
			ev.preventDefault();
			if(ev.type === 'click' || ev.which === 13){
				var $container = $(ev.delegateTarget),
					$toggler = $container.children('.toggler'),
					$content = $container.children(':not(.toggler, .no-toggle)');

				$content.stop().slideToggle(300, function(ev){
					$toggler.find('.icon-plus, .icon-minus')
							.toggleClass('icon-plus icon-minus');

					$container.toggleClass('expanded'); 
				});

				if (typeof $toggler.attr !== 'undefined') {
					if ($container.hasClass('expanded')) {
						$(this).find('.text-toggler').text($toggler.attr('data-text'));
					} else {
						$(this).find('.text-toggler').text($toggler.attr('data-alt-text'));
					}
				}

				// If container has a set focusopen data attribute, 
				// focus will go to that element on expand, else, focus will go back to $toggler.

				if($container.data('focusopen') && !$container.hasClass('expanded')) {
					$('#' + $container.data('focusopen')).focus();
				} else {
					if($(this).attr === 'href') {
						$toggler.doFocus(-1);
					}
				}
			}
		});

	};

} (jQuery));/* END FILE */
var ss = $;
/* global console, setTimeout, window, document, alert, eventBridge, eventDictionary, clearTimeout */
(function ($) {
    /**   
    Main object for custom form elements in Samsung.
    @class $.Forms
    @constructor
    **/
    ss.Forms = function () {
        return {
            /**
            @function init
            Initialization of functions 
            **/
            init: function() {
                var self = this;
        		
				// Loops through all the inputs and applies input control to them.
				$('.input input').each(function(i, input){
					self.inputControl($(input), $(input).parent().find('label'));
				});
				
				self.bindEvents();
        	},
			
			/**
            @function bindEvents
           	Events bound to elements.
            **/
			bindEvents: function () {
				var self = this;
				
        		$('body').on('click', '.option-selector', self.optionSelector);
				//$('.option-selector').on('click', self.optionSelector);
                
				$('.input').on('click', function(){
					var input = $(this).find('input');
					input.focus();
				});
				
				$('.input input').on('focus blur', function (e){
					var $this = $(this), label = $this.parent().find('label');
					self.inputControl($this, label, e.type);
				});
				
				$('[data-auto-complete]').on('focus blur keydown', function (e) {
					var input = $(this),
						ac = $(this).data('auto-complete'),
						autoComplete = $('.'+ac),
						recentlyPopular = autoComplete.find('div');
											
					switch(e.type) {
						case 'focus':
							autoComplete.addClass('on');
							//$('#overlay').addClass('on');
							autoComplete.find('div').show().css('opacity', 1);
						break;
						
						case 'blur':
							//autoComplete.removeClass('on');
						break;
						
						case 'keydown':
							if (input.attr('value').length >= 0) {
								recentlyPopular.animate({opacity:0}, function() {recentlyPopular.hide();});
								$(eventBridge).trigger(eventDictionary.autocomplete.REQUEST_AUTOCOMPLETE);
							} else {
								
							}
						break;	
					}
				});
			},
			
			/**
			@function inputControl
			Shows and hides the label.
			
			@param {HTMLElement} input - the input field that has event attached.
			@param {HTMLElement} label - label associated with input.
			@param {String} evt (optional) - type of event.
			**/
			inputControl: function (input, label, evt) {
				var holder = $(label.parent());
				
				if (evt === 'focus') {
					holder.addClass('focused');
				} else {
					holder.toggleClass('focused', (input.attr('value').length > 0) ? true : false);
				}
			},
            
            /**
            @function optionSelector
            Handles custom select elements behavior. 
            **/
            optionSelector: function (selectorEvent) {
                var selector = $(this),
                    selected = selector.find('.selected-option'),
                    optionList = selector.find('.options'),
                    options = optionList.find('li'),
                    visible = false;

                var directionAttr = selector.attr('data-selector-direction');
                var direction = typeof directionAttr !== 'undefined' ? directionAttr : 'auto';

                //METHODS
                var position = function(metrics) {
                    var optionListTop = metrics.elemTop(optionList),
                        optionListHeight = optionList.outerHeight(),
                        selectorHeight = selector.outerHeight(),
                        selectorTop = metrics.elemTop(selector);

                    if(selector.attr('data-direction') == 'bottom'){
                        selector.addClass('below');
                        optionList.css({
                            'top': ''
                        });
                        return;
                    }
                    //if(optionListTop - selectorHeight - metrics.scrollTop > optionListHeight){
                    if((selectorTop - optionListHeight > metrics.scrollTop) || direction === 'top'){
                        selector.removeClass('below');
                        optionList.css({
                            'top': ((optionListHeight-1)*-1)
                        });
                    } else {
                        selector.addClass('below');
                        optionList.css({
                            'top': ''
                        });
                    }
                };

                var onOpen = function() {
                    visible = true;
                    var tabTos = optionList.find('[tabindex]');
                    tabTos.attr('tabindex', '0');
                    
                    position(ss.metrics);

                    var onOpenTimeout = setTimeout(function() {
                      clearTimeout(onOpenTimeout);
                      //tabTos.first().focus();
					  options.each(function(){
						  var checkActive = selector.find('input').attr('value');
						  if ( $(this).attr('data-value') == checkActive) {
							  $(this).addClass('active');
							  $(this).children().first().focus();
						  }
					  });
                    }, 30);
                    $('body').on('click', onBodyClick);
                };

                var onBodyClick = function(e) {
                  
                  var evTargetParent = $(e.target).parents('.option-selector');
                    if (evTargetParent !== selector) {
                      onClose();
                      $(this).off(e);
                    }
                };

                var onClose = function() {
                   optionList.find('[tabindex]').attr('tabindex', '-1');
                   optionList.css({
                       'top': 'auto'
                   });
                   selector.removeClass('open').removeClass('below');
		               eventBridge.off(eventDictionary.global.RESIZE, onResize);
                   visible = false;
                   $('body').off('click', onBodyClick);
                };

				var onOptionClick = function() {
					var value = $(this).attr('data-value'),
					label = $(this).html();
					options.removeClass('active');
					$(this).addClass('active');
					selector.find('input').attr('value', value);
					selector.find('.selected-option').html(label);

					selector.find('.selected-option').children('a').attr('tabindex', '-1');
				};

                var onResize = function(e, metrics) {
                    if (visible) {
                      position(metrics);
                    }
                };

                //SETUP
                selector.toggleClass('open');

                if(selector.hasClass('open')) {
                  onOpen();
                } else {
                  onClose();
                }

				

                options.on('click', onOptionClick);
                //optionList.on('blur', onClose);

                selector.on('keydown', function(ev){

                  var last = options.last()[0],
                      targ = ev.target;

                  if(ev.which === 9 && !ev.shiftKey && (last === targ || last.contains(targ))) { //tab out
                        onClose();
                  } else if (ev.which === 9 && ev.shiftKey && (targ === selected[0])) {
                    onClose();
                  }
                });


		            eventBridge.on(eventDictionary.global.RESIZE, onResize);
            }
        };
    };
} (jQuery));
/* END FILE */
var ss = $;

(function ($) {
	/* global console, window, alert, setTimeout, clearTimeout, eventBridge, eventDictionary */

    /** 
	PDP Wow GlanceGrid
    @class $.GlanceGrid
    @constructor 
    **/
    ss.GlanceGrid = function( settings ) {

		var 	_$self = settings.container,
				_$currentSlide,
				_$thumbs = _$self.find( '.thumbs' ),
				_row1ImgRatio3x2 					= 0.36354167,
				_row2ImgRatio3x2 					= 0.53020833,
				_row1_2ImgRatio2x2x1				= 0.5,
				_row3ImgRatio2x2x1					= 1,
				_row1Rect,
				_row2Rect,
				_copyRatio							= 0.46979167,
				_hasTransitionEv					= false,
				_transitionEndEvs					= 'transitionend webkitTransitionEnd';

		if ( _$self.css( 'display' ) !== 'none') {
			resize( undefined, ss.metrics );
		}

		_hasTransitionEv = hasTransitionEventSupport();
		
		eventBridge.on(eventDictionary.global.RESIZE, resize);
		$(window).orientationchange( function(e) {
			e.preventDefault();
			resize( null, ss.metrics );
		});


		/*************** Start: Private Methods ***************/

		/**
		* Assesses if the user agent has transition event support based on W3C compliance.
		*
		* @method hasTransitionEventSupport
		* @returns {Boolean}
		**/
		function hasTransitionEventSupport() {

			// Note: currently tests for IE8 + FF
			var IEUA_VERSION = /MSIE\s([\d.]+)/.test(window.navigator.userAgent),
				ieversion = Number(RegExp.$1),
				isFF = /(Firefox)+/.test(window.navigator.userAgent);

			if ( ieversion !== 0 && ieversion < 10 ) {
				return false;
			}
			else if ( isFF ) {
				return false;
			}
			else {
				return true;
			}

		}

		/**
		* Resized the entire glance-grid module.
		*
		* @method resize
		* @param e {EventObject} Specifying "undefined" indicates a first-time rendering.
		* @param metrics {ss.metrics}
		**/	
		function resize( e, metrics ) {

			var imgWidth,
				imgHeight,
				maxSpanWidth,
				arrayAssess,
				arrayHr,
				slideIndex;

			_$thumbs.css( 'height', getGridHeight( e, metrics ) );
			_$thumbs
				.children()	// n = 5
					.each( function( index ) {

						if ( !$( this ).hasClass( 'fullview-img' ) ) {
							onLayoutGridItem.call(
									this,
									getGridMetrics.call(
									this,
									metrics,
									index
								)
							);
						}
						else {
							// Fullview & sub-components
							_$self.find( '.fullview' )
								.css({
									height: _$thumbs.outerHeight(),
								    width: _$thumbs.outerWidth()
								});
							_$self.find( '.copywrapper' )
								.css( 'width', (metrics.width < 1920 ? metrics.width*_copyRatio : 902) );
							_$self.find( _$currentSlide )
								.css( 'height', _$thumbs.css( 'height') );
							_$self.find( '.fullview-close' ).offset({
								left: _$thumbs.outerWidth() - _$self.find( '.fullview-close' ).outerWidth() - parseInt(_$self.find( '.fullview-close img' ).css( 'margin-right' ).replace( 'px', '' ))
							});
							// Size hr elements
							maxSpanWidth = 0;
							slideIndex = parseInt( _$currentSlide.indexOf( _$currentSlide.length - 1 ) );
							arrayAssess = _$self.find ( _$currentSlide + ( slideIndex !== 3 ? ' ul li' : ' dl dt' ) );
							arrayHr = _$self.find( _$currentSlide + ( slideIndex !== 3 ? ' ul hr' : ' dl hr' ) );

							for (var i = 0; i < arrayAssess.length; i++) {
								var $elem = $( arrayAssess[i] );
								if (maxSpanWidth === 0) {
									maxSpanWidth = $elem.outerWidth();
								}
								else if ( $elem.width() > maxSpanWidth ) {
									maxSpanWidth = $elem.outerWidth();
								}
							}
							for (var j = 0; j < arrayHr.length; j++) {
								$( arrayHr ).css( 'width', maxSpanWidth );
							}
							// image (should be a square)
							imgWidth = imgHeight = metrics.width < 1920 ? metrics.width*(1-_copyRatio) : 1018;
							$( this )
								.offset({
									left: _$self.find( '.copywrapper' ).outerWidth()
								})
								.css({
									width: imgWidth,		//  ss.metrics.device !== 'desktop' ? _$self.outerWidth()*0.6 : 1018 _$self.outerWidth()
									height: imgHeight
								});

						}

					});

			// reapply in case children adulterated height
			_$thumbs.css( 'height', getGridHeight( ( e === undefined ? null : e ), metrics ) );

		}

		/**
		* Gets the height of the grid view.
		*
		* @method getGridHeight
		* @param e {EventObject} Specifying "undefined" indicates a first-time rendering.
		* @param metrics {ss.metrics}
		* @returns {Number} The height in pixels.
		**/
		function getGridHeight( e, metrics ) {

			var height;

			if ( e === undefined ) {
				// Initial render
				if ( metrics.device === 'mobile' ) {
					height = 320;
				}
				else if ( metrics.device === 'tablet-portrait' ) {
					height = 715;
				}
				else if ( metrics.device === 'tablet-landscape' ) {
					height = 800;
				}
				else if ( metrics.device === 'desktop' ) {
					height = 1018;
				}
			}
			else {
				// Allow children to dynamically determine height
				if ( $( '.thumbs img.fullview-img' ) === undefined ) {
					height = _$thumbs.outerHeight();
				}
				else {
					// Height should be y-summation of clip: rect()
					if (metrics.device !== 'mobile' ) {
						height = _row1Rect.bottom + _row2Rect.bottom;
					}
					else {
						height = 2*(parseInt( _$thumbs.find( 'img:first-child' ).css( 'height' ).replace( 'px', '' ) ) - _row1Rect.bottom) + _$thumbs.find( 'img:last-child' ).outerHeight();
					}
				}
			}

			return height;

		}

		/**
		* Gets the metrics for rendering a specific image in the grid view.
		*
		* @method getGridMetrics
		* @param metrics {ss.metrics}
		* @param index {Integer} Image index (0 - 4)
		* @returns {
		*		isIE8: 					{Boolean},
		*		index: 					{Integer},
		*		gridWidth: 				{Number},
		*		gridHeight: 			{Number},
		*		gridOffsetTop: 			{Number},
		*		rowCellWidth: 			{Number},
		*		rowCellHeight: 			{Number},
		*		rowCellOffsetTop: 		{Number},
		*		rowCellOffsetLeft: 		{Number},
		*		imgWidth: 				{Number},
		*		imgHeight: 				{Number},
		*		clip: 					{String}
		*	}
		**/
		function getGridMetrics( metrics, index ) {

			// maxCopyWidth = 902;
			// maxImgWidth = 1018;

			var 	// img
					row1MaxImgWidth 	= 698,
					row1MaxImgHeight	= 698,
					row2MaxImgWidth 	= 1018,
					row2MaxImgHeight 	= 1018,

					// cell mask
					cellMask1MaxWidth 	= 640,
					cellMask1MaxHeight	= 509,
					cellMask2MaxWidth 	= 960,
					cellMask2MaxHeight 	= 509,

					// grid
					gridHeight,
					gridOffsetTop		= _$thumbs.offset().top,

					// grid cell
					rowCellWidth,
					rowCellHeight,

					rowCellOffsetTop,
					rowCellOffsetLeft,

					imgWidth,
					imgHeight,

					// clippings
					isIE8				= false,
					clip,
					rect,
					row1RectRightMax 	= 58,
					row1RectBottomMax 	= 189,
					row1BMarginRatio	= 0.31434185, 
					row1RMarginRatio	= 0.05697446,

					row2RectRightMax 	= 58,
					row2RectBottomMax 	= 509,
					row2BMarginRatio	= 0.5,
					row2RMarginRatio	= 0.05697446;

			rect = {};

			if ( metrics.device !== 'mobile' ) {
				// 3 x 2 grid view
				if ( metrics.width >= 1920 ) {
					rowCellWidth = (index <= 2 ? cellMask1MaxWidth : cellMask2MaxWidth);
				}
				else {
					rowCellWidth = index <= 2 ? _$self.outerWidth()/3 : _$self.outerWidth()/2;
				}

				// Set image and clipping dimensions
				if ( index <= 2 ) {
					imgHeight = imgWidth = metrics.width*_row1ImgRatio3x2;

					rect.top = 0;
					rect.right = imgWidth - (imgWidth*row1RMarginRatio);
					rect.bottom = imgHeight - (imgHeight*row1BMarginRatio);
					rect.left = 0;

					_row1Rect = rect; 

					// console.log( 'row1: imgWidth = ' + imgWidth + ', imgHeight = ' + imgHeight + ', rect = ' + JSON.stringify(rect) );
				}
				else {
					
					imgHeight = imgWidth = metrics.width/2;

					rect.top = 0;
					rect.right = imgWidth - (imgWidth*row2RMarginRatio);
					rect.bottom = imgHeight - (imgHeight*row2BMarginRatio);
					rect.left = 0;

					_row2Rect = rect;

					// console.log( 'row2: imgWidth = ' + imgWidth + ', imgHeight = ' + imgHeight + ', rect = ' + JSON.stringify(rect) );
				}

				rowCellHeight = imgHeight - rect.bottom;

				rowCellOffsetTop 	= index <= 2 ? _$thumbs.offset().top : (_$thumbs.offset().top + _row1Rect.bottom);
				rowCellOffsetLeft  	= index <= 2 ? (rowCellWidth*index) : (rowCellWidth*(index - 3));

				gridHeight = _$self.find( '.thumbs img:first-child' ).outerHeight() + _$self.find( '.thumbs img:last-child' ).outerHeight();
			}
			else {
				// 2 x 2 x 1 grid view
				// @1018, heightRatio = 0.33
				rowCellWidth = index <= 3 ? _$self.outerWidth()/2 : _$self.outerWidth();
				// console.log( 'rowCellWidth = ' + rowCellWidth );

				// Set image and clipping dimensions
				if ( index <= 3 ) {
					imgHeight = imgWidth = rowCellWidth;	//metrics.width*_row1ImgRatio3x2;

					rect.top = 0;
					rect.right = imgWidth - (imgWidth*row1RMarginRatio);
					rect.bottom = imgHeight - (imgHeight*row1BMarginRatio);
					rect.left = 0;

					_row1Rect = rect; 

					// console.log( 'row1: imgWidth = ' + imgWidth + ', imgHeight = ' + imgHeight + ', rect = ' + JSON.stringify(rect) );
				}
				else {
					imgHeight = imgWidth = metrics.width;

					rect.top = 0;
					rect.right = imgWidth - (imgWidth*row2RMarginRatio);
					rect.bottom = imgHeight - (imgHeight*row2BMarginRatio);
					rect.left = 0;

					_row2Rect = rect;

					// console.log( 'row2: imgWidth = ' + imgWidth + ', imgHeight = ' + imgHeight + ', rect = ' + JSON.stringify(rect) );
				}

				rowCellHeight = imgHeight - rect.bottom;

				// rowCellOffsetTop 	= index <= 2 ? _$thumbs.offset().top : (_$thumbs.offset().top + _row1Rect.bottom);
				// rowCellOffsetLeft  	= index <= 2 ? (rowCellWidth*index) : (rowCellWidth*(index - 3));
				
				// offset().top
				if ( index <= 1 ) {
					rowCellOffsetTop = _$thumbs.offset().top;
				}
				else if (index >= 2 && index <= 3 ) {
					rowCellOffsetTop = _$thumbs.offset().top + _row1Rect.bottom;
				}
				else {
					rowCellOffsetTop = _$thumbs.find( 'img:nth-child(3)' ).offset().top + 2*(parseInt(_$thumbs.find( 'img:nth-child(3)' ).css( 'height' ).replace( 'px', '' )) - _row1Rect.bottom);
				}

				// offset().left
				rowCellOffsetLeft = ( index === 0 || index === 2 || index === 4 ) ? 0 : rowCellWidth;

				gridHeight = 0;
				// gridHeight = (_$self.find( '.thumbs img:first-child' ).outerHeight()*2) + _$self.find( '.thumbs img:last-child' ).outerHeight();
			}

			if ( metrics.isIE8 !== 8 ) {
				// rect( top, right, bottom, left )
				clip = 'rect(' + rect.top + ',' + rect.right + ',' + rect.bottom + ',' + rect.left + ')';
			}
			else {
				// rect( top right bottom left ) IE8
				isIE8 = true;
				clip = 'rect(' + rect.top + ' ' + rect.right + ' ' + rect.bottom + ' ' + rect.left + ')';
			}

			return {

				isIE8: 					isIE8,
				index: 					index,
				gridWidth: 				_$self.outerWidth(),
				gridHeight: 			gridHeight,
				gridOffsetTop: 			gridOffsetTop,
				rowCellWidth: 			rowCellWidth,
				rowCellHeight: 			rowCellHeight,
				rowCellOffsetTop: 		rowCellOffsetTop,
				rowCellOffsetLeft: 		rowCellOffsetLeft,
				imgWidth: 				imgWidth,
				imgHeight: 				imgHeight,
				clip: 					clip

			};

		}

		/**
		* Layouts-out an image in the grid view.
		*
		* @method onLayoutGridItem
		* @param gridMetrics {Object}
		**/
		function onLayoutGridItem( gridMetrics ) {

			// Image (position: absolute)
			$( this )
				// apply size and offset
				.css({
					width: gridMetrics.imgWidth,
					height: gridMetrics.imgHeight,
				 	clip: gridMetrics.clip
					})
				.offset({
					top: gridMetrics.rowCellOffsetTop,
					left: gridMetrics.rowCellOffsetLeft
					})
				// register click event handler 
				.on(
					'click',
					{
						elem: 			this,
						id: 			gridMetrics.index,
						parentWidth: 	gridMetrics.gridWidth,
						parentHeight: 	gridMetrics.gridHeight,
						prevElemTop: 	gridMetrics.gridOffsetTop
					},
					onStartExpandFullView
				);

		}

		/**
		* Handler for managing the start of an image expansion.
		*
		* @method onStartExpandFullView
		* @param e {EventObject}
		**/
		function onStartExpandFullView( e ) {

			var 	$this 			= $( e.data.elem ),
					id 				= e.data.id,
					// $fullview 		= 
					parentWidth 	= e.data.parentWidth,
					parentHeight 	= e.data.parentHeight,
					prevElemTop		= e.data.prevElemTop,
					setTOData		= {},
					ie8BkGd			= 'ie8bkgd';

			e.preventDefault();

			// console.log( 'onStartExpandFullView.elem = ' + e.data.elem ); 

			$this.off( 'click' );

			// set background-color of full-view, which covers grid (order important)
			_$self.find( '.fullview' )
				.removeClass( 'hide' )
				.offset({ 
					top: _$self.find( '.module-heading' ).offset().top + _$self.find( '.module-heading' ).outerHeight()
				})
				.css({
					width: _$thumbs.outerWidth(),
					height: _$thumbs.outerHeight()
				});

			if ( ss.metrics.isIE8() === 8 ) {
				_$self.find( '.fullview' )
					// .css( 'background-color', _$self.find( '.copywrapper div:nth-child(' + (e.data.id + 1) + ')' ).css( 'background-color' ) + '!important' )
					// .css( 'opacity', 1 );
					.addClass( ie8BkGd + (e.data.id + 1) );
				// _$self.find( 'copywrapper' )
				// 	.css( 'background-color', _$self.find( '.copywrapper div:nth-child(' + (e.data.id + 1) + ')' ).css( 'background-color' ) )
				// 	.css( 'opacity', 1 );
				console.log( '.fullview.background-color = ' + _$self.find( '.fullview' ).css( 'background-color' ) );
			}
			else {
				_$self.find( '.fullview' ).css( 'background-color', _$self.find( '.copywrapper div:nth-child(' + (e.data.id + 1) + ')' ).css( 'background-color' ) );
			}

			// Position selected image in fullview
			$this
				.removeAttr( 'style' )
				.css({
					width: 		ss.metrics.width < 1920 ? parentWidth*_row2ImgRatio3x2 : 1018,

					/* Supports responsive sizing for all devices */
					height: 	_$thumbs.outerHeight(), 	//parentHeight,

					left: 		ss.metrics.width < 1920 ? e.data.parentWidth*_copyRatio : 902
				})
				.offset({
					top: 	_$thumbs.offset().top
				});

			if ( _hasTransitionEv ) {
				$this.on( 
					_transitionEndEvs,
					{ 
						elem: 			this, 
						id: 			id,
						// Dimensions may change due to addition of .fullview-img class
						top: 			_$thumbs.offset().top,
						parentWidth: 	parentWidth
					},
					onCompleteExpandFullView
				);
			}
			else {
				setTOData.data = {};
				setTOData.data.elem = e.data.elem;
				setTOData.data.id = e.data.id;
				setTOData.data.top = _$thumbs.offset().top;
				setTOData.data.parentWidth = parentWidth;
				setTimeout( function() {
					onCompleteExpandFullView( setTOData );
					clearTimeout();
					}, 300);
			}

			$this.addClass( 'fullview-img' );

		}

		/**
		* Handler for managing the completion of an image expansion.
		*
		* @method onCompleteExpandFullView
		* @param e {EventObject}
		**/
		function onCompleteExpandFullView( e ) {

			var		$this 				= $( e.data.elem ),
					maxSpanWidth,
					arrayAssess,
					arrayHr;

			if ( e.preventDefault !== undefined ) {
				e.preventDefault();
			}

			_$currentSlide 		= '#ss-glance-carousel-slide' + e.data.id;

			// Remove events
			$this
				// .off( 'click' )
				.off( _transitionEndEvs );
				// .removeClass( 'fullview-img' );

			// Slide copy
			_$self.find( _$currentSlide )
				// .css( 'width', (ss.metrics.width < 1920 ? e.data.parentWidth*_copyRatio : 902) )
				.css( 'height', _$thumbs.outerHeight() )
				.removeClass( 'hide' );

			// Copy wrapper
			_$self.find( '.copywrapper' )
				.removeClass( 'hide' )
				.css( 'width', (ss.metrics.width < 1920 ? e.data.parentWidth*_copyRatio : 902) );

			// Apply background-color on IE8
			// if ( ss.metrics.isIE8() === 8 ) {
			// 	_$self.find( _$currentSlide + ', .copywrapper' ).css( 'background-color', _$self.find( '.fullview' ).css( 'background-color' ) );

			// 	console.log( '_$currentSlide.background-color = ' + _$self.find( _$currentSlide ).css( 'background-color' ) );
			// 	console.log( '.copywrapper.background-color = ' + _$self.find( '.copywrapper' ).css( 'background-color' ) );
			// }

			// Close Btn
			_$self.find( '.fullview-close' )
				.offset({
					left: _$thumbs.outerWidth() - _$self.find( '.fullview-close' ).outerWidth() - parseInt(_$self.find( '.fullview-close img' ).css( 'margin-right' ).replace( 'px', '' ))
				})
				.removeClass( 'hide' );

			// Size hr elements
			maxSpanWidth = 0;
			arrayAssess = _$self.find ( _$currentSlide + ( e.data.id !== 3 ? ' ul li' : ' dl dt' ) );
			arrayHr = _$self.find( _$currentSlide + ( e.data.id !== 3 ? ' ul hr' : ' dl hr' ) );

			for (var i = 0; i < arrayAssess.length; i++) {
				var $elem = $( arrayAssess[i] );
				if (maxSpanWidth === 0) {
					maxSpanWidth = $elem.outerWidth();
				}
				else if ( $elem.width() > maxSpanWidth ) {
					maxSpanWidth = $elem.outerWidth();
				}
			}
			for (var j = 0; j < arrayHr.length; j++) {
				$( arrayHr ).css( 'width', maxSpanWidth );
			}

			// delegate event (note target covers 2 z-indexes )
			_$self.find( '.fullview, .fullview-img' )
				.on(
					'click',
					{ 
						elem: e.data.elem,
						id: e.data.id
					},
					onStartBackToGridView
				);

		}

		/**
		* Handler for managing the start of an image transition back to grid view.
		*
		* @method onStartBackToGridView
		* @param e {EventObject}
		**/
		function onStartBackToGridView( e ) {

			var		$this					= $( e.data.elem ),
					images 					= _$thumbs.children(),
					image,
					bottom,
					gridInfo,
					setTOData				= {},
					ie8BkGd					= 'ie8bkgd';

			_$currentSlide 			= '#ss-glance-carousel-slide' + e.data.id;

			e.preventDefault();

			// console.log( 'onStartBackToGridView.elem = ' + e.data.elem );

			// undelegate
			_$self.find( '.fullview, .fullview-img' ).off( 'click' );

			// hide fullview elements
				// .find( _$currentSlide ).addClass( 'hide' );
			_$self.find( '.copywrapper' ).addClass( 'hide' );
			_$self.find( '.fullview-close' ).addClass( 'hide' );
			_$self.find( '.fullview' ).addClass( 'hide' );

			if ( ss.metrics.isIE8() === 8 ) {
				_$self.find( '.fullview' )
					// .css( 'background-color', '' )
					// .css( 'opacity', 0 );
					.removeClass( ie8BkGd + (e.data.id + 1) );
				// _$self.find( '.copywrapper' )
				// 	.css( 'background-color', '' )
				// 	.css( 'opacity', '' );
			}

			// Get expanded image
			for (var i = 0; i < images.length; i++) {
				if ( $( images[i] ).hasClass( 'fullview-img' ) ) {
					image = images[i];
					break;
				}
			}

			// Clean-up when image transition to grid view is complete
			if ( _hasTransitionEv ) {
				$( image ).on(
					_transitionEndEvs,
					{
						elem: 			image,
						id: 			e.data.id
					},
					onCompleteBackToGridView
				);
			}
			else {
				setTOData.data = {};
				setTOData.data.elem = image;
				setTOData.data.id = e.data.id;
				setTimeout( function() {
					onCompleteBackToGridView( setTOData );
					clearTimeout();
				}, 300 );
			}

			onLayoutGridItem.call(
				$this,
				getGridMetrics.call(
					this,
					ss.metrics,
					e.data.id
				)
			);

		}

		/**
		* Handler for managing the completion of an image transition back to grid view.
		*
		* @method onStartBackToGridView
		* @param e {EventObject}
		**/
		function onCompleteBackToGridView( e ) {

			var		$this					= $( e.data.elem );
					
			_$currentSlide 					= '#ss-glance-carousel-slide' + e.data.id;

			if ( e.preventDefault !== undefined ) {
				e.preventDefault();
			}

			// console.log( 'onCompleteBackToGridView.elem = ' + e.data.elem );

			// Remove transitionend event + applied class
			if ( _hasTransitionEv ) {
				$this
					.off( _transitionEndEvs )
					.removeClass( 'fullview-img' );
			}
			else {
				$this.removeClass( 'fullview-img' );
			}

			_$self.find( _$currentSlide )
				.addClass( 'hide' )
				.removeAttr( 'style' );

		}

		/*************** End: Private Methods ***************/

		return {

			/*************** Start: Public Methods ***************/
			
			/*************** End: Public Methods ***************/

		};

	};

} (jQuery));/* END FILE */
/**
 * Created by gnustory on 14. 6. 9.
 */
var ss = $;
/** -- FILE: support.js -- **/
/**
 Page object for the support section.

 @module Main
 @submodule Support
 @main Main
 **/
/*global window, document, setInterval, clearInterval, Modernizr, eventBridge, eventDictionary, console, setTimeout, clearTimeout */

(function ($) {
    /**
     @class $.Support
     @constructor
     @param {Object} params External object settings passed into the object.
     **/
    $.ManualsTooltip = function (params) {

        /**
         Stores the top level scope.

        /**
         @method init
         **/
        function init() {

            bindEvents();
        }

        function bindEvents(){
            $('.tooltipbox').bind({
                'mouseover click' :function(e){
                    var evnt = e,
                        popover = $(this).parent().siblings('.popover'),
                        containerSelector = $(this).attr('data-container'),
                        container = $(this).parents(containerSelector);

                    showTooltip.call($(this), container, popover, evnt);
                },
                'mousemove': function(e){
                    var evnt = e,
                        popover = $(this).parent().siblings('.popover'),
                        containerSelector = $(this).attr('data-container'),
                        container = $(this).parents(containerSelector);

                    //showTooltip.call($(this), container, popover, evnt);
                }
                ,
                'mouseleave': function(e){
                    var popover = $(this).parent().siblings('.popover');
                    hideTooltip(popover);
                }

            });

            $('.manuals-module').find('.popover').on('click', '.close-button', function(){
                var popover = $(this).parents('.popover');
                hideTooltip(popover);
            });
        }

        function showTooltip(container, popover, evnt){

            var e = evnt,
                $container = container,
                $link = $(this),
                $tooltip = popover;

            //console.log(e.type);

            if(e.type=='mouseover'||e.type=='click'){
                var ex = e.pageX;
                var ey = e.pageY;
                var offset = $container.offset();
                var offsetX = ex - offset.left;
                var offsetY = ey - offset.top;
            }

            if(e.type=='mouseover'||e.type=='click'){
                var width = $tooltip.outerWidth();
                var height = $tooltip.outerHeight();
            }

            $tooltip.removeClass('hide').show();

            if(e.type=='mouseover'||e.type=='click'){
                var posX = offsetX-(width/2);
                //console.log(posX);
                if(posX<0){
                    //$tooltip.find('.arrow').css({'margin-left': (posX)+'px', 'border-width':'0px'});
                    $tooltip.find('.arrow').css({'margin-left': (posX)+'px'});
                    //$tooltip.find('.arrow').css({'margin-left': '-44px'});
                    posX = 0;
                }else{
                    //$tooltip.find('.arrow').css({'margin-left': '-11px', 'border-width':'0px'});
                    $tooltip.find('.arrow').css({'margin-left': '-11px'});
                }
                if($(this).offset().top-(popover.outerHeight()+12)>$(window).scrollTop()){
                    $tooltip.css({ 'left' : posX, 'top' : offsetY-height-10 });
                    $tooltip.removeClass('bottom').addClass('top');
                }else{
                    $tooltip.css({ 'left' : posX, 'top' : offsetY+12});
                    $tooltip.removeClass('top').addClass('bottom');
                }
            }
        }

        function hideTooltip(popover){
            var $tooltip = popover;
            $tooltip.addClass('hide').hide();
        }

        init();

    };
}(jQuery));

$(function() {
    new ss.ManualsTooltip();
});

/* END FILE */
var ss = $;
(function ($) {

    /**
    SimilarItems Module.

    @class $.SimilarItems
    @constructor
    @param {Object} params External object settings passed into the object.
    **/
    /* global console, eventBridge, eventDictionary, alert */
    ss.SimilarItems = function (params) {
        var container = params.container,
            carousel,
            currentLayout,
            firstInit = true,
            initialContainer = container.find('.initial-container');

        function init() {
            container.addClass('ss-carousel');

            initCarouselItems();

            bindEvents();
        }

        function bindEvents() {
            /*
            eventBridge.on(eventDictionary.global.RESIZE, function(e, metrics) {
                if(!metrics) metrics = ss.metrics;
                if(metrics.deviceChanged) {
                    initCarouselItems();
                }
            });
            */
        }
		
		function carouselEvents() {
			var links = $('.similar-item-link');
			
			//if ($('.body_wrapper').width() >= 1280) {
			//	$($('.similar-item-link')[links.length-1]).on('keydown', function (e) {
			//		if (e.keyCode === 9 && !e.shiftKey) {
			//			$('.option a').focus();
			//		}
			//	});
			//}
		}

        function initCarouselItems() {
            //currentLayout = ss.metrics.device;
            currentLayout = ss.metrics.device;

            var items = container.find('.similar-item');
            var itemsPerPage = 1;

            /*switch(currentLayout) {
                case 'tablet-portrait':
                    itemsPerPage = 3;
                break;
                case 'tablet-landscape':
                    itemsPerPage = 3;
                break;
                case 'desktop':
                    itemsPerPage = 4;
                break;
            }*/
            var bodyWrapper = $('.body_wrapper');
            switch(true) {
				case bodyWrapper.find('.article-story-page-discover, .news-story-page-discover').length !== 0 :
                    itemsPerPage = 1;
                break;
                case bodyWrapper.width() >= 1280 :
                    itemsPerPage = 4;
                break;
                case bodyWrapper.width() >= 801 :
                    itemsPerPage = 3;
                break;     
            }


            initialContainer.css('display','none');

            if (firstInit) {
              items.each(function(i) {
                $(this).attr('data-similar-item-id', i);
              });
            } else {
              if (typeof carousel !== 'undefined' && carousel && itemsPerPage !== 1) {
                carousel.destroy();
                carousel = null;
              }

              var sortedItems = items.sort(function(a,b){ return $(a).attr('data-similar-item-id') - $(b).attr('data-similar-item-id'); });
              sortedItems.appendTo(initialContainer);

              container.find('.viewer').find('ul').remove();

            }

            firstInit = false;

            container.find('.viewer').append('<ul></ul>');
            var ul = container.find('.viewer').find('ul');


            //if (firstInit) {
            //  var initialContainer = container.find('.initial-container');
            //  initialContainer.css('display','none');

            //  var items = initialContainer.find('.similar-item');
            //} else {
            //  items = 
            //}

            var newPage = true;
            var currentPage = 0;
            var itemsInPage = 0;
            var appendToView = true;

            items.each(function(i, el) {
                

                if (newPage) {
                    newPage = false;

                    var li = $('<li></li>');
                    //if ((itemsPerPage > 1 && currentPage === 0) || itemsPerPage === 1) {
                    //  ul.append(li);
                    //}

                    if ((itemsPerPage > 1 && currentPage === 0) || itemsPerPage === 1) {
                      ul.append(li);
                    } else {
                      appendToView = false;
                    }
                }

                if (appendToView) {
                  var currentLI = $(ul.children('li')[currentPage]);

                  $(el).appendTo(currentLI);
                  itemsInPage++;
                }

                if(itemsInPage === itemsPerPage) {
                    newPage = true;
                    currentPage++;
                    itemsInPage = 0;
                }
            });          
            
            if (itemsPerPage === 1) {
              var currentSlide = 0;
              if (carousel) {
                currentSlide = carousel.carouselSwipe.getPos();
              }
              container.find('.dots').empty();
              carousel = new ss.Carousel(container, {});
              carousel.init();
			        carouselEvents();

              carousel.carouselSwipe.slide(currentSlide, 10);
            }

			      //container.find('.ss-compare-button').each(function(i) {
			      //	new ss.CompareButton({container: $(this)});
			      //});
        }

        init();
    };

} (jQuery));
/* END FILE */
var ss = $;

(function ($) {
    /**   
	Main object for setting tabs for Samsung.
    @class $.Tabs
    @constructor
	
	@property {HTMLElement} clicked - tab that was clicked.
	@property {HTMLElements} allTabs - all tabs
	@property {Number} clickedIndex - index of tab clicked
	@property {HTMLElements} tabContent - all tab contents.
    **/
    ss.Tabs = function (element, contents, func) {      
		return {
			clicked: element,
			allTabs: null,
			clickedIndex: 0,
			tabContent: $('.'+contents).children(),
			
			/**
			@function init
			Initialization of functions
			**/
			init: function() {
				var li = this.clicked.parent(),
					ul = li.parent(),
					self = this;
				self.allTabs = ul.children();
				self.clickedIndex = self.allTabs.index(li);

				self.toggle();
			},
			
			/**
			@function toggle
			Shows the correct tab content and sets the tab clicked to active.
			**/
			toggle: function () {
				var self = this;
				self.allTabs.removeClass('active');
				self.tabContent.removeClass('show');
				$(self.clicked).parent().addClass('active');
				$(self.tabContent[self.clickedIndex]).addClass('show');
				
				// Callback function if provided. Returns the active tab content.
				if (func) {
					func($(self.tabContent[self.clickedIndex]));
				}
			}
		};
    };
} (jQuery));/* END FILE */
var ss = $;
/* global window, eventBridge, eventDictionary, console, setTimeout */

(function ($) {
    /**   
	Main toggle object for Samsung.
    @class $.Toggle
    @constructor
	
	@property {HTMLElement} activate - link that activates toggle.
	@property {HTMLElement} content - content to be toggled
	@property {Boolean} changeText - if the text should change when toggling.
	@property {Boolean} autoScroll - NEEDS DESCRIPTION.
    **/
    ss.Toggle = function (link, settings, func) {  
		return {
			activate: link,
			content: (settings.content) ? $(settings.content) : link.next(),
			changeText: (settings.afterText && settings.currText) ? true : false,
			autoScroll: settings.autoScroll,
			
			/**
			@function action
			The toggle action for the content element.
			**/
			action: function () {
				var self = this;
			
				$(self.content).toggleClass('toggled');
				$(self.activate).toggleClass('link-toggled');
                var icon = $(self.activate).find('.icon-plus');
                icon.toggleClass('icon-minus');
                if(icon.hasClass('icon-minus')) icon.find('.blind').text(icon.attr('data-after-text'));
                else icon.find('.blind').text(icon.attr('data-text'));

				self.setHeight($(self.content).parent().hasClass('toggle-content'));
				self.textChange();
				
				if (func) {func();}
				self.attachEvt();

				if($(self.content).hasClass('toggled') && self.autoScroll) {
					if ( $(self.activate).hasClass('_protectScrollOnce') ) {
						$(self.activate).removeClass('_protectScrollOnce');
					}
					else {
						ss.htmlBody.animate({ scrollTop: ss.metrics.elemTop(self.content) }, 1000);
					}
				}
			},
			
			/**
			@function attachEvt
			Attaches a window resize event.
			**/
			attachEvt: function () {
				var self = this;
				
        var content = $(self.content);
				eventBridge.on(eventDictionary.global.RESIZE, function(e, data) {
					if (content.hasClass('toggled')) {
				    self.setHeight($(self.content).parent().hasClass('toggle-content'));
					//var height = 0;

					//var children = content.find("*").not(".toggle-content");
					//$.each(children, function(i,v) {
					//  height += $(v).outerHeight(true);
					//});

					//content.height(height);
					}
				});
			},
			
			/**
			@function textChange
			Changes the text of the activate element.
			**/
			textChange: function () {
				var self = this;
				
				if (self.changeText) {
					var icon;
						
					if ($(self.activate).find('span[class*="icon"]').length > 0) {
						icon = '<span class="'+$(self.activate).find('span').attr('class')+'" />';
					} else {
						icon = '';	
					}
		
					if ($(self.content).hasClass('toggled')) {
						$(self.activate).html(settings.afterText+icon);
					} else {
						$(self.activate).html(settings.currText+icon);
					}
				}
			},
			
			/**
			@function setHeight
			Sets the height of the content element.
			**/
			setHeight: function (toggleParent) {
				var self = this,
                content = $(self.content),
				innerContent = content.find('.innerToggle'),
                contentAlreadyOpen = (content.hasClass('toggled') && content.height() > 0);
				
				if (innerContent){
					innerContent.css('height','');
				}

				content.show(); // added just in case content is hidden.

				var height = (content.hasClass('toggled')) ? self.getActualHeight(content) : 0,
					tabindex = height === 0 ? '-1' : '0';

                if(self.toggleIgnore(content) === false) {
                    content.find('[tabindex]:not([data-no-tab="true"])').attr('tabindex',tabindex);
                    content.find('.toggle-content:not(.toggled) [tabindex]').attr('tabindex',-1);
                }

                content.height(height);
				if (innerContent && innerContent.is(':visible')){
					//var imgHeight = innerContent.parent().find('.items').height() || 0;
					//innerContent.height(imgHeight);
					innerContent.height(height);
				}

                /* ADD ADNStyle */
                var parents = [content.parent()];
                while(parents[parents.length-1].parent().hasClass('toggle-content')){
                    parents.push(parents[parents.length-1].parent());
                }

				if(toggleParent) {
                    toggleParentSetHeight();
				}
                /* ADD ADNStyle */

                function toggleParentSetHeight(){
                    var parent = content.parent();
                    var parentHeight = parent.prop('scrollHeight');
                    var newParentHeight = parentHeight + height;
                    var gapHeight = 0;/* ADD ADNStyle */
                    var len = 0;/* ADD ADNStyle */
                    if(content.hasClass('toggled') && !contentAlreadyOpen) {
                        gapHeight = newParentHeight - parent.height();/* ADD ADNStyle */
                        parent.height(newParentHeight);

                        /* ADD ADNStyle */
                        len = parents.length;
                        while(--len){
                            parents[len].height( parents[len].height() + gapHeight );
                        }
                        /* ADD ADNStyle */
                    }

                    setTimeout(timeout, 500);/* ADD ADNStyle */

                    /* ADD ADNStyle */
                    function timeout(){
                        var parentHeightActual = self.getActualHeight(parent);

                        if (parentHeightActual !== newParentHeight) {
                            gapHeight = parentHeightActual - newParentHeight;
                            parent.height(parentHeightActual);
                            len = parents.length;
                            while(--len){
                                parents[len].height( parents[len].height() + gapHeight );
                            }
                        }
                    }
                    /* ADD ADNStyle */
                }
			},

      getActualHeight: function(elem) {
        var height = 0;
        var children = elem.children();

        $.each(children, function(i,v) {
          var child = $(v); 
          var ignoreHeight = child.attr('data-ignore-height');
          if (typeof ignoreHeight === 'undefined') {
			  if ( $(v).hasClass('reflectHeight') ) {
				  $(v).children().each(function(i,elm){
					  height += $(elm).outerHeight(true); 
				  });
			  }
			  else {
				height += $(v).outerHeight(true);
			  }
          }
        });

        if (height === 0) {
          height = elem.prop('scrollHeight');
        }

				return height;
      },

			/**
			@function toggleIgnore
			Ignores toggle based on 'data-toggle-ignore' attribute
			Value of this attribute must match possible values for ss.metrics.device
			**/
			toggleIgnore: function(toggleContent) {
				var self = toggleContent;

				if (self.attr('data-toggle-ignore') === ss.metrics.device) {
					return true;
				} else {
					return false;
				}
			}
		};
    };

} (jQuery));
/* END FILE */
var ss = $;
/**
 Page object for the Video Player page.

 @module Main
 @submodule Video Player
 @main Main
 **/
/*global window */
/*global console */
/* global setTimeout */
/* global clearTimeout */
/* global brightcove */
/* global eventBridge */
/* global clearTimeout */
/* global eventDictionary */
/* global clearTimeout */
ss.VideoPlayerHandler = {
    init: function () {
		if ( arguments[0] == 'lazyVideo' ) {
			var videoObj = $('#' + arguments[0]);
			var lazyTime = setTimeout(function(){
				clearTimeout(lazyTime);
				ss.VideoPlayerHandler.init(videoObj.attr('id'));	
			}, 100);
		}
		else {
			ss.VideoPlayerHandler.active(arguments[0]);
		}
		if ( typeof(myTemplateLoaded) !== undefined && typeof(myTemplateLoaded)==='function' ) {
			myTemplateLoaded(arguments[0]);
		}
    },

	active: function(id) {
		$.vpList[id] = new ss.VideoPlayer(id);
		//vp.onTemplateLoad($('.BrightcoveExperience').attr('id'));
		$.vpList[id].onTemplateLoad(id);
	}
};
$.vpList = {};
/**
 @class $.VideoPlayer
 @constructor

 @property {Object} BCP - Brightcove Object.
 @property {HTMLElement} videoContainer - the container holding the video.
 @property {Object} videoPlayer - brightcove player api video player
 @property {Object} playProxy
 @property {Object} stopProxy
 @property {Object} stopUnbindProxy
 @property {Object} completeProxy
 @property {Object} experienceModule - Brightcove api module
 @property {Event} showVideoEvent - Show Video Event
 @property {Event} hideVideoEvent - Show Video Event
 **/
ss.VideoPlayer = function (obj_id) {
    var scrollCount, multiPlayerTimer;

	$overlayContainer = $('.close-video');

	startTheOverlay = function() {
          $overlayContainer.removeClass('transparent');
          $overlayContainer.addClass('opaque');
        };
    return {
        BCP: {},
        /*
         videoContainer: $('.video-player'),
         */
        videoContainer: $('#' + obj_id).parents('.video-player'),
        videoPlayer: null,
        playProxy: null,
        stopProxy: null,
        stopUnbindProxy: null,
        completeProxy: null,
        playMediaEvent: null,
        experienceModule: null,
        showVideoEvent: null,
        hideVideoEvent: null,

        /**
         @function init
         Initializaiton function which runs at object instantiation time.
         **/
        init: function () {
//			this.onTemplateLoad($('.BrightcoveExperience').attr('id'));
        },

        /**
         @function onTemplateLoad
         Brightcove template load callback, called when template loads,
         this function stores a reference to the player and modules.
         @param {HTMLElement} experienceID - id of player.
         **/
        onTemplateLoad: function(experienceID) {
            // get a reference to the player and API Modules and Events
            this.showVideoEvent = jQuery.Event(eventDictionary.videoPlayer.EVENT_SHOW_VIDEO);
            this.hideVideoEvent = jQuery.Event(eventDictionary.videoPlayer.EVENT_HIDE_VIDEO);

            //if(!this.hasClass('video-player')) return;
            this.playProxy = $.proxy(this.playVideo, this);
            this.stopProxy = $.proxy(this.stopVideo, this);
            this.stopUnbindProxy = $.proxy(this.stopVideoUnbind, this);
            this.completeProxy = $.proxy(this.completeVideo, this);
            this.playMediaEvent = $.proxy(this.playVideoMediaEvent, this);

            this.BCP.player = brightcove.api.getExperience(experienceID);
            this.BCP.APIModules = brightcove.api.modules.APIModules;
            this.BCP.adEvent = brightcove.api.events.AdEvent;
            this.BCP.mediaEvent = brightcove.api.events.MediaEvent;
			//
			$('body').on('mouseover', function (evt) {
				//console.log("mouseover");
			});
			$('body').on('mouseout', function (evt) {
				//console.log("mouseout");
			});
			//
            this.onTemplateReady();
        },

        /**
         @function onTemplateReady
         Brightcove template ready event handler to ready the player modules for the API,
         set up new event listeners on the video player module for specific playback events that indicate how the user interacts with the player.
         @param {HTMLElement} evtObj - id of player.
         **/
        onTemplateReady: function(evtObj) {
            var bcp = this.BCP,
                self = this,
                bcpPlayer = bcp.player,
                vc = this.videoContainer;

            this.videoContainer.self = this;

            if(bcp.player){
                // get references to modules
                bcp.videoPlayer = bcpPlayer.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
                bcp.experienceModule = bcpPlayer.getModule(brightcove.api.modules.APIModules.EXPERIENCE);

                // add media COMPLETE event listerer
                bcp.videoPlayer.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, this.completeProxy);
                bcp.videoPlayer.addEventListener(brightcove.api.events.MediaEvent.PLAY, this.playMediaEvent);

                //console.log(this);
                //console.log("view : " + this.videoContainer.attr('data-view'));
                if(vc.hasClass('noSwipe')){
                    vc.animate({opacity:0});
                    vc.addClass('not-visible');

                }else{
                    vc.css('opacity', '0');
                    vc.find('object').css('opacity', '1').css('z-index', '1');
                    vc.animate({opacity:1}, 1000);
                }

                if(vc.hasClass('isMulti')){
                    var thumbList = vc.find('.media-thumb-list'),
                        lis = thumbList.find('li'),
                        lisLen = lis.length,
                        thumbController = thumbList.find('.media-thumb-controller'),
                        videoCnt = thumbController.data('videoCount');

                    vc.find('.multi-player').css('padding-left', thumbList.width()+'px');
                    bcp.experienceModule.setSize(vc.width()-thumbList.width(), vc.height());

                    if(videoCnt === 0){
                        thumbController.find('.roll-prev').css('display', 'none');
                    }else if(videoCnt >= lisLen-4){
                        thumbController.find('.roll-next').css('display', 'none');
                        if(videoCnt > lisLen-1){
                            thumbController.data('videoCount', lisLen);
                        }
                    }

                    if(lisLen < 4){
                        thumbController.find('.roll-prev').css('display', 'none');
                        thumbController.find('.roll-next').css('display', 'none');
                        lis.height(thumbList.height()/lisLen);
                    }else{
                        lis.height(thumbList.height()/4);
                    }

                    scrollCount = videoCnt > lisLen-4 ? lisLen-4 : videoCnt;
                    thumbList.find('ul').scrollTop(scrollCount*lis.height());
                }

                this.bindEvents();
            }

        },
          /**** media begin handler ****/
          onMediaBegin : function(evt) {
            startTheOverlay();
          },
          /**** media play handler ****/
          onMediaPlay : function (evt) {
            $overlayContainer.removeClass('transparent');
            $overlayContainer.addClass('opaque');
          },
          /**** media progress handler ****/
          onMediaProgress : function (evt) {
          },
          /**** media stop handler ****/
          onMediaStop : function (evt) {
            $overlayContainer.removeClass('opaque');
            $overlayContainer.addClass('transparent');
          },
        thumbSlide:function (){
            //`//console.log('thumbSlide = ' + scrollCount) ;
            var vc = this.videoContainer,
                thumbList = vc.find('.media-thumb-list'),
                lis = thumbList.find('li'),
                lisLen = lis.length,
                targetHeight = lis.height(),
                thumbController = thumbList.find('.media-thumb-controller');

            thumbList.find('ul').scrollTop(targetHeight*scrollCount);
            if(scrollCount === 0){
                thumbController.find('.roll-prev').css('display', 'none');
            }else if(scrollCount >= lisLen-4){
                thumbController.find('.roll-next').css('display', 'none');
            }else{
                thumbController.find('.roll-prev').css('display', 'block');
                thumbController.find('.roll-next').css('display', 'block');
            }

        },

        /**
         @function bindEvents
         Bind events to elements within video player module
         **/
        bindEvents: function() {
            var self = this,
                vc = self.videoContainer;

            $('.play-btn').animate({opacity:1});
            eventBridge.on(eventDictionary.global.RESIZE, function() {
				if ( self.videoContainer.parents('body').length > 0 ) {
					self.resize();
				}
            });

            $('.play-btn, .play-other-link').each(function (){
                var data = $(this).data();
                if(!data.contents){
                    $(this).animate({opacity:1});
                    $(this).on('click', self.playProxy);
                }
            });

            $('.multi-play-btn').on('click', self.playProxy);

            $('.close-video').each(function (){
                //console.log($(this).parent());
                if($(this).parent().hasClass('video-player')){
                    $(this).on('click', self.stopProxy);
                }
            });

            $('.close-video-player').on('click', self.stopProxy);

            /*
            //$('.media.gallery').on('click', this.stopUnbindProxy);
            $('.media.gallery').on('click', function (e){
                $('.close-video').each(function (){
                    if($(this).parent().hasClass('video-player')) $(this).first().trigger('click', self.stopProxy);
                });

            }); //MODIFY ADNSTYLE
            //$('.media.threesixty').on('click', this.stopUnbindProxy);
            $('.media.threesixty').on('click', function (e){
                $('.close-video').each(function (){
                    if($(this).parent().hasClass('video-player')) $(this).first().trigger('click', self.stopProxy);
                });
            });  // MODIFY ADNSTYLE

            $('.media.sampleimages').on('click', function (e){
                $('.close-video').each(function (){
                    if($(this).parent().hasClass('video-player')) $(this).first().trigger('click', self.stopProxy);
                });
            });
            */
            
            if(vc.hasClass('isMulti')){
                var thumbList = vc.find('.media-thumb-list'),
                    lisLen = thumbList.find('li').length,
                    thumbController = thumbList.find('.media-thumb-controller');

                thumbController.find('.roll-prev').on('click', function (e){
                    if(scrollCount > 0){
                        scrollCount--;
                        self.thumbSlide();
                    }
                });

                thumbController.find('.roll-next').on('click', function (e){
                    if(scrollCount < lisLen-4){
                        scrollCount++;
                        self.thumbSlide();
                    }
                });

            }

            self.accessibilityEvents();
        },

        /**
         @function accessibilityEvents
         Events added for accessibility.
         **/
        accessibilityEvents: function () {
            $('.play-btn').on('keydown', function (e) {
                if (e.keyCode === 13) { // enter button
                    var closeVideoTimeout = setTimeout( function() {
                        $('.close-video').focus();
                        clearTimeout(closeVideoTimeout);
                    }, 1000);
                }
            });

            $('.multi-play-btn').on('keydown', function (e){
                if (e.keyCode === 13) { // enter button
                    var closeVideoTimeout = setTimeout( function() {
                        $('.close-video').focus();
                        clearTimeout(closeVideoTimeout);
                    }, 1000);
                }
            });

            // Must close in order to tab out of player
            $('body').on('keydown', '.close-video:visible', function (e) {
                if (e.keyCode === 9) {
                    e.preventDefault();
                    return false;
                }
                // Give focus back to play button.
                if (e.keyCode === 13) {
                    var playVideoTimeout = setTimeout( function() {
                        $('.play-btn').focus();
                        clearTimeout(playVideoTimeout);
                    }, 461);
                }
            });
        },

        /**
         @function unbindEvents
         Unbind events to elements on home page
         **/
        unbindEvents: function() {
            $('.play-btn').off('click', this.playProxy);
            $('.multi-play-btn').off('click', this.playProxy);
            $('.close-video').off('click', this.stopProxy);
            //$('.media.gallery').off('click', this.stopUnbindProxy);
            //$('.media.threesixty').off('click', this.stopUnbindProxy);
            $('.play-btn').off('keydown');
            $('.multi-play-btn').off('keydown');
            $('.close-video').off('keydown');
        },

        /**
         @function resize
         Resize the iframe created by brightcove player based on width of container.
         **/
        resize: function () {
            var iframe = $('#bcVideo'),
                vc = this.videoContainer;

            vc.css('width','100%');
            //console.log("asd = " + vc.hasClass('isMulti') + ", " + vc.find('.media-thumb-list').width());
            if(vc.hasClass('isMulti')){
                var thumbList = vc.find('.media-thumb-list'),
                    lis = thumbList.find('li'),
                    lisLen = lis.length,
                    bcp = this.BCP;

                if(lis.length < lisLen){
                    lis.height(thumbList.height()/lisLen);
                }else{
                    lis.height(thumbList.height()/4);
                }

                if(multiPlayerTimer){
                    clearTimeout(multiPlayerTimer);
                }
                multiPlayerTimer = setTimeout(function (){
                    vc.find('.multi-player').css('padding-left', thumbList.width()+'px');
                    bcp.experienceModule.setSize(vc.width()-thumbList.width(), vc.height());
                }, 150);
                this.thumbSlide();
                //vc.find('object')
            }else{
                this.BCP.experienceModule.setSize(vc.width(), vc.height());
            }
        },

        /**
         @function playVideo
         Show video container and plays video toggle controls off during video
         @param {HTMLElement} videoID - id of player.
         **/
        playVideo: function(evt_obj) {
            var self = this,
                targetPlayBtn = $(evt_obj.currentTarget),
                matchView = targetPlayBtn.data('view'),
                videoPlayerId = targetPlayBtn.data('videoPlayer');
            //console.log("videoPlayerId = " + videoPlayerId);
            //console.log("self.videoContainer.data('view') = " + self.videoContainer.data('view') + ", matchView = " + matchView);
            if ( !!matchView ) {
                if ( matchView == self.videoContainer.data('view') ) {
                    var vc = self.videoContainer;

                    $(eventBridge).trigger(self.showVideoEvent);
                    vc.removeClass('not-visible').addClass('show-video');
                    self.toggleControls(false);
                    vc.animate({opacity:1}, function() {
                        //self.BCP.videoPlayer.play();
                        //console.log("videoPlayerId = " + videoPlayerId);

                    });

                    if(vc.hasClass('isMulti')){
                        var thumbList = vc.find('.media-thumb-list'),
                            thumbController = thumbList.find('.media-thumb-controller'),
                            lis = thumbList.find('li'),
                            videoCnt;

                        if(videoPlayerId){
                            lis.each(function (index){
                                if(this == targetPlayBtn.parent()[0]){
                                    videoCnt = index;
                                    thumbController.data('videoCount', index);
                                }
                            });
                        }else{
                            videoCnt = parseInt(thumbController.data('videoCount'));
                        }

                        lis.each(function (index){
                            //console.log('index = ' + index + ", videoCnt = " + videoCnt);
                            if(parseInt(index) === parseInt(videoCnt)){
                                $(this).find('.play-btn').css('display', 'none');
                            }else{
                                $(this).find('.play-btn').css('display', 'block');
                            }
                        });

                        vc.find('.media-thumb-list').css('visibility', 'visible');
                        if(!videoPlayerId){
                            videoPlayerId = $(thumbList.find('li')[videoCnt]).find('a').data('videoPlayer');
                        }
                        self.BCP.videoPlayer.loadVideoByID( videoPlayerId );

                        if(multiPlayerTimer){
                            clearTimeout(multiPlayerTimer);
                        }
                        multiPlayerTimer = setTimeout(function (){
                            vc.find('.multi-player').css('padding-left', thumbList.width()+'px');
                            self.BCP.experienceModule.setSize(vc.width()-thumbList.width(), vc.height());
                        }, 150);


                    }else{
                        if(videoPlayerId){
                            self.BCP.videoPlayer.loadVideoByID( videoPlayerId );
                        }else{
                            self.BCP.videoPlayer.play();
                        }
                    }

                }
            }
            else {
                // single by origin
                $(eventBridge).trigger(self.showVideoEvent);

                self.videoContainer.removeClass('not-visible').addClass('show-video');

                self.toggleControls(false);

                self.videoContainer.animate({opacity:1}, function() {
                    //console.log("videoPlayerId = " + videoPlayerId);
                    if(videoPlayerId){
                        self.BCP.videoPlayer.loadVideoByID( videoPlayerId );
                    }else{
                        self.BCP.videoPlayer.play();
                    }
                });
            }
            setTimeout(function (){
                self.resize();
            },1);
        },

        /**
         @function completeVideo
         Rewind video to begining frame upon completion
         **/
        completeVideo: function() {
            this.BCP.videoPlayer.seek(0);
            this.stopVideo();
            $('.close-video').trigger('click');
        },

        /**
         @function stopVideoUnbind
         Stop video unbind
         **/
        stopVideoUnbind: function() {
            this.stopVideo(true);
            this.unbindEvents();
        },

        /**
         @function stopVideo
         Hide video container and stop video
         **/
        stopVideo: function(close_obj)  {
            var self = this;
            var videoObj = $(close_obj.currentTarget).parent();
            //console.log("videoObj.attr('data-view') = " + videoObj.attr('data-view'));

            $(eventBridge).trigger(self.hideVideoEvent);

            if ( !!videoObj.data('view') ) {
                if ( videoObj.is(self.videoContainer) ) {
                    self.BCP.videoPlayer.pause(true);
                }
            }
            else {
                self.BCP.videoPlayer.pause(true);
            }

            if(!videoObj.hasClass('noSwipe')){
                return;
            }

            videoObj.animate({'opacity':'0'}, {duration: 450});

            var stopVideoTimeout = setTimeout( function() {
                //console.log("stopVideoTimeout = " + videoObj);
                videoObj.removeClass('show-video').addClass('not-visible');
                if(videoObj.is(self.videoContainer)){
                    self.toggleControls(true);
                    if(videoObj.hasClass('isMulti')){
                        videoObj.find('.media-thumb-list').css('visibility', 'hidden');
                    }
                }

                clearTimeout(stopVideoTimeout);
            }, 460);
        },

        playVideoMediaEvent : function (evt_obj){
            var self = this,
                carouselArea = self.videoContainer.parents('.ss-carousel');

            if(carouselArea.length > 0){
                var playPauseBtn = carouselArea.find('.pag').find('.dots li a').end().find('#cPlayPause');
                if(!playPauseBtn.hasClass('paused')){
                    playPauseBtn.trigger('click');
                }
            }

        },

        /**
         @function toggleControls
         Shows/hides player controls within video player container.

         @param {Boolean} show - true/false
         **/
        toggleControls: function (show) {
            var cssProps = show ? {opacity:1, 'z-index': 10} : {opacity:0, 'z-index': -1};
            //$('.controls:not(.protect)').animate(cssProps);
            $('.pag.controls:not(.protect)').animate(cssProps);
        }

    };
};


/* END FILE */
var ss = $;
/**
 Page object for the Video Player page.

 @module Main
 @submodule Video Player
 @main Main
 **/
/*global window */
/*global console */
/* global setTimeout */
/* global clearTimeout */
/* global brightcove */
/* global eventBridge */
/* global clearTimeout */
/* global eventDictionary */
/* global clearTimeout */

/**
 @class $.VideoPlayer
 @constructor

 @property {Object} BCP - Brightcove Object.
 @property {HTMLElement} videoContainer - the container holding the video.
 @property {Object} videoPlayer - brightcove player api video player
 @property {Object} playProxy
 @property {Object} stopProxy
 @property {Object} stopUnbindProxy
 @property {Object} completeProxy
 @property {Object} experienceModule - Brightcove api module
 @property {Event} showVideoEvent - Show Video Event
 @property {Event} hideVideoEvent - Show Video Event
 **/
(function ($){
    ss.YoutubePlayer = (function () {

        function bindEvent(playerId){
            var container = document.getElementById(playerId);
            var self = this;
            /*
            if(this.hasClass('noSwipe')){
                //console.log("noSwipe");
                //this.css("opacity", "0");
                this.css('opacity', '0').css('display', 'none');
                this.addClass('not-visible');
            }
            */
            this[0].playVideo = function (youtubePlayerId){
                if(self.hasClass('noSwipe')){
                    self.removeClass('not-visible').addClass('show-video').stop().animate({opacity:1}).css('display', '');
                }
                try{
                    if(youtubePlayerId){
                        this.player.cueVideoById(youtubePlayerId);
                    }else{
                    	
                    	/*
                    	this.player.cueVideoById(this.player.videoid);
                        if(!ss.metrics.isIOS()){
                        } //ios는 자동재생하면 먹통됨.
                        */

                    	if( ss.metrics.isMobile() ){
                    		this.player.cueVideoById(this.player.videoid);
                    	}else{
                    		this.player.playVideo();
                    	}
                    }
                }catch(e){
                    this.errorData = {
                        youtubePlayerId : youtubePlayerId
                    };
                }

            };

            this[0].stopVideo = function (){
                //console.log("stopVideo!!!!");
                if(self.hasClass('noSwipe')){
                    self.removeClass('show-video').addClass('not-visible').stop().animate({opacity:0}).css('display', 'none');
                }
                if(self[0].player && self[0].player.pauseVideo){
                    self[0].player.pauseVideo();
                }
            };
        }

        return {
            showVideoEvent:null,
            hideVideoEvent:null,
            loadYoutube:false,
            init:function (){

                this.showVideoEvent = jQuery.Event(eventDictionary.videoPlayer.EVENT_SHOW_VIDEO);
                this.hideVideoEvent = jQuery.Event(eventDictionary.videoPlayer.EVENT_HIDE_VIDEO);

                if(this.loadYoutube){
                    this.videoSet();
                    this.bindEvents();
                }else{
                    var tag = document.createElement('script');
                    tag.src = 'http://www.youtube.com/iframe_api';
                    var firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                }

            },

            videoSet:function (){
                /*
                var param = { allowScriptAccess: "always" };
                var atts = { id: "myytplayer" };
                var ytplayer;
                swfobject.embedSWF("http://www.youtube.com/v/vqhs69eCfQs?enablejsapi=1&playerapiid=ytplayer&version=3",
                    "myPlayer", "100%", "100%", "8", null, null, param, atts);
                    */

                $('.youtube-player').each(function (){
                    if(this.player){
                        return;
                    }

                    var self = this;
                    var $self = $(this);
                    var youtubeArea = $self.find('div')[0];
                    var width = $self.attr('data-width');
                    var height = $self.attr('data-height');
                    var videoid = $self.attr('data-videoid');

                    $self.css('width', width).css('height', height).css('background-color', '#000000');
                    
                    this.player = new YT.Player(youtubeArea.id, {
                        height: height,
                        width: width,
                        videoId: videoid,
                        wmode: 'transparent',
                        playerVars: { 'autohide': 1, 'wmode':'transparent', "rel":"0"}, // ADD ADNSTYLE 140902 : un packed 관련 일시적 rel 추가
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                    this.player.videoid = videoid;
                    
                    function onPlayerReady(e){
                        if($self.hasClass('noSwipe')){
                            $self.css('opacity', 0).css('display', 'none').addClass('not-visible');
                        }
                        else{
                            $self.css('z-index', '1');
                        }
                       if(self.errorData){
                           self.playVideo(self.errorData.youtubePlayerId);
                           self.errorData = null;
                       }
                    }

                    //console.log('container.id = ' + container.id + ', videoid = ' + videoid);

                    function onPlayerStateChange(e){
                        //console.log('e.data = ' + e.data);
                        //console.log('self = ' + self);
                        var carouselArea = $(self).parents('.ss-carousel');
                        if(e.data === 1 && carouselArea.length > 0){
                            var playPauseBtn = carouselArea.find('.pag').find('.dots li a').end().find('#cPlayPause');
                            if(!playPauseBtn.hasClass('paused')){
                                playPauseBtn.trigger('click');
                            }
                        }
                    }

                    bindEvent.call($('#'+youtubeArea.id).parent(), youtubeArea.id);
                });
            },

            bindEvents:function (){

                $('.play-btn').each(function (){
                    var data = $(this).data();
                    if(data.contents){
                        if(this.player){
                            return;
                        }
                        this.player = true;
                        //$(this).animate({opacity:1});
                        $(this).animate({opacity:1}).css('display', '');
                        $(this).on('click', function (){
                            $('#'+data.contents).parent()[0].playVideo(data.youtubePlayer);
                        });
                    }
                });

                $('.close-video').each(function (){
                    var parent = $(this).parent();
                    if(parent.hasClass('youtube-player')){
                        if(this.player){
                            return;
                        }
                        this.player = true;
                        $(this).on('click', function (){
                            var stopVideo = parent[0].stopVideo;
                            if(stopVideo){
                                stopVideo();
                            }
                        });
                    }
                });

                $('.close-youtube-player').each(function (){
                    if(this.player){
                        return;
                    }
                    this.player = true;
                    $(this).on('click', function (){
                        //console.log($(this).parent()[0]);
                        var stopVideo = $(this).parent()[0].stopVideo;
                        if(stopVideo){
                            stopVideo();
                        }
                    });
                });
            }/*,
            playerReadyCall:function (playerId){
                bindEvent.call($('#'+playerId).parent(), playerId);
            }*/
        };

    })();

}(jQuery));

/*
function onYouTubePlayerReady(playerId){
    //console.log('onYouTubePlayerReady id:' + playerId);
    ss.YoutubePlayer.playerReadyCall(playerId);
}
*/
function onYouTubeIframeAPIReady() {
    ss.YoutubePlayer.videoSet();
    ss.YoutubePlayer.bindEvents();
    ss.YoutubePlayer.loadYoutube = true;
}/* END FILE */

var ss = $;

(function ($) {
	/* global console, window, alert, setTimeout, clearTimeout, eventBridge, eventDictionary, document, Modernizr */

    /** 
	PDP Wow A Closer Look. UI primarily reliant on CSS3 transition feature.
    @class $.ACloserLook
    @constructor 
    **/
	ss.ACloserLook = function() { 
		var closed = true, // Closer look is open or closed
			boxHolder = $('.closer-look'),
			boxes = $('.closer-look > li:not(.close)'),
			closeBtn = boxHolder.find('.close a');
		
		/**
		@function init
		Initialization of functions
		**/
		function init() {
			bindEvents();
			
			if (ss.metrics.isIE8()) {
				boxes.append('<span class="icon-zoomIn"></span>');	
			}
		}
		
		/**
		@function bindEvents
		Events bound to elements.
		**/
		function bindEvents () {
			var focusTimer;
			
			boxes.on(ss.clickEvent, function(e) {
				var $this = $(this);
				if (!$this.hasClass('zoomed') && !closed){
					return;
				}

				// if disclaimer link clicked return
				if ($(e.target).hasClass('disclaim-link')){
					return;
				}
				
				boxHolder.removeClass('full-view');
				$this.addClass('layer');
				
				if ($this.hasClass('zoomed')) {
					$this.removeClass('zoomed');
					closed = true;
					
					// Timer to set focus when box is closed.
					focusTimer = setTimeout(function(){$this.focus(); clearTimeout(focusTimer);},350);
					$this.find('.content').addClass('hide');
				} else {
					closed = false;
					$this.find('.content').removeClass('hide');
				}
				
				setTimer($this);
				boxAccess($this);
			});
			
			// Close button triggers click of opened image.
			closeBtn.on(ss.clickEvent, function(e) {
				boxHolder.find('.zoomed').trigger(ss.clickEvent);
				boxHolder.removeClass('full-view');
			});
			
			// Added for accessibility so hitting enter on keyboard while focused on an <li> "box" will toggle it.
			boxes.on('keyup', function(e) {
				var thisBox = $(this);
				
				if (e.keyCode === 13) {
					thisBox.trigger('click');	
				}
			});
		}
		
		/**
		@function setTimer
		Waits to add certain classes to the box (<li>).
		Timer is needed since the animation has a certain duration set on it .35s
		
		@param {HTMLElement} box - box (li) clicked on.
		**/
		function setTimer(box) {
			var timer;
			
			timer = setTimeout(function() {
				(closed) ? box.removeClass('layer') : box.addClass('zoomed');
				(closed) ? boxHolder.removeClass('full-view'):boxHolder.addClass('full-view');
				clearTimeout(timer);
			}, 350);
		}
		
		/**
		@function boxAccess
		Added for accessibility. Adds tab index to the content/text within each box and gives focus to it.
		Also sets "data-tab-next" to the current zoomed box so you are stuck in a loop (must close before going to next box/li).
		
		@param {HTMLElement} box - box (li) clicked/focused on.
		**/
		function boxAccess(box) {
			var boxContent = box.find('.content'),
				otherBoxes = boxes.not($(box));
										
			// Creates a loop so you must close the zoomed image before proceeding to the next.
			if (!closed) {
				boxContent.attr('tabindex', 0);
							
				//closeBtn.attr('data-tab-next', box.data('focus-id'));
				otherBoxes.attr('tabindex', '-1');	
			} else {
				boxContent.removeAttr('tabindex');
				boxes.attr('tabindex', 0);
			}
		}

		init();
	};

	/**
    ss.ACloserLook = function( settings ) { 

        //portrait: 1018, landscape: 1600
		var 	_$self = settings.container,
				_$thumbs 										= _$self.find( '.thumbs' ),
				_$thumbsAnchors 								= _$thumbs.find( 'a' ),
                _currentIndex                                   = 0,
				_orientation,
				_MAXWIDTH										= 1920,
				_ROW1RECT,
				_ROW2RECT,
				_ROW3RECT,
				//_LEFTCOPYRATIO									= 0.46979167,
				_LEFTCOPYRATIO									= 0.46979167,
				_PRT_IMGTOPRATIO 								= 960/1544,
				//_PRT_IMGTOPRATIOLAST 							= 1230/1544,
				_PRT_IMGTOPRATIOLAST 							= 1175/1544,
				_hasTransitionEv								= false,
				_transitionEndEvs								= 'transitionend webkitTransitionEnd',
                _$stage                                         = _$self.find('.stage'),
                _$fullview                                      = _$self.find('.fullview'),
                _$fullviewClose                                 = _$self.find('.fullview-close'), 
                _$fullviewCloseA                                = _$fullviewClose.find('a'), 
                _$fullviewCloseIMG                              = _$fullviewClose.find('img'), 
                _$copies                                        = _$self.find('.fullview-l-aside1'),
                _$moduleHeading                                 = _$self.find( '.module-heading' ),
                _$landscapeWrapper                              = _$fullview.find('.landscape' ),
                _$portraitWrapper                               = _$fullview.find('.portrait' ),
                _$currentFirstText,
                _$currentLastText,
                _$currentActiveElement,
                _isInFullview                                   = false,
                _stageHeight,
                _stageWidth,
                _animCache                                      = {a: null, img: null, backgroundColor: null, from:{}, to:{}},
				_THROTTLE_DELAY									= 300,
                _inMotion = false;

		if ( _$self.css( 'display' ) !== 'none') {

			setImageAssetSrc();
			resize( undefined, ss.metrics );

		}

        _stageWidth = ss.metrics.wrapperWidth;
		_hasTransitionEv = Modernizr.csstransitions;

        _$fullviewCloseA.attr('data-focus-id','fullview-close');
        _$fullviewCloseIMG.attr('tabindex','-1');
		
		if ( ss.metrics.isIE8() !== 8 ) {
		    eventBridge.on(eventDictionary.global.RESIZE, resize);
        }

        //for the color transition
        _$thumbs.find('img').wrap($('<span></span>'));

        _$self.on(ss.clickEvent, '.thumbs a', onThumbClick);


        _$thumbsAnchors.each(function(i) {
            $(this).attr('data-index', i);
        });

        function onThumbClick(e) {
            e.preventDefault();

            if (_isInFullview) {
                onStartBackToGridView(e);
            } else {
                _currentIndex = parseInt($(this).attr('data-index'), 10);
                onStartExpandFullView( e );
				
				//adnstyle
				$('html, body').animate({ scrollTop:(ss.metrics.elemTop($('.ss-a-closer-look')))}, 1000);
				$(this).find('.zoom-button').addClass('hide');
            }

        }
        // ******* START: Accessibility *******
        //
		// Delegate for gridview keydown
		_$self.on( 'keydown', '.fullview-close a', function(e) {

			var code = (e.keyCode || e.which);

			if (code === 9) {
                e.preventDefault();
                if (e.shiftKey) {
                    _$currentLastText.focus();
                } else {
                    _$currentFirstText.focus();
                }
            }
		});
				//{ 
				//	elem: e.data.elem,
				//	id: e.data.id
				//},

		_$self.on(ss.clickEvent, '.stage', onStartBackToGridView);



		* Sets the image src attribute to the correct asset.
		*
		* @function setImageAssetSrc
		function setImageAssetSrc() {

			if ( ss.metrics.device === 'mobile' || ss.metrics.device === 'mobile-portrait' || ss.metrics.device === 'tablet-portrait' && ss.metrics.isIE8() !== 8) {
				// portrait
				_orientation = 'portrait';
                _$self.removeClass('landscape').addClass('portrait');
				_$thumbs.find( 'img' ).each( function( index ) {

					$( this ).attr( 'src', $( this ).data( 'media-portrait' ) );

				});
			} else {
			    _orientation = 'landscape';
                _$self.removeClass('portrait').addClass('landscape');
			    _$thumbs.find( 'img' ).each( function( index, value) {

			    	$( value ).attr( 'src', $( this ).data( 'media-landscape' ) );

			    });
			}

		}

		* Resizes .thumbs and .fullview classes, .heading-module class is ignored.
		*
		* @function resize
		* @param e {EventObject} Specifying "undefined" indicates a first-time rendering.
		* @param metrics {ss.metrics} 
		function resize( e ) {

			var imgWidth,
				imgHeight,
				rect 				= {},
				clip,
				toValue1,
				toValue2,
				prt_FullviewChangeTO	= 350,
				lnd_FullviewChangeTO	= 300,
                metrics = ss.metrics;

			// Check if image assets need to change
			setImageAssetSrc();

            _stageWidth = ss.metrics.wrapperWidth;
            _stageHeight = getGridHeight( e, metrics, (e === undefined ? false : true) );
			_$stage.css( 'height', _stageHeight );

			// Serialize resizing of elements for smoother repaints
			series([
					resizeElem( _$thumbs.find( 'a:nth-child(1) img' ), 0, metrics ),
					resizeElem( _$thumbs.find( 'a:nth-child(2) img' ), 1, metrics ),
					resizeElem( _$thumbs.find( 'a:nth-child(3) img' ), 2, metrics ),
					resizeElem( _$thumbs.find( 'a:nth-child(4) img' ), 3, metrics ),
					resizeElem( _$thumbs.find( 'a:nth-child(5) img' ), 4, metrics )
				],
				function() { applyHeight( e, metrics ); } 
			);

            updateAnimCache();
            updateCopyInView();
            positionFullviewElements(true);

		}
		
		* Serializes function execution.
		*
		* @function series
		* @param callbacks [{function}] Array of functions
		* @param finalizeHeight {function} Function to execute upon completion of function array execution.
		function series( callbacks, finalizeHeight ) {

			function next() {

				var callback = callbacks.shift();
				if (callback) {
					callback();
					next();
				}
				else {
					finalizeHeight();
				}

			}
			next();

		}

		* Gets the slide ID prefix which is dependent on module orientation.
		*
		* @function getSlideIdPrefix
		* @returns {String} String is empty if orientation is not defined.
		function getSlideIdPrefix() {
            return _orientation === 'landscape' ? '#lnd-slide' : '#prt-slide';
		}

		* Gets the height of the grid view.
		*
		* @function getGridHeight
		* @param e {EventObject} Specifying "undefined" indicates a first-time rendering.
		* @param metrics {ss.metrics}
		* @returns {Number} The height in pixels.
		function getGridHeight( e, metrics, calcHeight ) {

			var height;

			if ( e === undefined && !calcHeight ) {
				//Initial render
				if ( metrics.device === 'mobile' || metrics.device === 'mobile-landscape' || metrics.device === 'tablet-portrait' || metrics.wrapperWidth === 678 ) {
					height = 800;
				}
				else if ( metrics.device === 'tablet-landscape' ) {
					height = 1080;
				}
				else if ( metrics.device === 'desktop' ) {
					height = 1200;
				}
			}
			else {
				// Allow children to dynamically determine height
				if ( _$self.find( '.thumbs img.fullview-img' ).length === 0 ) {
					// In gridview
					if ( _orientation === 'landscape' ) {
						height = _ROW1RECT.bottom + _ROW2RECT.bottom;
					}
					else {
						height = (_ROW1RECT !== undefined && _ROW2RECT !== undefined && _ROW3RECT !== undefined) ?
									(_ROW1RECT.bottom + _ROW2RECT.bottom + _ROW3RECT.bottom) :
									_$thumbs.outerHeight();
					}
				}
			}

			return height;

		}

		* Applies height to .thumbs class region.
		*
		* @function applyHeight
		* @param e {EventObject}
		* @param metrics {ss.Metrics}
		function applyHeight( e, metrics ) {

			// reapply in case children adulterated height
            _stageHeight = getGridHeight( ( e === undefined ? undefined : e ), metrics, true );
			_$stage.css( 'height', _stageHeight );

		}

		* Resizes all image elements, irrespective of whether they are in gridview or not.
		*
		* @function resizeElem
		* @param img {Image Element}
		* @param index {Integer}
		* @param metrics {ss.Metrics}
		function resizeElem( img, index, metrics ) {

		    onLayoutGridItem.call(
		    		img,
		    		getGridMetrics.call(
		    		img,
		    		metrics,
		    		index
		    	)
		    );
		}

		* Gets the metrics for rendering a specific image in the grid view.
		*
		* @function getGridMetrics
		* @param metrics {ss.metrics}
		* @param index {Integer} Image index (0 - 4)
		* @returns {
		*		isIE8: 					{Boolean},
		*		index: 					{Integer},
		*		gridWidth: 				{Number},
		*		gridHeight: 			{Number},
		*		gridOffsetTop: 			{Number},
		*		rowCellWidth: 			{Number},
		*		rowCellHeight: 			{Number},
		*		rowCellOffsetTop: 		{Number},
		*		rowCellOffsetLeft: 		{Number},
		*		imgWidth: 				{Number},
		*		imgHeight: 				{Number},
		*		clip: 					{String}
		*	}
		function getGridMetrics( metrics, index ) {

			// maxCopyWidth = 902;
			// maxImgWidth = 1018;

			var 	// img
					row1MaxImgWidth 	= 698,
					row1MaxImgHeight	= 698,
					row2MaxImgWidth 	= 1018,
					row2MaxImgHeight 	= 1018,

					nonMobilePgWidth,

					// grid
					gridHeight,

					// grid cell
					rowCellWidth,
					rowCellHeight,

					rowCellOffsetTop,
					rowCellOffsetLeft,

					imgWidth,
					imgHeight,

					// clippings
					isIE8						= false,
					clip,
					rect 						= {},
					row1BMarginRatio, 
					row1RMarginRatio,
					row2BMarginRatio,
					row2RMarginRatio,
					row3BMarginRatio,
					row3RMarginRatio,
					row1ImgRatio3x2 			= 0.36354167,
					row1ImgWidthRatio2x2x1,
					row1ImgHeightRatio2x2x1,
					row2ImgWidthRatio2x2x1,
					row1HeightRatio,
					row2ImgHeightRatio2x2x1,
					row3ImgHeightRatio2x2x1,
					row3HeightRatio;

			if ( _orientation === 'landscape' ) {
				// 3 x 2 grid view
				// set vars
				row1BMarginRatio	= 189/698;
				row1RMarginRatio	= 58/698;
				row2BMarginRatio	= 0.5;
				row2RMarginRatio	= 58/1018;

				nonMobilePgWidth = ss.metrics.wrapperWidth;
				rowCellWidth = (index <= 2 ? _stageWidth/3 : _stageWidth/2);

				// Set image and clipping dimensions
				if ( index <= 2 ) {
					imgHeight = imgWidth = nonMobilePgWidth*row1ImgRatio3x2;

					rect.top = 0;
					rect.right = imgWidth - (imgWidth*row1RMarginRatio);
					rect.bottom = imgHeight - (imgHeight*row1BMarginRatio);
					rect.left = 0;

					_ROW1RECT = rect; 

					// console.log( 'row1: imgWidth = ' + imgWidth + ', imgHeight = ' + imgHeight + ', rect = ' + JSON.stringify(rect) );
				}
				else {
					
					imgHeight = imgWidth = nonMobilePgWidth/2;

					rect.top = 0;
					rect.right = imgWidth;		// - (imgWidth*row2RMarginRatio);
					rect.bottom = imgHeight - (imgHeight*row2BMarginRatio);
					rect.left = 0;

					_ROW2RECT = rect;

					// console.log( 'row2: imgWidth = ' + imgWidth + ', imgHeight = ' + imgHeight + ', rect = ' + JSON.stringify(rect) );
				}

				rowCellHeight = imgHeight - rect.bottom;

				rowCellOffsetTop 	= index <= 2 ? 0 : _ROW1RECT.bottom;
				rowCellOffsetLeft  	= index <= 2 ? (rowCellWidth*index) : (rowCellWidth*(index - 3));

				gridHeight = _$self.find( '.thumbs a:first-child img' ).outerHeight() + _$self.find( '.thumbs a:last-child img' ).outerHeight();
			}
			else {
				// 2 x 2 x 1 grid view
				row1BMarginRatio = row2BMarginRatio	= 110/580;
				row1RMarginRatio = row2RMarginRatio	= 40/580;
				row3BMarginRatio = 0.43;
				row3RMarginRatio = 1;
				row1ImgWidthRatio2x2x1 = row2ImgWidthRatio2x2x1 = 0.5;
				row1ImgHeightRatio2x2x1 = row2ImgHeightRatio2x2x1 = 466/1544;
				row3ImgHeightRatio2x2x1 = 1080/1544;
				var row3ImgWidthRatio2x2x1 = 0.5;

				// Set clipping dimensions
				if ( index <= 1 ) {

					rowCellWidth = _stageWidth*row1ImgWidthRatio2x2x1;
					imgWidth = imgHeight = _stageWidth*row1ImgWidthRatio2x2x1;

					rect.top = 0;
					rect.right = imgWidth + (imgWidth*row1RMarginRatio);
					rect.bottom = imgHeight - (imgHeight*row1BMarginRatio);
					rect.left = 0;

					_ROW1RECT = rect; 

				}
				else if ( index > 1 && index <= 3 ) {
					rowCellWidth = _stageWidth*row2ImgWidthRatio2x2x1;
					imgWidth = imgHeight = _stageWidth*row2ImgWidthRatio2x2x1;

					rect.top = 0;
					rect.right = imgWidth + (imgWidth*row2RMarginRatio);
					rect.bottom = imgHeight - (imgHeight*row2BMarginRatio);
					rect.left = 0;

					_ROW2RECT = rect; 

				}
				else {
					imgWidth = rowCellWidth = _stageWidth;
					imgHeight = _stageWidth*row3ImgHeightRatio2x2x1;

					rect.top = 0;
					rect.right = imgWidth;
					rect.bottom = imgHeight - (imgHeight*row3BMarginRatio);
					rect.left = 0;

					_ROW3RECT = rect;

				}

				rowCellHeight = imgHeight - rect.bottom; 
				
				if ( index <= 1 ) {
					rowCellOffsetTop = 0;
				}
				else if (index >= 2 && index <= 3 ) {
					rowCellOffsetTop = _ROW1RECT.bottom;
				}
				else {
					rowCellOffsetTop = _ROW1RECT.bottom + _ROW2RECT.bottom;
				}

				rowCellOffsetLeft = ( index === 0 || index === 2 || index === 4 ) ? 0 : rowCellWidth;
				gridHeight = 0;

			}

			if ( ss.metrics.isIE8 !== 8 ) {
				// rect( top, right, bottom, left )
				clip = 'rect(' + rect.top + 'px,' + rect.right + 'px,' + rect.bottom + 'px,' + rect.left + 'px)';
			}
			else {
				// rect( top right bottom left ) IE8
				isIE8 = true;
				clip = 'rect(' + rect.top + 'px ' + rect.right + 'px ' + rect.bottom + 'px ' + rect.left + 'px)';
			}

			return {

				isIE8: 					isIE8,
				index: 					index,
				gridWidth: 				_$self.outerWidth(),
				gridHeight: 			gridHeight,
				rowCellWidth: 			rowCellWidth,
				rowCellHeight: 			rowCellHeight,
				rowCellOffsetTop: 		rowCellOffsetTop,
				rowCellOffsetLeft: 		rowCellOffsetLeft,
				imgWidth: 				imgWidth,
				imgHeight: 				imgHeight,
				clip: 					clip

			};

		}

		* Layouts out an image in the grid view.
		*
		* @function onLayoutGridItem
		* @param gridMetrics {Object}
		function onLayoutGridItem( gridMetrics ) {

			var $thumb = _$thumbs.find( 'a:nth-child(' + (gridMetrics.index + 1) + ')' ),
                $img = $(this),
                theWidth,
                theHeight,
                theTop = gridMetrics.rowCellOffsetTop,
                theLeft = gridMetrics.rowCellOffsetLeft;

            if (_orientation === 'landscape') {
				theHeight = gridMetrics.index <= 2 ? _ROW1RECT.bottom : _ROW2RECT.bottom;
				theWidth = gridMetrics.index <= 2 ? _ROW1RECT.right : _ROW2RECT.right;
            } else {
				if ( gridMetrics.index <= 1 ) {
				    theHeight = _ROW1RECT.bottom;
					theWidth =  _ROW1RECT.right;
				}
				else if ( gridMetrics.index >= 2 && gridMetrics.index <= 3 ) {
					theHeight = _ROW2RECT.bottom;
					theWidth = _ROW2RECT.right;
				}
				else {
					theHeight = _ROW3RECT.bottom;
					theWidth =  _ROW3RECT.right;
				}

            }

            $thumb.attr('data-grid-width', theWidth);
            $thumb.attr('data-grid-height', theHeight);
            $thumb.attr('data-grid-top', theTop);
            $thumb.attr('data-grid-left', theLeft);
            $img.attr('data-grid-width', gridMetrics.imgWidth);
            $img.attr('data-grid-height', gridMetrics.imgHeight);
            $img.attr('data-grid-clip', gridMetrics.clip);

            //if the current image is in fullview, do not change its dimensions
            if (_animCache.img && $img[0] === _animCache.img[0]) {return;}

            $thumb.css({
                width:theWidth,
                height:theHeight,
                top:theTop,
                left:theLeft
            });

			$img.css({
					width: gridMetrics.imgWidth,
					//height: gridMetrics.imgHeight,
					'clip': gridMetrics.clip,
                    top:0,
                    left:0
			});

		}

        function updateAnimCache() {

            if (!_isInFullview) {return;}

            var thumbsW = _$thumbs.outerWidth(),
                thumbsH = _$thumbs.outerHeight(),
                wrapW = ss.metrics.wrapperWidth,
				row2ImgRatio3x2 = 0.53020833,
				row2ImgRatio3x2PRT = 0.761898734,
                rect = {};


		    var theTop = parseFloat(_animCache.a.attr('data-grid-top'), 10),
                theLeft = parseFloat(_animCache.a.attr('data-grid-left'), 10),
                theWidth = parseFloat(_animCache.a.attr('data-grid-width'), 10),
                theHeight = parseFloat(_animCache.a.attr('data-grid-height'), 10),
                theImgHeight = parseFloat(_animCache.img.attr('data-grid-height'), 10),
                theImgWidth = parseFloat(_animCache.img.attr('data-grid-width'), 10),
                theClip = _animCache.img.attr('data-grid-clip'),
                theNewTop = (_orientation === 'portrait' ? (thumbsH*(1-(_currentIndex === 4 ? _PRT_IMGTOPRATIOLAST : _PRT_IMGTOPRATIO))) : 0),
                theNewWidth = (_orientation === 'portrait' ? (_currentIndex === 4 ? thumbsW : (wrapW * row2ImgRatio3x2PRT)) : (wrapW < _MAXWIDTH ? wrapW * row2ImgRatio3x2 : 1018)),
                theNewLeft = (_orientation === 'portrait' ? (wrapW - theNewWidth) : (wrapW < _MAXWIDTH ? wrapW * _LEFTCOPYRATIO : 902)),
                theNewHeight = _stageHeight * (_orientation === 'portrait' ? _PRT_IMGTOPRATIO : 1);
                //theNewWidth = (_orientation === 'portrait' ? thumbsW : (wrapW < _MAXWIDTH ? wrapW * row2ImgRatio3x2 : 1018));

		    rect.top = 0;
		    rect.bottom = _stageHeight;
		    rect.left = 0;
            rect.right = theNewWidth;

			var clip = 'rect(' + rect.top + 'px,' + rect.right + 'px,' + rect.bottom + 'px,' + rect.left + 'px)';

            _animCache.from = {
                clip: theClip,
                top: theTop,
                left: theLeft,
                width: theWidth,
                height: theHeight,
                imgWidth: theImgWidth,
                imgHeight: theImgHeight
            };

            _animCache.to = {
                clip: clip,
                width: theNewWidth,
                height: theNewHeight,
                top: theNewTop,
                left: theNewLeft
            };

        }

        function positionFullviewElements(quick) {

            if (!_isInFullview) {return;}

            quick = typeof quick === 'undefined' ? false : true;

            _$thumbs.addClass('no-transitions');

            _animCache.a.css({
                'z-index':'2000',
                'width':_stageWidth,
                'height':_stageHeight,
                'left':0,
                'top':0,
                'background':'transparent'
            });

            if (_animCache.backgroundColor) {
                _animCache.span.css('background-color',_animCache.backgroundColor);
            } else {
                _animCache.span.css('background-color','');
            }

			// Get elements ready in temporary position for animation
            if (!quick) {
                _animCache.span.css({
                    width: _animCache.from.width,
                    height: _animCache.from.height,
                    'margin-left': _animCache.from.left,
                    'margin-top': _animCache.from.top,
                    display:'block',
                    'z-index':40
                });
                _animCache.img.css({
                    top:_animCache.from.top,
                    left:_animCache.from.left,
                    'z-index':50
                });
            }

			if ( _orientation === 'landscape' ) {
				_animCache.copyWrapper.css( {'width': (_stageWidth < _MAXWIDTH ? _stageWidth*_LEFTCOPYRATIO : 902)} );
			}

            setTimeout(function() {
                if (!quick) {_$thumbs.removeClass('no-transitions');}
                _animCache.span.css({
                    'width':ss.metrics.wrapperWidth,
                    'height':_stageHeight,
                    'margin-left':0,
                    'margin-top':0
                });
			    _animCache.img.css({
			    		'clip': 	_animCache.to.clip,
			    		width: 	    _animCache.to.width,
			    		//height:     _animCache.to.height,
                        'left':     _animCache.to.left,
                        'top':      _animCache.to.top 
			    });

            }, 25);
        }

        function updateCopyInView(remainHidden) {
            _$copies.addClass('hide');
            var copy = _$self.find( '.'+ _orientation + ' ' + getSlideIdPrefix() + _currentIndex ),
                copyWrapper;
			if ( _orientation === 'landscape' ) {copyWrapper = _$landscapeWrapper;}
            else {copyWrapper = _$portraitWrapper;}

            _animCache.copy = copy;
            _animCache.copyWrapper = copyWrapper;

            if (!remainHidden) {
                _animCache.copy.removeClass('hide');
                _animCache.copyWrapper.removeClass('hide');
            }

            if (copy.attr('data-bkgdclr')) {
                _animCache.backgroundColor = '#'+copy.attr('data-bkgdclr');
            } else {
                _animCache.backgroundColor = null;
            }
        }

		* Handler for managing the start of an image expansion.
		*
		* @function onStartExpandFullView
		* @param e {EventObject}
		function onStartExpandFullView( e ) {

			e.preventDefault();

            if (_inMotion) {return false;} 

            _$currentActiveElement = document.activeElement;
            _isInFullview = true;
            _inMotion = true;

			var 	$this 				= $( e.currentTarget ),
					row2ImgRatio3x2 	= 0.53020833,
					rect 				= {},
					clip,
					toValue,
					bkgdClr;

            _animCache.img = $this.find('img');
		    _animCache.a = $this;
            _animCache.span = $this.find('span');


            updateCopyInView(true);
			_$fullview.removeClass( 'hide' );

			// set background-color of fullview layout, which covers grid (order important) 
			if ( ss.metrics.isIE8() === 8 ) {
				_$thumbsAnchors.css( 'visibility', 'hidden');
				_animCache.a.css( 'visibility', 'visible');
				_animCache.a.addClass( 'ie8bkgd' + (_currentIndex + 1) );
                if (_animCache.backgroundColor) {
                    _animCache.a.css('background-color',_animCache.backgroundColor);
                } else {
                    _animCache.a.css('background-color','');
                }
			}
			
            updateAnimCache();
            positionFullviewElements();

		    toValue = setTimeout( function() {
		    	onCompleteExpandFullView();
		    	clearTimeout( toValue );
		    }, (_hasTransitionEv ? 500 : 25));

		}

		* Handler for managing the completion of an image expansion.
		*
		* @function onCompleteExpandFullView
		* @param e {EventObject}
		function onCompleteExpandFullView( e ) {

            //console.log('on complete expand');
            _inMotion = false;

			// Remove events
			_animCache.img.off( _transitionEndEvs );

            _animCache.copy.removeClass('hide');
            _animCache.copyWrapper.removeClass('hide');
		    _$fullview.removeClass( 'hide' );

			_$fullviewCloseA.removeClass( 'hide' );
			_$fullviewCloseIMG.removeClass( 'hide' );
			_$fullviewClose.removeClass( 'hide' );

            var tabindexes = _animCache.copyWrapper.find('[tabindex]:visible' );
                _$currentFirstText = tabindexes.first(),
                _$currentLastText = tabindexes.last();



            if (_$self[0] === _$currentActiveElement || $.contains(_$self[0], _$currentActiveElement)) {
                _$currentFirstText.focus();
            }
            _$currentActiveElement = null;

            _$currentFirstText.attr('data-tab-previous', 'fullview-close');
            _$currentLastText.attr('data-tab-next', 'fullview-close');



			// delegate event (note target covers 2 z-indexes )

		}

		* Handler for managing the start of an image transition back to grid view.
		*
		* @function onStartBackToGridView
		* @param e {EventObject}
		function onStartBackToGridView( e ) {
			e.preventDefault();

            if (_inMotion || !_isInFullview) {return false;} 
			
            _$currentActiveElement = document.activeElement;

            _inMotion = true;

			// hide fullview elements
            _$thumbs.removeClass('no-transitions');
            _animCache.copyWrapper.addClass('hide');
            _animCache.copy.addClass('hide');
			_$fullviewClose.addClass( 'hide' );
			_$fullview.addClass( 'hide' );

			if ( ss.metrics.isIE8() === 8 ) {
                _$thumbsAnchors.css('visibility','visible');
				_animCache.a.removeClass( 'ie8BkGd' + (_currentIndex + 1) );
			}

            _animCache.img.css({
                width:_animCache.from.imgWidth,
                //height:_animCache.from.imgHeight,
                top:_animCache.from.top,
                left:_animCache.from.left,
                clip:_animCache.from.clip
            });

            _animCache.span.css({
                width:_animCache.from.width,
                height:_animCache.from.height,
                'margin-top':_animCache.from.top,
                'margin-left':_animCache.from.left
            });

		    var toValue = setTimeout( function() {
		    	onCompleteBackToGridView();
		    	clearTimeout( toValue );
		    }, (_hasTransitionEv ? 500 : 0) );
			
		}

		* Handler for managing the completion of an image transition back to grid view.
		*
		* @function onStartBackToGridView
		* @param e {EventObject}
		function onCompleteBackToGridView( e ) {

            //console.log('on complete back');
            _animCache.a.css({
                width:_animCache.from.width,
                height:_animCache.from.height,
                top:_animCache.from.top,
                left:_animCache.from.left,
                'z-index':20
            });
            _$thumbs.addClass('no-transitions');

            _animCache.img.css({
                top:0,
                left:0
            });

            setTimeout(function() {
                _$thumbs.removeClass('no-transitions');
            }, 25);

			_animCache.img.off( _transitionEndEvs );

            
            if (_$self[0] === _$currentActiveElement || $.contains(_$self[0], _$currentActiveElement)) {
                _animCache.a.focus();
            }

            _animCache.a = null;
            _animCache.img = null;
            _animCache.span = null;
            _animCache.backgroundColor = null;
            _animCache.to = {};
            _animCache.from = {};

            _inMotion = false;
            _$currentActiveElement = null;
            _isInFullview = false;
			
			/// adnstyle
			_$thumbs.find('.zoom-button').removeClass('hide');


		}


		return {


		};

	};
*/
} (jQuery));
/* END FILE */
var ss = $;

(function ($) {
	/* global setTimeout, clearTimeout, Modernizr, document, Swipe, window, console, eventBridge, eventDictionary, alert */
	
    /**   
	  Multiple Carousel Items object for Samsung.
    @class $.Carousel
    @constructor
	
	  @property {HTMLElement} el - carousel element.
	  @property {Number} curr - current slide
	  @property {Object} items - all the <li> elements in carousel
    **/

    ss.MultipleItemsViewCarousel = function (options) { 
 
        var returnObj =  {
            $container: options.container, 
            $viewer: null,
            $itemsContainer: null,
            $dots: null,
            numItems: 0,
            itemWidth: 0,
            perPage: options.perPage,
            current: 0,
            currentPage: 0,
            currentLeft: 0,
            currentPageX: null,
            startPageX: null,
            currentDirection: null,
            pageWidth: 0,
            maxGoTo: 0,
            dragging: false,
            animating: false,
            containerMouseEntered: false,
            
            /**
            @function init
            Initialization of functions
            **/
            init: function() {
                this.$container.addClass('ss-multiple-items-view-carousel');
                this.$itemsContainer = this.$container.find('.viewer > ul');
                this.$itemsContainer.addClass('ss-multiple-items-view-carousel-items-container');
                this.$itemsContainer.css('left',0);
                this.$previousControl = this.$container.find('.prev');
                this.$nextControl = this.$container.find('.next');
                this.initItems();
                this.bindEvents();
            },

            initItems: function() {
                var self = this;
                this.$items = this.$itemsContainer.find('> li');
                this.numItems = this.$items.length;
                this.refresh();
            },
            
            refresh: function() {
                var self = this;
                this.itemWidth = ss.metrics.wrapperWidth / this.perPage;
                this.$itemsContainer.css('width', (this.itemWidth * this.numItems));
                this.$items.each(function(index, item) {
                    $(item).css({
                        width: self.itemWidth
                    });    
                });
                
                this.defineInnerLinks();
                this.setNumPages();
                this.setMaxGoTo();
                this.initDots();
                this.goTo(this.current, true);
            },

            initDots: function() {
                var jump = this.$container.find('.pag');
                
                jump.empty();
                jump.append('<div class="dots"><ul></ul></div>');
                
                for (var i=0;i<this.numPages;i++) {
                    var link = '<a href="javascript:void(0);" data-index="'+i+'" aria-label="Go to slide '+(i+1)+'">Slide '+(i+1)+'</a>';
                    jump.find('ul').append('<li>'+link+'</li>');
                }
                
                this.$dots = jump.find('li');
                
                jump.css('display','block');
            },
            
            /**
            @function bindEvents
            Binds events to the arrow buttons and the pagination.
            **/
            bindEvents: function() {
                var self = this;
                this.$container.on('mouseenter', function() {
                    self.containerMouseEntered = true;
                    self.refreshControls();
                });
                
                this.$container.on('mouseleave', function() {
                    self.containerMouseEntered = false;
                    self.refreshControls();
                });
                
                this.$previousControl.on(ss.clickEvent, function() {
                    self.previousPage();
                });
                this.$nextControl.on(ss.clickEvent, function() {
                    self.nextPage();
                });
                
                this.$container.on(ss.clickEvent + ' focus', '[data-index]', function() {
                    var index = parseInt($(this).attr('data-index'),10);
                    self.goToPage(index);
                });
                
                var swipeOptions = {
                    triggerOnTouchEnd : true,        
                    swipeStatus : function(event, phase, direction, distance) {
                        self.onDrag(event, phase, direction, distance);
                    },
                    //swipe: function(event, direction, distance, duration) {
                    //  self.onSwipe(event, direction, distance, duration);
                    //},
                    allowPageScroll:'vertical',
                    threshold:75,
                    excludedElements:'label, button, input, select, textarea, .noSwipe'
                };
                
                this.$container.on('keydown', function(e) {
                    self.onKeydown(e);
                });
                this.$container.swipe('destroy');
                this.$container.swipe(swipeOptions);

            },


            refreshControls: function() {
            
                if (ss.metrics.device !== 'desktop' || !this.containerMouseEntered) {
                    this.$previousControl.hide();
                    this.$nextControl.hide();
                    return;
                }
                
                if (this.currentPage === 0) {
                  this.$nextControl.show();
                
                    if (document.activeElement === this.$previousControl[0]) {
                        this.$nextControl.focus();
                    }
                    this.$previousControl.hide();
                } else {
                    this.$previousControl.show();
                }
                
                if (this.currentPage === this.numPages - 1) {
                    this.$previousControl.show();
                    
                    if (document.activeElement === this.$nextControl[0]) {
                        this.$previousControl.focus();
                    }
                    this.$nextControl.hide();
                } else {
                    this.$nextControl.show();
                }
            },
            
            onKeydown: function(event) {
                var self = this,
                    target = $(event.target);
                
                if (this.animating) {event.preventDefault(); return false;}
                
                
                if (event.keyCode === 9) {
                
                
                    if (event.shiftKey) {

                        //if its the first dot
                        if (target.is('[data-index="0"]')) {
                            event.preventDefault();
                            this.goToPage(this.numPages - 1);
                            setTimeout(function() {
                                $(self.$items[self.$items.length - 1]).find('.lastInnerLink').first().focus();
                            }, 500);
                        } else {
                            var previousPageIndex = (this.perPage * (this.currentPage)) - 1;
                            if (!$.contains(this.$items[previousPageIndex+1], target[0])) {
                                return;
                            }
                            if (this.currentPage !== 0 && target.hasClass('firstInnerLink')) {
                                event.preventDefault();
                                this.previousPage();
                                setTimeout(function() {
                                    $(self.$items[previousPageIndex]).find('.lastInnerLink').first().focus();
                                }, 500);
                            }
                        }
                    } else if (this.currentPage !== (this.numPages - 1)) {
                        var nextPageIndex = this.perPage * (this.currentPage + 1);
                        if (!$.contains(this.$items[nextPageIndex-1], target[0])) {
                            return;
                        }
                        if (target.hasClass('lastInnerLink')) {
                            event.preventDefault();
                            this.nextPage();
                            setTimeout(function() {
                                $(self.$items[nextPageIndex]).find('.firstInnerLink').first().focus();
                            }, 500);
                        }
                    }
                
                
                }
            },
            
            defineInnerLinks: function() {
                this.$items.each(function() {
                  var links = $(this).find('a, button');
                
                  links.first().addClass('firstInnerLink');
                  links.last().addClass('lastInnerLink');
                });
            },
            
            onDrag: function(event, phase, direction, distance) {
                var pageX;
                if (typeof event.touches !== 'undefined' && event.touches.length > 0) {
                    pageX = event.touches[0].pageX; 
                } else {
                    pageX = event.pageX;
                }  
                if (!this.currentPageX) {this.currentPageX = pageX; return;}
                
                if (phase === 'move') {
                    direction = this.currentPageX < pageX ? 'right' : 'left';
                    this.currentDirection = direction;
                    
                    if (((direction === 'left' && !this.isAtEnd()) || (direction === 'right' && !this.isAtBeginning())) && distance > 25) {
                    
                        var diff = Math.abs(pageX - this.currentPageX);
                        
                        this.currentPageX = pageX;
                        
                        var newLeft = this.currentLeft + (diff * (direction === 'left' ? -1 : 1)),
                            previousPageLeft = this.leftValueForItem(this.previousPageItem()),
                            nextPageLeft = this.leftValueForItem(this.nextPageItem());
                        
                        this.updateContainerPosition(newLeft, true);
                    }
                
                } else if (phase === 'cancel') {
                    this.goToPage(this.currentPage);
                    //} else if (phase === 'end' || (phase === 'move' && distance > 150)) {
                } else if (phase === 'end' && distance > 25) {
                    if (direction === 'left') {
                        //console.log('drag next page');
                        this.nextPage();
                    } else if (direction === 'right') {
                        //console.log('drag previous page');
                        this.previousPage();
                    }
                }
                
                if (phase === 'cancel' || phase === 'end') {
                    this.dragging = false;
                    this.currentPageX = null;
                }
            },
            
            onSwipe: function(event, direction, distance, duration) {
                if (direction === 'right') {
                    this.previousPage();
                } else if (direction === 'left') {
                    this.nextPage();
                }
            },
            
            setNumPages: function() {
                this.numPages = Math.ceil(this.numItems / this.perPage);
            },
            
            setMaxGoTo: function() {
                if (this.numPages === 1) {
                    this.maxGoTo = 0;
                } else {
                    var extra = this.numItems % this.perPage;
                    this.maxGoTo = (this.perPage * (this.numPages-2)) + extra;
                }
            },
            
            isAtEnd: function() {
                return this.currentLeft <= this.leftValueForItem(this.maxGoTo);
            },
            isAtBeginning: function() {
                return this.currentLeft >= 0;
            },
            setCurrentPage: function() {
                var ceiling = this.isAtBeginning() ? 0 : Math.ceil(this.current / this.perPage);
                this.currentPage = ceiling;
                this.$dots.removeClass('current');
                $(this.$dots[this.currentPage]).addClass('current');
                this.refreshControls();
            },
            
            nextPageItem: function() {
                var item = (this.perPage * (this.currentPage + 1));
                if (item > this.maxGoTo) {item = this.maxGoTo;}
                
                return item;
            },
            
            previousPageItem: function() {
                var newPage = this.currentPage - 1;
                return (newPage === 0 ? 0 : ((this.perPage * newPage)));
            },
            
            leftValueForItem: function(i) {
                return i*this.itemWidth*-1;
            },
            
            nextPage: function() {
                if (this.currentPage < this.numPages-1) {
                    this.goTo(this.nextPageItem());
                } else {
                    this.goTo(this.current);
                }
            },
            
            previousPage: function() {
                if (this.currentPage > 0) {
                    this.goTo(this.previousPageItem());
                } else {
                    this.goTo(0);
                }
            },
            
            goToPage: function(i) {
                if (this.currentPage !== i) {
                    var item = this.perPage * i;
                    
                    if (item > this.maxGoTo) {item = this.maxGoTo;}
                    
                    this.goTo(item);
                }
            },
            
            updateContainerPosition: function(left, immediate, callback) {
                var self = this;
                var speed = typeof immediate !== 'undefined' && immediate ? 0 : 300;
                if (this.animating && speed > 0) {return;}
                callback = callback || function() {
                    self.animating = false;
                };
                this.animating = true;
                this.currentLeft = left;
                //this.$itemsContainer.animate({'left': this.currentLeft}, speed, 'linear', callback);
                //-webkit-transform: translate3d(0px,0px,0px);
                if (Modernizr.csstransitions) {
                    this.$itemsContainer.css({
                      'transition-duration': speed+'ms',
                      'transform': 'translate3d('+left+'px,0px,0px)',
                      '-webkit-transition-duration': speed+'ms',
                      '-webkit-transform': 'translate3d('+left+'px,0px,0px)',
                      '-moz-transition-duration': speed+'ms',
                      '-moz-transform': 'translate3d('+left+'px,0px,0px)',
                      '-khtml-transition-duration': speed+'ms',
                      '-khtml-transform': 'translate3d('+left+'px,0px,0px)',
                      '-o-transition-duration': speed+'ms',
                      '-o-transform': 'translate3d('+left+'px,0px,0px)'
                      
                    });
                    if (speed > 0) {
                        setTimeout(function() {
                            callback();
                        }, speed);
                    } else {
                        this.animating = false;
                    }
                } else {
                    this.$itemsContainer.animate({'left': left}, speed, 'linear', callback);
                }
            },

            goTo: function(i, immediate) {
                //console.log('going to - ' + i);
                var self = this;
                if (this.canGo(i)) {
                    this.updateContainerPosition(this.leftValueForItem(i), (immediate ? immediate : false), function() {
                        self.animating = false;
                    });
                    this.current = i;
                    this.setCurrentPage();
                }
            },
            
            canGo: function(i) {
                return (i>=0 && i<=this.maxGoTo);
            },
            
            
            /**
            @function destroy
            Function to destroy carousel.
            **/
            destroy: function() {
                this.$container.off('mouseenter');
                this.$previousControl.off(ss.clickEvent);
                this.$nextControl.off(ss.clickEvent);
                this.$container.off(ss.clickEvent);
                this.$container.swipe('destroy');
            }
			
        };

        returnObj.init();
        return returnObj;
    };
} (jQuery));

/* END FILE */
var ss = $;

/** -- FILE: pdp-moretolove.js -- **/
/**
More to Love module for pdp pages.

@module Main
@submodule PDPMoreToLove
@main Main
**/


/*global window, document, setInterval, clearInterval, Modernizr, eventBridge, eventDictionary, setTimeout, clearTimeout, console, Math, setHeroSize */

(function ($) {
    /**
    PDPMoreToLove class

    @class $.PDPMoreToLove
    @constructor
    **/
    ss.PDPMoreToLove = function (params) {
        var container = $('.moretolove-module');
        var moretoloveItems = container.find('li');


        /**
        Initializaiton function which runs at object instantiation time.

        @method init
        **/
        function init() {   
            initMoreToLove();
        }

        /**
        @function initMoreToLove
        Setup More to Love module
        **/
        function initMoreToLove() {
            moreToLoveAltClasses();
            eventBridge.on(eventDictionary.global.RESIZE, function(){
                checkHeight();
            });
        }

        /**
        Apply alternating classes style in IE8
        **/
        function moreToLoveAltClasses() {
            var i;
            var item;
            var item2;

            for(i=0;i<moretoloveItems.length;i++){
                item = moretoloveItems.eq(i);
                i % 2 === 0 ? item.addClass('odd') : item.addClass('even');
            }
            for(i=2;i<moretoloveItems.length;i++){
                item = moretoloveItems.eq(i);
                item2 = moretoloveItems.eq(i+1);
                item.addClass('alternate');
                item2.addClass('alternate');
                i+=3;
            }
            checkHeight();
        }
        function checkHeight(){
            var height=0;
            var i;
            for(i=0;i<moretoloveItems.length;i++){
                var item = moretoloveItems.eq(i);
                item.css('height','');
                if (item.height()>height){
                    height=item.height();
                }
            }         
            moretoloveItems.height(height+10);
        }
        
        init();
    };
} (jQuery));

$(function() {
    new ss.PDPMoreToLove();
});/* END FILE */
var ss = $;

/** -- FILE: pdp-reviews.js -- **/
/**
reviews module for pdp pages.

@module Main
@submodule PDPReviews
@main Main
**/

/*global window, document, setInterval, clearInterval, Modernizr, eventBridge, eventDictionary, setTimeout, clearTimeout, console, Math, setHeroSize */

(function ($) {
	/**
	PDPReviews class

	@class $.PDPReviews
	@constructor
	**/
	ss.PDPReviews = function (params) {
	    /**
	    Reviews module.

	    @property reviewsModule
	    **/
	    var reviewsModule = $('.reviews-module');
	    
	    /**
	    Reviews sort button.

	    @property reviewSortButton
	    **/
	    var reviewSortButton = reviewsModule.find('.review-controls .sort-button');
	    
	    /**
	    Reviews module tabs.

	    @property reviewsModuleTabs
	    **/
	    var reviewsModuleTabs = reviewsModule.find('.rating-type-toggle li a');

        /**
        Review Sort Popover.

        @property reviewSortPopover
        **/
        var reviewSortPopover;


	    /**
	    Initializaiton function which runs at object instantiation time.

	    @method init
	    **/
	    function init() {
	        bindEvents();
	        ratingSortTabIndex();
	    }

        /**
        Bind events.

        @method bindEvents
        **/
        function bindEvents() {

            reviewsModule.on(ss.clickEvent, '.review-sort-popover .sort', function() {
                //reviewSortPopover.hide();

                reviewSortButton.find('p').text($(this).attr('data-sort-text'));
            });

            reviewsModuleTabs.on(ss.clickEvent, function() {
                new ss.Tabs($(this), $(this).parents('ul').data('contents')).init();
            });

            reviewsModule.on(ss.clickEvent, '.reviews.expert .review .text .expand-button', function() {
                var collapsedContent = $(this).parent().find('.collapsed');
                var ellipses = $(this).parent().find('.ellipses');
                if(collapsedContent.hasClass('hide')) {
                    collapsedContent.removeClass('hide');
                    ellipses.hide();
                    $(this).text($(this).attr('data-see-less-text'));

                } else {
                    collapsedContent.addClass('hide');
                    ellipses.show();
                    $(this).text($(this).attr('data-see-more-text'));
                }
            });


            reviewsModule.find('.sort-list a').on(ss.clickEvent, function() {
                var sortButton = reviewsModule.find('.sort-button');

                reviewsModule.find('.sort-list a.selected').removeClass('selected');
                $(this).addClass('selected');
                sortButton.find('.sort-button-text').html($(this).text() + ' <span class="icon-plus icon icon-minus"></span>');

                sortButton.click().focus();
                  
                // @SDS This is where interaction with the service would occur based on filter type.
                var filterType = $(this).attr('data-filter-type');


            });
        }

        /** 
        @function ratingSortTabIndex
        Modify tab index of reviews sort option based upon window size
        **/
        function ratingSortTabIndex() {
            if(ss.metrics.device !== 'desktop'){
                reviewsModule.find('.sort-list a').attr('tabindex', '-1');
            }
        }
	    init();
	};
} (jQuery));


$(function() {
	if ($('.reviews-module').length>0){
		new ss.PDPReviews();
	}
	/* INSTANTIATE HERE*/
});/* END FILE */
var ss = $;

/** -- FILE: pdp-utils.js -- **/
/**
pdp utilities.

@module Main
@submodule PDPUtils
@main Main
**/

/*global window, document, setInterval, clearInterval, Modernizr, eventBridge, eventDictionary, setTimeout, clearTimeout, console, Math, alert, setHeroSize */

(function ($) {
    /**
    @class $.PDPUtils
    @constructor
    **/
    ss.PDPUtils = {};

    /**
    PDPGallery class
    @class $.PDPUtils.PDPGallery
    @constructor
    **/
    ss.PDPUtils.PDPGallery = function (params) {
		
		// Defaults & Extend defaults and passed params
		var defaults = {zoom: true, useCloseButton : true},
			opts = $.extend(defaults, params);
		
		// HTML Elements
        var container = $('.gallery-module'), 
            containerAnim = false,
            assetContainer = container.find('.gallery-module-product'), 
            galleryButton = $('.media-module').find('.gallery'),
            closeButton = (opts.useCloseButton) ? $('.gallery-module').find('.close-button') : null,
            zoomIn = (opts.zoom) ? container.find('.zoom-in-button') : null,
            zoomOut = (opts.zoom) ? container.find('.zoom-out-button') : null,
			products = opts.products,
			heroContainer = $('.hero-module'),
			heroStage = $('.hero-stage');
			
		// Thumbnail gallery related variables
		var thumbnailGallery = container.find('.thumbnail-gallery'),
			prevArrow = thumbnailGallery.find('.prev'),
            nextArrow = thumbnailGallery.find('.next'),
			thumbs = {curr: 0, anim: false},
			assetBaseURL = 'http://images.samsung.com/is/image/samsung/',
			firstLoad = true, 
            isPanning = false, 
			colorPicker = {popover: null, popoverArgs: {}},
            currentSwatchID;

        /**
        @function init
		Initialization of functions.
        **/
        function init() {
			if(products.length > 1) {
				createColorPicker();
                colorPicker.popover = new ss.Popover('.gallery-module .gallery-module-controls .color-picker', colorPicker.popoverArgs);
            } else {
				container.find('.color-picker').hide();	
			}

            setupThumbnailGallery(0);
            bindEvents();
        }
		
		 /**
        @function createColorPicker
		Creates the swatches and color picker popover.
        **/
		function createColorPicker() {
			var selected = container.find('.selected-option'),
				optionsUL = container.find('.options');
				
			$.each(products, function(i) {
				var swatch = products[i].swatchColor;
				swatch = swatch.substring(0, 1).toUpperCase() + swatch.substring(1, swatch.length);
				
				if (i === 0) {
					selected.html('<span data-swatch-color="'+swatch.toLowerCase()+'" class="swatch '+swatch.toLowerCase()+'"></span>'+swatch.toLowerCase());	
				}
				
				optionsUL.append('<li data-value="'+swatch+'"><a data-focus-id="color-select-option-'+i+'" data-enter-next="gallery-color-picker" tabindex="-1" href="javascript:void(0);"><span data-swatch-color="'+swatch.toLowerCase()+'" class="swatch '+swatch.toLowerCase()+'"></span>'+swatch.toLowerCase()+'</a></li>');
			});
		}

		/**
        @function bindEvents
		Events bound to elements.
        **/
        function bindEvents() {
			var galleryButton = $('.media-module').find('.gallery');
			
			if(opts.zoom){
				container.on(ss.clickEvent, '.asset', function() {
					var elem = $(this);
			
					if(isPanning) {return;}
					if(elem.attr('data-zoom-direction') === 'in') {
						zoomIn.trigger('click');
					} else {
						zoomOut.trigger('click');
					}
				});
			}

			if(opts.useCloseButton){
				closeButton.on('click', function() {
					$('.media-module .media.current').removeClass('current');
					closePopover();
					eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_HERO_SHOW));
				});                
			}
			
			// Media gallery button click
            galleryButton.on('click', function() {
				closePopover();
				
                if(!containerAnim) {
                    $('.media-module .media.current').removeClass('current');
                    galleryButton.addClass('current');

                    containerAnim = true;
					ss.scrollWrapper.scrollTop(0);

                    eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_GALLERY_SHOW));
                    eventBridge.trigger(jQuery.Event(eventDictionary.pdpStandard.EVENT_THREESIXTY_PAUSE));

                    if(opts.zoom){
                        $('.asset.current').panzoom('reset');  
                    }
                }
            });

            thumbnailGallery.on(ss.clickEvent, '.thumbnail', function() {
                if(!$(this).hasClass('current')) {
                    $(thumbnailGallery).find('.thumbnail.current').removeClass('current');

                    $(this).addClass('current');

                    loadAsset($(this).attr('data-asset-url'), $(this).attr('data-thumb-index'));

                    if(opts.zoom){
                        $('.asset.current').panzoom('reset');  
                    }   

                }
            });
			
			carouselEvents();

			// Click event applied to swatches in color picker
            if(products.length > 1) {
                container.on(ss.clickEvent, '.options li', function() {
                    var thisSwatch = $(this).find('.swatch');

                    if(thisSwatch.attr('data-swatch-color') !== currentSwatchID) {
                       	var swatchIndex = 0;

                        $.each(products, function(i) {
                            if(products[i].swatchColor === thisSwatch.attr('data-swatch-color')) {
                                swatchIndex = i;
                            }
                        });

                        setupThumbnailGallery(swatchIndex);
                    }
                }); 
            }
			
			// Showing the hero event
			eventBridge.on(eventDictionary.pdpStandard.EVENT_HERO_SHOW, function(e, data) {
               	heroContainer.removeClass('blind');
				heroStage.removeClass('current-gallery current-360');
				
				$('.threesixty-module, .gallery-module').animate({top:container.height()} ,400, function() {
					containerAnim = false;
					$(eventBridge).trigger(jQuery.Event(eventDictionary.dom.DOM_REFRESH));
				});	

				var timer = setTimeout(function(){$('.threesixty-module, .gallery-module').hide(); clearTimeout(timer);}, 401); // added to hide the panels
            });
			
			// Showing the gallery 
            eventBridge.on(eventDictionary.pdpStandard.EVENT_GALLERY_SHOW, function(e, data) {
				heroStage.removeClass('current-360');
                container.css('zIndex', 24).show().animate({top:0}, function() {
					containerAnim = false;
					heroContainer.addClass('blind');
					heroStage.addClass('current-gallery');
				});
            });
			
			// Showing 360 gallery
            eventBridge.on(eventDictionary.pdpStandard.EVENT_THREESIXTY_SHOW, function(e, data) {
                container.css({'zIndex': 23, top: '100%'}).hide();
            });
        }
		
		/**
		@function carouselEvents
		Events bound to elements specifically in the thumbnail gallery carousel, ie arrows, swipe
		**/
		function carouselEvents () {
			 nextArrow.on(ss.clickEvent, function(e) {
                if (thumbs.curr === thumbnailGallery.find('.thumbnail').length-4 || $(this).hasClass('disabled')) {
                    e.preventDefault();
                } else {
                    thumbs.curr++;
                    slideThumbnails();
                }
            });

            prevArrow.on(ss.clickEvent, function(e) {
                if (thumbs.curr === 0 || $(this).hasClass('disabled')) {
                    e.preventDefault(); 
                } else {
                    thumbs.curr--;
                    slideThumbnails();
                }
            });
			
			thumbnailGallery.on('swipeleft', function(e) {
                var maxPos = thumbnailGallery.find('.thumbnail').length - 4;

                if (thumbs.curr === maxPos && !thumbs.anim || $(this).hasClass('disabled')) {
                    e.preventDefault();     
                } else {
                    thumbs.curr++;
                    slideThumbnails();
                }
            }).on('swiperight', function(e) {
                if (thumbs.curr === 0 && !thumbs.anim || $(this).hasClass('disabled')) {
                    e.preventDefault(); 
                } else {
                    thumbs.curr--;
                    slideThumbnails();
                }
            });   
		}
		
		/**
		@function closePopover
		Closes all open popovers
		**/
		function closePopover () {
			if (ss.Popover.activePopover !== undefined) {
                ss.Popover.activePopover.hide();
            }	
		}
		
		/**
        @function setupThumbnailGallery
		Builds the HTML for the thumbnails and calls the appropriate functions and events.
		
		@param {Integer} swatchIndex - index of specific swatch in JSON variable being passed.
        **/
        function setupThumbnailGallery(swatchIndex) {
            thumbnailGallery.find('.wrap').empty();

            thumbs.curr = 0;
            currentSwatchID = products[swatchIndex].swatchColor;
			
			// Loops through entire images array to build thumbnails
            $.each(products[swatchIndex].images, function(i) {
				var image = products[swatchIndex].images[i],
					thumb = $('<a class="thumbnail" href="javascript:void(0);" alt="This is the alt text."><span class="blind">Item '+i+' thumbnail</span></a>');
				
				thumbnailGallery.find('.wrap').append(thumb);
				thumb.attr({'data-thumb-index': i, 'data-asset-url': image.asset}).append('<img src="' + image.thumbnail + '" alt="This is the alt text." />');

                if(i === 0) {thumb.addClass('current');}
            });

            initArrowControls();

			// Loads the first thumbnail image asset
            loadAsset($(thumbnailGallery.find('.thumbnail')[0]).attr('data-asset-url'), 0);
            
            thumbnailGallery.find('.thumbnail').each(function(i) {             
                $(this).css({'left': (i * 25) + '%'});
            });

            var thumbnails = thumbnailGallery.find('.thumbnail'),
				total = thumbnails.length;
            
			
			thumbnails.on('keyup', function(e){
				var thumb = $(this),
					index = parseInt(thumb.attr('data-thumb-index'), 10);
					
				thumbs.curr = index;				
				
				if (e.which === 9) {
					if (thumbs.curr >= total-3) {
						return false;
					} else {
						slideThumbnails();
					}
				}
			});
        }

		/**
        @function initArrowControls
		Controls the state of the arrows for the thumbnails.
		**/
		function initArrowControls() {
		
			if(thumbs.curr === 0) {
				prevArrow.addClass('disabled');
				nextArrow.removeClass('disabled');
			} else {
				prevArrow.removeClass('disabled');
				nextArrow.removeClass('disabled');
			}
			
			if(thumbs.curr === thumbnailGallery.find('.thumbnail').length-4) {
				prevArrow.removeClass('disabled');
				nextArrow.addClass('disabled');
			}
		}
		
		/**
        @function slideThumbnails
		Handles the sliding of the thumbnails carousel.
		**/
        function slideThumbnails() {
			initArrowControls();            

            thumbs.anim = true;

            thumbnailGallery.find('.thumbnail').animate({marginLeft: (-1 * thumbs.curr * 25) + '%'}, 500, function () {
                thumbs.anim = false;
            });
        }
		
		/**
        @function loadAsset
		Loads the correct asset based on params below.
		
		@param {String} url - the url of the asset.
		@param {Integer} index - index of the product swatch.
        **/
        function loadAsset(url, index) {
            assetContainer.find('.asset.current').removeClass('current');

            if(assetContainer.find('.asset[data-thumb-index="' + index + '"][data-swatch-color="' + currentSwatchID + '"]').length !== 0) {
				assetContainer.find('.asset[data-thumb-index="' + index + '"][data-swatch-color="' + currentSwatchID + '"]').addClass('current');
            } else {
                var asset = $('<div class="asset"></div>');
				
                assetContainer.append(asset);
				asset.attr({'data-thumb-index': index, 'data-swatch-color': currentSwatchID}).addClass('current');
				// Loads the full screen image based on param passed
                /*new ss.AsyncImageLoader({
                    container: asset, 
                    imagePath: assetBaseURL+url,
                    altText: 'This is the alt text.',
                    caption: products[0].images[index].caption !== undefined ? products[0].images[index].caption : '',
                    instantLoad: true
                });*/
				
				ss.spinner({where: asset}, function(){
                    var loadingAnimation,
                        loadingAsset;

                        asset.append('<img alt="loading" class="loading-asset" />');
                        loadingAnimation = asset.find('.spinner-container');
                        loadingAsset = asset.find('.loading-asset');
                        loadingAsset.css({'visibility':'hidden'});
                        
                        loadingAnimation.css({
                            'position' : 'absolute',
                            'left' : Math.round((asset.width() - 50) / 2),
                            'top' : Math.round((asset.height() - 50) / 2)
                        });

                        loadingAsset.on('load', function() {
                            loadingAnimation.remove();
                            loadingAsset.css({'visibility':'visible'});
                        });

                        loadingAsset.attr({'src': assetBaseURL+url, 'alt': 'this is alt text'});
                        loadingAsset.removeAttr('data-src');
                });

				// Zoom statement 
                if(opts.zoom){
                    asset.attr('data-zoom-direction', 'in');
                    if(Modernizr.mq('only all')) {
						var maxScale = 5,
							minScale = 1;

						// PanZoom setup
						asset.panzoom({
							$zoomIn: container.find('.zoom-in-button'),
							$zoomOut: container.find('.zoom-out-button'),
							minScale: minScale,
							maxScale: maxScale,
							transition: true,
							onStart: function() {
								var onStartTimeout = setTimeout(function() {
									isPanning = true;
									clearTimeout(onStartTimeout);
								}, 200);
							},
							onEnd: function() {
								var onEndTimeout = setTimeout(function() {
									isPanning = false;
									clearTimeout(onEndTimeout);
								}, 200);
							},
							onZoom: function(e, panzoom) {
								var currentZoom = panzoom.getMatrix()[0];
								if (currentZoom === maxScale) {
									asset.attr('data-zoom-direction', 'out');
								} else if (currentZoom === minScale) {
									asset.attr('data-zoom-direction', 'in');
								}
							}
						});
                    } else {
						new ss.PDPUtils.IE8Zoom({
							container: asset,
							zoomIn: container.find('.zoom-in-button'),
							zoomOut: container.find('.zoom-out-button'),
							scale: 14
						});
                    }
                }
				// END Zoom statement 
            }
        }

        init();
    };

	ss.PDPUtils.IE8Zoom = function (params) {
		var container = params.container,
			zoomIn = params.zoomIn,
			zoomOut = params.zoomOut,
			maxScale = (params.scale-1),
			currentScale = 0,
			breakpoints = [],
			currentDims = {
				width: 0,
				height: 0,
				left: 0,
				top: 0,
				'marginLeft':0
			};
		
		function init() {
			refreshDimensions();
			bindEvents();
		}
		
		function bindEvents() {
			zoomIn.on('click', function() {zoom('in');});
			zoomOut.on('click', function() {zoom('out');});
		}
		
		function refreshDimensions() {
			var positionToUse = container.is(':visible') ? 'offset' : 'position';
			currentDims = {
				width: (container.outerWidth()),
				height: (container.outerHeight()),
				left: (container[positionToUse]().left),
				top: (parseInt(container.css('top'),10)),
				'marginLeft':0
			};
			
			breakpoints[0] = currentDims;     
			for (var i=1,len=(maxScale+1);i<len;i++) {
				var b = breakpoints[i-1];
				var newW = b.width + (b.width * 0.2);
				var newH = b.height + (b.height * 0.2);
				var newL = b.left - ((newW - b.width)/2);
				var newT = b.top - ((newH - b.height)/2);
			
				breakpoints[i] = {
					width:newW,
					height:newH,
					//left:newL,
					left:'50%',
					top:newT,
					//'marginLeft':0
					'marginLeft':-(newW/2)
				};     
			}
		}
		
		function zoom(which) {
			if (which === 'in' && currentScale < maxScale) {
				currentScale = currentScale + 1;
				container.css(breakpoints[currentScale]);
			} else if (which === 'out' && currentScale > 0) {
				currentScale = currentScale - 1;
				container.css(breakpoints[currentScale]);
			}
			
			if (currentScale === 0) {
				container.removeAttr('style');
				container.attr('data-zoom-direction', 'in');
			} else if (currentScale === maxScale) {
				container.attr('data-zoom-direction', 'out');
				
			}
		}
		
		init();
	};

} (jQuery));