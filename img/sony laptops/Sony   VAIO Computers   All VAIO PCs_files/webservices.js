function resetProductTabs(type){
  var tab = $jQ ('#product_container .tabBar > ul > li'), content = $jQ('#product_container .page'),activeTab = null;
  //hide all the tabs
  tab.removeClass('active');
  content.removeClass('active');
  if(type === 'resources'){
    activeTab = $jQ('#product_container .tabBar > ul > li#tab_menu5');
    if(activeTab.length){
      $jQ('#product_container .tabBar > ul > li#tab_menu5').addClass('active');
      $jQ('#product_container #tab_menu5_content').addClass('active');
    }else{
      tab.eq(0).addClass('active');
      content.eq(0).addClass('active');
    }
  }else{
    tab.eq(0).addClass('active');
    content.eq(0).addClass('active');
  }
};

/**
*! Utility for creating objects in older browsers
*/
if(typeof Object.create!=="function"){Object.create=function(obj){function F(){}F.prototype=obj;return new F()}};

if(window.location.protocol + '//' + window.location.hostname + '/bbsc/home.do?%23redirect=NAB' == window.location.href){
  window.location.href = 'http://pro.sony.com/bbsc/ssr/mkt-nab2013/?XID=F:redirect:nab2013';
}

if(window.location.href == "http://pro.sony.com/bbsc/ssr/mkt-infocomm/"){
  window.location.href = 'http://pro.sony.com/bbsc/home.do';
}

function addNAB2013ID(name){
  if(!document.body || document.body == undefined || document.body == null){
    return setTimeout(addNAB2013ID,5);
  }else{
    document.body.setAttribute('id','NAB2013_Beyond_Def');
  }
}

function addNAB2013IDPages(name){
  if(!document.body || document.body == undefined || document.body == null){
    return setTimeout(addNAB2013IDPages,5);
  }else{
    document.body.setAttribute('id','NAB2013_Beyond');
  }
}

var temp = window.location.pathname;
if(temp == "/bbsc/ssr/mkt-nab2013/" || temp == "/bbsc/ssr/mkt-nab2013/mkt-nab2013new/" || temp == "/bbsc/ssr/mkt-nab2013/mkt-nab2013new/product-NEWPROD2013/"){
  addNAB2013ID();
}else if(temp.substr(0,22) == "/bbsc/ssr/mkt-nab2013/"){
  addNAB2013IDPages();
}



