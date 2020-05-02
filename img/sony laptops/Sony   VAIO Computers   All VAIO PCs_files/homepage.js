YAHOO.namespace('sony.bbsc.homepage');
var Dom = YAHOO.util.Dom;
var Event = YAHOO.util.Event;
var Util = YAHOO.lang;
var Log = YAHOO.log;
//alias for homepage script namespace
var bbscHome = YAHOO.sony.bbsc.homepage;
//Log("My log message", "error", "script.js"); 
//array to hold carousel objects on homepage
bbscHome.arrCarousels = new Array();
/* begin homepage carousel code */
/** 
 * CUSTOM BUTTON HANDLERS BELOW 
** /
/**
 * Custom button state handler for enabling/disabling button state. 
 * Called when the carousel has determined that the previous button
 * state should be changed.  Specified to the carousel as the configuration 
 * parameter: prevButtonStateHandler
 **/
bbscHome.handlePrevButtonState = function(type, args) {
    var enabling = args[0];
    var leftImage = args[1];
    if(enabling) {
		//display an enabled left arrow image
        Dom.removeClass(leftImage,'left-button-image-disabled');		
        Dom.addClass(leftImage,'left-button-image-enabled');
    } else {
		//display a disabled left arrow image
        Dom.removeClass(leftImage,'left-button-image-enabled');		
        Dom.addClass(leftImage,'left-button-image-disabled');
    }   
};
/**
 * Custom button state handler for enabling/disabling button state. 
 * Called when the carousel has determined that the next button
 * state should be changed.  * Specified to the carousel as the configuration
 * parameter: nextButtonStateHandler
 **/
bbscHome.handleNextButtonState = function(type, args) {
    var enabling = args[0];
	var rightImage = args[1]; 
    if(enabling) {
		//display an enabled right arrow image
        Dom.removeClass(rightImage,'right-button-image-disabled');		
        Dom.addClass(rightImage,'right-button-image-enabled');
    } else {
		//display a disabled right arrow image
        Dom.removeClass(rightImage,'right-button-image-enabled');		
        Dom.addClass(rightImage,'right-button-image-disabled');
    }   
};

//configuration object for all carousel objects
bbscHome.configCarouselObj =   {
            numVisible:        4,
            animationSpeed:    0.75,
            scrollInc:         4,
            navMargin:         14,
            prevElement:     "prev-arrow",
            nextElement:     "next-arrow",
            size:              19,
            prevButtonStateHandler:   bbscHome.handlePrevButtonState,
            nextButtonStateHandler:   bbscHome.handleNextButtonState }
//carousel initialization function, called when dom is ready.		
bbscHome.initCarousels = function() {
	Log("fn: initCarousels","info","homepage.js");
	var strBaseCarouselId = "carousel_";
	var strCarouselElementId = "";
	var carouselNum = "";
	//retrieve all carousels defined in markup, carousel components share the same class name 'carousel-component'
	var arrCarouselElements = Dom.getElementsByClassName('carousel-component','div','content');
	if(arrCarouselElements == ""){
		arrCarouselElements = Dom.getElementsByClassName('carousel-component-small','div','content');
	}
	Log("fn: initCarousels - retrieve Carousels","info","homepage.js");
	//for each carousel component, intialize the carousel and store a reference to it in the carousel array
	for(carouselIter=0;carouselIter<arrCarouselElements.length;carouselIter++) {
		carouselNum=carouselIter+1;
		strCarouselElementId = strBaseCarouselId + carouselNum;
		//check to see if the expected component exists in the markup
		if(Util.isObject(Dom.get(strCarouselElementId))) {
			//remove the text selection behaviour on the carousel element to prevent li highlights
			Dom.get(strCarouselElementId).onselectstart = function () { return false; } // ie
			Dom.get(strCarouselElementId).onmousedown = function () { return false; } // mozilla
			//retrieve all the li elements contained within this carousel component
			var liElements = Dom.getElementsBy  ( function() { return true } , 'li' , Dom.get(strCarouselElementId) );
					//==   Added by VR
					var numVisible = bbscHome.configCarouselObj.numVisible;
					var minSize = (liElements.length <= numVisible) ? numVisible : liElements.length;
					//==   End Added by VR
			
			//create the carousel object
			bbscHome.arrCarousels[carouselIter] = new YAHOO.extension.Carousel(strCarouselElementId, bbscHome.configCarouselObj );		
			//set the prev and next action event listener id.
			bbscHome.arrCarousels[carouselIter].setProperty('prevElement', strCarouselElementId+"_prev-arrow");
			bbscHome.arrCarousels[carouselIter].setProperty('nextElement', strCarouselElementId+"_next-arrow");		
			//set the size of the carousel from the length of the li elements
			
				//==  Modified by VR
			//bbscHome.arrCarousels[carouselIter].setProperty('size', liElements.length);					
				bbscHome.arrCarousels[carouselIter].setProperty('size', minSize);
				//==  End Modified by VR
				
			//create an associative index reference as well
			bbscHome.arrCarousels[strCarouselElementId] = bbscHome.arrCarousels[carouselIter];
			Log("fn: initCarousels - carousel ID "+strCarouselElementId+" initialized","info","homepage.js");			
		} else {
			Log("fn: initCarousels - carousel ID "+strCarouselElementId+"does not exist in markup","warn","homepage.js");	
		}
 		
	}
};
Event.onDOMReady(bbscHome.initCarousels);	

bbscHome.hideAllCarousels = function() {
	Log("fn: hideAllCarousels","info","homepage.js");	
	for(carouselIter=0;carouselIter<bbscHome.arrCarousels.length;carouselIter++) {
		(bbscHome.arrCarousels[carouselIter]).hide();
	}
}

bbscHome.showCarousel = function(isOnClick) {
	Log("fn: showCarousel","info","homepage.js");		
	var tabIn =	arguments[0];
	var isclick = 0;
	if(isOnClick ==1){
		isclick = 1;
	}
	var thisTabName = tabIn.parentNode.id;
	//alert(thisTabName);
	var contentItem = thisTabName + '_content';	
	//alert(contentItem);
	bbscHome.hideAllCarousels();	
	//get the carousel components in this tab.
	var arrCarouselElements = Dom.getElementsByClassName('carousel-component','div',contentItem);
		if(arrCarouselElements == ""){
		arrCarouselElements = Dom.getElementsByClassName('carousel-component-small','div','content');
	}
	//alert(arrCarouselElements[0].id);
	for(carouselIter=0;carouselIter<arrCarouselElements.length;carouselIter++) {
		(bbscHome.arrCarousels[arrCarouselElements[carouselIter].id]).show(isclick);		
		(bbscHome.arrCarousels[arrCarouselElements[carouselIter].id]).calculateSize();	
	}				 
}