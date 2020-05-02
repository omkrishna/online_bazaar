var tmg_gigya       = {};
tmg_gigya.permalink = $("meta[property='og:url']").attr("content");
tmg_gigya.tags      = 'e4,' + jQuery("meta[name='DCSext.Channel']").attr("content").toLowerCase();
if (jQuery("meta[name='DCSext.Category']").attr("content")) {
	tmg_gigya.tags = tmg_gigya.tags + ',' + jQuery("meta[name='DCSext.Category']").attr("content").toLowerCase();
}
if (jQuery("meta[name='DCSext.Genre']").attr("content")) {
	tmg_gigya.tags = tmg_gigya.tags + ',' + jQuery("meta[name='DCSext.Genre']").attr("content").toLowerCase();
}
if (jQuery("meta[name='DCSext.author']").attr("content")) {
	tmg_gigya.tags = tmg_gigya.tags + ',' + jQuery("meta[name='DCSext.author']").attr("content").toLowerCase();
}
tmg_gigya.useraction = new gigya.services.socialize.UserAction();

// Configure sharebar using the Open Graph meta
tmg_gigya.useraction.setUserMessage('From The Telegraph');
tmg_gigya.useraction.setTitle(document.title);
tmg_gigya.useraction.setLinkBack(tmg_gigya.permalink);
tmg_gigya.useraction.setDescription($("meta[property='og:description']").attr("content"));
tmg_gigya.useraction.addActionLink('Read more', tmg_gigya.permalink);
tmg_gigya.useraction.addMediaItem({ type: 'image', src: $("meta[property='og:image']").attr("content"), href: tmg_gigya.permalink });

// Twitter customisation
tmg_gigya.useraction_twitter = jQuery.extend(true, {}, tmg_gigya.useraction);
tmg_gigya.useraction_twitter.setTitle(document.title.replace(' - Telegraph', ' | via @Telegraph'));

//This was added as work around as we were not getting share count for the providers - currently can serve for debugging
function printResponse(response) {

	if (response.errorCode == 0) {
		var msg = "Number of Facebook Likes and Shares on this page: "
				+ response.shareCounts.facebook + '\n\n';

		msg += "Number of Tweets on this page: " + response.shareCounts.twitter
				+ '\n\n';
	} else {
		// some error occurred
	}
}

// Callback when Gigya is loaded
hideShareSide = function () {
	$('#shareSide, #shareMini').addClass('loaded-border');
	$('#shareSideContainer, #shareMiniContainer').removeClass('loading');
	$('#shareSideContainer .print, #shareMiniContainer .print, .storyFt .print, #shareBottom_gig_containerParent .print, #tmglSite .print.hidden').removeClass('hidden').removeClass('invisible').css('display', 'block');

	// For IE
	$('#shareBottom .gig-share-bar-container > table > tbody > tr > td:last-child > div').css({'padding-right': 0, 'border-right': 0});
	$('#shareSide .gig-share-bar-container > table > tbody > tr:last-child > td > div, #shareMini .gig-share-bar-container > table > tbody > tr:last-child > td > div').css({'padding-bottom': 0, 'border-bottom': 0});
	
	// Enable only for debugging purposes
	// gigya.socialize.getProviderShareCounts({callback:printResponse})
};

// Helper for section, and article, byline buttons
function tmg_auto_sharebar(id) {
	var container = jQuery('#' + id);

	// Check the container is valid. It may not always exist.
	if (container.length === 0)
		return;

	// Facebook
	var fb = container.data('sm').f;
	if (fb.length > 0) {
		// Update URL
		tmg_gigya.useraction.setLinkBack(fb);
		tmg_gigya.useraction.addActionLink('Read more', fb);
		tmg_gigya.useraction.addMediaItem({ type: 'image', src: $("meta[property='og:image']").attr("content"), href: fb });

		// Get sharebar
		tmg_sharebar(id, {shareButtons: [{ provider: 'facebook-like' }]});

		// Set actionLink and mediaItem back to standard values
		tmg_gigya.useraction.setLinkBack(tmg_gigya.permalink);
		tmg_gigya.useraction.addActionLink('Read more', tmg_gigya.permalink);
		tmg_gigya.useraction.addMediaItem({ type: 'image', src: $("meta[property='og:image']").attr("content"), href: tmg_gigya.permalink });
	}
}

var channelName = "";
var categoryName = "";
var getChannelAndCategory = function (){
	if(document.getElementsByName("DCSext.Channel")[0] != null){
		channelName = document.getElementsByName("DCSext.Channel")[0].content;
	}
	if(document.getElementsByName("DCSext.Category")[0] != null){
		categoryName = document.getElementsByName("DCSext.Category")[0].content;
	}
};

