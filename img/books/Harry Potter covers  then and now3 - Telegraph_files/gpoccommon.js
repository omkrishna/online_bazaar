/***************************************************************************
*
* Copyright (C) Telegraph Media Group Ltd.
* All Rights Reserved. No use, copying or distribution of this work may be
* made. This notice must be included on all copies, modifications and
* derivatives of this work.
****************************************************************************
* Author: L Dyson  Date: 12/05/2008
*
* Description:
* Common javascript functions
*
****************************************************************************
* $Id: common.js,v 1.91 2009/08/18 11:03:35 baptisteo Exp $
*
* Updates:
*
* 18/02/2011  P O'Shaughnessy TCUK-974 WebTrends tracking changes
* 11/04/2011 S Gadhiraju	As part of [DIGI-378], created a function resetTab to solve the issue of showing two slides when the tab is clicked for the first time.
* 12/04/2011 S Gadhiraju    DIGI-73 Replacing the hardcoded Disqus forum id with the section parameter value.
* 01/06/2011   Harish K M   DIGI-628 When the video loads at the moment there is no sound, despite the volume being set to maximum. Sound only appears when you adjust the volume.
***************************************************************************/

/********************************************************************
 * DISQUS comment login via SAM cookie - retrieve cookie value and embed script     *
 ********************************************************************/
	 
	 var disqus_config = function () {
		 
		 var chnName = "";
	  	  var catName = "";
	  	  if(document.getElementsByName("DCSext.Channel")[0] != null){
	  		chnName = document.getElementsByName("DCSext.Channel")[0].content;
	  	  }
	  	  if(document.getElementsByName("DCSext.Category")[0] != null){
	  		catName = document.getElementsByName("DCSext.Category")[0].content;
	  	  }
	      
	      this.callbacks.onNewComment = [function() {    	 
	    	  var head = document.getElementsByTagName('head')[0];
			  var s = document.createElement('script');
			  s.type = 'text/javascript';
			  s.text = "Krux('admEvent', 'Ihc2OS0D', { Category:'"+catName+"',Channel:'"+chnName+"' });";
			  head.appendChild(s);    	  
	      }];
	      
      // The generated payload which authenticates users with Disqus
		 var disqusCookieStr="";
		 if($.cookie('tmg_hashd_3'))
			 {
				 disqusCookieStr =$.cookie('tmg_hashd_3').replace(/"/g,'');
			 }
		// disqusCookieStr = disqusCookieStr.replace(/"/g,'');
		 
      this.page.remote_auth_s3 = disqusCookieStr; //'' + dsCookie;
      this.page.api_key = 'E5p4XbNHDcHxPazSjLe3ClD7ngyCypmzVFn54hgrJvoE39JUqZhsYXIydyXFoPVh';
      // This adds the custom login/logout functionality
	  
	  var loginURL = "";
	  
	  if(($.cookie('tmg_pid') && $.cookie('tmg_hashd_3')) || (!($.cookie('tmg_pid')) && $.cookie('tmg_hashd_3'))
	  	|| (!($.cookie('tmg_pid')) && !($.cookie('tmg_hashd_3'))))
	  {
          loginURL = authLoginLink+window.location.href;
	  }
	  else
	  {
    	  loginURL = myTelegraphLoginLink+window.location.href;		  
	  }
	  
	  var domainName = $("#disqusAcc").text();
	  
      this.sso = {
          name: domainName,
          button: "/template/ver1-0/i/icons/disqus-login-button.png",
          icon: "/template/ver1-0/i/icons/disqus-login-button.png",
          url: loginURL,
          logout: logoutLink,
          width: "800",
          height: "400"
      };
      
       
 
  };


/************************************************************************
* Hot topics
************************************************************************/
$(document).ready(function() {
	var hotTopicLiAll = $('#tmglMenu #tmglHotTopics .mainNav li');
	hotTopicLi = hotTopicLiAll.filter(function() {
		return $(this).find('.hotTopicsContent h3').length != 0;
	});

	hotTopicLi.filter('.htFirst').addClass('active');

	var interval = 6000;
	var hotTopicsInt = 0;

	hotTopicsInt = setInterval(rotateHotTopics, interval);

	// Removing unwanted LIs from the DOM
	$('#tmglMenu #tmglHotTopics .mainNav li').each(function() {
		$(this).remove();
	});

	// Adding the filtered LIs to the DOM for HotTopics to iterate
	hotTopicLi.each(function() {
		$('#tmglMenu #tmglHotTopics .mainNav').append($(this));
	});

	function rotateHotTopics() {
		oldActive = hotTopicLi.parent().find('.active');
		var newActive = hotTopicLi.find('.active').next("li");

		var counti = 0;
		var oldActive;
		var newActive;

		hotTopicLi.each(function() {
			if ($(this).hasClass("active")) {			
				oldActive = $(this);
				return false;
			}
			counti++;
		});

		newActive = hotTopicLi.eq(counti+1);

		if (newActive.length === 0 || typeof (newActive.find('a').html()) === 'string' && newActive.find('a').html().match(/^more/i)) {
			newActive = hotTopicLi.filter('.htFirst');
		}

	    $('#tmglMenu .fadeCover').fadeIn(function() {
	    	$('.mainNav li').removeClass('active');
			newActive.addClass('active');

			$(this).fadeOut();
	    });
	}

	hotTopicLi.mouseover(function() {
		clearInterval(hotTopicsInt);
	}).mouseout(function() {
		hotTopicsInt = setInterval(rotateHotTopics, interval);
	});
});

/**********************************************************************************************
*            this aligns the label if the article is live, latest or new      				  *
***********************************************************************************************/
$(document).ready(function() {
	//live label
	var liveSpanTopStoriesFiveSixths = $('.newPortal .fiveSixths .summaryMedium span.live'),
		liveSpanTopStoriesFSSumBig = $('.newPortal .fiveSixths .summaryBig span.live'),
		liveSpanTopStoriesOneThird = $('.gutterUnder .oneThird .summaryMedium span.live'),	
		liveSpanTopStoriesTwoThird = $('.gutterUnder .twoThirds .summaryMedium span.live');

	//latest label
	var latestSpanTopStoriesFiveSixths = $('.newPortal .fiveSixths .summaryMedium span.latest'),	
		latestSpanTopStoriesOneThird = $('.gutterUnder .oneThird .summaryMedium span.latest'),
		latestSpanTopStoriesTwoThird = $('.gutterUnder .twoThirds .summaryMedium span.latest');

	//new label
	var newSpanTopStoriesFiveSixths = $('.newPortal .fiveSixths .summaryMedium span.new'),
		newSpanTopStoriesOneThird = $('.gutterUnder .oneThird .summaryMedium span.new'),
		newSpanTopStoriesTwoThird = $('.gutterUnder .twoThirds .summaryMedium span.new');

	$('.minusVid').siblings('p').width('380');

	//live 
	adjustLabelPosition(liveSpanTopStoriesFiveSixths, 1);
	adjustLabelPosition(liveSpanTopStoriesFSSumBig, 2);
	adjustLabelPosition(liveSpanTopStoriesOneThird, 1);
	adjustLabelPosition(liveSpanTopStoriesTwoThird, 1);

	//latest
	adjustLabelPosition(latestSpanTopStoriesFiveSixths, 1);
	adjustLabelPosition(latestSpanTopStoriesOneThird, 1);
	adjustLabelPosition(latestSpanTopStoriesTwoThird, 1);

	//new
	adjustLabelPosition(newSpanTopStoriesFiveSixths, 1);
	adjustLabelPosition(newSpanTopStoriesOneThird, 1);
	adjustLabelPosition(newSpanTopStoriesTwoThird, 1);
});

function adjustLabelPosition(section, siblingFlag) {
	if (section.length > 0) {
		section.each(function() {
			var p = (siblingFlag == 1) ? $(this).next('p') : $(this).siblings('p').not('.comments');
			$(this).prependTo(p);
	    });
	}
}

/************************************************************
*   hover in/out behaviour for editorial puffs
*
*   We manually set the css properties here using animate
*   instead of defining a class and using addClass because
*   addClass appears not to work in IE7/8
************************************************************/
$(document).ready(function() {
	$('.headlineImageCentreAbstractPuff.small .puffRollOver').each(function() {
		/* DIGI:4489: SEO Changes 3. Puff text should be h4 tag instead of h5 tag */
		var smallPuffHeadingHeight = $(this).find('h4').height();

		$(this).css("height", smallPuffHeadingHeight + 10 + 'px');
	});
	$('.headlineImageCentreAbstractPuff.small').hover(function() {
		var smallPuffParagraphHeight = $(this).find('.puffRollOver p').height();

		/* DIGI:4489: SEO Changes 3. Puff text should be h4 tag instead of h5 tag */
		var smallPuffHeadingHeight = $(this).find('.puffRollOver h4').height();

		var smallPuffTotalHeight = smallPuffHeadingHeight + 10 + smallPuffParagraphHeight + 10;

		if (smallPuffTotalHeight > $(this).height()) {
			smallPuffTotalHeight = $(this).height();
		}

		$(this).find('.puffRollOver').stop().animate({height:smallPuffTotalHeight + 'px'}, 200);
	}, function() {
		/* DIGI:4489: SEO Changes 3. Puff text should be h4 tag instead of h5 tag */
		var smallPuffHeadingHeight = $(this).find('.puffRollOver h4').height();

		$(this).find('.puffRollOver').stop().animate({height:smallPuffHeadingHeight + 10 + 'px'}, 200);
	});
});

/************************************************************
*   hover in/out behaviour for the large editorial puffs 
************************************************************/
$(document).ready(function() {
	var largePuffTextParagraghHeight = $('.large p').height();
	/* DIGI:4489: SEO Changes 3. Puff text should be h4 tag instead of h5 tag */
	var largePuffTextH5Height = $('.large h4').height();

	var totalHeight = largePuffTextParagraghHeight + largePuffTextH5Height + 20;

	/* DIGI:4489: SEO Changes 3. Puff text should be h4 tag instead of h5 tag */
	var headingHeight =  $('.large h4').height() + 10;

	$('.headlineImageCentreAbstractPuff.large .puffRollOver').each(function() {
		$(this).css("height",headingHeight + "px");		
	});

	$('.headlineImageCentreAbstractPuff.large').hover(function() {
		$(this).find('.puffRollOver').stop().animate({height: totalHeight + "px"}, 200);
	}, function() {
	    $(this).find('.puffRollOver').stop().animate({height: headingHeight + "px"}, 200);
	});
});

/************************************************************************
 *              Big carousel v2 Gallery                    				*
 ************************************************************************/
$(document).ready(function() {
	var slide = 200;

	//calculates the margin-left to move the image in the middle
	var item_width = $('.carv2Gallery ul li').width();
	item_padding = parseInt($('.carv2Gallery ul li').css('padding-left'), 10) + parseInt($('.carv2Gallery ul li').css('padding-right'), 10);
	item_border = parseInt($('.carv2Gallery ul li').css('borderLeftWidth'), 10) + parseInt($('.carv2Gallery ul li').css('borderRightWidth'), 10);
        
	var margin_left = parseInt($(".carv2Gallery ul li").css("marginLeft"));	
	margin_left = (margin_left * 2);

	item_width = item_width - item_border - item_padding;
	var left_value = (item_width * (-1)) + 10;

	$(".carv2Gallery ul li:first").before($('.carv2Gallery ul li:last'));

	//move left the first image with the calculated value
	//set the "left" attribute as to show partially the first image of the carousel
	$(".carv2Gallery ul").css({"left" : left_value});

	//adds styles to the selected image and its not-selected siblings
	$(".carv2Gallery ul li:first").next().addClass("selected");
	$(".carv2Gallery ul li:first").next().siblings().addClass("unselected");

	//adds styles to the selected dot and its not-selected siblings. 
	//$(".dotsGallery span:first").next().addClass("active");
	//$(".dotsGallery span:first").next().siblings().addClass("notActive");

	//The first dot is selected as default
	$(".dotsGallery span:first").addClass("active");
	$(".dotsGallery span:first").siblings().addClass("notActive");

	//handles the right click and the dot animation
	$(".rightButtonGallery").click(function() {
		//this check prevents the slideshow to be too fast on click and to mess up the images
		if (!$(".carv2Gallery ul").is(':animated')) {
			var li_selected = $(".carv2Gallery ul").find(".selected");
			$(li_selected).removeClass("selected").addClass("unselected");
			$(li_selected).next().removeClass("unselected").addClass("selected");

			var left_indent = parseInt($(".carv2Gallery ul").css("left")) - item_width - margin_left;

			//get the dot selected
			var dot_selected = $(".dotsGallery").find(".active");

			//the below handles the dots css while animated
			if ($(dot_selected).is(":last-child")) {
				$(dot_selected).removeClass("active").addClass("notActive");
				$(".dotsGallery span").first().removeClass("notActive").addClass("active");
			}
			else {
				$(dot_selected).removeClass("active").addClass("notActive");
				$(dot_selected).next().removeClass("notActive").addClass("active");
			}

			//this handles the carousel animation
			$(".carv2Gallery ul").animate({"left" : left_indent}, slide, function() {
				$(".carv2Gallery ul li:last").after($(".carv2Gallery ul li:first"));

				//set back the left attribute value to keep the same distance from the left margin
				$(".carv2Gallery ul").css({"left" : left_value});

				dcsRebuild();
				dcsMultiTrack('DCSext.embeddedSlideshowImage', $('.carv2Gallery ul li.selected').find('img').attr('src'), "WT.dl", "53");
			});
		}
	});

	//handles the left click
	$(".leftButtonGallery").click(function() {
		var div = $(".carv2Gallery");

		//this check prevents the slideshow to be too fast on click and to mess up the images
		if (!$(".carv2Gallery ul").is(':animated')) {
			var li_selected = $(".carv2Gallery ul").find(".selected");
			$(li_selected).removeClass("selected").addClass("unselected");
			$(li_selected).prev().removeClass("unselected").addClass("selected");

			var left_indent = parseInt($(".carv2Gallery ul").css("left")) + item_width + margin_left;

			//get the dot selected
			var dot_selected = $(".dotsGallery").find(".active");

			if ($(dot_selected).is(":first-child")) {
				$(dot_selected).removeClass("active").addClass("notActive");
				$(".dotsGallery span").last().removeClass("notActive").addClass("active");
			}
			else {
				$(dot_selected).removeClass("active").addClass("notActive");
				$(dot_selected).prev().removeClass("notActive").addClass("active");
			}

			div.find('ul').animate({"left" : left_indent}, slide, function() {
				div.find("ul li:first").before(div.find(" ul li:last"));
				div.find("ul").css({"left" : left_value});

				dcsRebuild();
				dcsMultiTrack('DCSext.embeddedSlideshowImage', $('.carv2Gallery ul li.selected').find('img').attr('src'), "WT.dl", "53");
			});
		}
	});

	//the below handles the dots onclick
    $("div.dotsGallery > span.notActive").live("click", function() {
    	var slide_dot = 200;
       	var prevAll_element_counter = 0;
       	var nextAll_element_counter = 0;
       	var flag_prev = false;
       	var flag_next = false;

       	//counts how many siblings found on the left of the selected element until the active one
       	//it calculates how many elements to skip
       	$(this).prevAll().each(function() {
       		prevAll_element_counter++;
       		if ($(this).hasClass('active')) {
       			flag_prev = true;
       			return false;
       		}
       	});

       	if ((prevAll_element_counter != 0) && (flag_prev)) {
       		var left_indent = parseInt($(".carv2Gallery ul").css("left")) - (item_width * prevAll_element_counter) - margin_left;
       		var li_selected = $(".carv2Gallery ul").find(".selected");
            $(li_selected).removeClass("selected").addClass("unselected");

            //adds styles to the selected dot and its not-selected siblings
			$(this).addClass("active").removeClass("notActive");
			$(this).siblings().removeClass("active").addClass("notActive");

			if (prevAll_element_counter > 1) {
				$(".carv2Gallery ul").animate({"left" : left_indent}, slide_dot, function() {
					for (i = 0; i < prevAll_element_counter; i++) {
						li_selected = $(li_selected).next();
				 		$(".carv2Gallery ul li:last").after($(".carv2Gallery ul li:first"));
				 		$(".carv2Gallery ul").css({"left" : left_value});
					}

					$(li_selected).removeClass("unselected").addClass("selected");
				 	$(li_selected).siblings().removeClass("selected").addClass("unselected");
				});
		 	}
		 	else {
		 		$(li_selected).next().removeClass("unselected").addClass("selected");
		 		$(".carv2Gallery ul").animate({"left" : left_indent}, slide_dot, function() {
		 			$(".carv2Gallery ul li:last").after($(".carv2Gallery ul li:first"));

		 			//set back the left attribute value to keep the same distance from the left margin
		 			$(".carv2Gallery ul").css({"left" : left_value});
		 		});
		 	}
		}

       	//counts how many siblings found on the right of the selected element until the active one
		//it calculates how many elements to skip
		$(this).nextAll().each(function() {
			nextAll_element_counter++;
			if ($(this).hasClass('active')) {
				flag_next = true;
				return false;
			}
		});

		if ((nextAll_element_counter != 0) && (flag_next)) {
			var left_indent = parseInt($(".carv2Gallery ul").css("left")) + (item_width * nextAll_element_counter) + margin_left;

            var li_selected = $(".carv2Gallery ul").find(".selected");
            $(li_selected).removeClass("selected").addClass("unselected");

            //adds styles to the selected dot and its not-selected siblings
		    $(this).addClass("active").removeClass("notActive");
		    $(this).siblings().removeClass("active").addClass("notActive");

		    if (nextAll_element_counter > 1) {
		 		$(".carv2Gallery ul").animate({"left" : left_indent}, slide_dot, function() {
		 			for (i = 0; i < nextAll_element_counter; i++) {
		 				li_selected = $(li_selected).prev();
		 				$(".carv2Gallery ul li:first").before($(".carv2Gallery ul li:last"));
		 				$(".carv2Gallery ul").css({"left" : left_value});
		 			}
		 			$(li_selected).removeClass("unselected").addClass("selected");
		 			$(li_selected).siblings().removeClass("selected").addClass("unselected");
		 		});
		    }
		    else {
		    	$(li_selected).prev().removeClass("unselected").addClass("selected");
		        $(".carv2Gallery ul").animate({"left" : left_indent}, slide_dot, function() {
		        	$(".carv2Gallery ul li:first").before($(".carv2Gallery ul li:last"));
		        	$(".carv2Gallery ul").css({"left" : left_value});
		        });
		    }
		}
	});
});

if (window.location.host.indexOf('telegraph.co.uk') !== -1) {
	document.domain = "telegraph.co.uk";
}

/* JQuery plugin to retrieve the outer HTML of any given element */
jQuery.fn.outerHTML = function() {
	return $('<div>').append(this.eq(0).clone()).html();
};

/* New JQuery plugin to pull back comments from any given HTML element */
/* Author: L Dyson Date:13/07/2008 */
jQuery.fn.comments = function(i) {
	if (this.html() != null && this.html() != '') {
		var searchString = this.html().split("<!--");
		var commentArray = new Array();

		for (j in searchString) {
			if (typeof(searchString[j]) == 'string') { // ANDREW ADDED TYPEOF CHECK HERE
				if (searchString[j].indexOf("-->") != -1) {
					commentArray.push(searchString[j].split("-->")[0].replace(/^\s+/,'').replace(/\s+$/,''));
				}
			}
		}

		if ((isNaN(Number(i))) || (i == null)) {
			return commentArray;
		}
		else {
			return commentArray[i];
		}
	}
	else {
		return null;
	}
};

/* static reference locations for JavaScript and images */
var jsSrc = $("script[src*='common.js']").attr("src").substring(0, $("script[src*='common.js']").attr("src").lastIndexOf("/") + 1);
var imgSrc = jsSrc.replace('js', 'i');
var theme = $("meta[name='colourTheme']").attr("content");

if ((theme != null) && (theme != 'normal')) {
	imgSrcArray = imgSrc.split("/i");
	imgSrc = imgSrcArray[0] + "/themes/" + theme + "/i" + imgSrcArray[1];
}

/* Variables for the dating widget */
var valStrings = new Array;
valStrings["invalidPostCodeDFormat"] = "The post code you have entered appears to have an invalid format.";
valStrings["invalidPostCodeDistrict"] = " does not appear in our list of valid post code districts.";

/* ON PAGE LOAD... */
$(function() {
	/***********************************************************************
	*                          Breaking News Ticker                        *
	***********************************************************************/
	if ($("#tmglBreakingNews").length > 0) {
		$("#tmglBreakingNews > ul > li:not(:first)").hide();
		$("#tmglBreakingNews > ul > li:first").addClass("shown");

		setInterval(rotateBreakingNews,5000);
	}

	/***********************************************************************
	*                      Share this article function                     *
	***********************************************************************/
	// show the share code after the page has loaded
	$(".storyFunc").removeClass("hide");
	$(".shareFunctions").removeClass("loading");

	/***********************************************************************
	*                      Video play button effect                        *
	***********************************************************************/
	$('.playButton a').hover(function() {
		$(this).find('.playBtt').stop().fadeTo('normal', 0.7);
	}, function() {
		$(this).find('.playBtt').stop().fadeTo('normal', 0);
	});
       $('.playButton.image').hover(function () {
                           $(this).find('.playBtt').stop().fadeTo('normal', 0.5);
                            }, function () {
                           $(this).find('.playBtt').stop().fadeTo('normal', 0);
                            }); 
            
	$('.playButton a').hover(function() {
		$(this).find('.playBttJH').stop().fadeTo('normal', 0.7);
	}, function() {
		$(this).find('.playBttJH').stop().fadeTo('normal', 0);
	});

	/***********************************************************************
	*              Picture gallery arrow key navigation                    *
	***********************************************************************/
	if (document.getElementById('imgPrevUrl') != null) {
		$(document).keydown(function(event) {
			var key = event.keyCode || event.which;
			if (key === 37) {
				var previousUrl = document.getElementById('imgPrevUrl');
				location.href = previousUrl;
				return false;
			}
			if (key === 39) {
				var nextUrl = document.getElementById('imgNextUrl');
				location.href = nextUrl;
				return false;
			}
		});

		$('#imgGallImg a').mouseover(function() {
			$('#nextGallImg a').stop().fadeTo(500, 0.5);
			$('#prevGallImg a').stop().fadeTo(500, 0.5);
		}).mouseout(function() {
			$('#nextGallImg a').stop().fadeTo(500, 0);
			$('#prevGallImg a').stop().fadeTo(500, 0);
		});

		$('#nextGallImg a').mouseover(function() {
			$(this).stop().fadeTo(500, 1);
		}).mouseout(function() {
			$(this).stop().fadeTo(500, 0);
		});

		$('#prevGallImg a').mouseover(function() {
			$(this).stop().fadeTo(500, 1);
		}).mouseout(function() {
			$(this).stop().fadeTo(500, 0);
		});
	}

	/***********************************************************************
	*              Super Summary tab object navigation                     *
	***********************************************************************/
	$(".topRightTab").removeClass("hide");
	$(".middleFourTab").removeClass("hide");

	$(function() {
		$('#superSummaryTabElement').tabs({fx: {opacity: 'toggle'}});
		$('#rightTabElement').tabs({fx: {opacity: 'toggle'}});
		return false;
    });

	/***********************************************************************
	*                          Armagedon grid                              *
	***********************************************************************/
	$("#armageddon").removeClass("hide");
	$(".twoThirds").removeClass("toolLoading");

	//.tabs('rotate', 2000) in case we want this to rotate
	/*
	$(function() {
    	$('#armageddon').tabs({fx: {opacity: 'toggle'}});
	});

	$('#armageddon .imgGallImg a').css({backgroundPosition: "-140px 0"}).mouseover(function() {
		$('.next a').stop().fadeTo(500, 0.5);
		$('.prev a').stop().fadeTo(500, 0.5);
		$('.imageExtras').stop().fadeTo(500, 0.7);
	}).mouseout(function() {
		$('.next a').stop().fadeTo(500, 0.5);
		$('.prev a').stop().fadeTo(500, 0.5);
		$('.imageExtras').stop().fadeTo(500, 0);
	});

	$('#armageddon .next a').css({backgroundPosition: "-140px 0"}).mouseover(function() {
		$(this).stop().fadeTo(500, 1);
		$('.imageExtras').stop().fadeTo(500, 0.7);
	}).mouseout(function() {
		$(this).stop().fadeTo(500, 0.5);
		$('.imageExtras').stop().fadeTo(500, 0);
	});

	$('#armageddon .prev a').css({backgroundPosition: "-40px 0px"}).mouseover(function() {
		$(this).stop().fadeTo(500, 1);
		$('.imageExtras').stop().fadeTo(500, 0.7);
	}).mouseout(function() {
		$(this).stop().fadeTo(500, 0.5);
		$('.imageExtras').stop().fadeTo(500, 0);
	});
	*/

	$(function() {
		$('#armageddon').tabs({fx: {opacity: 'toggle'}});
	});

	$('.imgGallImg a').mouseover(function() {
		$('.next a').stop().fadeTo(500, 1.0);
		$('.prev a').stop().fadeTo(500, 1.0);
		$('.imageExtras').stop().fadeTo(500, 0.7);
	}).mouseout(function() {
		$('.next a').stop().fadeTo(500, 0.7);
		$('.prev a').stop().fadeTo(500, 0.7);
		$('.imageExtras').stop().fadeTo(500, 0);
	});

	$('.next a').mouseover(function() {
		$(this).stop().fadeTo(500, 1);
		$('.imageExtras').stop().fadeTo(500, 0.7);
	}).mouseout(function() {
		$(this).stop().fadeTo(500, 0.7);
		$('.imageExtras').stop().fadeTo(500, 0);
	});

	$('.prev a').mouseover(function() {
		$(this).stop().fadeTo(500, 1);
		$('.imageExtras').stop().fadeTo(500, 0.7);
	}).mouseout(function() {
		$(this).stop().fadeTo(500, 0.7);
		$('.imageExtras').stop().fadeTo(500, 0);
	});

	$(".imgLoadingText").addClass("hide");

	//Set the first slide in the slideshow as visible and hide the remaining slides.
	function resetTab(tab) {
		//$(tab).find(".ssImg:visible").each(function(index) {
			//$(this).hide();
			$(tab).find(".ssImg").each(function() {
				if ($(this).css("display") == "block") {
					$(this).hide();
				}
			});
			$(tab).find(".ssImg:first").show();
		//}
	}

	//Issue: If the user clicks the tab b/w the "timeout" two slides are showing up in the page.
	//One solution: Intercepting the selection of the tab and resetting it in such a way that only slide shown at a time.
	/*
	$('#armageddon').tabs({
		select: function(event, ui) {
			resetTab(ui.panel);
		    return true;
		}
	});
	*/

	/***********************************************************************
	*                  Armageddon 2 grid  (World Cup)                      *
	***********************************************************************/
	$("#armageddon2").removeClass("hide");
	$(".twoThirds").removeClass("toolLoading2");

	var rotateSpeed = $('#tabRotationSpeed').text();

	if (rotateSpeed != 0) {
		$('#armageddon2').tabs({event: 'click', fx: {opacity: 'toggle'}}).tabs('rotate', rotateSpeed, true);
		$('#armageddon2 li a').click(function() {
			myId = $(this).attr('href').substring(1);
			$('#armageddon2').tabs('rotate', 0, false);

			$('div#' + myId + ' .imageExtras').stop().fadeTo(500, 0.8);
		});
	}
	else {
		$('#armageddon2').tabs({event: 'click', fx: {opacity: 'toggle'}});
		$('#armageddon2 li a').click(function() {
			myId = $(this).attr('href').substring(1);

			$('div#' + myId + ' .imageExtras').stop().fadeTo(500, 0.8);
		});
	}

	/***********************************************************************
	*                      Sport Guide tabs                                *
	***********************************************************************/
	$("#sportguide").removeClass("hide");
	$("#tmglSite.olympic .twoThirds .oneHalf").removeClass("toolLoading");

	$('#sportguide').tabs({event: 'click', fx: {opacity: 'toggle'}});
	$('#sportguide li a').click(function() {
		myId = $(this).attr('href').substring(1);
	});

	var sportguideloc = document.location.pathname;
	$("#sportguideselector select > option").each(function(i) {
		if ($(this).attr("value") == sportguideloc) {
			$(this).attr("selected","selected");
		}
	});
	$("div.sportguideselector div").removeClass("hide");

	$("#sportguideselector select").change(function() {
		window.location = 'http://' + window.location.host + $("#sportguideselector select > option:selected").attr("value");
	});

	/***********************************************************************
	*                Travel Right-hand Search Widget                       *
	***********************************************************************/
	if ($(".travelRightHandTabs #tabs-1")) {
		$(".travelRightHandTabs #tabs-1").tabs();

		if ($("#pane-tabs-1-1 .tabbedContentExistsMarker").length == 0) {
			$("#pane-tabs-1-1, #tabs-1-1").remove();
		}

		if ($("#pane-tabs-1-2 .tabbedContentExistsMarker").length == 0) {
			$("#pane-tabs-1-2, #tabs-1-2").remove();
		}
		var resetSearchCriteria = function() {
			$("select#country option:first").attr('selected','selected');
		}

		resetSearchCriteria();

		var cottagesURL = 'http://www.cottageselection.co.uk/sites/cottageselection/partners/TEL/pages/';
		var cottagesAdvancedSearchURLAppend = 'Search_C_nomap.aspx?QS=8d2e998b-ad8f-4f3a-ab81-307af4535d6a~C~216~~';

		$('div.cottageBoxBottomSearchLink').click(function() {
			validate();

			if ($(".showError").length > 0) {
				$(".cottageBoxSearchDetailsError").addClass("showError");
				return false;
			}

			window.location.href = cottagesURL + 'search.aspx?func=search'
									+ '&country=' + $("select#country option:selected").val()
									+ '&area=' + $("select#" + $("select#country option:selected").val() + " option:selected").val()
									+ '&sleeps=' + $("select#sleeps option:selected").val();

			return false;
		});

		$('div.cottageBoxBottomAdvancedSearchLink').click(function() {
			window.location.href = cottagesURL + cottagesAdvancedSearchURLAppend
									+ '&country=' + $("select#country option:selected").val()
									+ '&area=' + $("select#" + $("select#country option:selected").val() + " option:selected").val()
									+ '&sleeps=' + $("select#sleeps option:selected").val();

			return false;
		});

		$('select#country').change(function() {
			$('select.areas').hide();
			var c = $("select#country option:selected").val();
			$('select#' + c).show();
		});

		function validate() {
			$(".cottageBoxSearchDetailsError").removeClass("showError");
			if (($("select#country option:selected").val() != undefined) && ($("select#country option:selected").val() !="")) {
				$(".countryError").removeClass("showError");
			}
			else {
				$(".countryError").addClass("showError");
			}

			if ($("select#" + $("select#country option:selected").val() + " option:selected").val() != undefined) {
				$(".regionError").removeClass("showError");
			}
			else {
				$(".regionError").addClass("showError");
			}
			if (($("select#sleeps option:selected").val() != undefined) && ($("select#sleeps option:selected").val() !="")) {
				$(".partyError").removeClass("showError");
			}
			else {
				$(".partyError").addClass("showError");
			}
		}
	}

	/***********************************************************************
	*                    Portal Galleries Slideshow                        *
	***********************************************************************/
	$('.picturesAndVideo .slideshow .imageLinks').mouseover(function() {
		$('h3', this).stop().fadeTo(500,1);
	}).mouseout(function() {
		$('h3', this).stop().fadeTo(500,0.8);
	});

	/***********************************************************************
	*                  Live Scores Box   (World Cup)                       *
	* http://www.switchonthecode.com/tutorials/jquery-creating-a-slideshow *
	***********************************************************************/
	var totalSlides;
	var currentSlide;
	//var currentSlide = 2;
	var contentSlides = "";
	var autoFootballScroll = true;
	var goBack = false;
	var st;

	$(function() {
		$("#livescore-prev").click(showPreviousSlide);
		$("#livescore-next").click(showNextSlide);
		$("#livescore-pause").click(pauseFootballScroll);

		initLiveScores();
	});

	function initLiveScores() {
		if (st != null) {
			clearTimeout(st);
		}

		totalSlides = $("#livescoreholder .livescore").length;
		contentSlides = "";
		var totalWidth = 0;
		contentSlides = $(".livescore");

		contentSlides.each(function(i) {
			totalWidth += this.clientWidth;
		});

		$("#livescoreholder").width(totalWidth);
		$("#livescorescroller").attr({scrollLeft: 0});
		currentSlide = parseInt($('#currentMatch').text()) + 1;
		updateButtons();

		if (currentSlide != 1) {
			updateContentHolder();
		}

		if ($("#livescoreholder .livescore").length > 1) {
			$("#livescorecontainer .arrows").show();
			autoFootballScroll = true;
			goBack = false;
			$("#livescore-pause").css('background', 'url(/template/ver1-0/i/playPauseBlue.png) no-repeat 50% 50%');
			scrollScores();
		}
		else {
			$("#livescorecontainer .arrows").hide();
			autoFootballScroll = false;
		}
	}

	// I'm sure this is far more complex than it needs to be...
	function scrollScores() {
		if (currentSlide == 1) {
			goBack = false;
			st = setTimeout(function() {
				showNextSlide2()
			}, 5000);
		}
		else if (goBack) {
			st = setTimeout(function() {
				showPreviousSlide2()
			}, 5000);
		}
		else if (currentSlide < totalSlides) {
			st = setTimeout(function() {
				showNextSlide2()
			}, 5000);
			goBack = false;
		}
		else if (currentSlide == totalSlides) {
			st = setTimeout(function() {
				showPreviousSlide2()
			}, 5000);
			goBack = true;
		}
	}

	function pauseFootballScroll() {
		if (autoFootballScroll) {
			autoFootballScroll = false;
			$("#livescore-pause").css('background', 'url(/template/ver1-0/i/playPauseGrey.png) no-repeat 50% 50%');
		}
		else if (!autoFootballScroll) {
			autoFootballScroll = true;
			$("#livescore-pause").css('background', 'url(/template/ver1-0/i/playPauseBlue.png) no-repeat 50% 50%');
			scrollScores();
		}
	}

	function showPreviousSlide2() {
		if (autoFootballScroll) {
			showPreviousSlide();
			scrollScores();
		}
	}

	function showNextSlide2() {
		if (autoFootballScroll) {
			showNextSlide();
			scrollScores();
		}
	}

	function showPreviousSlide() {
		currentSlide--;
		updateContentHolder();
		updateButtons();
	}

	function showNextSlide() {
		currentSlide++;
		updateContentHolder();
		updateButtons();
	}

	function updateContentHolder() {
		var scrollAmount = 0;
		contentSlides.each(function(i) {
			if ((currentSlide - 1) > i) {
				scrollAmount += this.clientWidth;
			}
		});
		$("#livescorescroller").animate({scrollLeft: scrollAmount}, 1000);
	}

	function updateButtons() {
		if (currentSlide < totalSlides) {
			$("#livescore-next").css('background', 'url(/template/ver1-0/i/arrowForwardBlue.png) no-repeat 50% 50%');
		}
		else {
			$("#livescore-next").css('background', 'url(/template/ver1-0/i/arrowForwardGrey.png) no-repeat 50% 50%');
		}

		if (currentSlide > 1) {
			$("#livescore-prev").css('background', 'url(/template/ver1-0/i/arrowBackBlue.png) no-repeat 50% 50%');
		}
		else {
			$("#livescore-prev").css('background', 'url(/template/ver1-0/i/arrowBackGrey.png) no-repeat 50% 50%');
		}
	}

	$("#liveScoreBoxSelector").show();
	$("#livescorecontainer .arrows").show();

	/***********************************************************************
	*             Football                                                 *
	***********************************************************************/
	$("#changeseason").show();
	$("#changecompetition").show();
	$(function() {
		initChangeCompetition();
	});

	$("#changeseason select").change(function() {
		$("#changeseasonform").submit();
	});

	function initChangeCompetition() {
		$("#changecompetition select").change(function() {
			$('#leagueTableContainer').load($("#changecompetitionform").attr('action'), {'competition': $("#changecompetitionform select").find(':selected').attr('value')}, function() {
				initChangeCompetition();
				$("#changecompetition").show();
			});
		});
		$("#livescorecompetitionform select").change(function() {
			$('#livescorescroller').load($("#livescorecompetitionform").attr('action'), {'competition': $("#livescorecompetitionform select").find(':selected').attr('value')}, function() {
				initLiveScores();
			});
		});
	}

	$.tablesorter.addWidget({
		id: "stripe",
		format: function(table) {
			$(".footballTable table tbody tr:odd").addClass("odd").removeClass("even");
			$(".footballTable table tbody tr:even").addClass("even").removeClass("odd");
		}
	});

	$.tablesorter.defaults.sortInitialOrder = 'desc';

	$("#footballTablesTable").tablesorter({headers: {0: {sorter: false}, 1: {sorter: false}}, widgets: ['stripe']});

	// Stripe fixtures/livescores divs
	$(function() {
		$(".footballFixtures div.fixtureNoBorder:odd").addClass("odd");
	});

	/***********************************************************************
	 *                         Search Box                                  *
	 ***********************************************************************/
	$("#searchBar #tg_search .searchBox").focus(function() {
		$("#searchBar #tg_search .searchBox").removeClass("google");
	});
	$("#searchBar #tg_search .searchBox").blur(function() {
		if ($('#searchBar #tg_search .searchBox').val() == '') {
			$("#searchBar #tg_search .searchBox").addClass("google");
		}
	});

	/***********************************************************************
	*                          Bars Chart                                  *
	***********************************************************************/
	$("#sopGraph").removeClass("graphLoading");
	$("#dataGraph").removeClass("graphLoading");

	/***********************************************************************
	*                          Commercial Carousel                         *
	***********************************************************************/
	if ($("#comCarousel").length > 0) {
		var comCarousel = $("#comCarousel").get();

		for (i in comCarousel) {
			ccObj[i] = new comCarouselObj();
			ccObj[i].carousel = comCarousel[i];

			$(ccObj[i].carousel).find("#comCarTools").removeClass("hide");

			$(ccObj[i].carousel).find(".offer[class*='hide']").removeClass("hide").hide();
			$(ccObj[i].carousel).find(".offer[class*='show']").removeClass("show").show();

			var partners = $(ccObj[i].carousel).find(".partner[class*='hide'").removeClass("hide").hide();
			var partners = $(ccObj[i].carousel).find(".partner[class*='show'").removeClass("show").show();

			$(ccObj[i].carousel).find("#carouselBtns > .btn").bind("click", {count:i}, function(e) {
				comCarSelectPartner(e.data.count, $(ccObj[e.data.count].carousel).find("#carouselBtns > .btn").index(this));
				if (ccObj[e.data.count].timeoutId != null) {
					clearInterval(ccObj[e.data.count].timeoutId);
					ccObj[e.data.count].timeoutId = null;
				}
			});
			ccObj[i].timeoutId = setInterval("comCarNextPartner(" + i + ")", 5000);
		}
	}

	/***********************************************************************
	*					 Commercial unit randomiser - First*Clarity   *
	***********************************************************************/
	if ($('#tmgPortalRand').length > 0) {
		var toRand = $('#tmgPortalRand .oneQuarter');
		var numToDisplay = 4;
		var total = toRand.length;

		if (total < numToDisplay) {
			numToDisplay = total;
		}

		var order = new Array();
		for (i = 0; i < total; i++) {
			order[i] = i;
		}
		//order.sort(randOrd);
		var lastAffected = -1;
		for (i = 0; i < numToDisplay; i++) {
			thisAffected = order.pop();
			//$(toRand).eq(thisAffected).css('display', 'block');
			if (thisAffected > lastAffected) {
				lastAffected = thisAffected;
			}
		}
		$(toRand).eq(lastAffected).removeClass('gutter');
	}

	/***********************************************************************
	*					 most Popular      (HAREESH)   *
	***********************************************************************/
	$TabActive = $("#mostpop > .tabs > ul > li:first");
	$('#mostpop > .tabs > ul > li').click(function() {
		if ($(this) != $TabActive) {
			$TabActive.removeClass('current');
			$(this).addClass('current');
			$TabActive = $(this);

			contentIdChildDiv = "#div-" + $TabActive.attr("id");
			$("div.view-content").hide();
			$(contentIdChildDiv).show();
		}
	});

	//$(".lists div:not(div:first)").hide();
	//$("#mostpop > .tabs > ul > li:first").addClass("current");

	/***********************************************************************
	*	 This changes the size of the text in article pages     (OJB)  *
	***********************************************************************/
	if ($('#changeFont').length > 0) {
		$('#changeFont').html("<div class=\"text_f\">Text Size</div><div class=\"plus_b\"><a href=\"#\" class=\"increaseFont\"><img src=\"" + imgSrc + "Plus_btn.gif\" id=\"plus_btn\" alt=\"click here to increase the text size\" name=\"plus_btn\"/></a></div><div class=\"minus_b\"><a href=\"#\" class=\"increaseFont\"/><a href=\"#\" class=\"decreaseFont\"><img src=\"" + imgSrc + "Minus_btn.gif\" id=\"minus_btn\" alt=\"click here to decrease the text size\" name=\"minus_btn\"/></a></div><div class=\"cl\"></div>");
		$('#changeFont').removeClass('hidden');

		//this function increases the font size
		$(".increaseFont").click(function() {
			var currentFontSize = $('html').css('font-size');
			var currentFontSizeNum = parseFloat(currentFontSize, 10);
			var newFontSize = (currentFontSizeNum * 1.1);
			if (newFontSize < 45) {
				$('html').css('font-size', newFontSize);
			}
			return false;
		});

		// this decreases the font size
		$(".decreaseFont").click(function() {
			var currentFontSize = $('html').css('font-size');
			var currentFontSizeNum = parseFloat(currentFontSize, 10);
			var newFontSize = (currentFontSizeNum * 0.9);
			if (newFontSize > 9) {
				$('html').css('font-size', newFontSize);
			}
			return false;
		});

		$('img#plus_btn').hover(function() {
			$(this).attr("src",imgSrc+"Plus_btn_Hover.gif");
		}, function() {
			$(this).attr("src",imgSrc+"Plus_btn.gif");
		});

		$('img#minus_btn').hover(function() {
			$(this).attr("src",imgSrc+"Minus_btn_Hover.gif");
		}, function() {
			$(this).attr("src",imgSrc+"Minus_btn.gif");
		});
	}

	/***********************************************************************
	*         Function to show RSS Feed functions (on RSS Pages) - LD      *
	***********************************************************************/
	if ($(".rssFeed").length > 0) {
		$(".rssFeed a").click(function(e) {
			var scrollFix = 0;
			if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) <= 6)) {
				scrollFix = document.body.parentElement.scrollTop;
			}

			$(".feedTools").remove();

			var feedUrl = escape($(this).attr("href"));
			var feedBox = "<div class=\"feedTools hide\"><div class=\"title\"><p>Add \"" + $(this).text() + "\" RSS Feed</p><img src=\"" + imgSrc + "16_close.gif\" width=\"16\" height=\"16\" alt=\"close\" class=\"close\"/><div class=\"cl\"></div></div><ul><li class=\"google\"><a href=\"http://fusion.google.com/add?feedurl=" + feedUrl + "\">Google Reader</a></li><li class=\"bloglines\"><a href=\"http://www.bloglines.com/sub/" + feedUrl + "\">Bloglines</a></li><li class=\"yahoo\"><a href=\"http://add.my.yahoo.com/rss?url=" + feedUrl + "\">My Yahoo</a></li><li class=\"netvibes\"><a href=\"http://www.netvibes.com/subscribe.php?url=" + feedUrl + "\">Netvibes</a></li><li class=\"newsgator\"><a href=\"http://www.newsgator.com/ngs/subscriber/subext.aspx?url=" + feedUrl + "\">Newsgator</a></li><li class=\"pageflakes\"><a href=\"http://www.pageflakes.com/subscribe.aspx?url=" + feedUrl + "\">Pageflakes</a></li><li class=\"technorati\"><a href=\"http://technorati.com/faves?sub=favthis&add=" + feedUrl + "\">Technorati</a></li><li class=\"aol\"><a href=\"http://favorites.my.aol.com/ffclient/AddFeed?url=" + feedUrl + "\">MyAOL</a></li><li class=\"rss\">" + $(this).attr("href") + "</li></ul></div>";

			$("body").append(feedBox);

			$(".feedTools").hide().removeClass("hide");
			var ftHeight = $(".feedTools").height();
			var ftWidth = $(".feedTools").width();
			$(".feedTools").css({"position" : "absolute", "top" : ((window.Event) ? e.pageY : e.clientY) + scrollFix, "left" : ((window.Event) ? e.pageX : e.clientX) , width : "0px", height : "0px"});
			$(".feedTools").animate({width : ftWidth, height : ftHeight}, 800);

			$(".feedTools .close").click(function() {
				$(".feedTools").animate({width : "0px", height : "0px"}, {
					duration : 800,
					complete : function() {
						$(".feedTools").remove();
					}
				});
			});

			//return false; //<- prevents click thorugh on the link. Must be there for a reason
			return true;
		});
	};

	/***********************************************************************
	*                    Other Sports Dropdown Menu - LD                   *
	***********************************************************************/
	if ($("#otherSportsSelector").length > 0) {
		$("#otherSportsSelector").removeClass("hide");

		// If a user selects a sport, enable the submit button
		$("#otherSports").change(function() {
			var sportSelected = $(this).find(":selected").text();
			if ((sportSelected != "") && (sportSelected != "Select a Sport")) {
				$("#otherSportsSelector > #otherSportNav > input[type='submit']").removeClass("subBtnInactive").addClass("subBtnActive").attr("disabled",false);
			}
			else {
				$("#otherSportsSelector > #otherSportNav > input[type='submit']").removeClass("subBtnActive").addClass("subBtnInactive").attr("disabled",true);
			}
		});

		// If the user wants to navigate to their chosen sport, forward them to it
		$("#otherSportsSelector > #otherSportNav > input[type='submit']").click(function() {
			$("#otherSportsSelector > #otherSportNav > input[type='submit']").removeClass("subBtnActive").addClass("subBtnInactive").attr("disabled",true);
			window.location = $("#otherSports > option[value^='http://']:selected").attr("value");
			return false;
		});
	}

	/***********************************************************************
	*                          Dating widget - LD                          *
	***********************************************************************/
	if($("#comDating").length > 0) {
		var headID = document.getElementsByTagName("head")[0];
		var datingScriptOne = document.createElement('script');
		datingScriptOne.type = 'text/javascript';
		datingScriptOne.src = 'http://is014.www.is.121d8.com/js/find_search.js';
		headID.appendChild(datingScriptOne);
		var datingScriptTwo = document.createElement('script');
		datingScriptTwo.type = 'text/javascript';
		datingScriptTwo.src = 'http://is014.www.is.121d8.com/js/goPage.js';
		headID.appendChild(datingScriptTwo);
		var datingScriptThree = document.createElement('script');
		datingScriptThree.type = 'text/javascript';
		datingScriptThree.src = 'http://is014.www.is.121d8.com/js/postCodes_uk.js';
		headID.appendChild(datingScriptThree);

		$("#datingTabs").tabs();

		if ($("#comDating").comments(5) == 'MALE') {
			$("#datingTabs").tabs('select' , 0);
		}
		else if ($("#comDating").comments(5) == 'FEMALE') {
			$("#datingTabs").tabs('select' , 1);
		}
		else {
			$("#datingTabs").tabs('select' , 2);
		}
	}

	/***********************************************************************
	*    Function to launch SkimLinks if the JS exists in the HTML - LD & OJB    *
	***********************************************************************/
	if ($("#skimLinks").length > 0) {
		/* Variables for Skimlinks */
		window.skimlinks_pub_id = '296X467';

		/*var mugic_test = "on";*/
		if ($("meta[name='GSAChannel']").attr("content") == "finance") {
			if ($("meta[name='GSACategory']").attr("content") == "personalfinance") {
				window.skimlinks_pub_id = '296X684';
			}
			else {
				window.skimlinks_pub_id = '296X683';
			}
		}
		else if ($("meta[name='GSAChannel']").attr("content") == "travel") {
			window.skimlinks_pub_id = '296X674';
		}
		else if ($("meta[name='GSAChannel']").attr("content") == "fashion") {
			window.skimlinks_pub_id = '296X675';
		}
		else if ($("meta[name='GSAChannel']").attr("content") == "property") {
			window.skimlinks_pub_id = '296X676';
		}
		else if ($("meta[name='GSAChannel']").attr("content") == "gardening") {
			window.skimlinks_pub_id = '296X677';
		}
		else if ($("meta[name='GSAChannel']").attr("content") == "culture") {
			window.skimlinks_pub_id = '296X678';
		}
		else if ($("meta[name='GSAChannel']").attr("content") == "science_and_technology") {
			window.skimlinks_pub_id = '296X680';
		}
		else if ($("meta[name='GSAChannel']").attr("content") == "sport") {
			window.skimlinks_pub_id = '296X679';
		}

		skimlinks();
	}

	/***********************************************************************
	*    Function to rotate commercial puffs  - OJB                        *
	***********************************************************************/
	if ($(".rotatingPuffContainer").length > 0) {
		for (i in $(".rotatingPuffContainer").get()) {
			$(".rotatingPuffContainer:eq(" + i + ") > .commercialPuff").removeClass("hidden");
			$(".rotatingPuffContainer:eq(" + i + ") > .commercialPuff > .sideBars > .spacing > .nav").removeClass("hidden");
			var rotatingPuffId = $(".rotatingPuffContainer:eq(" + i + ")").attr("id");
			$("#" + rotatingPuffId).cycle({
				fx			:	'fade',
				speed		:	0,
				timeout		:	$(".rotatingPuffContainer:eq(" + i + ")").comments(0),
				next		:	 '.n' + rotatingPuffId,
				prev		:	'.p' + rotatingPuffId,
				cleartype	:	true
			});

			$(".n" + rotatingPuffId).click(function() {
				// Scoping issue, reset this value
				rotatingPuffId = $(this).parents(".rotatingPuffContainer").attr("id");
				$("#"  +rotatingPuffId).cycle("pause");
				return false;
			});

			$(".p" + rotatingPuffId).click(function() {
				// Scoping issue, reset this value
				rotatingPuffId = $(this).parents(".rotatingPuffContainer").attr("id");
				$("#" + rotatingPuffId).cycle("pause");
				return false;
			});
		}
	}

	/********************************************************************
     * Cycle initialiser for Tab Widget Rotator layout  SH    *
     ********************************************************************/
	$(function() {
		$('.controlledTab .ssAds').each(function() {
			var thisTabId = $(this).parent('.controlledTab').attr('id');

			if (thisTabId.length > 0) {
				thisTabId = thisTabId.substr(16);
			}

			$(this).cycle({
				fx		:	'fade',
				speed	:	'fast',
				next	:	'#n' + thisTabId,
				prev	:	'#p' + thisTabId,
				timeout	:	4000
			});
		});
	});

    /********************************************************************
     * Funciton for Webtrends on Thomas Cook / Configurable Tabs  KB    *
     ********************************************************************/
	$(".configTabs").each(function() {
		$(this).find('.controlledTab:first').show();
		$(this).find('li:first').addClass('ui-tabs-selected');
	});

	if ($(".configTabs").length > 0) {
		$('.configTabs .loadingMessage').css({display: 'none'});

		$('.configTabs .mainTabs a').click(function() {
			$(this).parent().parent().parent().siblings('.controlledTab').hide();
			//$('#configurableTabs .controlledTab').hide();
			$($(this).attr('href')).show();
			$(this).parent().siblings('.ui-tabs-selected').removeClass('ui-tabs-selected');
			//$('#configurableTabs .ui-tabs-selected').removeClass('ui-tabs-selected');
			$(this).parent().addClass('ui-tabs-selected');
			$(this).blur();
			return false;
		});
		// NB. Do not simulate a click on the first tab, or else this will fire off WebTrends tracking
		//$('#configurableTabs').tabs().tabs('select', 0);
		$('.configTabs'). find('.controlledTab:first').show();
		$('.configTabs').find('li:first').addClass('ui-tabs-selected');
	}

	// track the impressions of a commercial element
	// trackAdImpressions();

	/********************************************************************
     * Funciton for Autotrader / Configurable Tabs     *
     ********************************************************************/
	/*autotrader START*/
	var fieldName = 'selectedTab';
	if ((position = location.href.indexOf(fieldName)) > -1) {
		pairs = location.href.substr(position).split('&');
		for (i = 0; i < pairs.length; i++) {
			if (pairs[i].substr(0,fieldName.length) == fieldName) {
				answer = pairs[i].split('=');
				$('#linktoConfigurableTab_' + answer[1]).click();
			}
		}
	}
	/*autotrader END */

    /********************************************
     *   Comments and Blogs Carousel on Portal 4   *
     ********************************************/
	//if ($('.commentContainerCarousel').length > 0) {
		var container = $('.commentContainerCarousel'),
		btnFwd = container.find('.slideForward'),
		btnBack = container.find('.slideBack'),
		thisCntUl, thisCntUlLIs, thisCntDots, viewArea, totalLiWidth = 0,
		initialLftMargin, marginToSlide = 0, count = 0;

		// set variable values for each comments and blogs widget, also create the dots
		container.each(function() {
			thisCntUl = $(this).find('ul.commentsSlider');
			thisCntULLIs = thisCntUl.children('li');
			viewArea = thisCntULLIs.outerWidth(true) * 4;
			totalLiWidth = thisCntULLIs.outerWidth(true) * thisCntULLIs.length;
			initialLftMargin = parseInt(thisCntUl.css('marginLeft'));
			dotsToCreate = Math.ceil((thisCntULLIs.length / 4) -1);

			thisCntUl.width((totalLiWidth <= viewArea) ? viewArea : totalLiWidth); // set width of the UL to equal total number of LIs width

			// update the arrow states
			/* Removing active/inactive state with hovers only
			if (totalLiWidth > viewArea) {
				btnFwd.css({'backgroundColor' : '#C00'});
			}
			*/
			// create and append dots to the container
			thisCntDots = thisCntUl.siblings('.navDots');
			thisCntDots.append(function() {
				var spans = "";
				for (i = 0; i < dotsToCreate; i++) {
					spans += '<span class="dot"></span>';
				}
				return spans;
			});
			dotClickHandles(thisCntDots.children('span'));
		});

		// handle back forward arrows and navigation dot clicks
		btnFwd.click(function() {
			return clickHandlers('fwd', $(this));
		});

		btnBack.click(function() {
			return clickHandlers('bk', $(this));
		});

		function dotClickHandles(thisCntDots) {
			thisCntDots.click(function() {
				var clicked = $(this),
				prevPos = thisCntDots.index(thisCntDots.filter('.selectedDot')), // previously selected dot position
				newPos = thisCntDots.index(clicked), // new selected dot position
				direction = '', shiftToPage = 0;

				if (newPos > prevPos) {
					direction = 'fwd';
				}
				else if (newPos < prevPos) {
					direction = 'bk';
				}
	 			shiftToPage = newPos - prevPos;
	 			
	 			clickHandlers(direction, clicked.parents('.navDots'), shiftToPage);
	 			_updateDots(clicked);
			});
		}

		function clickHandlers(direction, el, shiftPages) {
			var shiftPages;

			// forward
			if ((direction == 'fwd') && (marginToSlide < (totalLiWidth - viewArea - initialLftMargin))) {
				shiftPages = shiftPages || 1;
				marginToSlide += (viewArea * shiftPages);
				if (count == 0) {
					marginToSlide = (viewArea * shiftPages) - initialLftMargin;
				}
				count += shiftPages;
				_animateComments(el, -marginToSlide); // slide the comments and blogs

				/* Removing active/inactive state with hovers only
				btnBack.css({'backgroundColor' : '#C00'});
				if (marginToSlide >= (totalLiWidth - viewArea - initialLftMargin)) { // change fwd button colour (setting to inactive)
					btnFwd.css({'backgroundColor' : '#E9E9DF'});
				}
	 			*/
			}

			// back
			if ((direction == 'bk') && (marginToSlide > initialLftMargin)) {
				shiftPages = shiftPages || -1;
				marginToSlide -= (viewArea * -shiftPages);
				count += shiftPages;
				if (count == 0) {
					marginToSlide = -initialLftMargin;
					/* Removing active/inactive state with hovers only
					btnBack.css({'backgroundColor' : '#E9E9DF'});
					btnFwd.css({'backgroundColor' : '#C00'});
					*/
				}
				/*
				else {
					btnFwd.css({'backgroundColor' : '#C00'});
				}
				*/
				_animateComments(el, -marginToSlide); // slide the comments and blogs

				/* Removing active/inactive state with hovers only
				if (marginToSlide <= initialLftMargin) {
					btnBack.css({'backgroundColor' : '#E9E9DF'});
				}
		 		*/
			}

	 		return false;
		}

		function _animateComments(el, newMargin) {
			el.siblings('ul.commentsSlider').animate({'marginLeft': newMargin});
			updateAllDots(el.siblings('.navDots').find('span'), count); // update dots display
		}

		function updateAllDots(dots, position) {
			dots.each(function(i) {
				if (i == position) {
					_updateDots($(this));
				}
			});
		}

		function _updateDots(el) {
			el.addClass('selectedDot').siblings('.dot').removeClass('selectedDot');
		}
	//}

	// Entertainment Reviews in Portal 4
	$('.label.entReview').parent().each(function() {
		$(this).children('.entReview').first().css({'borderTop':'0', 'paddingTop':'0','marginTop':'-1px'});
	});
});

