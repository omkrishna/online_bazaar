YAHOO.namespace('sony.bbsc.product');
var bbscProduct = YAHOO.sony.bbsc.product;
var Dom = YAHOO.util.Dom;
// product detail image gallery
function productGallery(obj) {
		counter = 0;
		var thisImg = obj.parentNode.id;
		var ImgName = obj.parentNode.parentNode.className;
		var numOfImg = getNumberOfImg(obj);
		hideAllImg(ImgName, numOfImg);
		showImg(thisImg);

	}
		function getNumberOfImg(obj) {
			ImgAry = obj.parentNode.parentNode.getElementsByTagName('li');
			return ImgAry.length;
		}

		function hideAllImg(ImgName, numOfImg) {
			var imgMain;
			var imgContainer;
			for (i=1;i<numOfImg+1;i++) {
				imgMain = 'product' + i;
				if(document.getElementById(imgMain) != null){
					imgContainer = imgMain + '_large';
					document.getElementById(imgMain).className = '';
					document.getElementById(imgContainer).className = 'product-img';
				}
			}

		}
		function showImg(thisImg) {
			var imgMain = thisImg;
			var imgContainer = imgMain + '_large';
			document.getElementById(imgMain).className = 'show';
				if(document.getElementById(imgContainer) != null){
					document.getElementById(imgContainer).className = document.getElementById(imgContainer).className + ' show';
				}
		}
		
		
/***
function imgOpen(url)
{
	var imageWindow;
	imageWindow=window.open(url,'name','width=600,height=400,resizable');
	if (window.focus) {imageWindow.focus()}
}
****/

var AutoClose = true;
bbscProduct.assetPanel = "";
function imgOpen(imageURL,imageTitle){
	//alert(Util.isObject(bbscProduct.assetPanel));
	if(!Util.isObject(bbscProduct.assetPanel)) {
		//alert('create panel');
		bbscProduct.assetPanel = new YAHOO.widget.SimpleDialog('closeUpView',   
			{  
	           close:true,  
	           draggable:false,  
	           zindex:120,
			   x:100,
	           modal:true, 
	           visible:false,
			   width:620,
			   context:['content','tl','tl']
	         }); 
		bbscProduct.assetPanel.render('wrapper'); 
	};
	bbscProduct.assetPanel.setHeader(imageTitle); 
	bbscProduct.assetPanel.setBody('<p><img src="'+imageURL+'" /></p>'); 
	Event.addListener('closeUpView','click',bbscProduct.assetPanel.hide,bbscProduct.assetPanel,true);	
	Dom.setStyle('closeUpView','left','180px');
	Dom.setStyle('closeUpView','top','10px');	
	bbscProduct.assetPanel.show();
}


 