/**
*! Underscore.js 1.3.3
*/
(function(){function r(a,c,d){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a._chain&&(a=a._wrapped);c._chain&&(c=c._wrapped);if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return!1;switch(e){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var f=d.length;f--;)if(d[f]==a)return!0;d.push(a);var f=0,g=!0;if("[object Array]"==e){if(f=a.length,g=f==c.length)for(;f--&&(g=f in a==f in c&&r(a[f],c[f],d)););}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,h)&&!f--)break;
g=!f}}d.pop();return g}var s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b=function(a){return new m(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,
c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.map===z)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&
a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,
c,b){var e;G(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(D&&a.every===D)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,
a,g,h)))return o});return!!e};var G=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(E&&a.some===E)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&
(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){d=Math.floor(Math.random()*(f+1));b[f]=b[d];b[d]=a});return b};b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};
j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,
0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,
e=[];a.length<3&&(c=true);b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1),true);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=
i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=
1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));H.prototype=a.prototype;var b=new H,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=
i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=
g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments;d&&!e&&a.apply(f,g);clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));
return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=L||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&
c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var c={};j(b.flatten(i.call(arguments,1)),function(b){b in a&&(c[b]=a[b])});return c};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=
function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFunction=function(a){return l.call(a)=="[object Function]"};
b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,
b){return K.call(a,b)};b.noConflict=function(){s._=I;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){M(c,b[c]=a[c])})};var N=0;b.uniqueId=
function(a){var b=N++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=function(a){return a.replace(P,function(a,b){return n[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(O,function(a){return"\\"+n[a]}).replace(d.escape||
u,function(a,b){return"'+\n_.escape("+w(b)+")+\n'"}).replace(d.interpolate||u,function(a,b){return"'+\n("+w(b)+")+\n'"}).replace(d.evaluate||u,function(a,b){return"';\n"+w(b)+"\n;__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};
b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var x=function(a,c){return c?b(a).chain():a},M=function(a,c){m.prototype[a]=function(){var a=i.call(arguments);J.call(a,this._wrapped);return x(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return x(d,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return x(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);

/**
*! Underscore.js Extend String
*/
(function(k){var o=String.prototype.trim,l=function(a,b){for(var f=[];0<b;f[--b]=a);return f.join("")},c=function(a){return function(){for(var b=Array.prototype.slice.call(arguments),f=0;f<b.length;f++)b[f]=null==b[f]?"":""+b[f];return a.apply(null,b)}},m=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}var b=function(){b.cache.hasOwnProperty(arguments[0])||(b.cache[arguments[0]]=b.parse(arguments[0]));return b.format.call(null,b.cache[arguments[0]],arguments)};
b.format=function(b,n){var h=1,d=b.length,e="",c=[],i,j,g,k;for(i=0;i<d;i++)if(e=a(b[i]),"string"===e)c.push(b[i]);else if("array"===e){g=b[i];if(g[2]){e=n[h];for(j=0;j<g[2].length;j++){if(!e.hasOwnProperty(g[2][j]))throw m('[_.sprintf] property "%s" does not exist',g[2][j]);e=e[g[2][j]]}}else e=g[1]?n[g[1]]:n[h++];if(/[^s]/.test(g[8])&&"number"!=a(e))throw m("[_.sprintf] expecting number but found %s",a(e));switch(g[8]){case "b":e=e.toString(2);break;case "c":e=String.fromCharCode(e);break;case "d":e=
parseInt(e,10);break;case "e":e=g[7]?e.toExponential(g[7]):e.toExponential();break;case "f":e=g[7]?parseFloat(e).toFixed(g[7]):parseFloat(e);break;case "o":e=e.toString(8);break;case "s":e=(e=""+e)&&g[7]?e.substring(0,g[7]):e;break;case "u":e=Math.abs(e);break;case "x":e=e.toString(16);break;case "X":e=e.toString(16).toUpperCase()}e=/[def]/.test(g[8])&&g[3]&&0<=e?"+"+e:e;j=g[4]?"0"==g[4]?"0":g[4].charAt(1):" ";k=g[6]-(""+e).length;j=g[6]?l(j,k):"";c.push(g[5]?e+j:j+e)}return c.join("")};b.cache={};
b.parse=function(a){for(var b=[],h=[],c=0;a;){if(null!==(b=/^[^\x25]+/.exec(a)))h.push(b[0]);else if(null!==(b=/^\x25{2}/.exec(a)))h.push("%");else if(null!==(b=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(a))){if(b[2]){var c=c|1,e=[],d=b[2],i=[];if(null!==(i=/^([a-z_][a-z_\d]*)/i.exec(d)))for(e.push(i[1]);""!==(d=d.substring(i[0].length));)if(null!==(i=/^\.([a-z_][a-z_\d]*)/i.exec(d)))e.push(i[1]);else if(null!==(i=/^\[(\d+)\]/.exec(d)))e.push(i[1]);
else throw"[_.sprintf] huh?";else throw"[_.sprintf] huh?";b[2]=e}else c|=2;if(3===c)throw"[_.sprintf] mixing positional and named placeholders is not (yet) supported";h.push(b)}else throw"[_.sprintf] huh?";a=a.substring(b[0].length)}return h};return b}(),d={VERSION:"2.0.0",isBlank:c(function(a){return/^\s*$/.test(a)}),stripTags:c(function(a){return a.replace(/<\/?[^>]+>/ig,"")}),capitalize:c(function(a){return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()}),chop:c(function(a,b){for(var b=
1*b||0||a.length,f=[],c=0;c<a.length;)f.push(a.slice(c,c+b)),c+=b;return f}),clean:c(function(a){return d.strip(a.replace(/\s+/g," "))}),count:c(function(a,b){for(var f=0,c,d=0;d<a.length;)c=a.indexOf(b,d),0<=c&&f++,d=d+(0<=c?c:0)+b.length;return f}),chars:c(function(a){return a.split("")}),escapeHTML:c(function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}),unescapeHTML:c(function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,
">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&")}),escapeRegExp:c(function(a){return a.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")}),insert:c(function(a,b,f){a=a.split("");a.splice(1*b||0,0,f);return a.join("")}),include:c(function(a,b){return-1!==a.indexOf(b)}),join:c(function(a){var b=Array.prototype.slice.call(arguments);return b.join(b.shift())}),lines:c(function(a){return a.split("\n")}),reverse:c(function(a){return Array.prototype.reverse.apply((""+a).split("")).join("")}),
splice:c(function(a,b,f,c){a=a.split("");a.splice(1*b||0,1*f||0,c);return a.join("")}),startsWith:c(function(a,b){return a.length>=b.length&&a.substring(0,b.length)===b}),endsWith:c(function(a,b){return a.length>=b.length&&a.substring(a.length-b.length)===b}),succ:c(function(a){var b=a.split("");b.splice(a.length-1,1,String.fromCharCode(a.charCodeAt(a.length-1)+1));return b.join("")}),titleize:c(function(a){for(var a=a.split(" "),b,f=0;f<a.length;f++)b=a[f].split(""),"undefined"!==typeof b[0]&&(b[0]=
b[0].toUpperCase()),f+1===a.length?a[f]=b.join(""):a[f]=b.join("")+" ";return a.join("")}),camelize:c(function(a){return d.trim(a).replace(/(\-|_|\s)+(.)?/g,function(a,f,c){return c?c.toUpperCase():""})}),underscored:function(a){return d.trim(a).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/\-|\s+/g,"_").toLowerCase()},dasherize:function(a){return d.trim(a).replace(/([a-z\d])([A-Z]+)/g,"$1-$2").replace(/^([A-Z]+)/,"-$1").replace(/\_|\s+/g,"-").toLowerCase()},humanize:function(a){return d.capitalize(this.underscored(a).replace(/_id$/,
"").replace(/_/g," "))},trim:c(function(a,b){if(!b&&o)return o.call(a);b=b?d.escapeRegExp(b):"\\s";return a.replace(RegExp("^["+b+"]+|["+b+"]+$","g"),"")}),ltrim:c(function(a,b){b=b?d.escapeRegExp(b):"\\s";return a.replace(RegExp("^["+b+"]+","g"),"")}),rtrim:c(function(a,b){b=b?d.escapeRegExp(b):"\\s";return a.replace(RegExp("["+b+"]+$","g"),"")}),truncate:c(function(a,b,f){b=1*b||0;return a.length>b?a.slice(0,b)+(f||"..."):a}),prune:c(function(a,b,f){var c="",h="",h=0,f=f||"...",b=1*b||0;for(h in a)c+=
a[h].toUpperCase()!=a[h].toLowerCase()||/[-_\d]/.test(a[h])?"A":" ";h=0===c.substring(b-1,b+1).search(/^\w\w$/)?d.rtrim(c.slice(0,b).replace(/([\W][\w]*)$/,"")):d.rtrim(c.slice(0,b));h=h.replace(/\W+$/,"");return h.length+f.length>a.length?a:a.substring(0,h.length)+f}),words:function(a,b){return(""+a).split(b||" ")},pad:c(function(a,b,f,c){var d="",d=0,b=1*b||0;f?1<f.length&&(f=f.charAt(0)):f=" ";switch(c){case "right":d=b-a.length;d=l(f,d);a+=d;break;case "both":d=b-a.length;d={left:l(f,Math.ceil(d/
2)),right:l(f,Math.floor(d/2))};a=d.left+a+d.right;break;default:d=b-a.length,d=l(f,d),a=d+a}return a}),lpad:function(a,b,c){return d.pad(a,b,c)},rpad:function(a,b,c){return d.pad(a,b,c,"right")},lrpad:function(a,b,c){return d.pad(a,b,c,"both")},sprintf:m,vsprintf:function(a,b){b.unshift(a);return m.apply(null,b)},toNumber:function(a,b){var c;c=1*(1*a||0).toFixed(1*b||0)||0;return!(0===c&&"0"!==a&&0!==a)?c:Number.NaN},strRight:c(function(a,b){var c=!b?-1:a.indexOf(b);return-1!=c?a.slice(c+b.length,
a.length):a}),strRightBack:c(function(a,b){var c=!b?-1:a.lastIndexOf(b);return-1!=c?a.slice(c+b.length,a.length):a}),strLeft:c(function(a,b){var c=!b?-1:a.indexOf(b);return-1!=c?a.slice(0,c):a}),strLeftBack:c(function(a,b){var c=a.lastIndexOf(b);return-1!=c?a.slice(0,c):a}),exports:function(){var a={},b;for(b in this)if(this.hasOwnProperty(b)&&!("include"==b||"contains"==b||"reverse"==b))a[b]=this[b];return a}};d.strip=d.trim;d.lstrip=d.ltrim;d.rstrip=d.rtrim;d.center=d.lrpad;d.ljust=d.lpad;d.rjust=
d.rpad;d.contains=d.include;"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(module.exports=d),exports._s=d):"undefined"!==typeof k._?(k._.string=d,k._.str=k._.string):k._={string:d,str:d}})(this||window);

/**
*! jQuery v1.8.2
*/
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call(" ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);

// -- Sammy.js -- /sammy.js Version: 0.7.2
(function(e,t){(function(n){typeof define=="function"&&define.amd?define(["jquery"],n):e.sammy=t.Sammy=n(e)})(function(e){var n,r="([^/]+)",i=/:([\w\d]+)/g,s=/\?([^#]*)?$/,o=function(e){return Array.prototype.slice.call(e)},u=function(e){return Object.prototype.toString.call(e)==="[object Function]"},a=function(e){return Object.prototype.toString.call(e)==="[object Array]"},f=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},l=function(e){return decodeURIComponent((e||"").replace(/\+/g," "))},c=encodeURIComponent,h=function(e){return String(e).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},p=function(e){return function(t,n){return this.route.apply(this,[e,t,n])}},d={},v=!!t.history&&!!history.pushState,m=[];return n=function(){var t=o(arguments),r,i;n.apps=n.apps||{};if(t.length===0||t[0]&&u(t[0]))return n.apply(n,["body"].concat(t));if(typeof (i=t.shift())=="string")return r=n.apps[i]||new n.Application,r.element_selector=i,t.length>0&&e.each(t,function(e,t){r.use(t)}),r.element_selector!=i&&delete n.apps[i],n.apps[r.element_selector]=r,r},n.VERSION="0.7.2",n.addLogger=function(e){m.push(e)},n.log=function(){var t=o(arguments);t.unshift("["+Date()+"]"),e.each(m,function(e,r){r.apply(n,t)})},typeof t.console!="undefined"?u(t.console.log.apply)?n.addLogger(function(){t.console.log.apply(t.console,arguments)}):n.addLogger(function(){t.console.log(arguments)}):typeof console!="undefined"&&n.addLogger(function(){console.log.apply(console,arguments)}),e.extend(n,{makeArray:o,isFunction:u,isArray:a}),n.Object=function(t){return e.extend(this,t||{})},e.extend(n.Object.prototype,{escapeHTML:h,h:h,toHash:function(){var t={};return e.each(this,function(e,n){u(n)||(t[e]=n)}),t},toHTML:function(){var t="";return e.each(this,function(e,n){u(n)||(t+="<strong>"+e+"</strong> "+n+"<br />")}),t},keys:function(e){var t=[];for(var n in this)(!u(this[n])||!e)&&t.push(n);return t},has:function(t){return this[t]&&e.trim(this[t].toString())!==""},join:function(){var e=o(arguments),t=e.shift();return e.join(t)},log:function(){n.log.apply(n,arguments)},toString:function(t){var n=[];return e.each(this,function(e,r){(!u(r)||t)&&n.push('"'+e+'": '+r.toString())}),"Sammy.Object: {"+n.join(",")+"}"}}),n.DefaultLocationProxy=function(e,t){this.app=e,this.is_native=!1,this.has_history=v,this._startPolling(t)},n.DefaultLocationProxy.fullPath=function(e){var t=e.toString().match(/^[^#]*(#.+)$/),n=t?t[1]:"";return[e.pathname,e.search,n].join("")},e.extend(n.DefaultLocationProxy.prototype,{bind:function(){var r=this,i=this.app,s=n.DefaultLocationProxy;e(t).bind("hashchange."+this.app.eventNamespace(),function(e,n){r.is_native===!1&&!n&&(r.is_native=!0,t.clearInterval(s._interval)),i.trigger("location-changed")}),v&&!i.disable_push_state&&(e(t).bind("popstate."+this.app.eventNamespace(),function(e){i.trigger("location-changed")}),e("a").live("click.history-"+this.app.eventNamespace(),function(e){if(e.isDefaultPrevented()||e.metaKey||e.ctrlKey)return;var n=s.fullPath(this);if(this.hostname==t.location.hostname&&i.lookupRoute("get",n)&&this.target!=="_blank")return e.preventDefault(),r.setLocation(n),!1})),s._bindings||(s._bindings=0),s._bindings++},unbind:function(){e(t).unbind("hashchange."+this.app.eventNamespace()),e(t).unbind("popstate."+this.app.eventNamespace()),e("a").die("click.history-"+this.app.eventNamespace()),n.DefaultLocationProxy._bindings--,n.DefaultLocationProxy._bindings<=0&&t.clearInterval(n.DefaultLocationProxy._interval)},getLocation:function(){return n.DefaultLocationProxy.fullPath(t.location)},setLocation:function(e){/^([^#\/]|$)/.test(e)&&(v&&!this.app.disable_push_state?e="/"+e:e="#!/"+e);if(e!=this.getLocation()){if(!(v&&!this.app.disable_push_state&&/^\//.test(e)))return t.location=e;history.pushState({path:e},t.title,e),this.app.trigger("location-changed")}},_startPolling:function(r){var i=this;if(!n.DefaultLocationProxy._interval){r||(r=10);var s=function(){var r=i.getLocation();(typeof n.DefaultLocationProxy._last_location=="undefined"||r!=n.DefaultLocationProxy._last_location)&&t.setTimeout(function(){e(t).trigger("hashchange",[!0])},0),n.DefaultLocationProxy._last_location=r};s(),n.DefaultLocationProxy._interval=t.setInterval(s,r)}}}),n.Application=function(e){var t=this;this.routes={},this.listeners=new n.Object({}),this.arounds=[],this.befores=[],this.namespace=(new Date).getTime()+"-"+parseInt(Math.random()*1e3,10),this.context_prototype=function(){n.EventContext.apply(this,arguments)},this.context_prototype.prototype=new n.EventContext,u(e)&&e.apply(this,[this]),this._location_proxy||this.setLocationProxy(new n.DefaultLocationProxy(this,this.run_interval_every)),this.debug&&this.bindToAllEvents(function(e,n){t.log(t.toString(),e.cleaned_type,n||{})})},n.Application.prototype=e.extend({},n.Object.prototype,{ROUTE_VERBS:["get","post","put","delete"],APP_EVENTS:["run","unload","lookup-route","run-route","route-found","event-context-before","event-context-after","changed","error","check-form-submission","redirect","location-changed"],_last_route:null,_location_proxy:null,_running:!1,element_selector:"body",debug:!1,raise_errors:!1,run_interval_every:50,disable_push_state:!1,template_engine:null,toString:function(){return"Sammy.Application:"+this.element_selector},$element:function(t){return t?e(this.element_selector).find(t):e(this.element_selector)},use:function(){var e=o(arguments),t=e.shift(),r=t||"";try{e.unshift(this),typeof t=="string"&&(r="Sammy."+t,t=n[t]),t.apply(this,e)}catch(i){typeof t=="undefined"?this.error("Plugin Error: called use() but plugin ("+r.toString()+") is not defined",i):u(t)?this.error("Plugin Error",i):this.error("Plugin Error: called use() but '"+r.toString()+"' is not a function",i)}return this},setLocationProxy:function(e){var t=this._location_proxy;this._location_proxy=e,this.isRunning()&&(t&&t.unbind(),this._location_proxy.bind())},log:function(){n.log.apply(n,Array.prototype.concat.apply([this.element_selector],arguments))},route:function(t,n,s){var o=this,a=[],f,l;!s&&u(n)&&(n=t,s=n,t="any"),t=t.toLowerCase();if(n.constructor==String){i.lastIndex=0;while((l=i.exec(n))!==null)a.push(l[1]);n=new RegExp(n.replace(i,r)+"$")}return typeof s=="string"&&(s=o[s]),f=function(e){var t={verb:e,path:n,callback:s,param_names:a};o.routes[e]=o.routes[e]||[],o.routes[e].push(t)},t==="any"?e.each(this.ROUTE_VERBS,function(e,t){f(t)}):f(t),this},get:p("get"),post:p("post"),put:p("put"),del:p("delete"),any:p("any"),mapRoutes:function(t){var n=this;return e.each(t,function(e,t){n.route.apply(n,t)}),this},eventNamespace:function(){return["sammy-app",this.namespace].join("-")},bind:function(e,t,n){var r=this;typeof n=="undefined"&&(n=t);var i=function(){var e,t,i;e=arguments[0],i=arguments[1],i&&i.context?(t=i.context,delete i.context):t=new r.context_prototype(r,"bind",e.type,i,e.target),e.cleaned_type=e.type.replace(r.eventNamespace(),""),n.apply(t,[e,i])};return this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(i),this.isRunning()&&this._listen(e,i),this},trigger:function(e,t){return this.$element().trigger([e,this.eventNamespace()].join("."),[t]),this},refresh:function(){return this.last_location=null,this.trigger("location-changed"),this},before:function(e,t){return u(e)&&(t=e,e={}),this.befores.push([e,t]),this},after:function(e){return this.bind("event-context-after",e)},around:function(e){return this.arounds.push(e),this},isRunning:function(){return this._running},helpers:function(t){return e.extend(this.context_prototype.prototype,t),this},helper:function(e,t){return this.context_prototype.prototype[e]=t,this},run:function(n){if(this.isRunning())return!1;var r=this;return e.each(this.listeners.toHash(),function(t,n){e.each(n,function(e,n){r._listen(t,n)})}),this.trigger("run",{start_url:n}),this._running=!0,this.last_location=null,!/\#(.+)/.test(this.getLocation())&&typeof n!="undefined"&&this.setLocation(n),this._checkLocation(),this._location_proxy.bind(),this.bind("location-changed",function(){r._checkLocation()}),this.bind("submit",function(t){var n=r._checkFormSubmission(e(t.target).closest("form"));return n===!1?t.preventDefault():!1}),e(t).bind("unload",function(){r.unload()}),this.trigger("changed")},unload:function(){if(!this.isRunning())return!1;var t=this;return this.trigger("unload"),this._location_proxy.unbind(),this.$element().unbind("submit").removeClass(t.eventNamespace()),e.each(this.listeners.toHash(),function(n,r){e.each(r,function(e,r){t._unlisten(n,r)})}),this._running=!1,this},destroy:function(){return this.unload(),delete n.apps[this.element_selector],this},bindToAllEvents:function(t){var n=this;return e.each(this.APP_EVENTS,function(e,r){n.bind(r,t)}),e.each(this.listeners.keys(!0),function(r,i){e.inArray(i,n.APP_EVENTS)==-1&&n.bind(i,t)}),this},routablePath:function(e){return e.replace(s,"")},lookupRoute:function(e,t){var n=this,r=!1,i=0,s,o;if(typeof this.routes[e]!="undefined"){s=this.routes[e].length;for(;i<s;i++){o=this.routes[e][i];if(n.routablePath(t).match(o.path)){r=o;break}}}return r},runRoute:function(t,n,r,i){var s=this,o=this.lookupRoute(t,n),u,a,f,c,h,p,d,v,m;this.log("runRoute",[t,n].join(" ")),this.trigger("run-route",{verb:t,path:n,params:r}),typeof r=="undefined"&&(r={}),e.extend(r,this._parseQueryString(n));if(o){this.trigger("route-found",{route:o}),(v=o.path.exec(this.routablePath(n)))!==null&&(v.shift(),e.each(v,function(e,t){o.param_names[e]?r[o.param_names[e]]=l(t):(r.splat||(r.splat=[]),r.splat.push(l(t)))})),u=new this.context_prototype(this,t,n,r,i),f=this.arounds.slice(0),h=this.befores.slice(0),d=[u].concat(r.splat),a=function(){var e;while(h.length>0){p=h.shift();if(s.contextMatchesOptions(u,p[0])){e=p[1].apply(u,[u]);if(e===!1)return!1}}return s.last_route=o,u.trigger("event-context-before",{context:u}),e=o.callback.apply(u,d),u.trigger("event-context-after",{context:u}),e},e.each(f.reverse(),function(e,t){var n=a;a=function(){return t.apply(u,[n])}});try{m=a()}catch(g){this.error(["500 Error",t,n].join(" "),g)}return m}return this.notFound(t,n)},contextMatchesOptions:function(t,n,r){var i=n;if(typeof i=="string"||f(i))i={path:i};typeof r=="undefined"&&(r=!0);if(e.isEmptyObject(i))return!0;if(a(i.path)){var s,o,u,l;s=[];for(o=0,l=i.path.length;o<l;o+=1)u=e.extend({},i,{path:i.path[o]}),s.push(this.contextMatchesOptions(t,u));var c=e.inArray(!0,s)>-1?!0:!1;return r?c:!c}if(i.only)return this.contextMatchesOptions(t,i.only,!0);if(i.except)return this.contextMatchesOptions(t,i.except,!1);var h=!0,p=!0;return i.path&&(f(i.path)||(i.path=new RegExp(i.path.toString()+"$")),h=i.path.test(t.path)),i.verb&&(typeof i.verb=="string"?p=i.verb===t.verb:p=i.verb.indexOf(t.verb)>-1),r?p&&h:!p||!h},getLocation:function(){return this._location_proxy.getLocation()},setLocation:function(e){return this._location_proxy.setLocation(e)},swap:function(e,t){var n=this.$element().html(e);return u(t)&&t(e),n},templateCache:function(e,t){return typeof t!="undefined"?d[e]=t:d[e]},clearTemplateCache:function(){return d={}},notFound:function(e,t){var n=this.error(["404 Not Found",e,t].join(" "));return e==="get"?n:!0},error:function(e,t){t||(t=new Error),t.message=[e,t.message].join(" "),this.trigger("error",{message:t.message,error:t});if(this.raise_errors)throw t;this.log(t.message,t)},_checkLocation:function(){var e,t;e=this.getLocation();if(!this.last_location||this.last_location[0]!="get"||this.last_location[1]!=e)this.last_location=["get",e],t=this.runRoute("get",e);return t},_getFormVerb:function(t){var n=e(t),r,i;i=n.find('input[name="_method"]'),i.length>0&&(r=i.val()),r||(r=n[0].getAttribute("method"));if(!r||r==="")r="get";return e.trim(r.toString().toLowerCase())},_checkFormSubmission:function(t){var n,r,i,s,o;return this.trigger("check-form-submission",{form:t}),n=e(t),r=n.attr("action")||"",i=this._getFormVerb(n),this.log("_checkFormSubmission",n,r,i),i==="get"?(s=this._serializeFormParams(n),s!==""&&(r+="?"+s),this.setLocation(r),o=!1):(s=e.extend({},this._parseFormParams(n)),o=this.runRoute(i,r,s,t.get(0))),typeof o=="undefined"?!1:o},_serializeFormParams:function(e){var t="",n=e.serializeArray(),r;if(n.length>0){t=this._encodeFormPair(n[0].name,n[0].value);for(r=1;r<n.length;r++)t=t+"&"+this._encodeFormPair(n[r].name,n[r].value)}return t},_encodeFormPair:function(e,t){return c(e)+"="+c(t)},_parseFormParams:function(e){var t={},n=e.serializeArray(),r;for(r=0;r<n.length;r++)t=this._parseParamPair(t,n[r].name,n[r].value);return t},_parseQueryString:function(e){var t={},n,r,i,o;n=e.match(s);if(n&&n[1]){r=n[1].split("&");for(o=0;o<r.length;o++)i=r[o].split("="),t=this._parseParamPair(t,l(i[0]),l(i[1]||""))}return t},_parseParamPair:function(e,t,n){return typeof e[t]!="undefined"?a(e[t])?e[t].push(n):e[t]=[e[t],n]:e[t]=n,e},_listen:function(e,t){return this.$element().bind([e,this.eventNamespace()].join("."),t)},_unlisten:function(e,t){return this.$element().unbind([e,this.eventNamespace()].join("."),t)}}),n.RenderContext=function(e){this.event_context=e,this.callbacks=[],this.previous_content=null,this.content=null,this.next_engine=!1,this.waiting=!1},n.RenderContext.prototype=e.extend({},n.Object.prototype,{then:function(e){if(!u(e)){if(!(typeof e=="string"&&e in this.event_context))return this;var n=this.event_context[e];e=function(e){return n.apply(this.event_context,[e])}}var r=this;return this.waiting?this.callbacks.push(e):(this.wait(),t.setTimeout(function(){var t=e.apply(r,[r.content,r.previous_content]);t!==!1&&r.next(t)},0)),this},wait:function(){this.waiting=!0},next:function(e){this.waiting=!1,typeof e!="undefined"&&(this.previous_content=this.content,this.content=e),this.callbacks.length>0&&this.then(this.callbacks.shift())},load:function(t,n,r){var i=this;return this.then(function(){var s,o,a,f;u(n)?(r=n,n={}):n=e.extend({},n),r&&this.then(r);if(typeof t=="string")return a=t.match(/\.json$/)||n.json,s=a?n.cache===!0:n.cache!==!1,i.next_engine=i.event_context.engineFor(t),delete n.cache,delete n.json,n.engine&&(i.next_engine=n.engine,delete n.engine),s&&(o=this.event_context.app.templateCache(t))?o:(this.wait(),e.ajax(e.extend({url:t,data:{},dataType:a?"json":"text",type:"get",success:function(e){s&&i.event_context.app.templateCache(t,e),i.next(e)}},n)),!1);if(t.nodeType)return t.innerHTML;if(t.selector)return i.next_engine=t.attr("data-engine"),n.clone===!1?t.remove()[0].innerHTML.toString():t[0].innerHTML.toString()})},loadPartials:function(e){var t;if(e){this.partials=this.partials||{};for(t in e)(function(t,n){t.load(e[n]).then(function(e){this.partials[n]=e})})(this,t)}return this},render:function(e,t,n,r){return u(e)&&!t?this.then(e):(u(t)?(r=n,n=t,t=null):n&&!u(n)&&(r=n,n=null),this.loadPartials(r).load(e).interpolate(t,e).then(n))},partial:function(e,t,n,r){return u(n)?this.render(e,t,r).swap(n):u(t)?this.render(e,{},n).swap(t):this.render(e,t,n).swap()},send:function(){var e=this,t=o(arguments),n=t.shift();return a(t[0])&&(t=t[0]),this.then(function(r){return t.push(function(t){e.next(t)}),e.wait(),n.apply(n,t),!1})},collect:function(t,n,r){var i=this,s=function(){u(t)&&(n=t,t=this.content);var r=[],s=!1;return e.each(t,function(e,t){var o=n.apply(i,[e,t]);return o.jquery&&o.length==1&&(o=o[0],s=!0),r.push(o),o}),s?r:r.join("")};return r?s():this.then(s)},renderEach:function(t,n,r,i){return a(n)&&(i=r,r=n,n=null),this.load(t).then(function(s){var o=this;r||(r=a(this.previous_content)?this.previous_content:[]);if(!i)return this.collect(r,function(e,r){var i={},o=this.next_engine||t;return n?i[n]=r:i=r,this.event_context.interpolate(s,i,o)},!0);e.each(r,function(e,r){var u={},a=this.next_engine||t;n?u[n]=r:u=r,i(r,o.event_context.interpolate(s,u,a))})})},interpolate:function(e,t,n){var r=this;return this.then(function(i,s){!e&&s&&(e=s),this.next_engine&&(t=this.next_engine,this.next_engine=!1);var o=r.event_context.interpolate(i,e,t,this.partials);return n?s+o:o})},swap:function(e){return this.then(function(t){return this.event_context.swap(t,e),t}).trigger("changed",{})},appendTo:function(t){return this.then(function(n){e(t).append(n)}).trigger("changed",{})},prependTo:function(t){return this.then(function(n){e(t).prepend(n)}).trigger("changed",{})},replace:function(t){return this.then(function(n){e(t).html(n)}).trigger("changed",{})},trigger:function(e,t){return this.then(function(n){return typeof t=="undefined"&&(t={content:n}),this.event_context.trigger(e,t),n})}}),n.EventContext=function(e,t,r,i,s){this.app=e,this.verb=t,this.path=r,this.params=new n.Object(i),this.target=s},n.EventContext.prototype=e.extend({},n.Object.prototype,{$element:function(){return this.app.$element(o(arguments).shift())},engineFor:function(e){var t=this,n;if(u(e))return e;e=(e||t.app.template_engine).toString();if(n=e.match(/\.([^\.\?\#]+)$/))e=n[1];return e&&u(t[e])?t[e]:t.app.template_engine?this.engineFor(t.app.template_engine):function(e,t){return e}},interpolate:function(e,t,n,r){return this.engineFor(n).apply(this,[e,t,r])},render:function(e,t,r,i){return(new n.RenderContext(this)).render(e,t,r,i)},renderEach:function(e,t,r,i){return(new n.RenderContext(this)).renderEach(e,t,r,i)},load:function(e,t,r){return(new n.RenderContext(this)).load(e,t,r)},loadPartials:function(e){return(new n.RenderContext(this)).loadPartials(e)},partial:function(e,t,r,i){return(new n.RenderContext(this)).partial(e,t,r,i)},send:function(){var e=new n.RenderContext(this);return e.send.apply(e,arguments)},redirect:function(){var t,n=o(arguments),r=this.app.getLocation(),i=n.length;if(i>1){var s=0,u=[],a=[],f={},l=!1;for(;s<i;s++)typeof n[s]=="string"?u.push(n[s]):(e.extend(f,n[s]),l=!0);t=u.join("/");if(l){for(var c in f)a.push(this.app._encodeFormPair(c,f[c]));t+="?"+a.join("&")}}else t=n[0];this.trigger("redirect",{to:t}),this.app.last_location=[this.verb,this.path],this.app.setLocation(t),(new RegExp(t)).test(r)&&this.app.trigger("location-changed")},trigger:function(e,t){return typeof t=="undefined"&&(t={}),t.context||(t.context=this),this.app.trigger(e,t)},eventNamespace:function(){return this.app.eventNamespace()},swap:function(e,t){return this.app.swap(e,t)},notFound:function(){return this.app.notFound(this.verb,this.path)},json:function(t){return e.parseJSON(t)},toString:function(){return"Sammy.EventContext: "+[this.verb,this.path,this.params].join(" ")}}),n})})(jQuery,window);

//noConflict();
var $jQ = jQuery.noConflict(),$WS = {}, $_ = _.noConflict(), jQuery = $jQ;
$jQ._ = $_;

(function($){
  var BrowserDetect = {
    init: function () {
      this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
      this.version = this.searchVersion(navigator.userAgent)
        || this.searchVersion(navigator.appVersion)
        || "an unknown version";
      this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
      for (var i=0;i<data.length;i++) {
        var dataString = data[i].string;
        var dataProp = data[i].prop;
        this.versionSearchString = data[i].versionSearch || data[i].identity;
        if (dataString) {
          if (dataString.indexOf(data[i].subString) != -1)
            return data[i].identity;
        }
        else if (dataProp)
          return data[i].identity;
      }
    },
    searchVersion: function (dataString) {
      var index = dataString.indexOf(this.versionSearchString);
      if (index == -1) return;
      return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
      {
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
      },
      {   string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
      },
      {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
      },
      {
        prop: window.opera,
        identity: "Opera"
      },
      {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
      },
      {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
      },
      {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
      },
      {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
      },
      {   // for newer Netscapes (6+)
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
      },
      {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
      },
      {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
      },
      {     // for older Netscapes (4-)
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
      }
    ],
    dataOS : [
      {
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
      },
      {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
      },
      {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iPhone/iPod"
        },
      {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
      }
    ]

  };

  BrowserDetect.init();

  $.client = { os : BrowserDetect.OS, browser : BrowserDetect.browser };

})($jQ);

/**
*! preloadImage
*
*@ jQuery  $jQ(['array01','array02']).preloadImage();
*@ param  string  loader :: image url[optional]
*@ return void
*/
$jQ.redirect =  window.location.href;


/**
*! preloadImage
*
*@ jQuery  $jQ(['array01','array02']).preloadImage();
*@ param  string  loader :: image url[optional]
*@ return void
*/
$jQ.preloadImage = function(loader){
  var $t=this;$_.isUndefined(loader)?$t.each(function(){$jQ("<img/>")[0].src=this}):$jQ("<img/>")[0].src=loader;
}

$jQ.fn.preloadImage = $jQ.preloadImage;

/**
*! setElementID
*
*@ param  string  elm :: $(this) object
*@ return current ~OR~ new ID
*/
$jQ.setElementID = function(elm){
  var id=elm.attr("id");if($_.isUndefined(id)){id=$_.uniqueId("prosonyws_");elm.attr("id",id)};
  return id;
}


/**
*! centerH
*
*/
$jQ.fn.centerH = function (parentWidth){
  if($_.isUndefined(parentWidth))parentWidth=$jQ(this).parent().width();this.css("position","absolute");this.css("top","-8px");var left=(parentWidth-this.width())/2;this.css("left",left+"px");
  return this;
}


/**
*! Modernizr 2.6.2 Custom
*
*@ param  string  $css
*@ return void
*/

window.Modernizr=function(window,document,undefined){var version="2.6.2",Modernizr={},enableClasses=true,docElement=document.documentElement,mod="modernizr",modElem=document.createElement(mod),mStyle=modElem.style,inputElem=document.createElement("input"),smile=":)",toString={}.toString,prefixes=" -webkit- -moz- -o- -ms- ".split(" "),omPrefixes="Webkit Moz O ms",cssomPrefixes=omPrefixes.split(" "),domPrefixes=omPrefixes.toLowerCase().split(" "),tests={},inputs={},attrs={},classes=[],slice=classes.slice,
featureName,injectElementWithStyles=function(rule,callback,nodes,testnames){var style,ret,node,docOverflow,div=document.createElement("div"),body=document.body,fakeBody=body||document.createElement("body");if(parseInt(nodes,10))while(nodes--){node=document.createElement("div");node.id=testnames?testnames[nodes]:mod+(nodes+1);div.appendChild(node)}style=["&#173;",'<style id="s',mod,'">',rule,"</style>"].join("");div.id=mod;(body?div:fakeBody).innerHTML+=style;fakeBody.appendChild(div);if(!body){fakeBody.style.background=
"";fakeBody.style.overflow="hidden";docOverflow=docElement.style.overflow;docElement.style.overflow="hidden";docElement.appendChild(fakeBody)}ret=callback(div,rule);if(!body){fakeBody.parentNode.removeChild(fakeBody);docElement.style.overflow=docOverflow}else div.parentNode.removeChild(div);return!!ret},_hasOwnProperty={}.hasOwnProperty,hasOwnProp;if(!is(_hasOwnProperty,"undefined")&&!is(_hasOwnProperty.call,"undefined"))hasOwnProp=function(object,property){return _hasOwnProperty.call(object,property)};
else hasOwnProp=function(object,property){return property in object&&is(object.constructor.prototype[property],"undefined")};if(!Function.prototype.bind)Function.prototype.bind=function bind(that){var target=this;if(typeof target!="function")throw new TypeError;var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var F=function(){};F.prototype=target.prototype;var self=new F;var result=target.apply(self,args.concat(slice.call(arguments)));if(Object(result)===result)return result;
return self}else return target.apply(that,args.concat(slice.call(arguments)))};return bound};function setCss(str){mStyle.cssText=str}function setCssAll(str1,str2){return setCss(prefixes.join(str1+";")+(str2||""))}function is(obj,type){return typeof obj===type}function contains(str,substr){return!!~(""+str).indexOf(substr)}function testProps(props,prefixed){for(var i in props){var prop=props[i];if(!contains(prop,"-")&&mStyle[prop]!==undefined)return prefixed=="pfx"?prop:true}return false}function testDOMProps(props,
obj,elem){for(var i in props){var item=obj[props[i]];if(item!==undefined){if(elem===false)return props[i];if(is(item,"function"))return item.bind(elem||obj);return item}}return false}function testPropsAll(prop,prefixed,elem){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+" "+cssomPrefixes.join(ucProp+" ")+ucProp).split(" ");if(is(prefixed,"string")||is(prefixed,"undefined"))return testProps(props,prefixed);else{props=(prop+" "+domPrefixes.join(ucProp+" ")+ucProp).split(" ");return testDOMProps(props,
prefixed,elem)}}tests["touch"]=function(){var bool;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)bool=true;else injectElementWithStyles(["@media (",prefixes.join("touch-enabled),("),mod,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(node){bool=node.offsetTop===9});return bool};tests["geolocation"]=function(){return"geolocation"in navigator};tests["websqldatabase"]=function(){return!!window.openDatabase};tests["indexedDB"]=function(){return!!testPropsAll("indexedDB",
window)};tests["history"]=function(){return!!(window.history&&history.pushState)};tests["websockets"]=function(){return"WebSocket"in window||"MozWebSocket"in window};tests["opacity"]=function(){setCssAll("opacity:.55");return/^0.55$/.test(mStyle.opacity)};tests["cssanimations"]=function(){return testPropsAll("animationName")};tests["csstransitions"]=function(){return testPropsAll("transition")};tests["generatedcontent"]=function(){var bool;injectElementWithStyles(["#",mod,"{font:0/0 a}#",mod,':after{content:"',
smile,'";visibility:hidden;font:3px/1 a}'].join(""),function(node){bool=node.offsetHeight>=3});return bool};tests["video"]=function(){var elem=document.createElement("video"),bool=false;try{if(bool=!!elem.canPlayType){bool=new Boolean(bool);bool.ogg=elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"");bool.h264=elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"");bool.webm=elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}}catch(e){}return bool};
tests["audio"]=function(){var elem=document.createElement("audio"),bool=false;try{if(bool=!!elem.canPlayType){bool=new Boolean(bool);bool.ogg=elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"");bool.mp3=elem.canPlayType("audio/mpeg;").replace(/^no$/,"");bool.wav=elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"");bool.m4a=(elem.canPlayType("audio/x-m4a;")||elem.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(e){}return bool};tests["localstorage"]=function(){try{localStorage.setItem(mod,
mod);localStorage.removeItem(mod);return true}catch(e){return false}};tests["sessionstorage"]=function(){try{sessionStorage.setItem(mod,mod);sessionStorage.removeItem(mod);return true}catch(e){return false}};tests["webworkers"]=function(){return!!window.Worker};tests["applicationcache"]=function(){return!!window.applicationCache};function webforms(){Modernizr["input"]=function(props){for(var i=0,len=props.length;i<len;i++)attrs[props[i]]=!!(props[i]in inputElem);if(attrs.list)attrs.list=!!(document.createElement("datalist")&&
window.HTMLDataListElement);return attrs}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));Modernizr["inputtypes"]=function(props){for(var i=0,bool,inputElemType,defaultView,len=props.length;i<len;i++){inputElem.setAttribute("type",inputElemType=props[i]);bool=inputElem.type!=="text";if(bool){inputElem.value=smile;inputElem.style.cssText="position:absolute;visibility:hidden;";if(/^range$/.test(inputElemType)&&inputElem.style.WebkitAppearance!==undefined){docElement.appendChild(inputElem);
defaultView=document.defaultView;bool=defaultView.getComputedStyle&&defaultView.getComputedStyle(inputElem,null).WebkitAppearance!=="textfield"&&inputElem.offsetHeight!==0;docElement.removeChild(inputElem)}else if(/^(search|tel)$/.test(inputElemType));else if(/^(url|email)$/.test(inputElemType))bool=inputElem.checkValidity&&inputElem.checkValidity()===false;else bool=inputElem.value!=smile}inputs[props[i]]=!!bool}return inputs}("search tel url email datetime date month week time datetime-local number range color".split(" "))}
for(var feature in tests)if(hasOwnProp(tests,feature)){featureName=feature.toLowerCase();Modernizr[featureName]=tests[feature]();classes.push((Modernizr[featureName]?"":"no-")+featureName)}Modernizr.input||webforms();Modernizr.addTest=function(feature,test){if(typeof feature=="object")for(var key in feature){if(hasOwnProp(feature,key))Modernizr.addTest(key,feature[key])}else{feature=feature.toLowerCase();if(Modernizr[feature]!==undefined)return Modernizr;test=typeof test=="function"?test():test;if(typeof enableClasses!==
"undefined"&&enableClasses)docElement.className+=" "+(test?"":"no-")+feature;Modernizr[feature]=test}return Modernizr};setCss("");modElem=inputElem=null;(function(window,document){var options=window.html5||{};var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var supportsHtml5Styles;var expando="_html5shiv";var expanID=0;var expandoData={};var supportsUnknownElements;
(function(){try{var a=document.createElement("a");a.innerHTML="<xyz></xyz>";supportsHtml5Styles="hidden"in a;supportsUnknownElements=a.childNodes.length==1||function(){document.createElement("a");var frag=document.createDocumentFragment();return typeof frag.cloneNode=="undefined"||typeof frag.createDocumentFragment=="undefined"||typeof frag.createElement=="undefined"}()}catch(e){supportsHtml5Styles=true;supportsUnknownElements=true}})();function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement("p"),
parent=ownerDocument.getElementsByTagName("head")[0]||ownerDocument.documentElement;p.innerHTML="x<style>"+cssText+"</style>";return parent.insertBefore(p.lastChild,parent.firstChild)}function getElements(){var elements=html5.elements;return typeof elements=="string"?elements.split(" "):elements}function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];if(!data){data={};expanID++;ownerDocument[expando]=expanID;expandoData[expanID]=data}return data}function createElement(nodeName,
ownerDocument,data){if(!ownerDocument)ownerDocument=document;if(supportsUnknownElements)return ownerDocument.createElement(nodeName);if(!data)data=getExpandoData(ownerDocument);var node;if(data.cache[nodeName])node=data.cache[nodeName].cloneNode();else if(saveClones.test(nodeName))node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode();else node=data.createElem(nodeName);return node.canHaveChildren&&!reSkip.test(nodeName)?data.frag.appendChild(node):node}function createDocumentFragment(ownerDocument,
data){if(!ownerDocument)ownerDocument=document;if(supportsUnknownElements)return ownerDocument.createDocumentFragment();data=data||getExpandoData(ownerDocument);var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;for(;i<l;i++)clone.createElement(elems[i]);return clone}function shivMethods(ownerDocument,data){if(!data.cache){data.cache={};data.createElem=ownerDocument.createElement;data.createFrag=ownerDocument.createDocumentFragment;data.frag=data.createFrag()}ownerDocument.createElement=
function(nodeName){if(!html5.shivMethods)return data.createElem(nodeName);return createElement(nodeName,ownerDocument,data)};ownerDocument.createDocumentFragment=Function("h,f","return function(){"+"var n=f.cloneNode(),c=n.createElement;"+"h.shivMethods&&("+getElements().join().replace(/\w+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return'c("'+nodeName+'")'})+");return n}")(html5,data.frag)}function shivDocument(ownerDocument){if(!ownerDocument)ownerDocument=
document;var data=getExpandoData(ownerDocument);if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS)data.hasCSS=!!addStyleSheet(ownerDocument,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}"+"mark{background:#FF0;color:#000}");if(!supportsUnknownElements)shivMethods(ownerDocument,data);return ownerDocument}var html5={"elements":options.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
"shivCSS":options.shivCSS!==false,"supportsUnknownElements":supportsUnknownElements,"shivMethods":options.shivMethods!==false,"type":"default","shivDocument":shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment};window.html5=html5;shivDocument(document)})(this,document);Modernizr._version=version;Modernizr._prefixes=prefixes;Modernizr._domPrefixes=domPrefixes;Modernizr._cssomPrefixes=cssomPrefixes;Modernizr.getInternetExplorerVersion=function(){var rv=-1;if(navigator.appName==
"Microsoft Internet Explorer"){var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(re.exec(ua)!=null)rv=parseFloat(RegExp.$1);$jQ("html").addClass("ie"+parseInt(rv))}return rv};Modernizr.checkIEVersion=function(){var ver=getInternetExplorerVersion();if(ver>-1)if(ver>=8)return false;else if(ver==7)return false;else if(ver==6)return false;else return false;return false};Modernizr.testProp=function(prop){return testProps([prop])};Modernizr.testAllProps=testPropsAll;Modernizr.testStyles=
injectElementWithStyles;docElement.className=docElement.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(enableClasses?" js "+classes.join(" "):"");return Modernizr}(this,this.document);
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&
y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,
i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=
a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),
(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a)if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else{if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,
b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1E4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",
A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=
b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};Modernizr.addTest("cookies",function(){if(navigator.cookieEnabled)return true;document.cookie="cookietest=1";var ret=document.cookie.indexOf("cookietest=")!=-1;document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";return ret});
Modernizr.addTest("cssresize",Modernizr.testAllProps("resize"));Modernizr.addTest("cssscrollbar",function(){var bool,styles="#modernizr{overflow: scroll; width: 40px }#"+Modernizr._prefixes.join("scrollbar{width:0px}"+" #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}";Modernizr.testStyles(styles,function(node){bool="scrollWidth"in node&&node.scrollWidth==40});return bool});
Modernizr.addTest("dataset",function(){var n=document.createElement("div");n.setAttribute("data-a-b","c");return!!(n.dataset&&n.dataset.aB==="c")});Modernizr.addTest("datalistelem",Modernizr.input.list);
Modernizr.addTest("details",function(){var doc=document,el=doc.createElement("details"),fake,root,diff;if(!("open"in el))return false;root=doc.body||function(){var de=doc.documentElement;fake=true;return de.insertBefore(doc.createElement("body"),de.firstElementChild||de.firstChild)}();el.innerHTML="<summary>a</summary>b";el.style.display="block";root.appendChild(el);diff=el.offsetHeight;el.open=true;diff=diff!=el.offsetHeight;root.removeChild(el);fake&&root.parentNode.removeChild(root);return diff});
Modernizr.addTest("microdata",!!document["getItems"]);Modernizr.addTest("outputelem","value"in document.createElement("output"));Modernizr.addTest("progressbar",function(){return document.createElement("progress").max!==undefined});Modernizr.addTest("meter",function(){return document.createElement("meter").max!==undefined});Modernizr.addTest({texttrackapi:typeof document.createElement("video").addTextTrack==="function",track:"kind"in document.createElement("track")});
Modernizr.addTest("time","valueAsDate"in document.createElement("time"));Modernizr.addTest("strictmode",function(){return function(){return!this}()});Modernizr.addTest("placeholder",function(){return!!("placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea")))});Modernizr.addTest("devicemotion","DeviceMotionEvent"in window);Modernizr.addTest("deviceorientation","DeviceOrientationEvent"in window);

Modernizr.addTest("isMac",function(){
  return $jQ.client.os =='Mac';
});

Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&document.documentMode===7});

Modernizr.addTest("ie",function(){return Modernizr.getInternetExplorerVersion()>-1});Modernizr.addTest("chrome",function(){if($_.isUndefined(jQuery.browser.chrome))return false;else{$jQ("html").addClass("chrome"+parseInt(jQuery.browser.version));return jQuery.browser.chrome}});Modernizr.addTest("json",!!window.JSON&&!!JSON.parse);Modernizr.addTest("scriptasync","async"in document.createElement("script"));


Modernizr.addTest("isinfocomm2013",function(){
  return (window.location.pathname == "/bbsc/ssr/mkt-infocomm2013/mkt-infocomm2013new/" ||
  window.location.pathname == "/bbsc/ssr/mkt-infocomm2013/mkt-infocomm2013new/product-NEWPRODIC2013/" ? true : false);
});


Modernizr.addTest("isinfocomm2013_subpages",function(){
  return (window.location.pathname !== "/bbsc/ssr/mkt-infocomm2013/mkt-infocomm2013new/" &&
  window.location.pathname !== "/bbsc/ssr/mkt-infocomm2013/mkt-infocomm2013new/product-NEWPRODIC2013/" && (window.location.pathname == "/bbsc/ssr/mkt-infocomm2013/" ||
  window.location.pathname.substr(0,43) == "/bbsc/ssr/mkt-infocomm2013/mkt-infocomm2013") ? true : false);
});


//XRegExp
(function(f){"function"===typeof define?define(f):"object"===typeof exports?(f=f(),("object"===typeof module?module.exports=f:exports).XRegExp=f):XRegExp=f()})(function(){var f,B=function(a,b,c,d){var e;if(c)if(a.__proto__)a.__proto__=g.prototype;else for(e in g.prototype)a[e]=g.prototype[e];a[j]={captureNames:b,isNative:!!d};return a},t=function(a,b){if(!g.isRegExp(a))throw new TypeError("Type RegExp expected");var c=i.exec.call(/\/([a-z]*)$/i,String(a))[1],b=b||{};b.add&&(c=i.replace.call(c+b.add,
u,""));b.remove&&(c=i.replace.call(c,RegExp("["+b.remove+"]+","g"),""));return a=a[j]&&!a[j].isNative?B(g(a.source,c),a[j].captureNames?a[j].captureNames.slice(0):null,b.addProto):B(RegExp(a.source,c),null,b.addProto,!0)},C=function(){return{captureNames:null,isNative:!0}},w=function(a,b){if(Array.prototype.indexOf)return a.indexOf(b);var c=a.length,d;for(d=0;d<c;++d)if(a[d]===b)return d;return-1},x=function(a,b){return Object.prototype.toString.call(a)==="[object "+b+"]"},I=function(a){a=a||{};x(a,
"String")&&(a=g.forEach(a,/[^\s,]+/,function(a){this[a]=!0},{}));return a},J=function(a){g.addToken=y[a?"on":"off"];r.extensibility=a},K=function(a){RegExp.prototype.exec=(a?k:i).exec;RegExp.prototype.test=(a?k:i).test;String.prototype.match=(a?k:i).match;String.prototype.replace=(a?k:i).replace;String.prototype.split=(a?k:i).split;r.natives=a},j="xregexp",g,r={natives:!1,extensibility:!1,astral:!1},i={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,
split:String.prototype.split},k={},L={},D=[],Q={"default":/\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??/,"class":/\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])/},R=/\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g,u=/([\s\S])(?=[\s\S]*\1)/g,M=/^(?:[?*+]|{\d+(?:,\d*)?})\??/,S=void 0===i.exec.call(/()??/,"")[1],E=void 0!==RegExp.prototype.sticky,F=!1,G="gim"+(E?"y":""),y,n;g=function(a,b){var c=
"",d="default",e={hasNamedCapture:!1,captureNames:[],hasFlag:function(a){return-1<b.indexOf(a)}},m=0,h;if(g.isRegExp(a)){if(void 0!==b)throw new TypeError("Cannot supply flags when copying a RegExp");return t(a,{addProto:!0})}if(F)throw Error("Cannot build XRegExp objects within token definition functions");a=void 0===a?"":String(a);b=void 0===b?"":String(b);u.lastIndex=0;if(i.test.call(u,b))throw new SyntaxError("Invalid duplicate regex flag "+b);a=i.replace.call(a,/^\(\?([\w$]+)\)/,function(a,c){if(i.test.call(/[gy]/,
c))throw new SyntaxError("Cannot use flag g or y in mode modifier "+a);b=i.replace.call(b+c,u,"");return""});for(h=0;h<b.length;++h)if(0>G.indexOf(b.charAt(h)))throw new SyntaxError("Unknown regex flag "+b.charAt(h));for(;m<a.length;){do{h=a;var s=m,f=d,o=e,j=D.length,n=null,q=void 0,l=void 0;F=!0;try{for(;j--;)if(l=D[j],("all"===l.scope||l.scope===f)&&(!l.trigger||l.trigger.call(o)))if(q=g.exec(h,l.regex,s,"sticky")){n={len:q[0].length,replacement:l.handler.call(o,q,f),reparse:l.reparse};break}}catch(k){throw k;
}finally{F=!1}(h=n)&&h.reparse&&(a=a.slice(0,m)+h.replacement+a.slice(m+h.len))}while(h&&h.reparse);h?(c+=h.replacement,m+=h.len||1):(h=g.exec(a,Q[d],m,"sticky"))?(c+=h[0],m+=h[0].length):(h=a.charAt(m),"["===h?d="class":"]"===h&&(d="default"),c+=h,++m)}return B(RegExp(c,i.replace.call(b,/[^gimy]+/g,"")),e.hasNamedCapture?e.captureNames:null,!0)};g.prototype=RegExp();y={on:function(a,b,c){c=c||{};a&&b&&D.push({regex:t(a,{add:"g"+(E?"y":"")}),handler:b,scope:c.scope||"default",trigger:c.trigger||null,
reparse:c.reparse||!1});c.customFlags&&(G=i.replace.call(G+c.customFlags,u,""))},off:function(){throw Error("Extensibility must be installed before calling addToken");}};g.addToken=y.off;g.cache=function(a,b){var c=a+"/"+(b||"");return L[c]||(L[c]=g(a,b))};g.escape=function(a){return i.replace.call(a,/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")};g.exec=function(a,b,c,d){var e="g";if(E&&(d||b.sticky&&!1!==d))e+="y";b[j]=b[j]||C();e=b[j][e]||(b[j][e]=t(b,{add:e,remove:!1===d?"y":""}));e.lastIndex=c=c||0;a=k.exec.call(e,
a);d&&(a&&a.index!==c)&&(a=null);b.global&&(b.lastIndex=a?e.lastIndex:0);return a};g.forEach=function(a,b,c,d){for(var e=0,m=-1;e=g.exec(a,b,e);)c.call(d,e,++m,a,b),e=e.index+(e[0].length||1);return d};g.globalize=function(a){return t(a,{add:"g",addProto:!0})};g.install=function(a){a=I(a);!r.natives&&a.natives&&K(!0);!r.extensibility&&a.extensibility&&J(!0);a.astral&&(r.astral=!0)};g.isInstalled=function(a){return!!r[a]};g.isRegExp=function(a){return x(a,"RegExp")};g.match=function(a,b,c){var d=b.global&&
"one"!==c||"all"===c,e=(d?"g":"")+(b.sticky?"y":"");b[j]=b[j]||C();c=b[j][e||"noGY"]||(b[j][e||"noGY"]=t(b,{add:e,remove:"one"===c?"g":""}));a=i.match.call(a,c);b.global&&(b.lastIndex=0);return d?a||[]:a&&a[0]};g.matchChain=function(a,b){return function d(a,m){var h=b[m].regex?b[m]:{regex:b[m]},s=[],f=function(a){s.push(h.backref?a[h.backref]||"":a[0])},o;for(o=0;o<a.length;++o)g.forEach(a[o],h.regex,f);return m===b.length-1||!s.length?s:d(s,m+1)}([a],0)};g.replace=function(a,b,c,d){var e=g.isRegExp(b),
m=b.global&&"one"!==d||"all"===d,h=(m?"g":"")+(b.sticky?"y":""),s=b;e?(b[j]=b[j]||C(),s=b[j][h||"noGY"]||(b[j][h||"noGY"]=t(b,{add:h,remove:"one"===d?"g":""}))):m&&(s=RegExp(g.escape(String(b)),"g"));a=k.replace.call(String(a),s,c);e&&b.global&&(b.lastIndex=0);return a};g.replaceEach=function(a,b){var c,d;for(c=0;c<b.length;++c)d=b[c],a=g.replace(a,d[0],d[1],d[2]);return a};g.split=function(a,b,c){return k.split.call(a,b,c)};g.test=function(a,b,c,d){return!!g.exec(a,b,c,d)};g.uninstall=function(a){a=
I(a);r.natives&&a.natives&&K(!1);r.extensibility&&a.extensibility&&J(!1);a.astral&&(r.astral=!1)};g.union=function(a,b){var c=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,d=0,e,m,h=function(a,b,c){var h=m[d-e];if(b){if(++d,h)return"(?<"+h+">"}else if(c)return"\\"+(+c+e);return a},s=[],f,o;if(!x(a,"Array")||!a.length)throw new TypeError("Must provide a nonempty array of patterns to merge");for(o=0;o<a.length;++o)f=a[o],g.isRegExp(f)?(e=d,m=f[j]&&f[j].captureNames||[],s.push(g(f.source).source.replace(c,
h))):s.push(g.escape(f));return g(s.join("|"),b)};g.version="3.0.0-pre";k.exec=function(a){var b=this.lastIndex,c=i.exec.apply(this,arguments),d,e;if(c){!S&&(1<c.length&&-1<w(c,""))&&(d=t(this,{remove:"g"}),i.replace.call(String(a).slice(c.index),d,function(){var a=arguments.length,b;for(b=1;b<a-2;++b)void 0===arguments[b]&&(c[b]=void 0)}));if(this[j]&&this[j].captureNames)for(e=1;e<c.length;++e)(d=this[j].captureNames[e-1])&&(c[d]=c[e]);this.global&&(!c[0].length&&this.lastIndex>c.index)&&(this.lastIndex=
c.index)}this.global||(this.lastIndex=b);return c};k.test=function(a){return!!k.exec.call(this,a)};k.match=function(a){if(g.isRegExp(a)){if(a.global){var b=i.match.apply(this,arguments);a.lastIndex=0;return b}}else a=RegExp(a);return k.exec.call(a,this)};k.replace=function(a,b){var c=g.isRegExp(a),d,e,f;c?(a[j]&&(e=a[j].captureNames),d=a.lastIndex):a+="";x(b,"Function")?f=i.replace.call(String(this),a,function(){var h=arguments,d;if(e){h[0]=new String(h[0]);for(d=0;d<e.length;++d)e[d]&&(h[0][e[d]]=
h[d+1])}if(c&&a.global)a.lastIndex=h[h.length-2]+h[0].length;return b.apply(void 0,h)}):(f=String(this),f=i.replace.call(f,a,function(){var a=arguments;return i.replace.call(String(b),R,function(b,c,d){if(c){d=+c;if(d<=a.length-3)return a[d]||"";d=e?w(e,c):-1;if(d<0)throw new SyntaxError("Backreference to undefined group "+b);return a[d+1]||""}if(d==="$")return"$";if(d==="&"||+d===0)return a[0];if(d==="`")return a[a.length-1].slice(0,a[a.length-2]);if(d==="'")return a[a.length-1].slice(a[a.length-
2]+a[0].length);d=+d;if(!isNaN(d)){if(d>a.length-3)throw new SyntaxError("Backreference to undefined group "+b);return a[d]||""}throw new SyntaxError("Invalid token "+b);})}));c&&(a.lastIndex=a.global?0:d);return f};k.split=function(a,b){if(!g.isRegExp(a))return i.split.apply(this,arguments);var c=String(this),d=a.lastIndex,e=[],f=0,h,b=(void 0===b?-1:b)>>>0;g.forEach(c,a,function(a){a.index+a[0].length>f&&(e.push(c.slice(f,a.index)),1<a.length&&a.index<c.length&&Array.prototype.push.apply(e,a.slice(1)),
h=a[0].length,f=a.index+h)});f===c.length?(!i.test.call(a,"")||h)&&e.push(""):e.push(c.slice(f));a.lastIndex=d;return e.length>b?e.slice(0,b):e};n=y.on;n(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4})|x(?![\dA-Fa-f]{2}))/,function(a,b){if("B"===a[1]&&"default"===b)return a[0];throw new SyntaxError("Invalid escape "+a[0]);},{scope:"all"});n(/\[(\^?)]/,function(a){return a[1]?"[\\s\\S]":"\\b\\B"});n(/\(\?#[^)]*\)/,function(a){return i.test.call(M,a.input.slice(a.index+a[0].length))?"":
"(?:)"});n(/\\k<([\w$]+)>/,function(a){var b=isNaN(a[1])?w(this.captureNames,a[1])+1:+a[1],c=a.index+a[0].length;if(!b||b>this.captureNames.length)throw new SyntaxError("Backreference to undefined group "+a[0]);return"\\"+b+(c===a.input.length||isNaN(a.input.charAt(c))?"":"(?:)")});n(/(?:\s+|#.*)+/,function(a){return i.test.call(M,a.input.slice(a.index+a[0].length))?"":"(?:)"},{trigger:function(){return this.hasFlag("x")},customFlags:"x"});n(/\./,function(){return"[\\s\\S]"},{trigger:function(){return this.hasFlag("s")},
customFlags:"s"});n(/\(\?P?<([\w$]+)>/,function(a){if(!isNaN(a[1]))throw new SyntaxError("Cannot use integer as capture name "+a[0]);if(-1<w(this.captureNames,a[1]))throw new SyntaxError("Cannot use same name for multiple groups "+a[0]);this.captureNames.push(a[1]);this.hasNamedCapture=!0;return"("});n(/\\(\d+)/,function(a,b){if(!("default"===b&&/^[1-9]/.test(a[1])&&+a[1]<=this.captureNames.length)&&"0"!==a[1])throw new SyntaxError("Cannot use octal escape or backreference to undefined group "+a[0]);
return a[0]},{scope:"all"});n(/\((?!\?)/,function(){if(this.hasFlag("n"))return"(?:";this.captureNames.push(null);return"("},{customFlags:"n"});f=g;var N=function(a){return f.isRegExp(a)?a[z]&&!a[z].isNative?a:f(a.source):f(a)},z="xregexp",O=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,T=f.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/,O],"g");f.build=function(a,b,c){var d=/^\(\?([\w$]+)\)/.exec(a),e={},m=0,h,g=0,j=[0],o,i;d&&(c=c||"",d[1].replace(/./g,function(a){c+=-1<c.indexOf(a)?"":a}));
for(i in b)if(b.hasOwnProperty(i)){var d=N(b[i]),n=e,q=i,l;l=d.source;var k=/^(?:\(\?:\))*\^/,p=/\$(?:\(\?:\))*$/;l=k.test(l)&&p.test(l.replace(/\\[\s\S]/g,""))?l.replace(k,"").replace(p,""):l;n[q]={pattern:l,names:d[z].captureNames||[]}}a=N(a);o=a[z].captureNames||[];a=a.source.replace(T,function(a,b,c,d,f){var i=b||c,l;if(i){if(!e.hasOwnProperty(i))throw new ReferenceError("Undefined property "+a);if(b){l=o[g];j[++g]=++m;a="(?<"+(l||i)+">"}else a="(?:";h=m;return a+e[i].pattern.replace(O,function(a,
                                                                                                                                                                                                                                    b,c){if(b){l=e[i].names[m-h];++m;if(l)return"(?<"+l+">"}else if(c)return"\\"+(+c+h);return a})+")"}if(d){l=o[g];j[++g]=++m;if(l)return"(?<"+l+">"}else if(f)return"\\"+j[+f];return a});return f(a,c)};var v=function(a,b,c,d){return{name:a,value:b,start:c,end:d}};f.matchRecursive=function(a,b,c,d,e){var d=d||"",e=e||{},g=-1<d.indexOf("g"),h=-1<d.indexOf("y"),i=d.replace(/y/g,""),j=e.escapeChar,e=e.valueNames,o=[],n=0,k=0,q=0,l=0,p,r,t,b=f(b,i),c=f(c,i);if(j){if(1<j.length)throw new SyntaxError("Cannot use more than one escape character");
j=f.escape(j);t=RegExp("(?:"+j+"[\\S\\s]|(?:(?!"+f.union([b,c]).source+")[^"+j+"])+)+",d.replace(/[^im]+/g,""))}for(;;){j&&(q+=(f.exec(a,t,q,"sticky")||[""])[0].length);d=f.exec(a,b,q);i=f.exec(a,c,q);d&&i&&(d.index<=i.index?i=null:d=null);if(d||i)k=(d||i).index,q=k+(d||i)[0].length;else if(!n)break;if(h&&!n&&k>l)break;if(d)n||(p=k,r=q),++n;else if(i&&n){if(!--n&&(e?(e[0]&&p>l&&o.push(v(e[0],a.slice(l,p),l,p)),e[1]&&o.push(v(e[1],a.slice(p,r),p,r)),e[2]&&o.push(v(e[2],a.slice(r,k),r,k)),e[3]&&o.push(v(e[3],
a.slice(k,q),k,q))):o.push(a.slice(r,k)),l=q,!g))break}else throw Error("Unbalanced delimiter found in string");k===q&&++q}g&&(!h&&e&&e[0]&&a.length>l)&&o.push(v(e[0],a.slice(l),l,a.length));return o};n=f.prototype;n.apply=function(a,b){return this.test(b[0])};n.call=function(a,b){return this.test(b)};n.forEach=function(a,b,c){return f.forEach(a,this,b,c)};n.globalize=function(){return f.globalize(this)};n.match=function(a,b){return f.match(a,this,b)};n.xexec=function(a,b,c){return f.exec(a,this,
b,c)};n.xtest=function(a,b,c){return f.test(a,this,b,c)};var A=function(a){return a.replace(/[- _]+/g,"").toLowerCase()},H=function(a){for(;4>a.length;)a="0"+a;return a},P=function(a){var b=/^\\[xu](.+)/.exec(a);return b?parseInt(b[1],16):a.charCodeAt("\\"===a.charAt(0)?1:0)},p={};f.install("extensibility");f.addToken(/\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,function(a,b){var c="P"===a[1]||!!a[2],d=this.hasFlag("A")||f.isInstalled("astral"),e=A(a[4]||a[3]),g=p[e];if("P"===a[1]&&a[2])throw new SyntaxError("Invalid double negation "+
a[0]);if(!p.hasOwnProperty(e))throw new SyntaxError("Unknown Unicode token "+a[0]);if(g.inverseOf){e=A(g.inverseOf);if(!p.hasOwnProperty(e))throw new ReferenceError("Unicode token missing data "+a[0]+" -> "+g.inverseOf);g=p[e];c=!c}if(!g.bmp&&!d)throw new SyntaxError("Astral mode required for Unicode token "+a[0]);if(d){if("class"===b)throw new SyntaxError("Astral mode does not support Unicode tokens within character classes");d=c?"a!":"a=";if(!(g=p[e][d])){var g=p[e],e=p[e],h="";e.bmp&&!e.isBmpLast&&
(h="["+e.bmp+"]"+(e.astral?"|":""));e.astral&&(h+=e.astral);e.isBmpLast&&e.bmp&&(h+=(e.astral?"|":"")+"["+e.bmp+"]");g=g[d]=c?"(?:(?!"+h+")(?:[\ud800-\udbff][\udc00-\udfff]|[\x00-\uffff]))":"(?:"+h+")"}return g}if("class"===b)if(c){if(!(c=p[e]["b!"])){var c=p[e],i="",j=-1,k;f.forEach(p[e].bmp,/(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,function(a){k=P(a[1]);k>j+1&&(i+="\\u"+H(parseInt(j+1,10).toString(16)),k>j+2&&(i+="-\\u"+H(parseInt(k-1,10).toString(16))));j=P(a[2]||a[1])});65535>
j&&(i+="\\u"+H(parseInt(j+1,10).toString(16)),65534>j&&(i+="-\\uFFFF"));c=c["b!"]=i}}else c=g.bmp;else c=(c?"[^":"[")+g.bmp+"]";return c},{scope:"all",customFlags:"A"});f.addUnicodeData=function(a){var b,c;if(!f.isInstalled("extensibility"))throw Error("Extensibility must be installed before adding Unicode data");for(c=0;c<a.length;++c){b=a[c];if(!b.name)throw Error("Unicode token requires name");if(!b.inverseOf&&!b.bmp&&!b.astral)throw Error("Unicode token has no character data "+b.name);p[A(b.name)]=
b;b.alias&&(p[A(b.alias)]=b)}};f.addUnicodeData([{name:"L",alias:"Letter",bmp:"A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005\u3006\u3031-\u3035\u303b\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6e5\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
astral:"\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude33\ude60-\ude7c\udf00-\udf35\udf40-\udf55\udf60-\udf72]|\ud801[\udc00-\udc9d]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1e\udf30-\udf40\udf42-\udf49\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud81a[\udc00-\ude38]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd83-\uddb2\uddc1-\uddc4]|\ud86e[\udc00-\udc1d]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud803[\udc00-\udc48]|\ud80d[\udc00-\udc2e]|\ud805[\ude80-\udeaa]|\ud87e[\udc00-\ude1d]|\ud81b[\udf00-\udf44\udf50\udf93-\udf9f]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud82c[\udc00\udc01]|[\ud80c\ud840-\ud868\ud86a-\ud86c][\udc00-\udfff]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud808[\udc00-\udf6e]"}]);
if(!f.addUnicodeData)throw new ReferenceError("Unicode Base must be loaded before Unicode Blocks");f.install("extensibility");f.addUnicodeData([{name:"InAegean_Numbers",astral:"\ud800[\udd00-\udd3f]"},{name:"InAlchemical_Symbols",astral:"\ud83d[\udf00-\udf7f]"},{name:"InAlphabetic_Presentation_Forms",bmp:"\ufb00-\ufb4f"},{name:"InAncient_Greek_Musical_Notation",astral:"\ud834[\ude00-\ude4f]"},{name:"InAncient_Greek_Numbers",astral:"\ud800[\udd40-\udd8f]"},{name:"InAncient_Symbols",astral:"\ud800[\udd90-\uddcf]"},
{name:"InArabic",bmp:"\u0600-\u06ff"},{name:"InArabic_Extended_A",bmp:"\u08a0-\u08ff"},{name:"InArabic_Mathematical_Alphabetic_Symbols",astral:"\ud83b[\ude00-\udeff]"},{name:"InArabic_Presentation_Forms_A",bmp:"\ufb50-\ufdff"},{name:"InArabic_Presentation_Forms_B",bmp:"\ufe70-\ufeff"},{name:"InArabic_Supplement",bmp:"\u0750-\u077f"},{name:"InArmenian",bmp:"\u0530-\u058f"},{name:"InArrows",bmp:"\u2190-\u21ff"},{name:"InAvestan",astral:"\ud802[\udf00-\udf3f]"},{name:"InBalinese",bmp:"\u1b00-\u1b7f"},
{name:"InBamum",bmp:"\ua6a0-\ua6ff"},{name:"InBamum_Supplement",astral:"\ud81a[\udc00-\ude3f]"},{name:"InBasic_Latin",bmp:"\x00-\u007f"},{name:"InBatak",bmp:"\u1bc0-\u1bff"},{name:"InBengali",bmp:"\u0980-\u09ff"},{name:"InBlock_Elements",bmp:"\u2580-\u259f"},{name:"InBopomofo",bmp:"\u3100-\u312f"},{name:"InBopomofo_Extended",bmp:"\u31a0-\u31bf"},{name:"InBox_Drawing",bmp:"\u2500-\u257f"},{name:"InBrahmi",astral:"\ud804[\udc00-\udc7f]"},{name:"InBraille_Patterns",bmp:"\u2800-\u28ff"},{name:"InBuginese",
bmp:"\u1a00-\u1a1f"},{name:"InBuhid",bmp:"\u1740-\u175f"},{name:"InByzantine_Musical_Symbols",astral:"\ud834[\udc00-\udcff]"},{name:"InCJK_Compatibility",bmp:"\u3300-\u33ff"},{name:"InCJK_Compatibility_Forms",bmp:"\ufe30-\ufe4f"},{name:"InCJK_Compatibility_Ideographs",bmp:"\uf900-\ufaff"},{name:"InCJK_Compatibility_Ideographs_Supplement",astral:"\ud87e[\udc00-\ude1f]"},{name:"InCJK_Radicals_Supplement",bmp:"\u2e80-\u2eff"},{name:"InCJK_Strokes",bmp:"\u31c0-\u31ef"},{name:"InCJK_Symbols_and_Punctuation",
bmp:"\u3000-\u303f"},{name:"InCJK_Unified_Ideographs",bmp:"\u4e00-\u9fff"},{name:"InCJK_Unified_Ideographs_Extension_A",bmp:"\u3400-\u4dbf"},{name:"InCJK_Unified_Ideographs_Extension_B",astral:"[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\udedf]"},{name:"InCJK_Unified_Ideographs_Extension_C",astral:"\ud86d[\udc00-\udf3f]|[\ud86a-\ud86c][\udc00-\udfff]|\ud869[\udf00-\udfff]"},{name:"InCJK_Unified_Ideographs_Extension_D",astral:"\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1f]"},{name:"InCarian",astral:"\ud800[\udea0-\udedf]"},
{name:"InChakma",astral:"\ud804[\udd00-\udd4f]"},{name:"InCham",bmp:"\uaa00-\uaa5f"},{name:"InCherokee",bmp:"\u13a0-\u13ff"},{name:"InCombining_Diacritical_Marks",bmp:"\u0300-\u036f"},{name:"InCombining_Diacritical_Marks_Supplement",bmp:"\u1dc0-\u1dff"},{name:"InCombining_Diacritical_Marks_for_Symbols",bmp:"\u20d0-\u20ff"},{name:"InCombining_Half_Marks",bmp:"\ufe20-\ufe2f"},{name:"InCommon_Indic_Number_Forms",bmp:"\ua830-\ua83f"},{name:"InControl_Pictures",bmp:"\u2400-\u243f"},{name:"InCoptic",bmp:"\u2c80-\u2cff"},
{name:"InCounting_Rod_Numerals",astral:"\ud834[\udf60-\udf7f]"},{name:"InCuneiform",astral:"\ud808[\udc00-\udfff]"},{name:"InCuneiform_Numbers_and_Punctuation",astral:"\ud809[\udc00-\udc7f]"},{name:"InCurrency_Symbols",bmp:"\u20a0-\u20cf"},{name:"InCypriot_Syllabary",astral:"\ud802[\udc00-\udc3f]"},{name:"InCyrillic",bmp:"\u0400-\u04ff"},{name:"InCyrillic_Extended_A",bmp:"\u2de0-\u2dff"},{name:"InCyrillic_Extended_B",bmp:"\ua640-\ua69f"},{name:"InCyrillic_Supplement",bmp:"\u0500-\u052f"},{name:"InDeseret",
astral:"\ud801[\udc00-\udc4f]"},{name:"InDevanagari",bmp:"\u0900-\u097f"},{name:"InDevanagari_Extended",bmp:"\ua8e0-\ua8ff"},{name:"InDingbats",bmp:"\u2700-\u27bf"},{name:"InDomino_Tiles",astral:"\ud83c[\udc30-\udc9f]"},{name:"InEgyptian_Hieroglyphs",astral:"\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2f]"},{name:"InEmoticons",astral:"\ud83d[\ude00-\ude4f]"},{name:"InEnclosed_Alphanumeric_Supplement",astral:"\ud83c[\udd00-\uddff]"},{name:"InEnclosed_Alphanumerics",bmp:"\u2460-\u24ff"},{name:"InEnclosed_CJK_Letters_and_Months",
bmp:"\u3200-\u32ff"},{name:"InEnclosed_Ideographic_Supplement",astral:"\ud83c[\ude00-\udeff]"},{name:"InEthiopic",bmp:"\u1200-\u137f"},{name:"InEthiopic_Extended",bmp:"\u2d80-\u2ddf"},{name:"InEthiopic_Extended_A",bmp:"\uab00-\uab2f"},{name:"InEthiopic_Supplement",bmp:"\u1380-\u139f"},{name:"InGeneral_Punctuation",bmp:"\u2000-\u206f"},{name:"InGeometric_Shapes",bmp:"\u25a0-\u25ff"},{name:"InGeorgian",bmp:"\u10a0-\u10ff"},{name:"InGeorgian_Supplement",bmp:"\u2d00-\u2d2f"},{name:"InGlagolitic",bmp:"\u2c00-\u2c5f"},
{name:"InGothic",astral:"\ud800[\udf30-\udf4f]"},{name:"InGreek_Extended",bmp:"\u1f00-\u1fff"},{name:"InGreek_and_Coptic",bmp:"\u0370-\u03ff"},{name:"InGujarati",bmp:"\u0a80-\u0aff"},{name:"InGurmukhi",bmp:"\u0a00-\u0a7f"},{name:"InHalfwidth_and_Fullwidth_Forms",bmp:"\uff00-\uffef"},{name:"InHangul_Compatibility_Jamo",bmp:"\u3130-\u318f"},{name:"InHangul_Jamo",bmp:"\u1100-\u11ff"},{name:"InHangul_Jamo_Extended_A",bmp:"\ua960-\ua97f"},{name:"InHangul_Jamo_Extended_B",bmp:"\ud7b0-\ud7ff"},{name:"InHangul_Syllables",
bmp:"\uac00-\ud7af"},{name:"InHanunoo",bmp:"\u1720-\u173f"},{name:"InHebrew",bmp:"\u0590-\u05ff"},{name:"InHigh_Private_Use_Surrogates",bmp:"\udb80-\udbff"},{name:"InHigh_Surrogates",bmp:"\ud800-\udb7f"},{name:"InHiragana",bmp:"\u3040-\u309f"},{name:"InIPA_Extensions",bmp:"\u0250-\u02af"},{name:"InIdeographic_Description_Characters",bmp:"\u2ff0-\u2fff"},{name:"InImperial_Aramaic",astral:"\ud802[\udc40-\udc5f]"},{name:"InInscriptional_Pahlavi",astral:"\ud802[\udf60-\udf7f]"},{name:"InInscriptional_Parthian",
astral:"\ud802[\udf40-\udf5f]"},{name:"InJavanese",bmp:"\ua980-\ua9df"},{name:"InKaithi",astral:"\ud804[\udc80-\udccf]"},{name:"InKana_Supplement",astral:"\ud82c[\udc00-\udcff]"},{name:"InKanbun",bmp:"\u3190-\u319f"},{name:"InKangxi_Radicals",bmp:"\u2f00-\u2fdf"},{name:"InKannada",bmp:"\u0c80-\u0cff"},{name:"InKatakana",bmp:"\u30a0-\u30ff"},{name:"InKatakana_Phonetic_Extensions",bmp:"\u31f0-\u31ff"},{name:"InKayah_Li",bmp:"\ua900-\ua92f"},{name:"InKharoshthi",astral:"\ud802[\ude00-\ude5f]"},{name:"InKhmer",
bmp:"\u1780-\u17ff"},{name:"InKhmer_Symbols",bmp:"\u19e0-\u19ff"},{name:"InLao",bmp:"\u0e80-\u0eff"},{name:"InLatin_Extended_Additional",bmp:"\u1e00-\u1eff"},{name:"InLatin_Extended_A",bmp:"\u0100-\u017f"},{name:"InLatin_Extended_B",bmp:"\u0180-\u024f"},{name:"InLatin_Extended_C",bmp:"\u2c60-\u2c7f"},{name:"InLatin_Extended_D",bmp:"\ua720-\ua7ff"},{name:"InLatin_1_Supplement",bmp:"\u0080-\u00ff"},{name:"InLepcha",bmp:"\u1c00-\u1c4f"},{name:"InLetterlike_Symbols",bmp:"\u2100-\u214f"},{name:"InLimbu",
bmp:"\u1900-\u194f"},{name:"InLinear_B_Ideograms",astral:"\ud800[\udc80-\udcff]"},{name:"InLinear_B_Syllabary",astral:"\ud800[\udc00-\udc7f]"},{name:"InLisu",bmp:"\ua4d0-\ua4ff"},{name:"InLow_Surrogates",bmp:"\udc00-\udfff"},{name:"InLycian",astral:"\ud800[\ude80-\ude9f]"},{name:"InLydian",astral:"\ud802[\udd20-\udd3f]"},{name:"InMahjong_Tiles",astral:"\ud83c[\udc00-\udc2f]"},{name:"InMalayalam",bmp:"\u0d00-\u0d7f"},{name:"InMandaic",bmp:"\u0840-\u085f"},{name:"InMathematical_Alphanumeric_Symbols",
astral:"\ud835[\udc00-\udfff]"},{name:"InMathematical_Operators",bmp:"\u2200-\u22ff"},{name:"InMeetei_Mayek",bmp:"\uabc0-\uabff"},{name:"InMeetei_Mayek_Extensions",bmp:"\uaae0-\uaaff"},{name:"InMeroitic_Cursive",astral:"\ud802[\udda0-\uddff]"},{name:"InMeroitic_Hieroglyphs",astral:"\ud802[\udd80-\udd9f]"},{name:"InMiao",astral:"\ud81b[\udf00-\udf9f]"},{name:"InMiscellaneous_Mathematical_Symbols_A",bmp:"\u27c0-\u27ef"},{name:"InMiscellaneous_Mathematical_Symbols_B",bmp:"\u2980-\u29ff"},{name:"InMiscellaneous_Symbols",
bmp:"\u2600-\u26ff"},{name:"InMiscellaneous_Symbols_And_Pictographs",astral:"\ud83d[\udc00-\uddff]|\ud83c[\udf00-\udfff]"},{name:"InMiscellaneous_Symbols_and_Arrows",bmp:"\u2b00-\u2bff"},{name:"InMiscellaneous_Technical",bmp:"\u2300-\u23ff"},{name:"InModifier_Tone_Letters",bmp:"\ua700-\ua71f"},{name:"InMongolian",bmp:"\u1800-\u18af"},{name:"InMusical_Symbols",astral:"\ud834[\udd00-\uddff]"},{name:"InMyanmar",bmp:"\u1000-\u109f"},{name:"InMyanmar_Extended_A",bmp:"\uaa60-\uaa7f"},{name:"InNKo",bmp:"\u07c0-\u07ff"},
{name:"InNew_Tai_Lue",bmp:"\u1980-\u19df"},{name:"InNumber_Forms",bmp:"\u2150-\u218f"},{name:"InOgham",bmp:"\u1680-\u169f"},{name:"InOl_Chiki",bmp:"\u1c50-\u1c7f"},{name:"InOld_Italic",astral:"\ud800[\udf00-\udf2f]"},{name:"InOld_Persian",astral:"\ud800[\udfa0-\udfdf]"},{name:"InOld_South_Arabian",astral:"\ud802[\ude60-\ude7f]"},{name:"InOld_Turkic",astral:"\ud803[\udc00-\udc4f]"},{name:"InOptical_Character_Recognition",bmp:"\u2440-\u245f"},{name:"InOriya",bmp:"\u0b00-\u0b7f"},{name:"InOsmanya",astral:"\ud801[\udc80-\udcaf]"},
{name:"InPhags_pa",bmp:"\ua840-\ua87f"},{name:"InPhaistos_Disc",astral:"\ud800[\uddd0-\uddff]"},{name:"InPhoenician",astral:"\ud802[\udd00-\udd1f]"},{name:"InPhonetic_Extensions",bmp:"\u1d00-\u1d7f"},{name:"InPhonetic_Extensions_Supplement",bmp:"\u1d80-\u1dbf"},{name:"InPlaying_Cards",astral:"\ud83c[\udca0-\udcff]"},{name:"InPrivate_Use_Area",bmp:"\ue000-\uf8ff"},{name:"InRejang",bmp:"\ua930-\ua95f"},{name:"InRumi_Numeral_Symbols",astral:"\ud803[\ude60-\ude7f]"},{name:"InRunic",bmp:"\u16a0-\u16ff"},
{name:"InSamaritan",bmp:"\u0800-\u083f"},{name:"InSaurashtra",bmp:"\ua880-\ua8df"},{name:"InSharada",astral:"\ud804[\udd80-\udddf]"},{name:"InShavian",astral:"\ud801[\udc50-\udc7f]"},{name:"InSinhala",bmp:"\u0d80-\u0dff"},{name:"InSmall_Form_Variants",bmp:"\ufe50-\ufe6f"},{name:"InSora_Sompeng",astral:"\ud804[\udcd0-\udcff]"},{name:"InSpacing_Modifier_Letters",bmp:"\u02b0-\u02ff"},{name:"InSpecials",bmp:"\ufff0-\uffff"},{name:"InSundanese",bmp:"\u1b80-\u1bbf"},{name:"InSundanese_Supplement",bmp:"\u1cc0-\u1ccf"},
{name:"InSuperscripts_and_Subscripts",bmp:"\u2070-\u209f"},{name:"InSupplemental_Arrows_A",bmp:"\u27f0-\u27ff"},{name:"InSupplemental_Arrows_B",bmp:"\u2900-\u297f"},{name:"InSupplemental_Mathematical_Operators",bmp:"\u2a00-\u2aff"},{name:"InSupplemental_Punctuation",bmp:"\u2e00-\u2e7f"},{name:"InSupplementary_Private_Use_Area_A",astral:"[\udb80-\udbbf][\udc00-\udfff]"},{name:"InSupplementary_Private_Use_Area_B",astral:"[\udbc0-\udbff][\udc00-\udfff]"},{name:"InSyloti_Nagri",bmp:"\ua800-\ua82f"},{name:"InSyriac",
bmp:"\u0700-\u074f"},{name:"InTagalog",bmp:"\u1700-\u171f"},{name:"InTagbanwa",bmp:"\u1760-\u177f"},{name:"InTags",astral:"\udb40[\udc00-\udc7f]"},{name:"InTai_Le",bmp:"\u1950-\u197f"},{name:"InTai_Tham",bmp:"\u1a20-\u1aaf"},{name:"InTai_Viet",bmp:"\uaa80-\uaadf"},{name:"InTai_Xuan_Jing_Symbols",astral:"\ud834[\udf00-\udf5f]"},{name:"InTakri",astral:"\ud805[\ude80-\udecf]"},{name:"InTamil",bmp:"\u0b80-\u0bff"},{name:"InTelugu",bmp:"\u0c00-\u0c7f"},{name:"InThaana",bmp:"\u0780-\u07bf"},{name:"InThai",
bmp:"\u0e00-\u0e7f"},{name:"InTibetan",bmp:"\u0f00-\u0fff"},{name:"InTifinagh",bmp:"\u2d30-\u2d7f"},{name:"InTransport_And_Map_Symbols",astral:"\ud83d[\ude80-\udeff]"},{name:"InUgaritic",astral:"\ud800[\udf80-\udf9f]"},{name:"InUnified_Canadian_Aboriginal_Syllabics",bmp:"\u1400-\u167f"},{name:"InUnified_Canadian_Aboriginal_Syllabics_Extended",bmp:"\u18b0-\u18ff"},{name:"InVai",bmp:"\ua500-\ua63f"},{name:"InVariation_Selectors",bmp:"\ufe00-\ufe0f"},{name:"InVariation_Selectors_Supplement",astral:"\udb40[\udd00-\uddef]"},
{name:"InVedic_Extensions",bmp:"\u1cd0-\u1cff"},{name:"InVertical_Forms",bmp:"\ufe10-\ufe1f"},{name:"InYi_Radicals",bmp:"\ua490-\ua4cf"},{name:"InYi_Syllables",bmp:"\ua000-\ua48f"},{name:"InYijing_Hexagram_Symbols",bmp:"\u4dc0-\u4dff"}]);if(!f.addUnicodeData)throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");f.install("extensibility");f.addUnicodeData([{name:"C",alias:"Other",isBmpLast:!0,bmp:"\x00-\u001f\u007f-\u009f\u00ad\u0378\u0379\u037f-\u0383\u038b\u038d\u03a2\u0528-\u0530\u0557\u0558\u0560\u0588\u058b-\u058e\u0590\u05c8-\u05cf\u05eb-\u05ef\u05f5-\u0605\u061c\u061d\u06dd\u070e\u070f\u074b\u074c\u07b2-\u07bf\u07fb-\u07ff\u082e\u082f\u083f\u085c\u085d\u085f-\u089f\u08a1\u08ad-\u08e3\u08ff\u0978\u0980\u0984\u098d\u098e\u0991\u0992\u09a9\u09b1\u09b3-\u09b5\u09ba\u09bb\u09c5\u09c6\u09c9\u09ca\u09cf-\u09d6\u09d8-\u09db\u09de\u09e4\u09e5\u09fc-\u0a00\u0a04\u0a0b-\u0a0e\u0a11\u0a12\u0a29\u0a31\u0a34\u0a37\u0a3a\u0a3b\u0a3d\u0a43-\u0a46\u0a49\u0a4a\u0a4e-\u0a50\u0a52-\u0a58\u0a5d\u0a5f-\u0a65\u0a76-\u0a80\u0a84\u0a8e\u0a92\u0aa9\u0ab1\u0ab4\u0aba\u0abb\u0ac6\u0aca\u0ace\u0acf\u0ad1-\u0adf\u0ae4\u0ae5\u0af2-\u0b00\u0b04\u0b0d\u0b0e\u0b11\u0b12\u0b29\u0b31\u0b34\u0b3a\u0b3b\u0b45\u0b46\u0b49\u0b4a\u0b4e-\u0b55\u0b58-\u0b5b\u0b5e\u0b64\u0b65\u0b78-\u0b81\u0b84\u0b8b-\u0b8d\u0b91\u0b96-\u0b98\u0b9b\u0b9d\u0ba0-\u0ba2\u0ba5-\u0ba7\u0bab-\u0bad\u0bba-\u0bbd\u0bc3-\u0bc5\u0bc9\u0bce\u0bcf\u0bd1-\u0bd6\u0bd8-\u0be5\u0bfb-\u0c00\u0c04\u0c0d\u0c11\u0c29\u0c34\u0c3a-\u0c3c\u0c45\u0c49\u0c4e-\u0c54\u0c57\u0c5a-\u0c5f\u0c64\u0c65\u0c70-\u0c77\u0c80\u0c81\u0c84\u0c8d\u0c91\u0ca9\u0cb4\u0cba\u0cbb\u0cc5\u0cc9\u0cce-\u0cd4\u0cd7-\u0cdd\u0cdf\u0ce4\u0ce5\u0cf0\u0cf3-\u0d01\u0d04\u0d0d\u0d11\u0d3b\u0d3c\u0d45\u0d49\u0d4f-\u0d56\u0d58-\u0d5f\u0d64\u0d65\u0d76-\u0d78\u0d80\u0d81\u0d84\u0d97-\u0d99\u0db2\u0dbc\u0dbe\u0dbf\u0dc7-\u0dc9\u0dcb-\u0dce\u0dd5\u0dd7\u0de0-\u0df1\u0df5-\u0e00\u0e3b-\u0e3e\u0e5c-\u0e80\u0e83\u0e85\u0e86\u0e89\u0e8b\u0e8c\u0e8e-\u0e93\u0e98\u0ea0\u0ea4\u0ea6\u0ea8\u0ea9\u0eac\u0eba\u0ebe\u0ebf\u0ec5\u0ec7\u0ece\u0ecf\u0eda\u0edb\u0ee0-\u0eff\u0f48\u0f6d-\u0f70\u0f98\u0fbd\u0fcd\u0fdb-\u0fff\u10c6\u10c8-\u10cc\u10ce\u10cf\u1249\u124e\u124f\u1257\u1259\u125e\u125f\u1289\u128e\u128f\u12b1\u12b6\u12b7\u12bf\u12c1\u12c6\u12c7\u12d7\u1311\u1316\u1317\u135b\u135c\u137d-\u137f\u139a-\u139f\u13f5-\u13ff\u169d-\u169f\u16f1-\u16ff\u170d\u1715-\u171f\u1737-\u173f\u1754-\u175f\u176d\u1771\u1774-\u177f\u17de\u17df\u17ea-\u17ef\u17fa-\u17ff\u180f\u181a-\u181f\u1878-\u187f\u18ab-\u18af\u18f6-\u18ff\u191d-\u191f\u192c-\u192f\u193c-\u193f\u1941-\u1943\u196e\u196f\u1975-\u197f\u19ac-\u19af\u19ca-\u19cf\u19db-\u19dd\u1a1c\u1a1d\u1a5f\u1a7d\u1a7e\u1a8a-\u1a8f\u1a9a-\u1a9f\u1aae-\u1aff\u1b4c-\u1b4f\u1b7d-\u1b7f\u1bf4-\u1bfb\u1c38-\u1c3a\u1c4a-\u1c4c\u1c80-\u1cbf\u1cc8-\u1ccf\u1cf7-\u1cff\u1de7-\u1dfb\u1f16\u1f17\u1f1e\u1f1f\u1f46\u1f47\u1f4e\u1f4f\u1f58\u1f5a\u1f5c\u1f5e\u1f7e\u1f7f\u1fb5\u1fc5\u1fd4\u1fd5\u1fdc\u1ff0\u1ff1\u1ff5\u1fff\u200b-\u200f\u202a-\u202e\u2060-\u206f\u2072\u2073\u208f\u209d-\u209f\u20bb-\u20cf\u20f1-\u20ff\u218a-\u218f\u23f4-\u23ff\u2427-\u243f\u244b-\u245f\u2700\u2b4d-\u2b4f\u2b5a-\u2bff\u2c2f\u2c5f\u2cf4-\u2cf8\u2d26\u2d28-\u2d2c\u2d2e\u2d2f\u2d68-\u2d6e\u2d71-\u2d7e\u2d97-\u2d9f\u2da7\u2daf\u2db7\u2dbf\u2dc7\u2dcf\u2dd7\u2ddf\u2e3c-\u2e7f\u2e9a\u2ef4-\u2eff\u2fd6-\u2fef\u2ffc-\u2fff\u3040\u3097\u3098\u3100-\u3104\u312e-\u3130\u318f\u31bb-\u31bf\u31e4-\u31ef\u321f\u32ff\u4db6-\u4dbf\u9fcd-\u9fff\ua48d-\ua48f\ua4c7-\ua4cf\ua62c-\ua63f\ua698-\ua69e\ua6f8-\ua6ff\ua78f\ua794-\ua79f\ua7ab-\ua7f7\ua82c-\ua82f\ua83a-\ua83f\ua878-\ua87f\ua8c5-\ua8cd\ua8da-\ua8df\ua8fc-\ua8ff\ua954-\ua95e\ua97d-\ua97f\ua9ce\ua9da-\ua9dd\ua9e0-\ua9ff\uaa37-\uaa3f\uaa4e\uaa4f\uaa5a\uaa5b\uaa7c-\uaa7f\uaac3-\uaada\uaaf7-\uab00\uab07\uab08\uab0f\uab10\uab17-\uab1f\uab27\uab2f-\uabbf\uabee\uabef\uabfa-\uabff\ud7a4-\ud7af\ud7c7-\ud7ca\ud7fc-\uf8ff\ufa6e\ufa6f\ufada-\ufaff\ufb07-\ufb12\ufb18-\ufb1c\ufb37\ufb3d\ufb3f\ufb42\ufb45\ufbc2-\ufbd2\ufd40-\ufd4f\ufd90\ufd91\ufdc8-\ufdef\ufdfe\ufdff\ufe1a-\ufe1f\ufe27-\ufe2f\ufe53\ufe67\ufe6c-\ufe6f\ufe75\ufefd-\uff00\uffbf-\uffc1\uffc8\uffc9\uffd0\uffd1\uffd8\uffd9\uffdd-\uffdf\uffe7\uffef-\ufffb\ufffe\uffff",
astral:"\ud808[\udf6f-\udfff]|\ud809[\udc63-\udc6f\udc74-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7f\udcbd\udcc2-\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd44-\udd7f\uddc9-\uddcf\uddda-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc60-\udcff\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbd\uddc0-\uddff\ude04\ude07-\ude0b\ude14\ude18\ude34-\ude37\ude3b-\ude3e\ude48-\ude4f\ude59-\ude5f\ude80-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf80-\udfff]|\ud86d[\udf35-\udf3f]|\ud81b[\udc00-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfff]|\ud86e[\udc1e-\udfff]|\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8b-\udd8f\udd9c-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udeff\udf1f\udf24-\udf2f\udf4b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud869[\uded7-\udeff]|\ud83b[\udc00-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00-\udcff\uddf0-\udfff]|\ud803[\udc49-\ude5f\ude7f-\udfff]|\ud80d[\udc2f-\udfff]|[\ud806\ud807\ud80a\ud80b\ud80e-\ud819\ud81c-\ud82b\ud82d-\ud833\ud836-\ud83a\ud83e\ud83f\ud86f-\ud87d\ud87f-\udb3f\udb41-\udbff][\udc00-\udfff]|\ud83d[\udc3f\udc41\udcf8\udcfd-\udcff\udd3e\udd3f\udd44-\udd4f\udd68-\uddfa\ude41-\ude44\ude50-\ude7f\udec6-\udeff\udf74-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcbf\udcc0\udcd0\udce0-\udcff\udd0b-\udd0f\udd2f\udd6c-\udd6f\udd9b-\udde5\ude03-\ude0f\ude3b-\ude3f\ude49-\ude4f\ude52-\udeff\udf21-\udf2f\udf36\udf7d-\udf7f\udf94-\udf9f\udfc5\udfcb-\udfdf\udff1-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud81a[\ude39-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udd73-\udd7a\uddde-\uddff\ude46-\udeff\udf57-\udf5f\udf72-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udfff]|\ud805[\udc00-\ude7f\udeb8-\udebf\udeca-\udfff]|\ud82c[\udc02-\udfff]"},
{name:"Cc",alias:"Control",bmp:"\x00-\u001f\u007f-\u009f"},{name:"Cf",alias:"Format",bmp:"\u00ad\u0600-\u0604\u06dd\u070f\u200b-\u200f\u202a-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb",astral:"\udb40[\udc01\udc20-\udc7f]|\ud834[\udd73-\udd7a]|\ud804\udcbd"},{name:"Cn",alias:"Unassigned",bmp:"\u0378\u0379\u037f-\u0383\u038b\u038d\u03a2\u0528-\u0530\u0557\u0558\u0560\u0588\u058b-\u058e\u0590\u05c8-\u05cf\u05eb-\u05ef\u05f5-\u05ff\u0605\u061c\u061d\u070e\u074b\u074c\u07b2-\u07bf\u07fb-\u07ff\u082e\u082f\u083f\u085c\u085d\u085f-\u089f\u08a1\u08ad-\u08e3\u08ff\u0978\u0980\u0984\u098d\u098e\u0991\u0992\u09a9\u09b1\u09b3-\u09b5\u09ba\u09bb\u09c5\u09c6\u09c9\u09ca\u09cf-\u09d6\u09d8-\u09db\u09de\u09e4\u09e5\u09fc-\u0a00\u0a04\u0a0b-\u0a0e\u0a11\u0a12\u0a29\u0a31\u0a34\u0a37\u0a3a\u0a3b\u0a3d\u0a43-\u0a46\u0a49\u0a4a\u0a4e-\u0a50\u0a52-\u0a58\u0a5d\u0a5f-\u0a65\u0a76-\u0a80\u0a84\u0a8e\u0a92\u0aa9\u0ab1\u0ab4\u0aba\u0abb\u0ac6\u0aca\u0ace\u0acf\u0ad1-\u0adf\u0ae4\u0ae5\u0af2-\u0b00\u0b04\u0b0d\u0b0e\u0b11\u0b12\u0b29\u0b31\u0b34\u0b3a\u0b3b\u0b45\u0b46\u0b49\u0b4a\u0b4e-\u0b55\u0b58-\u0b5b\u0b5e\u0b64\u0b65\u0b78-\u0b81\u0b84\u0b8b-\u0b8d\u0b91\u0b96-\u0b98\u0b9b\u0b9d\u0ba0-\u0ba2\u0ba5-\u0ba7\u0bab-\u0bad\u0bba-\u0bbd\u0bc3-\u0bc5\u0bc9\u0bce\u0bcf\u0bd1-\u0bd6\u0bd8-\u0be5\u0bfb-\u0c00\u0c04\u0c0d\u0c11\u0c29\u0c34\u0c3a-\u0c3c\u0c45\u0c49\u0c4e-\u0c54\u0c57\u0c5a-\u0c5f\u0c64\u0c65\u0c70-\u0c77\u0c80\u0c81\u0c84\u0c8d\u0c91\u0ca9\u0cb4\u0cba\u0cbb\u0cc5\u0cc9\u0cce-\u0cd4\u0cd7-\u0cdd\u0cdf\u0ce4\u0ce5\u0cf0\u0cf3-\u0d01\u0d04\u0d0d\u0d11\u0d3b\u0d3c\u0d45\u0d49\u0d4f-\u0d56\u0d58-\u0d5f\u0d64\u0d65\u0d76-\u0d78\u0d80\u0d81\u0d84\u0d97-\u0d99\u0db2\u0dbc\u0dbe\u0dbf\u0dc7-\u0dc9\u0dcb-\u0dce\u0dd5\u0dd7\u0de0-\u0df1\u0df5-\u0e00\u0e3b-\u0e3e\u0e5c-\u0e80\u0e83\u0e85\u0e86\u0e89\u0e8b\u0e8c\u0e8e-\u0e93\u0e98\u0ea0\u0ea4\u0ea6\u0ea8\u0ea9\u0eac\u0eba\u0ebe\u0ebf\u0ec5\u0ec7\u0ece\u0ecf\u0eda\u0edb\u0ee0-\u0eff\u0f48\u0f6d-\u0f70\u0f98\u0fbd\u0fcd\u0fdb-\u0fff\u10c6\u10c8-\u10cc\u10ce\u10cf\u1249\u124e\u124f\u1257\u1259\u125e\u125f\u1289\u128e\u128f\u12b1\u12b6\u12b7\u12bf\u12c1\u12c6\u12c7\u12d7\u1311\u1316\u1317\u135b\u135c\u137d-\u137f\u139a-\u139f\u13f5-\u13ff\u169d-\u169f\u16f1-\u16ff\u170d\u1715-\u171f\u1737-\u173f\u1754-\u175f\u176d\u1771\u1774-\u177f\u17de\u17df\u17ea-\u17ef\u17fa-\u17ff\u180f\u181a-\u181f\u1878-\u187f\u18ab-\u18af\u18f6-\u18ff\u191d-\u191f\u192c-\u192f\u193c-\u193f\u1941-\u1943\u196e\u196f\u1975-\u197f\u19ac-\u19af\u19ca-\u19cf\u19db-\u19dd\u1a1c\u1a1d\u1a5f\u1a7d\u1a7e\u1a8a-\u1a8f\u1a9a-\u1a9f\u1aae-\u1aff\u1b4c-\u1b4f\u1b7d-\u1b7f\u1bf4-\u1bfb\u1c38-\u1c3a\u1c4a-\u1c4c\u1c80-\u1cbf\u1cc8-\u1ccf\u1cf7-\u1cff\u1de7-\u1dfb\u1f16\u1f17\u1f1e\u1f1f\u1f46\u1f47\u1f4e\u1f4f\u1f58\u1f5a\u1f5c\u1f5e\u1f7e\u1f7f\u1fb5\u1fc5\u1fd4\u1fd5\u1fdc\u1ff0\u1ff1\u1ff5\u1fff\u2065-\u2069\u2072\u2073\u208f\u209d-\u209f\u20bb-\u20cf\u20f1-\u20ff\u218a-\u218f\u23f4-\u23ff\u2427-\u243f\u244b-\u245f\u2700\u2b4d-\u2b4f\u2b5a-\u2bff\u2c2f\u2c5f\u2cf4-\u2cf8\u2d26\u2d28-\u2d2c\u2d2e\u2d2f\u2d68-\u2d6e\u2d71-\u2d7e\u2d97-\u2d9f\u2da7\u2daf\u2db7\u2dbf\u2dc7\u2dcf\u2dd7\u2ddf\u2e3c-\u2e7f\u2e9a\u2ef4-\u2eff\u2fd6-\u2fef\u2ffc-\u2fff\u3040\u3097\u3098\u3100-\u3104\u312e-\u3130\u318f\u31bb-\u31bf\u31e4-\u31ef\u321f\u32ff\u4db6-\u4dbf\u9fcd-\u9fff\ua48d-\ua48f\ua4c7-\ua4cf\ua62c-\ua63f\ua698-\ua69e\ua6f8-\ua6ff\ua78f\ua794-\ua79f\ua7ab-\ua7f7\ua82c-\ua82f\ua83a-\ua83f\ua878-\ua87f\ua8c5-\ua8cd\ua8da-\ua8df\ua8fc-\ua8ff\ua954-\ua95e\ua97d-\ua97f\ua9ce\ua9da-\ua9dd\ua9e0-\ua9ff\uaa37-\uaa3f\uaa4e\uaa4f\uaa5a\uaa5b\uaa7c-\uaa7f\uaac3-\uaada\uaaf7-\uab00\uab07\uab08\uab0f\uab10\uab17-\uab1f\uab27\uab2f-\uabbf\uabee\uabef\uabfa-\uabff\ud7a4-\ud7af\ud7c7-\ud7ca\ud7fc-\ud7ff\ufa6e\ufa6f\ufada-\ufaff\ufb07-\ufb12\ufb18-\ufb1c\ufb37\ufb3d\ufb3f\ufb42\ufb45\ufbc2-\ufbd2\ufd40-\ufd4f\ufd90\ufd91\ufdc8-\ufdef\ufdfe\ufdff\ufe1a-\ufe1f\ufe27-\ufe2f\ufe53\ufe67\ufe6c-\ufe6f\ufe75\ufefd\ufefe\uff00\uffbf-\uffc1\uffc8\uffc9\uffd0\uffd1\uffd8\uffd9\uffdd-\uffdf\uffe7\uffef-\ufff8\ufffe\uffff",
astral:"\ud808[\udf6f-\udfff]|\udb40[\udc00\udc02-\udc1f\udc80-\udcff\uddf0-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\uddde-\uddff\ude46-\udeff\udf57-\udf5f\udf72-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc60-\udcff\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbd\uddc0-\uddff\ude04\ude07-\ude0b\ude14\ude18\ude34-\ude37\ude3b-\ude3e\ude48-\ude4f\ude59-\ude5f\ude80-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf80-\udfff]|\ud86d[\udf35-\udf3f]|\ud81b[\udc00-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfff]|\ud809[\udc63-\udc6f\udc74-\udfff]|\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8b-\udd8f\udd9c-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udeff\udf1f\udf24-\udf2f\udf4b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud869[\uded7-\udeff]|\ud804[\udc4e-\udc51\udc70-\udc7f\udcc2-\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd44-\udd7f\uddc9-\uddcf\uddda-\udfff]|\ud83b[\udc00-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|[\udbbf\udbff][\udffe\udfff]|\ud87e[\ude1e-\udfff]|\ud803[\udc49-\ude5f\ude7f-\udfff]|\ud80d[\udc2f-\udfff]|[\ud806\ud807\ud80a\ud80b\ud80e-\ud819\ud81c-\ud82b\ud82d-\ud833\ud836-\ud83a\ud83e\ud83f\ud86f-\ud87d\ud87f-\udb3f\udb41-\udb7f][\udc00-\udfff]|\ud83d[\udc3f\udc41\udcf8\udcfd-\udcff\udd3e\udd3f\udd44-\udd4f\udd68-\uddfa\ude41-\ude44\ude50-\ude7f\udec6-\udeff\udf74-\udfff]|\ud86e[\udc1e-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcbf\udcc0\udcd0\udce0-\udcff\udd0b-\udd0f\udd2f\udd6c-\udd6f\udd9b-\udde5\ude03-\ude0f\ude3b-\ude3f\ude49-\ude4f\ude52-\udeff\udf21-\udf2f\udf36\udf7d-\udf7f\udf94-\udf9f\udfc5\udfcb-\udfdf\udff1-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud81a[\ude39-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udfff]|\ud805[\udc00-\ude7f\udeb8-\udebf\udeca-\udfff]|\ud82c[\udc02-\udfff]"},
{name:"Co",alias:"Private_Use",bmp:"\ue000-\uf8ff",astral:"[\udb80-\udbbe\udbc0-\udbfe][\udc00-\udfff]|[\udbbf\udbff][\udc00-\udffd]"},{name:"Cs",alias:"Surrogate",bmp:"\ud800-\udfff"},{name:"Ll",alias:"Lowercase_Letter",bmp:"a-z\u00b5\u00df-\u00f6\u00f8-\u00ff\u0101\u0103\u0105\u0107\u0109\u010b\u010d\u010f\u0111\u0113\u0115\u0117\u0119\u011b\u011d\u011f\u0121\u0123\u0125\u0127\u0129\u012b\u012d\u012f\u0131\u0133\u0135\u0137\u0138\u013a\u013c\u013e\u0140\u0142\u0144\u0146\u0148\u0149\u014b\u014d\u014f\u0151\u0153\u0155\u0157\u0159\u015b\u015d\u015f\u0161\u0163\u0165\u0167\u0169\u016b\u016d\u016f\u0171\u0173\u0175\u0177\u017a\u017c\u017e-\u0180\u0183\u0185\u0188\u018c\u018d\u0192\u0195\u0199-\u019b\u019e\u01a1\u01a3\u01a5\u01a8\u01aa\u01ab\u01ad\u01b0\u01b4\u01b6\u01b9\u01ba\u01bd-\u01bf\u01c6\u01c9\u01cc\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u01dd\u01df\u01e1\u01e3\u01e5\u01e7\u01e9\u01eb\u01ed\u01ef\u01f0\u01f3\u01f5\u01f9\u01fb\u01fd\u01ff\u0201\u0203\u0205\u0207\u0209\u020b\u020d\u020f\u0211\u0213\u0215\u0217\u0219\u021b\u021d\u021f\u0221\u0223\u0225\u0227\u0229\u022b\u022d\u022f\u0231\u0233-\u0239\u023c\u023f\u0240\u0242\u0247\u0249\u024b\u024d\u024f-\u0293\u0295-\u02af\u0371\u0373\u0377\u037b-\u037d\u0390\u03ac-\u03ce\u03d0\u03d1\u03d5-\u03d7\u03d9\u03db\u03dd\u03df\u03e1\u03e3\u03e5\u03e7\u03e9\u03eb\u03ed\u03ef-\u03f3\u03f5\u03f8\u03fb\u03fc\u0430-\u045f\u0461\u0463\u0465\u0467\u0469\u046b\u046d\u046f\u0471\u0473\u0475\u0477\u0479\u047b\u047d\u047f\u0481\u048b\u048d\u048f\u0491\u0493\u0495\u0497\u0499\u049b\u049d\u049f\u04a1\u04a3\u04a5\u04a7\u04a9\u04ab\u04ad\u04af\u04b1\u04b3\u04b5\u04b7\u04b9\u04bb\u04bd\u04bf\u04c2\u04c4\u04c6\u04c8\u04ca\u04cc\u04ce\u04cf\u04d1\u04d3\u04d5\u04d7\u04d9\u04db\u04dd\u04df\u04e1\u04e3\u04e5\u04e7\u04e9\u04eb\u04ed\u04ef\u04f1\u04f3\u04f5\u04f7\u04f9\u04fb\u04fd\u04ff\u0501\u0503\u0505\u0507\u0509\u050b\u050d\u050f\u0511\u0513\u0515\u0517\u0519\u051b\u051d\u051f\u0521\u0523\u0525\u0527\u0561-\u0587\u1d00-\u1d2b\u1d6b-\u1d77\u1d79-\u1d9a\u1e01\u1e03\u1e05\u1e07\u1e09\u1e0b\u1e0d\u1e0f\u1e11\u1e13\u1e15\u1e17\u1e19\u1e1b\u1e1d\u1e1f\u1e21\u1e23\u1e25\u1e27\u1e29\u1e2b\u1e2d\u1e2f\u1e31\u1e33\u1e35\u1e37\u1e39\u1e3b\u1e3d\u1e3f\u1e41\u1e43\u1e45\u1e47\u1e49\u1e4b\u1e4d\u1e4f\u1e51\u1e53\u1e55\u1e57\u1e59\u1e5b\u1e5d\u1e5f\u1e61\u1e63\u1e65\u1e67\u1e69\u1e6b\u1e6d\u1e6f\u1e71\u1e73\u1e75\u1e77\u1e79\u1e7b\u1e7d\u1e7f\u1e81\u1e83\u1e85\u1e87\u1e89\u1e8b\u1e8d\u1e8f\u1e91\u1e93\u1e95-\u1e9d\u1e9f\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ebf\u1ec1\u1ec3\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9\u1efb\u1efd\u1eff-\u1f07\u1f10-\u1f15\u1f20-\u1f27\u1f30-\u1f37\u1f40-\u1f45\u1f50-\u1f57\u1f60-\u1f67\u1f70-\u1f7d\u1f80-\u1f87\u1f90-\u1f97\u1fa0-\u1fa7\u1fb0-\u1fb4\u1fb6\u1fb7\u1fbe\u1fc2-\u1fc4\u1fc6\u1fc7\u1fd0-\u1fd3\u1fd6\u1fd7\u1fe0-\u1fe7\u1ff2-\u1ff4\u1ff6\u1ff7\u210a\u210e\u210f\u2113\u212f\u2134\u2139\u213c\u213d\u2146-\u2149\u214e\u2184\u2c30-\u2c5e\u2c61\u2c65\u2c66\u2c68\u2c6a\u2c6c\u2c71\u2c73\u2c74\u2c76-\u2c7b\u2c81\u2c83\u2c85\u2c87\u2c89\u2c8b\u2c8d\u2c8f\u2c91\u2c93\u2c95\u2c97\u2c99\u2c9b\u2c9d\u2c9f\u2ca1\u2ca3\u2ca5\u2ca7\u2ca9\u2cab\u2cad\u2caf\u2cb1\u2cb3\u2cb5\u2cb7\u2cb9\u2cbb\u2cbd\u2cbf\u2cc1\u2cc3\u2cc5\u2cc7\u2cc9\u2ccb\u2ccd\u2ccf\u2cd1\u2cd3\u2cd5\u2cd7\u2cd9\u2cdb\u2cdd\u2cdf\u2ce1\u2ce3\u2ce4\u2cec\u2cee\u2cf3\u2d00-\u2d25\u2d27\u2d2d\ua641\ua643\ua645\ua647\ua649\ua64b\ua64d\ua64f\ua651\ua653\ua655\ua657\ua659\ua65b\ua65d\ua65f\ua661\ua663\ua665\ua667\ua669\ua66b\ua66d\ua681\ua683\ua685\ua687\ua689\ua68b\ua68d\ua68f\ua691\ua693\ua695\ua697\ua723\ua725\ua727\ua729\ua72b\ua72d\ua72f-\ua731\ua733\ua735\ua737\ua739\ua73b\ua73d\ua73f\ua741\ua743\ua745\ua747\ua749\ua74b\ua74d\ua74f\ua751\ua753\ua755\ua757\ua759\ua75b\ua75d\ua75f\ua761\ua763\ua765\ua767\ua769\ua76b\ua76d\ua76f\ua771-\ua778\ua77a\ua77c\ua77f\ua781\ua783\ua785\ua787\ua78c\ua78e\ua791\ua793\ua7a1\ua7a3\ua7a5\ua7a7\ua7a9\ua7fa\ufb00-\ufb06\ufb13-\ufb17\uff41-\uff5a",
astral:"\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud801[\udc28-\udc4f]"},{name:"Lm",alias:"Modifier_Letter",bmp:"\u02b0-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0374\u037a\u0559\u0640\u06e5\u06e6\u07f4\u07f5\u07fa\u081a\u0824\u0828\u0971\u0e46\u0ec6\u10fc\u17d7\u1843\u1aa7\u1c78-\u1c7d\u1d2c-\u1d6a\u1d78\u1d9b-\u1dbf\u2071\u207f\u2090-\u209c\u2c7c\u2c7d\u2d6f\u2e2f\u3005\u3031-\u3035\u303b\u309d\u309e\u30fc-\u30fe\ua015\ua4f8-\ua4fd\ua60c\ua67f\ua717-\ua71f\ua770\ua788\ua7f8\ua7f9\ua9cf\uaa70\uaadd\uaaf3\uaaf4\uff70\uff9e\uff9f",
astral:"\ud81b[\udf93-\udf9f]"},{name:"Lo",alias:"Other_Letter",bmp:"\u00aa\u00ba\u01bb\u01c0-\u01c3\u0294\u05d0-\u05ea\u05f0-\u05f2\u0620-\u063f\u0641-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u0800-\u0815\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0972-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e45\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10d0-\u10fa\u10fd-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17dc\u1820-\u1842\u1844-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c77\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u2135-\u2138\u2d30-\u2d67\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3006\u303c\u3041-\u3096\u309f\u30a1-\u30fa\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua014\ua016-\ua48c\ua4d0-\ua4f7\ua500-\ua60b\ua610-\ua61f\ua62a\ua62b\ua66e\ua6a0-\ua6e5\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa6f\uaa71-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb\uaadc\uaae0-\uaaea\uaaf2\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff66-\uff6f\uff71-\uff9d\uffa0-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
astral:"\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude33\ude60-\ude7c\udf00-\udf35\udf40-\udf55\udf60-\udf72]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1e\udf30-\udf40\udf42-\udf49\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud81a[\udc00-\ude38]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd83-\uddb2\uddc1-\uddc4]|\ud86e[\udc00-\udc1d]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud803[\udc00-\udc48]|\ud80d[\udc00-\udc2e]|\ud805[\ude80-\udeaa]|\ud87e[\udc00-\ude1d]|\ud81b[\udf00-\udf44\udf50]|\ud801[\udc50-\udc9d]|\ud82c[\udc00\udc01]|[\ud80c\ud840-\ud868\ud86a-\ud86c][\udc00-\udfff]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud808[\udc00-\udf6e]|\ud869[\udc00-\uded6\udf00-\udfff]"},
{name:"Lt",alias:"Titlecase_Letter",bmp:"\u01c5\u01c8\u01cb\u01f2\u1f88-\u1f8f\u1f98-\u1f9f\u1fa8-\u1faf\u1fbc\u1fcc\u1ffc"},{name:"Lu",alias:"Uppercase_Letter",bmp:"A-Z\u00c0-\u00d6\u00d8-\u00de\u0100\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112\u0114\u0116\u0118\u011a\u011c\u011e\u0120\u0122\u0124\u0126\u0128\u012a\u012c\u012e\u0130\u0132\u0134\u0136\u0139\u013b\u013d\u013f\u0141\u0143\u0145\u0147\u014a\u014c\u014e\u0150\u0152\u0154\u0156\u0158\u015a\u015c\u015e\u0160\u0162\u0164\u0166\u0168\u016a\u016c\u016e\u0170\u0172\u0174\u0176\u0178\u0179\u017b\u017d\u0181\u0182\u0184\u0186\u0187\u0189-\u018b\u018e-\u0191\u0193\u0194\u0196-\u0198\u019c\u019d\u019f\u01a0\u01a2\u01a4\u01a6\u01a7\u01a9\u01ac\u01ae\u01af\u01b1-\u01b3\u01b5\u01b7\u01b8\u01bc\u01c4\u01c7\u01ca\u01cd\u01cf\u01d1\u01d3\u01d5\u01d7\u01d9\u01db\u01de\u01e0\u01e2\u01e4\u01e6\u01e8\u01ea\u01ec\u01ee\u01f1\u01f4\u01f6-\u01f8\u01fa\u01fc\u01fe\u0200\u0202\u0204\u0206\u0208\u020a\u020c\u020e\u0210\u0212\u0214\u0216\u0218\u021a\u021c\u021e\u0220\u0222\u0224\u0226\u0228\u022a\u022c\u022e\u0230\u0232\u023a\u023b\u023d\u023e\u0241\u0243-\u0246\u0248\u024a\u024c\u024e\u0370\u0372\u0376\u0386\u0388-\u038a\u038c\u038e\u038f\u0391-\u03a1\u03a3-\u03ab\u03cf\u03d2-\u03d4\u03d8\u03da\u03dc\u03de\u03e0\u03e2\u03e4\u03e6\u03e8\u03ea\u03ec\u03ee\u03f4\u03f7\u03f9\u03fa\u03fd-\u042f\u0460\u0462\u0464\u0466\u0468\u046a\u046c\u046e\u0470\u0472\u0474\u0476\u0478\u047a\u047c\u047e\u0480\u048a\u048c\u048e\u0490\u0492\u0494\u0496\u0498\u049a\u049c\u049e\u04a0\u04a2\u04a4\u04a6\u04a8\u04aa\u04ac\u04ae\u04b0\u04b2\u04b4\u04b6\u04b8\u04ba\u04bc\u04be\u04c0\u04c1\u04c3\u04c5\u04c7\u04c9\u04cb\u04cd\u04d0\u04d2\u04d4\u04d6\u04d8\u04da\u04dc\u04de\u04e0\u04e2\u04e4\u04e6\u04e8\u04ea\u04ec\u04ee\u04f0\u04f2\u04f4\u04f6\u04f8\u04fa\u04fc\u04fe\u0500\u0502\u0504\u0506\u0508\u050a\u050c\u050e\u0510\u0512\u0514\u0516\u0518\u051a\u051c\u051e\u0520\u0522\u0524\u0526\u0531-\u0556\u10a0-\u10c5\u10c7\u10cd\u1e00\u1e02\u1e04\u1e06\u1e08\u1e0a\u1e0c\u1e0e\u1e10\u1e12\u1e14\u1e16\u1e18\u1e1a\u1e1c\u1e1e\u1e20\u1e22\u1e24\u1e26\u1e28\u1e2a\u1e2c\u1e2e\u1e30\u1e32\u1e34\u1e36\u1e38\u1e3a\u1e3c\u1e3e\u1e40\u1e42\u1e44\u1e46\u1e48\u1e4a\u1e4c\u1e4e\u1e50\u1e52\u1e54\u1e56\u1e58\u1e5a\u1e5c\u1e5e\u1e60\u1e62\u1e64\u1e66\u1e68\u1e6a\u1e6c\u1e6e\u1e70\u1e72\u1e74\u1e76\u1e78\u1e7a\u1e7c\u1e7e\u1e80\u1e82\u1e84\u1e86\u1e88\u1e8a\u1e8c\u1e8e\u1e90\u1e92\u1e94\u1e9e\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ebe\u1ec0\u1ec2\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1eec\u1eee\u1ef0\u1ef2\u1ef4\u1ef6\u1ef8\u1efa\u1efc\u1efe\u1f08-\u1f0f\u1f18-\u1f1d\u1f28-\u1f2f\u1f38-\u1f3f\u1f48-\u1f4d\u1f59\u1f5b\u1f5d\u1f5f\u1f68-\u1f6f\u1fb8-\u1fbb\u1fc8-\u1fcb\u1fd8-\u1fdb\u1fe8-\u1fec\u1ff8-\u1ffb\u2102\u2107\u210b-\u210d\u2110-\u2112\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u2130-\u2133\u213e\u213f\u2145\u2183\u2c00-\u2c2e\u2c60\u2c62-\u2c64\u2c67\u2c69\u2c6b\u2c6d-\u2c70\u2c72\u2c75\u2c7e-\u2c80\u2c82\u2c84\u2c86\u2c88\u2c8a\u2c8c\u2c8e\u2c90\u2c92\u2c94\u2c96\u2c98\u2c9a\u2c9c\u2c9e\u2ca0\u2ca2\u2ca4\u2ca6\u2ca8\u2caa\u2cac\u2cae\u2cb0\u2cb2\u2cb4\u2cb6\u2cb8\u2cba\u2cbc\u2cbe\u2cc0\u2cc2\u2cc4\u2cc6\u2cc8\u2cca\u2ccc\u2cce\u2cd0\u2cd2\u2cd4\u2cd6\u2cd8\u2cda\u2cdc\u2cde\u2ce0\u2ce2\u2ceb\u2ced\u2cf2\ua640\ua642\ua644\ua646\ua648\ua64a\ua64c\ua64e\ua650\ua652\ua654\ua656\ua658\ua65a\ua65c\ua65e\ua660\ua662\ua664\ua666\ua668\ua66a\ua66c\ua680\ua682\ua684\ua686\ua688\ua68a\ua68c\ua68e\ua690\ua692\ua694\ua696\ua722\ua724\ua726\ua728\ua72a\ua72c\ua72e\ua732\ua734\ua736\ua738\ua73a\ua73c\ua73e\ua740\ua742\ua744\ua746\ua748\ua74a\ua74c\ua74e\ua750\ua752\ua754\ua756\ua758\ua75a\ua75c\ua75e\ua760\ua762\ua764\ua766\ua768\ua76a\ua76c\ua76e\ua779\ua77b\ua77d\ua77e\ua780\ua782\ua784\ua786\ua78b\ua78d\ua790\ua792\ua7a0\ua7a2\ua7a4\ua7a6\ua7a8\ua7aa\uff21-\uff3a",
astral:"\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud801[\udc00-\udc27]"},{name:"M",alias:"Mark",bmp:"\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f\u109a-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u192b\u1930-\u193b\u19b0-\u19c0\u19c8\u19c9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f\u1b00-\u1b04\u1b34-\u1b44\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1be6-\u1bf3\u1c24-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u20d0-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe26",
astral:"\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f]|\ud81b[\udf51-\udf7e\udf8f-\udf92]|\ud804[\udc00-\udc02\udc38-\udc46\udc80-\udc82\udcb0-\udcba\udd00-\udd02\udd27-\udd34\udd80-\udd82\uddb3-\uddc0]|\ud805[\udeab-\udeb7]|\ud800\uddfd|\udb40[\udd00-\uddef]"},{name:"Mc",alias:"Spacing_Mark",bmp:"\u0903\u093b\u093e-\u0940\u0949-\u094c\u094e\u094f\u0982\u0983\u09be-\u09c0\u09c7\u09c8\u09cb\u09cc\u09d7\u0a03\u0a3e-\u0a40\u0a83\u0abe-\u0ac0\u0ac9\u0acb\u0acc\u0b02\u0b03\u0b3e\u0b40\u0b47\u0b48\u0b4b\u0b4c\u0b57\u0bbe\u0bbf\u0bc1\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd7\u0c01-\u0c03\u0c41-\u0c44\u0c82\u0c83\u0cbe\u0cc0-\u0cc4\u0cc7\u0cc8\u0cca\u0ccb\u0cd5\u0cd6\u0d02\u0d03\u0d3e-\u0d40\u0d46-\u0d48\u0d4a-\u0d4c\u0d57\u0d82\u0d83\u0dcf-\u0dd1\u0dd8-\u0ddf\u0df2\u0df3\u0f3e\u0f3f\u0f7f\u102b\u102c\u1031\u1038\u103b\u103c\u1056\u1057\u1062-\u1064\u1067-\u106d\u1083\u1084\u1087-\u108c\u108f\u109a-\u109c\u17b6\u17be-\u17c5\u17c7\u17c8\u1923-\u1926\u1929-\u192b\u1930\u1931\u1933-\u1938\u19b0-\u19c0\u19c8\u19c9\u1a19-\u1a1b\u1a55\u1a57\u1a61\u1a63\u1a64\u1a6d-\u1a72\u1b04\u1b35\u1b3b\u1b3d-\u1b41\u1b43\u1b44\u1b82\u1ba1\u1ba6\u1ba7\u1baa\u1bac\u1bad\u1be7\u1bea-\u1bec\u1bee\u1bf2\u1bf3\u1c24-\u1c2b\u1c34\u1c35\u1ce1\u1cf2\u1cf3\u302e\u302f\ua823\ua824\ua827\ua880\ua881\ua8b4-\ua8c3\ua952\ua953\ua983\ua9b4\ua9b5\ua9ba\ua9bb\ua9bd-\ua9c0\uaa2f\uaa30\uaa33\uaa34\uaa4d\uaa7b\uaaeb\uaaee\uaaef\uaaf5\uabe3\uabe4\uabe6\uabe7\uabe9\uabea\uabec",
astral:"\ud834[\udd65\udd66\udd6d-\udd72]|\ud804[\udc00\udc02\udc82\udcb0-\udcb2\udcb7\udcb8\udd2c\udd82\uddb3-\uddb5\uddbf\uddc0]|\ud805[\udeac\udeae\udeaf\udeb6]|\ud81b[\udf51-\udf7e]"},{name:"Me",alias:"Enclosing_Mark",bmp:"\u0488\u0489\u20dd-\u20e0\u20e2-\u20e4\ua670-\ua672"},{name:"Mn",alias:"Nonspacing_Mark",bmp:"\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962\u0963\u0981\u09bc\u09c1-\u09c4\u09cd\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b62\u0b63\u0b82\u0bc0\u0bcd\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc6\u0ccc\u0ccd\u0ce2\u0ce3\u0d41-\u0d44\u0d4d\u0d62\u0d63\u0dca\u0dd2-\u0dd4\u0dd6\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1bab\u1be6\u1be8\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u3099\u309a\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaec\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe26",
astral:"\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f]|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud81b[\udf8f-\udf92]|\ud805[\udeab\udead\udeb0-\udeb5\udeb7]|\ud804[\udc01\udc38-\udc46\udc80\udc81\udcb3-\udcb6\udcb9\udcba\udd00-\udd02\udd27-\udd2b\udd2d-\udd34\udd80\udd81\uddb6-\uddbe]|\ud800\uddfd|\udb40[\udd00-\uddef]"},{name:"N",alias:"Number",bmp:"0-9\u00b2\u00b3\u00b9\u00bc-\u00be\u0660-\u0669\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u09f4-\u09f9\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0b72-\u0b77\u0be6-\u0bf2\u0c66-\u0c6f\u0c78-\u0c7e\u0ce6-\u0cef\u0d66-\u0d75\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f33\u1040-\u1049\u1090-\u1099\u1369-\u137c\u16ee-\u16f0\u17e0-\u17e9\u17f0-\u17f9\u1810-\u1819\u1946-\u194f\u19d0-\u19da\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249b\u24ea-\u24ff\u2776-\u2793\u2cfd\u3007\u3021-\u3029\u3038-\u303a\u3192-\u3195\u3220-\u3229\u3248-\u324f\u3251-\u325f\u3280-\u3289\u32b1-\u32bf\ua620-\ua629\ua6e6-\ua6ef\ua830-\ua835\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\uaa50-\uaa59\uabf0-\uabf9\uff10-\uff19",
astral:"\ud802[\udc58-\udc5f\udd16-\udd1b\ude40-\ude47\ude7d\ude7e\udf58-\udf5f\udf78-\udf7f]|\ud801[\udca0-\udca9]|\ud809[\udc00-\udc62]|\ud835[\udfce-\udfff]|\ud800[\udd07-\udd33\udd40-\udd78\udd8a\udf20-\udf23\udf41\udf4a\udfd1-\udfd5]|\ud834[\udf60-\udf71]|\ud803[\ude60-\ude7e]|\ud83c[\udd00-\udd0a]|\ud805[\udec0-\udec9]|\ud804[\udc52-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9]"},{name:"Nd",alias:"Decimal_Number",bmp:"0-9\u0660-\u0669\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29\u1040-\u1049\u1090-\u1099\u17e0-\u17e9\u1810-\u1819\u1946-\u194f\u19d0-\u19d9\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\ua620-\ua629\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\uaa50-\uaa59\uabf0-\uabf9\uff10-\uff19",
astral:"\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9]|\ud805[\udec0-\udec9]|\ud801[\udca0-\udca9]|\ud835[\udfce-\udfff]"},{name:"Nl",alias:"Letter_Number",bmp:"\u16ee-\u16f0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303a\ua6e6-\ua6ef",astral:"\ud800[\udd40-\udd74\udf41\udf4a\udfd1-\udfd5]|\ud809[\udc00-\udc62]"},{name:"No",alias:"Other_Number",bmp:"\u00b2\u00b3\u00b9\u00bc-\u00be\u09f4-\u09f9\u0b72-\u0b77\u0bf0-\u0bf2\u0c78-\u0c7e\u0d70-\u0d75\u0f2a-\u0f33\u1369-\u137c\u17f0-\u17f9\u19da\u2070\u2074-\u2079\u2080-\u2089\u2150-\u215f\u2189\u2460-\u249b\u24ea-\u24ff\u2776-\u2793\u2cfd\u3192-\u3195\u3220-\u3229\u3248-\u324f\u3251-\u325f\u3280-\u3289\u32b1-\u32bf\ua830-\ua835",
astral:"\ud802[\udc58-\udc5f\udd16-\udd1b\ude40-\ude47\ude7d\ude7e\udf58-\udf5f\udf78-\udf7f]|\ud834[\udf60-\udf71]|\ud803[\ude60-\ude7e]|\ud800[\udd07-\udd33\udd75-\udd78\udd8a\udf20-\udf23]|\ud83c[\udd00-\udd0a]|\ud804[\udc52-\udc65]"},{name:"P",alias:"Punctuation",bmp:"!-#%-\\x2A,-/:;\\x3F@\\x5B-\\x5D_\\x7B}\u00a1\u00a7\u00ab\u00b6\u00b7\u00bb\u00bf\u037e\u0387\u055a-\u055f\u0589\u058a\u05be\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u0af0\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f14\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1360-\u1368\u1400\u166d\u166e\u169b\u169c\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cc0-\u1cc7\u1cd3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205e\u207d\u207e\u208d\u208e\u2329\u232a\u2768-\u2775\u27c5\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc\u29fd\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00-\u2e2e\u2e30-\u2e3b\u3001-\u3003\u3008-\u3011\u3014-\u301f\u3030\u303d\u30a0\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uaaf0\uaaf1\uabeb\ufd3e\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a\uff1b\uff1f\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65",
astral:"\ud809[\udc70-\udc73]|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udf39-\udf3f]|\ud800[\udd00-\udd02\udf9f\udfd0]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\uddc5-\uddc8]"},{name:"Pc",alias:"Connector_Punctuation",bmp:"_\u203f\u2040\u2054\ufe33\ufe34\ufe4d-\ufe4f\uff3f"},{name:"Pd",alias:"Dash_Punctuation",bmp:"\\x2D\u058a\u05be\u1400\u1806\u2010-\u2015\u2e17\u2e1a\u2e3a\u2e3b\u301c\u3030\u30a0\ufe31\ufe32\ufe58\ufe63\uff0d"},{name:"Pe",alias:"Close_Punctuation",bmp:"\\x29\\x5D}\u0f3b\u0f3d\u169c\u2046\u207e\u208e\u232a\u2769\u276b\u276d\u276f\u2771\u2773\u2775\u27c6\u27e7\u27e9\u27eb\u27ed\u27ef\u2984\u2986\u2988\u298a\u298c\u298e\u2990\u2992\u2994\u2996\u2998\u29d9\u29db\u29fd\u2e23\u2e25\u2e27\u2e29\u3009\u300b\u300d\u300f\u3011\u3015\u3017\u3019\u301b\u301e\u301f\ufd3f\ufe18\ufe36\ufe38\ufe3a\ufe3c\ufe3e\ufe40\ufe42\ufe44\ufe48\ufe5a\ufe5c\ufe5e\uff09\uff3d\uff5d\uff60\uff63"},
{name:"Pf",alias:"Final_Punctuation",bmp:"\u00bb\u2019\u201d\u203a\u2e03\u2e05\u2e0a\u2e0d\u2e1d\u2e21"},{name:"Pi",alias:"Initial_Punctuation",bmp:"\u00ab\u2018\u201b\u201c\u201f\u2039\u2e02\u2e04\u2e09\u2e0c\u2e1c\u2e20"},{name:"Po",alias:"Other_Punctuation",bmp:"!-#%-'\\x2A,\\x2E/:;\\x3F@\\x5C\u00a1\u00a7\u00b6\u00b7\u00bf\u037e\u0387\u055a-\u055f\u0589\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u0af0\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f14\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1360-\u1368\u166d\u166e\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u1805\u1807-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cc0-\u1cc7\u1cd3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203b-\u203e\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205e\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00\u2e01\u2e06-\u2e08\u2e0b\u2e0e-\u2e16\u2e18\u2e19\u2e1b\u2e1e\u2e1f\u2e2a-\u2e2e\u2e30-\u2e39\u3001-\u3003\u303d\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uaaf0\uaaf1\uabeb\ufe10-\ufe16\ufe19\ufe30\ufe45\ufe46\ufe49-\ufe4c\ufe50-\ufe52\ufe54-\ufe57\ufe5f-\ufe61\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff07\uff0a\uff0c\uff0e\uff0f\uff1a\uff1b\uff1f\uff20\uff3c\uff61\uff64\uff65",
astral:"\ud809[\udc70-\udc73]|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udf39-\udf3f]|\ud800[\udd00-\udd02\udf9f\udfd0]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\uddc5-\uddc8]"},{name:"Ps",alias:"Open_Punctuation",bmp:"\\x28\\x5B\\x7B\u0f3a\u0f3c\u169b\u201a\u201e\u2045\u207d\u208d\u2329\u2768\u276a\u276c\u276e\u2770\u2772\u2774\u27c5\u27e6\u27e8\u27ea\u27ec\u27ee\u2983\u2985\u2987\u2989\u298b\u298d\u298f\u2991\u2993\u2995\u2997\u29d8\u29da\u29fc\u2e22\u2e24\u2e26\u2e28\u3008\u300a\u300c\u300e\u3010\u3014\u3016\u3018\u301a\u301d\ufd3e\ufe17\ufe35\ufe37\ufe39\ufe3b\ufe3d\ufe3f\ufe41\ufe43\ufe47\ufe59\ufe5b\ufe5d\uff08\uff3b\uff5b\uff5f\uff62"},
{name:"S",alias:"Symbol",bmp:"\\x24\\x2B<->\\x5E`\\x7C~\u00a2-\u00a6\u00a8\u00a9\u00ac\u00ae-\u00b1\u00b4\u00b8\u00d7\u00f7\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u03f6\u0482\u058f\u0606-\u0608\u060b\u060e\u060f\u06de\u06e9\u06fd\u06fe\u07f6\u09f2\u09f3\u09fa\u09fb\u0af1\u0b70\u0bf3-\u0bfa\u0c7f\u0d79\u0e3f\u0f01-\u0f03\u0f13\u0f15-\u0f17\u0f1a-\u0f1f\u0f34\u0f36\u0f38\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce\u0fcf\u0fd5-\u0fd8\u109e\u109f\u1390-\u1399\u17db\u1940\u19de-\u19ff\u1b61-\u1b6a\u1b74-\u1b7c\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u2044\u2052\u207a-\u207c\u208a-\u208c\u20a0-\u20ba\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211e-\u2123\u2125\u2127\u2129\u212e\u213a\u213b\u2140-\u2144\u214a-\u214d\u214f\u2190-\u2328\u232b-\u23f3\u2400-\u2426\u2440-\u244a\u249c-\u24e9\u2500-\u26ff\u2701-\u2767\u2794-\u27c4\u27c7-\u27e5\u27f0-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2b4c\u2b50-\u2b59\u2ce5-\u2cea\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3004\u3012\u3013\u3020\u3036\u3037\u303e\u303f\u309b\u309c\u3190\u3191\u3196-\u319f\u31c0-\u31e3\u3200-\u321e\u322a-\u3247\u3250\u3260-\u327f\u328a-\u32b0\u32c0-\u32fe\u3300-\u33ff\u4dc0-\u4dff\ua490-\ua4c6\ua700-\ua716\ua720\ua721\ua789\ua78a\ua828-\ua82b\ua836-\ua839\uaa77-\uaa79\ufb29\ufbb2-\ufbc1\ufdfc\ufdfd\ufe62\ufe64-\ufe66\ufe69\uff04\uff0b\uff1c-\uff1e\uff3e\uff40\uff5c\uff5e\uffe0-\uffe6\uffe8-\uffee\ufffc\ufffd",
astral:"\ud83d[\udc00-\udc3e\udc40\udc42-\udcf7\udcf9-\udcfc\udd00-\udd3d\udd40-\udd43\udd50-\udd67\uddfb-\ude40\ude45-\ude4f\ude80-\udec5\udf00-\udf73]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbe\udcc1-\udccf\udcd1-\udcdf\udd10-\udd2e\udd30-\udd6b\udd70-\udd9a\udde6-\ude02\ude10-\ude3a\ude40-\ude48\ude50\ude51\udf00-\udf20\udf30-\udf35\udf37-\udf7c\udf80-\udf93\udfa0-\udfc4\udfc6-\udfca\udfe0-\udff0]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udddd\ude00-\ude41\ude45\udf00-\udf56]|\ud800[\udd37-\udd3f\udd79-\udd89\udd90-\udd9b\uddd0-\uddfc]|\ud83b[\udef0\udef1]"},
{name:"Sc",alias:"Currency_Symbol",bmp:"\\x24\u00a2-\u00a5\u058f\u060b\u09f2\u09f3\u09fb\u0af1\u0bf9\u0e3f\u17db\u20a0-\u20ba\ua838\ufdfc\ufe69\uff04\uffe0\uffe1\uffe5\uffe6"},{name:"Sk",alias:"Modifier_Symbol",bmp:"\\x5E`\u00a8\u00af\u00b4\u00b8\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u309b\u309c\ua700-\ua716\ua720\ua721\ua789\ua78a\ufbb2-\ufbc1\uff3e\uff40\uffe3"},{name:"Sm",alias:"Math_Symbol",
bmp:"\\x2B<->\\x7C~\u00ac\u00b1\u00d7\u00f7\u03f6\u0606-\u0608\u2044\u2052\u207a-\u207c\u208a-\u208c\u2118\u2140-\u2144\u214b\u2190-\u2194\u219a\u219b\u21a0\u21a3\u21a6\u21ae\u21ce\u21cf\u21d2\u21d4\u21f4-\u22ff\u2308-\u230b\u2320\u2321\u237c\u239b-\u23b3\u23dc-\u23e1\u25b7\u25c1\u25f8-\u25ff\u266f\u27c0-\u27c4\u27c7-\u27e5\u27f0-\u27ff\u2900-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2aff\u2b30-\u2b44\u2b47-\u2b4c\ufb29\ufe62\ufe64-\ufe66\uff0b\uff1c-\uff1e\uff5c\uff5e\uffe2\uffe9-\uffec",astral:"\ud83b[\udef0\udef1]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]"},
{name:"So",alias:"Other_Symbol",bmp:"\u00a6\u00a9\u00ae\u00b0\u0482\u060e\u060f\u06de\u06e9\u06fd\u06fe\u07f6\u09fa\u0b70\u0bf3-\u0bf8\u0bfa\u0c7f\u0d79\u0f01-\u0f03\u0f13\u0f15-\u0f17\u0f1a-\u0f1f\u0f34\u0f36\u0f38\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce\u0fcf\u0fd5-\u0fd8\u109e\u109f\u1390-\u1399\u1940\u19de-\u19ff\u1b61-\u1b6a\u1b74-\u1b7c\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211e-\u2123\u2125\u2127\u2129\u212e\u213a\u213b\u214a\u214c\u214d\u214f\u2195-\u2199\u219c-\u219f\u21a1\u21a2\u21a4\u21a5\u21a7-\u21ad\u21af-\u21cd\u21d0\u21d1\u21d3\u21d5-\u21f3\u2300-\u2307\u230c-\u231f\u2322-\u2328\u232b-\u237b\u237d-\u239a\u23b4-\u23db\u23e2-\u23f3\u2400-\u2426\u2440-\u244a\u249c-\u24e9\u2500-\u25b6\u25b8-\u25c0\u25c2-\u25f7\u2600-\u266e\u2670-\u26ff\u2701-\u2767\u2794-\u27bf\u2800-\u28ff\u2b00-\u2b2f\u2b45\u2b46\u2b50-\u2b59\u2ce5-\u2cea\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3004\u3012\u3013\u3020\u3036\u3037\u303e\u303f\u3190\u3191\u3196-\u319f\u31c0-\u31e3\u3200-\u321e\u322a-\u3247\u3250\u3260-\u327f\u328a-\u32b0\u32c0-\u32fe\u3300-\u33ff\u4dc0-\u4dff\ua490-\ua4c6\ua828-\ua82b\ua836\ua837\ua839\uaa77-\uaa79\ufdfd\uffe4\uffe8\uffed\uffee\ufffc\ufffd",
astral:"\ud83d[\udc00-\udc3e\udc40\udc42-\udcf7\udcf9-\udcfc\udd00-\udd3d\udd40-\udd43\udd50-\udd67\uddfb-\ude40\ude45-\ude4f\ude80-\udec5\udf00-\udf73]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udddd\ude00-\ude41\ude45\udf00-\udf56]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbe\udcc1-\udccf\udcd1-\udcdf\udd10-\udd2e\udd30-\udd6b\udd70-\udd9a\udde6-\ude02\ude10-\ude3a\ude40-\ude48\ude50\ude51\udf00-\udf20\udf30-\udf35\udf37-\udf7c\udf80-\udf93\udfa0-\udfc4\udfc6-\udfca\udfe0-\udff0]|\ud800[\udd37-\udd3f\udd79-\udd89\udd90-\udd9b\uddd0-\uddfc]"},
{name:"Z",alias:"Separator",bmp:" \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000"},{name:"Zl",alias:"Line_Separator",bmp:"\u2028"},{name:"Zp",alias:"Paragraph_Separator",bmp:"\u2029"},{name:"Zs",alias:"Space_Separator",bmp:" \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000"}]);if(!f.addUnicodeData)throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");f.install("extensibility");f.addUnicodeData([{name:"ASCII",bmp:"\x00-\u007f"},{name:"Alphabetic",bmp:"A-Za-z\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0345\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05b0-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0657\u0659-\u065f\u066e-\u06d3\u06d5-\u06dc\u06e1-\u06e8\u06ed-\u06ef\u06fa-\u06fc\u06ff\u0710-\u073f\u074d-\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0817\u081a-\u082c\u0840-\u0858\u08a0\u08a2-\u08ac\u08e4-\u08e9\u08f0-\u08fe\u0900-\u093b\u093d-\u094c\u094e-\u0950\u0955-\u0963\u0971-\u0977\u0979-\u097f\u0981-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd-\u09c4\u09c7\u09c8\u09cb\u09cc\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09f0\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3e-\u0a42\u0a47\u0a48\u0a4b\u0a4c\u0a51\u0a59-\u0a5c\u0a5e\u0a70-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd-\u0ac5\u0ac7-\u0ac9\u0acb\u0acc\u0ad0\u0ae0-\u0ae3\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d-\u0b44\u0b47\u0b48\u0b4b\u0b4c\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd0\u0bd7\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4c\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccc\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4c\u0d4e\u0d57\u0d60-\u0d63\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e46\u0e4d\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ecd\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f71-\u0f81\u0f88-\u0f97\u0f99-\u0fbc\u1000-\u1036\u1038\u103b-\u103f\u1050-\u1062\u1065-\u1068\u106e-\u1086\u108e\u109c\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17b3\u17b6-\u17c8\u17d7\u17dc\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191c\u1920-\u192b\u1930-\u1938\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a1b\u1a20-\u1a5e\u1a61-\u1a74\u1aa7\u1b00-\u1b33\u1b35-\u1b43\u1b45-\u1b4b\u1b80-\u1ba9\u1bac-\u1baf\u1bba-\u1be5\u1be7-\u1bf1\u1c00-\u1c35\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u24b6-\u24e9\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua674-\ua67b\ua67f-\ua697\ua69f-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua827\ua840-\ua873\ua880-\ua8c3\ua8f2-\ua8f7\ua8fb\ua90a-\ua92a\ua930-\ua952\ua960-\ua97c\ua980-\ua9b2\ua9b4-\ua9bf\ua9cf\uaa00-\uaa36\uaa40-\uaa4d\uaa60-\uaa76\uaa7a\uaa80-\uaabe\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf5\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabea\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
astral:"\ud803[\udc00-\udc48]|\ud801[\udc00-\udc9d]|\ud809[\udc00-\udc62]|\ud81a[\udc00-\ude38]|\ud804[\udc00-\udc45\udc82-\udcb8\udcd0-\udce8\udd00-\udd32\udd80-\uddbf\uddc1-\uddc4]|[\ud80c\ud840-\ud868\ud86a-\ud86c][\udc00-\udfff]|\ud86e[\udc00-\udc1d]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud80d[\udc00-\udc2e]|\ud87e[\udc00-\ude1d]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude33\ude60-\ude7c\udf00-\udf35\udf40-\udf55\udf60-\udf72]|\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1e\udf30-\udf4a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud81b[\udf00-\udf44\udf50-\udf7e\udf93-\udf9f]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud82c[\udc00\udc01]|\ud808[\udc00-\udf6e]|\ud805[\ude80-\udeb5]"},
{name:"Any",isBmpLast:!0,bmp:"\x00-\uffff",astral:"[\ud800-\udbff][\udc00-\udfff]"},{name:"Assigned",inverseOf:"Cn"},{name:"Default_Ignorable_Code_Point",bmp:"\u00ad\u034f\u115f\u1160\u17b4\u17b5\u180b-\u180d\u200b-\u200f\u202a-\u202e\u2060-\u206f\u3164\ufe00-\ufe0f\ufeff\uffa0\ufff0-\ufff8",astral:"[\udb40-\udb43][\udc00-\udfff]|\ud834[\udd73-\udd7a]"},{name:"Lowercase",bmp:"a-z\u00aa\u00b5\u00ba\u00df-\u00f6\u00f8-\u00ff\u0101\u0103\u0105\u0107\u0109\u010b\u010d\u010f\u0111\u0113\u0115\u0117\u0119\u011b\u011d\u011f\u0121\u0123\u0125\u0127\u0129\u012b\u012d\u012f\u0131\u0133\u0135\u0137\u0138\u013a\u013c\u013e\u0140\u0142\u0144\u0146\u0148\u0149\u014b\u014d\u014f\u0151\u0153\u0155\u0157\u0159\u015b\u015d\u015f\u0161\u0163\u0165\u0167\u0169\u016b\u016d\u016f\u0171\u0173\u0175\u0177\u017a\u017c\u017e-\u0180\u0183\u0185\u0188\u018c\u018d\u0192\u0195\u0199-\u019b\u019e\u01a1\u01a3\u01a5\u01a8\u01aa\u01ab\u01ad\u01b0\u01b4\u01b6\u01b9\u01ba\u01bd-\u01bf\u01c6\u01c9\u01cc\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u01dd\u01df\u01e1\u01e3\u01e5\u01e7\u01e9\u01eb\u01ed\u01ef\u01f0\u01f3\u01f5\u01f9\u01fb\u01fd\u01ff\u0201\u0203\u0205\u0207\u0209\u020b\u020d\u020f\u0211\u0213\u0215\u0217\u0219\u021b\u021d\u021f\u0221\u0223\u0225\u0227\u0229\u022b\u022d\u022f\u0231\u0233-\u0239\u023c\u023f\u0240\u0242\u0247\u0249\u024b\u024d\u024f-\u0293\u0295-\u02b8\u02c0\u02c1\u02e0-\u02e4\u0345\u0371\u0373\u0377\u037a-\u037d\u0390\u03ac-\u03ce\u03d0\u03d1\u03d5-\u03d7\u03d9\u03db\u03dd\u03df\u03e1\u03e3\u03e5\u03e7\u03e9\u03eb\u03ed\u03ef-\u03f3\u03f5\u03f8\u03fb\u03fc\u0430-\u045f\u0461\u0463\u0465\u0467\u0469\u046b\u046d\u046f\u0471\u0473\u0475\u0477\u0479\u047b\u047d\u047f\u0481\u048b\u048d\u048f\u0491\u0493\u0495\u0497\u0499\u049b\u049d\u049f\u04a1\u04a3\u04a5\u04a7\u04a9\u04ab\u04ad\u04af\u04b1\u04b3\u04b5\u04b7\u04b9\u04bb\u04bd\u04bf\u04c2\u04c4\u04c6\u04c8\u04ca\u04cc\u04ce\u04cf\u04d1\u04d3\u04d5\u04d7\u04d9\u04db\u04dd\u04df\u04e1\u04e3\u04e5\u04e7\u04e9\u04eb\u04ed\u04ef\u04f1\u04f3\u04f5\u04f7\u04f9\u04fb\u04fd\u04ff\u0501\u0503\u0505\u0507\u0509\u050b\u050d\u050f\u0511\u0513\u0515\u0517\u0519\u051b\u051d\u051f\u0521\u0523\u0525\u0527\u0561-\u0587\u1d00-\u1dbf\u1e01\u1e03\u1e05\u1e07\u1e09\u1e0b\u1e0d\u1e0f\u1e11\u1e13\u1e15\u1e17\u1e19\u1e1b\u1e1d\u1e1f\u1e21\u1e23\u1e25\u1e27\u1e29\u1e2b\u1e2d\u1e2f\u1e31\u1e33\u1e35\u1e37\u1e39\u1e3b\u1e3d\u1e3f\u1e41\u1e43\u1e45\u1e47\u1e49\u1e4b\u1e4d\u1e4f\u1e51\u1e53\u1e55\u1e57\u1e59\u1e5b\u1e5d\u1e5f\u1e61\u1e63\u1e65\u1e67\u1e69\u1e6b\u1e6d\u1e6f\u1e71\u1e73\u1e75\u1e77\u1e79\u1e7b\u1e7d\u1e7f\u1e81\u1e83\u1e85\u1e87\u1e89\u1e8b\u1e8d\u1e8f\u1e91\u1e93\u1e95-\u1e9d\u1e9f\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ebf\u1ec1\u1ec3\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eed\u1eef\u1ef1\u1ef3\u1ef5\u1ef7\u1ef9\u1efb\u1efd\u1eff-\u1f07\u1f10-\u1f15\u1f20-\u1f27\u1f30-\u1f37\u1f40-\u1f45\u1f50-\u1f57\u1f60-\u1f67\u1f70-\u1f7d\u1f80-\u1f87\u1f90-\u1f97\u1fa0-\u1fa7\u1fb0-\u1fb4\u1fb6\u1fb7\u1fbe\u1fc2-\u1fc4\u1fc6\u1fc7\u1fd0-\u1fd3\u1fd6\u1fd7\u1fe0-\u1fe7\u1ff2-\u1ff4\u1ff6\u1ff7\u2071\u207f\u2090-\u209c\u210a\u210e\u210f\u2113\u212f\u2134\u2139\u213c\u213d\u2146-\u2149\u214e\u2170-\u217f\u2184\u24d0-\u24e9\u2c30-\u2c5e\u2c61\u2c65\u2c66\u2c68\u2c6a\u2c6c\u2c71\u2c73\u2c74\u2c76-\u2c7d\u2c81\u2c83\u2c85\u2c87\u2c89\u2c8b\u2c8d\u2c8f\u2c91\u2c93\u2c95\u2c97\u2c99\u2c9b\u2c9d\u2c9f\u2ca1\u2ca3\u2ca5\u2ca7\u2ca9\u2cab\u2cad\u2caf\u2cb1\u2cb3\u2cb5\u2cb7\u2cb9\u2cbb\u2cbd\u2cbf\u2cc1\u2cc3\u2cc5\u2cc7\u2cc9\u2ccb\u2ccd\u2ccf\u2cd1\u2cd3\u2cd5\u2cd7\u2cd9\u2cdb\u2cdd\u2cdf\u2ce1\u2ce3\u2ce4\u2cec\u2cee\u2cf3\u2d00-\u2d25\u2d27\u2d2d\ua641\ua643\ua645\ua647\ua649\ua64b\ua64d\ua64f\ua651\ua653\ua655\ua657\ua659\ua65b\ua65d\ua65f\ua661\ua663\ua665\ua667\ua669\ua66b\ua66d\ua681\ua683\ua685\ua687\ua689\ua68b\ua68d\ua68f\ua691\ua693\ua695\ua697\ua723\ua725\ua727\ua729\ua72b\ua72d\ua72f-\ua731\ua733\ua735\ua737\ua739\ua73b\ua73d\ua73f\ua741\ua743\ua745\ua747\ua749\ua74b\ua74d\ua74f\ua751\ua753\ua755\ua757\ua759\ua75b\ua75d\ua75f\ua761\ua763\ua765\ua767\ua769\ua76b\ua76d\ua76f-\ua778\ua77a\ua77c\ua77f\ua781\ua783\ua785\ua787\ua78c\ua78e\ua791\ua793\ua7a1\ua7a3\ua7a5\ua7a7\ua7a9\ua7f8-\ua7fa\ufb00-\ufb06\ufb13-\ufb17\uff41-\uff5a",
astral:"\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud801[\udc28-\udc4f]"},{name:"Noncharacter_Code_Point",bmp:"\ufdd0-\ufdef\ufffe\uffff",astral:"[\udb3f\udb7f\udbbf\udbff\ud83f\ud87f\ud8bf\udaff\ud97f\ud9bf\ud9ff\uda3f\ud8ff\udabf\uda7f\ud93f][\udffe\udfff]"},
{name:"Uppercase",bmp:"A-Z\u00c0-\u00d6\u00d8-\u00de\u0100\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112\u0114\u0116\u0118\u011a\u011c\u011e\u0120\u0122\u0124\u0126\u0128\u012a\u012c\u012e\u0130\u0132\u0134\u0136\u0139\u013b\u013d\u013f\u0141\u0143\u0145\u0147\u014a\u014c\u014e\u0150\u0152\u0154\u0156\u0158\u015a\u015c\u015e\u0160\u0162\u0164\u0166\u0168\u016a\u016c\u016e\u0170\u0172\u0174\u0176\u0178\u0179\u017b\u017d\u0181\u0182\u0184\u0186\u0187\u0189-\u018b\u018e-\u0191\u0193\u0194\u0196-\u0198\u019c\u019d\u019f\u01a0\u01a2\u01a4\u01a6\u01a7\u01a9\u01ac\u01ae\u01af\u01b1-\u01b3\u01b5\u01b7\u01b8\u01bc\u01c4\u01c7\u01ca\u01cd\u01cf\u01d1\u01d3\u01d5\u01d7\u01d9\u01db\u01de\u01e0\u01e2\u01e4\u01e6\u01e8\u01ea\u01ec\u01ee\u01f1\u01f4\u01f6-\u01f8\u01fa\u01fc\u01fe\u0200\u0202\u0204\u0206\u0208\u020a\u020c\u020e\u0210\u0212\u0214\u0216\u0218\u021a\u021c\u021e\u0220\u0222\u0224\u0226\u0228\u022a\u022c\u022e\u0230\u0232\u023a\u023b\u023d\u023e\u0241\u0243-\u0246\u0248\u024a\u024c\u024e\u0370\u0372\u0376\u0386\u0388-\u038a\u038c\u038e\u038f\u0391-\u03a1\u03a3-\u03ab\u03cf\u03d2-\u03d4\u03d8\u03da\u03dc\u03de\u03e0\u03e2\u03e4\u03e6\u03e8\u03ea\u03ec\u03ee\u03f4\u03f7\u03f9\u03fa\u03fd-\u042f\u0460\u0462\u0464\u0466\u0468\u046a\u046c\u046e\u0470\u0472\u0474\u0476\u0478\u047a\u047c\u047e\u0480\u048a\u048c\u048e\u0490\u0492\u0494\u0496\u0498\u049a\u049c\u049e\u04a0\u04a2\u04a4\u04a6\u04a8\u04aa\u04ac\u04ae\u04b0\u04b2\u04b4\u04b6\u04b8\u04ba\u04bc\u04be\u04c0\u04c1\u04c3\u04c5\u04c7\u04c9\u04cb\u04cd\u04d0\u04d2\u04d4\u04d6\u04d8\u04da\u04dc\u04de\u04e0\u04e2\u04e4\u04e6\u04e8\u04ea\u04ec\u04ee\u04f0\u04f2\u04f4\u04f6\u04f8\u04fa\u04fc\u04fe\u0500\u0502\u0504\u0506\u0508\u050a\u050c\u050e\u0510\u0512\u0514\u0516\u0518\u051a\u051c\u051e\u0520\u0522\u0524\u0526\u0531-\u0556\u10a0-\u10c5\u10c7\u10cd\u1e00\u1e02\u1e04\u1e06\u1e08\u1e0a\u1e0c\u1e0e\u1e10\u1e12\u1e14\u1e16\u1e18\u1e1a\u1e1c\u1e1e\u1e20\u1e22\u1e24\u1e26\u1e28\u1e2a\u1e2c\u1e2e\u1e30\u1e32\u1e34\u1e36\u1e38\u1e3a\u1e3c\u1e3e\u1e40\u1e42\u1e44\u1e46\u1e48\u1e4a\u1e4c\u1e4e\u1e50\u1e52\u1e54\u1e56\u1e58\u1e5a\u1e5c\u1e5e\u1e60\u1e62\u1e64\u1e66\u1e68\u1e6a\u1e6c\u1e6e\u1e70\u1e72\u1e74\u1e76\u1e78\u1e7a\u1e7c\u1e7e\u1e80\u1e82\u1e84\u1e86\u1e88\u1e8a\u1e8c\u1e8e\u1e90\u1e92\u1e94\u1e9e\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ebe\u1ec0\u1ec2\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1eec\u1eee\u1ef0\u1ef2\u1ef4\u1ef6\u1ef8\u1efa\u1efc\u1efe\u1f08-\u1f0f\u1f18-\u1f1d\u1f28-\u1f2f\u1f38-\u1f3f\u1f48-\u1f4d\u1f59\u1f5b\u1f5d\u1f5f\u1f68-\u1f6f\u1fb8-\u1fbb\u1fc8-\u1fcb\u1fd8-\u1fdb\u1fe8-\u1fec\u1ff8-\u1ffb\u2102\u2107\u210b-\u210d\u2110-\u2112\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u2130-\u2133\u213e\u213f\u2145\u2160-\u216f\u2183\u24b6-\u24cf\u2c00-\u2c2e\u2c60\u2c62-\u2c64\u2c67\u2c69\u2c6b\u2c6d-\u2c70\u2c72\u2c75\u2c7e-\u2c80\u2c82\u2c84\u2c86\u2c88\u2c8a\u2c8c\u2c8e\u2c90\u2c92\u2c94\u2c96\u2c98\u2c9a\u2c9c\u2c9e\u2ca0\u2ca2\u2ca4\u2ca6\u2ca8\u2caa\u2cac\u2cae\u2cb0\u2cb2\u2cb4\u2cb6\u2cb8\u2cba\u2cbc\u2cbe\u2cc0\u2cc2\u2cc4\u2cc6\u2cc8\u2cca\u2ccc\u2cce\u2cd0\u2cd2\u2cd4\u2cd6\u2cd8\u2cda\u2cdc\u2cde\u2ce0\u2ce2\u2ceb\u2ced\u2cf2\ua640\ua642\ua644\ua646\ua648\ua64a\ua64c\ua64e\ua650\ua652\ua654\ua656\ua658\ua65a\ua65c\ua65e\ua660\ua662\ua664\ua666\ua668\ua66a\ua66c\ua680\ua682\ua684\ua686\ua688\ua68a\ua68c\ua68e\ua690\ua692\ua694\ua696\ua722\ua724\ua726\ua728\ua72a\ua72c\ua72e\ua732\ua734\ua736\ua738\ua73a\ua73c\ua73e\ua740\ua742\ua744\ua746\ua748\ua74a\ua74c\ua74e\ua750\ua752\ua754\ua756\ua758\ua75a\ua75c\ua75e\ua760\ua762\ua764\ua766\ua768\ua76a\ua76c\ua76e\ua779\ua77b\ua77d\ua77e\ua780\ua782\ua784\ua786\ua78b\ua78d\ua790\ua792\ua7a0\ua7a2\ua7a4\ua7a6\ua7a8\ua7aa\uff21-\uff3a",
astral:"\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud801[\udc00-\udc27]"},{name:"White_Space",bmp:"\t-\r \u0085\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000"}]);
if(!f.addUnicodeData)throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");f.install("extensibility");f.addUnicodeData([{name:"Arabic",bmp:"\u0600-\u0604\u0606-\u060b\u060d-\u061a\u061e\u0620-\u063f\u0641-\u064a\u0656-\u065f\u066a-\u066f\u0671-\u06dc\u06de-\u06ff\u0750-\u077f\u08a0\u08a2-\u08ac\u08e4-\u08fe\ufb50-\ufbc1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfc\ufe70-\ufe74\ufe76-\ufefc",astral:"\ud803[\ude60-\ude7e]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb\udef0\udef1]"},
{name:"Armenian",bmp:"\u0531-\u0556\u0559-\u055f\u0561-\u0587\u058a\u058f\ufb13-\ufb17"},{name:"Avestan",astral:"\ud802[\udf00-\udf35\udf39-\udf3f]"},{name:"Balinese",bmp:"\u1b00-\u1b4b\u1b50-\u1b7c"},{name:"Bamum",bmp:"\ua6a0-\ua6f7",astral:"\ud81a[\udc00-\ude38]"},{name:"Batak",bmp:"\u1bc0-\u1bf3\u1bfc-\u1bff"},{name:"Bengali",bmp:"\u0981-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09e6-\u09fb"},
{name:"Bopomofo",bmp:"\u02ea\u02eb\u3105-\u312d\u31a0-\u31ba"},{name:"Brahmi",astral:"\ud804[\udc00-\udc4d\udc52-\udc6f]"},{name:"Braille",bmp:"\u2800-\u28ff"},{name:"Buginese",bmp:"\u1a00-\u1a1b\u1a1e\u1a1f"},{name:"Buhid",bmp:"\u1740-\u1753"},{name:"Canadian_Aboriginal",bmp:"\u1400-\u167f\u18b0-\u18f5"},{name:"Carian",astral:"\ud800[\udea0-\uded0]"},{name:"Chakma",astral:"\ud804[\udd00-\udd34\udd36-\udd43]"},{name:"Cham",bmp:"\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa5c-\uaa5f"},{name:"Cherokee",
bmp:"\u13a0-\u13f4"},{name:"Common",bmp:"\x00-@\\x5B-`\\x7B-\u00a9\u00ab-\u00b9\u00bb-\u00bf\u00d7\u00f7\u02b9-\u02df\u02e5-\u02e9\u02ec-\u02ff\u0374\u037e\u0385\u0387\u0589\u060c\u061b\u061f\u0640\u0660-\u0669\u06dd\u0964\u0965\u0e3f\u0fd5-\u0fd8\u10fb\u16eb-\u16ed\u1735\u1736\u1802\u1803\u1805\u1cd3\u1ce1\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u2000-\u200b\u200e-\u2064\u206a-\u2070\u2074-\u207e\u2080-\u208e\u20a0-\u20ba\u2100-\u2125\u2127-\u2129\u212c-\u2131\u2133-\u214d\u214f-\u215f\u2189\u2190-\u23f3\u2400-\u2426\u2440-\u244a\u2460-\u26ff\u2701-\u27ff\u2900-\u2b4c\u2b50-\u2b59\u2e00-\u2e3b\u2ff0-\u2ffb\u3000-\u3004\u3006\u3008-\u3020\u3030-\u3037\u303c-\u303f\u309b\u309c\u30a0\u30fb\u30fc\u3190-\u319f\u31c0-\u31e3\u3220-\u325f\u327f-\u32cf\u3358-\u33ff\u4dc0-\u4dff\ua700-\ua721\ua788-\ua78a\ua830-\ua839\ufd3e\ufd3f\ufdfd\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe66\ufe68-\ufe6b\ufeff\uff01-\uff20\uff3b-\uff40\uff5b-\uff65\uff70\uff9e\uff9f\uffe0-\uffe6\uffe8-\uffee\ufff9-\ufffd",
astral:"\ud800[\udd00-\udd02\udd07-\udd33\udd37-\udd3f\udd90-\udd9b\uddd0-\uddfc]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbe\udcc1-\udccf\udcd1-\udcdf\udd00-\udd0a\udd10-\udd2e\udd30-\udd6b\udd70-\udd9a\udde6-\uddff\ude01\ude02\ude10-\ude3a\ude40-\ude48\ude50\ude51\udf00-\udf20\udf30-\udf35\udf37-\udf7c\udf80-\udf93\udfa0-\udfc4\udfc6-\udfca\udfe0-\udff0]|\udb40[\udc01\udc20-\udc7f]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udfcb\udfce-\udfff]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd66\udd6a-\udd7a\udd83\udd84\udd8c-\udda9\uddae-\udddd\udf00-\udf56\udf60-\udf71]|\ud83d[\udc00-\udc3e\udc40\udc42-\udcf7\udcf9-\udcfc\udd00-\udd3d\udd40-\udd43\udd50-\udd67\uddfb-\ude40\ude45-\ude4f\ude80-\udec5\udf00-\udf73]"},
{name:"Coptic",bmp:"\u03e2-\u03ef\u2c80-\u2cf3\u2cf9-\u2cff"},{name:"Cuneiform",astral:"\ud809[\udc00-\udc62\udc70-\udc73]|\ud808[\udc00-\udf6e]"},{name:"Cypriot",astral:"\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f]"},{name:"Cyrillic",bmp:"\u0400-\u0484\u0487-\u0527\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua697\ua69f"},{name:"Deseret",astral:"\ud801[\udc00-\udc4f]"},{name:"Devanagari",bmp:"\u0900-\u0950\u0953-\u0963\u0966-\u0977\u0979-\u097f\ua8e0-\ua8fb"},{name:"Egyptian_Hieroglyphs",
astral:"\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]"},{name:"Ethiopic",bmp:"\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u137c\u1380-\u1399\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e"},{name:"Georgian",bmp:"\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u10ff\u2d00-\u2d25\u2d27\u2d2d"},
{name:"Glagolitic",bmp:"\u2c00-\u2c2e\u2c30-\u2c5e"},{name:"Gothic",astral:"\ud800[\udf30-\udf4a]"},{name:"Greek",bmp:"\u0370-\u0373\u0375-\u0377\u037a-\u037d\u0384\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03e1\u03f0-\u03ff\u1d26-\u1d2a\u1d5d-\u1d61\u1d66-\u1d6a\u1dbf\u1f00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fc4\u1fc6-\u1fd3\u1fd6-\u1fdb\u1fdd-\u1fef\u1ff2-\u1ff4\u1ff6-\u1ffe\u2126",astral:"\ud834[\ude00-\ude45]|\ud800[\udd40-\udd8a]"},
{name:"Gujarati",bmp:"\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0af1"},{name:"Gurmukhi",bmp:"\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75"},{name:"Han",bmp:"\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u3005\u3007\u3021-\u3029\u3038-\u303b\u3400-\u4db5\u4e00-\u9fcc\uf900-\ufa6d\ufa70-\ufad9",
astral:"[\ud840-\ud868\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud87e[\udc00-\ude1d]"},{name:"Hangul",bmp:"\u1100-\u11ff\u302e\u302f\u3131-\u318e\u3200-\u321e\u3260-\u327e\ua960-\ua97c\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uffa0-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc"},{name:"Hanunoo",bmp:"\u1720-\u1734"},{name:"Hebrew",bmp:"\u0591-\u05c7\u05d0-\u05ea\u05f0-\u05f4\ufb1d-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufb4f"},
{name:"Hiragana",bmp:"\u3041-\u3096\u309d-\u309f",astral:"\ud82c\udc01|\ud83c\ude00"},{name:"Imperial_Aramaic",astral:"\ud802[\udc40-\udc55\udc57-\udc5f]"},{name:"Inherited",bmp:"\u0300-\u036f\u0485\u0486\u064b-\u0655\u0670\u0951\u0952\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u20d0-\u20f0\u302a-\u302d\u3099\u309a\ufe00-\ufe0f\ufe20-\ufe26",astral:"\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad]|\ud800\uddfd|\udb40[\udd00-\uddef]"},{name:"Inscriptional_Pahlavi",
astral:"\ud802[\udf60-\udf72\udf78-\udf7f]"},{name:"Inscriptional_Parthian",astral:"\ud802[\udf40-\udf55\udf58-\udf5f]"},{name:"Javanese",bmp:"\ua980-\ua9cd\ua9cf-\ua9d9\ua9de\ua9df"},{name:"Kaithi",astral:"\ud804[\udc80-\udcc1]"},{name:"Kannada",bmp:"\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1\u0cf2"},{name:"Katakana",bmp:"\u30a1-\u30fa\u30fd-\u30ff\u31f0-\u31ff\u32d0-\u32fe\u3300-\u3357\uff66-\uff6f\uff71-\uff9d",
astral:"\ud82c\udc00"},{name:"Kayah_Li",bmp:"\ua900-\ua92f"},{name:"Kharoshthi",astral:"\ud802[\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude33\ude38-\ude3a\ude3f-\ude47\ude50-\ude58]"},{name:"Khmer",bmp:"\u1780-\u17dd\u17e0-\u17e9\u17f0-\u17f9\u19e0-\u19ff"},{name:"Lao",bmp:"\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf"},{name:"Latin",bmp:"A-Za-z\u00aa\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u02e0-\u02e4\u1d00-\u1d25\u1d2c-\u1d5c\u1d62-\u1d65\u1d6b-\u1d77\u1d79-\u1dbe\u1e00-\u1eff\u2071\u207f\u2090-\u209c\u212a\u212b\u2132\u214e\u2160-\u2188\u2c60-\u2c7f\ua722-\ua787\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua7ff\ufb00-\ufb06\uff21-\uff3a\uff41-\uff5a"},
{name:"Lepcha",bmp:"\u1c00-\u1c37\u1c3b-\u1c49\u1c4d-\u1c4f"},{name:"Limbu",bmp:"\u1900-\u191c\u1920-\u192b\u1930-\u193b\u1940\u1944-\u194f"},{name:"Linear_B",astral:"\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa]"},{name:"Lisu",bmp:"\ua4d0-\ua4ff"},{name:"Lycian",astral:"\ud800[\ude80-\ude9c]"},{name:"Lydian",astral:"\ud802[\udd20-\udd39\udd3f]"},{name:"Malayalam",bmp:"\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d75\u0d79-\u0d7f"},
{name:"Mandaic",bmp:"\u0840-\u085b\u085e"},{name:"Meetei_Mayek",bmp:"\uaae0-\uaaf6\uabc0-\uabed\uabf0-\uabf9"},{name:"Meroitic_Cursive",astral:"\ud802[\udda0-\uddb7\uddbe\uddbf]"},{name:"Meroitic_Hieroglyphs",astral:"\ud802[\udd80-\udd9f]"},{name:"Miao",astral:"\ud81b[\udf00-\udf44\udf50-\udf7e\udf8f-\udf9f]"},{name:"Mongolian",bmp:"\u1800\u1801\u1804\u1806-\u180e\u1810-\u1819\u1820-\u1877\u1880-\u18aa"},{name:"Myanmar",bmp:"\u1000-\u109f\uaa60-\uaa7b"},{name:"New_Tai_Lue",bmp:"\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19da\u19de\u19df"},
{name:"Nko",bmp:"\u07c0-\u07fa"},{name:"Ogham",bmp:"\u1680-\u169c"},{name:"Ol_Chiki",bmp:"\u1c50-\u1c7f"},{name:"Old_Italic",astral:"\ud800[\udf00-\udf1e\udf20-\udf23]"},{name:"Old_Persian",astral:"\ud800[\udfa0-\udfc3\udfc8-\udfd5]"},{name:"Old_South_Arabian",astral:"\ud802[\ude60-\ude7f]"},{name:"Old_Turkic",astral:"\ud803[\udc00-\udc48]"},{name:"Oriya",bmp:"\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b66-\u0b77"},
{name:"Osmanya",astral:"\ud801[\udc80-\udc9d\udca0-\udca9]"},{name:"Phags_Pa",bmp:"\ua840-\ua877"},{name:"Phoenician",astral:"\ud802[\udd00-\udd1b\udd1f]"},{name:"Rejang",bmp:"\ua930-\ua953\ua95f"},{name:"Runic",bmp:"\u16a0-\u16ea\u16ee-\u16f0"},{name:"Samaritan",bmp:"\u0800-\u082d\u0830-\u083e"},{name:"Saurashtra",bmp:"\ua880-\ua8c4\ua8ce-\ua8d9"},{name:"Sharada",astral:"\ud804[\udd80-\uddc8\uddd0-\uddd9]"},{name:"Shavian",astral:"\ud801[\udc50-\udc7f]"},{name:"Sinhala",bmp:"\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df4"},
{name:"Sora_Sompeng",astral:"\ud804[\udcd0-\udce8\udcf0-\udcf9]"},{name:"Sundanese",bmp:"\u1b80-\u1bbf\u1cc0-\u1cc7"},{name:"Syloti_Nagri",bmp:"\ua800-\ua82b"},{name:"Syriac",bmp:"\u0700-\u070d\u070f-\u074a\u074d-\u074f"},{name:"Tagalog",bmp:"\u1700-\u170c\u170e-\u1714"},{name:"Tagbanwa",bmp:"\u1760-\u176c\u176e-\u1770\u1772\u1773"},{name:"Tai_Le",bmp:"\u1950-\u196d\u1970-\u1974"},{name:"Tai_Tham",bmp:"\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa0-\u1aad"},{name:"Tai_Viet",bmp:"\uaa80-\uaac2\uaadb-\uaadf"},
{name:"Takri",astral:"\ud805[\ude80-\udeb7\udec0-\udec9]"},{name:"Tamil",bmp:"\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bfa"},{name:"Telugu",bmp:"\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c78-\u0c7f"},{name:"Thaana",bmp:"\u0780-\u07b1"},
{name:"Thai",bmp:"\u0e01-\u0e3a\u0e40-\u0e5b"},{name:"Tibetan",bmp:"\u0f00-\u0f47\u0f49-\u0f6c\u0f71-\u0f97\u0f99-\u0fbc\u0fbe-\u0fcc\u0fce-\u0fd4\u0fd9\u0fda"},{name:"Tifinagh",bmp:"\u2d30-\u2d67\u2d6f\u2d70\u2d7f"},{name:"Ugaritic",astral:"\ud800[\udf80-\udf9d\udf9f]"},{name:"Vai",bmp:"\ua500-\ua62b"},{name:"Yi",bmp:"\ua000-\ua48c\ua490-\ua4c6"}]);return f});