/***********************************************************************
*         Standard functions required for Breaking News Ticker         *
***********************************************************************/
function rotateBreakingNews() {
	if ($("#tmglBreakingNews > ul > li:first[class*='shown']").length > 0) {
		$("#tmglBreakingNews > ul > li:first[class*='shown']").removeClass("shown").hide();
		$("#tmglBreakingNews > ul > li:not(:first)[class!='shown']").addClass("shown").show();
	}
	else {
		$("#tmglBreakingNews > ul > li:first[class!='shown']").addClass("shown").show();
		$("#tmglBreakingNews > ul > li:not(:first)[class*='shown']").removeClass("shown").hide();
	}
}

/***********************************************************************
*          Standard functions required for Commercial Carousel         *
***********************************************************************/
var ccObj = [];
function comCarouselObj() {
	this.carousel = null;
	this.timeoutId = null;
}

function comCarNextPartner(id) {
	var activePartner = $(ccObj[id].carousel).find("#carouselBtns > .btn").index($(ccObj[id].carousel).find("#carouselBtns > .btn[class*=active]").get(0));
	if ($(ccObj[id].carousel).find("#carouselBtns > .btn").get().length > (activePartner + 1)) {
		comCarSelectPartner(id, activePartner + 1);
	}
	else {
		comCarSelectPartner(id, 0);
	}
}

