/*
Copyright (c) 2008, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.net/yui/license.txt
version: 2.5.0
*/

//window.onerror = errHandler;
function errHandler(msg, uri, line) {
	var params = [];
	params[0] = 'browser=' + navigator.appName;
	params[1] = 'data=' + navigator.userAgent + '|' + navigator.vendor;
	params[2] = 'lineNumber=' + line;
	params[3] = 'message=' + msg;
	params[4] = 'platform=' + navigator.platform;
	params[5] = 'url=' + window.location.pathname;
	params[6] = 'version=' + navigator.appVersion;
	//params[7] = 'host_ip=' + new java.net.InetAddress.getLocalHost();
	
	var time = new Date();
	var URL = encodeURI("/bbsc/BBSCJsLogger?" + params.join('&') + "&session=" + time.getTime());
	
	if (typeof XMLHttpRequest != "undefined") {
		xhr = new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined") {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
    }
	try {
		xhr.open("GET", URL, true);
		xhr.send("");
	} catch (e) {}
	return false;
}

YAHOO.namespace("lang");YAHOO.lang.JSON={_ESCAPES:/\\./g,_VALUES:/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,_BRACKETS:/(?:^|:|,)(?:\s*\[)+/g,_INVALID:/^[\],:{}\s]*$/,_SPECIAL_CHARS:/["\\\x00-\x1f]/g,_PARSE_DATE:/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/,_CHARS:{"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},_applyFilter:function(C,B){var A=function(E,D){var F,G;if(D&&typeof D==="object"){for(F in D){if(YAHOO.lang.hasOwnProperty(D,F)){G=A(F,D[F]);if(G===undefined){delete D[F];}else{D[F]=G;}}}}return B(E,D);};if(YAHOO.lang.isFunction(B)){A("",C);}return C;},isValid:function(A){if(!YAHOO.lang.isString(A)){return false;}return this._INVALID.test(A.replace(this._ESCAPES,"@").replace(this._VALUES,"]").replace(this._BRACKETS,""));},dateToString:function(B){function A(C){return C<10?"0"+C:C;}return'"'+B.getUTCFullYear()+"-"+A(B.getUTCMonth()+1)+"-"+A(B.getUTCDate())+"T"+A(B.getUTCHours())+":"+A(B.getUTCMinutes())+":"+A(B.getUTCSeconds())+'Z"';},stringToDate:function(B){if(this._PARSE_DATE.test(B)){var A=new Date();A.setUTCFullYear(RegExp.$1,(RegExp.$2|0)-1,RegExp.$3);A.setUTCHours(RegExp.$4,RegExp.$5,RegExp.$6);return A;}},parse:function(s,filter){if(this.isValid(s)){return this._applyFilter(eval("("+s+")"),filter);}throw new SyntaxError("parseJSON");},stringify:function(C,K,F){var E=YAHOO.lang,H=E.JSON,D=H._CHARS,A=this._SPECIAL_CHARS,B=[];var I=function(N){if(!D[N]){var J=N.charCodeAt();D[N]="\\u00"+Math.floor(J/16).toString(16)+(J%16).toString(16);}return D[N];};var M=function(J){return'"'+J.replace(A,I)+'"';};var L=this.dateToString;var G=function(J,T,R){var W=typeof J,P,Q,O,N,U,V,S;if(W==="string"){return M(J);}if(W==="boolean"||J instanceof Boolean){return String(J);}if(W==="number"||J instanceof Number){return isFinite(J)?String(J):"null";}if(J instanceof Date){return L(J);}if(E.isArray(J)){for(P=B.length-1;P>=0;--P){if(B[P]===J){return"null";}}B[B.length]=J;S=[];if(R>0){for(P=J.length-1;P>=0;--P){S[P]=G(J[P],T,R-1);}}B.pop();return"["+S.join(",")+"]";}if(W==="object"&&J){for(P=B.length-1;P>=0;--P){if(B[P]===J){return"null";}}B[B.length]=J;S=[];if(R>0){if(T){for(P=0,O=0,Q=T.length;P<Q;++P){U=J[T[P]];V=typeof U;if(V!=="undefined"&&V!=="function"){S[O++]=M(T[P])+":"+G(U,T,R-1);}}}else{O=0;for(N in J){if(typeof N==="string"&&E.hasOwnProperty(J,N)){U=J[N];V=typeof U;if(V!=="undefined"&&V!=="function"){S[O++]=M(N)+":"+G(U,T,R-1);}}}}}B.pop();return"{"+S.join(",")+"}";}return"null";};F=F>=0?F:1/0;return G(C,K,F);}};YAHOO.register("json",YAHOO.lang.JSON,{version:"2.5.0",build:"895"});

