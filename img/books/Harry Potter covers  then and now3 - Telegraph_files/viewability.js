(function(){
	/**
	 * window.btoa polyfill
	 * https://github.com/davidchambers/Base64.js
	 */
	;(function() {

		var object = typeof exports != 'undefined' ? exports : this; // #8: web workers
		var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

		function InvalidCharacterError(message) {
			this.message = message;
		}
		InvalidCharacterError.prototype = new Error;
		InvalidCharacterError.prototype.name = 'InvalidCharacterError';

		// encoder
		// [https://gist.github.com/999166] by [https://github.com/nignag]
		object.btoa || (
			object.btoa = function(input) {
				for (
					// initialize result and counter
					var block, charCode, idx = 0, map = chars, output = '';
					// if the next input index does not exist:
					//   change the mapping table to "="
					//   check if d has no fractional digits
					input.charAt(idx | 0) || (map = '=', idx % 1);
					// "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
					output += map.charAt(63 & block >> 8 - idx % 1 * 8)
				) {
					charCode = input.charCodeAt(idx += 3 / 4);
					if (charCode > 0xFF) {
						throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
					}
					block = block << 8 | charCode;
				}
				return output;
			});

		// decoder
		// [https://gist.github.com/1020396] by [https://github.com/atk]
		object.atob || (
			object.atob = function(input) {
				input = input.replace(/=+$/, '')
				if (input.length % 4 == 1) {
					throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
				}
				for (
					// initialize result and counters
					var bc = 0, bs, buffer, idx = 0, output = '';
					// get next character
					buffer = input.charAt(idx++);
					// character found in table? initialize bit storage and add its ascii value;
					~ buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
						// and if not first of each 4 characters,
						// convert the first 8 bits to one ascii character
						bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
				) {
					// try to find character in table (0-63, not found => -1)
					buffer = chars.indexOf(buffer);
				}
				return output;
			});

	}());
	var credentials = {},
		tmgAdsViewability = {};
	
	var checkAWSNamespace = function(){

		// Check global namespace for AWS
		if( !("AWS" in window) ){
			return false;
		}

		// Check for connection
		try {
			get_credentials();
		} catch(e){
			return false;
		}

		return true;

	};

	/*
	 * VIEWABILITY INFO COLLECTION
	 */
	var createViewabilityInfo = function(key) {
		return {
			"divID": "#" + tmgAds.ads[key].id_div,
			"ID": tmgAds.ads[key].id,
			"currentpercentage": 0,
			"maxpercentage": 0,
			"gt0": 0,
			"gt10": 0,
			"gt20": 0,
			"gt30": 0,
			"gt40": 0,
			"gt50": 0,
			"gt60": 0,
			"gt70": 0,
			"gt80": 0,
			"gt90": 0,
			"gt100": 0,
			"begin": tmgAds.performance[key] !== null ? tmgAds.performance[key].begin : 0,
			"finish": tmgAds.performance[key] !== null ? tmgAds.performance[key].finish : 0,
			"loadtime": tmgAds.performance[key] !== null ? tmgAds.performance[key].time : 0,
			"ts": tmgAds.performance[key] !== null ? tmgAds.performance[key].finish : 0,
			"dfp_advertiser": tmgAds.ads[key].dfp !== undefined ? tmgAds.ads[key].dfp.adv : 'not defined',
			"height": tmgAds.ads[key].dfp !== undefined ? tmgAds.ads[key].dfp.szh : 'not defined',
			"width": tmgAds.ads[key].dfp !== undefined ? tmgAds.ads[key].dfp.szw : 'not defined',
			"size": tmgAds.ads[key].dfp !== undefined ? tmgAds.ads[key].dfp.sz : 'not defined'
		};
	};
	/*
	 * INITIALIZE
	 */
	var init = function(){

		var pagetype = "not defined",
			templateName = "not defined",
			startOfPage = 0, endOfFooter = 0, loadTime = 0,
			headerBegin = 0, headerFinish = 0, headerLoad = 0,
			contentBegin = 0, contentFinish = 0, contentLoad = 0,
			rightcolBegin = 0, rightcolFinish = 0, rightcolLoad = 0,
			footerBegin = 0, footerFinish = 0, footerLoad = 0;
		// Test namespace
		if( !checkAWSNamespace() ){
			return;
		}

		// If viewabilityLoadTimes existed, update all the values
		if( viewabilityLoadTimes !== undefined ){

			pagetype = viewabilityLoadTimes.pageTypeValue;
			templateName = viewabilityLoadTimes.templateNameValue;

			startOfPage = viewabilityLoadTimes.startOfPage;
			endOfFooter = viewabilityLoadTimes.endOfFooter;
			loadTime = viewabilityLoadTimes.endOfFooter - viewabilityLoadTimes.startOfPage;

			// header
			headerBegin = viewabilityLoadTimes.startOfPage;
			headerFinish = viewabilityLoadTimes.endOfHeader;
			headerLoad = viewabilityLoadTimes.endOfHeader - viewabilityLoadTimes.startOfPage;

			// contentarea
			contentBegin = viewabilityLoadTimes.endOfHeader;
			contentFinish = viewabilityLoadTimes.endOfContentArea;
			contentLoad = viewabilityLoadTimes.endOfContentArea - viewabilityLoadTimes.endOfHeader;

			// rightcol
			rightcolBegin = viewabilityLoadTimes.endOfContentArea;
			rightcolFinish = viewabilityLoadTimes.endOfRightCol;
			rightcolLoad = viewabilityLoadTimes.endOfRightCol - viewabilityLoadTimes.endOfContentArea;

			// footer
			footerBegin = viewabilityLoadTimes.endOfRightCol;
			footerFinish = viewabilityLoadTimes.endOfFooter;
			footerLoad = viewabilityLoadTimes.endOfFooter - viewabilityLoadTimes.endOfRightCol;

		}

		tmgAdsViewability = {
			"pagetype": pagetype,
			"template": templateName,
			"refreshed": function() {
				if (window.location.hash == "#source=refresh") {
					return true;
				}
				return false;
			}(),
			"begin": startOfPage,
			"finish": endOfFooter,
			"loadtime": loadTime,
			"location": $("meta[name=tmgads.geo]").attr('content'),
			"channel": $("meta[name=tmgads.channel]").attr('content'),
			"useragent": navigator.userAgent,
			"header": {
				"begin": headerBegin,
				"finish": headerFinish,
				"loadtime": headerLoad
			},
			"contentarea": {
				"begin": contentBegin,
				"finish": contentFinish,
				"loadtime": contentLoad
			},
			"rightcol": {
				"begin": rightcolBegin,
				"finish": rightcolFinish,
				"loadtime": rightcolLoad
			},
			"footer": {
				"begin": footerBegin,
				"finish": footerFinish,
				"loadtime": footerLoad
			},
			"ads": {}
		};

		setWindowEvents();

		updateTmgAdsViewability();

	};

	// sending info to kinesis
	var push_viewability_info = function(info) {
		// filtering useful information
		for (var key in info.ads) {
			delete info.ads[key].focused;
			delete info.ads[key].ts;
		}

		// building the request
		var params = {
			"StreamName": "viewability",
			"Data": btoa(JSON.stringify(info)),
			"PartitionKey": String((new Date()).getTime())
		};

		//sending the request
		send_request(params);

	};

	var scrollPercentage = function(adID) {

		var st = $(window).scrollTop(),
			wh = $(window).height(),
			ww = $(window).width(),
			ad = $(adID);

		var displayedHeight = 0,
			displayedWidth = 0,
			displayedArea = 0,
			adLeft = 0,
			adRight = 0;

		adArea = ad.width() * ad.height();

		// Computing displayed height
		if (ad.position() !== null && st <= ad.position().top) {
			displayedHeight = (st + wh) - ad.position().top;
			if (displayedHeight > ad.height()) {
				displayedHeight = ad.height();
			}
		} else {
			if (ad.position() !== null) {
				displayedHeight = ad.height() - (st - ad.position().top);
			}
		}

		if (displayedHeight <= 0) {
			return 0;
		}

		// Computing displayed width
		if (ad.position() !== null) {
			adLeft = ad.position().left;
		}
		adRight = adLeft + ad.width();


		if (ww < adLeft) {
			return 0;

		} else if (ww >= adRight) {
			displayedWidth = ad.width();

		} else {
			displayedWidth = ww - adLeft;
		}


		// Computing displayed area and return percentage shown
		displayedArea = displayedHeight * displayedWidth;
		return displayedArea / adArea * 100;

	};

	var sendViewabilityStatsToKinesis = function() {
		updateTmgAdsViewability();
		push_viewability_info(tmgAdsViewability);
	};

	var setWindowEvents = function(){

		var $window = $(window);

		// Resize
		$window.scroll( updateTmgAdsViewability );

		// Scroll
		$window.resize( updateTmgAdsViewability );

		// Unload
		$window.one("beforeunload", sendViewabilityStatsToKinesis );

		// Focused window
		(function() {
			var hidden = "hidden";
			var visibility = "visible";

			// Standards:
			if (hidden in document)
				document.addEventListener("visibilitychange", onchange);
			else if ((hidden = "mozHidden") in document)
				document.addEventListener("mozvisibilitychange", onchange);
			else if ((hidden = "webkitHidden") in document)
				document.addEventListener("webkitvisibilitychange", onchange);
			else if ((hidden = "msHidden") in document)
				document.addEventListener("msvisibilitychange", onchange);
			// IE 9 and lower:
			else if ('onfocusin' in document)
				document.onfocusin = document.onfocusout = onchange;
			// All others:
			else
				window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange;

			function onchange(evt) {
				var v = 'visible',
					h = 'hidden',
					evtMap = {
						focus: v,
						focusin: v,
						pageshow: v,
						blur: h,
						focusout: h,
						pagehide: h
					};

				evt = evt || window.event;
				if (evt.type in evtMap)
					visibility = evtMap[evt.type];
				else
					visibility = this[hidden] ? "hidden" : "visible";

				if (visibility == "hidden") {
					updateTmgAdsViewability();
				}
				if (visibility == "visible") {
					var newTs = new Date().getTime();
					for (var i in tmgAdsViewability.ads) {
						var ad = tmgAdsViewability.ads[i];
						var sp = scrollPercentage(ad.divID);
						if (sp > ad.maxpercentage) {
							ad.maxpercentage = sp;
						}
						ad.currentpercentage = Math.round(sp);
						ad.ts = newTs;
					}
				}
			}
		})();

	};

	var updateTmgAdsViewability = function() {
		var newTs = (new Date()).getTime(),
			key, ad, sp;

		for (var key in tmgAds.ads) {

			// Check if key exists in ads
			if (!tmgAdsViewability.ads.hasOwnProperty(key)) {
				tmgAdsViewability.ads[key] = createViewabilityInfo(key);
			}

			ad = tmgAdsViewability.ads[key];
			sp = scrollPercentage(ad.divID);

			updateGtX(ad, sp, newTs - ad.ts);

			if (sp > ad.maxpercentage) {
				ad.maxpercentage = sp;
			}
			ad.currentpercentage = Math.round(sp);
			ad.ts = newTs;
		}
	};

	var updateGtX = function(advert, viewed, time) {
		if(viewed == 0) return;

		for (var i = 0; i <= Math.round(viewed); i+=10){
			th = "gt" + i;
			if(advert.hasOwnProperty(th)){
				advert[th] += time ;
				// console.log(advert.ID + ' ' + th + ' ' + advert[th]);
			}
		}
		// console.log(advert)
	}


	/*
	    KINESIS CLIENT SETUP
	*/
	function get_credentials() {
		
			credentials["key"] = 'AKIAJG3X2FJGPUJIDVEQ',
			credentials["secret"] = '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'
		
	}

	function send_request(message) {
		var access_key = credentials.key;
		message["AWSAccessKeyId"] = access_key;
		var ksecret = credentials.secret;
		//var token = credentials.token;
		//console.log("########################################  " + token);

		message = JSON.stringify(message);

		//defining the headers
		var date = (new Date()).toISOString();
		var h = {
			"x-amz-target": "Kinesis_20131202.PutRecord",
			"host": "kinesis.us-east-1.amazonaws.com",
			"content-type": "application/x-amz-json-1.1; charset=UTF-8",
			"x-amz-date": date.replace(/-/g, "").replace(/:/g, "").split(".")[0] + "Z"
		}

		// creating the canonical request
		var request = canonical_request("POST", h, message);
		//console.log(request);

		//creating string to sign
		var algorithm = "AWS4-HMAC-SHA256\n";
		var request_date = date.replace(/-/g, "").replace(/:/g, "").split(".")[0] + "Z\n";
		var region = "us-east-1";
		var service = "kinesis";
		var credential_scope = date.split("T")[0].replace(/-/g, "") + "/" + region + "/" + service + "/aws4_request\n";
		var request_hash = CryptoJS.SHA256(request);
		var string_to_sign = algorithm + request_date + credential_scope + request_hash;
		//console.log(string_to_sign);

		// creating the signature
		var kdate = CryptoJS.HmacSHA256(date.split("T")[0].replace(/-/g, ""), "AWS4" + ksecret, {
			asBytes: true
		});
		var kregion = CryptoJS.HmacSHA256(region, kdate, {
			asBytes: true
		});
		var kservice = CryptoJS.HmacSHA256(service, kregion, {
			asBytes: true
		});
		var ksigning = CryptoJS.HmacSHA256("aws4_request", kservice, {
			asBytes: true
		});

		var signature = CryptoJS.HmacSHA256(string_to_sign, ksigning, {
			asBytes: true
		});
		//console.log(String(signature));

		// sending the request
		h["authorization"] = algorithm.substring(0, algorithm.length - 1) + " Credential=" + access_key + "/" + credential_scope.substring(0, credential_scope.length - 1) + ", SignedHeaders=" + request.split("\n")[8] + ", Signature=" + signature;
		//h["x-amz-security-token"] = token;
		//console.log(h);
		
		$.ajaxSetup({
			contentType: h["content-type"]
		});
		$.ajax({
			url: "https://kinesis.us-east-1.amazonaws.com",
			async: false,
			type: "POST",
			timeout: 500,
			data: message,
			beforeSend: function(xhr) {
				xhr.setRequestHeader("authorization", h["authorization"]);
				//xhr.setRequestHeader("x-amz-security-token", h["x-amz-security-token"]);
				xhr.setRequestHeader("x-amz-date", h["x-amz-date"]);
				xhr.setRequestHeader("x-amz-target", h["x-amz-target"]);
			}
		});

	}

	function canonical_request(method, headers, payload) {
		return method + '\n' + canonical_uri() + canonical_query_string() + canonical_headers(headers) + String(CryptoJS.SHA256(payload));
	}

	function canonical_uri() {
		return "/\n";
	}

	function canonical_query_string() {
		return "\n";
	}

	function canonical_headers(headers) {
		var heads = "";
		var sorted = new Array();
		//sorting headers
		for (var h in headers) {
			lowH = h.toLowerCase();
			headers[lowH] = headers[h];
			sorted.push(lowH);

		}
		sorted.sort();
		//adding canonical headers
		for (var i in sorted) {
			can_header = sorted[i] + ":" + headers[sorted[i]].trim() + "\n";
			heads = heads + can_header;
		}
		heads = heads + "\n";
		//adding signed headers
		for (var i in sorted) {
			heads = heads + sorted[i] + ";";
		}
		heads = heads.substring(0, heads.length - 1) + "\n";
		return heads;
	}

	$(window).ready( init );

})();