var swfobject=function(){var UNDEF="undefined",OBJECT="object",SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash",EXPRESS_INSTALL_ID="SWFObjectExprInst",ON_READY_STATE_CHANGE="onreadystatechange",win=window,doc=document,nav=navigator,plugin=false,domLoadFnArr=[main],regObjArr=[],objIdArr=[],listenersArr=[],storedAltContent,storedAltContentId,storedCallbackFn,storedCallbackObj,isDomLoaded=false,isExpressInstallActive=
false,dynamicStylesheet,dynamicStylesheetMedia,autoHideShow=true,ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF,u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=!+"\v1",playerVersion=[0,0,0],d=null;if(typeof nav.plugins!=UNDEF&&typeof nav.plugins[SHOCKWAVE_FLASH]==
OBJECT){d=nav.plugins[SHOCKWAVE_FLASH].description;if(d&&!(typeof nav.mimeTypes!=UNDEF&&nav.mimeTypes[FLASH_MIME_TYPE]&&!nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)){plugin=true;ie=false;d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);playerVersion[2]=/[a-zA-Z]/.test(d)?parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else if(typeof win.ActiveXObject!=UNDEF)try{var a=new ActiveXObject(SHOCKWAVE_FLASH_AX);
if(a){d=a.GetVariable("$version");if(d){ie=true;d=d.split(" ")[1].split(",");playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)]}}}catch(e){}return{w3:w3cdom,pv:playerVersion,wk:webkit,ie:ie,win:windows,mac:mac}}(),onDomLoad=function(){if(!ua.w3)return;if(typeof doc.readyState!=UNDEF&&doc.readyState=="complete"||typeof doc.readyState==UNDEF&&(doc.getElementsByTagName("body")[0]||doc.body))callDomLoadFunctions();if(!isDomLoaded){if(typeof doc.addEventListener!=UNDEF)doc.addEventListener("DOMContentLoaded",
callDomLoadFunctions,false);if(ua.ie&&ua.win){doc.attachEvent(ON_READY_STATE_CHANGE,function(){if(doc.readyState=="complete"){doc.detachEvent(ON_READY_STATE_CHANGE,arguments.callee);callDomLoadFunctions()}});if(win==top)(function(){if(isDomLoaded)return;try{doc.documentElement.doScroll("left")}catch(e){setTimeout(arguments.callee,0);return}callDomLoadFunctions()})()}if(ua.wk)(function(){if(isDomLoaded)return;if(!/loaded|complete/.test(doc.readyState)){setTimeout(arguments.callee,0);return}callDomLoadFunctions()})();
addLoadEvent(callDomLoadFunctions)}}();function callDomLoadFunctions(){if(isDomLoaded)return;try{var t=doc.getElementsByTagName("body")[0].appendChild(createElement("span"));t.parentNode.removeChild(t)}catch(e){return}isDomLoaded=true;var dl=domLoadFnArr.length;for(var i=0;i<dl;i++)domLoadFnArr[i]()}function addDomLoadEvent(fn){if(isDomLoaded)fn();else domLoadFnArr[domLoadFnArr.length]=fn}function addLoadEvent(fn){if(typeof win.addEventListener!=UNDEF)win.addEventListener("load",fn,false);else if(typeof doc.addEventListener!=
UNDEF)doc.addEventListener("load",fn,false);else if(typeof win.attachEvent!=UNDEF)addListener(win,"onload",fn);else if(typeof win.onload=="function"){var fnOld=win.onload;win.onload=function(){fnOld();fn()}}else win.onload=fn}function main(){if(plugin)testPlayerVersion();else matchVersions()}function testPlayerVersion(){var b=doc.getElementsByTagName("body")[0];var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);var t=b.appendChild(o);if(t){var counter=0;(function(){if(typeof t.GetVariable!=
UNDEF){var d=t.GetVariable("$version");if(d){d=d.split(" ")[1].split(",");ua.pv=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)]}}else if(counter<10){counter++;setTimeout(arguments.callee,10);return}b.removeChild(o);t=null;matchVersions()})()}else matchVersions()}function matchVersions(){var rl=regObjArr.length;if(rl>0)for(var i=0;i<rl;i++){var id=regObjArr[i].id;var cb=regObjArr[i].callbackFn;var cbObj={success:false,id:id};if(ua.pv[0]>0){var obj=getElementById(id);if(obj)if(hasPlayerVersion(regObjArr[i].swfVersion)&&
!(ua.wk&&ua.wk<312)){setVisibility(id,true);if(cb){cbObj.success=true;cbObj.ref=getObjectById(id);cb(cbObj)}}else if(regObjArr[i].expressInstall&&canExpressInstall()){var att={};att.data=regObjArr[i].expressInstall;att.width=obj.getAttribute("width")||"0";att.height=obj.getAttribute("height")||"0";if(obj.getAttribute("class"))att.styleclass=obj.getAttribute("class");if(obj.getAttribute("align"))att.align=obj.getAttribute("align");var par={};var p=obj.getElementsByTagName("param");var pl=p.length;
for(var j=0;j<pl;j++)if(p[j].getAttribute("name").toLowerCase()!="movie")par[p[j].getAttribute("name")]=p[j].getAttribute("value");showExpressInstall(att,par,id,cb)}else{displayAltContent(obj);if(cb)cb(cbObj)}}else{setVisibility(id,true);if(cb){var o=getObjectById(id);if(o&&typeof o.SetVariable!=UNDEF){cbObj.success=true;cbObj.ref=o}cb(cbObj)}}}}function getObjectById(objectIdStr){var r=null;var o=getElementById(objectIdStr);if(o&&o.nodeName=="OBJECT")if(typeof o.SetVariable!=UNDEF)r=o;else{var n=
o.getElementsByTagName(OBJECT)[0];if(n)r=n}return r}function canExpressInstall(){return!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)&&!(ua.wk&&ua.wk<312)}function showExpressInstall(att,par,replaceElemIdStr,callbackFn){isExpressInstallActive=true;storedCallbackFn=callbackFn||null;storedCallbackObj={success:false,id:replaceElemIdStr};var obj=getElementById(replaceElemIdStr);if(obj){if(obj.nodeName=="OBJECT"){storedAltContent=abstractAltContent(obj);storedAltContentId=null}else{storedAltContent=
obj;storedAltContentId=replaceElemIdStr}att.id=EXPRESS_INSTALL_ID;if(typeof att.width==UNDEF||!/%$/.test(att.width)&&parseInt(att.width,10)<310)att.width="310";if(typeof att.height==UNDEF||!/%$/.test(att.height)&&parseInt(att.height,10)<137)att.height="137";doc.title=doc.title.slice(0,47)+" - Flash Player Installation";var pt=ua.ie&&ua.win?"ActiveX":"PlugIn",fv="MMredirectURL="+win.location.toString().replace(/&/g,"%26")+"&MMplayerType="+pt+"&MMdoctitle="+doc.title;if(typeof par.flashvars!=UNDEF)par.flashvars+=
"&"+fv;else par.flashvars=fv;if(ua.ie&&ua.win&&obj.readyState!=4){var newObj=createElement("div");replaceElemIdStr+="SWFObjectNew";newObj.setAttribute("id",replaceElemIdStr);obj.parentNode.insertBefore(newObj,obj);obj.style.display="none";(function(){if(obj.readyState==4)obj.parentNode.removeChild(obj);else setTimeout(arguments.callee,10)})()}createSWF(att,par,replaceElemIdStr)}}function displayAltContent(obj){if(ua.ie&&ua.win&&obj.readyState!=4){var el=createElement("div");obj.parentNode.insertBefore(el,
obj);el.parentNode.replaceChild(abstractAltContent(obj),el);obj.style.display="none";(function(){if(obj.readyState==4)obj.parentNode.removeChild(obj);else setTimeout(arguments.callee,10)})()}else obj.parentNode.replaceChild(abstractAltContent(obj),obj)}function abstractAltContent(obj){var ac=createElement("div");if(ua.win&&ua.ie)ac.innerHTML=obj.innerHTML;else{var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var c=nestedObj.childNodes;if(c){var cl=c.length;for(var i=0;i<cl;i++)if(!(c[i].nodeType==
1&&c[i].nodeName=="PARAM")&&!(c[i].nodeType==8))ac.appendChild(c[i].cloneNode(true))}}}return ac}function createSWF(attObj,parObj,id){var r,el=getElementById(id);if(ua.wk&&ua.wk<312)return r;if(el){if(typeof attObj.id==UNDEF)attObj.id=id;if(ua.ie&&ua.win){var att="";for(var i in attObj)if(attObj[i]!=Object.prototype[i])if(i.toLowerCase()=="data")parObj.movie=attObj[i];else if(i.toLowerCase()=="styleclass")att+=' class="'+attObj[i]+'"';else if(i.toLowerCase()!="classid")att+=" "+i+'="'+attObj[i]+'"';
var par="";for(var j in parObj)if(parObj[j]!=Object.prototype[j])par+='<param name="'+j+'" value="'+parObj[j]+'" />';el.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+att+">"+par+"</object>";objIdArr[objIdArr.length]=attObj.id;r=getElementById(attObj.id)}else{var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);for(var m in attObj)if(attObj[m]!=Object.prototype[m])if(m.toLowerCase()=="styleclass")o.setAttribute("class",attObj[m]);else if(m.toLowerCase()!="classid")o.setAttribute(m,
attObj[m]);for(var n in parObj)if(parObj[n]!=Object.prototype[n]&&n.toLowerCase()!="movie")createObjParam(o,n,parObj[n]);el.parentNode.replaceChild(o,el);r=o}}return r}function createObjParam(el,pName,pValue){var p=createElement("param");p.setAttribute("name",pName);p.setAttribute("value",pValue);el.appendChild(p)}function removeSWF(id){var obj=getElementById(id);if(obj&&obj.nodeName=="OBJECT")if(ua.ie&&ua.win){obj.style.display="none";(function(){if(obj.readyState==4)removeObjectInIE(id);else setTimeout(arguments.callee,
10)})()}else obj.parentNode.removeChild(obj)}function removeObjectInIE(id){var obj=getElementById(id);if(obj){for(var i in obj)if(typeof obj[i]=="function")obj[i]=null;obj.parentNode.removeChild(obj)}}function getElementById(id){var el=null;try{el=doc.getElementById(id)}catch(e){}return el}function createElement(el){return doc.createElement(el)}function addListener(target,eventType,fn){target.attachEvent(eventType,fn);listenersArr[listenersArr.length]=[target,eventType,fn]}function hasPlayerVersion(rv){var pv=
ua.pv,v=rv.split(".");v[0]=parseInt(v[0],10);v[1]=parseInt(v[1],10)||0;v[2]=parseInt(v[2],10)||0;return pv[0]>v[0]||pv[0]==v[0]&&pv[1]>v[1]||pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]?true:false}function createCSS(sel,decl,media,newStyle){if(ua.ie&&ua.mac)return;var h=doc.getElementsByTagName("head")[0];if(!h)return;var m=media&&typeof media=="string"?media:"screen";if(newStyle){dynamicStylesheet=null;dynamicStylesheetMedia=null}if(!dynamicStylesheet||dynamicStylesheetMedia!=m){var s=createElement("style");
s.setAttribute("type","text/css");s.setAttribute("media",m);dynamicStylesheet=h.appendChild(s);if(ua.ie&&ua.win&&typeof doc.styleSheets!=UNDEF&&doc.styleSheets.length>0)dynamicStylesheet=doc.styleSheets[doc.styleSheets.length-1];dynamicStylesheetMedia=m}if(ua.ie&&ua.win){if(dynamicStylesheet&&typeof dynamicStylesheet.addRule==OBJECT)dynamicStylesheet.addRule(sel,decl)}else if(dynamicStylesheet&&typeof doc.createTextNode!=UNDEF)dynamicStylesheet.appendChild(doc.createTextNode(sel+" {"+decl+"}"))}function setVisibility(id,
isVisible){if(!autoHideShow)return;var v=isVisible?"visible":"hidden";if(isDomLoaded&&getElementById(id))getElementById(id).style.visibility=v;else createCSS("#"+id,"visibility:"+v)}function urlEncodeIfNecessary(s){var regex=/[\\\"<>\.;]/;var hasBadChars=regex.exec(s)!=null;return hasBadChars&&typeof encodeURIComponent!=UNDEF?encodeURIComponent(s):s}var cleanup=function(){if(ua.ie&&ua.win)window.attachEvent("onunload",function(){var ll=listenersArr.length;for(var i=0;i<ll;i++)listenersArr[i][0].detachEvent(listenersArr[i][1],
listenersArr[i][2]);var il=objIdArr.length;for(var j=0;j<il;j++)removeSWF(objIdArr[j]);for(var k in ua)ua[k]=null;ua=null;for(var l in swfobject)swfobject[l]=null;swfobject=null})}();return{registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr,callbackFn){if(ua.w3&&objectIdStr&&swfVersionStr){var regObj={};regObj.id=objectIdStr;regObj.swfVersion=swfVersionStr;regObj.expressInstall=xiSwfUrlStr;regObj.callbackFn=callbackFn;regObjArr[regObjArr.length]=regObj;setVisibility(objectIdStr,false)}else if(callbackFn)callbackFn({success:false,
id:objectIdStr})},getObjectById:function(objectIdStr){if(ua.w3)return getObjectById(objectIdStr)},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj,callbackFn){var callbackObj={success:false,id:replaceElemIdStr};if(ua.w3&&!(ua.wk&&ua.wk<312)&&swfUrlStr&&replaceElemIdStr&&widthStr&&heightStr&&swfVersionStr){setVisibility(replaceElemIdStr,false);addDomLoadEvent(function(){widthStr+="";heightStr+="";var att={};if(attObj&&typeof attObj===
OBJECT)for(var i in attObj)att[i]=attObj[i];att.data=swfUrlStr;att.width=widthStr;att.height=heightStr;var par={};if(parObj&&typeof parObj===OBJECT)for(var j in parObj)par[j]=parObj[j];if(flashvarsObj&&typeof flashvarsObj===OBJECT)for(var k in flashvarsObj)if(typeof par.flashvars!=UNDEF)par.flashvars+="&"+k+"="+flashvarsObj[k];else par.flashvars=k+"="+flashvarsObj[k];if(hasPlayerVersion(swfVersionStr)){var obj=createSWF(att,par,replaceElemIdStr);if(att.id==replaceElemIdStr)setVisibility(replaceElemIdStr,
true);callbackObj.success=true;callbackObj.ref=obj}else if(xiSwfUrlStr&&canExpressInstall()){att.data=xiSwfUrlStr;showExpressInstall(att,par,replaceElemIdStr,callbackFn);return}else setVisibility(replaceElemIdStr,true);if(callbackFn)callbackFn(callbackObj)})}else if(callbackFn)callbackFn(callbackObj)},switchOffAutoHideShow:function(){autoHideShow=false},ua:ua,getFlashPlayerVersion:function(){return{major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]}},hasFlashPlayerVersion:hasPlayerVersion,createSWF:function(attObj,
parObj,replaceElemIdStr){if(ua.w3)return createSWF(attObj,parObj,replaceElemIdStr);else return undefined},showExpressInstall:function(att,par,replaceElemIdStr,callbackFn){if(ua.w3&&canExpressInstall())showExpressInstall(att,par,replaceElemIdStr,callbackFn)},removeSWF:function(objElemIdStr){if(ua.w3)removeSWF(objElemIdStr)},createCSS:function(selStr,declStr,mediaStr,newStyleBoolean){if(ua.w3)createCSS(selStr,declStr,mediaStr,newStyleBoolean)},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,
getQueryParamValue:function(param){var q=doc.location.search||doc.location.hash;if(q){if(/\?/.test(q))q=q.split("?")[1];if(param==null)return urlEncodeIfNecessary(q);var pairs=q.split("&");for(var i=0;i<pairs.length;i++)if(pairs[i].substring(0,pairs[i].indexOf("="))==param)return urlEncodeIfNecessary(pairs[i].substring(pairs[i].indexOf("=")+1))}return""},expressInstallCallback:function(){if(isExpressInstallActive){var obj=getElementById(EXPRESS_INSTALL_ID);if(obj&&storedAltContent){obj.parentNode.replaceChild(storedAltContent,
obj);if(storedAltContentId){setVisibility(storedAltContentId,true);if(ua.ie&&ua.win)storedAltContent.style.display="block"}if(storedCallbackFn)storedCallbackFn(storedCallbackObj)}isExpressInstallActive=false}}}}();
//SWFObject v2.2
$jQ.swfobject=swfobject;