/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;



// *** BEGIN ON ACTION FUNCTIONS ***
YAHOO.namespace('bbsc');
var bbsc = YAHOO.bbsc;
var Dom = YAHOO.util.Dom;
var Event = YAHOO.util.Event;
var Util = YAHOO.lang;
var Log = YAHOO.log;


bbsc.globals = new Array;

// -- Standard functions
// array methods to allow for a rich set of array manipulation methods
// regardless of Javascript / Browser version.

// Array.concat() - Join two arrays
if( typeof Array.prototype.concat==='undefined' ) {
 Array.prototype.concat = function( a ) {
  for( var i = 0, b = this.copy(); i<a.length; i++ ) {
   b[b.length] = a[i];
  }
  return b;
  };
};

// Array.copy() - Copy an array
if( typeof Array.prototype.copy==='undefined' ) {
 Array.prototype.copy = function() {
  var a = [], i = this.length;
  while( i-- ) {
   a[i] = typeof this[i].copy!=='undefined' ? this[i].copy() : this[i];
  }
  return a;
 };
};

// Array.pop() - Remove and return the last element of an array
if( typeof Array.prototype.pop==='undefined' ) {
 Array.prototype.pop = function() {
  var b = this[this.length-1];
  this.length--;
  return b;
 };
};

// Array.push() - Add an element to the end of an array, return the new length
if( typeof Array.prototype.push==='undefined' ) {
 Array.prototype.push = function() {
  for( var i = 0, b = this.length, a = arguments, l = a.length; i<l; i++ ) {
   this[b+i] = a[i];
  }
  return this.length;
 };
};

// Array.shift() - Remove and return the first element
if( typeof Array.prototype.shift==='undefined' ) {
 Array.prototype.shift = function() {
  for( var i = 0, b = this[0], l = this.length-1; i<l; i++ ) {
   this[i] = this[i+1];
  }
  this.length--;
  return b;
 };
};

// Array.slice() - Copy and return several elements
if( typeof Array.prototype.slice==='undefined' ) {
 Array.prototype.slice = function( a, c ) {
  var i, l = this.length, r = [];
  if( !c ) { c = l; }
  if( c<0 ) { c = l + c; }
  if( a<0 ) { a = l - a; }
  if( c<a ) { i = a; a = c; c = i; }
  for( i = 0; i < c - a; i++ ) { r[i] = this[a+i]; }
  return r;
 };
};

// Array.splice() - Remove or replace several elements and return any deleted elements
if( typeof Array.prototype.splice==='undefined' ) {
 Array.prototype.splice = function( a, c ) {
  var i = 0, e = arguments, d = this.copy(), f = a, l = this.length;
  if( !c ) { c = l - a; }
  for( i; i < e.length - 2; i++ ) { this[a + i] = e[i + 2]; }
  for( a; a < l - c; a++ ) { this[a + e.length - 2] = d[a - c]; }
  this.length -= c - e.length + 2;
  return d.slice( f, f + c );
 };
}

// Array.unshift() - Add an element to the beginning of an array
if( typeof Array.prototype.unshift==='undefined' ) {
 Array.prototype.unshift = function() {
  this.reverse();
  var a = arguments, i = a.length;
  while(i--) { this.push(a[i]); }
  this.reverse();
  return this.length;
 };
};


// Array.forEach( function ) - Apply a function to each element
Array.prototype.forEach = function( f ) {
 var i = this.length, j, l = this.length;
 for( i=0; i<l; i++ ) { if( ( j = this[i] ) ) { f( j ); } }
};

// Array.indexOf( value, begin, strict ) - Return index of the first element that matches value
Array.prototype.indexOf = function( v, b, s ) {
 for( var i = +b || 0, l = this.length; i < l; i++ ) {
  if( this[i]===v || s && this[i]==v ) { return i; }
 }
 return -1;
};