function comCarSelectPartner(id, btn) {
	$(ccObj[id].carousel).find("#carouselBtns > .btn[class*='active']").removeClass("active");
	$(ccObj[id].carousel).find("#carouselBtns > .btn:eq("+btn+")").addClass("active");

	$(ccObj[id].carousel).find(".partner").hide();
	$(ccObj[id].carousel).find("#partner-" + $(ccObj[id].carousel).find("#carouselBtns > .btn[class*='active'] > img").attr("id")).show();
}

/* OLD WINDOW OPEN FOR MIGRATED CONTENT */
function newWindow(url, name, features) {
	var newWin = window.open(url,name,features);
	newWin.moveTo(50, 50);
	newWin.focus();
}

/* function to dynamically generate JS includes */
function getJS(src) {
	var js = document.createElement("script");
	js.type = "text/javascript";
	js.src = src;
	document.getElementsByTagName("head")[0].appendChild(js);
}

/* function to get request parameters in JS */
function getParams(url) {
	/* get the search query pairs */
	var searchQry = url.substring(url.indexOf("?") + 1, url.length).split("&");
	var requestObj = new Array();
	/* Loop through the pairs and create their name/value pairs in the new object */
	for (i in searchQry) {
		var temp = searchQry[i].split("=");
		requestObj[temp[0]] = temp[1];
	}
	return requestObj;
}