var onSendDone = function(event) {
	if(event.providers) {
		var providers = event.providers.split(",");
		for(i = 0; i < providers.length; i++) {
			var provider = providers[i];
			dcsMultiTrack('DCSext.share',provider,'WT.dl','150');

			if(provider == 'google-plusOne'){
				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.text = " Krux('admEvent', 'IgELrmZN', { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
				head.appendChild(s);

			}
			else if(provider == 'facebook'){
				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.text = "Krux('admEvent', 'IgEKwoAX',  { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
				head.appendChild(s);
			}
			else if(provider == 'twitter'){
				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.text = "Krux('admEvent', 'IgEK5T0U', { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
				head.appendChild(s);
			}
			else if(provider == 'googleplus'){
				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.text = "Krux('admEvent', 'IgELrmZN',  { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
				head.appendChild(s);
			}
			else if(provider == 'messenger'){
				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.text = "Krux('admEvent', 'IgEMdClg', { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
				head.appendChild(s);
			}
			else if(provider == 'linkedin'){
				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.text = "Krux('admEvent', 'IgELgPsr',  { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
				head.appendChild(s);
			}
			else if(provider == 'digg'){
				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.text = "Krux('admEvent', 'IgEMjUSz', { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
				head.appendChild(s);
			}
			else if(provider == 'delicious'){
				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.text = "Krux('admEvent', 'IgEL_EA0', { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
				head.appendChild(s);
			}
			else if(provider == 'stumbleupon'){
				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.text = "Krux('admEvent', 'IgEMtQUw', { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
				head.appendChild(s);
			}
			else if(provider == 'myaol'){
				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.text = "Krux('admEvent', 'IgEMMKT6', { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
				head.appendChild(s);
			}
			else if(provider == 'hyves'){
				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.text = "Krux('admEvent', 'IgEM3EMo', { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
				head.appendChild(s);
			}
			else if(provider == 'email'){
				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.text = "Krux('admEvent', 'IgELQr6H', { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
				head.appendChild(s);
			}
			else if(provider == 'pinterest'){
				var head = document.getElementsByTagName('head')[0];
				var s = document.createElement('script');
				s.type = 'text/javascript';
				s.text = "Krux('admEvent', 'Je92bhWu', { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
				head.appendChild(s);
			}

		}
	}
};

var onShareButtonClicked = function(event) {
	getChannelAndCategory();
	// dcsMultiTrack('DCSext.share',"primary-share",'WT.dl','150');
	if(event.shareItem.provider == 'Share'){
		var head = document.getElementsByTagName('head')[0];
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.text = "Krux('admEvent', 'IgENRtix', { Category:'"+categoryName+"',Channel:'"+channelName+"' });";
		head.appendChild(s);
	}
};

// Creates the sharebar
function tmg_sharebar(id, options) {
	// Check the container is valid. It may not always exist.
	if (jQuery('#' + id).length === 0)
		return;

	// Olympics defaults
	if ('shareMini' == id && '{}' == options) {
		options = 'Facebook,Twitter';
	}

	// Like Box widgets
	if ('shareLikeBox' == id && '{}' == options) {
		options = 'facebook-like';
	}
	if('LAShareBar' == id && '{}' == options) {
		options = 'Facebook,Twitter';
	}

	// Sensible defaults
	var i = 0,
	defaults = {
		cid: tmgAdsGetMetaTag("tmgads.channel"),
		containerID: id,
		onLoad: hideShareSide,
		operationMode: 'simpleShare',
		shareButtons: 'Facebook,Twitter,Email,LinkedIn,google-plusone',
		userAction: tmg_gigya.useraction,
		tags: tmg_gigya.tags,
		twitterUserAction: tmg_gigya.useraction_twitter,
		onShareButtonClicked: onShareButtonClicked,
		onSendDone: onSendDone,
		countURL: tmg_gigya.permalink
	};

	// Side blocks
	if ('shareMini' == id || 'shareLikeBox' == id || 'shareSide' == id || 'LAShareBar' == id) {
		defaults.layout = 'vertical';
	}

	// Have custom share buttons been set?
	if ('{}' != options) {
		defaults.shareButtons = options;
	}

	// Build share buttons object from a comma seperated string
	var services          = defaults.shareButtons.split(','),
	position              = 0;
	defaults.shareButtons = [];

	// Side sharebar - share always first, email always fourth
	if ('shareSide' == id) {
		defaults.shareButtons[0] = { provider: 'Share', iconImgUp: 'http://cdn.gigya.com/gs/i/sharebar/icons/share3.png' };
		position                 = 1;

	// Bottom sharebar - email always first, share always second
	} else if ('shareBottom' == id) {
		defaults.shareButtons[0] = { provider: 'Email', iconImgUp: '//' + window.location.host + '/template/ver1-0/i/email_transparent.png', iconOnly: true };
		defaults.shareButtons[1] = { provider: 'Share', iconImgUp: 'http://cdn.gigya.com/gs/i/sharebar/icons/share3.png' };
		position                 = 2;
	}else if ('LAShareBar' == id) {
		defaults.shareButtons[0] = { provider: 'Email', iconImgUp: '//' + window.location.host + '/template/ver1-0/i/email_transparent.png', iconOnly: true };
		defaults.shareButtons[1] = { provider: 'Share', iconImgUp: 'http://cdn.gigya.com/gs/i/sharebar/icons/share3.png' };

		position                 = 2;
		}
	
	// Assign share buttons
	for (var i=0, j=services.length; i<j; i++) {
		if ('Email' == services[i] && 'shareSide' == id) {
			defaults.shareButtons[position] = { provider: 'Email', iconImgUp: '//' + window.location.host + '/template/ver1-0/i/email_transparent.png' };

		} else if ('Email' == services[i] && 'shareBottom' == id) {
			position = position - 1;
		}
		
		else if ('Facebook' == services[i] && 'shareBottom' == id) {
			if(tmg_gigya.permalink.indexOf("?") == -1)
			{	
				tmg_gigya.useraction.setLinkBack(tmg_gigya.permalink+'?fb');
				tmg_gigya.useraction.addActionLink('Read more', tmg_gigya.permalink+'?fb');
			}
			else {
				
				tmg_gigya.useraction.setLinkBack(tmg_gigya.permalink+'&fb');
				tmg_gigya.useraction.addActionLink('Read more', tmg_gigya.permalink+'&fb');
			}
			defaults.shareButtons[position] = { provider: 'Facebook' };
		}
		else if ('Facebook' == services[i] && 'shareSide' == id) {
			if(tmg_gigya.permalink.indexOf("?") == -1)
			{	
				tmg_gigya.useraction.setLinkBack(tmg_gigya.permalink+'?fb');
				tmg_gigya.useraction.addActionLink('Read more', tmg_gigya.permalink+'?fb');
			}
			else {
				
				tmg_gigya.useraction.setLinkBack(tmg_gigya.permalink+'&fb');
				tmg_gigya.useraction.addActionLink('Read more', tmg_gigya.permalink+'&fb');
			}
			defaults.shareButtons[position] = { provider: 'Facebook' };
		}
		else {
			defaults.shareButtons[position] = { provider: services[i] };
		}
		
		position = position + 1;
	}
	
	//This check is added as a work around to fix email position for now
	if ('LAShareBar' == id) {
		
	}
	
	// Initialise Gigya
	gigya.services.socialize.showShareBarUI(defaults);
	
}