/**
*! preloadImage
*
*@ jQuery  $jQ(['array01','array02']).preloadImage();
*@ param  string  loader :: image url[optional]
*@ return void
*@ method:
**************************************************************
var uri = new Uri(window.location.href);
uri.protocol(); // http
uri.userInfo(); // user:pass
uri.host(); // www.test.com
uri.port(); // 81
uri.path(); // /index.html
uri.query(); // q=books
uri.anchor(); // fragment

uri.protocol('https');
uri.toString(); // https://user:pass@www.test.com:81/index.html?q=books#fragment

uri.host('mydomain.com');
uri.toString(); // https://user:pass@www.mydomain.com:81/index.html?q=books#fragment

new Uri().setPath('/index.html').setAnchor('content').setHost('www.test.com').setPort(8080).setUserInfo('username:password').setProtocol('https').setQuery('this=that&some=thing') //https://username:password@www.test.com:8080/index.html?this=that&some=thing#content

new Uri('http://www.test.com').setHost('www.yahoo.com').setProtocol('https') // https://www.yahoo.com

new Uri()
    .setPath('/archives/1979/')
    .setQuery('?page=1') // /archives/1979?page=1

new Uri('?cat=1&cat=2&cat=3').getQueryParamValue('cat') //1

new Uri('?cat=1&cat=2&cat=3').getQueryParamValues('cat') //[1, 2, 3]

new Uri('?a=b&c=d').query().params //[ ['a', 'b'], ['c', 'd']]

new Uri().addQueryParam('q', 'books') // ?q=books

new Uri('http://www.github.com')
    .addQueryParam('testing', '123')
    .addQueryParam('one', 1) // http://www.github.com/?testing=123&one=1

// insert param at index 0
new Uri('?b=2&c=3&d=4').addQueryParam('a', '1', 0) // ?a=1&b=2&c=3&d=4

new Uri('?a=1&b=2&c=3')
    .replaceQueryParam('a', 'eh') // ?a=eh&b=2&c=3

new Uri('?a=1&b=2&c=3&c=4&c=5&c=6')
    .replaceQueryParam('c', 'five', '5') // ?a=1&b=2&c=3&c=4&c=five&c=6

new Uri().replaceQueryParam('page', 2) // ?page=2

new Uri('?a=1&b=2&c=3')
    .deleteQueryParam('a') // ?b=2&c=3

new Uri('test.com?a=1&b=2&c=3&a=eh')
    .deleteQueryParam('a', 'eh') // test.com/?a=1&b=2&c=3

var baseUri = new Uri('http://localhost/');
baseUri.clone().setProtocol('https');  // https://localhost/
    baseUri; // http://localhost/

*/

