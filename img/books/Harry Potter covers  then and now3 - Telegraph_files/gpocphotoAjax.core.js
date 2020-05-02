//*
//***************************************************************************
//*
//* Copyright (C) Telegraph Media Group Ltd.
//* All Rights Reserved. No use, copying or distribution of this work may be
//* made. This notice must be included on all copies, modifications and
//* derivatives of this work.
//*
//****************************************************************************
//* Description:
//*
//* Ajax images gallery
//*
//*
//****************************************************************************
//* Author: J Hutber   Date: 11/12/2011
//*
//* $Id: photoAJax.core.js,v 1 2011/11/12 09:52:09
//*
//* Updates:
//*
//***************************************************************************

//Rebind console to e
if (typeof console == "object" && typeof console.error == "function") {
    function e(msg) {
        console.info(msg);
    }
}

browserTab = document.title;

ajaxPhotos = {};

ajaxPhotos.isLastFrame = false;
ajaxPhotos.lastFrameDisplayed = false;
//ajaxPhotos.idleTime = 0;
ajaxPhotos.imgsToCache=[];
ajaxPhotos.cachedImgs = [];

var onPropertyChangeHadler = function() {
	if (event.propertyName == "title") {
		if (window.attachEvent){
			document.detachEvent("onpropertychange", onPropertyChangeHadler);
			document.title = browserTab;
			document.attachEvent("onpropertychange", onPropertyChangeHadler);
		}
	}
}

ajaxPhotos.init = function () {
   $.ajax({
        url:"?service=jsonPhotoGallery",
        dataType:"json",
        success:onAjaxSuccess,
        async:false,
	 error: function (xhr, ajaxOptions, thrownError) {
         console.log(thrownError);
       }
	    });
    $('.ajaxMe, .mainImageNav, .overflow a').click(ajaxPhotos.doAjax);        
    ajaxPhotos.useKeys(); // Bind events to the arrow keys for navigating
    ajaxPagination.init();
    ajaxPhotos.checkHash();
    ajaxPhotos.currentImgPos = $('#pgnThumbs').find('a.selected').parent().index()+1;
    ajaxPhotos.createImgsObj();
    ajaxPhotos.cacheImages();
    
	if(window.attachEvent){
		document.attachEvent("onpropertychange", onPropertyChangeHadler);
	}
}

function  onAjaxSuccess(data) {
ajaxPhotos.galleryData =  data;
}


/*
   The below function are commented as we are not checking the users idle time as of now.

*/

/*ajaxPhotos.checkIdleTime = function(){
  var currentDoc = $(document);
  ajaxPhotos.idleInterval = setInterval(ajaxPhotos.timerIncrement, 60000); // 1 minute
    currentDoc.mousemove(function (e) {
        ajaxPhotos.idleTime = 0;
    });
    currentDoc.keypress(function (e) {
        ajaxPhotos.idleTime = 0;
    });
}

ajaxPhotos.timerIncrement =  function(){
    ajaxPhotos.idleTime = ajaxPhotos.idleTime + 1; 
    if (ajaxPhotos.idleTime > 1) { 
	ajaxPhotos.cacheImages();	
       clearInterval(ajaxPhotos.idleInterval);
    }
}*/

/*
    The below method 'ajaxPhotos.createImgsObj ' creates an object which conatians all the image urls which has to be cached.This object will be used while caching the images after the image load.

*/

ajaxPhotos.createImgsObj = function(){
  $.each(ajaxPhotos.galleryData,function( key, value ) {
   ajaxPhotos.imgsToCache.push({
                imgPos:value.imgPos,
                url:value.url
            });
  });
}
/*
    The below method 'ajaxPhotos.cacheImages' will cache the next 5 images based on the current image position.

*/
ajaxPhotos.cacheImages = function(){
  for(var i=ajaxPhotos.currentImgPos;i<ajaxPhotos.currentImgPos+5;i++){
    if(i>=ajaxPhotos.imgsToCache.length){break;}
      var cacheImage = document.createElement('img');
      cacheImage.src = ajaxPhotos.imgsToCache[i].url;
      ajaxPhotos.cachedImgs.push(cacheImage);
  }
}