// Array.insert( index, value ) - Insert value at index, without overwriting existing keys
Array.prototype.insert = function( i, v ) {
 if( i>=0 ) {
  var a = this.slice(), b = a.splice( i );
  a[i] = v;
  return a.concat( b );
 }
};

// Array.lastIndexOf( value, begin, strict ) - Return index of the last element that matches value
Array.prototype.lastIndexOf = function( v, b, s ) {
 b = +b || 0;
 var i = this.length; while(i-->b) {
  if( this[i]===v || s && this[i]==v ) { return i; }
 }
 return -1;
};

// Array.random( range ) - Return a random element, optionally up to or from range
Array.prototype.random = function( r ) {
 var i = 0, l = this.length;
 if( !r ) { r = this.length; }
 else if( r > 0 ) { r = r % l; }
 else { i = r; r = l + r % l; }
 return this[ Math.floor( r * Math.random() - i ) ];
};

// Array.shuffle( deep ) - Randomly interchange elements
Array.prototype.shuffle = function( b ) {
 var i = this.length, j, t;
 while( i ) {
  j = Math.floor( ( i-- ) * Math.random() );
  t = b && typeof this[i].shuffle!=='undefined' ? this[i].shuffle() : this[i];
  this[i] = this[j];
  this[j] = t;
 }
 return this;
};

// Array.unique( strict ) - Remove duplicate values
Array.prototype.unique = function( b ) {
 var a = [], i, l = this.length;
 for( i=0; i<l; i++ ) {
  if( a.indexOf( this[i], 0, b ) < 0 ) { a.push( this[i] ); }
 }
 return a;
};

// Array.walk() - Change each value according to a callback function
Array.prototype.walk = function( f ) {
 var a = [], i = this.length;
 while(i--) { a.push( f( this[i] ) ); }
 return a.reverse();
};


// clear field value function: removes the default value onfocus, and adds back if nothing entered
function fieldClear(obj) {
	if(obj.Val) {
		if (obj.value == '') {
			obj.value = obj.Val;
			obj.Val = null;
			obj.first = null;
		}
		else {
			obj.Val = null;
		}
	} else if (!obj.first) {
		obj.Val = obj.value;
		obj.value = '';
		obj.first = 'true';
	}
}

function topTab(obj) {
	counter = 0;
	var thisTabName = obj.parentNode.id;
	var tabSetName = obj.parentNode.parentNode.className; // tab_menu
	var numOfTabs = getNumberOfTabs(obj);
	hideAll(tabSetName, numOfTabs);
	showRelevant(thisTabName);
}
	function getNumberOfTabs(obj) {
		tabAry = obj.parentNode.parentNode.getElementsByTagName('li');
		return tabAry.length;
	}
	function hideAll(tabSetName, numOfTabs) {
		//.alert('hideAll:'+tabSetName);
		var tabItem;
		var contentItem;
		for (i=1;i<numOfTabs+1;i++) {
			tabItem = tabSetName + i;
			contentItem = tabItem + '_content';
			//alert(contentItem);
			document.getElementById(tabItem).className = '';
			if(tabSetName=='sub_tab_menu') {
				document.getElementById(contentItem).className = 'sub_page';
			} else {
				document.getElementById(contentItem).className = 'page';
			}
		}

	}
	function showRelevant(thisTabName) {
		var tabItem = thisTabName;
		var contentItem = tabItem + '_content';
		//Log('tabItem: ' + tabItem + '. contentItem: ' + contentItem);
		document.getElementById(tabItem).className = 'active';
		document.getElementById(contentItem).className = document.getElementById(contentItem).className + ' active';
		//Log(document.getElementById(contentItem).className);
	}


bbsc.hideElementsNav = function() {
 var arrElements = YAHOO.util.Dom.getElementsByClassName('navHide');
 for (iter=0;iter<arrElements.length;iter++)
  {
  Dom.setStyle(arrElements[iter],'display','none');
  Dom.setStyle(arrElements[iter],'visibility','hidden');  
  }

  arrElements = YAHOO.util.Dom.getElementsByClassName('selectView');
 
 for (iter=0;iter<arrElements.length;iter++)
  {
  Dom.setStyle(arrElements[iter],'display','none');
  Dom.setStyle(arrElements[iter],'visibility','hidden');  
  }
}