//URL Query Class
var Query=function(a){"use strict";var b=function(a){var b=[],c,d,e,f;if(typeof a=="undefined"||a===null||a==="")return b;a.indexOf("?")===0&&(a=a.substring(1)),d=a.toString().split(/[&;]/);for(c=0;c<d.length;c++)e=d[c],f=e.split("="),b.push([f[0],f[1]]);return b},c=b(a),d=function(){var a="",b,d;for(b=0;b<c.length;b++)d=c[b],a.length>0&&(a+="&"),a+=d.join("=");return a.length>0?"?"+a:a},e=function(a){a=decodeURIComponent(a),a=a.replace("+"," ");return a},f=function(a){var b,d;for(d=0;d<c.length;d++){b=c[d];if(e(a)===e(b[0]))return b[1]}},g=function(a){var b=[],d,f;for(d=0;d<c.length;d++)f=c[d],e(a)===e(f[0])&&b.push(f[1]);return b},h=function(a,b){var d=[],f,g,h,i;for(f=0;f<c.length;f++)g=c[f],h=e(g[0])===e(a),i=e(g[1])===e(b),(arguments.length===1&&!h||arguments.length===2&&!h&&!i)&&d.push(g);c=d;return this},i=function(a,b,d){arguments.length===3&&d!==-1?(d=Math.min(d,c.length),c.splice(d,0,[a,b])):arguments.length>0&&c.push([a,b]);return this},j=function(a,b,d){var f=-1,g,j;if(arguments.length===3){for(g=0;g<c.length;g++){j=c[g];if(e(j[0])===e(a)&&decodeURIComponent(j[1])===e(d)){f=g;break}}h(a,d).addParam(a,b,f)}else{for(g=0;g<c.length;g++){j=c[g];if(e(j[0])===e(a)){f=g;break}}h(a),i(a,b,f)}return this};return{getParamValue:f,getParamValues:g,deleteParam:h,addParam:i,replaceParam:j,toString:d}},Uri=function(a){"use strict";var b=!1,c=function(a){var c={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},d=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],e={name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},f=c[b?"strict":"loose"].exec(a),g={},h=14;while(h--)g[d[h]]=f[h]||"";g[e.name]={},g[d[12]].replace(e.parser,function(a,b,c){b&&(g[e.name][b]=c)});return g},d=c(a||""),e=new Query(d.query),f=function(a){typeof a!="undefined"&&(d.protocol=a);return d.protocol},g=null,h=function(a){typeof a!="undefined"&&(g=a);return g===null?d.source.indexOf("//")!==-1:g},i=function(a){typeof a!="undefined"&&(d.userInfo=a);return d.userInfo},j=function(a){typeof a!="undefined"&&(d.host=a);return d.host},k=function(a){typeof a!="undefined"&&(d.port=a);return d.port},l=function(a){typeof a!="undefined"&&(d.path=a);return d.path},m=function(a){typeof a!="undefined"&&(e=new Query(a));return e},n=function(a){typeof a!="undefined"&&(d.anchor=a);return d.anchor},o=function(a){f(a);return this},p=function(a){h(a);return this},q=function(a){i(a);return this},r=function(a){j(a);return this},s=function(a){k(a);return this},t=function(a){l(a);return this},u=function(a){m(a);return this},v=function(a){n(a);return this},w=function(a){return m().getParamValue(a)},x=function(a){return m().getParamValues(a)},y=function(a,b){arguments.length===2?m().deleteParam(a,b):m().deleteParam(a);return this},z=function(a,b,c){arguments.length===3?m().addParam(a,b,c):m().addParam(a,b);return this},A=function(a,b,c){arguments.length===3?m().replaceParam(a,b,c):m().replaceParam(a,b);return this},B=function(){var a="",b=function(a){return a!==null&&a!==""};b(f())?(a+=f(),f().indexOf(":")!==f().length-1&&(a+=":"),a+="//"):h()&&b(j())&&(a+="//"),b(i())&&b(j())&&(a+=i(),i().indexOf("@")!==i().length-1&&(a+="@")),b(j())&&(a+=j(),b(k())&&(a+=":"+k())),b(l())?a+=l():b(j())&&(b(m().toString())||b(n()))&&(a+="/"),b(m().toString())&&(m().toString().indexOf("?")!==0&&(a+="?"),a+=m().toString()),b(n())&&(n().indexOf("#")!==0&&(a+="#"),a+=n());return a},C=function(){return new Uri(B())};return{protocol:f,hasAuthorityPrefix:h,userInfo:i,host:j,port:k,path:l,query:m,anchor:n,setProtocol:o,setHasAuthorityPrefix:p,setUserInfo:q,setHost:r,setPort:s,setPath:t,setQuery:u,setAnchor:v,getQueryParamValue:w,getQueryParamValues:x,deleteQueryParam:y,addQueryParam:z,replaceQueryParam:A,toString:B,clone:C}},jsUri=Uri;