ajaxPhotos.checkHash = function () {
    //have a cheeky little look at the url, if we've got a hash tag then load that boyo up there kido.
    if (location.hash) {
        var withoutHash = location.href.replace('#', '');
        ajaxPhotos.exeAjax(withoutHash + '&service=jsonPhotoGallery');
    }
    else {
    	if ((location.search).indexOf('endScreen') > 0) {
        	ajaxPhotos.isLastFrame = true;
        	//generate the ajax URL
        	ajaxPhotos.exeAjax(location.href + "&service=jsonPhotoGallery");
    	}
    }
}

ajaxPhotos.doAjax = function () {
	if ((location.search).indexOf('endScreen') > 0) {
		document.location.href = this.attr('href');
	}
	else {
    	//set fail safe values to vars
		var me = $(this);
		var currentUrl = me.attr('href').split('=')[1]; //Grab everything after the equals, aka the pid
	    var imageData = ajaxPhotos.galleryData[currentUrl];
            ajaxPhotos.currentImgPos = parseInt(imageData.imgPos);// Garb the current image position
			checkImageAgainstImageClicked = ajaxPhotos.checkImageAgainstImageClicked(currentUrl), //Find out if the current image clicked is the same image as the current image that we are   on.
			ajaxUrl = '?frame=' + currentUrl + '&service=jsonPhotoGallery'; //grab url, removing everything before k
    
		if ((currentUrl != "endScreen" && checkImageAgainstImageClicked) || ajaxPhotos.lastFrameDisplayed == true) {
			ajaxPhotos.lastFrameDisplayed = true;
		} else if (currentUrl == "endScreen") {
			ajaxPhotos.isLastFrame = true;			
		}
            ajaxPhotos.exeAjax(ajaxUrl,imageData);
		//make sure we don't click the link now... there's a good boy
	}
    return false;
}


ajaxPhotos.exeAjax = function(ajaxUrl,imageData) {
    // The json returned is passed into the function
	if(!imageData) return;

    function  onSuccess(data) {
        //$('.ajaxMe img').hide();
        //$('.ajaxMe img').hide("slide", {direction: "left"}, 500);
    	
        // If its the last image, take to galleryEndScreen display functions
        if (ajaxPhotos.isLastFrame == true) {
        	galleryEndScreen.init(data);
        } else {
        	if (ajaxPhotos.lastFrameDisplayed == true) {
        		// Hide Final Frame container if its displayed. Then show image caption and the pagination.
        		$('#relatedGalleriesES, #loading').fadeOut(200, function() {
        			$('#mainImage .caption, #mainImage .ajaxMe,  .viewerHeader, .print, #shareBottom, #pgnThumbs').fadeIn();
        		});
            	ajaxPhotos.lastFrameDisplayed = false;
        	}
            ajaxPhotos.changingAnImage(data);
        	ajaxPhotos.updateGigyaShare(data.frame);
        }
        ajaxAds.changeAds();
        ajaxAds.webTrendsExe(data.frame);
    }

  	// Display loader and make ajax request
   /* $('#loading').fadeIn('fast', function () {
    
    $.ajax({
        url:ajaxUrl,
        dataType:"json",
        success:onSuccess,
        async:false
	    });
    });*/
    
    onSuccess(imageData);
}

ajaxPhotos.checkImageAgainstImageClicked = function (url) {
    var checker = true;
    if (window.location.hash) {
        if (window.location.hash.split('#')[1] == url) {
            checker = false;
        }
    } else {
        if (window.location.search.split('=')[1] == url) {
            checker = false;
        }
    }

    return checker;
}

//Change image's attribute's
ajaxPhotos.changingAnImage = function (data) {

	//update pagination with class of selected
    $('#pgnThumbs li a').removeClass('selected').parent().eq(data.imgPos - 1).children('a').addClass('selected');
    //selectedSet = true;


    //Change all links on page
    ajaxPhotos.changeLinks(data);



    //Have a little cheeky look to see if we should move the pagination
    ajaxPagination.doWeMovePagination();
   
   var image1 = $('.ajaxMe img');
	image1.remove();
	image1.hide();
    $('#loading').show();
	image1.attr('src', data.url).attr('alt', data.imageCurrentAltText);
	$(image1).load(function() {
	   $('#loading').hide();
	   $(".ajaxMe").prepend(image1);
		image1.show();
        ajaxPhotos.cacheImages(); // Stared caching the next 5 images after the loading of current image.
	});
        
    ajaxPhotos.updateHeadline(data);

    $('.caption').html(data.caption + data.copyRight);
    ajaxPhotos.changeUrl(data.imageCurrentAltText, data.frame);
}