// Define new sharebar
function tmg_new_sharebar(containerObj, options) {
	id = $(containerObj).attr('id');
	var defaults = {
		//shareButtons: 'Facebook,Twitter-Tweet,Pinterest,LinkedIn,Share,Email',
		shareButtons:[
			{
				provider:'Facebook',
				iconImgUp:'/template/ver1-0/i/share-fb.png',
				iconImgOver:'/template/ver1-0/i/share-fb-hover.png'
			},
			{
				provider:'Twitter',
				iconImgUp:'/template/ver1-0/i/share-tw.png',
				iconImgOver:'/template/ver1-0/i/share-tw-hover.png'
			},
			{
				provider:'Pinterest',
				iconImgUp:'/template/ver1-0/i/share-p.png',
				iconImgOver:'/template/ver1-0/i/share-p-hover.png'
			},
			{
				provider:'LinkedIn',
				iconImgUp:'/template/ver1-0/i/share-in.png',
				iconImgOver:'/template/ver1-0/i/share-in-hover.png'
			},
			{
				provider:'Share',
				iconImgUp:'/template/ver1-0/i/share-share.png',
				iconImgOver:'/template/ver1-0/i/share-share-hover.png'
			},
			{
				provider:'Email',
				iconImgUp:'/template/ver1-0/i/share-email.png',
				iconImgOver:'/template/ver1-0/i/share-email-hover.png'
			},
		],
		containerID: id,
		userAction: tmg_gigya.useraction,
		cid: tmgAdsGetMetaTag("tmgads.channel"),
		operationMode: 'simpleShare',
		tags: tmg_gigya.tags,
		twitterUserAction: tmg_gigya.useraction_twitter,
		onShareButtonClicked: onShareButtonClicked,
		onSendDone: onSendDone,
		countURL: tmg_gigya.permalink,
		showCounts:'right',
		noButtonBorders:true,
		onLoad: function() {
			var containerCSS = $(this)[0].containerID;
			$('#' + containerCSS).css("background-image","none");
		},
		noButtonBorders:true
	};
	gigya.services.socialize.showShareBarUI(defaults);
}


// Load the share buttons
if (typeof g_opt_b != 'undefined' && g_opt_b) {
	if (typeof g_opt_ch == 'undefined') {
		var g_opt_ch = '{}';
	}

	tmg_sharebar('shareBottom', g_opt_ch);
}

if (typeof g_opt_s != 'undefined' && g_opt_s) {
	if (typeof g_opt_cv == 'undefined') {
		var g_opt_cv = '{}';
	}

	tmg_sharebar('shareSide', g_opt_cv);tmg_sharebar('shareMini', g_opt_cv);tmg_sharebar('shareLikeBox', g_opt_cv);
}

tmg_auto_sharebar('shareArticleByline'); tmg_auto_sharebar('shareSectionByline');

//firing event for photoAjax 
$(document).trigger("runPhotoAjax");

// Load new sharebars
if ($(".newGigyaShare") !== undefined) {
	$(".newGigyaShare").each(function() {
		tmg_new_sharebar($(this), {});
	});
}