/**
* Inserts CSS into the HTML <head>
* * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman

* @param  string  $css
* @return void
*/
$jQ.DynamicCSS = (function($css){
  var a=document.getElementsByTagName("head")[0],b=document.createElement("style");b.type="text/css";b.styleSheet?b.styleSheet.cssText=$css:b.appendChild(document.createTextNode($css)); return a.appendChild(b);
});


/**
* GLOBAL CHANGES
*/
//Hide Footer


_dynamicStyle = 'div#footer{ display:none; } #webservices_image_cached{height:0px;} #webservices_image_cached{height:0px !important; overflow:hidden !important; width:0px !important; margin:-5000px !important; position:absolute !important; top:-5000; !important; left:-5000; !important; z-index:-1000 !important;}';
_dynamicStyle += 'div#nav ul#nav_list li#navItem1 li.over , div#nav ul#nav_list li#navItem1 li , div#nav ul#nav_list li#navItem1 li:hover { width: 249px; }';



$jQ.DynamicCSS(_dynamicStyle);

$jQ(document).ready(function(){
  //Pro Site Footer
  $jQ('div#footer').attr('style','padding: 5px 30px 5px 20px;').html('<table width="955" height="24" cellspacing="0" cellpadding="0" border="0" bgcolor="#000000" align="center"><tbody><tr><td width="890" align="left" style="vertical-align:middle;"><div style="margin-left: 0px;padding-top:0px;color:#666;">Copyright &copy;2005-2014 Sony Electronics Inc. All Rights Reserved. <a style="color:#fff;text-decoration: none;" id="privacyPolicy" target="_blank" href="http://products.sel.sony.com/SEL/legal/privacy.html">Privacy Policy/Your California Privacy Rights</a> | <a style="color:#fff;text-decoration: none;" id="legal" onclick="window.open(\'http://store.sony.com/helpdeskcategory/helpdesk-safety-security-and-privacy-category-template_sny_helpdesk_safety_security?article=component_sny_helpdesk_safety_security_privacy_terms_conditions\',\'\',\'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=784,height=1278,left=200,top=200\');" href="javascript: void(0)"> Website Terms</a>| <a style="color:#fff;text-decoration: none;" id="legal" href="/bbsc/ssr/sitemap.do">Site Map</a></div></td><td width="86" style="vertical-align: middle;padding-right: 13px;"><a href="http://www.sony.com" target="_blank"><img width="86" height="24" border="0" src="http://pro.sony.com/bbsccms/Logos/sony-bug-dark.gif"></a></td></tr></tbody></table>').show();

  //redirect facebook link
  $('a[href^="https://www.facebook.com/SonyProUSA/app_310432762368131"]').attr('href','http://pro.sony.com/bbsccms/assets/files/micro/xdcam/latest/4084-BXDCAMChatCombinedTranscript%20PDF-USAEuro-3.pdf');

  // Tracking Pixel for your homepage
  //$('#leftHPAd').append('<img src="//sony.demdex.net/event?c_site=SonyPro" width="1" height="1" />');

  //Redirect Cat-Memory
  $('a[href$="/bbsc/ssr/cat-srmemory/"]').attr('href','/bbsc/ssr/cat-srmemory/cat-memory/');

  //Redirect Cat-ipliveprod
  $('a[href$="/bbsc/ssr/cat-ipliveprod/"]').attr('href','/bbsc/ssr/cat-ipliveprod/cat-iplive/');

  //Redirect prooutlet.sel.sony.com
  $('a[href$="prooutlet.sel.sony.com/"]').attr({'href':'http://store.sony.com/webapp/wcs/stores/servlet/CategoryDisplay?catalogId=10551&storeId=10151&langId=-1&identifier=S_Professional_Sony_Outlet&xid=m:prooutlet'});

  //Redirect Digital Paper
   $('a[href$="/bbsc/ssr/cat-digitalpaper/"]').attr('href','/bbsc/ssr/cat-digitalpaper/cat-digitalpapersub/');

   
   //Added the below code for soft launch.
   //Pass the category name that needs to be hidden, in the below line
   softLaunch("Faith");
   
   
  function softLaunch(categoryName){
	var menuEl1 = $("#subMenuProducts li:contains('" + categoryName +"')");
	var menuEl2 = $("#subMenuMicrosites li:contains('" + categoryName +"')");
	if (menuEl1.length) {
		menuEl1 = $jQ(menuEl1[0]);
		menuEl1.remove();
	} 
	else  if (menuEl2.length) {
		menuEl2 = $jQ(menuEl2[0]);
		menuEl2.remove();
	}
}
   
  // remove NAB2014 menu item
  var menuEl = $jQ('#subMenuMarkets li:contains("NAB 2014 Exhibit Areas")');
  if (menuEl.length) {
    menuEl = $jQ(menuEl[0]);
    menuEl.remove();
  }
  $jQ('.page_nav .page_nav_list li:contains(\'New & Hot Products\')').remove();

  // remove Infocomm2014 menu item
  var menuEl2 = $jQ('#subMenuMarkets li:contains("Infocomm 2014")');
  if (menuEl2.length) {
    menuEl2 = $jQ(menuEl2[0]);
    menuEl2.remove();
  }

  // Added the below code to remove duplicate sub categories
  var actual_list = [];
  var seen = {};
  $('.page_nav').each(function(){
  $(this).find('li').each(function(){
  var current = $(this).text();
	if (seen[current]==null)
        seen[current]=true;
    else
       $(this).remove();
});
});

  /**
   * PSA Conversion Tracking (Floodlight tags) for the following pages:
   *  - Have Sony Contact Me
   *  - Locate a Reseller
   **/
  var pathname = window.location.pathname;
  var rndNo = Math.random() * 10000000000000;
  var cat = '';
  if (pathname === '/bbsc/ssr/services.contact.bbsccms-services-contact-contactlanding.shtml') cat = 'haves443';
  if (pathname === '/bbsc/resellerSearchResults.do') cat = 'locat329';
  if (cat.length) $jQ('body').append('<img src="http://ad.doubleclick.net/activity;src=3343535;type=landi058;cat=' + cat + ';ord=' + rndNo + '?" width="1" height="1" alt=""/>');

   if (pathname === '/bbsc/ssr/cat-digitalpaper/cat-digitalpapersub/product-DPTS1/') 
  {
	  cat = 'Produ0';
	  if (cat.length) $jQ('body').append('<img src="https://4311738.fls.doubleclick.net/activityi;src=4311738;type=IP1460;cat=' + cat + ';ord=' + rndNo + '?" width="1" height="1" alt=""/>');
                                                    
  }

   /** Added by Garima for imiclk.com
   **/


var pathname = window.location.pathname;
var cat = stringCat(pathname);
//alert('cat name is' +cat);

if (cat.length) $jQ('body').append('<img src="https://www.imiclk.com/cgi/r.cgi?m=3&mid=MA8rj9Df&did=' + cat + '&sp=1" width="1" height="1" alt=""/>');

function stringCat(pathname){
var start = '';

if (pathname.indexOf('/bbsc/ssr/') > -1){
    start = pathname.indexOf('/bbsc/');
    cat = pathname.slice(start);
}

else if (pathname.indexOf('/bbsc/') > -1){
    start = pathname.indexOf('/bbsc/');
    cat = pathname.slice(start);
}
else if (pathname.indexOf('/bbsccms/') > -1){
    start = pathname.indexOf('/bbsccms/');
    cat = pathname.slice(start);
}

else if(pathname.indexOf('/press/') > -1)
  {
    start = pathname.indexOf('/press/');
    cat = pathname.slice(start);
  }

else if(pathname.indexOf('dealersource') > -1)  {
   start = pathname.indexOf('dealersource');
   cat = pathname.slice(start);
}
  return cat;
                            }


   /**
   * NAB 2014 implementation
   */

  if (pathname === '/bbsc/ssr/mkt-nab2014/') {
    $jQ('#content .tab_menu').append('<li id="tab_menu2"><a href="javascript:;" onclick="trackResourceTab();window.location=\'/bbsc/ssr/mkt-nab2014/mkt-nab2014new/\';">New & Hot Products</a></li>');
  } else if (pathname === '/bbsc/ssr/mkt-nab2014/mkt-nab2014new/') {
    $jQ.getScript('/bbsccms/modules/nab2014/javascript/data.js', function (data, status) {
      $jQ.getScript('/bbsccms/modules/nab2014/javascript/tmpls.js', function (data, status) {
        $jQ.getScript('/bbsccms/modules/nab2014/javascript/grid.js');
      });
    });
  } else if (pathname === '/bbsc/ssr/mkt-nab2014/mkt-nab2014new/product-NEWPROD2014/') {
    $jQ.getScript('/bbsccms/modules/nab2014/javascript/data.js', function (data, status) {
      $jQ.getScript('/bbsccms/modules/nab2014/javascript/tmpls.js', function (data, status) {
        $jQ.getScript('/bbsccms/modules/nab2014/javascript/detail.js');
      });
    });
  }

  /* End of NAB 2014 */

  /**
   * InfoComm 2014 implementation
   */

  if (pathname === '/bbsc/ssr/mkt-infocomm2014/') {
    $jQ('#content .tab_menu').html('<li id="tab_menu1-1" class="active"><a href="#" onclick="trackOverviewTab();window.location=\'/bbsc/ssr/mkt-infocomm2014/\'">Overview</a></li><li id="tab_menu2"><a href="javascript:;" onclick="trackResourceTab();window.location=\'/bbsc/ssr/mkt-infocomm2014/mkt-infocomm2014new/\';">New & Hot Products</a></li><li id="tab_menu3"><a href="#" onclick="trackOverviewTab();window.location=\'/bbsc/ssr/mkt-infocomm2014/resource.pressreleases\'">Resources</a></li>');
  } else if (pathname === '/bbsc/ssr/mkt-infocomm2014/resource.pressreleases' || pathname === '/bbsc/ssr/mkt-infocomm2014/resource') {
    $jQ('#content .tab_menu').html('<li id="tab_menu1-1"><a href="#" onclick="trackOverviewTab();window.location=\'/bbsc/ssr/mkt-infocomm2014/\'">Overview</a></li><li id="tab_menu2"><a href="javascript:;" onclick="trackResourceTab();window.location=\'/bbsc/ssr/mkt-infocomm2014/mkt-infocomm2014new/\';">New & Hot Products</a></li><li id="tab_menu3" class="active"><a href="#" onclick="trackOverviewTab();window.location=\'/bbsc/ssr/mkt-infocomm2014/resource.pressreleases\'">Resources</a></li>');
  } else if (pathname === '/bbsc/ssr/mkt-infocomm2014/mkt-infocomm2014new/') {
    $jQ.getScript('/bbsccms/modules/infocomm2014/javascript/data.js', function (data, status) {
      $jQ.getScript('/bbsccms/modules/infocomm2014/javascript/tmpls.js', function (data, status) {
        $jQ.getScript('/bbsccms/modules/infocomm2014/javascript/grid.js');
      });
    });
  } else if (pathname === '/bbsc/ssr/mkt-infocomm2014/mkt-infocomm2014new/product-NEWPROD2014/') {
    $jQ.getScript('/bbsccms/modules/infocomm2014/javascript/data.js', function (data, status) {
      $jQ.getScript('/bbsccms/modules/infocomm2014/javascript/tmpls.js', function (data, status) {
        $jQ.getScript('/bbsccms/modules/infocomm2014/javascript/detail.js');
      });
    });
  }

  /* End of InfoComm 2014 */
});