ajaxPhotos.updateHeadline = function(data) {
    if (data.theImageHeadline == "") {
    	var fullImageHeadline = data.articleHeadline;
    } else {
    	var fullImageHeadline = data.theImageHeadline + " - "  + data.articleHeadline;
    }    
    
    fullImageHeadline = fullImageHeadline.replace("&lsquo;","\u2018");
    fullImageHeadline = fullImageHeadline.replace("&rsquo;","\u2019");

    $('.tmglSlideshow h1').text(fullImageHeadline);
}

//Move links around
ajaxPhotos.changeLinks = function (data) {
    //So long as the previous frame is not rewrite the back url
//    if (data.previousframe != "")
    $('.mainImageNav').attr('href', 'http://' + window.location.hostname + window.location.pathname + '?frame=' + data.previousframe);
    $('.ajaxMe').attr('href', 'http://' + window.location.hostname + window.location.pathname + '?frame=' + data.nextframe);
    $('.forward').attr('href', 'http://' + window.location.hostname + window.location.pathname + '?frame=' + data.nextframe);

    if(data.previousframe != ''){
    	$('.backward').removeClass('noPrevImg');
    } else {
    	$('.backward').addClass('noPrevImg');
    }

    if(data.nextframe != ''){
    	$('.forward').removeClass('noNextImg');
    } else {
    	$('.forward').addClass('noNextImg');
    }
}

ajaxPhotos.useKeys = function () {

    //bind keyboard buttons to image changing
    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: //left
                $('.mainImageNav:first').click();
                break;
            case 39: //right
                $('.forward').click();
                break;
        }
    });
}

ajaxPhotos.changeUrl = function (altText, frame) {
    if (typeof history.pushState === "function") {
        var stateObj = {frame:frame};
        history.pushState(stateObj, altText, "?frame=" + frame);
    } else {
        window.location.href = '#?frame=' + frame;
    }
}



//test function for the gigya counter
ajaxPhotos.updateGigyaShare = function (frame){
	// Gigya Share Tools - update associated image to new slideshow image
	if (typeof tmg_gigya != 'undefined' && typeof tmg_gigya.useraction != 'undefined' && typeof g_opt_ch != 'undefined') {
		var fullUrl = tmg_gigya.permalink + '?frame=' + frame;
		$("meta[property='og:url']").attr('content',fullUrl);
		$("meta[property='og:url']").attr('content');
		tmg_gigya.useraction.mediaItems = null;
		tmg_gigya.useraction.mediaItems = [];
		tmg_gigya.useraction.setLinkBack(fullUrl);
		tmg_gigya.useraction.addMediaItem({ type: 'image', src: $('.ajaxMe img').attr('src'), href: fullUrl });  // @todo prop()
		tmg_sharebar('shareBottom', g_opt_ch);
	}
}



/***************
 * Pagination
 ***************/

ajaxPagination = {};

ajaxPagination.init = function () {
    ajaxPagination.thumbPreview();
    ajaxPagination.thumbPreviewOut();
    ajaxPagination.bindClicksToPag();
    ajaxPagination.movePagination.init();
    ajaxPagination.doWeMovePagination();
}

var getCurrentItem = function() {
	var currItem = $('#pgnThumbs .pgnBtn a').index($('#pgnThumbs .pgnBtn a.selected'));
	return currItem;
}

//When activated this will move the pagination if we are within the criteria
ajaxPagination.doWeMovePagination = function () {

	curr = getCurrentItem();
    //var curr = $('.overflow li a').index($('#pgnThumbs li a.selected'));

    if (curr <= 16) {
        $('.pagination > a').addClass('disabled');
        ajaxPagination.animatePagination(0);
    } else if (curr > 16 && curr <= 33) {
        $('.pagination > a').removeClass('disabled');
        ajaxPagination.animatePagination("-544px");

    } else if (curr > 33 && curr <= 50) {
        $('.pagination > a').removeClass('disabled');
        ajaxPagination.animatePagination("-1088px");
    }
    else if (curr > 50 && curr <= 60) {
        $('.pagination > a').removeClass('disabled');
        ajaxPagination.animatePagination("-1632px"); 
    }
        ajaxPagination.movePagination.noOfPagi = Math.floor(curr / 17)+1; 
        ajaxPagination.movePagination.refreshPagi();    
}

