YAHOO.namespace('sony.bbsc.subcat');
YAHOO.namespace('sony.bbsc.product');
YAHOO.namespace('sony.bbsc.product.compare');
var bbscSubcat = YAHOO.sony.bbsc.subcat;
var bbscProduct = YAHOO.sony.bbsc.product;
var Dom = YAHOO.util.Dom;

/* =Pruduct Comparison */

//array of product skus for comparison
bbscProduct.compare.strCookieName = 'bbscCompareCookie';
bbscProduct.compare.arrCompareItems = new Array();
bbscProduct.compare.maxCompareItems = 5;
bbscProduct.compare.compareDialog = null;

//restore compare data on page load
String.prototype.XSSReplace = function(argReplace){
	regex = /(\(|\)|\,|\"|\')/g;
	strtxt = this.replace(regex,(argReplace === undefined ? ' ' : argReplace)); 
	
	if(strtxt.indexOf("\\") >-1){
	  return("DOES_NOT_EXIST");	
	}
	if(strtxt.indexOf("&")>-1){
	  return("DOES_NOT_EXIST");	
	}
	if(strtxt.indexOf("#")>-1){
	  return("DOES_NOT_EXIST");	
	}
	if(strtxt.indexOf("&")>-1){
	 return("DOES_NOT_EXIST");	
	}
return(strtxt);
}


bbscProduct.compare.saveData = function() {		
	bbsc.eraseCookie(bbscProduct.compare.strCookieName);
	this.obj = bbscProduct.compare.arrCompareItems;
	for (var key in this.obj) {
		if (this.obj.hasOwnProperty(key)){
			this.obj[key] = this.obj[key].XSSReplace();
		}
	}
	bbsc.createCookie(bbscProduct.compare.strCookieName,Util.JSON.stringify(bbscProduct.compare.arrCompareItems));
}
bbscProduct.compare.restoreData = function() {
	var cookieData = bbsc.readCookie(bbscProduct.compare.strCookieName);
	var restoredData;
	if(cookieData!=null) {
		Log('fn:restoreData cookieData= '+cookieData);
		restoredData = Util.JSON.parse(cookieData);	
		for (var key in restoredData) {
			if (restoredData.hasOwnProperty(key)){
				restoredData[key] = restoredData[key].XSSReplace();
			}
		}
		Log('fn:restoreData restoredDatlen= '+restoredData.length);
		bbscProduct.compare.arrCompareItems= restoredData;
		bbscProduct.compare.applyCheck(bbscProduct.compare.arrCompareItems);
		if(bbscProduct.compare.arrCompareItems.length>0) {
			bbscProduct.compare.panelShow();
		}
	} else {
		Log('fn:restoreData NO COOKIE');
		bbscProduct.compare.arrCompareItems = new Array;
	}
	
}
Event.onDOMReady(bbscProduct.compare.restoreData);
bbscProduct.compare.panelShow = function() {
	Log('panelShow');
	var liTemplate = '<li><a class="check" href="javascript:;" onclick="bbscProduct.compare.removeSku(\'#SKU_VAL#\');">#SKU#</a></li>';
	var listInnerHTML = "";
	if(Dom.hasClass('compare_list_wrapper','off') || !Dom.hasClass('compare_list_wrapper','show')) {
		Dom.removeClass('compare_list_wrapper','off');
		Dom.addClass('compare_list_wrapper','show');
	}
	for(eachIter=0;eachIter<bbscProduct.compare.arrCompareItems.length;eachIter++) {
		var liTemp =  liTemplate.replace("#SKU#", bbscProduct.compare.arrCompareItems[eachIter]);
		liTemp = liTemp.replace("#SKU_VAL#", bbscProduct.compare.arrCompareItems[eachIter]);
		listInnerHTML += liTemp;	
	}
	Dom.get('product_list_ul').innerHTML = listInnerHTML;	
}
bbscProduct.compare.panelHide = function() {
	Log('panelHide');
	if(Dom.hasClass('compare_list_wrapper','show') || !Dom.hasClass('compare_list_wrapper','off')) {
		Dom.removeClass('compare_list_wrapper','show');
		Dom.addClass('compare_list_wrapper','off');
	}
}
bbscProduct.compare.clearAll = function() {
	bbscProduct.compare.arrCompareItems = new Array;
	bbscProduct.compare.arrIndexOfProd = new Array;
	Dom.get('product_list_ul').innerHTML = '';	
	bbscProduct.compare.uncheckAllBoxes();	
	bbscProduct.compare.panelHide();	
	bbsc.eraseCookie(bbscProduct.compare.strCookieName);	
	bbscProduct.compare.saveData();
}
bbscProduct.compare.uncheckAllBoxes = function() {
	var arrCheckboxes = Dom.getElementsByClassName('compare_checkbox','input', 'wrapper');
	var nodeParent;
	var checkboxObj;
	for(iterCheck=0;iterCheck<arrCheckboxes.length;iterCheck++) {
		checkboxObj = arrCheckboxes[iterCheck];
		nodeParent = checkboxObj.parentNode;
		if(checkboxObj.checked) { Dom.get(checkboxObj).checked = false;}	
			Dom.removeClass(nodeParent,'checkTrue');
			Dom.addClass(nodeParent,'checkFalse');	
	}
}
bbscProduct.compare.removeSku = function() {
	Log(arguments[0]);	
	//bbscProduct.compare.applyCheck(arguments[0]);
	var arrCheckboxes = Dom.getElementsByClassName('compare_checkbox','input', 'wrapper');
	var checkboxObj;
	var nodeParent;	
	for(iterCheck=0;iterCheck<arrCheckboxes.length;iterCheck++) {
		checkboxObj = arrCheckboxes[iterCheck];
		nodeParent = checkboxObj.parentNode;		
		if(checkboxObj.id == arguments[0]) {
			checkboxObj.checked = false;
			bbscProduct.compare.checkbox(checkboxObj); 		
			return true;
		}
	}
	bbscProduct.compare.arrCompareItems.splice(bbscProduct.compare.arrCompareItems.indexOf(arguments[0]),1);	
	bbscProduct.compare.panelShow();
	bbscProduct.compare.saveData();		
}

bbscProduct.compare.removeSkuFromProductDetail = function() {
	Log(arguments[0]);	
	//bbscProduct.compare.applyCheck(arguments[0]);
	var arrCheckboxes = Dom.getElementsByClassName('compare_checkbox','input', 'wrapper');
	var checkboxObj;
	var nodeParent;	
	for(iterCheck=0;iterCheck<arrCheckboxes.length;iterCheck++) {
		checkboxObj = arrCheckboxes[iterCheck];
		nodeParent = checkboxObj.parentNode;		
		if(checkboxObj.id == arguments[0]) {
			//checkboxObj.checked = false;
			bbscProduct.compare.checkboxButton(checkboxObj); 		
			return true;
		}
	}
	bbscProduct.compare.arrCompareItems.splice(bbscProduct.compare.arrCompareItems.indexOf(arguments[0]),1);	
	bbscProduct.compare.panelShow();
	bbscProduct.compare.saveData();		
}

bbscProduct.compare.removeSkuFromProductCompare = function() {
	Log(arguments[0]);	
	bbscProduct.compare.arrCompareItems.splice(bbscProduct.compare.arrCompareItems.indexOf(arguments[0]),1);	
	bbscProduct.compare.saveData();		
}
//expects an array of strings (skus) or a single string(sku) as argument.
bbscProduct.compare.applyCheck = function() {
	var arrSkus = arguments[0];
	var arrCheckboxes = Dom.getElementsByClassName('compare_checkbox','input', 'wrapper');
	var nodeParent;
	var checkboxObj;
	for(iterCheck=0;iterCheck<arrCheckboxes.length;iterCheck++) {
		checkboxObj = arrCheckboxes[iterCheck];
		nodeParent = checkboxObj.parentNode;
		//alert(checkboxObj.id);
		if(arrSkus.indexOf(checkboxObj.id)>-1) {			
			if(!checkboxObj.checked) 	{ 
				Dom.get(checkboxObj).checked = true;
				}	
			Dom.removeClass(nodeParent,'checkFalse');
			Dom.addClass(nodeParent,'checkTrue');	
		}
	}
	
}
bbscProduct.compare.checkbox = function() {

	var checkboxObj = arguments[0];
	//alert('called'+ checkboxObj.checked);
	Log('compare checkbox: '+checkboxObj.id);
	var nodeParent = checkboxObj.parentNode;
	if(checkboxObj.checked) {
		Log('checbox.checked is true');
		Dom.removeClass(nodeParent,'checkFalse');
		Dom.addClass(nodeParent,'checkTrue');
		if(!bbscProduct.compare.selectForCompare(checkboxObj.id,checkboxObj.checked)) {
			if(checkboxObj.checked) { Dom.get(checkboxObj).checked = false;}	
			Dom.removeClass(nodeParent,'checkTrue');
			Dom.addClass(nodeParent,'checkFalse');	
		}	
	} else {
		Log('uncheck: '+checkboxObj.id);
		Dom.removeClass(nodeParent,'checkTrue');
		Dom.addClass(nodeParent,'checkFalse');
		bbscProduct.compare.selectForCompare(checkboxObj.id,false);		
	}
		if(bbscProduct.compare.arrCompareItems.length>0) {
			bbscProduct.compare.panelShow();
		} else {
			bbscProduct.compare.panelHide();
		}
	bbscProduct.compare.saveData();	
}

bbscProduct.compare.checkboxButton = function() {

	var checkboxObj = arguments[0];
	//alert('called'+ checkboxObj.checked);
	Log('compare checkbox: '+checkboxObj.id);
	if(!checkboxObj.checked) 	{ 
		Dom.get(checkboxObj).checked = true;
	}
	var nodeParent = checkboxObj.parentNode;
	if(checkboxObj.checked) {
		Log('checbox.checked is true');
		Dom.removeClass(nodeParent,'checkFalse');
		Dom.addClass(nodeParent,'checkTrue');
		if(!bbscProduct.compare.selectForCompare(checkboxObj.id,checkboxObj.checked)) {
			
		}	
	} else {
		Log('uncheck: '+checkboxObj.id);
		bbscProduct.compare.selectForCompare(checkboxObj.id,false);		
	}
		if(bbscProduct.compare.arrCompareItems.length>0) {
			bbscProduct.compare.panelShow();
		} else {
			bbscProduct.compare.panelHide();
		}
	bbscProduct.compare.saveData();	
}


//function bbscProduct.selectForCompare(sku,boolean);
//arg 1 = sku: string
//arg 2 = add or remove:  boolean   true = select, false = remove, null =select
//returns true if sucessfull add or remove
bbscProduct.compare.selectForCompare = function() {
	var prodCompare = arguments[0];
	var boolAddRemove = arguments[1];
	if(typeof(boolAddRemove)=='undefined' || boolAddRemove == true) {
		//select the product	
		//check for max products
		if(bbscProduct.compare.arrCompareItems.length == bbscProduct.compare.maxCompareItems) {
			Log('too many!');
			if(Util.isObject(bbscProduct.compare.compareDialog)) {
				bbscProduct.compare.compareDialog.show();
			} else {
				bbscProduct.compare.compareDialogInit();
				bbscProduct.compare.compareDialog.show();
			}
			return false;
		} else 
		if(bbscProduct.compare.arrCompareItems.indexOf(prodCompare)<0) {
			//does not already exist in compare list
			var arrCompareItemsIndex = bbscProduct.compare.arrCompareItems.length;
			//add the item to the compare list
			bbscProduct.compare.arrCompareItems[arrCompareItemsIndex] = prodCompare;	
			return true;
		} else {
			//product exsists in list	
			Log('prod exists');
			return true;
		}
	} else {
		Log('remove'+prodCompare);
		//remove the product
		//remove the product based on its indexed.
		Log("length pre:"+bbscProduct.compare.arrCompareItems.length);
		if(bbscProduct.compare.arrCompareItems.indexOf(prodCompare) != -1){
			bbscProduct.compare.arrCompareItems.splice(bbscProduct.compare.arrCompareItems.indexOf(prodCompare),1);
		}
		Log("length post:"+bbscProduct.compare.arrCompareItems.length);		
		return true;
	}	
}

bbscProduct.compare.compareDialogInit = function() {
		bbscProduct.compare.compareDialog = new YAHOO.widget.SimpleDialog("dialogCompareProducts", { 
		width: "40em", 
		fixedcenter:true,
		zIndex:10000,
		modal:true,
		close:true,
	    visible:false,
		draggable:false });
	bbscProduct.compare.compareDialog.setHeader('<a>Alert</a>');
	bbscProduct.compare.compareDialog.setBody('Only 5 products can be compared at one time.<br/>Please remove one of the selected items in order to conduct comparison.');	
	bbscProduct.compare.compareDialog.setFooter('<p><a class="btn continue">Continue</a></p>');	
	bbscProduct.compare.compareDialog.render('wrapper');
	//add a listener to the dialog so it will close on click of the simple dialog.
	Event.addListener('dialogCompareProducts','click',bbscProduct.compare.compareDialog.hide,bbscProduct.compare.compareDialog,true);
}
/*
    <!-- Markup for Overlays on this page-->
   	<div id="dialogCompareProducts">
       	<div class="hd">
             Alert
        </div>
        <div class="bd">
             <p>You can only add 5 products for comparison.</p>
        </div>
    </div>
*/	