/* Standard function to rebuild standard tagging (removing any old data) */
function dcsRebuild() {
	/*
	//Clear existing parameters
	if (typeof(DCSext) != "undefined") {
		for (N in DCSext) {
			DCSext[N] = "";
		}
	}
	//We also need to clear WT params (these don't all get cleared in dcsCleanup in the Webtrends script)
	if (typeof(WT) != "undefined") {
		for (N in WT) {
			WT[N] = "";
		}
	}


	//Rebuild from meta
	dcsMeta();
	dcsMetaCustom();
	*/
	
	Webtrends.dcs['dcsCleanUp'];
	Webtrends.dcs['dcsMeta'];
	Webtrends.dcs['dcsMetaCustom'];
}

var timer;

/* Dating widget function to navigate through tabs */
function changeTab(type,url,aID) {
	if (type != 'searchd') {
		$("#"+type).html("<div class='datingLoader'>Loading...</div>");
		if (type =='male') {
			var gen = 'MALE';
			$("#comDating .colRight #maleImageButton").html('<img  src="/template/ver1-0/i/dating/men_light.png" style="float: right;"/>');
			$("#comDating .colRight #femaleImageButton").html('<img  src="/template/ver1-0/i/dating/women_dark.png" style="float: right;"/>');
			$("#comDating .colRight #searchImageButton").html('<img  src="/template/ver1-0/i/dating/search_dark.png" style="float: right;"/>');
			$("#comDating > #searchd").addClass("hide");
			$("#comDating > #male").removeClass("hide");
			$("#comDating > #female").addClass("hide");
		}
		else if (type =='female') {
			var gen = 'FEMALE';
			$("#comDating .colRight #femaleImageButton").html('<img  src="/template/ver1-0/i/dating/women_light.png" style="float: right;"/>');
			$("#comDating .colRight #maleImageButton").html('<img  src="/template/ver1-0/i/dating/men_dark.png" style="float: right;"/>');
			$("#comDating .colRight #searchImageButton").html('<img  src="/template/ver1-0/i/dating/search_dark.png" style="float: right;"/>');
			$("#comDating > #searchd").addClass("hide");
			$("#comDating > #male").addClass("hide");
			$("#comDating > #female").removeClass("hide");
		}

		var id3 = aID.replace(/&/g,";");

		$.ajax({
			url: 'http://' + window.location.host + '/template/ver1-0/templates/fragments/dating/datingLargeTab.jsp?xmlUrl=' + url + '&aID=' + id3 + '&genderfromURL=' + gen,
			cache: false,
			success: function(html) {
				$("#" + type).html(html);
				//datingClickReporting(type);
			}
		});
	}
	else if (type =='searchd') {
		$("#comDating .colRight #searchImageButton").html('<img  src="/template/ver1-0/i/dating/search_light.png" style="float: right;"/>');
		$("#comDating .colRight #femaleImageButton").html('<img  src="/template/ver1-0/i/dating/women_dark.png" style="float: right;"/>');
		$("#comDating .colRight #maleImageButton").html('<img  src="/template/ver1-0/i/dating/men_dark.png" style="float: right;"/>');
		$("#comDating > #searchd").removeClass("hide");
		$("#comDating > #male").addClass("hide");
		$("#comDating > #female").addClass("hide");
	}
	window.clearInterval(timer);
	timer = window.setInterval(cycle, 7000);
}