/*============================================================================================================================================
Function Name: $WS.isFlash
Objective: Detect Flash Player, Replace Content if player is unable.
============================================================================================================================================*/
$WS.isFlash = (function(id){
    var _root = this;
    _root.Installed = false;
    _root.Enabled = false;

    if (navigator.plugins && navigator.plugins.length){
        var x = navigator.plugins["Shockwave Flash"];
        _root.Installed = true;
        if(x){
            _root.Enabled = true;
        }

        if (navigator.plugins["Shockwave Flash 2.0"]){
            _root.Installed = true;
        }
    }else if (navigator.mimeTypes && navigator.mimeTypes.length){
        var x = navigator.mimeTypes['application/x-shockwave-flash'];
        _root.Installed = true;
        if (x && x.enabledPlugin){
        _root.Enabled = true;
        }
    }else{
        if (window.ActiveXObject) {
            _root.Enabled = null;
            try {
                var control = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                if(control){
                    _root.Installed = true;
                }
            }catch(e){}
        }
    }
$WS.isFlash.Installed = _root.Installed;
$WS.isFlash.Enabled = _root.Enabled;
$WS.isFlash.Element = $jQ(id);
    return this;
});

$WS.isFlash.Installed = null;
$WS.isFlash.Enabled = false;
$WS.isFlash.Element = null;
$WS.isFlash.ReplaceHTML = (function(b){
    if($WS.isFlash.Installed != true || $WS.isFlash.Enabled != true){
        $WS.isFlash.Element.html(b);
    }
});

$WS.isFlash.GetHTML = (function(u){
    if($WS.isFlash.Installed != true || $WS.isFlash.Enabled != true){
        $WS.isFlash.Element.load(u);
    }
});

$WS.isFlash.EmbedSWF = (function(swf,width,height,version){
    var id = $WS.isFlash.Element.attr('id');
    if(id == undefined){
        id = $jQ._.uniqueId('embedSWF_');
        $WS.isFlash.Element.attr('id',id);
    }
    $jQ.swfobject.embedSWF(swf,id,width,height,version);
    //swfobject.embedSWF('/Snippets/javascript/detect-flash-enabled/pmw_200_banner_v1_674x221_dev.swf','myID', "674", "221", "9.0.0");
});

$WS.isFlash.EmbedSWFContainer = (function(swf,width,height,version,style){
    var flashvars = {};
    var params = {};
    var attributes = {};
    params.scale = "noscale";
    params.wmode = "transparent";

    var id = $jQ._.uniqueId('embedSWF_');
    $WS.isFlash.Element.replaceWith('<div style="'+style+'"><div id="'+id+'"></div></div>');
    $WS.isFlash.Element = $jQ('#'+id);
    $jQ.swfobject.embedSWF(swf,id,width,height,version,"/bbsccms/lib/swfobject-2.0/expressInstall.swf", flashvars, params, attributes);
    //swfobject.embedSWF('/Snippets/javascript/detect-flash-enabled/pmw_200_banner_v1_674x221_dev.swf','myID', "674", "221", "9.0.0");
});

/*============================================================================================================================================
Test & Target Logic
============================================================================================================================================*/
$jQ.PageURI = new Uri(window.location.href);

if($jQ.PageURI.getQueryParamValue('redirect') === 'OLEDmedical'){
  window.location.href = '/bbsc/ssr/show-oledsurgicalmonitor/';
}
if($jQ.PageURI.getQueryParamValue('redirect') === 'fs700-4k-images'){
  window.location.href = '/bbsc/ssr/show-highend/resource.solutions.bbsccms-assets-show-highend-FS700.shtml';
}


function mBoxTrackEvent(event,url){
  mboxUpdate("sonypro_global_top",'clicked='+event);
  setTimeout(function(){location=url;},200);
}

function WSmboxCreate(){
/*= is exactly equal
!= is not equal
^= is starts with
$= is ends with
*= is contains*/

    var FilePath = $jQ.PageURI.path(), //get Path
    FullPath = $jQ.PageURI.toString(),
    category = FilePath.substring(0,14), //get Category
    market = FilePath.substring(0,14),
    head = document.getElementsByTagName('head')[0];

  //Hide Resource Thumbnails
  if($jQ._.str.include(FullPath,'/cat-audio/')
  || $jQ._.str.include(FullPath,'/cat-broadcastcameras/')
  || $jQ._.str.include(FullPath,'/product-')
  || $jQ._.str.include(FullPath,'mkt-nab2013')
  || $jQ._.str.include(FullPath,'show-projectors')
  || $jQ._.str.include(FullPath,'mkt-houseofworship')
  || $jQ._.str.include(FullPath,'mkt-education')
  ){
    mboxCreate('sonypro_global_top','path='+FilePath);
  }

  //Hide Resource Thumbnails
  if($jQ._.str.include(FullPath,'/cat-audio/resource.')
  || $jQ._.str.include(FullPath,'/cat-broadcastcameras/resource.')
  ){
    $jQ(document).ready(function(){
      //onclick="mboxUpdate('mbox_dynamic', 'link=clicked');"
      var href = $jQ('#tab_menu2_content.page .page_content .asset_spot a');
      href.each(function(i){
        var $t = $jQ(this), existEvt = $t.attr('onClick');
        $t.attr('onClick',"mboxUpdate('sonypro_global_top','linkclicked="+$t.attr('href')+"'); " + existEvt);
      });
    });
  }


  //All Category Pages
    if(category === '/bbsc/ssr/cat-'){
        if($jQ._.str.include(FullPath,'cat-industrialcameras')){
      $jQ(document).ready(function(){
        var modelInfo = encodeURIComponent($jQ._.str.clean($('html body div#wrapper div#container.product-detail div#content div.page div.page_content div.row div.product_desc div.product-pricing div.modelname').text()));
        $jQ('.product_desc .product-pricing div.locate_reseller_panel_context').hide().replaceWith('<div class="locate_reseller_panel_context"><a class="btn contact_me" href="/bbsc/ssr/services.contact.bbsccms-services-contact-contactlanding.shtml?model=' + modelInfo + '">Have Sony Contact You</a><div>').show();
      });

            //industrial automation & intelligent traffic :: Product Page
            if($jQ._.str.include(FullPath,'product-')){
               // mboxCreate('sonypro_global_top','path='+FilePath);
            }else{

            }
        }
        //mboxCreate('sonypro_global_top','path='+FilePath);
    }else if(market === '/bbsc/ssr/mkt-'){
        //industrial automation & intelligent traffic Logic
        if($jQ._.str.include(FullPath,'mkt-industrialautomation') || $jQ._.str.include(FullPath,'mkt-intelligenttraffic' || $jQ._.str.include(FullPath,'cat-industrialcameras'))){
      $jQ(document).ready(function(){
        var modelInfo = encodeURIComponent($jQ._.str.clean($('html body div#wrapper div#container.product-detail div#content div.page div.page_content div.row div.product_desc div.product-pricing div.modelname').text()));
        $jQ('.product_desc .product-pricing div.locate_reseller_panel_context').hide().replaceWith('<div class="locate_reseller_panel_context"><a class="btn contact_me" href="/bbsc/ssr/services.contact.bbsccms-services-contact-contactlanding.shtml?model=' + modelInfo + '">Have Sony Contact You</a><div>').show();
      });

            //industrial automation & intelligent traffic :: Product Page
            if($jQ._.str.include(FullPath,'product-')){
               // mboxCreate('sonypro_global_top','path='+FilePath);
            }else{

            }
        }
    }else if(($jQ.PageURI.path() == "/bbsc/ssr/services.contact.bbsccms-services-contact-contactlanding.shtml")){
    mboxCreate('sonypro_global_top','path='+FilePath);
    }else if(FilePath == "/bbsc/ssr/mkt-digitalcinema/"){
    mboxCreate('sonypro_global_top','path='+FilePath);
    $jQ(document).ready(function(){
    $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_content div.promo_row').attr('id','mbox_dcpromo_07172012');
    });
    }else{
        var regex = /(resellerSearchResults\.do|-resellers|formID\=)/;
        if(regex.test(FullPath)){
            mboxCreate('sonypro_global_top','path='+FilePath);
        }
    }
}

/*============================================================================================================================================
Patches
============================================================================================================================================*/
$jQ(document).ready(function(){

  $jQ.webservices_image_cached = $jQ('<div id="webservices_image_cached"></div>');
  $jQ('body').append($jQ.webservices_image_cached);
    /*==================================================================================================================================
    //For Medical: Remove Price from PVM2551MD Listings
    //Expired: July 30 2012
    //Contact: Bondulich, Anne
    */
    //Search page
    if($jQ('html body div#wrapper div#container div#content .product_spot div.title div.hd div.row div.col h3.sku').text() == "PVM2551MD"){
        $jQ('html body div#wrapper div#container div#content .product_spot div.footer div.row h4.price').html('');
    }
    //Product Detail Page
    if($jQ.PageURI.path() == "/bbsc/ssr/product-PVM2551MD/"){
        $jQ('html body div#wrapper div#container.product-detail div#content div.page div.page_content div.row div.product_desc div.product-pricing strong').html("");
    }
});


/*============================================================================================================================================
Plugins 2.0
============================================================================================================================================*/
/**
*! autoSequenceImages Plugin
*/
;(function($){
  if(typeof Object.create!=="function"){Object.create=function(obj){function F(){}F.prototype=obj;return new F()}};
  "function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(a){return this.slice(0,a.length)==a});

  //Private Methods
  var privateMethods = ({
    image : null
    ,optn : null
    ,seqTimer : null
    ,seqCurrent : null
    ,seq : []
    ,options : {
      'animatedTimer' : 7000
      ,'fadeTimer' : 7000
    },getAttr : function(ele,attr){
      if(ele.getAttribute && ele.attributes){
        var attrs = ele.attributes, len = attrs.length, data = [], output = [];
        for(var i=0; i<len; i++){
          var attrName = attrs[i].nodeName;
          if(attrName.startsWith('seq:')){
            data[attrName.slice(4)] = attrs[i].nodeValue;
          }
        }
        data.sort();
        len = data.length
        for(var i=0; i<len; i++){
          if(data[i] !== undefined){
            output.push(data[i]);
          }
        }
        return output;
      }
      return [];
    },animate : function(){
      var self = this;
      //self.$root.show();
      self.seqTimer = setInterval(function(){
        self.nextSeq();
      },self.optn.animatedTimer);
    },clearTimer : function(){
      var self = this;
      clearInterval(self.seqTimer);
      self.seqTimer = null;
    },restart : function(){
      var self = this;
      self.clearTimer();
      self.seqCurrent = 0;

      self.seqCurrent = 0;
      self.image = $('<img src="' + self.seq[self.seqCurrent] + '" />');
      self.$root.append(self.image);
      self.$root.css('background-image', 'url(' + self.seq[self.seqCurrent] + ')');

      self.seqTimer = setInterval(function(){
        self.nextSeq();
      },self.optn.animatedTimer);

    },nextSeq : function(){
      var self = this;
      self.seqCurrent++;
      self.clearTimer();

      if(self.seqCurrent >= self.seq.length){
        self.seqCurrent = 0;
      }

      self.$root.css('background-image', 'url(' + self.seq[self.seqCurrent] + ')');
      self.image.animate({
        opacity:0,
        },self.optn.fadeTimer,function() {
          self.image.attr({
            'style' : ''
            ,'src' : self.seq[self.seqCurrent]
          });
          self.seqTimer = setInterval(function(){
            self.nextSeq();
          },self.optn.animatedTimer);
      });

    }

  });

  //Static Method
  var methods = ({
    init : function(options){
      var self = Object.create(privateMethods); if(options){self.optn = $.extend({},privateMethods.options,options);}else{self.optn = privateMethods.options;} self.elements = this; self.$root = $(self.elements); //Works on All Browser
      self.seq = self.getAttr(self.$root[0],'seq');
      if(self.seq.length){
        self.seqCurrent = 0;
        self.image = $('<img src="' + self.seq[self.seqCurrent] + '" />');
        self.$root.append(self.image);
        self.$root.css('background-image', 'url(' + self.seq[self.seqCurrent] + ')');
      }
      return self;
    }
  });

  //Plugin
  $.fn.autoSequenceImages = (function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof method==="object"||!method){return methods.init.apply(this,arguments)}else{$.error("Method "+method+" does not exist")}}});
})($jQ);







/*============================================================================================================================================
Plugins 1.0
============================================================================================================================================*/
;(function($){
  $.sonyws_create_tabs_current = null;

  var methods = ({
    init : function(option){
      var optn = $.extend( {
        'navWidth' : null,
        'fadeInTimer' : 1050,
        'activeMouseEvent' : false
      },option);
      var activeButton = null;

      return this.each(function(){
        var $t = $(this),_htmlID = $jQ._.uniqueId('tabMod_'),nav, firstTab = null, defaultTab = null;

        if($jQ._.isUndefined($t.attr('id'))){
          $t.attr('id',_htmlID);
        }

        nav = $t.find('> ul.nav');
        nav.find('> li').each(function(i){

          var $tLinks = $(this), $id =  $(document.getElementById($tLinks .attr('rel')));
          $id.addClass('tab_cont');

          //Assign OnClick(li)
          (function(argTab){
            $tLinks.click(function(){
              if(activeButton !== null){
                var btn = nav.find('> li.active');
                btn.removeClass('active').find('img').attr('src',btn.attr('userOut'));
              }

              $tBtn = $(this);
              methods.hide($t);
              argTab.fadeIn(optn.fadeInTimer);
              $tBtn.addClass('active');
              if(optn.activeMouseEvent === true){
                $tBtn.attr('src',$tBtn.attr('userOver'));
              }
              activeButton = $tBtn;

            });
            if(optn.activeMouseEvent === true){
              $tLinks.mouseover(function(){
                var $me = $(this),state;
                if($me.hasClass('active')){
                  return false;
                }
                state = $me.find('img').attr('src',$me.attr('userOver'));
              }).mouseout(function(){
                var $me = $(this),state;

                if($me.hasClass('active')){
                  return false;
                }

                state = $me.find('img').attr('src',$me.attr('userOut'));
              });
            }

          })($id);

        });
        //If No default_tab set show first tab
        if(defaultTab === null && firstTab !== null){
          firstTab.addClass('active');
          $.sonyws_create_tabs_current = firstTab;
        }else if(defaultTab !== null){
          defaultTab.addClass('active');
          $.sonyws_create_tabs_current = defaultTab;
        }else{
          $.sonyws_create_tabs_current = $t.find('> div').eq(0);
          $.sonyws_create_tabs_current.addClass('active');
           $t.find('> ul.nav > li').eq(0).addClass('active');
        }


        if(optn.activeMouseEvent === true){
          var $li = nav.find('> li').eq(0);
          $li.find('img').attr('src',$li.attr('userOver'));
          activeButton = $li;
        }

      });


    },hide : function(tabRoot){
      tabRoot.find('> .tab_cont').hide().removeClass('active');
      tabRoot.find('> ul.nav li').removeClass('active');
    },update : function( content ) {

    }
  });

  $.fn.sonyws_create_tabs = (function(method){
    if(methods[method]){
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    }else if(typeof method === 'object' || ! method ){
      return methods.init.apply(this,arguments);
    }else{
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }
  });
})($jQ);


;(function($){
  $.sonyws_create_tooltipstrip_current = null;

  var methods = ({
    init : function(options){
      var optn = $.extend({
        'topImage' : '/bbsccms/global.pkg/tooltipstrip/bottomArrow-e5f4f6.png',
        'bottomImage' : '/bbsccms/global.pkg/tooltipstrip/bottomArrow-e5f4f6.png',
        'offSetTopImage' : -18,
        'offSetBottomImage' : 47
      },options);

      try{
      return this.each(function(){
        var $t = $(this),_htmlID = $jQ._.uniqueId('tabMod_'),list, firstTab = null, defaultTab = null,$topImage,$Image,$bottomImage,message,outWidth = $(this).width();

        if($jQ._.isUndefined($t.attr('id'))){
          $t.attr('id',_htmlID);
        }

        list = $t.find('ul');
        list.find('li').each(function(x){
          var $tItem = $(this), activeImg = $tItem.attr('activeSrc'), imgPosition = $tItem.attr('imgPosition'),message;

          $Image = $('<img src="'+activeImg+'"/>');
          message = $tItem.html();
          $tItem.html('');
          $topImage = $('<div class="topArrow"><img src="'+optn.topImage+'"/><div class="descript">Message</div></div>').css('top',optn.offSetTopImage);
          $bottomImage = $('<div class="bottomArrow"><img src="'+optn.bottomImage+'"/><div class="descript">Message</div></div>').css('top',optn.offSetBottomImage);
          $tItem.append($topImage,$Image,$bottomImage);

          //Assign OnClick(li)
          (function(tootip,message,index){
            var Arrow,MessageBox,BoxHeight = tootip.height();
            if($jQ._.isUndefined(imgPosition)){
              Arrow = tootip.find('.topArrow');
            }
            MessageBox = tootip.find('.descript');
            MessageBox.html(message);

            $tItem.mouseover(function(){
              var height = tootip.outerHeight();
              height = height + 30;
              Arrow.find('.descript').css({'top':Math.abs(height) * -1,'visibility':'hidden'});
              Arrow.show();
              var totalWidth = (tootip.width()*index);
              var leftOverSpace = (outWidth - totalWidth)- MessageBox.outerWidth();
              if(leftOverSpace < 0){
                leftOverSpace = leftOverSpace - 37;
                Arrow.find('.descript').css({'left':leftOverSpace});
              }
              Arrow.find('.descript').css({'visibility':'visible'});
            }).mouseout(function(){
              Arrow.hide();
            });
          })($tItem,message,x);
        });
        list.after('<br class="clear"/>');
        $t.show();
      });
      }catch(e){}
    },hide : function(tabRoot){

    },updtae : function( content ) {

    }
  });

  $.fn.sonyws_create_tooltipstrip = (function(method){
    if(methods[method]){
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    }else if(typeof method === 'object' || ! method ){
      return methods.init.apply(this,arguments);
    }else{
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }
  });
})($jQ);

;(function($){
  var methods, _defaultOptn,_imageLen, _setInterval, _userActiveImage = null, mapArray = [],imageArray = [],hrefArray = [], navArray = [], navDiv = $('<div class="nav"><ul></ul></div>'),wrapper = $('<div class="wrapper"></div>'), img01 = $('<div><img style="position:absolute; top:0px; left:0px;" src="/bbsccms/promos/files/784x230/blank_784x230.png"/></div>'), img02 = $('<img width="784" height="230" alt="" src=""  style="visibility:hidden;"/>'), rootID;
  $(['/bbsccms/global.pkg/plugin.headerCarousal/buttonset-01-off.png',
  '/bbsccms/global.pkg/plugin.headerCarousal/buttonset-01-on.png',
  '/bbsccms/global.pkg/plugin.headerCarousal/buttonset-01-over.png']).preloadImage();

  methods = ({
    init : function(options){
      var optn = $.extend({
        'slideTimer' : 5000,
        'fadeInTimer' : 250,
        'fadeOutTimer' : 600,
        'hrefTarget' : '_self',
        'images' : []
      },options);
      _defaultOptn = optn;
      var $self = $(this), navDivUl = navDiv.find('ul');
      _imageLen = optn.images.length
      rootID = $.setElementID($self);

      img01.append(img02);
      wrapper.append(img01);

      $self.append(wrapper,navDiv);
      img02.attr('style','').hide();

      img01.click(function(evt){
        $me = $(this), relIndex = $me.attr('relIndex');
        if(!$jQ._.isUndefined(hrefArray[relIndex]) && hrefArray[relIndex] != null){
          window.open(hrefArray[relIndex].toString(),_defaultOptn.hrefTarget);
        }
      });

      for(var i=0; i<_imageLen; i++){
        imageArray[i] = optn.images[i].src;
        navArray[i] = $('<li></li>');
        navDivUl.append(navArray[i]);
        $.preloadImage(imageArray[i]);

        if(optn.images[i].hasOwnProperty('href') && optn.images[i].href != null){
          hrefArray[i] = optn.images[i].href;
          img01.addClass('haslink');
          mapArray[i] = null;
        }else if(optn.images[i].hasOwnProperty('usemap') && optn.images[i].usemap != null){
          img01.attr('usemap',optn.images[i].usemap).addClass('hasMap');
          mapArray[i] = optn.images[i].usemap;
          hrefArray[i] = null;
        }else{
          mapArray[i] = null;
          hrefArray[i] = null;
        }

        (function(index){
          navArray[index].click(function(){
            var $t = $(this),curIndex = index;
            $t.addClass('active');
            methods.toggleSlideStart(curIndex);
            methods.showImage(curIndex);
          });
        })(i);

        img01.attr({'style':"background:url('"+imageArray[i]+"');  no-repeat -9999px","backgroundImg":imageArray[0]});

      }
      methods.showImage(0);
      methods.toggleSlideStart(_userActiveImage);
    },showImage : function(index){
      if(_userActiveImage === index){
        return false;
      }

      if(!$jQ._.isUndefined(hrefArray[index]) && hrefArray[index] != null){
        img01.addClass('haslink');
      }else{
        img01.removeClass('haslink');
      }

      if(!$jQ._.isUndefined(mapArray[index]) && mapArray[index] != null){
        img01.addClass('hasMap');
        img01.find('img').attr('usemap',mapArray[index]);
      }else{
        img01.removeClass('hasMap');
        img01.find('img').removeAttr('usemap');
      }

      $('#'+ rootID + ' div.nav ul li.active').removeClass('active');
      img02.attr('src',img01.attr('backgroundImg')).show();
      img01.attr({'style':"background:url('"+imageArray[index]+"')","backgroundImg":imageArray[index],'relIndex':index}).fadeIn(_defaultOptn.fadeInTimer);
      img02.fadeOut(_defaultOptn.fadeOutTimer);
      navArray[index].addClass('active');
      _userActiveImage = index;

    },toggleSlideStart : function(index){
      methods.toggleSlideEnd();
      _setInterval = setInterval(function(){
        methods.toggleSlideNextImageTimer(index);
      },_defaultOptn.slideTimer);
    },toggleSlideEnd : function(){
      clearInterval(_setInterval);
      _setInterval = null;
      delete(_setInterval);
    },toggleSlidePause : function(index){
      methods.toggleSlideStart(index);
    },toggleSlideNextImageTimer : function(index){
      index++;
      if(_userActiveImage === index){
        return false;
      }
      if(index >= _imageLen){
        index = 0;
      }
      var curImage = ($_.isUndefined(imageArray[index]) ? imageArray[0] : imageArray[index]);
      methods.showImage(index);
      methods.toggleSlideEnd();
      methods.toggleSlideStart(index);


    }
  });

  $.fn.sonyws_create_headerCarousal = (function(method){
    if(methods[method]){
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    }else if(typeof method === 'object' || ! method ){
      return methods.init.apply(this,arguments);
    }else{
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }
  });
})($jQ);

;(function($){
  var imageArray = [];
  var navArray = [];
  var methods = ({
    init : function(options){
      var optn = $.extend({
        'btnOff' : '/bbsccms/global.pkg/plugin.headerCarousal/buttonset-01-off.png',
        'images' : []
      },options);
      return this.each(function(){
        var $self = $(this), $hightlightItem = $self.find('.hightlightItem'), $hightlightContainer = $self.find('.hightlightContainer'), defaultMainImage = $hightlightContainer.find('img'), featuredImage = defaultMainImage.attr('src');

        $jQ.webservices_image_cached = $jQ('#webservices_image_cached');
        $hightlightItem.each(function(x){
          var $t = $(this);
          $jQ.webservices_image_cached.append('<img src="'+$t.attr('onRollOver')+'"/>');
        });


        $hightlightItem.click(function(){

        }).mouseover(function(){
          var $t = $(this), onRollOver = $t.attr('onRollOver');
          defaultMainImage.attr('src',onRollOver);
        }).mouseout(function(){
          defaultMainImage.attr('src',featuredImage);
        });
      });
    }
  });

  $.fn.sonyws_create_productItemHighlight = (function(method){
    if(methods[method]){
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    }else if(typeof method === 'object' || ! method ){
      return methods.init.apply(this,arguments);
    }else{
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }
  });
})($jQ);