ajaxPagination.animatePagination = function (leftMargin) {
    $('.pagination ul').stop(true, false).animate({
        marginLeft:leftMargin
    }, {
        duration:800,
        queue:true
    });
};

//Bind click events to the arrows of the pagnination
ajaxPagination.bindClicksToPag = function () {
    $('.overflow + div a, .arrow.right').click(function () {
        ajaxPagination.movePagination.moveForward();
        ajaxPagination.movePagination.refreshPagi();
        savedIndex = getCurrentItem();
        return false;
    });

    $('.pagination > a:first-child, #lessOn').click(function () {
        ajaxPagination.movePagination.moveBackward();
        ajaxPagination.movePagination.refreshPagi();
        savedIndex = getCurrentItem();
        return false;
    });
};

ajaxPagination.movePagination = {
    count:0,
    pages:0,
    noOfPagi:$('.arrow:first').attr('section'),
    leftMargin:0,

    init:function () {
        this.count = $('.overflow li').length;
        this.pages = Math.ceil(this.count / 17);
    },

    animatePagination:function (amount) {
        ajaxPagination.animatePagination(amount);
    },

    moveForward:function () {
        if (this.noOfPagi < this.pages) {
            this.noOfPagi++;

            this.leftMargin = (this.noOfPagi - 1) * -544;

            this.animatePagination(this.leftMargin);
        }

    },

    moveBackward:function () {
        if (this.noOfPagi != 1) {
            this.noOfPagi = this.noOfPagi - 1;

            this.leftMargin = (this.noOfPagi - 1) * -544 + "px";
        }

        this.animatePagination(this.leftMargin);

    },

    refreshPagi:function(){
    	//ajaxPagination.init();
        if (this.noOfPagi < this.pages) {
            $('#moreOn').show();
            $('.arrow.right').removeClass('disabled');
        } else if (this.noOfPagi == this.pages) {
        	$('#moreOn').hide();
              $('.arrow.right').addClass('disabled');
        }

        if(this.noOfPagi == 1){
        	$('#lessOn').hide();
              $('.arrow.right').removeClass('disabled');
              $('.pagination > a:first-child').addClass('disabled');
        } else if(this.noOfPagi > 1) {
        	$('#lessOn').show();
               $('.pagination > a:first-child').removeClass('disabled');
        }

    }
};

ajaxPagination.thumbPreview = function () {
    $('.overflow li a').mouseenter(function () {
        //Grab Photo ID and work out the current slide with the image we want
        var grabImagesframe = $(this).attr('href').split('=')[1]; // Take the part after the 1st =
        
        if(grabImagesframe.indexOf("&") > -1) {
        grabImagesframe = grabImagesframe.substring(0,grabImagesframe.indexOf("&"))
        }
        
        var itsme = $('#pagThumb #pagThumbframe' + grabImagesframe);

        //Which Image Are We On
        var pos = $('.overflow li a').index($(this)[0]);

        //Hide Previous thumbnails
        $('.thumbnailPreview:visible').hide();

        //Show current thumbnail
        itsme.show();

        //set Vars for animtions
        var position = $('.overflow li a').index($('.overflow li a.selected')) / 17;
        position = position.toFixed(1);
        position = position * 2.45;

        var marginleftammount = ((32 * pos)) + position;
        if (pos > 16 && pos < 34) {
            marginleftammount = marginleftammount - 544;
        }
        if (pos > 33 && pos < 51) {
            marginleftammount = marginleftammount - 1088;
        }
        if (pos > 50 && pos < 60) {
            marginleftammount = marginleftammount - 1632;
        }
        if ($('.thumbnailPreview').is(':visible')) {
            $('#pagThumb').stop(true, false).animate({
                marginLeft:marginleftammount
            }, {
                duration:800,
                queue:true
            });
        } else {
            $('#thumbnailPreview').css('marginLeft', marginleftammount);
        }
    });
};


ajaxPagination.thumbPreviewOut = function () {
    $('.overflow').mouseleave(function () {
        $('.thumbnailPreview:visible').fadeOut('fast');
    });
}