function viewNext(variable, gend, id) {
	var xmlNext = variable + 1;
	if (gend == 'FEMALE') {
		var xml = 'dating-file-female';
		var gen = 'female';
	}
	else if (gend == 'MALE') {
		var xml = 'dating-file-male';
		var gen = 'male';
	}

	var id2 = id.replace(/&/g,";");

	$.ajax({
		url: 'http://' + window.location.host + '/template/ver1-0/templates/fragments/dating/datingLargeTab.jsp?xmlUrl=' + xml + '&aID=' + id2 + '&profileNumber=' + xmlNext + '&genderfromURL=' + gend,
		cache: false,
		success: function(html) {
			$("#" + gen).html(html);
			//datingClickReporting(type);
		}
	});
	window.clearInterval(timer);
	timer = setInterval(cycle, 7000);
}

$(document).ready(function() {
	var delay = 9000;
	timer = setInterval(cycle, 7000);
});

function cycle() {
	var fade = 2000;
	var banners = $('.datingBox > ul.profiles');
	var len = banners.length;
	var i = 0;
	$(banners[0]).fadeIn(fade, function() {
		if (($("#comDating #female").hasClass("hide") == false) && ($("#comDating #male").hasClass("hide") == false)) {
			if (document.getElementById('genderRef1')) {
				var gend = document.getElementById('genderRef1').value;
			}
			else if (document.getElementById('genderRef2')) {
				var gend = document.getElementById('genderRef2').value;
			}
			var xmlNext = parseInt(document.getElementById('xpathReference').value) + 1;
		}
		else if (($("#comDating #female").hasClass("hide") == false) && ($("#comDating #male").hasClass("hide") == true)) {
			var gend = "FEMALE";
			var xmlNext = parseInt($("#comDating #female > .datingBox > ul.profiles #xpathReference").val()) + 1;
		}
		else if (($("#comDating #male").hasClass("hide") == false) && ($("#comDating #female").hasClass("hide") == true)) {
			var gend = "MALE";
			var xmlNext = parseInt($("#comDating #male > .datingBox > ul.profiles #xpathReference").val()) + 1;
		}

		var id = document.getElementById('aIDRef').value;
		var id1 = id.replace(/&/g,";");
		if (gend == 'FEMALE') {
			var xml = 'dating-file-female';
			var gen = 'female';
		}
		else if (gend == 'MALE') {
			var xml = 'dating-file-male';
			var gen = 'male';
		}

		$.ajax({
			url: 'http://' + window.location.host + '/template/ver1-0/templates/fragments/dating/datingLargeTab.jsp?xmlUrl=' + xml + '&aID=' + id1 + '&profileNumber=' + xmlNext + '&genderfromURL=' + gend,
			cache: false,
			success: function(html) {
				$("#" + gen).html(html);
				//datingClickReporting(type);
			}
		});

		$(banners[0]).fadeOut(2000, function() {
		});
	});
}