bbsc.showElementsNav = function() {
 var arrElements = YAHOO.util.Dom.getElementsByClassName('navHide');
 for (iter=0;iter<arrElements.length;iter++)
  {
  Dom.setStyle(arrElements[iter],'display','block');
  Dom.setStyle(arrElements[iter],'visibility','visible');  
  }

  arrElements = YAHOO.util.Dom.getElementsByClassName('selectView');
 for (iter=0;iter<arrElements.length;iter++)
  {
  Dom.setStyle(arrElements[iter],'display','block');
  Dom.setStyle(arrElements[iter],'visibility','visible');  
  }
}

// *** BEGIN ON INIT FUNCTIONS ***

	// Top navigation menu control
topNav = function() {
	if ((document.all) && (document.getElementById) && (document.getElementById('nav_list'))) {
		cssdropdownRoot = document.getElementById('nav_list').getElementsByTagName('li');
		for (x=0; x<cssdropdownRoot.length; x++) {
			node = cssdropdownRoot[x];
			if (node.nodeName=="LI") {
				if(x<(cssdropdownRoot.length - 1)){
				    node.onmouseover=function() {this.className+=" over";bbsc.hideElementsNav();}
				    node.onmouseout=function() {this.className=this.className.replace(" over", "");bbsc.showElementsNav();}
				}
				else{ // Fix for the Support button not to hide the select boxes - Added ad hoc by PJH
				   node.onmouseover=function() {this.className+=" over";}
				   node.onmouseout=function() {this.className=this.className.replace(" over", "");}
				}
			}
		}
	}
}
// *** END ON INIT FUNCTIONS ***

	// These functions are activated upon page load. They embed JavaScript without function calls from appearing within the HTML.