;(function($){
  //Global Functions
  var privateMethods = ({
    http : ''
    ,elements : null
    ,$root : null
    ,$iframe : null
    ,optn : null
    ,options : {
      playerSize : 736,
      autoloadVideo : null,
      width : null,
      height : null,
      releaseURL : null,
      autoplay : false
    },setSeoChannel : function(){
      var self = this;
      self.$iframe.attr('src',self.http+'/bbsccms/app/vc/plugins/embed/socialIframe/index.html#/seo/1/channel/2');
    },setReleaseID : function(id){
      var self = this;
      self.$iframe.attr('src',self.http+'/bbsccms/app/vc/plugins/embed/socialIframe/index.html#/set/'+id);
    },setStandAloneReleaseID : function(id,options){
      var URI = new Uri('https://pro.sony.com/bbsccms/app/vc/plugins/embed/AdvanceMediaPlayer/index.html');
      var self = this;
      if(options.autoplay){
        URI.replaceQueryParam('autoplay', 'true');
      }
      URI.replaceQueryParam('width',self.optn.width);
      URI.replaceQueryParam('height',self.optn.height);

      self.$iframe = $('<iframe id="player" src="' + URI.toString() + '#/SA/'+id+'" width="'+self.optn.width+'" marginwidth="0" height="'+self.optn.height+'" marginheight="0" align="top" scrolling="No" frameborder="0"></iframe>');
      self.$root.append(self.$iframe);
    }
  });

  //static Method
  var methods = ({
    init : function(options){
      var self = Object.create(privateMethods);
      if(options){
        self.optn = $.extend({},privateMethods.options,options);
      }else{
        self.optn = privateMethods.options;
      }

      if(self.optn.playerSize  == 736){
        self.optn.width = 736;
        self.optn.height = 432;
      }else{
        self.optn.width = 736;
        self.optn.height = 432;
      }
      self.elements = this;
      self.$root = $(self.elements);
      self.$iframe = $('<iframe id="player" src="'+privateMethods.http+'/bbsccms/app/vc/plugins/embed/socialIframe/index.html'+appendURL+'" width="'+self.optn.width+'" marginwidth="0" height="'+self.optn.height+'" marginheight="0" align="top" scrolling="No" frameborder="0"></iframe>');

      return self;
    },loadStandAlone : function(options){
      var self = Object.create(privateMethods);
      if(options){
        self.optn = $.extend({},privateMethods.options,options);
      }else{
        self.optn = privateMethods.options;
      }
      if(self.optn.width  !== null && self.optn.height  !== null){
        self.optn.width = self.optn.width;
        self.optn.height = self.optn.height;
      }else if(self.optn.playerSize  == 736){
        self.optn.width = 736;
        self.optn.height = 432;
      }else if(self.optn.playerSize == null){
        self.optn.width = 736;
        self.optn.height = ((self.optn.width*9)/16);
      }else{
        self.optn.width = self.optn.playerSize;
        self.optn.height = ((self.optn.width*9)/16);
      }

      self.optn.width = parseInt(self.optn.width);
      self.optn.height = parseInt(self.optn.height);

      self.elements = this;
      self.$root = $(self.elements);
      self.setStandAloneReleaseID(self.optn.releaseURL,self.optn);
      return self;
    }
  });

  //Call Methods
  $.fn.sonyprows_create_videONIframe = (function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof method==="object"||!method){return methods.init.apply(this,arguments)}else{$.error("Method "+method+" does not exist")}}});
})($jQ);

/**
*! dcContentSlider Plugin
*/
;(function($){
  //Global Functions
  var privateMethods = ({
    http : ''
    ,idCount : 0
    ,elements : null
    ,$root : null
    ,timer : null
    ,items : null
    ,totalItems : 0
    ,userRolledOver : false
    ,currentClick : null
    ,optn : null
    ,options : {
      'onload' : true,
      'stopAtIndex' : 1,
      'reversed' : false,
      'width' : null,
      'height' : null,
      'zindexStart' : 100,
      'speed' : 180
    },loopContent : function(){
      var self = this;

      self.elements.each(function(elIndex1){
        var $t1 = $(this), _li = $t1.find('> ul > li'), allContent = _li.find('> .content');

        _li.each(function(xCount){
          privateMethods.idCount++;
          (function(li,idCount){
            var items = $(li);
            var content = items.find('.content');
            items.addClass('nowshowing_content_slider_'+idCount);
            content.hide();
            $.data(li,"realHeight",items.height());
            items.find('> h1.title').click(function(){
              var $t = $(this);
              _li.removeClass('active');
              if(content.is(':visible')){
                content.hide();
                self.currentClick = null;
                return false;
              }

              //hide all content
              allContent.hide();

              //Show Current
              content.show();

              self.currentClick = items;
              items.addClass('active');

            });

            /*self.mouseover(function(){
              content.slideDown();
              //_li.find('.content').height(0);
              setTimeout(function(){
                content.slideDown();
                /*content.show().animate({
                  height: 0
                },300);
              },150);

            });

            /*self.mouseleave(function(){
              content.slideUp();
            }); */

          })(this,privateMethods.idCount);
        });


      });
    }
  });

  //static Method
  var methods = ({
    init : function(options){
      var self = Object.create(privateMethods); if(options){self.optn = $.extend({},privateMethods.options,options);}else{self.optn = privateMethods.options;} self.elements = this; self.$root = $(self.elements); //Works on All Browser

      return self;
    },animate : function(options){
      var self = Object.create(privateMethods); if(options){self.optn = $.extend({},privateMethods.options,options);}else{self.optn = privateMethods.options;} self.elements = this; self.$root = $(self.elements); //Works on All Browser
      self.loopContent();
      return self;
    }
  });

  //Call Methods
  $.fn.dcContentSlider = (function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof method==="object"||!method){return methods.init.apply(this,arguments)}else{$.error("Method "+method+" does not exist")}}});
})($jQ);


(function($){
  $.extend({
    sonyws_socialmedia_breadcrumb_params : {}
  });
  $.fn.extend({
      sonyws_socialmedia_breadcrumb : function(opt){
      $('.' + $(this).attr('class')).each(function(i){
        var self = $(this);
        var guid = Math.random().toString(16).slice(2,10)+Math.random().toString(16).slice(2,6)+(Math.random()*.0625+.25).toString(16).slice(2,6)+(Math.random()*.25+.5).toString(16).slice(2,6)+Math.random().toString(16).slice(2, 14);
        $.sonyws_socialmedia_breadcrumb_params[guid] = {
          "css": {},
          "clone": false,
          "socialmedia": false,
          "spacer": 23,
          "href_css": {'display':'inline','margin-left': 6,'float':'right'},
          "wrapper_css": {'float':'left','margin-right':5,'width':'600px'},
          "image_css": {'border':0},
          "tpl_path": '/bbsccms/lib/jq-socialmedia-breadcrumb/icons/'
        };
        $.extend($.sonyws_socialmedia_breadcrumb_params[guid],opt);
        var params = $.sonyws_socialmedia_breadcrumb_params[guid];
        params.totalicons = 0;


        if(params.clone){
          params.breadcrumb = $('<div></div>').attr({'id':'sonypro_breadcrumb'}).css(params.wrapper_css).html($('<p></p>').attr('class','breadcrumb').html(self.html()));
          params.socialbar = $('<div></div>').attr({'id':'sonypro_breadcrumb_bar'}).css({'float':'right'});
          $(params.socialbar).insertAfter(self);
          $(params.breadcrumb).insertAfter(self);
          $('.info_bar').css({'padding-left':20,'padding-right':20,'padding-bottom':8,'padding-top':8});
          self.remove();
        }

        $.each(params.socialmedia,function(n1,k1){
          var href = $('<a></a>');
          var img = $('<img/>');
          var linkTarget = (k1.target === undefined ? '_blank' : k1.target);
          switch(n1.toLowerCase()){
            case 'facebook':
              img.css(params.image_css).attr({'src' : params.tpl_path + 'facebook_on.png','alt':k1.title});
              var imgs = '<img style="display: inline; border: 0px;" src="icons/facebook_on.png" alt="Facebook">';
              href.css(params.href_css).attr({'href':k1.url,'title':k1.title,'target':linkTarget}).html(img).mouseover(function(){
                $(this).find('img').attr('src',params.tpl_path + 'facebook_ov.png');
              }).mouseout(function(){
                $(this).find('img').attr('src',params.tpl_path + 'facebook_on.png');
              });
              params.socialbar.append(href);
            break;
            case 'twitter':
              img.css(params.image_css).attr({'src' : params.tpl_path + 'twitter_on.png','alt':k1.title});
              href.css(params.href_css).attr({'href':k1.url,'title':k1.title,'target':linkTarget}).html(img).mouseover(function(){
                $(this).find('img').attr('src',params.tpl_path + 'twitter_ov.png');
              }).mouseout(function(){
                $(this).find('img').attr('src',params.tpl_path + 'twitter_on.png');
              });
              params.socialbar.append(href);
            break;
            case 'rss':
              img.css(params.image_css).attr({'src' : params.tpl_path + 'rssfeed_on.png','alt':k1.title});
              href.css(params.href_css).attr({'href':k1.url,'title':k1.title,'target':linkTarget}).html(img).mouseover(function(){
                $(this).find('img').attr('src',params.tpl_path + 'rssfeed_ov.png');
              }).mouseout(function(){
                $(this).find('img').attr('src',params.tpl_path + 'rssfeed_on.png');
              });
              params.socialbar.append(href);
            break;
            case 'blog':
              img.css(params.image_css).attr({'src' : params.tpl_path + 'blog_on.png','alt':k1.title});
              href.css(params.href_css).attr({'href':k1.url,'title':k1.title,'target':linkTarget}).html(img).mouseover(function(){
                $(this).find('img').attr('src',params.tpl_path + 'blog_ov.png');
              }).mouseout(function(){
                $(this).find('img').attr('src',params.tpl_path + 'blog_on.png');
              });
              params.socialbar.append(href);
            break;
            case 'googleplus':
              img.css(params.image_css).attr({'src' : params.tpl_path + 'googleplus_on.jpg','alt':k1.title});
              href.css(params.href_css).attr({'href':k1.url,'title':k1.title,'target':linkTarget}).html(img).mouseover(function(){
                $(this).find('img').attr('src',params.tpl_path + 'googleplus_off.jpg');
              }).mouseout(function(){
                $(this).find('img').attr('src',params.tpl_path + 'googleplus_on.jpg');
              });
              params.socialbar.append(href);
            break;
            case 'pinterest':
              img.css(params.image_css).attr({'src' : params.tpl_path + 'pinterest_on.jpg','alt':k1.title});
              href.css(params.href_css).attr({'href':k1.url,'title':k1.title,'target':linkTarget}).html(img).mouseover(function(){
                $(this).find('img').attr('src',params.tpl_path + 'pinterest_off.jpg');
              }).mouseout(function(){
                $(this).find('img').attr('src',params.tpl_path + 'pinterest_on.jpg');
              });
              params.socialbar.append(href);
            break;
            case 'linkin':
              img.css(params.image_css).attr({'src' : params.tpl_path + 'linkedin_on.png','alt':k1.title});
              href.css(params.href_css).attr({'href':k1.url,'title':k1.title,'target':linkTarget}).html(img).mouseover(function(){
                $(this).find('img').attr('src',params.tpl_path + 'linkedin_ov.png');
              }).mouseout(function(){
                $(this).find('img').attr('src',params.tpl_path + 'linkedin_on.png');
              });
              params.socialbar.append(href);
            break;
            default:
              //Do Nothing
              //alert('not found');
            break;
          }
          params.totalicons++;
        });

        var css = (params.href_css['margin-left'] !== undefined ? {'width':(params.totalicons*params.spacer)+parseInt(params.href_css['margin-left'])} : {'width':(params.totalicons*params.spacer)});

        $.extend(params.css,css);
        //console.log(css);
        params.socialbar.css(params.css);
      });
    }
  });

})($jQ);







$jQ(document).ready(function(){
  var tagline_length = 61;
  if(window.location.protocol == "https:"){
    tagline_length = 62;
  }

  $('#tagline').after('<div style="float:right;margin-right:35px;margin-top:23px"> <a href="http://www.facebook.com/SonyProUSA?XID=I:top_prosocialmedia" target="_blank"> <img title="Facebook" src="//pro.sony.com/bbsccms/webapp/social-media-icons/global/facebook_off.jpg" style="float:left;margin-right:2px" onmouseover="this.path=this.src.substr(0,'+tagline_length+');this.src=this.path+\'facebook_on.jpg\'" onmouseout="this.path=this.src.substr(0,'+tagline_length+');this.src=this.path+\'facebook_off.jpg\'"> </a><a href="http://www.twitter.com/SonyProUSA?XID=I:top_prosocialmedia" target="_blank"> <img title="Twitter" src="//pro.sony.com/bbsccms/webapp/social-media-icons/global/twitter_off.jpg" style="float:left;margin-right:2px" onmouseover="this.path=this.src.substr(0,'+tagline_length+');this.src=this.path+\'twitter_on.jpg\'" onmouseout="this.path=this.src.substr(0,'+tagline_length+');this.src=this.path+\'twitter_off.jpg\'"> </a><a href="https://plus.google.com/109048306973776168477/?XID=I:top_prosocialmedia" target="_blank"> <img title="GooglePlus" src="//pro.sony.com/bbsccms/webapp/social-media-icons/global/googleplus_off.jpg" style="float:left;margin-right:2px" onmouseover="this.path=this.src.substr(0,'+tagline_length+');this.src=this.path+\'googleplus_on.jpg\'" onmouseout="this.path=this.src.substr(0,'+tagline_length+');this.src=this.path+\'googleplus_off.jpg\'"> </a><a href="http://www.linkedin.com/company/sony-electronics-professional-solutions-of-america?PID=I:nav_prosocialmedia" target="_blank"> <img title="LinkedIn" src="//pro.sony.com/bbsccms/webapp/social-media-icons/global/linkin_off.jpg" style="float:left;margin-right:2px" onmouseover="this.path=this.src.substr(0,'+tagline_length+');this.src=this.path+\'linkin_on.jpg\'" onmouseout="this.path=this.src.substr(0,'+tagline_length+');this.src=this.path+\'linkin_off.jpg\'" /> </a><a href="http://blog.sony.com/category/pro-blog/?XID=I:top_prosocialmedia" target="_blank"> <img title="Blog" src="//pro.sony.com/bbsccms/webapp/social-media-icons/global/blog_off.jpg" style="float:left;margin-right:2px" onmouseover="this.path=this.src.substr(0,'+tagline_length+');this.src=this.path+\'blog_on.jpg\'" onmouseout="this.path=this.src.substr(0,'+tagline_length+');this.src=this.path+\'blog_off.jpg\'"> </a><a href="http://community.sony.com/t5/Professional-Products/ct-p/professional-products?XID=I:top_prosocialmedia" target="_blank"> <img title="Community" src="//pro.sony.com/bbsccms/webapp/social-media-icons/global/community_off.jpg" style="float:left;margin-right:2px" onmouseover="this.path=this.src.substr(0,'+tagline_length+');this.src=this.path+\'community_on.jpg\'" onmouseout="this.path=this.src.substr(0,'+tagline_length+');this.src=this.path+\'community_off.jpg\'"></a> </div>');

  var trackpage = s.pageName.split(':')
  if(trackpage[1] !== undefined){
    trackpage = '_' + trackpage[1].replace("-","_");
  }else{
    trackpage = '';
  }

  //socialmedia breadcrumb
  /*$jQ('.breadcrumb').sonyws_socialmedia_breadcrumb({
    "spacer" : 23,
    "css" : {'margin-right':0},
    "tpl_path" : '/bbsccms/lib/jq-socialmedia-breadcrumb/icons/',
    "clone" : true,
    "socialmedia" : {
      "linkin" : {
        "title" : "LinkIn+",
        "url" : "http://www.linkedin.com/company/sony-electronics-professional-solutions-of-america?PID=I:nav_prosocialmedia"+trackpage+":linkedin"
      },
      "googleplus" : {
        "title" : "Google+",
        "url" : "http://gplus.to/SonyProUSA?PID=I:nav_prosocialmedia"+trackpage+":googleplus"
      },
      "pinterest" : {
        "title" : "Pinterest",
        "url" : "http://www.pinterest.com/SonyProUSA?PID=I:nav_prosocialmedia"+trackpage+":pinterest"
      },
      "blog" : {
        "title" : "Sony Blog",
        "url" : "http://blog.sony.com/?PID=I:nav_prosocialmedia"+trackpage+":blog"
      },
      "twitter" : {
        "title" : "Twitter",
        "url" : "http://www.twitter.com/SonyProUSA?PID=I:nav_prosocialmedia"+trackpage+":twitter"
      },
      "facebook" : {
        "title" : "Facebook",
        "url" : "http://www.facebook.com/SonyProUSA?PID=I:nav_prosocialmedia"+trackpage+":facebook"
      }
    }
  });*/

});

/*
 * Others
 */



//Global JS
/*! jsUri v1.1.1 | https://github.com/derek-watson/jsUri */
var Query=function(a){"use strict";var b=function(a){var b=[],c,d,e,f;if(typeof a=="undefined"||a===null||a==="")return b;a.indexOf("?")===0&&(a=a.substring(1)),d=a.toString().split(/[&;]/);for(c=0;c<d.length;c++)e=d[c],f=e.split("="),b.push([f[0],f[1]]);return b},c=b(a),d=function(){var a="",b,d;for(b=0;b<c.length;b++)d=c[b],a.length>0&&(a+="&"),a+=d.join("=");return a.length>0?"?"+a:a},e=function(a){a=decodeURIComponent(a),a=a.replace("+"," ");return a},f=function(a){var b,d;for(d=0;d<c.length;d++){b=c[d];if(e(a)===e(b[0]))return b[1]}},g=function(a){var b=[],d,f;for(d=0;d<c.length;d++)f=c[d],e(a)===e(f[0])&&b.push(f[1]);return b},h=function(a,b){var d=[],f,g,h,i;for(f=0;f<c.length;f++)g=c[f],h=e(g[0])===e(a),i=e(g[1])===e(b),(arguments.length===1&&!h||arguments.length===2&&!h&&!i)&&d.push(g);c=d;return this},i=function(a,b,d){arguments.length===3&&d!==-1?(d=Math.min(d,c.length),c.splice(d,0,[a,b])):arguments.length>0&&c.push([a,b]);return this},j=function(a,b,d){var f=-1,g,j;if(arguments.length===3){for(g=0;g<c.length;g++){j=c[g];if(e(j[0])===e(a)&&decodeURIComponent(j[1])===e(d)){f=g;break}}h(a,d).addParam(a,b,f)}else{for(g=0;g<c.length;g++){j=c[g];if(e(j[0])===e(a)){f=g;break}}h(a),i(a,b,f)}return this};return{getParamValue:f,getParamValues:g,deleteParam:h,addParam:i,replaceParam:j,toString:d}},Uri=function(a){"use strict";var b=!1,c=function(a){var c={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},d=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],e={name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},f=c[b?"strict":"loose"].exec(a),g={},h=14;while(h--)g[d[h]]=f[h]||"";g[e.name]={},g[d[12]].replace(e.parser,function(a,b,c){b&&(g[e.name][b]=c)});return g},d=c(a||""),e=new Query(d.query),f=function(a){typeof a!="undefined"&&(d.protocol=a);return d.protocol},g=null,h=function(a){typeof a!="undefined"&&(g=a);return g===null?d.source.indexOf("//")!==-1:g},i=function(a){typeof a!="undefined"&&(d.userInfo=a);return d.userInfo},j=function(a){typeof a!="undefined"&&(d.host=a);return d.host},k=function(a){typeof a!="undefined"&&(d.port=a);return d.port},l=function(a){typeof a!="undefined"&&(d.path=a);return d.path},m=function(a){typeof a!="undefined"&&(e=new Query(a));return e},n=function(a){typeof a!="undefined"&&(d.anchor=a);return d.anchor},o=function(a){f(a);return this},p=function(a){h(a);return this},q=function(a){i(a);return this},r=function(a){j(a);return this},s=function(a){k(a);return this},t=function(a){l(a);return this},u=function(a){m(a);return this},v=function(a){n(a);return this},w=function(a){return m().getParamValue(a)},x=function(a){return m().getParamValues(a)},y=function(a,b){arguments.length===2?m().deleteParam(a,b):m().deleteParam(a);return this},z=function(a,b,c){arguments.length===3?m().addParam(a,b,c):m().addParam(a,b);return this},A=function(a,b,c){arguments.length===3?m().replaceParam(a,b,c):m().replaceParam(a,b);return this},B=function(){var a="",b=function(a){return a!==null&&a!==""};b(f())?(a+=f(),f().indexOf(":")!==f().length-1&&(a+=":"),a+="//"):h()&&b(j())&&(a+="//"),b(i())&&b(j())&&(a+=i(),i().indexOf("@")!==i().length-1&&(a+="@")),b(j())&&(a+=j(),b(k())&&(a+=":"+k())),b(l())?a+=l():b(j())&&(b(m().toString())||b(n()))&&(a+="/"),b(m().toString())&&(m().toString().indexOf("?")!==0&&(a+="?"),a+=m().toString()),b(n())&&(n().indexOf("#")!==0&&(a+="#"),a+=n());return a},C=function(){return new Uri(B())};return{protocol:f,hasAuthorityPrefix:h,userInfo:i,host:j,port:k,path:l,query:m,anchor:n,setProtocol:o,setHasAuthorityPrefix:p,setUserInfo:q,setHost:r,setPort:s,setPath:t,setQuery:u,setAnchor:v,getQueryParamValue:w,getQueryParamValues:x,deleteQueryParam:y,addQueryParam:z,replaceQueryParam:A,toString:B,clone:C}},jsUri=Uri;

var PageURI = new Uri(window.location.href);
var RedirectTo = PageURI.getQueryParamValue('RedirectTo');

if(RedirectTo !== undefined){
  if(RedirectTo == 'infocomm'){
    window.location = '/bbsc/ssr/mkt-infocomm/';
  }else if(RedirectTo == 'extracredit'){
    window.location = 'http://pro.sony.com/bbsc/ssr/show-education/resource.solutions.bbsccms-assets-show-education-extracredit.shtml';
  }
}



/**
*! Hide Navigation Items
*/
function _hideMainNavParent($t,$class){
  if($t.parent().parent().hasClass($class)){
    $t.parent().show();
  }else{
    $t.parent().hide();
  }
}

$jQ(document).ready(function(){
  $jQ('html body a').each(function(){
    var $t = $jQ(this),$txt = $t.html(),$parent = $t.parent();


    //Hide InfoComm
    if($txt == 'InfoComm' || $txt == 'InfoComm '){
      _hideMainNavParent($t,'breadcrumb');
    }
  });


  function addEventWS(a,e,b,c,d){d=d||!1;if(a.addEventListener)return a.addEventListener(e,function(){b(c)},d),!0;if(a.attachEvent)return a.attachEvent("on"+e,function(){b(c)});a.onload=function(){b(c)};return!0};

  var curURL = window.location.pathname.split('/');
  var nabURL = curURL.slice(1,5);
  var nabMarket = (typeof(curURL[4]) == 'undefined' ? '' : curURL[4]);
  var nabRefined = PageURI.getQueryParamValue('refine');

  if(PageURI.path().substring(0,18) == '/bbsc/ssr/mkt-nab/' && $jQ('#container.product-detail').length == 0 && nabRefined == undefined){
    if(nabMarket === 'mkt-eventproduction'){
      var sideMenu = $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.alt div.filter ul.bd');
      sideMenu.prepend('<li><a target="_self" href="/bbsccms/ext/BroadcastandBusiness/minisites/NAB2012/ext-affordableliveproduction.html">Hot Products</a> (3)</li>');
    }else if(nabMarket === 'mkt-nab12proaudio'){
      var sideMenu = $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.alt div.filter ul.bd');
      sideMenu.prepend('<li><a target="_self" href="/bbsccms/ext/BroadcastandBusiness/minisites/NAB2012/ext-proaudio.html">New Products</a> (12)</li>');
    }else if(nabMarket === 'mkt-nab12acquisition'){
      var sideMenu = $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.alt div.filter ul.bd');
      sideMenu.prepend('<li><a target="_self" href="/bbsccms/ext/BroadcastandBusiness/minisites/NAB2012/ext-acquisition.html">New Products</a> (7)</li>');
    }else if(nabMarket === 'mkt-nab12workflowsolutions'){
      var sideMenu = $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.alt div.filter ul.bd');
      sideMenu.prepend('<li><a target="_self" href="/bbsccms/ext/BroadcastandBusiness/minisites/NAB2012/ext-MediaAssetManagementContentWorkflow.html">New Products</a> (1)</li>');
    }else if(nabMarket === 'mkt-nab12srmemory4K'){
      var sideMenu = $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.alt div.filter ul.bd');
      sideMenu.prepend('<li><a target="_self" href="/bbsccms/ext/BroadcastandBusiness/minisites/NAB2012/ext-srmaster4kworkflow.html">New Products</a> (2)</li>');
    }else if(nabMarket === 'mkt-nab12super35mm'){
      var sideMenu = $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.alt div.filter ul.bd');
      sideMenu.prepend('<li><a target="_self" href="/bbsccms/ext/BroadcastandBusiness/minisites/NAB2012/ext-Super35mm.html">New Products</a> (1)</li>');
    }else if(nabMarket === 'mkt-nab12xdcamprod'){
      var sideMenu = $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.alt div.filter ul.bd');
      sideMenu.prepend('<li><a target="_self" href="/bbsccms/ext/BroadcastandBusiness/minisites/NAB2012/ext-XDCAMProduction.html">New Products</a> (3)</li>');
    }
  }else if(PageURI.path().substring(0,23) == '/bbsc/ssr/mkt-infocomm/' && $jQ('#container.product-detail').length == 0 && nabRefined == undefined){
    if(nabMarket === 'mkt-advancedinstallationprojectors'){
      var sideMenu = $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.alt div.filter ul.bd');
      sideMenu.prepend('<li><a target="_self" href="/bbsccms/ext/infocomm/infocomm12/ext-AdvancedInstallationProjectors.html">Hot Products</a> (2)</li>');
    }else if(nabMarket === 'mkt-commercialflatpanneldisplays'){
      var sideMenu = $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.alt div.filter ul.bd');
      sideMenu.prepend('<li><a target="_self" href="/bbsccms/ext/infocomm/infocomm12/ext-CommercialFlatPanelDisplays.html">Hot Products</a> (2)</li>');
    }else if(nabMarket === 'mkt-compactshortthrowprojectors'){
      var sideMenu = $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.alt div.filter ul.bd');
      sideMenu.prepend('<li><a target="_self" href="/bbsccms/ext/infocomm/infocomm12/ext-CompactShortThrowProjectors.html">Hot Products</a> (3)</li>');
    }else if(nabMarket === 'mkt-networkedliveproduction'){
      var sideMenu = $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.alt div.filter ul.bd');
      sideMenu.prepend('<li><a target="_self" href="/bbsccms/ext/infocomm/infocomm12/ext-NetworkedLiveProduction.html">Hot Products</a> (2)</li>');
    }else if(nabMarket === 'mkt-PanTiltZoom'){
      var sideMenu = $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.alt div.filter ul.bd');
      sideMenu.prepend('<li><a target="_self" href="/bbsccms/ext/infocomm/infocomm12/ext-PanTiltZoomCameras.html">Hot Products</a> (3)</li>');
    }else if(nabMarket === 'mkt-ProAudio'){
      var sideMenu = $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.alt div.filter ul.bd');
      sideMenu.prepend('<li><a target="_self" href="/bbsccms/ext/infocomm/infocomm12/ext-ProfessionalAudio.html">Hot Products</a> (2)</li>');
    }
  }

  if(window.location.pathname == '/bbsc/ssr/mkt-nab/'){

    $jQ('#tab_menu1_content.page').removeClass('active');
    $jQ('#tab_menu1').removeClass('active');

    $jQ('html body div#wrapper div#container div#content ul.tab_menu li#tab_menu2').remove();
    $jQ('html body div#wrapper div#container div#content div#tab_menu2_content.page').remove();

    $jQ('html body div#wrapper div#container div#content ul.tab_menu').append('<li id="tab_menu2" class="NABNEWPRODUCT"><a onclick="if(document.getElementById(\'tab_menu2\').className !=\'active\'){topTab(this);trackSupportTab();}" href="javascript:;">New Products</a></li>');
    $jQ('html body div#wrapper div#container div#content').append('<div id="tab_menu2_content" class="page"></div>');

    if(PageURI.getQueryParamValue('NABNewProduct') == 1){

      strPageConfig = '{"setTopTab":"1","setLeftNav":"null","setSubTab":"1"}';
      $jQ('#tab_menu1_content.page').removeClass('active');
      $jQ('#tab_menu1').removeClass('active');
      addEventWS(window,'load',function(){
        var tab_menu1_content = $jQ('#content .page');
        tab_menu1_content.removeClass('active');

        var tab_menu = $jQ('.tab_menu li');
        tab_menu.removeClass('active');

        $jQ('#tab_menu2').addClass('active');
        $jQ('#tab_menu2_content').addClass('active');
      });
    }else{
      $jQ('#tab_menu1_content.page').addClass('active');
      $jQ('#tab_menu1').addClass('active');
    }
  }else if(window.location.pathname == '/bbsc/ssr/mkt-infocomm/'){

    $jQ('#tab_menu1_content.page').removeClass('active');
    $jQ('#tab_menu1').removeClass('active');

    $jQ('html body div#wrapper div#container div#content ul.tab_menu li#tab_menu2').remove();
    $jQ('html body div#wrapper div#container div#content div#tab_menu2_content.page').remove();

    $jQ('html body div#wrapper div#container div#content ul.tab_menu').append('<li id="tab_menu2" class="NABNEWPRODUCT"><a onclick="if(document.getElementById(\'tab_menu2\').className !=\'active\'){topTab(this);trackSupportTab();}" href="javascript:;">Hot Products</a></li>');
    $jQ('html body div#wrapper div#container div#content').append('<div id="tab_menu2_content" class="page"></div>');

    $jQ('#tab_menu2_content').load('/bbsccms/ext/infocomm/infocomm12/ext-listing.html', function(){

    });

    if(PageURI.getQueryParamValue('NewProduct') == 1){

      strPageConfig = '{"setTopTab":"1","setLeftNav":"null","setSubTab":"1"}';
      $jQ('#tab_menu1_content.page').removeClass('active');
      $jQ('#tab_menu1').removeClass('active');
      addEventWS(window,'load',function(){
        var tab_menu1_content = $jQ('#content .page');
        tab_menu1_content.removeClass('active');

        var tab_menu = $jQ('.tab_menu li');
        tab_menu.removeClass('active');

        $jQ('#tab_menu2').addClass('active');
        $jQ('#tab_menu2_content').addClass('active');
      });
    }else{
      $jQ('#tab_menu1_content.page').addClass('active');
      $jQ('#tab_menu1').addClass('active');
    }


  }

  var titleHeader = $jQ('html body div#wrapper div#container div#content > h1');
  if(titleHeader.html() === 'Infocomm'){
    titleHeader.html('InfoComm');
  }


  if(window.location.pathname == '/bbsc/ssr/mkt-infocomm/mkt-compactshortthrowprojectors/'){
    $jQ('html body div#wrapper div#container div#content div#tab_menu1_content.page div.page_nav ul.page_nav_list li.on').html('<li class="on"><a href=" ">Compact and Short Throw Projectors </a></li><li class="alt"> <div class="filter"> <p class="hd">CATEGORY</p> <ul class="bd filter_links"><li><a href="/bbsccms/ext/infocomm/infocomm12/ext-CompactShortThrowProjectors.html" target="_self">Hot Products</a> (2)</li> </ul> <p class="ft"></p> </div> </li>');
  }

  //NAB 2013
  window.NAB2013_CALLBACK = null;

  if(window.location.pathname.substr(0,22) == "/bbsc/ssr/mkt-nab2013/"){
    $jQ('a[href$="/bbsc/ssr/mkt-nab2013/mkt-nab2013new/"]').parent().remove();
    if(window.location.pathname.indexOf('product-') < 0){
      $jQ('.tab_menu #tab_menu2').html('<a href="/bbsc/ssr/mkt-nab2013/mkt-nab2013new/#NEW-PRODUCTS">New Products</a>').show();
    }
  }

  if(window.location.pathname == "/bbsc/ssr/mkt-nab2013/mkt-nab2013new/"){
    $jQ('#tab_menu2').addClass('active'); $jQ('#tab_menu1').removeClass('active');
  }




  if(window.location.pathname == "/bbsc/ssr/mkt-nab2013/" ||
   window.location.pathname == "/bbsc/ssr/mkt-nab2013/mkt-nab2013new/" ||
   window.location.pathname == "/bbsc/ssr/mkt-nab2013/mkt-nab2013new/product-NEWPROD2013/"){
    $jQ.DynamicCSS('.product-detail .page_content,body.NAB2013 #tab_menu2,body.NAB2013 #tab_menu1_content .page_nav ul.page_nav_list,#tab_menu1_content.page div.page_content div.controls, #tab_menu1_content.page div.page_content div.product_spot{display:none;}');
    $jQ(document).ready(function(){
      $jQ('body').addClass('NAB2013');
    });

    $jQ.ajax({
      type: "GET",
      async: false,
      url: '/bbsccms/static/files/mkt/nab2013/js/nab2013.js',
      dataType: "script",
      success: function(){}
    });
    $jQ(window).load(function(){
      $('a[href$="/bbsc/ssr/mkt-nab2013/mkt-nab2013new/"]').remove();
      if(window.location.pathname == "/bbsc/ssr/mkt-nab2013/mkt-nab2013new/"){
        $jQ('.tab_menu #tab_menu1').html('<a href="/bbsc/ssr/mkt-nab2013/">Overview</a>').removeClass('active');
        $jQ('.tab_menu #tab_menu2').html('<a href="#">New Products</a>').addClass('active').show();
      }else{
        $jQ('.tab_menu #tab_menu2').html('<a href="/bbsc/ssr/mkt-nab2013/mkt-nab2013new/#NEW-PRODUCTS">New Products</a>').show();
      }
      $('#tab_menu1_content .page_nav_list').show()
    });
  }
  $('#navItem4 ul li').eq(6).after('<li>'+$('#navItem2 a[href$="/bbsc/ssr/mkt-nab2013/ "]').parent().html()+'</li>');
  $('#navItem2 a[href$="/bbsc/ssr/mkt-nab2013/ "]').parent('li').remove();

  if(Modernizr.isinfocomm2013){
    $jQ.ajax({
      type: "GET",
      async: false,
      url: '/bbsccms/static/files/mkt/infocomm2013/js/infocomm2013.js',
      dataType: "script",
      success: function(){}
    });
  }
  $('#navItem2 a[href$="/bbsc/ssr/mkt-infocomm2013/ "]').parent('li').remove();
  $('.page_nav_list a[href$="/bbsc/ssr/mkt-infocomm2013/mkt-infocomm2013new/"]').parent('li').remove();

  if(Modernizr.isinfocomm2013_subpages){
    $jQ(window).load(function(){
      //$('.tab_menu').append('<li id="tab_menu1" class=""><a href="/bbsc/ssr/mkt-infocomm2013/mkt-infocomm2013new/">New Products</a></li>');
      $('#content .tab_menu').html('<ul class="tab_menu"><li id="tab_menu1-1" class="active"><a href="/bbsc/ssr/mkt-infocomm2013/" >Overview</a></li><li id="tab_menu2-1" style="display: list-item;" ><a href="/bbsc/ssr/mkt-infocomm2013/mkt-infocomm2013new/">New Products</a></li></ul>');
    });
  }
});