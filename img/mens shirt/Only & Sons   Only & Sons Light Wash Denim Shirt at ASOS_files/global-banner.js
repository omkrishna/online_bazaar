/* Owner ASOS.com*/
/* Global banner JS*/

var gbFade = function($element,action) {
		var opacity = 1;
		if(action == 'over') {
			opacity = 0.5;
		}
		$element.stop(true).animate({'opacity':opacity},{duration:300});
	};

$('#globalBanner,#globalBanner-xmas').on('mouseover','.gb-fade',function(){gbFade($(this),'over');})
			.on('mouseout','.gb-fade',function(){gbFade($(this),'out');});

//$culprit=$("#globalBanner.au li:nth-child(1) div.tooltip").text("*Enter promo code ITSGOTIME at checkout to get 20% off full-priced items. Offer ends at 18:00 AEST on the 25th of April 2014. Valid on one order per customer up to a maximum of AUD $950 (before discount is applied). Excludes delivery charges, gift vouchers, ASOS Premier and ASOS Marketplace. Codes cannot be used with any other promo code, including the free delivery codes. Valid for deliveries to Australia and New Zealand only.");
//$culprit=$("#globalBanner.au li.box-left div.tooltip").html("*Enter promo code ITSGOTIME at checkout to get 20% off full-priced items. Offer ends at 18:00 AEST on the 25th of April 2014. Valid on one order per customer up to a maximum of AUD $950 (before discount is applied). Excludes delivery charges, gift vouchers, ASOS Premier and ASOS Marketplace. Codes cannot be used with any other promo code, including the free delivery codes. Valid for deliveries to Australia and New Zealand only. For full terms and conditions <a href='http://www.asos.com/au/infopages/pgetandc.aspx'>click here</a>.");

$(document).ready(function(){
	// redirect Personal Stylist landing page to holding page
	//$("a[href='/discover/personal-stylist']").attr('href', '/Features/Personal-Stylist-Holding-Page/Cat/pgehtml.aspx?cid=19533');
});