bbsc.setTabPage = function() {
	//Log('fn: setTabPage','info','global.js');
	//valid index values are integers...
	//tabs indexed from 0 to N....
	// -1 indicates no tabs / pages / or take no action.
	var tabNum = arguments[0];
	var pageNum = arguments[1];
	var subTabNum = arguments[2];
	var pageIndex = parseInt(pageNum);
	var tabIndex = parseInt(tabNum);
	var subTabIndex = parseInt(subTabNum);
	if(subTabIndex > -1) {
		//Log('sub tab index: '+subTabIndex);
		var arrSubTabMenu = Dom.getElementsByClassName  ('sub_tab_menu' , 'ul' , 'content');
		if(arrSubTabMenu.length > 0) {
			var arrSubTabsInMenu = Dom.getElementsBy(function() { return true;} , 'li' , arrSubTabMenu[0]);
			//Log(arrSubTabMenu.innerHTML);
			if(subTabIndex>=0 && subTabIndex < arrSubTabsInMenu.length) {
				//Log(arrSubTabsInMenu[subTabIndex].id);
				var arrSubAnchors = Dom.getElementsBy(function() { return true;} , 'a' , arrSubTabsInMenu[subTabIndex]);
				topTab(arrSubAnchors[0]);
			} else {
				//Log("fn: setTabPage - Sub tab out of range", "warn", "global.js");
			}
		} else {
				//Log("fn: setTabPage - No sub tabs in markup", "warn", "global.js");
		}
	}
	if(tabIndex<0) {
		//no tabs on this page
		//alert('no top tabs');
		var arrPageMenu = Dom.getElementsByClassName  ('page_nav_list' , 'ul' , 'content');
		var arrPagesInMenu = Dom.getElementsBy(function() { return true;} , 'li' , arrPageMenu[0]);
		//Log(arrPagesInMenu);
		//Log(arrPagesInMenu[pageIndex].innerHTML);
		if(pageIndex>=0 && pageIndex < arrPagesInMenu.length) {
			//clear the on state for all pages in menu
			for(pageIter=0;pageIter<arrPagesInMenu.length;pageIter++) {
				Dom.removeClass(arrPagesInMenu[pageIter],'on');
			}
			//set the class for the page navigation to on
			Dom.addClass(arrPagesInMenu[pageIndex],'on');
		}
	} else {
		var arrTabMenu = Dom.getElementsByClassName  ('tab_menu' , 'ul' , 'content');
		var arrTabsInMenu = Dom.getElementsBy(function() { return true;} , 'li' , arrTabMenu[0]);
		if(tabIndex>=0 && tabIndex < arrTabsInMenu.length) {
			//Log(arrTabsInMenu[tabIndex].id);
			var arrAnchors = Dom.getElementsBy(function() { return true;} , 'a' , arrTabsInMenu[tabIndex]);
			topTab(arrAnchors[0]);

			var arrPageMenu = Dom.getElementsByClassName  ('page_nav_list' , 'ul' , arrTabsInMenu[tabIndex].id+'_content');
			//Log(tabIndex);
			//Log(arrTabsInMenu[tabIndex].id+'_content');
			//alert(arrPageMenu[tabIndex].innerHTML);
			var arrPagesInMenu = Dom.getElementsBy(function() { return true;} , 'li' , arrPageMenu[0]);
			//Log(arrPagesInMenu);
			//Log(arrPagesInMenu[pageIndex].innerHTML);
			if(pageIndex>=0 && pageIndex < arrPagesInMenu.length) {
				//Log(arrTabsInMenu[tabIndex].id);
				//clear the on state for all pages in menu
				for(pageIter=0;pageIter<arrPagesInMenu.length;pageIter++) {
					Dom.removeClass(arrPagesInMenu[pageIter],'on');
				}
				//set the class for the page navigation to on
				Dom.addClass(arrPagesInMenu[pageIndex],'on');
			} else {
				//Log("fn: setTabPage - page out of range", "warn", "global.js");
			}
		} else {
			//Log("fn: setTabPage - tab out of range", "warn", "global.js");
		}
	}
}
init = function() {
	bbsc.globals['objPageState'] = '';
	//Log('init');	
	bbsc.preloadImages(); // load common global images.

	//retrieve page tab state.

	if(typeof(strPageConfig)!='undefined' && strPageConfig!='') {
		//strPageConfig is defined.
		//Log(strPageConfig);
		try {
			//Log('try');
			//bbsc.globals['objPageState'] = JSON.parse(strPageConfig);
			bbsc.globals['objPageState'] = YAHOO.lang.JSON.parse(strPageConfig);
			//Log(bbsc.globals['objPageState'],"info","global.js");
			bbsc.setTabPage(bbsc.globals['objPageState'].setTopTab,bbsc.globals['objPageState'].setLeftNav,																			bbsc.globals['objPageState'].setSubTab);
			//alert(bbsc.globals['objPageState'].setLeftNav);
		}
		catch (e) {
		    //Log(e,"error","global.js");
		}

	}
}

