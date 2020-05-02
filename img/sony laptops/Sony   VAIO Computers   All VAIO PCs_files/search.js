YAHOO.namespace('sony.bbsc.search');
var bbscSearch = YAHOO.sony.bbsc.search;

//object to reference an overlay panel.
bbscSearch.moreDimensionsPanel = null;
bbscSearch.maxCategories = 5;
bbscSearch.moreDimensionsPanelhideHandler = function() {
	Dom.setStyle('moreDimensionsPanel','display','none');	
	}
bbscSearch.moreDimensions = function() {
	var obj = arguments[0];	
	var thisLi = obj.parentNode;	
	//alert(thisLi.innerHTML);
	var moreDimElement = (Dom.getElementsByClassName('panel','div',thisLi))[0];
	//retrieve the filter element contained within the list element.
	
	//alert(moreDimElement.innerHTML);
	if(!Util.isObject(bbscSearch.moreDimensionsPanel)) {
		bbscSearch.moreDimensionsPanel = new YAHOO.widget.Panel("moreDimensionsPanel", { 
			width: "20em", 
			zIndex:130,
			//fixedcenter:true,	
			close:true,
		    visible:false,
			//context:['wrapper',"bl","br"],
			draggable:false });
	};
	bbscSearch.moreDimensionsPanel.setBody(moreDimElement.innerHTML);	
	Dom.setStyle(moreDimElement,'display','none');
	//bbscSearch.moreDimensionsPanel.cfg.setProperty("context",['wrapper',"bl","br"]); 
	bbscSearch.moreDimensionsPanel.render(thisLi);
	//var closeElement = Dom.getElementsByClassName('container-close','span','moreDimensionsPanel')[0];
	//Event.addListener(closeElement, "click", bbscSearch.moreDimensionsPanel.hide, bbscSearch.moreDimensionsPanel, true); 	
	//Event.addListener(closeElement, "click", bbscSearch.moreDimensionsPanelhideHandler);

	//Dom.setStyle('moreDimensionsPanel','display','block');		

	bbscSearch.moreDimensionsPanel.show();
}

bbscSearch.matchingCategoriesDiv = null;
bbscSearch.marchingCategoriesListCount = null;
bbscSearch.matchingCategoriesListUL = null;
bbscSearch.matchingCategoriesList = null;
bbscSearch.matchingCategoriesListOff = null;
bbscSearch.matchingCategoriesListLength = null;
bbscSearch.matchingCategoriesExpandAction = null;
bbscSearch.matchingCategoriesCollapseAction = null;
bbscSearch.matchingCategoriesInit = function() {
	bbscSearch.matchingCategoriesDiv = Dom.getElementsByClassName('search_categories','div','wrapper')[0];
	
	//alert(bbscSearch.matchingCategories.innerHTML);
	bbscSearch.marchingCategoriesListCount	= Dom.getElementsByClassName('listCount','span',bbscSearch.matchingCategoriesDiv)[0];
	bbscSearch.matchingCategoriesListUL = Dom.getElementsByClassName('search_category_list','ul',bbscSearch.matchingCategoriesDiv)[0];
	//alert(bbscSearch.matchingCategoriesListUL.innerHTML);
	bbscSearch.matchingCategoriesList = Dom.getElementsBy(function() {return true;},'li',bbscSearch.matchingCategoriesListUL);
	//alert(bbscSearch.matchingCategoriesList.length);
	bbscSearch.matchingCategoriesListOff = 	Dom.getElementsByClassName('off','li',bbscSearch.matchingCategoriesListUL);
	bbscSearch.matchingCategoriesListLength = bbscSearch.matchingCategoriesList.length;
	bbscSearch.matchingCategoriesExpandAction = Dom.getElementsByClassName('expand','a',bbscSearch.matchingCategoriesDiv)[0];
	//alert(bbscSearch.matchingCategoriesExpandAction);
	bbscSearch.matchingCategoriesCollapseAction = Dom.getElementsByClassName('collapse','a',bbscSearch.matchingCategoriesDiv)[0];
	var numOn = bbscSearch.matchingCategoriesListLength - bbscSearch.matchingCategoriesListOff.length;
	var strListCount = '('+numOn+' of '+bbscSearch.matchingCategoriesListLength+')';
	bbscSearch.marchingCategoriesListCount.innerHTML = strListCount;
	
	Event.addListener(bbscSearch.matchingCategoriesExpandAction,"click",bbscSearch.matchingCategoriesShowAll);
	Event.addListener(bbscSearch.matchingCategoriesCollapseAction,"click",bbscSearch.matchingCategoriesCollapse);	
}

Event.onDOMReady(bbscSearch.matchingCategoriesInit);

bbscSearch.matchingCategoriesShowAll = function() {
	//alert('show all');
	for(listIter=0;listIter<bbscSearch.matchingCategoriesListLength;listIter++) {
		Dom.removeClass(bbscSearch.matchingCategoriesList[listIter],'off');	
	}
	Dom.removeClass(bbscSearch.matchingCategoriesCollapseAction,'off');
	Dom.addClass(bbscSearch.matchingCategoriesExpandAction,'off');
	Dom.setStyle(bbscSearch.matchingCategoriesCollapseAction,'display','block');
	Dom.setStyle(bbscSearch.matchingCategoriesExpandAction,'display','none');
	bbscSearch.matchingCategoriesInit();
}

bbscSearch.matchingCategoriesCollapse = function() {
	//alert('show all');
	for(listIter=0;listIter<bbscSearch.matchingCategoriesListLength;listIter++) {
		if(listIter > (bbscSearch.maxCategories-1)) {
		Dom.addClass(bbscSearch.matchingCategoriesList[listIter],'off');	
		} 
	}
	Dom.addClass(bbscSearch.matchingCategoriesCollapseAction,'off');
	Dom.removeClass(bbscSearch.matchingCategoriesExpandAction,'off');
	Dom.setStyle(bbscSearch.matchingCategoriesCollapseAction,'display','none');
	Dom.setStyle(bbscSearch.matchingCategoriesExpandAction,'display','block');
	bbscSearch.matchingCategoriesInit();
}


bbscSearch.init = function() {
	bbsc.globals['objPageStateSearch'] = '';

	//retrieve configuration string.
	
	if(typeof(strPageConfigSearch)!='undefined' && strPageConfigSearch!='') {
		//strPageConfig is defined.
		Log(strPageConfigSearch);
		try { 
			//bbsc.globals['objPageState'] = JSON.parse(strPageConfig); 
			bbsc.globals['objPageStateSearch'] = YAHOO.lang.JSON.parse(strPageConfigSearch);
			Log(bbsc.globals['objPageStateSearch'],"info","search.js");	
			bbscSearch.maxCategories = bbsc.globals['objPageStateSearch'].defaultMatchingCategories;
		} 
		catch (e) { 
		    Log(e,"error","search.js"); 
			bbscSearch.maxCategories = 5;
		} 		
		
	}
}


bbscSearch.autoCorrect = function(){
	var obj = arguments[0];
	var tabName = "autoCorrectTab";

	var tabID = obj;
	
	for (i=1;i<7;i++) {
		tabItem = tabName + i;
	
		document.getElementById(tabItem).className = '';
	}

	document.getElementById(tabName+tabID).className = 'active';
}

Event.onDOMReady(bbscSearch.init);