function datingClickReporting(tabType) {
	if ((tabType == "") || (tabType == null)) {
		$("#comDating a").click(function() {
			dcsRebuild();
			dcsMultiTrack('DCSext.clickArticleId', $(this).parents("#comDating").comments(0), 'DCSext.clickArticleTitle', $(this).parents("#comDating").comments(1), 'DCSext.clickSectionId', $(this).parents("#comDating").comments(2), 'DCSext.clickSectionName', $(this).parents("#comDating").comments(3), 'DCSext.clickSectionPosition', $(this).parents("#comDating").comments(4), 'DCSext.clickURL', $(this).attr('href'), 'WT.tx_u', '1', 'DCS.dcsref', DCS.dcssip + DCS.dcsuri);
		});
	}
	else {
		$("#comDating > #" + tabType + " > a").click(function() {
			dcsRebuild();
			dcsMultiTrack('DCSext.clickArticleId', $(this).parents("#comDating").comments(0), 'DCSext.clickArticleTitle', $(this).parents("#comDating").comments(1), 'DCSext.clickSectionId', $(this).parents("#comDating").comments(2), 'DCSext.clickSectionName', $(this).parents("#comDating").comments(3), 'DCSext.clickSectionPosition', $(this).parents("#comDating").comments(4), 'DCSext.clickURL', $(this).attr('href'), 'WT.tx_u', '1', 'DCS.dcsref', DCS.dcssip + DCS.dcsuri);
		});
	}
}

function rotatingPuffReporting(obj) {
	dcsRebuild();
	dcsMultiTrack('DCSext.clickArticleId', $(obj).comments(0), 'DCSext.clickArticleTitle', $(obj).parents(".rotatingPuffContainer").comments(2), 'DCSext.clickSectionId', $(obj).parents(".rotatingPuffContainer").comments(3), 'DCSext.clickSectionName', $(obj).parents(".rotatingPuffContainer").comments(4), 'DCSext.clickSectionPosition', $(obj).parents(".rotatingPuffContainer").comments(5), 'WT.tx_u','1', 'DCS.dcsref', DCS.dcssip + DCS.dcsuri);
}

/* Brightcove multi-player loader */
function onTemplateLoaded() {
	for (i in $(".BCPlayer").get()) {
		var modVP;
		if (brightcove.instances[$(".BCPlayer:eq(" + i + ") object").attr("id")]) {
			bcExp = brightcove.getExperience($(".BCPlayer:eq(" + i + ") object").attr("id"));
			bcExp.getModule(APIModules.VIDEO_PLAYER).setVolume($(".BCPlayer:eq(" + i + ")").comments(0));
		}
	}
}

/* This is called for the random sorting of commercial unit (First*Clarity) */
function randOrd() {
	return (Math.round(Math.random()) - 0.5);
}



/***********************************************
*         Ooyala Video Initialisation          *
***********************************************/
// Save old player initialiser function, and append it to a new version of the function
var oldOoyalaPlayerInit = receiveTelegraphPlayerEvent;
// Optimise closures to prevent recursive function
var receiveTelegraphPlayerEvent = function(playerId, eventName, eventParams) {
	// Change the volume only for API ready players
	alert('Ooyala Event');
	if (eventName == "apiReady") {
		var playerVol = document.getElementById(playerId).parentNode.innerHTML;
		playerVol = parseFloat(playerVol.substring(playerVol.indexOf("<!--") + 4, playerVol.indexOf("-->")));

		if ((playerVol != null) && !isNaN(playerVol)) {
        	getFlashMovie(playerId).setVolume(playerVol);
        }
	}

	// Continue the the rest of the Ooyala configuration
	var ooyalaPlayerInit = oldOoyalaPlayerInit(playerId, eventName, eventParams);
	return ooyalaPlayerInit;
}

/************************************
*	Olympics Sports A-Z Selector	*
************************************/
$(function() {
	$('#sportA2Z #div-olympicsA2Z > a,#sportA2Z #div-paralympicsA2Z > a').mouseover(function() {
		$('#sportA2Z').css("margin-bottom","0");
		$('#a2zEventName,#a2zParaEventName').css("display","block");
		$('#a2zEventName,#a2zParaEventName').css("padding","2px 5px 4px");
		$('#a2zEventName a,#a2zParaEventName a').unbind();
		var sportName = this.id;
		var sectionLink = this.href;
		var s = sportName.split('_');
		var firstLetter, restWord;
		var w = new Array();
		for (i = 0; i < s.length; i++) {
			firstLetter = s[i].substring(0,1).toUpperCase();
			restWord = s[i].substring(1);
			w[i] = firstLetter + restWord;
		}
		var eventName = w.join(' ');
		$('#a2zEventName span,#a2zParaEventName span').text(eventName).append(" \&raquo;");
		$('#a2zEventName a,#a2zParaEventName a').attr('href',sectionLink);
	});

	/**************************************
	*		Tabbed Sport Selector         *
	**************************************/
	$TabActive = $("#sportA2Z > .tabs > ul > li.current");

	$('#sportA2Z > .tabs > ul > li').click(function() {
		$('#sportA2Z').css("margin-bottom","0");
	    $('#a2zEventName span,#a2zParaEventName span').text("").append(" \&raquo;");
	    $("#a2zEventName a,#a2zParaEventName a").removeAttr("href");

	    if ($(this) != $TabActive) {
	    	$TabActive.removeClass('current');
	    	$(this).addClass('current');
	    	$TabActive = $(this);

	    	contentIdChildDiv = "#div-" + $TabActive.attr("id");
	    	$("div.view-sports").hide();
	    	$(contentIdChildDiv).show();
	    }
	});

	/************************************
	*	Olympics Banners RollOver		*
	************************************/
	$('.olympicGuideRollOver').css({'position' : 'absolute', 'bottom' : '0'});
	$('.olympicGuide').hover(function() {
		$(this).find(".olympicGuideRollOver").animate({height : '100%'}, { queue : false});
		$(this).find(".olympicGuideRollOver .description").css({'display' : 'block', 'width' : '100%', 'height' : '100%', 'padding-right' : '20px'});
	}, function() {
		$(this).find(".olympicGuideRollOver").animate({height : '29px'}, {queue : false});
	});
});

/**************************************************************
*   Editor's Choice styles when Mega MPUs enabled on Portal   *
**************************************************************/
function hideEditorsChoiceDiv() {
	if ($('#tmgAd_mpuhpg_3').parent('.admpu').height() <= 260) {
		if ($("#editorschoicePortal3") != null) {
			$("#editorschoicePortal3").show();
		}
	}

	if (($('#tmgAd_mpuhpg_2').parent('.admpu').height() >= 600) || ($('#tmgAd_mpuhpg_3').parent('.admpu').height() >= 600)) {
		$("#editorschoicePortal3").hide();
	}
}

function MpuSelector() {
	if ($('.admpu').height() <= 250) {
		if ($(".comPuff") != null) {
			$(".comPuff").show();
		}
		if ($(".edtChoice") != null) {
			$(".edtChoice").show();
		}
	}

	if ($('.admpu').height() >= 600) {
		$(".comPuff").hide(1);
		$(".edtChoice").hide(1);
	}
}

$(window).load(function() {
	MpuSelector();
});

$(document).ready(function() {
	setTimeout(hideEditorsChoiceDiv, 1000);
	$('.borderRollover').parent().parent().parent().addClass("padDown");
	$('.borderRollover').parent().parent().parent().after("<div class='cl'></div>");
});

/************************************************************
*   Function to load script within script with callball -	*
*   Blogs and Articles (Disqus) on section page  				*
************************************************************/
function loadScript(url, callback) {
	var head = document.getElementsByTagName("head")[0];
	var script = document.createElement("script");
	script.src = url;

	var done = false;
	script.onload = script.onreadystatechange = function() {
		if ((!done) && ((!this.readyState) || (this.readyState == "loaded") || (this.readyState == "complete"))) {
            done = true;
            callback();
            script.onload = script.onreadystatechange = null;
            head.removeChild(script);
		}
	};
	head.appendChild(script);
}

/************************************************************
*   most viewed/commented/etc tabs
*
************************************************************/
$(document).ready(function() {
	$('#mostviewed li').click(function() {
		if ($(this).hasClass('current')) {
			return false;
		}
		else {
			$(this).parent().find('li.current').removeClass('current');
			$(this).addClass('current');
		}
	});
});

/************************************************************
* callback function passed to gigya.socialize.getProviderShareCounts() that displays total number of shares
*
* populates p with id="X", where X is provided in response.context object
************************************************************/
function gigyaShareCountDisplay(response) {
	if (response.errorCode == 0) {
		var total = 0;

		// add up all social counts returned
		for (var key in response.shareCounts) {
			if (response.shareCounts.hasOwnProperty(key)) {
				total += response.shareCounts[key];
			}
		}

		// if count is 0, don't display at all
		if (total > 0) {
			var shareClass = $('.' + response.context.displayElementId),
			commentsLength = shareClass.prev('.comments').length,
			shareCountMajorNews = shareClass.parents('#newsAlert').length;

			shareClass.html('Shared ' + total + ((total === 1) ? ' time' : ' times'));

			if (commentsLength != 0) { // if comments are displayed for the article
				shareClass.css({
					'borderLeft' : function() {
						return (shareCountMajorNews > 0) ? '1px solid #D1D1A6' : '1px solid #EEEEEC';
					},
					'margin' : '-1px 0 0 6px',
					'paddingLeft' : '24px',
					'backgroundPosition' : function() {
						return (shareCountMajorNews > 0) ? '6px -2504px' : '6px -1325px';
					}
        		});
    		}
    		adjustPosition();
        }
		else {
			$('.' + response.context.displayElementId).remove();
		}
	}
	else {
		alert('Error :' + response.errorMessage);
	}

	function adjustPosition() { // if the width of comment count and share count is > than width of the column
		var shareCountWidth = (shareClass.outerWidth() + parseInt(shareClass.css('marginLeft').replace('px',''))),
		commentWidth = (commentsLength > 0) ? shareClass.prev('.comments').outerWidth() : 0;
		if ((commentWidth + shareCountWidth) >= shareClass.parent().outerWidth()) {
			shareClass.prev('.comments').css('float','none');
			shareClass.css({
				'float' : 'none',
				'display' : 'block',
				'margin-left' : '0',
				'border-left' : '0',
				'padding-left' : '19px',
				'backgroundPosition' : function() {
					return (shareCountMajorNews > 0) ? '0 -2688px' : '0 -1127px';
				}
			});
		}
	}
}