/***************
 * Adverts
 ***************/

ajaxAds = {};

ajaxAds.changeAds = function () {

    tmgAds.tile = 0;
    tmgAds.ord = Number(new Date());

    // this is our html that has scripts which do document.write
    var str_html_banner = tmgAdsBuildAdTag("ban", "728x90,468x60", "adj", "", 2);
    var str_html_mpu = tmgAdsBuildAdTag("mpu,hpg", "300x250,300x600", "adj", "", 2);
    var str_html_footer = tmgAdsBuildAdTag("ftr", "1x1", "adj", "", 2);

    $('#banner').writeCapture().html(str_html_banner);
    $('#mpu').writeCapture().html(str_html_mpu);
    $('#ad_footer').writeCapture().html(str_html_footer);
}



ajaxAds.webTrendsExe = function (frame) {

	var tmgWebTrendsCookie = $.cookie("tmg_web_trends");

	if(tmgWebTrendsCookie != null){
		var tmgWebTrendsCookieVals=tmgWebTrendsCookie.split(",");

		for (var i=0;i<tmgWebTrendsCookieVals.length;i++){
			if(tmgWebTrendsCookieVals[i].slice(0, 19) == "meter_viewed_count:"){
				var cnVal=tmgWebTrendsCookieVals[i].substring(19);
			}else if(tmgWebTrendsCookieVals[i].slice(0, 14) == "meter_updated:"){
				var cdVal=tmgWebTrendsCookieVals[i].substring(14);
			}
		}
	}else {
	    var cnVal = $("meta[name='DCSext.cn']").attr('content');
	    var cdVal = $("meta[name='DCSext.cd']").attr('content');
	}

    var current = $('.overflow li a').index($('.overflow li a.selected'));
    var level = $("meta[name='DCSext.Level']").attr('content');
    var galleryType = $("meta[name='DCSext.GalleryType']").attr('content');
    var Content_Type = $("meta[name='DCSext.Content_Type']").attr('content');
    var MLC = $("meta[name='DCSext.MLC']").attr('content');
    var piAndChannel = $("meta[name='DCSext.Channel']").attr('content');
    var articleFirstPublished = $("meta[name='DCSext.articleFirstPublished']").attr('content');
    var articleId = $("meta[name='DCSext.articleId']").attr('content');
    var genre = $("meta[name='DCSext.Genre']").attr('content');
    var category = $("meta[name='DCSext.Category']").attr('content');
    var cfVal = $("meta[name='DCSext.cf']").attr('content');
    var imageNo = (frame == 'endScreen') ? 'endScreen' : Math.ceil(current + 1); 
   

    dcsMultiTrack(
            'DCSext.imageno', imageNo,
            'DCSext.content_type', Content_Type,
            'DCSext.channel', piAndChannel,
            'DCS.wt.pi', piAndChannel,
            'DCSext.gallerytype', galleryType,
            'DCSext.level', level,
            'DCSext.mlc', MLC,
            'DCSext.articlefirstpublished', articleFirstPublished,
            'DCSext.articleid', articleId,
            'DCS.dcsqry', '?frame=' + frame,
            'DCSext.genre', genre,
            'DCSext.category', category,
            'DCSext.cf', cfVal,
            'DCSext.cn', cnVal,
            'DCSext.cd', '0',
            'DCSext.navigation', null
   );


}


/**********************************
 * End Screen (Related Galleries) *
 *********************************/

galleryEndScreen = {};

galleryEndScreen.containerCreated = false;

galleryEndScreen.init = function(data) {
	$('.ajaxMe img').fadeOut(1,function(){
		$('#loading').hide();
	});
	
	if (data) {
		
		galleryEndScreen.changeLinks(data);
		galleryEndScreen.displayContainer(data.sectionName, data.frame);
		galleryEndScreen.loadFilmStrips(data.morePic, data.mostRecent);
		galleryEndScreen.loadOtherGalleries(data.otherGallCont);
		galleryEndScreen.carouselHandlers();
	}
	ajaxPhotos.lastFrameDisplayed = true; 
	ajaxPhotos.isLastFrame = false;
};