/* Cookie Functions */
bbsc.createCookie = function(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

bbsc.readCookie= function(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

bbsc.eraseCookie = function(name) {
	bbsc.createCookie(name,"",-1);
}


bbsc.resellerLocatorFormTemplate = '<div class="row">';
bbsc.resellerLocatorFormTemplate += '<form name="frmLocateReseller" id="frmLocateReseller" action="#ACTION#" method="post"><fieldset class="contact_box">';
bbsc.resellerLocatorFormTemplate += '<ul class="contact_form">';
bbsc.resellerLocatorFormTemplate += '<li><label for="reseller_model_num">'+messages.JS_Enter_Model_Num+'</label><input type="text" name="model" maxlength="40" value="#SKU#" /></li>';

//state filed add 

bbsc.resellerLocatorFormTemplate += '<li><label style="width: 300px;"><b><i>(Select either a state or enter a Zip/Postal Code below)</b></i></label></li>';
bbsc.resellerLocatorFormTemplate += '<li><label> Select State:</label>';
bbsc.resellerLocatorFormTemplate += '<div class="selectView reseller_input">';
bbsc.resellerLocatorFormTemplate += '<select name="states" onchange="Dom.get(\'statesData\').innerHTML=(this.options[this.options.selectedIndex].value); clearZipCodeForResller();" id="states" class="reseller_input navHide">';
bbsc.resellerLocatorFormTemplate += '<option value="" selected="selected">Select</option>';
bbsc.resellerLocatorFormTemplate += '<option value="Alabama(AL)">Alabama(AL)</option><option value="Alaska(AK)">Alaska(AK)</option><option value="Arizona(AZ)">Arizona(AZ)</option><option value="Arkansas(AR)">Arkansas(AR)</option><option value="California(CA)">California(CA)</option><option value="Colorado(CO)">Colorado(CO)</option><option value="Connecticut(CT)">Connecticut(CT)</option><option value="Delaware(DE)">Delaware(DE)</option><option value="District of Columbia(DC)">District of Columbia(DC)</option><option value="Florida(FL)">Florida(FL)</option><option value="Georgia(GA)">Georgia(GA)</option><option value="Hawaii(HI)">Hawaii(HI)</option><option value="Idaho(ID)">Idaho(ID)</option><option value="Illinois(IL)">Illinois(IL)</option><option value="Indiana(IN)">Indiana(IN)</option><option value="Iowa(IA)">Iowa(IA)</option><option value="Kansas(KS)">Kansas(KS)</option><option value="Kentucky(KY)">Kentucky(KY)</option><option value="Louisiana(LA)">Louisiana(LA)</option>';
bbsc.resellerLocatorFormTemplate += '<option value="Maine(ME)">Maine(ME)</option><option value="Maryland(MD)">Maryland(MD)</option><option value="Massachusetts(MA)">Massachusetts(MA)</option><option value="Michigan(MI)">Michigan(MI)</option><option value="Minnesota(MN)">Minnesota(MN)</option><option value="Mississippi(MS)">Mississippi(MS)</option><option value="Missouri(MO)">Missouri(MO)</option><option value="Montana(MT)">Montana(MT)</option><option value="Nebraska(NE)">Nebraska(NE)</option><option value="Nevada(NV)">Nevada(NV)</option><option value="New Hampshire(NH)">New Hampshire(NH)</option><option value="New Jersey(NJ)">New Jersey(NJ)</option><option value="New Mexico(NM)">New Mexico(NM)</option><option value="New York(NY)">New York(NY)</option><option value="North Carolina(NC)">North Carolina(NC)</option><option value="North Dakota(ND)">North Dakota(ND)</option><option value="Ohio(OH)">Ohio(OH)</option><option value="Oklahoma(OK)">Oklahoma(OK)</option><option value="Oregon(OR)">Oregon(OR)</option>';
bbsc.resellerLocatorFormTemplate += '<option value="Pennsylvania(PA)">Pennsylvania(PA)</option><option value="Rhode Island(RI)">Rhode Island(RI)</option><option value="South Carolina(SC)">South Carolina(SC)</option><option value="South Dakota(SD)">South Dakota(SD)</option><option value="Tennessee(TN)">Tennessee(TN)</option><option value="Texas(TX)">Texas(TX)</option><option value="Utah(UT)">Utah(UT)</option><option value="Vermont(VT)">Vermont(VT)</option><option value="Virginia(VA)">Virginia(VA)</option><option value="Washington(WA)">Washington(WA)</option><option value="West Virginia(WV)">West Virginia(WV)</option><option value="Wisconsin(WI)">Wisconsin(WI)</option><option value="Wyoming(WY)">Wyoming(WY)</option>';
bbsc.resellerLocatorFormTemplate += '</select>';
bbsc.resellerLocatorFormTemplate += '<div id="statesData" class="selectValue reseller_input"></div></div></li>';
bbsc.resellerLocatorFormTemplate += '<li><label><b>OR</b></label></li>';


bbsc.resellerLocatorFormTemplate += '<li ><label for="zipcode">'+messages.JS_Zip_Code+'</label><input type="text" name="zipCode" value="" maxlength="5" class="zip_code" /></li>';
bbsc.resellerLocatorFormTemplate += '<li><label for="mileageRadius">'+messages.JS_Mileage+'</label>';
bbsc.resellerLocatorFormTemplate += '<div class="selectView reseller_input">';
bbsc.resellerLocatorFormTemplate += '<select name="mileage" onchange="Dom.get(\'selectRadius\').innerHTML=(this.options[this.options.selectedIndex].value);" class="reseller_input">';
bbsc.resellerLocatorFormTemplate += '<option value="" selected="selected">Select</option>';
bbsc.resellerLocatorFormTemplate += '<option value="10">'+messages.JS_Mileage_10+'</option>';
bbsc.resellerLocatorFormTemplate += '<option value="25">'+messages.JS_Mileage_25+'</option>';
bbsc.resellerLocatorFormTemplate += '<option value="50">'+messages.JS_Mileage_50+'</option>';
bbsc.resellerLocatorFormTemplate += '<option value="100">'+messages.JS_Mileage_100+'</option>';
bbsc.resellerLocatorFormTemplate += '<option value="250">'+messages.JS_Mileage_250+'</option>';
bbsc.resellerLocatorFormTemplate += '<option value="500">'+messages.JS_Mileage_500+'</option>';
bbsc.resellerLocatorFormTemplate += '<option value="1500">'+messages.JS_Mileage_1500+'</option>';
bbsc.resellerLocatorFormTemplate += '</select>';
bbsc.resellerLocatorFormTemplate += '<div id="selectRadius" class="selectValue reseller_input"></div>';
bbsc.resellerLocatorFormTemplate += '</div>';
bbsc.resellerLocatorFormTemplate += '</li>';
bbsc.resellerLocatorFormTemplate += '<li class="req"><label>&nbsp;</label> <a href="#" onclick="if(bbsc.checkForSpecialChars(document.forms[\'frmLocateReseller\'].model.value) && bbsc.checkForSpecialCharsZipState(document.forms[\'frmLocateReseller\'].zipCode.value,document.forms[\'frmLocateReseller\'].states.value) && bbsc.checkForSpecialCharsMileageState(document.forms[\'frmLocateReseller\'].mileage.value,document.forms[\'frmLocateReseller\'].states.value)){document.forms[\'frmLocateReseller\'].submit();}" class="btn submit_form">'+messages.JS_Submit+'</a> <a href="javascript:;" onclick="document.forms[\'frmLocateReseller\'].reset();Dom.get(\'selectRadius\').innerHTML=\'\';" class="btn clear_form">'+messages.JS_Clear+'</a></li>';
bbsc.resellerLocatorFormTemplate += '</ul>';
bbsc.resellerLocatorFormTemplate += '</fieldset><input type="hidden" name="breadCrumbString" value="#breadCrumb#" /><input type="hidden" name="URL" value="#URL#" /> <input type="hidden" name="modelPrice" value="#modelPrice#" /> <input type="hidden" name="omniturePageName" value="#omniturePageName#" /></form>';
bbsc.resellerLocatorFormTemplate += '</div>';

bbsc.resellorLocatorRPCURL = "";
bbsc.resellorLocatorBreadCrumb = "";
bbsc.URL = "";
bbsc.modelPrice = "";
bbsc.omniturePageName = "";
bbsc.resellerLocatorPanel = null;
//function expects 5 arguments
//arg 1 = sku ID
//arg 2 = form action url string
//arg 3 = breadcrumb
//arg 4 = URL
//arg 5 = modelPrice
//arg 6 = omniturePageName.
//arg 7 = context object where the panel will be relative to.



bbsc.resellerLocator = function() {
	var skuIn = arguments[0];
	bbsc.resellorLocatorRPCURL = arguments[1];
	bbsc.resellorLocatorBreadCrumb = arguments[2];
	bbsc.URL = arguments[3];
	bbsc.modelPrice = arguments[4];
	bbsc.omniturePageName = arguments[5];
	var contextElement = arguments[6].parentNode;
	//Log('sku: '+skuIn+' context: '+contextElement);
	if(Util.isString(skuIn) && Util.isObject(contextElement)  && Util.isString(bbsc.resellorLocatorRPCURL)) {
		bbsc.resellerLocatorFormTemplate = bbsc.resellerLocatorFormTemplate.replace('#SKU#',skuIn);
		bbsc.resellerLocatorFormTemplate = bbsc.resellerLocatorFormTemplate.replace('#ACTION#',bbsc.resellorLocatorRPCURL);
		bbsc.resellerLocatorFormTemplate = bbsc.resellerLocatorFormTemplate.replace('#breadCrumb#',bbsc.resellorLocatorBreadCrumb);
		bbsc.resellerLocatorFormTemplate = bbsc.resellerLocatorFormTemplate.replace('#URL#',bbsc.URL);
		bbsc.resellerLocatorFormTemplate = bbsc.resellerLocatorFormTemplate.replace('#modelPrice#',bbsc.modelPrice);
		bbsc.resellerLocatorFormTemplate = bbsc.resellerLocatorFormTemplate.replace('#omniturePageName#',bbsc.omniturePageName);
		bbsc.resellerLocatorPanel = new YAHOO.widget.Panel("resellerLocatorPanel", { width:"380px", visible:false, draggable:false, close:true } );
		bbsc.resellerLocatorPanel.setHeader("Locate a Reseller");
		bbsc.resellerLocatorPanel.setBody(bbsc.resellerLocatorFormTemplate);
		bbsc.resellerLocatorPanel.render(contextElement);
		bbsc.resellerLocatorPanel.show();
	} else {
		//Log('invalid input parameters to fn: resellerLocator');
	}
}

bbsc.arrImagesPreLoad = [
				  '/bbsccms/app/images/global/icn_close.gif',
				  '/bbsccms/app/images/buttons/btn_submit_form.gif',
  			  	  '/bbsccms/app/images/buttons/btn_clear_form.gif'
				  ];

bbsc.preloadImages = function() {
	 // counter
     var i = 0;
     // create object
     // set image list
     images = new Array();
	 var iter=0;
	 for(iter=0;iter<bbsc.arrImagesPreLoad.length;iter++) {
		imageObj = new Image();
		imageObj.src=bbsc.arrImagesPreLoad[iter];
     	images[iter]=imageObj;     	
	 }
};
// Browser-compat onload function init call.
if (window.addEventListener)
window.addEventListener("load", init, false)
else if (window.attachEvent)
window.attachEvent("onload", init)
else if (document.getElementById)
window.onload=init;

bbsc.goCompare = function(urlString) {
	if(bbscProduct.compare.arrCompareItems!=""){
		// Means that we have some products
	    var iChars = "!@#$%^()[]\';{}|<>";
		var isError = false;
		for (var i = 0; i < urlString.length; i++) {
		  	if (iChars.indexOf(urlString.charAt(i)) != -1) {
		  		alert (messages.JS_Invalid_Comparison);
			  	isError = true;
			  	break;
		  	}
		}		
		if(!isError){
			setTimeout('window.location.href="'+urlString+'"',0);
		}
    }
}




bbsc.checkForSpecialChars = function(formValue){
  var iChars = "!@#$%^&*()+=[]\';,.{}|\":<>?";
  for (var i = 0; i < formValue.length; i++) {
  	if (iChars.indexOf(formValue.charAt(i)) != -1) {
  		alert (messages.JS_Special_Characters);
	  	return false;
  	}
  }
  if(formValue.length < 1 || formValue==""){
  		alert (messages.JS_Blank_Field);
	  	return false;
  }
  return true;
}

function changeOnTop() {
	var mylist=document.getElementById("select_dropdown");
	document.getElementById("select_on_top_text").firstChild.nodeValue = mylist.options[mylist.selectedIndex].text;
}


bbsc.checkForSpecialCharsZipState = function(formValueZip,formValueState){
var iChars = "!@#$%^&*()+=[]\';,.{}|\":<>?";
for (var i = 0; i < formValueZip.length; i++) {
if (iChars.indexOf(formValueZip.charAt(i)) != -1) {
alert (messages.JS_Special_Characters);
return false;
}
}
if(formValueState==0){
	if(formValueZip.length < 1 || formValueZip==""){
	alert ("Please select either a state or enter a Zip/Postal Code");
	return false;
	}
}
return true;
} 

bbsc.checkForSpecialCharsMileageState = function(formValueMileage,formValueState){
if(formValueState==0){
	if(formValueMileage.length < 1 || formValueMileage==""){
	alert ("Please select mileage radius");
	return false;
	}
}
return true;
} 



function checkEnter(e){ //e is event object passed from function invocation
	//alert('here');
	var characterCode; //literal character code will be stored in this variable
 
	if(e && e.which){ //if which property of event object is supported (NN4)
		e = e;
		characterCode = e.which; //character code is contained in NN4's which property
	} else{
		e = event;
		characterCode = e.keyCode; //character code is contained in IE's keyCode property
	}
	if(event.keyCode == 13){
		return validateKeyword(document.forms['topSearchSiteForm'])
	}
	else{
		return true;
	}
 
}


function clearZipCodeForResller()
{
document.forms['frmLocateReseller'].zipCode.value = "";
} 