/***********************************************************************
*              Small carousel v2                    *
***********************************************************************/
var carouselArray = new Array();
function switchCarousel(carouselType) {
	var carouselDivId = "#" + carouselType;
	/* fix for DIGI-5688*/
	var slide = 100;
	if (carouselType == "carv620") {
		slide = 350;
	}
	/* end of fix for DIGI-5688*/
	var li_counter = 0;
	var li_height = 0;
	var item_margin = 0;
	var left_value = 0;
	//var flagAnimateIt = false;

	/*
	if (carouselType != "carv620") {
		$(carouselDivId + " ul li:first").before($(carouselDivId + " ul li:last"));
    }
    */

	//calculates the margin-left
	var item_width = $(carouselDivId +" ul li").width();
	var item_padding = parseInt($(carouselDivId + " ul li").css('padding-left'), 10) + parseInt($(carouselDivId + " ul li").css('padding-right'), 10);
	var item_border = parseInt($(carouselDivId + " ul li").css('borderLeftWidth'), 10) + parseInt($(carouselDivId + " ul li").css('borderRightWidth'), 10);

	//checks where to place the nav arrows according to which carousel is selected
	if (carouselType != "carv620") {
		var divContainer = $("<div/>").addClass("gallery300Container");
		$(carouselDivId).append(divContainer);
		divContainer.append($(carouselDivId + " ul"));
		var padding_bottom_h4 = parseInt($(carouselDivId + " h4").css('padding-bottom'), 10);
		var padding_bottom_mainDiv = parseInt($(carouselDivId).css('padding-top'), 10);

		var div_height = $(carouselDivId).height();
		var h4_height = $(carouselDivId + " h4").height() + padding_bottom_h4 + padding_bottom_mainDiv;
		li_height = h4_height;

		$(carouselDivId + " ul li").each(function() {
			li_counter++;
		});

		//calculates the margin only for the small carousel to move the first image to its centre
        item_margin = parseInt($(carouselDivId + " ul li").css('marginRight'), 10);
        item_margin = (item_margin * li_counter);
	}
    else if (carouselType == "carv620") {
    	li_height = ($(carouselDivId + " ul li").height()/2) - ($(carouselDivId + " .carv2button").height()/2);

    	//set the caption position according to the height of the images shown in the carousel
    	$(carouselDivId + " ul li").css("position", "relative");
    	$(carouselDivId + " ul li .imageCaption").css("bottom", "0");

    	$("#newsAlert " + carouselDivId + " ul li .imageCaption").each(function() {
    		if ($(this).find('h3').html().replace(/\s/g, '') == "") {
    			$(this).css('display', 'none');
    		}
    	});
    	//flagAnimateIt = true;
	}

	//set top position to the nav arrows and make them visible as not visible before loading the page. This is just to avoid showing the arrows while moving down.
    var item_height = $(carouselDivId + " .gallery300Container li").height();
    $(carouselDivId + " .carv2button").css("bottom", "5px");
    if (carouselType == "carv620") {
    	$(carouselDivId + " .gallery300Container").css("height", item_height);
    	$(carouselDivId + " .carv2button").css("height", item_height + 1);
    }
    $("#newsAlert .twoThirds " + carouselDivId + " .carv2button").css("height", "30px");
	$("#newsAlert .twoThirds " + carouselDivId + " .carv2button").css("top", li_height);
	$("#newsAlert .twoThirds " + carouselDivId + " .carv2button").css("bottom", "0");
	$("#newsAlert .oneHalf " + carouselDivId + " .carv2button").css("height", "30px");
	$("#newsAlert .oneHalf " + carouselDivId + " .carv2button").css("top", li_height);
	$("#newsAlert .oneHalf " + carouselDivId + " .carv2button").css("bottom", "0");

	if (carouselType != "carv620") {
		var carvHeight = parseInt($(carouselDivId + " .carv2button").css("height").slice(0, -2));
		//$(carouselDivId + " .leftButton.carv2button").css("background-position", "3px " + Math.round((carvHeight - 16)/2) + "px");
		//$(carouselDivId + " .rightButton.carv2button").css("background-position", "-25px " + Math.round((carvHeight - 16)/2) + "px");
	}

	//$(carouselDivId + " .carv2button").css("top", li_height);
	$(carouselDivId + " .carv2button").css("display", "block");

	item_width = item_width; //- item_border - item_padding - item_margin;
	first_item_margin_left = parseInt($(carouselDivId+" ul li:first").css('marginLeft'), 10);
	if (first_item_margin_left > 0) {
		item_width = item_width + first_item_margin_left;
	}

	if (li_counter > 2) {
		left_value = item_width * (-1);
		//$(carouselDivId + " .carv2button").css("background-color", "#C00000");
		//flagAnimateIt = true;
	}
	else {
		//left_value = 7;
		left_value = 0;
	}

	//set the "left" attribute as to show partially the first image of the carousel
	if (carouselType == "carv620") {
		$(".twoThirds " + carouselDivId + " ul").css({"left" : left_value});
		$("#newsAlert .oneHalf " + carouselDivId + " ul").css("left", "0");
	}
	else if (carouselType != "carv620") {
		$(carouselDivId + " ul").css("left" , "0px");
	}

	$(carouselDivId + " li").css({"visibility" : "visible"});

	//if (flagAnimateIt) {
		//click right animation
		var carouselUI = (function() {
			var displayImg = 0;

			Number.prototype.mod = function(n) {
             		return (((this % n) + n) % n);
			}

			var imgTotal = $(carouselDivId + " img").length;
			var imgEls = $(carouselDivId + " img");

			$(carouselDivId + " .rightButton").click(function(event) {
				if (!$(carouselDivId + " ul").is(':animated')) {
					var left_indent = 0;
					if (carouselType == "carv620") {
						left_indent = parseInt($(carouselDivId + " ul").css("left")) - item_width;
					}
					else if (carouselType != "carv620") {
						/*
						if ($(carouselDivId + " ul").css("left") == "auto") {
     					left_indent = 0;
     					}
     					else {
     						left_indent = parseInt($(carouselDivId + " ul").css("left"));
     					}
     					*/
     					left_indent = parseInt($(carouselDivId + " ul").css("left")) - item_width;
     				}

					$(carouselDivId + " ul").stop(true,true).animate({"left" : left_indent}, slide, function() {
						$(carouselDivId + " ul li:last").after($(carouselDivId + " ul li:first"));

						//set back the left attribute value to keep the same distance from the left margin
    		            if (carouselType == "carv620") {
    		            	$(".twoThirds " + carouselDivId + " ul").css({"left" : left_value});
    		            	$("#newsAlert .oneHalf " + carouselDivId + " ul").css("left", "0");
    		            }
    		            else if (carouselType != "carv620") {
    		            	//$(carouselDivId + " ul").css({"left" : left_value});
    		            	$(carouselDivId + " ul").css("left", "0");
    		            }
					});
				}

				//DIGI-5059
				displayImg++;
				displayImg = displayImg.mod(imgTotal);
				 if(event.originalEvent !== undefined){
				var el = $(carouselDivId + " img").get(displayImg);
    	        //set the caption position according to the height of the images shown in the carousel
				dcsRebuild();
         		dcsMultiTrack('DCSext.embeddedSlideshowImage', $(el).attr('src'), "WT.dl", "53");
				 }
			});

			//click left animation
			$(carouselDivId + " .leftButton").click(function() {
				if (!$(carouselDivId + " ul").is(':animated')) {
    				var left_indent = 0;
					if (carouselType == "carv620") {
     					left_indent = parseInt($(carouselDivId + " ul").css("left")) + item_width;
     					$(carouselDivId + " ul").css({"left" : (left_indent * (-1)) + 'px'});
     					$(carouselDivId + " ul li:first").before($(carouselDivId + " ul li:last"));

     					$(carouselDivId + " ul").stop(true,true).animate({"left" : "0"}, slide, function() {
     						$(".twoThirds " + carouselDivId + " ul").css({"left" : left_value});
     						$("#newsAlert .oneHalf " + carouselDivId + " ul").css("left", "0");
         				});
					}
					else {
     					left_indent = parseInt($(carouselDivId + " ul").css("left")) + item_width;
         				$(carouselDivId + " ul").stop(true,true).animate({"left" : left_indent}, slide, function() {
         					$(carouselDivId + " ul li:first").before($(carouselDivId + " ul li:last"));
     						$(carouselDivId + " ul").css("left", "0");
         				});
					}
				}

				//DIGI-5059
     		    displayImg--;
     		    displayImg = displayImg.mod(imgTotal);
     		    var el = $(carouselDivId + " img").get(displayImg);
     		    dcsRebuild();
     		    dcsMultiTrack('DCSext.embeddedSlideshowImage',$(el).attr('src'), "WT.dl", "53");
			});
		}());
	//}

	//if the big carousel is selected don't use the opacity when over the pics
    if (carouselType != "carv620") {
    	$(carouselDivId + " li").hover(function() {
    		$(this).stop().animate({opacity: "0.8"}, 'fast');
    	},
    	function() {
    		$(this).stop().animate({opacity: "1"}, 'fast');
    	});
	}
}

/***********************************************************************
	*              boldSideBar script                                    *
	*  it finds all the sidebars in the page which require to be in bold *
***********************************************************************/
$(document).ready(function() {
	$('.sidebars h3').each(function() {
		if ($(this).hasClass('boldSidebar')) {
			$(this).css("font-weight","bold");
		}
	});
});

/**********************************************************************************************
	*        This allows to control the accordion nav arrow icons  							  *
***********************************************************************************************/
$(document).ready(function() {
	$(".accordion h3").each(function(index) {
		$(this).addClass("beforeActiveArrow");
	});

	$(".accordion h3").mouseover(function() {
		var prevAll_element_counter = 0;
		var nextAll_element_counter = 0;
		if ($(this).hasClass('ui-state-active')) {
			$(this).removeClass("beforeActiveArrow");
			$(this).removeClass("afterActiveArrow");
			$(this).siblings().removeClass("beforeActiveArrow");
			$(this).siblings().removeClass("afterActiveArrow");

			$(this).prevAll('h3').each(function() {
				prevAll_element_counter++;
			});
			$(this).nextAll('h3').each(function() {
				nextAll_element_counter++;
			});
			if (prevAll_element_counter > 0) {
				$(this).prevAll('h3').addClass("beforeActiveArrow");
			}
			if (nextAll_element_counter > 0) {
				$(this).nextAll('h3').addClass("afterActiveArrow");
			}
		} 
	});
});

/**********************************************************************************************
*            this moves the comment label next to the paragraph    				              *
***********************************************************************************************/
$(document).ready(function() {
	var p = $("#newsAlert .subTitle p").last();
	var spanComments = $(".subTitle .comments");
	p.append(spanComments.show());

	//fix for Major News comments wrapping issue
	$("#newsAlert .subTitle .comments").css('display', 'inline-block');
});

/**********************************************************************************************
*            this adds the vertical line between the News and Business Section   			  *
***********************************************************************************************/
$(document).ready(function() {
	var heights = $(".oneThirdSpacer .oneThird").map(function() {
		return $(this).height();
    }).get(),
	maxHeight = Math.max.apply(null, heights);
	$(".oneThirdSpacer .newsBusBorder").css("height", maxHeight);
});

/**************************************************************************************************
*            this removes the header bottom border in case the next sibling is the abstract puff  *
***************************************************************************************************/
$(document).ready(function() {
	$(".headerOne").each(function() {
		if ($(this).next().hasClass("headlineImageCentreAbstractPuff")) {
			$(this).addClass("noPuffBorder");
		}
	});
});

/***********************************************************
*            this removes the share count left border      *
************************************************************/
$(document).ready(function() {
	$(".shareCount").each(function() {
		if (!($(this).prev().hasClass("comments"))) {
			$(this).attr("id","shareCountNoLeftBorder");
		}
	});
});

/**************************************************************************************************
*  DIGI-4397  Inline Javascript issue  *
***************************************************************************************************/
if ($('span.stateLatest').length > 0) {
	$('span.stateLatest').each(function() {
		//$(this).prependTo($(this).find('+ p'));
		var p = $(this).parent('a').next('p');
		$(this).prependTo(p);
	});
}
if ($('span.stateNew').length > 0) {
	$('span.stateNew').each(function() {
		//$(this).prependTo($(this).find('+ p'));
		var p = $(this).next('p');
		$(this).prependTo(p);
	});
}

$(document).ready(function() {
	if ((typeof expandMostCommentedArticles != 'undefined') && (expandMostCommentedArticles == true)) {
		$('#mostviewed .tabs').tabs({active:mostCommentedAccordionValue});
		$('#mostviewed .tabs .ui-tabs-nav li').removeClass("ui-tabs-selected");
		$('#mostviewed .tabs .ui-tabs-nav li').removeClass("ui-state-active");
		$('#mostviewed .tabs .ui-tabs-nav li.wt_mostCommented').addClass("ui-state-active");
		$('#mostviewed .tabs .ui-tabs-nav li.wt_mostCommented').addClass("ui-tabs-selected");
		$('#div-SHARED').css("display", "none");
		$('#div-VIEWED').css("display", "none");
		$('#div-COMMENTED').css("display", "block");
	}
	else if ((typeof expandMostSharedArticles != 'undefined') && (expandMostSharedArticles == true)) {
		$('#mostviewed .tabs').tabs({active:mostSharedAccordionValue});
		$('#mostviewed .tabs .ui-tabs-nav li').removeClass("ui-tabs-selected");
		$('#mostviewed .tabs .ui-tabs-nav li').removeClass("ui-state-active");
		$('#mostviewed .tabs .ui-tabs-nav li.wt_mostShared').addClass("ui-state-active");
		$('#mostviewed .tabs .ui-tabs-nav li.wt_mostShared').addClass("ui-tabs-selected");
		$('#div-COMMENTED').css("display", "none");
		$('#div-VIEWED').css("display", "none");
		$('#div-SHARED').css("display", "block");
	}
	else if ((typeof expandMostViewedArticlesTab != 'undefined') && (expandMostViewedArticlesTab == true)) {
		$('#mostviewed .tabs').tabs({active:mostViewedAccordionValue});
		$('#mostviewed .tabs .ui-tabs-nav li').removeClass("ui-tabs-selected");
		$('#mostviewed .tabs .ui-tabs-nav li').removeClass("ui-state-active");
		$('#mostviewed .tabs .ui-tabs-nav li.wt_mostViewed').addClass("ui-state-active");
		$('#mostviewed .tabs .ui-tabs-nav li.wt_mostViewed').addClass("ui-tabs-selected");
		$('#div-SHARED').css("display", "none");
		$('#div-COMMENTED').css("display", "none");
		$('#div-VIEWED').css("display", "block");
	}

	$('#mostviewed .tabs .wt_mostViewed a').click(function() {
		$('#div-SHARED').css("display", "none");
		$('#div-COMMENTED').css("display", "none");
		$('#div-VIEWED').css("display", "block");
		//$('#mostviewed .tabs .wt_mostViewed + .wt_gap').css("background", "transparent");
		//$('#mostviewed .tabs .wt_mostViewed + .wt_gap').css("border-bottom", "1px solid #CCCCCC");
		//$('#mostviewed .tabs .wt_mostShared + .wt_gap').css("background", "transparent");
		//$('#mostviewed .tabs .wt_mostShared + .wt_gap').css("border-bottom", "1px solid #CCCCCC");
	});
	$('#mostviewed .tabs .wt_mostShared a').click(function() {
		$('#div-VIEWED').css("display", "none");
		$('#div-COMMENTED').css("display", "none");
		$('#div-SHARED').css("display", "block");
		//$('#mostviewed .tabs .wt_mostViewed + .wt_gap').css("background", "none no-repeat scroll 0 0 white");
		//$('#mostviewed .tabs .wt_mostViewed + .wt_gap').css("border-bottom", "1px solid white");
		//$('#mostviewed .tabs .wt_mostShared + .wt_gap').css("background", "transparent");
		//$('#mostviewed .tabs .wt_mostShared + .wt_gap').css("border-bottom", "1px solid #CCCCCC");
	});
	$('#mostviewed .tabs .wt_mostCommented a').click(function() {
		$('#div-VIEWED').css("display", "none");
		$('#div-SHARED').css("display", "none");
		$('#div-COMMENTED').css("display", "block");
		//$('#mostviewed .tabs .wt_mostViewed + .wt_gap').css("background", "transparent");
		//$('#mostviewed .tabs .wt_mostViewed + .wt_gap').css("border-bottom", "1px solid #CCCCCC");
		//$('#mostviewed .tabs .wt_mostShared + .wt_gap').css("background", "none no-repeat scroll 0 0 white");
		//$('#mostviewed .tabs .wt_mostShared + .wt_gap').css("border-bottom", "1px solid white");
	});
});