galleryEndScreen.changeLinks = function(data) {
	ajaxPhotos.changeUrl('Pic Gallery Final Frame', data.frame);
	if (data.frame == 'endScreen') {
		$('.mainImageNav').attr('href', 'http://' + window.location.hostname + window.location.pathname + '?frame=' + data.lastFrameId);
	}
	else {
		$('.mainImageNav').attr('href', 'http://' + window.location.hostname + window.location.pathname + '?frame=' + data.previousframe);
	}
    $('.ajaxMe').attr('href', 'http://' + window.location.hostname + window.location.pathname + '?frame=' + data.nextframe);
    $('.forward').attr('href', 'http://' + window.location.hostname + window.location.pathname + '?frame=' + data.nextframe);
    
    ajaxPhotos.updateHeadline(data);
}

galleryEndScreen.displayContainer = function(sectionName, frame) {
	var galleriesCont = $('#relatedGalleriesES');
	// Create the container divs for the filmstrips
	if (galleriesCont.length == 0) {
		var relatedGalleriesES = $('<div />', { id: 'relatedGalleriesES', html: '<div class="filmStripCont"></div><div class="otherGallCont"><h5>Other Galleries</h5><ul /></div><a href="https://twitter.com/TelegraphPics" class="twitterTmgPics"><span>Follow TelegraphPics</span></a><div class="cl"></div>', className: 'hidden' }),
			filmStripMorePic = $('<div />', { className: 'filmStrip morePic', html: '<h5>Latest Pictures In </h5><a href="" class="carouselNav rsForward">></a><a href="" class="carouselNav rsBack hidden"><</a><div class="galleryList"><ul /></div><div class="cl"></div>' }),
			filmStripMostRecent = $('<div />', { className: 'filmStrip mostRecent', html: '<h5>Latest Pictures on Telegraph.co.uk</h5><a href="" class="carouselNav rsForward">></a><a href="" class="carouselNav rsBack hidden"><</a><div class="galleryList"><ul /></div>' });
	
		// Insert newly created elements onto the DOM
		$('.ajaxMe').after(relatedGalleriesES);
		filmStripMorePic.find('h5').append(sectionName);
		$('.filmStripCont').append(filmStripMorePic, filmStripMostRecent);

		$('#mainImage .caption, #mainImage .ajaxMe, .viewerHeader, .print, #shareBottom').fadeOut(400, function() {	
			relatedGalleriesES.fadeIn(400);
		});
		galleriesCont = relatedGalleriesES;
		galleryEndScreen.containerCreated = true;
	} else if ((frame == "endScreen") && (galleriesCont.length == 1)) {
		var relatedGalleriesES = galleriesCont,
		filmStripMorePic = $('<div />', { className: 'filmStrip morePic', html: '<h5>Latest Pictures In </h5><a href="" class="carouselNav rsForward">></a><a href="" class="carouselNav rsBack hidden"><</a><div class="galleryList"><ul /></div><div class="cl"></div>' }),
		filmStripMostRecent = $('<div />', { className: 'filmStrip mostRecent', html: '<h5>Latest Pictures on Telegraph.co.uk</h5><a href="" class="carouselNav rsForward">></a><a href="" class="carouselNav rsBack hidden"><</a><div class="galleryList"><ul /></div>' });

		relatedGalleriesES.html('<div class="filmStripCont"></div><div class="otherGallCont"><h5>Other Galleries</h5><ul /></div><a href="https://twitter.com/TelegraphPics" class="twitterTmgPics"><span>Follow TelegraphPics</span></a><div class="cl"></div>');
		relatedGalleriesES.addClass("hidden");
		relatedGalleriesES.css('visibility','');
		
		// Insert newly created elements onto the DOM
		$('.ajaxMe').after(relatedGalleriesES);
		filmStripMorePic.find('h5').append(sectionName);
		$('.filmStripCont').append(filmStripMorePic, filmStripMostRecent);

		$('#mainImage .caption, #mainImage .ajaxMe, .viewerHeader, .print, #shareBottom').fadeOut(400, function() {	
			relatedGalleriesES.fadeIn(400);
		});
		galleryEndScreen.containerCreated = true;
	} else { galleryEndScreen.containerCreated = false; }
	
	// Hide the last image, image caption and the pagination. Then display the Final Frame
	$('#mainImage .caption, #mainImage .ajaxMe, .viewerHeader, .print, #shareBottom').fadeOut(400, function() {	
		galleriesCont.fadeIn(400);
	});
}

galleryEndScreen.loadFilmStrips = function(morePic, mostRecent) {
	if (galleryEndScreen.containerCreated == true) {
		// Display Film Strip 1
		for (i=0; i < morePic.length; i++) {
			if (!$.isEmptyObject(morePic[i])) {
				var filmStrip1 = $('<li />', {
					html: '<div class="relatedSlideshow"><a class="crop" href="'+ morePic[i].articleUrl +'">'
						+'<img src="'+ morePic[i].imgUrl +'" width="140"  alt="'+ morePic[i].altText +'" /></a>'
						+'<a href="'+ morePic[i].articleUrl +'" class="rsHeadline">'+ morePic[i].altHeadline +'</a>'
						+'<span>'+ morePic[i].publishDate +'</span></div>'
				});
				$('.morePic ul').append(filmStrip1);
			}
		}
		$('.morePic').after('<div class="cl"></div>');
	
		// Display Film Strip 2
		for (i=0; i < mostRecent.length; i++) {
			if (!$.isEmptyObject(mostRecent[i])) {
				var filmStrip2 = $('<li />', {
					html: '<div class="relatedSlideshow"><a class="crop" href="'+ mostRecent[i].articleUrl +'">'
						+'<img src="'+ mostRecent[i].imgUrl +'" width="140"  alt="'+ mostRecent[i].altText +'" /></a>'
						+'<a href="'+ mostRecent[i].articleUrl +'" class="rsHeadline">'+ mostRecent[i].altHeadline +'</a>'
						+'<span>'+ mostRecent[i].publishDate +'</span></div>'
				});
				$('.mostRecent ul').append(filmStrip2);
			}
		}
		galleryEndScreen.containerCreated == false;
	}
}

galleryEndScreen.loadOtherGalleries = function(otherGalleries) {
	if (galleryEndScreen.containerCreated == true) {
		// Display Other Galleries
		for (i=0; i < otherGalleries.length; i++) {
			if (!$.isEmptyObject(otherGalleries[i])) {
				var otherGal = $('<li />', {
					html: '<a href="'+ otherGalleries[i].linkUrl +'">'+ otherGalleries[i].linkDescription +'</a>'
				});
				$('.otherGallCont ul').append(otherGal);
			}
		}
	}
}

galleryEndScreen.carouselHandlers = function() {
	$('#relatedGalleriesES .carouselNav.rsBack').click(function() {
		return slideGalleries(1, $(this));
	});
	
	$('#relatedGalleriesES .carouselNav.rsForward').click(function() {
		return slideGalleries(-1, $(this));
	});
	
	function slideGalleries(direction, clickedArrow) {
		var ul = clickedArrow.siblings('.galleryList').find('ul'),
			oppositeArrow = clickedArrow.siblings('a'),
			widthOfLi = ul.find('li').first().outerWidth(),
			leftMargin, ulLeftMargin = parseInt(ul.css('marginLeft')), viewingArea = widthOfLi * 4;
		
		if (!ul.is(':animated') && direction == '1') { // Back arrow click
			leftMargin = ulLeftMargin + viewingArea;

			// Toggle display of directional arrows
			if (leftMargin == 0) { 
				clickedArrow.addClass('hidden');
				oppositeArrow.removeClass('hidden');
			} else { 
				clickedArrow.removeClass('hidden'); 
				oppositeArrow.removeClass('hidden'); 
			}
			_animateSlides(ul, leftMargin);
			
		} else if (!ul.is(':animated') && direction == '-1') { // Forward arrow click
			
			// Get total width of ul, subtract the viewingArea (600px) and inverse for negative number
			totalWidthNegative = ((ul.find('li').length * widthOfLi) - viewingArea) * direction;
			
			if (ulLeftMargin > totalWidthNegative) { // If UL left margin is greater.. slide 600px to the left
				ulLeftMargin += viewingArea * direction;
				difference = ulLeftMargin - totalWidthNegative;
				
				// Toggle display of directional arrows
				if (ulLeftMargin == totalWidthNegative || (difference < 600)) {
					clickedArrow.addClass('hidden');
					oppositeArrow.removeClass('hidden');
				} else {
					oppositeArrow.removeClass('hidden');
				}
				_animateSlides(ul, ulLeftMargin)
			}
		}
		return false;
	}
	
	function _animateSlides(ul, newLeftMargin) {
		ul.stop(true, true).animate({'marginLeft': + newLeftMargin});
	}
}