$(document).ready(function() {
	for (x in carouselArray) {
		switchCarousel(carouselArray[x]);
	}
});
/* end of DIGI-4397 issue */

/***********************************************************
*  this generates the money-super market feed widgets      *
************************************************************/
var uk = uk || {};
uk.ms = uk.ms || {};

uk.ms.MenuItems = function(listRef, selVal, UIFunctions) {
	this.closedHeight = 0;
	this.listRef = listRef;
	var _this = this;
	var expandedEl = $(listRef + ' li' + selVal) || false;
	$(listRef).find('.shown .hidden').css('display', 'block');

	function onLoadComplete() {};
	$(listRef + ' li').each(function() {
		_this.closedHeight += 25;
		$(this).click(function() {
			$(listRef + ' li').stop(false, true);
			if (!$(this).hasClass('active') && !$(this).hasClass('shown')) {
				var target = $(this);
				UIFunctions.clickItem(target, expandedEl, _this);
				target.addClass('active');
				expandedEl.removeClass('active shown');
				expandedEl = target;
			}
		});
	});
	(UIFunctions.onLoadComplete || onLoadComplete)($(listRef));
};

uk.ms.horizontalMenu = function() {};
uk.ms.horizontalMenu.prototype.clickItem = function(clickedEl, openEl,_parent) {
	var h = clickedEl.find('table').height() + 31;
	clickedEl.animate({'height' : h + 'px'}, 500);
	openEl.animate({'height' : 25 + 'px'}, 500);
	$(_parent.listRef).animate({'height' : (h + _parent.closedHeight) + 'px'}, 500);
};
uk.ms.horizontalMenu.prototype.onLoadComplete = function(el) {};

uk.ms.verticalMenu = function() {};
uk.ms.verticalMenu.prototype.clickItem = function(clickedEl, openEl, _parent) {
	openEl.find('.hidden').show().fadeOut(500);
	openEl.find('.selBg').hide().fadeIn(500);
	clickedEl.find('.hidden').hide().fadeIn(500);
	clickedEl.find('.selBg').show().fadeOut(500, function() {
		var h = clickedEl.find('table.data').height() + 31;
		$(_parent.listRef).animate({'height' : h + 'px'}, 500);
	});
};
/*************************************************************/

/********DIGI-6260********/
$(document).ready(function() {
	
	var kruxtxt="";
	var rooms="";
	var adults="";
	var checkIndateFormat="";
	var checkOutdateFormat="";
	var country="";
	var region="";
	var startdate="";
	
	//hotels
	//on click of hotels tab
	$('#tabs-1-1 a').click(function(){		
		kruxtxt="Krux('admEvent', 'IiF9URaP', {  }); ";
		appendscript(kruxtxt);
		});
	//on change of check-in date entry
	$('.check-in-block #check-in').live('change',(function(){
		var checkin=$('.check-in-block #check-in').val();
		var dateParts = checkin.split(" ");	
		checkIndateFormat = dateParts[1].concat("_",dateParts[2]);
		kruxtxt="Krux('admEvent', 'IgVfk8-O', { check_in:'"+checkIndateFormat+"' });";
		appendscript(kruxtxt);
	})
	);
	$('#check-inDialogContainer').click(function(){
		var checkin=$('.check-in-block #check-in').val();
		var dateParts = checkin.split(" ");	
		checkIndateFormat = dateParts[1].concat("_",dateParts[2]);
		kruxtxt="Krux('admEvent', 'IgVfk8-O', { check_in:'"+checkIndateFormat+"' });";
		appendscript(kruxtxt);
		
		});
	//on change of check-out date entry
	$('.check-out-block #check-out').live('change',(function(){
		var checkout=$('.check-out-block #check-out').val();
		var dateParts = checkout.split(" ");	
		checkOutdateFormat = dateParts[1].concat("_",dateParts[2]);
		kruxtxt="Krux('admEvent', 'IgVf2LYJ', { check_out:'"+checkOutdateFormat+"' });";
		appendscript(kruxtxt);
	})
	);
	$('#check-outDialogContainer').click(function(){
		var checkout=$('.check-out-block #check-out').val();
		var dateParts = checkout.split(" ");	
		checkOutdateFormat = dateParts[1].concat("_",dateParts[2]);
		kruxtxt="Krux('admEvent', 'IgVf2LYJ', { check_out:'"+checkOutdateFormat+"' });";
		appendscript(kruxtxt);
		
		});
	//on change of no-of rooms selected
	$('.rooms-block #rooms').change(function(){
		rooms= $('#rooms option:selected').text();
		kruxtxt="Krux('admEvent', 'IgVgO-lj', { room_number:'"+rooms+"'})";
		appendscript(kruxtxt);
		});
	//on change of no of guests selected
	$('.adults-block #adults').change(function(){
		adults= $('#adults option:selected').val();
		kruxtxt="Krux('admEvent', 'IgVgbRM4', { guests_number:'"+adults+"' });";
		appendscript(kruxtxt);
		});
	//on submit of form data: clicking search btn
	$('#search-btn').click(function(){
		kruxtxt="Krux('admEvent', 'IgVhDDmL', { check_in:'"+checkIndateFormat+"', check_out:'"+checkOutdateFormat+"', guests_number:'"+adults+"', room_number:'"+rooms+"' }); ";
		appendscript(kruxtxt);
		});
	//cruises 
	//on click of cruises tab
	$('#tabs-1-2 a').click(function(){
		kruxtxt="Krux('admEvent', 'IiF9id9K', {  });";
		appendscript(kruxtxt);
		});
	
	//cottages
	//on click of cottages tab	
	$('#tabs-1-3 a').click(function(){
		kruxtxt="Krux('admEvent', 'IiF9yrT5', {  });";
		appendscript(kruxtxt);
		});
	// on select of country
	$('#thg_countrylist ').change(function(){
		var countryName= $('#thg_countrylist option:selected').text();
		var countryNameParts = countryName.split(/\s+/);
		var countryNameTemp = "";
		for (var j=0; j<countryNameParts.length; j++)
  		{	
			if (j == 0 )
			{
				countryNameTemp = countryNameParts[j];
			}else{
				countryNameTemp = countryNameTemp.concat("_",countryNameParts[j]);
			}
 		}
		if (countryNameParts.length == 1)
		{
			countryName = countryNameParts[0];		
		}else{
			countryName = countryNameTemp;
		}
		country = countryName.toUpperCase();	
		kruxtxt="Krux('admEvent', 'IgVn3qz5', { country:'"+country+"'})";
		appendscript(kruxtxt);
		});
	//on select of region
	$('#thg_regionlist ').live('change',(function(){
		var countryName = $('#thg_countrylist option:selected').text();
		var regionName= $('#thg_regionlist option:selected').text();		
		var regionNameParts = regionName.split(/\s+/);	
		var countryNameParts = countryName.split(/\s+/);	
		var regionNameTemp = "";
		var countryNameTemp = "";
		for (var i=0; i<regionNameParts.length; i++)
  		{	
			if (i == 0 )
			{
				regionNameTemp = regionNameParts[i];
			}else{
				regionNameTemp = regionNameTemp.concat("_",regionNameParts[i]);
			}
 		}
		if (regionNameParts.length == 1)
		{
			regionName = regionNameParts[0];		
		}else{
			regionName = regionNameTemp;
		}

		for (var j=0; j<countryNameParts.length; j++)
  		{	
			if (j == 0 )
			{
				countryNameTemp = countryNameParts[j];
			}else{
				countryNameTemp = countryNameTemp.concat("_",countryNameParts[j]);
			}
 		}
		if (countryNameParts.length == 1)
		{
			countryName = countryNameParts[0];		
		}else{
			countryName = countryNameTemp;
		}
		region = (countryName.toUpperCase()).concat("_",regionName);								

		kruxtxt="Krux('admEvent', 'IgVoC923', { region:'"+region+"'})";
		appendscript(kruxtxt);
		})
		);
	
	//on change of start date text
	$('#thg_startdate').change(function(){
		startdate= $('#thg_startdate').val();
		var dateParts = startdate.split("/");
		var month = "";
		if(dateParts[0]== '01')
		{
			month = 'January';	
		}
		else if(dateParts[0]== '02')
		{
			month = 'February';
		}
		else if(dateParts[0]== '03')
		{
			month = 'March';
		}
		else if(dateParts[0]== '04')
		{
			month = 'April';
		}
		else if(dateParts[0]== '05')
		{
			month = 'May';		
		}
		else if(dateParts[0]== '06')
		{
			month = 'June';
		}
		else if(dateParts[0]== '07')
		{
			month = 'July';
		}
		else if(dateParts[0]== '08')
		{
			month = 'August';
		}
		else if(dateParts[0]== '09')
		{
			month = 'September';
		}
		else if(dateParts[0]== '10')
		{
			month = 'October';		
		}
		else if(dateParts[0]== '11')
		{
			month = 'November';
		}
		else if(dateParts[0]== '12')
		{
			month = 'December';
		}
	
		startdate = month.concat("_",dateParts[2]);
		
		kruxtxt="Krux('admEvent', 'IgVoibrI', { start_date:'"+startdate+"'})";
		appendscript(kruxtxt);
		});

	
	//on submit of details click search
	$('#thg_submit').click(function(){
		kruxtxt="Krux('admEvent', 'IgVo7JVg', { country:'"+country+"', region:'"+region+"', start_date:'"+startdate+"'});";
		appendscript(kruxtxt);
		});
});

appendscript = function(elem){
var oHead = document.getElementsByTagName('head')[0];
var oScript= document.createElement("script");
oScript.text=elem;
oHead.appendChild( oScript);
}
/********END OF DIGI-6260********/


/*Changed as per OTSN-116*/ 

        $("#searchBar #otsn_search .searchBox,#otsnSearch #queryText").focus(function() {
		//$("#searchBar #otsn_search .searchBox").removeClass("otsn");
        	$(this).nextAll('.searchText').html('');
	});
	$("#searchBar #otsn_search .searchBox,#otsnSearch #queryText").blur(function() {
		if( $(this).val() == '' ) {
			$(this).nextAll('.searchText.google').html('<img src="/template/ver1-0/i/search_google.png">');
                        $(this).nextAll('.searchText.new').html('<span>New</span>Search');
                        $(this).nextAll('.searchText.normal').html('Search');

		}
	});
      
        $('.searchText').click(function(){
               $("#searchBar #otsn_search .searchBox,#queryText").focus();
        });


        $('#otsn_search input[type="submit"]').click(function(event) {  
                event.preventDefault();
		submitSearchForm();
	});
	
	$('#otsn_search .searchBox"]').keypress(function(event) {
		if (event.which==13) { // enter/return
			event.preventDefault();
			submitSearchForm();
		}
	});

        function submitSearchForm(){

            var searchVal = $('.searchBox.otsn').val();  

            $('#searchBlock form .searchBox').val(''); 

            searchVal  = searchVal.replace(/([+-:&&||!(){}^"~*?:\\\[\]])/g,'\\$1');    
     
     
            $('.searchText').html('<input class="hiddensearchBox" value='+searchVal+'></input>').css("margin-left","0");

            $('.hiddensearchBox').val(searchVal.replace('\\',''));

            
            $('#hiddenQueryText').val(searchVal);

            $('#searchBar #otsn_search .searchBox').unbind('blur');

            $('#otsn_search').submit();

        }