//runs after the shareTools.js script to make visible the permalink
$(document).bind("runPhotoAjax",function(event){  
//Start all functions
ajaxPhotos.init();
$.writeCapture.autoAsync();

});


function disqusComments()
{
	if ($('#disqus_thread').length > 0) {
 
      var dsAcc = $("#disqusAcc").text(); //"telegraphdev";
	  
	  dsCookie = $.cookie('tmg_hashd_3');

      if (dsCookie) {
			dsCookie = dsCookie.replace(/"/g,'');
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';

			script.src = 'http://' + dsAcc + '.disqus.com/remote_auth.js?remote_auth_s3=' + dsCookie;
			head.appendChild(script);
	  }
 
      (function () {
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = 'http://' + dsAcc + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();
 
    }
}

(function()
{
	var links = $("a[href*='disqus_thread']");
	var query = "";
	var blogQuery = "";
	var normal = new Array();
	var normalCounts = new Array();
	var blog = new Array();
	var blogCounts = new Array();

	for(var i = 0; i < links.length; i++) {
		if (links[i].getAttribute('dsqid')) {
			var dsqid = links[i].getAttribute('dsqid');
			if (links[i].className == 'dsqblog') { blogQuery += 'dsqid' + i + '=' + dsqid + '&'; } else { query += 'dsqid' + i + '=' + dsqid + '&'; }
		}
	}
	if (query.length != "" && blogQuery.length != "") {
		$("a[href*='disqus_thread']") && $("a.dsqblog").each(function(i) {
			blog[i] = $(this).attr("href");
			$(this).attr("href","blog_link");
		});
		loadScript("http://telegraphuk.disqus.com/get_num_replies_from_dsqid.js?" + query, function() {
			$("a[href*='disqus_thread']").not(".dsqblog").each(function(i) {
				normal[i] = $(this).attr("href");
				normalCounts[i] = $(this).html();
				$(this).attr("href","normal_link");
			});

			$("a[href*='blog_link']").each(function(i) { $(this).attr("href",blog[i]); });

			loadScript("http://telegraphblogs.disqus.com/get_num_replies_from_dsqid.js?" + blogQuery, function() {
				$("a[href*='normal_link']").each(function(i) { $(this).attr("href",normal[i]); });
			});
		});
	} else {
		document.write('<script charset="utf-8" type="text/javascript" src="http://telegraphuk.disqus.com/get_num_replies_from_dsqid.js?' + query + '"></' + 'script>');
	}
})();

(function($) {
    
    $.belowthefold = function(element, settings) {
        var fold = $(window).height() + $(window).scrollTop();
        return fold <= $(element).offset().top - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var top = $(window).scrollTop();
        return top >= $(element).offset().top + $(element).height() - settings.threshold;
    };
    
    $.rightofscreen = function(element, settings) {
        var fold = $(window).width() + $(window).scrollLeft();
        return fold <= $(element).offset().left - settings.threshold;
    };
    
    $.leftofscreen = function(element, settings) {
        var left = $(window).scrollLeft();
        return left >= $(element).offset().left + $(element).width() - settings.threshold;
    };
    
    $.inviewport = function(element, settings) {
        return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };
    
    $.extend($.expr[':'], {
        "below-the-fold": function(a, i, m) {
            return $.belowthefold(a, {threshold : 0});
        },
        "above-the-top": function(a, i, m) {
            return $.abovethetop(a, {threshold : 0});
        },
        "left-of-screen": function(a, i, m) {
            return $.leftofscreen(a, {threshold : 0});
        },
        "right-of-screen": function(a, i, m) {
            return $.rightofscreen(a, {threshold : 0});
        },
        "in-viewport": function(a, i, m) {
            return $.inviewport(a, {threshold : 0});
        }
    });

    
})(jQuery);

function loadDisqusWidget()
{
	$("#disqus_thread:in-viewport").each(function() 
	{ 
		disqusComments();
		//lazyLoadDisqusComments();
		$(window).unbind("scroll", loadDisqusWidget);
	});
}

$(function(){
	$(window).bind("scroll", loadDisqusWidget);
});