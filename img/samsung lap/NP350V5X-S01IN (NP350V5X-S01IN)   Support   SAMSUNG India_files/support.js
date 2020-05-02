if (typeof (String.format) !== 'function') {
    String.format = function (format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function (match, $1, offset) {
            return (typeof (args[$1]) !== 'undefined' ? args[$1] : match);
        });
    };
}; 

(function ($) {
    $.fn.val2 = function (value) {
        if (!this.is('[data-placeholder-active]')) {
            return $.fn.val.apply(this, arguments);
        }

        // getter
        if (!arguments.length) {
            // compensation
            if (this.attr('data-placeholder-active') === 'true' && this.val() !== this.attr('data-placeholder-value')) {
                var val = this.val();
                this.val('');
                Placeholders.enable(this[0]);
                Placeholders.disable(this[0]);
                this.val(val);
            }
            return ss.inputValue(this);
        }

        // setter
        ss.inputValue(this, value);
        return this;
    };
}(jQuery));


var ss = $;
/** -- FILE: support.js -- **/
/**
 Page object for the support section.

 @module Main
 @submodule Support
 @main Main
 **/
/*global window, document, setInterval, clearInterval, Modernizr, eventBridge, eventDictionary, console, setTimeout, clearTimeout */

(function ($) {
    /**
     @class $.Support
     @constructor
     @param {Object} params External object settings passed into the object.
     **/
    $.Support = function (params) {
        // can flags
        var canSearch = (params.page === 'index' || params.page === 'category' || params.page === 'subcategory');
        var canFindDevice = (params.page === 'index' || params.page === 'category' || params.page === 'subcategory');
        var canFindModelNumber = (params.page === 'index' || params.page === 'category' || params.page === 'subcategory');
        var canFindModelNumberPopup = (params.page === 'findyourmodelnumber');
        var canGetHelp = (params.page === 'category' || params.page === 'subcategory' || params.page === 'pdp');
        //var canGetTips = (params.page === 'category' || params.page === 'subcategory' || params.page === 'pdp');
        var canUsefulSoftware = (params.page === 'category' || params.page === 'subcategory' || (params.page === 'pdp' && location.hash !== "#csc"));
        var canFeaturedTopic = (params.page === 'index' || params.page === 'category' || params.page === 'subcategory' || params.page === 'pdp');
        /**
         @method init
         **/
        function init() {
            // bind events all elements
            bindEvents();

            // popover 'Find my device'
            if (canFindDevice) {
            	new ss.Popover('.find-my-device', {
                	placement: 'bottom', 
                	content: $('.find-my-device-popover').html(), 
                	html: true, 
                	container: '#support-popover-container', 
                	lightbox: 'true',
                	interOp2Show:function(obj){
                		setTimeout(function(){
                			//alert('response');
                			labelInput();
                		}, 300);
                		return false;
                	}});
            	if(params.page !== 'index'){
            		$('.find-my-device-popover').remove();
            	}
            }

            // popover 'Where can I find my number?'
            if (canFindModelNumber) {
                new ss.Popover('.show-product-overlay', {
                    placement: 'bottom',
                    content: $('.product-popover-content').html(),
                    html: true,
                    container: '.product-popover-container',
                    lightbox: 'true'
                });
            }

            // auto complete
            if (canSearch) {

                new ss.ACEach($('#modelnumber'), {
                    url: support.useSearchEngine === 'Y' ?
                        '/' + SITE_CD + '/data-search/support/autoComplete.jsn' :
                        '/' + SITE_CD + '/data-support/search/autocomplete?mType=json',
                    container: 'model-number-ac'
                });
                labelInput();
                // search placeholder 대체
            }
            // desktop 이외 버전 Filter Sort List Display 초기화
            if (canGetHelp) {
                // GET HELP
                if (ss.Detect().device === 'mobile' || ss.Detect().device === 'mobile-landscape') {
                    /* ADD ADNSTYLE */
                    $('.subfilter-sortby').next('.refine-sec').addClass('toggle-content').next('.sort-list').addClass('toggle-content');
                    /* ADD ADNSTYLE */
                }

                // GET TIPS
                ss.spinner({ how: 'before', where: $("#colBlocks") }, function (hideSpinner) {
                    var data = {
                        groupIaCode: pageInfo.groupIaCode,
                        typeIaCode: pageInfo.typeIaCode,
                        subTypeIaCode: pageInfo.subTypeIaCode,
                        modelName: pageInfo.modelName
                    };
                    
                    var url = "/" + SITE_CD + "/data-support/troubleshooting/gettips";
                    
                    if(support.useWscm === "Y"){
                    	url = "/" + SITE_CD + "/data-support/skp/gettips";
                    }
                    
                    $.ajax({
                        url:url,
                        data: data,
                        type: "GET",
                        success: function (data) {

                            if (data == void 0 || data.result == void 0) {
                                hideSpinner();
                                return;
                            }
                            
                            var tipsData = data.result;
                            var tipsContainer = $("#colBlocks"),
                                tipsTemplate = $("#tipsTemplate"),
                                tipsTitle = $(".get-tips .main-title"),
                                idx = 0,
                                tipsName = {
                                    HTG: support.messages['support.gethelp.Howtoguide.wcag'],
                                    HTV: support.messages['support.gethelp.videohHowto.wcag'],
                                    FAQ: support.messages['support.gethelp.faqs.wcag'],
                                    TSG: support.messages['support.gethelp.troubleshooting.wcag']
                                };
                            
                            for (var i in tipsData) {
                            	if (tipsData[i] != null) {
                            		var template = tipsTemplate.clone().attr("id", ""),
                            		tempObj = tipsData[i];
                            		template.find("h2").html(tipsName[i]);
                            		
									var toDay = new Date();
									var regDt= new Date(tempObj.regDt);
									var isNew= (toDay.getTime() - regDt.getTime()) / 1000 / 60 / 60 / 24;
									
									if(isNew < 30){
										template.find("h3 a").html(tempObj.title).append("<img src='/common/next/img/support/ic_new.png'>");
									}
									else{
										template.find("h3 a").html(tempObj.title);
									}

                            		template.find("h3 a").attr("tips-num", i);

                            		template.find("a").unbind("click").bind("click", function (e) {
                            			e.preventDefault();
                            			e.stopPropagation();
                            			var num = $(this).attr("tips-num");
                            			var popUrl = tipsData[num].detailUrl;
                            			if(support.useWscm === "Y"){
                            				popUrl = "/" + SITE_CD + "/support/skp/"+ num.toLowerCase() + "/" + tipsData[num].seqId;
                            			}
                            			sendClickCode('support_content', tipsName[num].toLocaleLowerCase() + ':' + $(this).text(), 'REPLACE');
                            			window.open(popUrl, '_blank', 'width=745px,height=840px,top=0,left=0,status=no,toolbar=no,resizable=yes,scrollbars=yes');
                            		});
                            		if (idx % 2 == 1) {
                            			template.attr("class", "even");
                            		}
                            		tipsContainer.append(template.show());
                            		idx++;
                            	}
                            }
                            
                            var $getTips_colBocks = $('#colBlocks > li:not(#tipsTemplate)');
                            var inx = $('#colBlocks li').length - 1;
                            if(inx > 0){
                                tipsTitle.show();
                            }
                            
                            if (ss.Detect().device === 'mobile' || ss.Detect().device === 'mobile-landscape') {
                                $(".support-container .common-list.quad-blocks li").css("width", "");
                                $(".support-container .common-list.quad-blocks li:last").css("width", "");
                            } else {
                                // ADN ADDED
                                var commwidth = parseInt(100 / inx);
                                var lastwidth = parseInt(100 - ((inx - 1) * commwidth));
                                $(".support-container .common-list.quad-blocks li").css("width", commwidth + "%");
                                $(".support-container .common-list.quad-blocks li:last").css("width", lastwidth + "%");
                            }
                            
                            if (ss.metrics.deviceLayoutId > 1){
                                supportResizeModule($getTips_colBocks, 1, 1, 4, 4, 4);
                            }else{
                                $getTips_colBocks.css('height', 'auto');
                            }
                            hideSpinner();
                        },
                        error: function (e) {
                            //                            alert("error");
                        	$(".get-tips .main-title").hide();
                            hideSpinner();
                        }
                    });
                });
            }

            //featured topic height ADN ADD 13258

            if (canUsefulSoftware) {
                //var $usefulSoft = $('ul.useful-software').children('li:not(.simple-list)');
                var $usefulSoft= $('ul.useful-software').children('li:not(.simple-list)'), 
                $usefulSoft_notIsDesktop = $usefulSoft.not('.isDesktop');// ADN ADDED 140605
                
                $usefulSoft_notIsDesktop.first().addClass('first');// ADN ADDED 140605
                if (ss.metrics.deviceLayoutId > 1) {
                    //featureHeight($usefulSoft);
                    setTimeout(function(){
                        supportResizeModule($usefulSoft, 1, 1, 2, 2, 2);
                    }, 500);
                } else {
                    $usefulSoft.css('height', 'auto').eq(1).addClass('hide'); // ADN ADDED 16861 (Edit By moon)
                }
                checkUsefulSoftware();
            }

            if (canFeaturedTopic) {
                var $topicType = $('.topic-type').children('div');  // ADN ADDED 18563 (Edit By moon)
                var $tvType = $('.topic-type').children('div');
                var $featureList = $('.featured-topics').find('ul').children('li');
                var $linksTxt = $('.useful-links').find('ul').children('li'); // ADN ADDED 16042 (Edit By moon)
                if (ss.metrics.deviceLayoutId > 1) {
                    //featureHeight($featureList);
                    setTimeout(function(){
                        supportResizeModule($featureList, 1, 1, 2, 2, 2);
                        supportResizeModule($linksTxt, 1, 1, 4, 4, 4);
                    }, 500);
                } else {
                    $featureList.css('height', 'auto');
                    $linksTxt.css('height', 'auto');
                }
            }

            setTimeout(function(){
                supportResizeModule($topicType, 2, 2, 4, 4, 6);
                supportResizeModule($tvType, 2, 2, 4, 4, 6);
            }, 500);


            if(ss.metrics.isIE()){
                $topicType.find('img').each(function(index) {
                    var img = $(this);
                    img.load(function(){
                        supportResizeModule($topicType, 2, 2, 4, 4, 6);
                    });
                    img.attr("src", img.attr("src"));
                });

                $tvType.find('img').each(function(index) {
                    var img = $(this);
                    img.load(function(){
                        supportResizeModule($tvType, 2, 2, 4, 4, 6);
                    });
                    img.attr("src", img.attr("src"));
                });
            }else{
                $topicType.find('img').on('load',function(){
                    supportResizeModule($topicType, 2, 2, 4, 4, 6);
                });

                $tvType.find('img').on('load',function(){
                    supportResizeModule($tvType, 2, 2, 4, 4, 6);
                });
            }
            //resizeHeight();
            ss.CompareHeight.init($('.subfilter-sortby .filter-by'), $('.subfilter-sortby .sort-by'), true, true, false, false, false);
        }


        function setMaxHeight(elm_list) {
            var maxHeight = 0;
            var checkHeight = 0;
            for ( var i=0; i<elm_list.length; i++ ) {
                var elmHeight = elm_list.eq(i).outerHeight();
                if ( checkHeight == 0 ) {
                    checkHeight = elmHeight;
                }

                if ( maxHeight < elmHeight ) {
                    maxHeight = elmHeight;
                }
            }
            if ( maxHeight > 0 ) {
                elm_list.css('height', maxHeight);
            }
            if ( checkHeight != maxHeight ) {
                setTimeout(function(){setMaxHeight(elm_list);}, 500);
            }
        }


        /*----------------------------------------------------------------------------------------------------
         * Find my device
         */
        var ajaxLoadTypes = null;
        var ajaxLoadSubTypes = null;
        var ajaxLoadProducts = null;
        /**
         @method loadTypes
         @param {String} group IA Group code
         @param {Function} callback
         @param {Object} thisArgs
         **/
        function loadTypes(group, callback, thisArgs) {
            if (ajaxLoadTypes) {
                ajaxLoadTypes.abort();
            }
            ajaxLoadTypes = $.ajax({
                url: '/' + SITE_CD + '/data-support/category/type?mType=json',
                data: {
                    'groupCode': group
                },
                type: 'POST',
                success: function (data) {
                    ajaxLoadTypes = null;
                    callback.apply(thisArgs, [data.types]);
                },
                error: function (xhr) {
                    ajaxLoadTypes = null;
                    callback.apply(thisArgs, [null]);
                }
            });
        };

        /**
         @method loadSubTypes
         @param {String} type IA Type code
         @param {Function} callback
         @param {Object} thisArgs
         **/
        function loadSubTypes(type, callback, thisArgs) {
            if (ajaxLoadSubTypes) {
                ajaxLoadSubTypes.abort();
            }
            ajaxLoadSubTypes = $.ajax({
                url: '/' + SITE_CD + '/data-support/category/subtype?mType=json',
                data: {
                    'typeCode': type
                },
                type: 'POST',
                success: function (data) {
                    ajaxLoadSubTypes = null;
                    callback.apply(thisArgs, [data.subTypes]);
                },
                error: function (xhr) {
                    ajaxLoadSubTypes = null;
                    callback.apply(thisArgs, [null]);
                }
            });
        };

        /**
         @method loadProducts
         @param {String} subtype IA Sub type code
         @param {Number} page
         @param {String} sortBy
         @param {Function} callback
         @param {Object} thisArgs
         **/
        function loadProducts(subtype, page, sortBy, callback, thisArgs) {
            if (ajaxLoadProducts) {
                ajaxLoadProducts.abort();
            }
            ajaxLoadProducts = $.ajax({
                url: '/' + SITE_CD + '/data-support/category/product?mType=json',
                data: {
                    'subTypeCode': subtype == '2705' ? '1905' : subtype,
                    'page': (support.findDevice.page = page),
                    'pageCnt': (support.findDevice.pageSize || (support.findDevice.pageSize = 100)),
                    'sortBy': (support.findDevice.sortBy = sortBy),
                    'isModelCode': ((subtype == '1402' || subtype == '1403') ? 'Y' : 'N')
                },
                type: 'POST',
                success: function (data) {
                    ajaxLoadProducts = null;
                    callback.apply(thisArgs, [data.products]);
                },
                error: function (xhr) {
                    ajaxLoadProducts = null;
                    callback.apply(thisArgs, [null]);
                }
            });
        };

        /**
         @method onFindDeviceGroupClick
         @param {jQuery.Event} e
         **/
        function onFindDeviceGroupClick(e) {
            e.preventDefault();

            var $deviceFinder = $(this).parents('.device-finder');
            var $typeListing = $deviceFinder.find('.step-2 .type-listing ul');
            var $subtypeListing = $deviceFinder.find('.step-2 .subtype-listing ul');
            var $productListing = $deviceFinder.find('.step-2 .model-listing ul');
            var $productDetail = $deviceFinder.find('.step-2 .result');

            var group = $(this).data('category');
            var self = this;

            // visibility
            $deviceFinder.find('.step-1').addClass('hide');
            $deviceFinder.find('.step-2').removeClass('hide');

            //
            if (ajaxLoadTypes) {
                ajaxLoadTypes.abort();
            }
            ss.spinner({ how: 'append', where: $typeListing, cb: function () { $typeListing.find('.spinner-container').remove(); } }, function (hideSpinner) {
                loadTypes(group, function (items) {
                    hideSpinner();
                    if (!items) {
                        // failure
                        return;
                    }

                    // render items
                    for (var i = 0; i < items.length; i++) {
                        $typeListing.append('<li data-type="' + items[i].iaCode + '"><a href="">' + items[i].iaName + '</a></li>');
                    }
                    $typeListing.removeClass('hide').data('category', group);

                    // select default.
                    var $itemSelected = null;
                    if (support.findDevice.type) {
                        $itemSelected = $typeListing.find('li[data-type=' + support.findDevice.type + ']');
                        delete support.findDevice.type;
                    }
                    if (!$itemSelected || $itemSelected.length == 0) {
                        $itemSelected = $typeListing.find('li:first');
                    }
                    $itemSelected.trigger('click').find('a').focus();

                    // back button handle
                    $deviceFinder.find('.breadcrumb').removeClass('hide').off('click').on('click', function (e) {
                        e.preventDefault();

                        // visibility
                        $deviceFinder.find('.step-1').removeClass('hide');
                        $deviceFinder.find('.step-2').addClass('hide');
                        $deviceFinder.find('.breadcrumb').addClass('hide');

                        // empty step2
                        $typeListing.empty();
                        $subtypeListing.empty();
                        $productListing.empty();
                        $productListing.parent().find('.btn_yview').hide();
                        $productDetail.hide();

                        $deviceFinder.find('.step-1 .category-select li[data-category="' + group + '"] a').focus();
                    });
                }, self);
            });
        };

        /**
         @method onFindDeviceTypeClick
         @param {jQuery.Event} e
         **/
        function onFindDeviceTypeClick(e) {
            e.preventDefault();

            var $deviceFinder = $(this).parents('.device-finder');
            var $typeListing = $deviceFinder.find('.step-2 .type-listing ul');
            var $subtypeListing = $deviceFinder.find('.step-2 .subtype-listing ul');
            var $productListing = $deviceFinder.find('.step-2 .model-listing ul');
            var $productDetail = $deviceFinder.find('.step-2 .result');

            // empty
            $subtypeListing.empty();
            $productListing.empty();
            $productListing.parent().find('.btn_yview').hide();
            $productDetail.hide();

            // selected css class
            $typeListing.find('li').removeClass('selected');
            $(this).addClass('selected');

            var type = $(this).data('type');
            var self = this;

            //
            if (ajaxLoadSubTypes) {
                ajaxLoadSubTypes.abort();
            }
            ss.spinner({ how: 'append', where: $subtypeListing, cb: function () { $subtypeListing.find('.spinner-container').remove(); } }, function (hideSpinner) {
                loadSubTypes(type, function (items) {
                    hideSpinner();
                    if (!items) {
                        // failure
                        return;
                    }

                    // render items
                    for (var i = 0; i < items.length; i++) {
                        $subtypeListing.append('<li data-subtype="' + items[i].iaCode + '"><a href="">' + items[i].iaName + '</a></li>');
                    }
                    $subtypeListing.removeClass('hide').data('type', type);

                    // select default.
                    var $itemSelected = null;
                    if (support.findDevice.subType) {
                        $itemSelected = $subtypeListing.find('li[data-subtype=' + support.findDevice.subType + ']');
                        delete support.findDevice.subType;
                    }
                    if (!$itemSelected || $itemSelected.length == 0) {
                        $itemSelected = $subtypeListing.find('li:first');
                    }
                    $itemSelected.trigger('click');
                }, self);
            });
        };

        /**
         @method onFindDeviceSubtypeClick
         @param {jQuery.Event} e
         **/
        function onFindDeviceSubtypeClick(e) {
            e.preventDefault();
            
            $("#searchModelNumber1 #modelnumber1").val("");
            $("#searchModelNumber1 #modelnumber1").blur();
            
            var $deviceFinder = $(this).parents('.device-finder');
            var $typeListing = $deviceFinder.find('.step-2 .type-listing ul');
            var $subtypeListing = $deviceFinder.find('.step-2 .subtype-listing ul');
            var $productListing = $deviceFinder.find('.step-2 .model-listing ul');
            var $productDetail = $deviceFinder.find('.step-2 .result');
            var $moreBtn = $deviceFinder.find('.step-2 .model-listing .btn_yview');
            var $sortBtn = $deviceFinder.find('.step-2 .model-listing .btn_ysort');
            var $sortLayer = $deviceFinder.find('.step-2 .model-listing .sortbyLayerBox');

            // empty
            $productListing.empty();
            $productListing.parent().find('.btn_yview').hide();
            $productDetail.hide();

            // selected css class
            $subtypeListing.find('li').removeClass('selected');
            $(this).addClass('selected');

            var subtype = $(this).data('subtype');
            var self = this;

            //
            if (ajaxLoadProducts) {
                ajaxLoadProducts.abort();
            }
            ss.spinner({ how: 'append', where: $productListing, cb: function () { $productListing.find('.spinner-container').remove(); } }, function (hideSpinner) {
                loadProducts(subtype, 1, /*support.findDevice.sortBy || 초기화*/'A', function (items) {
                    hideSpinner();
                    if (!items) {
                        // failure
                        return;
                    }

                    // render items
                    if (subtype == '1402' || subtype == '1403') {
                        for (var i = 0; i < items.length; i++) {
                            $productListing.append('<li data-pid="' + items[i].modelCode + '" data-image="' + items[i].modelImageUrl + '" data-name="' + items[i].displayName.replace('"', '&quot;') + '" data-mname="' + items[i].modelName + '"><a href="">' + items[i].modelCode + '</a></li>');
                        }
                    } else {
                        for (var i = 0; i < items.length; i++) {
                            $productListing.append('<li data-pid="' + items[i].modelCode + '" data-image="' + items[i].modelImageUrl + '" data-name="' + items[i].displayName.replace('"', '&quot;') + '" data-mname="' + items[i].modelName + '"><a href="">' + items[i].displayName + '</a></li>');
                        }
                    }
                    $productListing.removeClass('hide').data('subtype', subtype);

                    // select default.
                    $productListing.find('li:first').trigger('click');

                    // more button handle
                    if (items.length > 0 && Math.ceil(items[0].total / support.findDevice.pageSize) > support.findDevice.page) {
                        $moreBtn.show();
                    } else {
                        $moreBtn.hide();
                    }
                    $moreBtn.off('click').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        //
                        if (ajaxLoadProducts) {
                            ajaxLoadProducts.abort();
                            support.findDevice.page--;
                        }
                        ss.spinner({ how: 'append', where: $productListing, cb: function () { $productListing.find('.spinner-container').remove(); } }, function (hideSpinner) {
                            var scrollTop = 0;
                            $productListing.find('li').each(function (index, element) {
                                scrollTop += $(element).outerHeight();
                            });
                            scrollTop -= $productListing.height();
                            scrollTop += 80;//$productListing.find('.spinner-container').height();
                            $productListing.animate({ scrollTop: scrollTop }, '300', 'easeInOutQuad');
                            loadProducts(subtype, ++support.findDevice.page, support.findDevice.sortBy, function (items) {
                                hideSpinner();
                                if (!items) {
                                    // failure
                                    return;
                                }

                                // render items
                                if (subtype == '1402' || subtype == '1403') {
                                    for (var i = 0; i < items.length; i++) {
                                        $productListing.append('<li data-pid="' + items[i].modelCode + '" data-image="' + items[i].modelImageUrl + '" data-name="' + items[i].displayName.replace('"', '&quot;') + '" data-mname="' + items[i].modelName + '"><a href="">' + items[i].modelCode + '</a></li>');
                                    }
                                } else {
                                    for (var i = 0; i < items.length; i++) {
                                        $productListing.append('<li data-pid="' + items[i].modelCode + '" data-image="' + items[i].modelImageUrl + '" data-name="' + items[i].displayName.replace('"', '&quot;') + '" data-mname="' + items[i].modelName + '"><a href="">' + items[i].displayName + '</a></li>');
                                    }
                                }

                                // focus
                                // $productListing.find('li').eq((support.findDevice.page - 1) * support.findDevice.pageSize).find('a').focus();

                                // more button handle
                                if (items.length > 0 && Math.ceil(items[0].total / support.findDevice.pageSize) > support.findDevice.page) {
                                    $moreBtn.show();
                                } else {
                                    $moreBtn.hide();
                                }
                            }, self);
                        });
                    });

                    // sort handle
                    $sortBtn.off('click').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        $sortLayer.toggleClass('hide');
                        $sortBtn.find('span.icon-plus').toggleClass('icon-minus');
                        var $blind = $sortBtn.find('span.icon-plus > span');
                        if ($sortLayer.hasClass('hide')) {
                            $blind.text($blind.parent().data('text'));
                        } else {
                            $blind.text($blind.parent().data('after-text'));
                        }
                    });
                    $sortLayer.find('a').off('click').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        // empty
                        $productListing.empty();
                        $productDetail.hide();

                        $sortLayer.toggleClass('hide');
                        $sortBtn.find('span.icon-plus').toggleClass('icon-minus');
                        var $blind = $sortBtn.find('span.icon-plus > span');
                        if ($sortLayer.hasClass('hide')) {
                            $blind.text($blind.parent().data('text'));
                        } else {
                            $blind.text($blind.parent().data('after-text'));
                        }

                        var sortBy = $(this).data('sortby');

                        //
                        if (ajaxLoadProducts) {
                            ajaxLoadProducts.abort();
                        }
                        ss.spinner({ how: 'append', where: $productListing, cb: function () { $productListing.find('.spinner-container').remove(); } }, function (hideSpinner) {
                            loadProducts(subtype, 1, sortBy, function (items) {
                                hideSpinner();
                                if (!items) {
                                    // failure
                                    return;
                                }

                                // render items
                                if (subtype == '1402' || subtype == '1403') {
                                    for (var i = 0; i < items.length; i++) {
                                        $productListing.append('<li data-pid="' + items[i].modelCode + '" data-image="' + items[i].modelImageUrl + '" data-name="' + items[i].displayName.replace('"', '&quot;') + '" data-mname="' + items[i].modelName + '"><a href="">' + items[i].modelCode + '</a></li>');
                                    }
                                } else {
                                    for (var i = 0; i < items.length; i++) {
                                        $productListing.append('<li data-pid="' + items[i].modelCode + '" data-image="' + items[i].modelImageUrl + '" data-name="' + items[i].displayName.replace('"', '&quot;') + '" data-mname="' + items[i].modelName + '"><a href="">' + items[i].displayName + '</a></li>');
                                    }
                                }

                                // select default.
                                $productListing.find('li:first').trigger('click');

                                // more  button handle
                                if (items.length > 0 && Math.ceil(items[0].total / support.findDevice.pageSize) > support.findDevice.page) {
                                    $moreBtn.show();
                                } else {
                                    $moreBtn.hide();
                                }

                                //
                                $sortBtn.focus();
                            }, self);
                        });
                    });

                }, self);
            });
        };

        /**
         @method onFindDeviceProductClick
         @param {jQuery.Event} e
         **/
        function onFindDeviceProductClick(e) {
            e.preventDefault();

            var $deviceFinder = $(this).parents('.device-finder');
            var $typeListing = $deviceFinder.find('.step-2 .type-listing ul');
            var $subtypeListing = $deviceFinder.find('.step-2 .subtype-listing ul');
            var $productListing = $deviceFinder.find('.step-2 .model-listing ul');
            var $productDetail = $deviceFinder.find('.step-2 .result');

            var type = $subtypeListing.data('type');
            var subtype = $productListing.data('subtype');
            var subtypeName = $subtypeListing.find('li[data-subtype=' + subtype + '] a').text();
            var modelCode = $(this).data('pid');
            var modelName = $(this).data('name');
            var modelName2 = $(this).data('mname');
            var modelImage = $(this).data('image');

            // selected css class
            $productListing.find('li').removeClass('selected');
            $(this).addClass('selected');

            // render details
            $productDetail.show();
            $productDetail.find('.product-image img')
                .attr('src', modelImage ?
                    modelImage : subtype == '1905' ?
                    '/' + SITE_CD + '/support/common/img/ia_image_type_27_250.gif' : type ?
                    '/' + SITE_CD + '/support/common/img/ia_image_type_' + type + '_250.gif' : '/' + SITE_CD + '/support/common/img/img_120x120_blank.gif')
                .attr('alt', modelImage ?
                    String.format(support.messages['common.prodimg.wcag'], modelName, subtypeName) : support.messages['common.noprodimg.wcag']);
            $productDetail.find('.model-id').contents().filter(function () { return this.nodeType == 3; }).remove();
            $productDetail.find('.model-id').append(modelCode);
            $productDetail.find('.model-name a').contents().filter(function () { return this.nodeType == 3; }).remove();
            $productDetail.find('.model-name a').append(modelName)
                .attr('data-mname', modelName2)
                .attr('href', '/' + SITE_CD + '/support/model/' + modelCode);
            $productDetail.find('.select-button')
                .attr('data-mname', modelName2)
                .attr('href', '/' + SITE_CD + '/support/model/' + modelCode)
                .attr('title', String.format(support.messages['support.findmydevice.select.wcag'], modelName));
            $productDetail.find(".select-button").removeClass("offSelect");
            if(ss.Support.isPopoverGetHelpOpen){
                $productDetail.find('.model-name a, .select-button').attr('href', '/' + SITE_CD + '/support/model/' + modelCode+'#get-help');
            }
        };

        /**
         @method onFindDeviceProductSelectClick
         @param {jQuery.Event} e
         **/
        function onFindDeviceProductSelectClick(e) {
            // Omniture
            sendClickCode('finding_method', 'find your product|' + $(this).data('mname'));
        }

        /**
         @method onFindDeviceMobileGroupClick
         @param {jQuery.Event} e
         **/
        function onFindDeviceMobileGroupClick(e) {
            e.preventDefault();

            var $li = $(this).closest('li');
            var $groupButton = $li.find('.accordion-button');
            var $groupButtonSiblings = $li.siblings().find('.accordion-button');
            var $typeListing = $li.find('> ul');
            var $typeListingSiblings = $li.siblings().find('> ul');

            if ($groupButton.hasClass('active')) {
                // collapse
                $groupButton.removeClass('active');
                var $blind = $groupButton.find('> a > span > span');
                $blind.text($blind.parent().data('text'));
                $typeListing.hide();
                $typeListing.empty();

                return;
            }

            var group = $li.data('category');
            var self = $li[0];

            // empty and show/hide
            $typeListingSiblings.hide();
            $typeListingSiblings.empty();
            $typeListing.show();

            // selected css class
            $groupButtonSiblings.removeClass('active');
            $groupButtonSiblings.each(function (index, element) {
                var $blind = $(element).find('> a > span > span');
                $blind.text($blind.parent().data('text'));
            });
            $groupButton.addClass('active');
            var $blind = $groupButton.find('> a > span > span');
            $blind.text($blind.parent().data('after-text'));

            //
            if (ajaxLoadTypes) {
                ajaxLoadTypes.abort();
            }
            $typeListing.append('<li class="temp" style="padding: 0 0 20px 0;"></li>');
            ss.spinner({ how: 'append', where: $typeListing.find('> li.temp'), cb: function () { $typeListing.find('> li.temp').remove(); } }, function (hideSpinner) {
                loadTypes(group, function (items) {
                    hideSpinner();
                    if (!items) {
                        // failure
                        return;
                    }

                    // render items
                    for (var i = 0; i < items.length; i++) {
                        $typeListing.append($('<li class="subcategory" data-type="' + items[i].iaCode + '"></li>')
                            .append($('<a href="javascript:void(0);" title="' + items[i].iaName + '">' + items[i].iaName + '<span class="icon-arrow-right"></span></a>').on('click', onFindDeviceMobileTypeClick))
                            .append($('<ul></ul>')
                                .append($('<li class="first-category"></li>')
                                    .append($('<a href="javascript:void(0);" title="' + items[i].iaName + '"><span class="icon-arrow-left"></span>' + items[i].iaName + '</a>').on('click', onFindDeviceMobileBackClick)))));
                    }

                    // select default.
                    var $itemSelected = null;
                    if (support.findDevice.type) {
                        $itemSelected = $typeListing.find('li[data-type=' + support.findDevice.type + '] a:first');
                        delete support.findDevice.type;
                    }
                    if ($itemSelected && $itemSelected.length == 1) {
                        $itemSelected.trigger('click');
                    }
                }, self);
            });
        };

        /**
         @method onFindDeviceMobileTypeClick
         @param {jQuery.Event} e
         **/
        function onFindDeviceMobileTypeClick(e) {
            e.preventDefault();
            e.stopPropagation();

            var $li = $(this).closest('li');
            var $groupSiblings = $li.closest('ul').parent().siblings('li');
            var $groupButton = $li.closest('ul').parent().find('.accordion-button');
            var $type = $li;
            var $typeSiblings = $li.siblings();
            var $subtypeListing = $li.find('> ul');

            // show/hide
            $groupSiblings.addClass('hide');
            $groupButton.addClass('hide');
            $typeSiblings.addClass('hide');
            $type.removeClass('hide').addClass('active');

            var type = $li.data('type');
            var self = $li[0];

            //
            if (ajaxLoadSubTypes) {
                ajaxLoadSubTypes.abort();
            }
            $subtypeListing.append('<li class="temp" style="padding: 0 0 20px 0; background-color: white;"></li>');
            ss.spinner({ how: 'append', where: $subtypeListing.find('> li.temp'), cb: function () { $subtypeListing.find('> li.temp').remove(); } }, function (hideSpinner) {
                loadSubTypes(type, function (items) {
                    hideSpinner();
                    if (!items) {
                        // failure
                        return;
                    }

                    // render items
                    for (var i = 0; i < items.length; i++) {
                        $subtypeListing.append($('<li class="subcategory" data-subtype="' + items[i].iaCode + '"></li>')
                            .append($('<a href="javascript:void(0);" title="' + items[i].iaName + '">' + items[i].iaName + '<span class="icon-arrow-right"></span></a>').on('click', onFindDeviceMobileSubtypeClick))
                            .append($('<ul class="lastList"></ul>')
                                .append($('<li></li>')
                                    .append($('<a href="javascript:void(0);" title="' + items[i].iaName + '">' + items[i].iaName + '<span class="icon-arrow-left"></span></a>').on('click', onFindDeviceMobileBackClick)))));
                    }

                    // focus
                    $subtypeListing.find('li:nth-child(2)').attr('tabindex', -1).focus().one('blur', function () {
                        $(this).removeAttr('tabindex');
                    });

                    // select default.
                    var $itemSelected = null;
                    if (support.findDevice.subType) {
                        $itemSelected = $subtypeListing.find('li[data-subtype=' + support.findDevice.subType + '] a:first');
                        delete support.findDevice.subType;
                    }
                    if ($itemSelected && $itemSelected.length == 1) {
                        $itemSelected.trigger('click');
                    }
                }, self);
            });
        };

        /**
         @method onFindDeviceMobileSubtypeClick
         @param {jQuery.Event} e
         **/
        function onFindDeviceMobileSubtypeClick(e) {
            e.preventDefault();
            e.stopPropagation();
            $("#searchModelNumber2").removeClass("offSearch");
            $("#searchModelNumber2 #modelnumber2").val("");
            $("#searchModelNumber2 #modelnumber2").blur();
            var $li = $(this).closest('li');
            var $subtype = $li;
            var $subtypeSiblings = $li.siblings();
            var $productListing = $li.find('> ul');

            // show/hide
            $subtypeSiblings.addClass('hide');
            $subtype.removeClass('hide').addClass('active');

            var subtype = $li.data('subtype');
            var self = $li[0];

            // render func
            var renderItems = function (subtype, items) {
                if (subtype == '1402' || subtype == '1403') {
                    for (var i = 0; i < items.length; i++) {
                    	var detailUrl = '/' + SITE_CD + '/support/model/' + items[i].modelCode;
                    	if(ss.Support.isPopoverGetHelpOpen){
                    		detailUrl += '#get-help';
                    	}
                        $productListing.append($('<li data-pid="' + items[i].modelCode + '" data-mname="' + items[i].modelName + '"></li>')
                            .append($('<a href="'+detailUrl+'" title="' + items[i].displayName + '">' + items[i].modelCode + '<span class="icon-arrow-right"></span></a>').on('click', onFindDeviceMobileProductClick)));
                    }
                } else {
                    for (var i = 0; i < items.length; i++) {
                    	var detailUrl = '/' + SITE_CD + '/support/model/' + items[i].modelCode;
                    	if(ss.Support.isPopoverGetHelpOpen){
                    		detailUrl += '#get-help';
                    	}
                        $productListing.append($('<li data-pid="' + items[i].modelCode + '" data-mname="' + items[i].modelName + '"></li>')
                            .append($('<a href="' +detailUrl+'" title="' + items[i].displayName + '">' + items[i].displayName + '<span class="icon-arrow-right"></span></a>').on('click', onFindDeviceMobileProductClick)));
                    }
                }
            };

            //
            if (ajaxLoadProducts) {
                ajaxLoadProducts.abort();
            }
            $productListing.append('<li class="temp" style="padding: 0 0 20px 0; background-color: white;"></li>');
            ss.spinner({ how: 'append', where: $productListing.find('> li.temp'), cb: function () { $productListing.find('> li.temp').remove(); } }, function (hideSpinner) {
                loadProducts(subtype, 1, /*support.findDevice.sortBy || 초기화*/'A', function (items) {
                    hideSpinner();
                    if (!items) {
                        // failure
                        return;
                    }

                    // render items
                    renderItems(subtype, items);

                    // focus
                    $productListing.find('li:nth-child(2)').attr('tabindex', -1).focus().one('blur', function () {
                        $(this).removeAttr('tabindex');
                    });

                    // sort and more
                    $(this).prepend($('#sortTem').clone().html());
                    $(this).append($('#viewTemp').clone().html());

                    var $moreBtn = $(this).find('.btn_yview');
                    var $sortBtn = $(this).find('.btn_ysort');
                    var $sortLayer = $(this).find('.sortbyLayerBox');

                    // more button handle
                    if (items.length > 0 && Math.ceil(items[0].total / support.findDevice.pageSize) > support.findDevice.page) {
                        $moreBtn.show();
                    } else {
                        $moreBtn.hide();
                    }
                    $moreBtn.off('click').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        //
                        if (ajaxLoadProducts) {
                            ajaxLoadProducts.abort();
                            support.findDevice.page--;
                        }
                        $productListing.append('<li class="temp" style="padding: 0 0 20px 0; background-color: white;"></li>');
                        ss.spinner({ how: 'append', where: $productListing.find('> li.temp'), cb: function () { $productListing.find('> li.temp').remove(); } }, function (hideSpinner) {
                            var scrollTop = 0;
                            $productListing.find('li:not(.temp)').each(function (index, element) {
                                scrollTop += $(element).outerHeight();
                            });
                            scrollTop -= $productListing.height();
                            scrollTop += 80;//$productListing.find('.spinner-container').height();
                            $productListing.animate({ scrollTop: scrollTop }, '300', 'easeInOutQuad');
                            loadProducts(subtype, ++support.findDevice.page, support.findDevice.sortBy, function (items) {
                                hideSpinner();
                                if (!items) {
                                    // failure
                                    return;
                                }

                                // render items
                                renderItems(subtype, items);

                                // focus
                                // $productListing.find('li').eq((support.findDevice.page - 1) * support.findDevice.pageSize).find('a').focus();

                                // more button handle
                                if (items.length > 0 && Math.ceil(items[0].total / support.findDevice.pageSize) > support.findDevice.page) {
                                    $moreBtn.show();
                                } else {
                                    $moreBtn.hide();
                                }
                            }, self);
                        });
                    });

                    // sort handle
                    $sortBtn.show().off('click').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        $sortLayer.toggleClass('hide');
                        $sortBtn.find('span.icon-plus').toggleClass('icon-minus');
                        var $blind = $sortBtn.find('span.icon-plus > span');
                        if ($sortLayer.hasClass('hide')) {
                            $blind.text($blind.parent().data('text'));
                        } else {
                            $blind.text($blind.parent().data('after-text'));
                        }
                    });
                    $sortLayer.find('a').off('click').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        // empty
                        $productListing.find('li:not(:first)').remove();

                        $sortLayer.toggleClass('hide');
                        $sortBtn.find('span.icon-plus').toggleClass('icon-minus');
                        var $blind = $sortBtn.find('span.icon-plus > span');
                        if ($sortLayer.hasClass('hide')) {
                            $blind.text($blind.parent().data('text'));
                        } else {
                            $blind.text($blind.parent().data('after-text'));
                        }

                        var sortBy = $(this).data('sortby');

                        //
                        if (ajaxLoadProducts) {
                            ajaxLoadProducts.abort();
                        }
                        $productListing.append('<li class="temp" style="padding: 0 0 20px 0; background-color: white;"></li>');
                        ss.spinner({ how: 'append', where: $productListing.find('> li.temp'), cb: function () { $productListing.find('> li.temp').remove(); } }, function (hideSpinner) {
                            loadProducts(subtype, 1, sortBy, function (items) {
                                hideSpinner();
                                if (!items) {
                                    // failure
                                    return;
                                }

                                // render items
                                renderItems(subtype, items);

                                // more button handle
                                if (items.length > 0 && Math.ceil(items[0].total / support.findDevice.pageSize) > support.findDevice.page) {
                                    $moreBtn.show();
                                } else {
                                    $moreBtn.hide();
                                }

                                //
                                $sortBtn.focus();
                            }, self);
                        });
                    });
                }, self);
            });
        };

        /**
         @method onFindDeviceMobileProductClick
         @param {jQuery.Event} e
         **/
        function onFindDeviceMobileProductClick(e) {
            e.stopPropagation();

            // Omniture
            sendClickCode('finding_method', 'find your product|' + $(this).closest('li').data('mname'));
        };

        /**
         @method onFindDeviceMobileBackClick
         @param {jQuery.Event} e
         **/
        function onFindDeviceMobileBackClick(e) {
            e.preventDefault();
            e.stopPropagation();

            var $li = $(this).closest('li');
            $("#searchModelNumber2").addClass("offSearch");
            // empty
            $li.nextAll('li').remove();

            // show/hide
            $li.closest('.subcategory').removeClass('active').siblings().removeClass('hide');

            // subtypes
            if ($li.hasClass('first-category')) {
                $('#support-popover-container .find-device-mobile .select-category .accordion-button').removeClass('hide');
                $('#support-popover-container .find-device-mobile .select-category .category-select li').removeClass('hide');
            }

            // products
            if ($li.parent().hasClass('lastList')) {
                $li.parent().parent().find('.sortbyLayerBox').remove();
                $li.parent().parent().find('.btn_ysort').remove();
                $li.parent().parent().find('.btn_yview').remove();
            }

            // focus
            $li.closest('.subcategory').find('a').focus();

            //
            if (ajaxLoadTypes) {
                ajaxLoadTypes.abort();
            }
            if (ajaxLoadSubTypes) {
                ajaxLoadSubTypes.abort();
            }
            if (ajaxLoadProducts) {
                ajaxLoadProducts.abort();
            }
        };

        /**
         @method onFindDeviceCloseKeydown
         @param {jQuery.Event} e
         **/
        function onFindDeviceCloseKeydown(e) {
            if (e.which === 9 && e.shiftKey) {
                e.preventDefault();
                e.stopPropagation();
                if ($('#support-popover-container .device-finder .step-1').hasClass('hide')) {
                    $('#support-popover-container .device-finder .step-2 .result .select-button').focus();
                } else {
                    $('#support-popover-container .device-finder .step-1 ul li:last-child a').focus();
                }
            }
        };

        /**
         @method onFindDeviceListKeydown
         @param {jQuery.Event} e
         **/
        function onFindDeviceListKeydown(e) {
            if (e.which === 9 && !e.shiftKey) {
                e.preventDefault();
                e.stopPropagation();
                $('#support-popover-container .device-finder .close-button').focus();
            }
        };

        /**
         @method onFindDeviceMobileCloseKeydown
         @param {jQuery.Event} e
         **/
        function onFindDeviceMobileCloseKeydown(e) {
            if (e.which === 9 && e.shiftKey) {
                e.preventDefault();
                e.stopPropagation();
                $('#support-popover-container .find-device-mobile .select-category li a:visible:last').focus();
            }
        };

        /**
         @method onFindDeviceMobileListKeydown
         @param {jQuery.Event} e
         **/
        function onFindDeviceMobileListKeydown(e) {
            if (e.which === 9 && !e.shiftKey) {
                e.stopPropagation();

                var isLast = $(this).is("li:last-child");
                if ($(this).parent().hasClass('find-cat-mobile')) {
                    isLast = isLast && $(this).parent().closest('li').is("li:last-child")
                }
                if ($(this).closest('.find-cat-mobile').length == 1) {
                    isLast = isLast && $(this).find('li').length <= 1;
                } else {
                    isLast = isLast && $(this).find('li').length == 0;
                }
                if (isLast) {
                    e.preventDefault();
                    if ($(this).parent().hasClass('lastList') && $(this).parent().next('.btn_yview').is(':visible')) {
                        $(this).parent().next('.btn_yview').focus();
                    } else {
                        $('#support-popover-container .find-device-mobile .close-button').focus();
                    }
                }
            }
        };

        /**
         @method onFindDeviceMobileListKeydown
         @param {jQuery.Event} e
         **/
        function onFindDeviceMobileViewmoreSortKeydown(e) {
            if (e.which === 9 && !e.shiftKey) {
                e.stopPropagation();

                if ($(this).hasClass('btn_yview')) {
                    // view more
                    e.preventDefault();
                    $('#support-popover-container .find-device-mobile .close-button').focus();
                    return;
                }

                // not implements sort keydown
            }
        };
        /*----------------------------------------------------------------------------------------------------*/


        /*----------------------------------------------------------------------------------------------------
         * Where can I find my number?
         */
        var ajaxFindModelNumber = null;
        /**
         @method onFindModelNumberGroupClick
         @param {jQuery.Event} e
         **/
        function onFindModelNumberGroupClick(e) {
            var isTrigger = arguments[1] === 'trigger';
            var name = $(this).find('a').text();
            var group = $(this).data('group');
            var $group = $(this);
            var $groupTitle = $(this).parent().parent().find('> a');
            var $groupListing = $(this).parent();
            var $typeListing = $('.product-popover-container .model-listing ul[data-group="' + group + '"]');
            var $typeListingSiblings = $typeListing.siblings('ul');

            // show/hide
            $typeListingSiblings.addClass('hide').removeClass('active').hide();
            $typeListing.removeClass('hide').addClass('active').show().find('li:first').trigger('click', 'trigger');

            // selected css class
            $groupListing.find('li').removeClass('selected');
            $group.addClass('selected');

            // collapse
            if ((ss.Detect().device === 'mobile' || ss.Detect().device === 'mobile-landscape' || ss.Detect().device === 'tablet-portrait') && !isTrigger) {
                $typeListing.parent().addClass('active');
                $groupTitle.text(name).addClass('close');
                $groupListing.addClass('active').animate({ 'height': 'toggle' }, 'normal', function () {
                    $(this).addClass('hide');
                });
            }
        };

        /**
         @method onFindModelNumberTypeClick
         @param {jQuery.Event} e
         **/
        function onFindModelNumberTypeClick(e) {
            var isTrigger = arguments[1] === 'trigger';
            var id = $(this).data('id');
            var name = $(this).find('a').text();
            var $type = $(this);
            var $typeTitle = $(this).parent().parent().find('> a');
            var $typeListing = $(this).parent();

            // selected css class
            $typeListing.find('li').removeClass('selected');
            $type.addClass('selected');

            //
            if (ajaxFindModelNumber) {
                ajaxFindModelNumber.abort();
            }
            $('.product-popover-container .result').html('<div class="product-imgbox product-image"><div style="margin: 10px 10px 30px 10px;"></div></div>');
            ss.spinner({ how: 'prepend', where: $(".product-popover-container .result .product-imgbox div") }, function (hideSpinner) {
                ajaxFindModelNumber = $.ajax({
                    url: '/' + SITE_CD + '/next/ssi/support/findmodelnumber/COM' + id + '_S.sec',
                    type: 'GET',
                    dataType: 'html',
                    success: function (data) {
                        ajaxFindModelNumber = null;
                        hideSpinner();

                        // render details
                        $('.product-popover-container .result').html(data);

                        // collapse
                        if ((ss.Detect().device === 'mobile' || ss.Detect().device === 'mobile-landscape' || ss.Detect().device === 'tablet-portrait') && !isTrigger) {
                            $typeListing.parent().removeClass('active');
                            $typeTitle.text(name).addClass('close');
                            $typeListing.animate({ 'height': 'toggle' }, 'normal', function () {
                                $(this).addClass('hide');
                            });
                        }
                    },
                    error: function (xhr) {
                        ajaxFindModelNumber = null;
                        hideSpinner();

                        // empty
                        $('.product-popover-container .result').empty();
                    }
                });
            });
        };

        /**
         @method onFindModelNumberGroupTitleClick
         @param {jQuery.Event} e
         **/
        function onFindModelNumberGroupTitleClick(e) {
            if (!$(this).hasClass('close')) {
                return false;
            }

            var $groupTitle = $(this);
            var $groupListing = $(this).next();
            var $typeTitle = $('.product-popover-container .model-listing > div > a');
            var $typeListing = $('.product-popover-container .model-listing ul.active');

            $groupTitle.text($groupTitle.attr('data-text')).removeClass('close');
            $groupListing.animate({ 'height': 'toggle' }, 'normal', function () {
                $(this).removeClass('hide');
            });

            $typeTitle.text($typeTitle.attr('data-text')).removeClass('close');
            $typeListing.parent().removeClass('active');
            $typeListing.removeClass('hide').show();
        }

        /**
         @method onFindModelNumberTypeTitleClick
         @param {jQuery.Event} e
         **/
        function onFindModelNumberTypeTitleClick(e) {
            if (!$(this).hasClass('close')) {
                return false;
            }

            var typeTitle = $(this);
            var typeListing = $(this).nextAll('ul.active');

            typeTitle.text(typeTitle.attr('data-text')).removeClass('close');
            typeListing.parent().addClass('active');
            typeListing.animate({ 'height': 'toggle' }, 'normal', function () {
                $(this).removeClass('hide');
            });
        }

        /**
         @method onFindModelNumberCloseKeydown
         @param {jQuery.Event} e
         **/
        function onFindModelNumberCloseKeydown(e) {
            var $groupTitle = $('.product-popover-container .device-finder .group-listing .product-category');
            var $typeTitle = $('.product-popover-container .device-finder .model-listing .product-category');
            if (e.which === 9 && !e.shiftKey) {
                e.preventDefault();
                e.stopPropagation();
                $groupTitle.focus();
                return;
            }
            if ($typeTitle.hasClass('close') && e.which === 9 && e.shiftKey) {
                e.preventDefault();
                e.stopPropagation();
                $typeTitle.focus();
                return;
            }
        };

        /**
         @method onFindModelNumberTitleKeydown
         @param {jQuery.Event} e
         **/
        function onFindModelNumberTitleKeydown(e) {
            var $groupTitle = $('.product-popover-container .device-finder .group-listing .product-category');
            var $typeTitle = $('.product-popover-container .device-finder .model-listing .product-category');
            if ($groupTitle[0] === e.currentTarget) {
                if ($groupTitle.hasClass('close') && e.which === 9 && !e.shiftKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    $typeTitle.focus();
                    return;
                }
                if (e.which === 9 && e.shiftKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    $('.product-popover-container .close-button').focus();
                    return;
                }
            }
            if ($typeTitle[0] === e.currentTarget) {
                if ($typeTitle.hasClass('close') && e.which === 9 && !e.shiftKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    $('.product-popover-container .close-button').focus();
                    return;
                }
                if ($groupTitle.hasClass('close') && e.which === 9 && e.shiftKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    $groupTitle.focus();
                    return;
                }
            }
        };

        /**
         @method onFindModelNumberListingKeydown
         @param {jQuery.Event} e
         **/
        function onFindModelNumberListingKeydown(e) {
            var $groupTitle = $('.product-popover-container .device-finder .group-listing .product-category');
            var $typeTitle = $('.product-popover-container .device-finder .model-listing .product-category');
            if (e.which === 9) {
                if ($(this).parents('.group-listing').length > 0) {
                    if ($groupTitle.hasClass('close') && !e.shiftKey) {
                        e.preventDefault();
                        e.stopPropagation();
                        $typeTitle.focus();
                        return;
                    }
                    if ($groupTitle.hasClass('close') && e.shiftKey) {
                        e.preventDefault();
                        e.stopPropagation();
                        $groupTitle.focus();
                        return;
                    }
                }
                if ($(this).parents('.model-listing').length > 0) {
                    if ($typeTitle.hasClass('close') && !e.shiftKey) {
                        e.preventDefault();
                        e.stopPropagation();
                        $('.product-popover-container .close-button').focus();
                        return;
                    }
                    if ($typeTitle.hasClass('close') && e.shiftKey) {
                        e.preventDefault();
                        e.stopPropagation();
                        $typeTitle.focus();
                        return;
                    }
                }
            }
        };
        /*----------------------------------------------------------------------------------------------------*/


        /*----------------------------------------------------------------------------------------------------
         * GET HELP
         */
        var getHelpPage = 1; // Get-Help page Number
        var contType = null; // Get-Help Filter Type 조건 (HTV, HTG, TSG, FAQ)
        var keyword = null;  // Get-Help 검색어
        var topicType = null;// Get-Help Filter Topic 조건
        var sortType = "NW"; // Get-Help Sort
        var isGetHelpInit = false; // Get-Help 최초 로딩 여부
        var troubleshootingAjaxTypes = null;

        /**
         * SubCategory / PDP Get-Tips, Get-Help Tab 클릭 시 처리 로직
         @method getTipsHelpTabClick
         @param {jQuery.Event} e
         **/
        function getTipsHelpTabClick(e) {
            e.preventDefault();

            if (troubleshootingAjaxTypes) {
                troubleshootingAjaxTypes.abort();
            }

            var $that = $(this),
                section = $that.attr('data-section'),
                isGetTips = (section === 'get-tips');

            $('.get-tips-button, .get-help-button').removeClass('dark').addClass('lighter');
            $that.removeClass('lighter').addClass('dark');

            if (isGetTips) {
                // Get-Tips 영역 활성화 및 Get-Help영역 비활성화
                $('.get-tips').addClass('active');
                $('.get-help').removeClass('active');
                $that.parent().siblings('.getForm').addClass('hide');
            }
            else {
                $('.get-tips').removeClass('active'); // Get-Tips 비활성화
                if (!$('.refine-sec').is(':visible')) {
                    ss.spinner({ how: 'before', where: $(".get-help") }, function (hideSpinner) {
                        getHelpInit(function () {
                            $('.get-help').addClass('active'); // Get-Help List영역 활성화
                            ss.CompareHeight.init($('.subfilter-sortby .filter-by'), $('.subfilter-sortby .sort-by'), true, true, false, false, false); 
                            $that.parent().next('.getForm').removeClass('hide'); // 검색 입력 영역
                            //Filter By 아코디어 펼침
                            if (ss.Detect().device === 'desktop') {
                                $('.get-help .refine-sec').addClass('toggled').show();  // Filter By 영역 활성화
                                $('.get-help .sort-list').show().removeClass('toggle-content'); // Sort By 영역 활성화
                            }

                            if ((ss.Detect().device !== 'mobile' && ss.Detect().device !== 'mobile-landscape') &&
                                (!$('.get-help .refine-sec').find('> .toggle').hasClass("link-toggled"))) {
                                $('.get-help .refine-sec').find('> .toggle').trigger('click');
                            }

                            hideSpinner(); // 로딩 바 제거
                        });
                    });

                }
            }
            eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), ss.metrics);
        }

        /**
         * Get-Help Load More 클릭 시 처리 로직
         @method getHelpMoreClick
         @param {jQuery.Event} e
         **/
        function getHelpMoreClick(getHelpClickNum) {

            getHelpPage = getHelpClickNum || 1;

            var param = {
                page: getHelpPage,
                contType: contType,
                topicType: topicType,
                keyword: keyword,
                sort: sortType
            };
            getTroubleshootingList(param);
            sendClickCode('view_more', 'view more:get help');
        }

        /**
         * Get-Help SortBy List 클릭 시 처리 로직
         @method getHelpSortListClick
         @param {jQuery.Event} e
         **/
        function getHelpSortListClick(e) {
            e.preventDefault();
            e.stopPropagation();

            sortType = $(this).parent().attr("data-category");
            getHelpPage = 1;

            $("#commonHelp .sort-list li").removeClass("active");
            $(this).parent().addClass("active");

            var param = {
                page: getHelpPage,
                contType: contType,
                topicType: topicType,
                keyword: keyword,
                sort: sortType,
                isHide: true
            };

            getTroubleshootingList(param);
        }

        function getHelpSearchKeyupClick(e) {
            if (!(e.type === 'click' || e.which === 13)) return;
            if (e.type === 'click') e.preventDefault();

            $("#TroubleListNoResult").hide();
            getHelpPage = 1;
            keyword = $('.get-menu-buttons .getForm input').val2();
            var param = {
                page: getHelpPage,
                contType: contType,
                topicType: topicType,
                keyword: keyword,
                sort: sortType,
                isHide: true,
                isKeyword: true
            };

            getTroubleshootingList(param);

        }

        /**
         * Get-Help FilterBy 목록 클릭 시 처리 로직
         @method getHelpFilterClick
         @param {jQuery.Event} e
         **/
        function getHelpFilterClick(e, self) {
            e.preventDefault();
            var $self = $(self),
                $typeFilters,
                $topicFilters,
                $getHelpTypeFilter = $("#getHelpTypeFilter"),
                $topicToggleList = $("#topicToggleList"),
                filterType = "",
                filterTopic = "",
                isTopicChange = $self.parents('ul').attr("id") == "getHelpTypeFilter";

            // Disabled Checked
            if (!$self.hasClass('refine-results')) {

                if ($self.find('input').attr("disabled") == undefined || $self.find('input').attr("disabled") != "disabled") {
                    $self.toggleClass('active');

                    $self.find('input').attr('checked', function (idx, oldAttr) {
                        return !oldAttr;
                    });
                } else {
                    return;
                }
            }

            // Type Filter 클릭 시 Topic Filter 초기 화
            if (isTopicChange) {
                $topicToggleList.children().removeClass('active').find('input').attr('checked', false);
            }

            $typeFilters = $getHelpTypeFilter.children('.active');
            $topicFilters = $topicToggleList.children('.active');

            $typeFilters.each(function () {
                if (filterType == "") {
                    filterType = $(this).attr('data-category');
                } else {
                    filterType += "," + $(this).attr('data-category');
                }

            });

            $topicFilters.each(function () {

                if (filterTopic == "") {
                    filterTopic = $(this).attr('data-category');
                } else {
                    filterTopic += "," + $(this).attr('data-category');
                }
            });



            getHelpPage = 1; // 초기화
            contType = filterType;
            topicType = filterTopic;

            var param = {
                page: getHelpPage,
                contType: contType,
                topicType: topicType,
                keyword: keyword,
                sort: sortType,
                isHide: true,
                changeTopic: isTopicChange
            };

            getTroubleshootingList(param);
        }

        function setGetHelpPagingNum(totalCount){
            if(totalCount == void 0 || totalCount < 1){
                $("#commonHelp .paging").hide();
                return;
            }
            $("#commonHelp .paging").show();

            var totalPageNum = Math.ceil(totalCount/20);
            var pageNumListEl = $("#commonHelp ul.pagination");

            pageNumListEl.find('li:not(#pagingNumEl)').remove();
            for(var i = 1; i <= totalPageNum; i++){
                var tempNumEl = pageNumListEl.find("#pagingNumEl").clone();
                tempNumEl.attr("id","")
                tempNumEl.attr("page-data", (i));
                tempNumEl.find("a").text((i));
                if(i < 6){
                    tempNumEl.css("display","");
                }

                if(i == 1){
                    tempNumEl.addClass("active");
                }
                pageNumListEl.append(tempNumEl);
            }

            if(totalPageNum > 5){
                $("#commonHelp .paging .pageNext a").addClass("on");
            }else{
                $("#commonHelp .paging .pageNext a").removeClass("on");
            }

            $('#commonHelp .pageWrap .pageNext').unbind("click").bind("click",function(){
                if($(this).find('a').hasClass("on")){
                    setGetHelpPageEv(totalPageNum, true);
                }

            });
            $('#commonHelp .pageWrap .pagePrev').unbind("click").bind("click",function(){
                if($(this).find('a').hasClass("on")){
                    setGetHelpPageEv(totalPageNum);
                }
            });

            $('#commonHelp ul.pagination li').unbind("click").bind('click',function(){
                $('#commonHelp ul.pagination li').removeClass("active");
                $(this).addClass("active");
                var getHelpClickNum = $(this).attr("page-data") || 1;
                getHelpMoreClick(getHelpClickNum);
            });

        }

        function setGetHelpPageEv(totalPageNum, isNext){
            var pageNumEl = $('#commonHelp ul.pagination li:not(#pagingNumEl)');
            var currnetDisplay = Math.ceil(getHelpPage/5) // display page count = 5
            for(var i = 0; i < totalPageNum; i++){
                if(isNext && i>=(currnetDisplay)*5 &&  i<(currnetDisplay+1)*5 ){
                    $(pageNumEl[i]).css("display","");
                }else if(!isNext && i>=(currnetDisplay-2)*5 &&  i<(currnetDisplay-1)*5 ){
                    $(pageNumEl[i]).css("display","");
                }else{
                    $(pageNumEl[i]).css("display","none");
                }
            }
            if(isNext){
                currnetDisplay += 1;
            }else{
                currnetDisplay -= 1;
            }
            $(pageNumEl[(currnetDisplay-1)*5]).click();

            var prevBtn = $('#commonHelp .pageWrap .pagePrev a');
            var nextBtn = $('#commonHelp .pageWrap .pageNext a');

            if(currnetDisplay < 2){
                prevBtn.removeClass("on");
            }else if (currnetDisplay>1){
                prevBtn.addClass("on");
            }

            if(currnetDisplay*5 < totalPageNum){
                nextBtn.addClass("on");
            }else if(currnetDisplay*5 >= totalPageNum){
                nextBtn.removeClass("on");
            }
        }

        /**
         * Get-Help 영역 초기화 (Get-Help 탭 클릭 시)
         @method getHelpInit
         @param {function} cbFunc Get-Help 영역 초기화 후 처리 해야 하는 Call Back Function
         **/
        function getHelpInit(cbFunc) {

            // 최초 로드 여부 확인
            if (isGetHelpInit == true) {
                if (cbFunc != void 0 && typeof cbFunc == "function") {
                    cbFunc();
                }
                return;
            }
            var data = {
                typeIaCode: pageInfo.typeIaCode, // Type Ia Code
                subTypeIaCode: pageInfo.subTypeIaCode, // Sub Type Ia Code
                modelName: pageInfo.modelName, // 모델 명
                isInit: true
            };

            if (troubleshootingAjaxTypes) {
                troubleshootingAjaxTypes.abort();
            }

            var url = "/" + SITE_CD + "/data-support/troubleshooting";
            if(support.useWscm === "Y"){
            	url = "/" + SITE_CD + "/data-support/skp";
            }
            troubleshootingAjaxTypes = $.ajax({
                url:url,
                data: data,
                type: "POST",
                success: function (data) {

                    troubleshootingAjaxTypes = null;

                    var tabEnableMap = data.tabEnableMap || {},
                        topicInfoList = data.topicInfoList || [],
                        topicList = data.topicList || [],
                        troubleshooting = data.result || {},
                        troubleshootingList = troubleshooting.list || [],
                        totalCount = troubleshooting.listCount || 0;

                    setGetHelpPagingNum(totalCount);
                    setGetHelpFilterList(tabEnableMap, topicInfoList, topicList);
                    setTroubleshootingList(troubleshootingList, totalCount);
                    isGetHelpInit = true;
                    if (cbFunc != void 0 && typeof cbFunc == "function") {
                        cbFunc();
                    }
                    
                    if($("#topicToggleList li").length == 1 && $("#getHelpTypeFilter").next("a.toggle").hasClass("link-toggled")){
                    	$("#getHelpTypeFilter").next("a.toggle").trigger("click");
                    }
                    
                },
                error: function (error) {

                    troubleshootingAjaxTypes = null;
                    setGetHelpPagingNum(0);
                    if (cbFunc != void 0 && typeof cbFunc == "function") {
                        cbFunc();
                    }
                    if($("#topicToggleList li").length == 1 && $("#getHelpTypeFilter").next("a.toggle").hasClass("link-toggled")){
                    	$("#getHelpTypeFilter").next("a.toggle").trigger("click");
                    }
                    $("#TroubleListNoResult").show();
                    $("#commonHelp .show-more-button").hide();
                    isGetHelpInit = true;
                }

            });
        }

        /**
         * Filter Type / Topic List 초기화
         @method setGetHelpFilterList
         @param {Object} tabEnableMap Type Filter 목록 별 사용 유무 목록
         @param {Array} topicList 화면에 표시 되는 Topic 리스트
         @param {Array} topicEnableList Topic Filter 사용 유무 목록
         **/
        function setGetHelpFilterList(tabEnableMap, topicList, topicEnableList) {
            var topicBaseEl = $("#topicBaseEl");
            var topicListEl = $("#topicToggleList");

            topicListEl.find('li:not(.clsBtn)').remove();



            // Topic 목록 초기화
            for (var i = topicList.length - 1; i >= 0; i--) {
                var tempItem = topicList[i];
                var tempEl = topicBaseEl.clone().attr("id", "");

                tempEl.attr("data-category", tempItem.symptomClassId);
                tempEl.find("input[type=checkbox]").attr("value", tempItem.symptomClassId);
                tempEl.find("label").attr("for", tempItem.symptomClassId);
                tempEl.find(".topic-name").html(tempItem.symptomClassEnglishName);
                topicListEl.prepend(tempEl.show());
            }

            // Topic 목록 사용 유무 처리
            changeFilterCheckBox(topicEnableList, tabEnableMap);
        }


        function changeFilterCheckBox(topicEnableList, tabEnableMap) {
            var topicListEl = $("#topicToggleList");


            if (tabEnableMap != void 0) {
                var typeListEl = $("#getHelpTypeFilter");
//                var typeCheckList = typeListEl.find("input[type=checkbox]");
//                typeCheckList.attr("disabled", true);
//                typeListEl.find("li label").addClass("disabled");
//                typeListEl.find(".filterIcon").addClass("offFilter");
                // Type 목록 사용 유무 처리
                for (var i in tabEnableMap) {
                    if (tabEnableMap[i] == "true") {
                        typeListEl.find("input[value=" + i + "]").attr("disabled", false);
                        typeListEl.find("li[data-category=" + i + "]").find("label").removeClass("disabled");
                        typeListEl.find("li[data-category=" + i + "]").find("div[data-category=" + i + "]").removeClass("offFilter");
                    } 
//                    else {
//                        typeListEl.find("input[value=" + i + "]").attr("disabled", "disabled");
//                    }
                }
            }


            topicListEl.find('li input[type=checkbox]').attr("disabled", "disabled");
            topicListEl.find('li label').addClass("disabled");

            // Topic 목록 사용 유무 처리
            for (var i in topicEnableList) {
                topicListEl.find('li[data-category=' + topicEnableList[i] + '] input[type=checkbox]').attr("disabled", false);
                topicListEl.find('li[data-category=' + topicEnableList[i] + '] label').removeClass("disabled");
            }
        }

        /**
         * 조회 한 Get-Help(troubleshooting) 목록을 화면에 출력
         @method setTroubleshootingList
         @param {Array} troubleshootingList GetHelp(troubleshooting) List
         @param {Boolean} isAdded 목록 추가 / 초기화 유무
         **/
        function setTroubleshootingList(troubleshootingList, totalCount) {
            var troubleBaseEl = $("#troubleBaseEl");
            var troubleListEl = $("#troubleListEl");

            totalCount = totalCount == void 0 ? 0 : totalCount;

            troubleListEl.find('li').remove();
            if (troubleshootingList != void 0 && troubleshootingList.length > 0) {
                $("#TroubleListNoResult").hide();
            } else {
                $("#TroubleListNoResult").show();
                $("#commonHelp .show-more-button").hide();
            }
            for (var i = 0; i < troubleshootingList.length; i++) {
                var tempItem = troubleshootingList[i];
                var tempEl = troubleBaseEl.clone().attr("id", "");

				//오늘날짜 - 등록날짜 계산
				var toDay = new Date();
				var regDt= new Date(tempItem.regDt);
				var isNew= (toDay.getTime() - regDt.getTime()) / 1000 / 60 / 60 / 24;
				
				if(isNew < 30){
					tempEl.find("h3 a").html(tempItem.title).append("<img src='/common/next/img/support/ic_new.png'>");
				}
				else{
					tempEl.find("h3 a").html(tempItem.title);
				}              

                tempEl.find("h3 a").attr("help-num", i);

                switch (tempItem.cdcnt) {
                    case "HTV":
                        tempEl.attr("data-category", "installation-connection");
                        tempEl.find("h3").attr("class", "ico-installation-connection");
                        tempEl.find("span").html(support.messages['support.gethelp.videohHowto.wcag']);
                        tempEl.find("h3 a").attr("help-type", "how to video");
                        break;
                    case "HTG":
                        tempEl.attr("data-category", "usage");
                        tempEl.find("h3").attr("class", "ico-usage");
                        tempEl.find("span").html(support.messages['support.gethelp.Howtoguide.wcag']);
                        tempEl.find("h3 a").attr("help-type", "how to guide");
                        break;
                    case "TSG":
                        tempEl.attr("data-category", "picture-quality");
                        tempEl.find("h3").attr("class", "ico-picture-quality");
                        tempEl.find("span").html(support.messages['support.gethelp.troubleshooting.wcag']);
                        tempEl.find("h3 a").attr("help-type", "trouble shooting");
                        break;
                    case "FAQ":
                        tempEl.attr("data-category", "other-topics");
                        tempEl.find("h3").attr("class", "ico-other-topics");
                        tempEl.find("span").html(support.messages['support.gethelp.faqs.wcag']);
                        tempEl.find("h3 a").attr("help-type", "faqs");
                        break;

                }

                // Popup Url 설정
                tempEl.find("h3 a").bind("click", function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    sendClickCode('support_content', $(this).attr("help-type") + ":" + $(this).text(), 'REPLACE');

                    var helpNum = $(this).attr("help-num") || 0;
//                    window.open(troubleshootingList[helpNum].detailUrl, '_blank', 'width=745px,height=840px,top=0,left=0,status=no,toolbar=no,resizable=yes,scrollbars=yes');
                    var popUrl = troubleshootingList[helpNum].detailUrl;
                    if(support.useWscm === "Y"){
                    	popUrl = "/" + SITE_CD + "/support/skp/"+ troubleshootingList[helpNum].cdcnt.toLowerCase() + "/" + troubleshootingList[helpNum].seqId;
                    }
                    window.open(popUrl, '_blank', 'width=745px,height=840px,top=0,left=0,status=no,toolbar=no,resizable=yes,scrollbars=yes');
                });

                if (i % 2 == 1) {
                    tempEl.removeClass("odd").addClass("even");
                }

                troubleListEl.append(tempEl.show());
            }
        }

        /**
         * Get-Help(troubleshooting) 목록 조회 및 검색 기능 수행
         @method getTroubleshootingList
         @param {Object} param Get-Help 조회 조건
         @param {function} cbFunc Get-Help 목록 조회 및 검색 후 처리 해야 하는 Call Back Function
         **/
        function getTroubleshootingList(param) {

            if (param.isHide) $("#troubleListEl").hide();
            if (param.page == null  ||  param.page == 1) {
                $("#commonHelp .paging").hide();
            }
            var data = {
                page: param.page,						// 조회 페이지
                cdcnts: param.contType,					// Type Filter 조건
                topic: param.topicType,				// Topic Filter 조건
                sortBy: param.sort || "NW", 					// Sort 조건
                keyword: param.keyword,				// 검색어
                groupIaCode: pageInfo.groupIaCode,		// Group Ia Code
                typeIaCode: pageInfo.typeIaCode,		// Type Ia Code
                subTypeIaCode: pageInfo.subTypeIaCode,	// SubType Ia Code
                modelName: pageInfo.modelName,			// Model 명
                isInit : true
            };

            if (troubleshootingAjaxTypes) {
                troubleshootingAjaxTypes.abort();
            }
            
            var url = "/" + SITE_CD + "/data-support/troubleshooting";
            if(support.useWscm === "Y"){
            	url = "/" + SITE_CD + "/data-support/skp";
            }
            
            troubleshootingAjaxTypes = $.ajax({
                url: url,
                data: data,
                type: "POST",
                success: function (data) {

                    troubleshootingAjaxTypes = null;

                    var tabEnableMap = data.tabEnableMap || {},
                    topicInfoList = data.topicInfoList || [],
                    topicList = data.topicList || [],
                    troubleshooting = data.result || {},
                    troubleshootingList = troubleshooting.list || [],
                    totalCount = troubleshooting.listCount || 0;
                    
                    if (param.page == null  ||  param.page == 1) {
                        setGetHelpPagingNum(totalCount);
                    }
                    
                    if($("#topicToggleList").height() == 0 && $("#getHelpTypeFilter .offFilter").length == 4){
                    	 setGetHelpFilterList(tabEnableMap, topicInfoList, topicList);
                    }
                    

                    if (param.isKeyword) {
                        if (totalCount > 0) {
                            sendClickCode('spt_search_success', 'help:' + param.keyword);
                        } else {
                            sendClickCode('spt_search_fail', 'help:' + param.keyword);
                        }
                        changeFilterCheckBox(topicList, tabEnableMap);
                    }
                    if (param.changeTopic) {
                        changeFilterCheckBox(topicList);
                    }
                    setTroubleshootingList(troubleshootingList, totalCount);
                    if (param.isHide) $("#troubleListEl").show();

                },
                error: function () {

                    troubleshootingAjaxTypes = null;
                    setGetHelpPagingNum(0);
                    $("#troubleListEl li").remove();
                    if (param.isHide) $("#troubleListEl").show();
                    $("#TroubleListNoResult").show();
                    $("#commonHelp .show-more-button").hide();
                    if (param.isKeyword) sendClickCode('spt_search_fail', 'help:' + param.keyword);
                }
            });
//            });
        }

        function getHelpFilterSortTabClick(e) {
            var $this = $(this);
            if (ss.Detect().device === 'mobile' || ss.Detect().device === 'mobile-landscape') {
                var notClicked = $('.filter-by, .sort-by').not($this),
                    content = ($(this).data('content') == '.refine-sec') ? '.sort-list' : '.refine-sec',
                    toggleContent = $($this.data('content')),
                    notToggleContent = $(content);

                var args = {
                    content: $this.data('content'),
                    afterText: $this.data('after-text'),
                    currText: $this.data('text'),
                    autoScroll: $this.data('autoscroll')
                };
                toggleView = new ss.Toggle($this, args);
                toggleView.action();

                // For accessibility
                if ($this.hasClass('link-toggled')) {
                    toggleContent.show();
                } else {
                    var timeout = setTimeout(function () {
                        toggleContent.hide();
                        clearTimeout(timeout);
                    }, 200);
                }

                $this.toggleClass('active');

                notToggleContent.removeClass('toggled').height(0).hide();
                notClicked.find('span').removeClass('icon-minus');
                notClicked.removeClass('link-toggled').removeClass('active');
            }
        }

        /*----------------------------------------------------------------------------------------------------*/
        function supportResizeModule(element, mobile, mobileL, tabletP, tabletL, desktop){
            var cnt = 0, colsCnt= 0, rowsLen, i, j, newList, listLen, metrics = ss.metrics, maxHeight= 0, thisList, thisH;
            if(metrics.device === 'mobile'){
                rowsLen = mobile;
                newList = element.not('.isDesktop');
            }else if(metrics.device === 'mobile-landscape'){
                rowsLen = mobileL;
                newList = element.not('.isDesktop');
            }else if(metrics.device === 'tablet-portrait'){
                rowsLen = tabletP;
                newList = element;
            }else if(metrics.device === 'tablet-landscape'){
                rowsLen = tabletL;
                newList = element;
            }else if(metrics.device === 'desktop'){
                rowsLen = desktop;
                newList = element;
            }
            listLen = newList.length;

            element.css('height', '');
            for(i = 0; i < listLen; i++){
                thisList = newList.eq(i);
                thisH = thisList.innerHeight();
                if(thisH > maxHeight) maxHeight = thisH;
                cnt++;
                if(cnt === rowsLen || i === listLen-1){
                    var startJ = colsCnt*rowsLen, jLen = startJ+rowsLen;
                    jLen = jLen > listLen ? listLen : jLen;
                    for(j = startJ; j < jLen; j++){
                        thisList = newList.eq(j);
                        thisList.css('height', maxHeight);
                    }
                    colsCnt++;
                    cnt = 0;
                    maxHeight = 0;
                }
            }
        }


        //featured topic height ADN ADD 13258 // ADN EDITED 16231 (Edit By moon)
        function featureHeight(element){
            var $featureList = element,
                $desktopList = $featureList.hasClass('isDesktop'),
                colaHeight = 0,
                colbHeight = 0,
                num = 0;

            if($featureList.length==0) return false;

            //if (ss.metrics.width < 1280){
            if($desktopList){
                var odd = false;
                var idx = 0;
                $featureList.each(function(){
                    //if($(this).hasClass('isDesktop') && $(this).is(':visible')) return false;
                    if($(this).hasClass('isDesktop') && $(this).is(':hidden')){
                        idx += 1;
                    }
                    if(!odd){
                        $featureList.eq(idx).not('.isDesktop').removeClass('even').addClass('odd');
                        idx++;
                        odd = true;
                    }else{
                        $featureList.eq(idx).not('.isDesktop').removeClass('odd').addClass('even');
                        idx++;
                        odd = false;
                    }
                });
            }
            //}
            var newFeatureLists = element, featureList, darkGrayCnt = 0, isDark=false;
            if (ss.metrics.deviceLayoutId < 2) {
                //if (ss.metrics.width< 1280) {
                newFeatureLists = element.not('.isDesktop');
            }

            for(var i=0; i<newFeatureLists.length; i++){
                featureList = newFeatureLists.eq(i);
                featureList.removeClass('dark').removeClass('gray');
                if(i===0){
                    featureList.addClass('dark');
                }else{
                    if(isDark) featureList.addClass('dark');
                    else featureList.addClass('gray');
                    darkGrayCnt++;
                    if(darkGrayCnt >= 2){
                        isDark = !isDark;
                        darkGrayCnt = 0;
                    }
                }
            }

            for(var i=0, n=newFeatureLists.length; i<n; i++){
                resingEl(newFeatureLists, i);
            }

            function resingEl(newEl, /*element,*/ idx){
                var thisList = newEl.eq(idx),
                    thisHeight,
                    txtHeight = thisList.find('.common-list-container').outerHeight(),
                    imgHeight = thisList.find('.product-image').outerHeight(),
                    i = idx;
                thisList.css('height', (txtHeight>imgHeight)? txtHeight : imgHeight);
                thisHeight = thisList.height();
                if(thisList.parent().hasClass('useful-software')){
                    if(thisList.hasClass('odd')){
                        if(txtHeight>imgHeight){
                            if(txtHeight>thisHeight) colaHeight = txtHeight;
                            else colaHeight = thisHeight;
                        }else{
                            if(imgHeight>thisHeight) colaHeight = imgHeight;
                            else colaHeight = thisHeight;
                        }
                    }else{
                        if(txtHeight>imgHeight){
                            if(txtHeight>thisHeight) colbHeight = txtHeight;
                            else colbHeight = thisHeight;
                        }else{
                            if(imgHeight>thisHeight) colbHeight = imgHeight;
                            else colbHeight = thisHeight;
                        }
                    }
                }else{
                    thisList.hasClass('odd') ? colaHeight = thisList.find('a').innerHeight() : colbHeight = thisList.find('a').innerHeight();
                }
                if(colbHeight > 0){
                    if(colaHeight > colbHeight){
                        //console.log(colaHeight);
                        newEl.eq(i-1).css('height', colaHeight);
                        newEl.eq(i).css('height', colaHeight);
                        newEl.attr('data-loaded', true);
                    }else{
                        //console.log(colbHeight);
                        newEl.eq(i-1).css('height', colbHeight);
                        newEl.eq(i).css('height', colbHeight);
                        newEl.attr('data-loaded', true);
                    }
                    colaHeight = 0;
                    colbHeight = 0;
                }else{
                    if(newEl.eq(-1).hasClass('odd')){
                        newEl.eq(-1).css('height', 'auto');
                        return false;
                    }
                }
            }
        }


        function resizeHeight(){
            var $typeItem = $('.type-item'),
                prevHeight;

            $typeItem.each(function(i){
                var $self = $(this),
                    thisHeight;
                if(navigator.appVersion.match(/MSIE [\d.]+/)){
                    resingItem($self.find('img'));
                }else{
                    $self.find('img').on('load',function(){
                        resingItem($(this));
                    });
                }
            });
            var reCheck = false;
            $typeItem.each(function(){
                if ( $(this).outerHeight() != $(this).children(0).outerHeight() ) {
                    reCheck = true;
                }
            });
            if ( reCheck ) {
                $typeItem.css('height', '');
                setTimeout(function(){setMaxHeight($typeItem);}, 500);
            }

            function resingItem(imgEl){
                var $img = imgEl;
                thisHeight = $img.parents('.type-item').find('> a').outerHeight();
                if(prevHeight==undefined){
                    prevHeight = thisHeight;
                }else{
                    if ( thisHeight > prevHeight ) {
                        prevHeight = thisHeight;
                        $typeItem.each(function(){
                            $(this).attr('data-loaded', true);
                            //console.log(prevHeight);
                            $(this).css('height', prevHeight);
                        });
                    }
                }
            }
        }

        //ADN ADD 14016 // ADN EDITED 16042 , 17038(Edit By moon)
        function resingTxt(element){
            var $element = element,
                prevHeight;

            for(var i=0, n=$element.length; i<n; i++){
                var $self = $element.eq(i),
                    selfHeight;

                var isComplete = true;

                if ( isComplete ) {
                    if($self.parents('div').hasClass('useful-links')){
//						ADN 19611 Edit
                        selfHeight = $self.find('a, span').outerHeight();
                    }else{
                        var content = $self.contents().filter(function(){
                            return this.nodeType== 1;
                        });
                        selfHeight = content[0].scrollHeight * content.length;
                    }
                    if(prevHeight==undefined){
                        prevHeight = selfHeight;
                    }else{
                        if (selfHeight > prevHeight) {
                            prevHeight = selfHeight;
                            console.log('prevHeight '+prevHeight);
                        }
                        $element.each(function(){
                            $(this).css('height', prevHeight);
                        });
                    }
                }
                else {
                    var reT = setTimeout(function(){clearTimeout(reT); resingTxt($element); }, 200);
                }
            }
        }

        
        
        /*----------------------------------------------------------------------------------------------------*/
        function checkUsefulSoftware(){
//    		var usefulSoftware = $('ul.useful-software > li');
    		var moreUsefulSoftware = $('ul.useful-software > li.hide:not(.simple-list )');
        	var moreUsefulSoftwareSimpleList =  $('ul.useful-software > li.hide.simple-list > ul > li');
        	var usefulSoftwareMoreBtn = $('.show-more-button[data-area=useful-software]');
        	var hasMore = moreUsefulSoftware.length > 0;
        	var hasMoreSimpleList = moreUsefulSoftwareSimpleList.length > 0;
        	var hasMoreNotDesktop =  moreUsefulSoftware.not( ".isDesktop").length > 0;
        	var hasMoreSimpleListNotDesktop = moreUsefulSoftwareSimpleList.not( ".isDesktop").length > 0;
        	
    		if( !hasMore && !hasMoreSimpleList && usefulSoftwareMoreBtn.css( "display" ) != "none" ){
        		usefulSoftwareMoreBtn.hide();
        		return; 
        	}
    		
        	if( ss.metrics.deviceLayoutId ==  ss.metrics.LAYOUT_ID_MOBILE ){
        		if( !hasMoreNotDesktop && !hasMoreSimpleListNotDesktop && usefulSoftwareMoreBtn.css( "display" ) != "none"){
        			usefulSoftwareMoreBtn.hide();
        		}
        			
        	}else{
        		if( hasMore && usefulSoftwareMoreBtn.css( "display" ) == "none" ) 
        			usefulSoftwareMoreBtn.show();
        	}
        }
        /*----------------------------------------------------------------------------------------------------*/
        /**
         @method bindEvents
         **/
        function bindEvents() {
            // 'Find my device'
            if (canFindDevice) {
                $('#support-popover-container')
                    // desktop, tablet
                    .on('click', '.device-finder .step-1 li', onFindDeviceGroupClick)
                    .on('click', '.device-finder .step-2 .type-listing li', onFindDeviceTypeClick)
                    .on('click', '.device-finder .step-2 .subtype-listing li', onFindDeviceSubtypeClick)
                    .on('click', '.device-finder .step-2 .model-listing li', onFindDeviceProductClick)
                    .on('click', '.device-finder .step-2 .result .model-name a', onFindDeviceProductSelectClick)
                    .on('click', '.device-finder .step-2 .result .select-button', onFindDeviceProductSelectClick)
                    .on('keydown', '.device-finder .close-button', onFindDeviceCloseKeydown)
                    .on('keydown', '.device-finder .step-1 li:last-child', onFindDeviceListKeydown)
                    .on('keydown', '.device-finder .step-2 .select-button', onFindDeviceListKeydown)
                    .on('click', '#searchModelNumber1 .ctrLabel a.btn_sb007', onFindDeviceSearchClick)
                    .on('keydown', '#searchModelNumber1 #modelnumber1', onFindDeviceSearchClick)
                    // mobile
                    .on('click', '.find-device-mobile .select-category > ul > li > h3 > a', onFindDeviceMobileGroupClick)
                    .on('click', '#searchModelNumber2 .ctrLabel a.btn_sb007', onFindDeviceSearchMobileClick)
                    .on('keydown', '#searchModelNumber2 #modelnumber2', onFindDeviceSearchMobileClick)
                    //.on('click', '.find-device-mobile .select-category > ul > li > ul > li', onFindDeviceMobileTypeClick)
                    //.on('click', '.find-device-mobile .select-category > ul > li > ul > li > ul > li:not(:first-child)', onFindDeviceMobileSubtypeClick)
                    //.on('click', '.find-device-mobile .select-category > ul > li > ul > li > ul > li > ul > li:not(:first-child)', onFindDeviceMobileProductClick)
                    //.on('click', '.find-device-mobile .select-category > ul > li > ul > li li:first-child', onFindDeviceMobileBackClick)
                    .on('keydown', '.find-device-mobile .close-button', onFindDeviceMobileCloseKeydown)
                    .on('keydown', '.find-device-mobile .select-category ul li', onFindDeviceMobileListKeydown)
                    .on('keydown', '.find-device-mobile .select-category .btn_yview', onFindDeviceMobileViewmoreSortKeydown)
                    .on('keydown', '.find-device-mobile .select-category .sortbyLayerBox a', onFindDeviceMobileViewmoreSortKeydown);

                // POPOVER SHOWN
                $('.find-my-device').on('shown.bs.popover', function (e) {
                	ss.commonWidgets.setDefaultFocusInWidget( ".popover .find-my-device-container" );
                    if (support.findDevice._group) {
                        support.findDevice.group = support.findDevice._group;
                        if (support.findDevice._type) {
                            support.findDevice.type = support.findDevice._type;
                            if (support.findDevice._subType) {
                                support.findDevice.subType = support.findDevice._subType;
                            }
                        }
                    }

                    var $selectTarget = null;
                    if (support.findDevice.group) {
                        $selectTarget = $('#support-popover-container .device-finder .category-select li[data-category="' + support.findDevice.group + '"]');
                        if (!$selectTarget || $selectTarget.length == 0 || !$selectTarget.is(':visible')) {
                            $selectTarget = $('#support-popover-container .find-device-mobile .select-category ul li[data-category="' + support.findDevice.group + '"] a:first');
                        }
                        delete support.findDevice.group;

                        if ($selectTarget && $selectTarget.length > 0) {
                            $selectTarget.trigger('click');
                        }
                    }
                });

                $('.find-my-device').on('hidden.bs.popover', function(e){
                    ss.Support.isPopoverGetHelpOpen = undefined;
                });
            }
            // 'Where can I find my number?'
            if (canFindModelNumber || canFindModelNumberPopup) {
                $('.product-popover-container')
                    .on('click', '.device-finder .group-listing ul > li', onFindModelNumberGroupClick)
                    .on('click', '.device-finder .model-listing ul > li', onFindModelNumberTypeClick)
                    .on('click', '.device-finder .group-listing .product-category', onFindModelNumberGroupTitleClick)
                    .on('click', '.device-finder .model-listing .product-category', onFindModelNumberTypeTitleClick)
                    .on('keydown', '.close-button', onFindModelNumberCloseKeydown)
                    .on('keydown', '.product-category', onFindModelNumberTitleKeydown)
                    .on('keydown', '.product-list', onFindModelNumberListingKeydown);

                // POPOVER SHOWN
                if (canFindModelNumber) {
                    $('.show-product-overlay').on('shown.bs.popover', function (e) {
                        $('.product-popover-container .device-finder li[data-group]:first').trigger('click', 'trigger');//.find('a').focus();
                    });
                }
            }
            // GET HELP
            if (canGetHelp) {
                $('.get-tips-button, .get-help-button').on('click', getTipsHelpTabClick);           // Get-Tips, Get-Help Tab 클릭 시
                $('.get-menu-buttons .getForm input').on('keyup', getHelpSearchKeyupClick);
                $('.get-menu-buttons .getForm a').on('click', getHelpSearchKeyupClick);

                $('#commonHelp .sort-list li a').on('click', getHelpSortListClick);					// Get-Help 정렬 목록 클릭 시
                $('#commonHelp').on('click keypress', '.refine-results li:not(.clsBtn)', function(ev){
                	if(ev.type === 'click' || ev.which === 13 || ev.which === 32 ){
                		getHelpFilterClick(ev, this);
                    	return false;
                    }
                });// Get-Help Filter 목록 클릭 시

                $('.filter-by, .sort-by').on('click', getHelpFilterSortTabClick); // Desktop 이외 버전 Filter / Sort 탭 클릭 시
            }
            // RESIZE
            eventBridge.on(eventDictionary.global.RESIZE, function (e, data) {
                if (canGetHelp) {
                    var $getTips_colBocks = $('#colBlocks > li:not(#tipsTemplate)');
                    if (ss.metrics.deviceLayoutId > 1){
                        supportResizeModule($getTips_colBocks, 1, 1, 4, 4, 4);
                    }else{
                        $getTips_colBocks.css('height', 'auto');
                    }

                    if(ss.Detect().device === 'mobile' || ss.Detect().device === 'mobile-landscape') {
                        $('.subfilter-sortby').next('.refine-sec').addClass('toggle-content').next('.sort-list').addClass('toggle-content');
                        if($('.subfilter-sortby').find('.sort-by').hasClass('active')){
                            $('.refine-sec').hide();
                            $('.refine-sec').find('.toggle').removeClass('link-toggled');
                            $('.refine-sec').find('.refine-results').hide().removeClass('toggled').height(0);
                            $('.refine-sec').find('.toggle span.icon-plus').removeClass('icon-minus');
                            return false;
                        }
                        if($('.get-help').hasClass('active') && $('.subfilter-sortby').next('.refine-sec').find('> .toggle').hasClass('link-toggled')){
                            $('.subfilter-sortby').next('.refine-sec').addClass('toggled');
                            $('.subfilter-sortby').find('.filter-by').addClass('link-toggled').addClass('active');
                            $('.subfilter-sortby').find('.filter-by').find('span').addClass('icon-minus');
                        }
                        $(".support-container .common-list.quad-blocks li").css("width", "");
                        $(".support-container .common-list.quad-blocks li:last").css("width", "");
                    } else {

                        if($('.get-help').hasClass('active')){
                            if(!$('.refine-sec').find('> .toggle').hasClass('link-toggled')){
                                //console.log('call5');
                                $('.refine-sec').find('> .toggle').trigger('click');
                            }
                            $('.sort-list').show().removeClass('toggled').removeClass('toggle-content');
                            if($('.refine-sec').is(':hidden')){
                                $('.refine-sec').css('height', 'auto').show();
                            }
                        }

                        if(ss.Detect().device !== 'tablet-portrait'){
                            if($('.popover-group').find('.product-list').is(':hidden')){
                                //console.log($('.popover-group').find('.product-category'));
                                $('.popover-group').find('.product-category').text( $('.popover-group').find('.product-category').attr('data-text') );
                                $('.popover-group').find('.product-list').removeClass('hide').show();
                                $('.popover-group:visible').find('.product-list').children('li').each(function(){
                                    if($(this).hasClass('selected')){
                                        var idx = $('.popover-group').find('.product-list').children('li').index(this);
                                        $('.product-type .product-list').eq(idx).removeClass('hide')
                                    }
                                });
                            }

                            if($('.product-type').find('.active').is(':hidden')){
                                $('.product-type').find('.active').show();
                                $('.product-type').find('.product-category').text($('.product-type').find('.product-category').attr('data-text'));
                            }
                        }
                        // GET TIPS
                        var inx = $('#colBlocks li').length - 1;
                        var commwidth = parseInt(100 / inx);
                        var lastwidth = parseInt(100 - ((inx - 1) * commwidth));
                        $(".support-container .common-list.quad-blocks li").css("width", commwidth + "%");
                        $(".support-container .common-list.quad-blocks li:last").css("width", lastwidth + "%");

                    }
                }

                if (canFindModelNumber || canFindModelNumberPopup) {
                    if (!(ss.Detect().device === 'mobile' || ss.Detect().device === 'mobile-landscape' || ss.Detect().device === 'tablet-portrait')) {
                        // 'Where can I find my number?'
                        var $groupTitle = $('.product-popover-container .device-finder .group-listing .product-category');
                        var $typeTitle = $('.product-popover-container .device-finder .model-listing .product-category');
                        if ($groupTitle.hasClass('close')) {
                            var $groupListing = $groupTitle.next();
                            $groupTitle.text($groupTitle.attr('data-text')).removeClass('close');
                            $groupListing.removeClass('hide').show();
                        }
                        if ($typeTitle.hasClass('close')) {
                            var $typeListing = $typeTitle.nextAll('ul.active');
                            $typeTitle.text($typeTitle.attr('data-text')).removeClass('close');
                            $typeListing.parent().removeClass('active');
                            $typeListing.removeClass('hide').show();
                        }
                    }
                }

                if (canUsefulSoftware) {
                	checkUsefulSoftware();
                    //$usefulSoft height ADN ADD 13258 EDIT 14016
                    var $usefulSoft = $('ul.useful-software').children('li:not(.simple-list)'); // ADN EDIT 14016
                    var $simpleTxt = $('ul.useful-software').children('li.simple-list').find('ul.simple-txt').children('li');
                    if (ss.metrics.deviceLayoutId > 2) {
                        $usefulSoft.eq(1).removeClass('hide'); // ADN ADDED 16861 (Edit By moon)
                        setTimeout(function(){
                            supportResizeModule($usefulSoft, 1, 1, 2, 2, 2);
                            supportResizeModule($simpleTxt, 1, 1, 4, 4, 4);
                        }, 500);
                    } else if (ss.metrics.deviceLayoutId > 1) {
                        $usefulSoft.eq(1).removeClass('hide'); // ADN ADDED 16861 (Edit By moon)
                        setTimeout(function(){
                            supportResizeModule($usefulSoft, 1, 1, 2, 2, 2);
                            supportResizeModule($simpleTxt, 1, 1, 4, 4, 4);
                        }, 500);
                    } else {
                        $usefulSoft = $usefulSoft.not('.isDesktop'); // ADN ADDED 140605
                        $usefulSoft.css('height', 'auto');

                        // ADN ADDED 16881 (Edit By moon)
                        if(window.innerWidth<768){
                            if($('.load-more-button').css('display')=='inline-block'){
                                $usefulSoft.eq(1).addClass('hide');
                            }
                        }else{
                            if($('.load-more-button').css('display')=='inline-block'){
                                $usefulSoft.eq(1).removeClass('hide');
                            }
                        }
                        $simpleTxt.css('height', 'auto');
                    }

                }

                //featured topic height ADN ADD 13258 EDIT 14016 // ADN EDITED 16042 (Edit By moon)
                if (canFeaturedTopic) {
                    var $featureList = $('.featured-topics').find('ul').children('li');
                    var $linksTxt = $('.useful-links').find('ul').children('li');
                    var $topicType = $('.topic-type').children('div');
                    var $tvType = $('.tv-type').children('div');
                    if (ss.metrics.deviceLayoutId > 2) {
                        //featureHeight($featureList);
                        setTimeout(function(){
                            supportResizeModule($featureList, 1, 1, 2, 2, 2);
                            supportResizeModule($linksTxt, 1, 1, 4, 4, 4);
                        }, 500);
                    } else if (ss.metrics.deviceLayoutId > 1) {
                        setTimeout(function(){
                            supportResizeModule($featureList, 1, 1, 2, 2, 2);
                            supportResizeModule($linksTxt, 1, 1, 4, 4, 4);
                        }, 500);
                    } else {
                        $featureList.css('height', 'auto');
                        $linksTxt.css('height', 'auto');
                    }
                }
                setTimeout(function(){
                    supportResizeModule($topicType, 2, 2, 4, 4, 6);
                    supportResizeModule($tvType, 2, 2, 4, 4, 6);
                }, 500);
            });


            // Useful Software
            if (canUsefulSoftware) {
            	checkUsefulSoftware();
                var showUsefulSoftware = false;
                $('.show-more-button[data-area=useful-software]').on('click', function (e) {
                    if (showUsefulSoftware) {
                        return;
                    }
                    showUsefulSoftware = true;
                    var $viewMore = $(this);
                    var $commonList = $viewMore.prev('.common-list');

                    ss.spinner({ how: 'before', where: $viewMore }, function (hideSpinner) {
                        var timeoutId = setTimeout(function () {
                            clearTimeout(timeoutId);
                            hideSpinner();
                            $viewMore.hide();
                            $commonList.find('li').removeClass('hide');

                            //$usefulSoft height ADN ADD 14016
                            var $simpleTxt = $('ul.useful-software').children('li.simple-list').find('ul.simple-txt').children('li');
                            var $usefulSoft = $('ul.useful-software').children('li:not(.simple-list)');
                            if (ss.Detect().device === 'mobile' || ss.Detect().device === 'mobile-landscape') {
                                $simpleTxt.css('height', 'auto');
                            } else {
                                //featureHeight($usefulSoft); // ADN EDITED 16042 (Edit By moon)
                                setTimeout(function(){
                                    supportResizeModule($usefulSoft, 1, 1, 2, 2, 2);
                                    supportResizeModule($simpleTxt, 1, 1, 4, 4, 4);
                                }, 500);
                                //resingTxt($simpleTxt);
                            }
                        }, 800);
                    });

                    // Omniture
                    sendClickCode('view_more', 'view more:useful software');
                });
            }

            //20140912 웹 접근성 관련 이벤트 추가 - ADN 
            $('.ss_samsung').on('keydown', '.model-listing li', function( event ){
            	if( event.keyCode == "13" ){
            		$selectedModel = $( this );
            		setTimeout( function(){ $( ".popover  .select-button").focus(); }, 0 );
            	}
            } )
            .on('keydown', '.select-button', function( event ){
            	if( event.keyCode == "9" && event.shiftKey == true ){
            		event.preventDefault();
//            		$( ".model-listing ul[ class!=hide] a").first().focus();
            		$( ".model-listing ul[data-subtype]:not(.hide) a").first().focus();
            	}
            } );
        }
        // 2014 07 28 신규 추가 - moon
        function labelInput(){
        	// search placeholder 대체
        	$('.input').each(function(){
        		var self = $(this), isCtrLabel = self.hasClass('ctrLabel');
        		var $inputTxt;
        		if(self.find('.labelTxt').length) return;
        		if(self.parents('.find-my-device-popover').length) return;
        		if(isCtrLabel && !self.find('.labelTxt').length){
        			$('<p class="labelTxt"><span></span></p>').prependTo(self);
        			$inputTxt = self.find('.labelTxt span');
        			var labelTxt = self.find('input').attr('data-text');
        			if(self.find('input').attr('value').length>0) self.find('input').attr('value','');
        			$inputTxt.text(labelTxt);
        			$inputTxt.on('click', function (){
        				self.find('input').focus();
        			});
        		}

        		var inputStr = self.find('.labelTxt span').text(), input = self.find('input');
        		input.on('focus', function(){
        			$(this).prev('.labelTxt').find('span').text('');
        		});

        		input.on('blur', function(){
        			if($(this).attr('value').length==0){
        				$(this).prev('.labelTxt').show().find('span').text(inputStr);
        			}else{
        				$(this).prev('.labelTxt').hide();
        			}
        		});

        		input.on('keyup', function (ev) {

        		});

        	});
        };
        
        function popupSearchLoadProducts(subtype, page, sortBy, keyword, callback, thisArgs) {
            if (ajaxLoadProducts) {
                ajaxLoadProducts.abort();
            }
            ajaxLoadProducts = $.ajax({
		        url: '/' + SITE_CD + '/data-support/search/findmodel?mType=json',
		        data: {
		            'subTypeCode': subtype == '2705' ? '1905' : subtype,
		            'page': (support.findDevice.page = page),
		            'pageCnt': (support.findDevice.pageSize || (support.findDevice.pageSize = 100)),
		            'sortBy': (support.findDevice.sortBy = sortBy),
		            'isModelCode': ((subtype == '1402' || subtype == '1403') ? 'Y' : 'N'),
		            'keyword' : keyword
                },
                type: 'POST',
                success: function (data) {
                    ajaxLoadProducts = null;
                    callback.apply(thisArgs, [data.products]);
                },
                error: function (xhr) {
                    ajaxLoadProducts = null;
                    callback.apply(thisArgs, [null]);
                }
            });
        };
       
        function onFindDeviceSearchClick(e) {
        	if (e.type == "keydown" &&  e.which !== 13) {
        		return;
        	}
        	e.preventDefault();
            
            var $deviceFinder = $(this).parents('.device-finder');
            var $typeListing = $deviceFinder.find('.step-2 .type-listing ul');
            var $subtypeListing = $deviceFinder.find('.step-2 .subtype-listing ul');
            var $productListing = $deviceFinder.find('.step-2 .model-listing ul');
            var $productDetail = $deviceFinder.find('.step-2 .result');
            var $moreBtn = $deviceFinder.find('.step-2 .model-listing .btn_yview');
            var $sortBtn = $deviceFinder.find('.step-2 .model-listing .btn_ysort');
            var $sortLayer = $deviceFinder.find('.step-2 .model-listing .sortbyLayerBox');

            // empty
            $productListing.empty();
            $productListing.parent().find('.btn_yview').hide();
            $productDetail.hide();

            var subtype = $(".popover-content .subtype-listing li.selected").attr("data-subtype") || "";
            var keyword = $("#searchModelNumber1 #modelnumber1").val()||"";
            var self = this;

            //
            if (ajaxLoadProducts) {
                ajaxLoadProducts.abort();
            }
            ss.spinner({ how: 'append', where: $productListing, cb: function () { $productListing.find('.spinner-container').remove(); } }, function (hideSpinner) {
                popupSearchLoadProducts(subtype, 1, /*support.findDevice.sortBy || 초기화*/'A', keyword, function (items) {
                    hideSpinner();
                    if (!items || items.length == 0) {
                    	var subtype = $(".popover-content .subtype-listing li.selected").attr("data-subtype") || "";
                    	var type = $(".popover-content .type-listing li.selected").attr("data-type") || "";
                    	var imageSrc = subtype == '1905' ?
            	            			'/' + SITE_CD + '/support/common/img/ia_image_type_27_250.gif' : type ?
            	            			'/' + SITE_CD + '/support/common/img/ia_image_type_' + type + '_250.gif' : '/' + SITE_CD + '/support/common/img/img_120x120_blank.gif';
                    	
                    	$productDetail.find('.product-image img')
                    	.attr('src', imageSrc)
            			.attr('alt', support.messages['common.noprodimg.wcag']);
                    	
                    	$productDetail.find('.model-id').contents().filter(function () { return this.nodeType == 3; }).remove();
                        $productDetail.find('.model-name a').contents().filter(function () { return this.nodeType == 3; }).remove();
                        $productDetail.find(".select-button").attr("href","").addClass("offSelect");
                        
                        $productDetail.find(".select-button").on("click",function(e){
                        	if($(this).hasClass("offSelect")){
                        		e.preventDefault(); 
                            	e.stopPropagation();
                            	return;
                        	}
                        });
                        
                        $productDetail.show();
                        return;
                    }
                    $productDetail.find(".select-button").removeClass("offSelect");
                    
                    // render items
                    if (subtype == '1402' || subtype == '1403') {
                        for (var i = 0; i < items.length; i++) {
                            $productListing.append('<li data-pid="' + items[i].modelCode + '" data-image="' + items[i].modelImageUrl + '" data-name="' + items[i].displayName.replace('"', '&quot;') + '" data-mname="' + items[i].modelName + '"><a href="">' + items[i].modelCode + '</a></li>');
                        }
                    } else {
                        for (var i = 0; i < items.length; i++) {
                            $productListing.append('<li data-pid="' + items[i].modelCode + '" data-image="' + items[i].modelImageUrl + '" data-name="' + items[i].displayName.replace('"', '&quot;') + '" data-mname="' + items[i].modelName + '"><a href="">' + items[i].displayName + '</a></li>');
                        }
                    }
                    $productListing.removeClass('hide').data('subtype', subtype);

                    // select default.
                    $productListing.find('li:first').trigger('click');

                    // more button handle
                    if (items.length > 0 && Math.ceil(items[0].total / support.findDevice.pageSize) > support.findDevice.page) {
                        $moreBtn.show();
                    } else {
                        $moreBtn.hide();
                    }
                 
                    $moreBtn.off('click').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        //
                        if (ajaxLoadProducts) {
                            ajaxLoadProducts.abort();
                            support.findDevice.page--;
                        }
                        ss.spinner({ how: 'append', where: $productListing, cb: function () { $productListing.find('.spinner-container').remove(); } }, function (hideSpinner) {
                            var scrollTop = 0;
                            $productListing.find('li').each(function (index, element) {
                                scrollTop += $(element).outerHeight();
                            });
                            scrollTop -= $productListing.height();
                            scrollTop += 80;//$productListing.find('.spinner-container').height();
                            $productListing.animate({ scrollTop: scrollTop }, '300', 'easeInOutQuad');
                            var subtype = $(".popover-content .subtype-listing li.selected").attr("data-subtype") || "";
                            popupSearchLoadProducts(subtype, ++support.findDevice.page, support.findDevice.sortBy, keyword, function (items) {
                                hideSpinner();
                                if (!items) {
                                    // failure
                                    return;
                                }

                                // render items
                                if (subtype == '1402' || subtype == '1403') {
                                    for (var i = 0; i < items.length; i++) {
                                        $productListing.append('<li data-pid="' + items[i].modelCode + '" data-image="' + items[i].modelImageUrl + '" data-name="' + items[i].displayName.replace('"', '&quot;') + '" data-mname="' + items[i].modelName + '"><a href="">' + items[i].modelCode + '</a></li>');
                                    }
                                } else {
                                    for (var i = 0; i < items.length; i++) {
                                        $productListing.append('<li data-pid="' + items[i].modelCode + '" data-image="' + items[i].modelImageUrl + '" data-name="' + items[i].displayName.replace('"', '&quot;') + '" data-mname="' + items[i].modelName + '"><a href="">' + items[i].displayName + '</a></li>');
                                    }
                                }

                                // focus
                                // $productListing.find('li').eq((support.findDevice.page - 1) * support.findDevice.pageSize).find('a').focus();

                                // more button handle
                                if (items.length > 0 && Math.ceil(items[0].total / support.findDevice.pageSize) > support.findDevice.page) {
                                    $moreBtn.show();
                                } else {
                                    $moreBtn.hide();
                                }
                            }, self);
                        });
                    });

                    // sort handle
                    $sortBtn.off('click').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        $sortLayer.toggleClass('hide');
                        $sortBtn.find('span.icon-plus').toggleClass('icon-minus');
                        var $blind = $sortBtn.find('span.icon-plus > span');
                        if ($sortLayer.hasClass('hide')) {
                            $blind.text($blind.parent().data('text'));
                        } else {
                            $blind.text($blind.parent().data('after-text'));
                        }
                    });
                    $sortLayer.find('a').off('click').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        // empty
                        $productListing.empty();
                        $productDetail.hide();

                        $sortLayer.toggleClass('hide');
                        $sortBtn.find('span.icon-plus').toggleClass('icon-minus');
                        var $blind = $sortBtn.find('span.icon-plus > span');
                        if ($sortLayer.hasClass('hide')) {
                            $blind.text($blind.parent().data('text'));
                        } else {
                            $blind.text($blind.parent().data('after-text'));
                        }

                        var sortBy = $(this).data('sortby');

                        //
                        if (ajaxLoadProducts) {
                            ajaxLoadProducts.abort();
                        }
                        var subtype = $(".popover-content .subtype-listing li.selected").attr("data-subtype") || "";
                        ss.spinner({ how: 'append', where: $productListing, cb: function () { $productListing.find('.spinner-container').remove(); } }, function (hideSpinner) {
                        	popupSearchLoadProducts(subtype, 1, sortBy, keyword, function (items) {
                                hideSpinner();
                                if (!items) {
                                    // failure
                                    return;
                                }

                                // render items
                                if (subtype == '1402' || subtype == '1403') {
                                    for (var i = 0; i < items.length; i++) {
                                        $productListing.append('<li data-pid="' + items[i].modelCode + '" data-image="' + items[i].modelImageUrl + '" data-name="' + items[i].displayName.replace('"', '&quot;') + '" data-mname="' + items[i].modelName + '"><a href="">' + items[i].modelCode + '</a></li>');
                                    }
                                } else {
                                    for (var i = 0; i < items.length; i++) {
                                        $productListing.append('<li data-pid="' + items[i].modelCode + '" data-image="' + items[i].modelImageUrl + '" data-name="' + items[i].displayName.replace('"', '&quot;') + '" data-mname="' + items[i].modelName + '"><a href="">' + items[i].displayName + '</a></li>');
                                    }
                                }

                                // select default.
                                $productListing.find('li:first').trigger('click');

                                // more  button handle
                                if (items.length > 0 && Math.ceil(items[0].total / support.findDevice.pageSize) > support.findDevice.page) {
                                    $moreBtn.show();
                                } else {
                                    $moreBtn.hide();
                                }

                                //
                                $sortBtn.focus();
                            }, self);
                        });
                    });

                }, self);
            });
        };
        
        function onFindDeviceSearchMobileClick(e) {
        	if (e.type == "keydown" &&  e.which !== 13) {
        		return;
        	}
            e.preventDefault();
            e.stopPropagation();
            $("#searchModelNumber2").removeClass("offSearch");
            var $li = $(".popover-content .find-device-mobile .subcategory.active[data-subtype]");
            var $subtype = $li;
//            var $subtypeSiblings = $li.siblings();
            var $productListing = $li.find('> ul');

            // show/hide
//            $subtypeSiblings.addClass('hide');
            $subtype.removeClass('hide').addClass('active');
            //list 초기화
            $productListing.find('li:not(:first)').remove();

            var self = $li[0];
            var subtype = $subtype.attr("data-subtype") || "";
    		var keyword = $("#searchModelNumber2 #modelnumber2").val()||"";
            // render func
            var renderItems = function (subtype, items) {
            	if (subtype == '1402' || subtype == '1403') {
                    for (var i = 0; i < items.length; i++) {
                    	var detailUrl = '/' + SITE_CD + '/support/model/' + items[i].modelCode;
                    	if(ss.Support.isPopoverGetHelpOpen){
                    		detailUrl += '#get-help'; 
                    	}
                        $productListing.append($('<li data-pid="' + items[i].modelCode + '" data-mname="' + items[i].modelName + '"></li>')
                            .append($('<a href="'+detailUrl+'" title="' + items[i].displayName + '">' + items[i].modelCode + '<span class="icon-arrow-right"></span></a>').on('click', onFindDeviceMobileProductClick)));
                    }
                } else {
                    for (var i = 0; i < items.length; i++) {
                    	var detailUrl = '/' + SITE_CD + '/support/model/' + items[i].modelCode;
                    	if(ss.Support.isPopoverGetHelpOpen){
                    		detailUrl += '#get-help';
                    	}
                        $productListing.append($('<li data-pid="' + items[i].modelCode + '" data-mname="' + items[i].modelName + '"></li>')
                            .append($('<a href="' +detailUrl+'" title="' + items[i].displayName + '">' + items[i].displayName + '<span class="icon-arrow-right"></span></a>').on('click', onFindDeviceMobileProductClick)));
                    }
                }
            };

            //
            if (ajaxLoadProducts) {
                ajaxLoadProducts.abort();
            }
            $productListing.append('<li class="temp" style="padding: 0 0 20px 0; background-color: white;"></li>');
            ss.spinner({ how: 'append', where: $productListing.find('> li.temp'), cb: function () { $productListing.find('> li.temp').remove(); } }, function (hideSpinner) {
                popupSearchLoadProducts(subtype, 1, /*support.findDevice.sortBy || 초기화*/'A', keyword, function (items) {
                    hideSpinner();
                    if (!items||items.length == 0 ) {
                    	$(this).find('.btn_yview').hide();
//                    	var noresultEl = $('<li class="findNoResult" tabindex="-1"><span></span></li>');
//                    	var noresultMessage = support.messages['common.noresult.text'] || "Sorry, no results were found.";
//                    	noresultEl.find("span").html(noresultMessage);
//                    	$productListing.append(noresultEl);
                        return;
                    }

                    // render items
                    renderItems(subtype, items);

                    // focus
                    $productListing.find('li:nth-child(2)').attr('tabindex', -1).focus().one('blur', function () {
                        $(this).removeAttr('tabindex');
                    });

                    var $moreBtn = $(this).find('.btn_yview');
                    var $sortBtn = $(this).find('.btn_ysort');
                    var $sortLayer = $(this).find('.sortbyLayerBox');

                    // more button handle
                    if (items.length > 0 && Math.ceil(items[0].total / support.findDevice.pageSize) > support.findDevice.page) {
                        $moreBtn.show();
                    } else {
                        $moreBtn.hide();
                    }
                    $moreBtn.off('click').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        //
                        if (ajaxLoadProducts) {
                            ajaxLoadProducts.abort();
                            support.findDevice.page--;
                        }
                        $productListing.append('<li class="temp" style="padding: 0 0 20px 0; background-color: white;"></li>');
                        ss.spinner({ how: 'append', where: $productListing.find('> li.temp'), cb: function () { $productListing.find('> li.temp').remove(); } }, function (hideSpinner) {
                            var scrollTop = 0;
                            $productListing.find('li:not(.temp)').each(function (index, element) {
                                scrollTop += $(element).outerHeight();
                            });
                            scrollTop -= $productListing.height();
                            scrollTop += 80;//$productListing.find('.spinner-container').height();
                            $productListing.animate({ scrollTop: scrollTop }, '300', 'easeInOutQuad');
                            var subtype = $subtype.attr("data-subtype") || "";
                            popupSearchLoadProducts(subtype, ++support.findDevice.page, support.findDevice.sortBy, keyword, function (items) {
                                hideSpinner();
                                if (!items) {
                                    // failure
                                    return;
                                }

                                // render items
                                renderItems(subtype, items);

                                // focus
                                // $productListing.find('li').eq((support.findDevice.page - 1) * support.findDevice.pageSize).find('a').focus();

                                // more button handle
                                if (items.length > 0 && Math.ceil(items[0].total / support.findDevice.pageSize) > support.findDevice.page) {
                                    $moreBtn.show();
                                } else {
                                    $moreBtn.hide();
                                }
                            }, self);
                        });
                    });

                    // sort handle
                    $sortBtn.show().off('click').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        $sortLayer.toggleClass('hide');
                        $sortBtn.find('span.icon-plus').toggleClass('icon-minus');
                        var $blind = $sortBtn.find('span.icon-plus > span');
                        if ($sortLayer.hasClass('hide')) {
                            $blind.text($blind.parent().data('text'));
                        } else {
                            $blind.text($blind.parent().data('after-text'));
                        }
                    });
                    $sortLayer.find('a').off('click').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        // empty
                        $productListing.find('li:not(:first)').remove();

                        $sortLayer.toggleClass('hide');
                        $sortBtn.find('span.icon-plus').toggleClass('icon-minus');
                        var $blind = $sortBtn.find('span.icon-plus > span');
                        if ($sortLayer.hasClass('hide')) {
                            $blind.text($blind.parent().data('text'));
                        } else {
                            $blind.text($blind.parent().data('after-text'));
                        }

                        var sortBy = $(this).data('sortby');

                        //
                        if (ajaxLoadProducts) {
                            ajaxLoadProducts.abort();
                        }
                        $productListing.append('<li class="temp" style="padding: 0 0 20px 0; background-color: white;"></li>');
                        var subtype = $subtype.attr("data-subtype") || "";
                        ss.spinner({ how: 'append', where: $productListing.find('> li.temp'), cb: function () { $productListing.find('> li.temp').remove(); } }, function (hideSpinner) {
                        	popupSearchLoadProducts(subtype, 1, sortBy, keyword,  function (items) {
                                hideSpinner();
                                if (!items) {
                                    // failure
                                    return;
                                }

                                // render items
                                renderItems(subtype, items);

                                // more button handle
                                if (items.length > 0 && Math.ceil(items[0].total / support.findDevice.pageSize) > support.findDevice.page) {
                                    $moreBtn.show();
                                } else {
                                    $moreBtn.hide();
                                }

                                //
                                $sortBtn.focus();
                            }, self);
                        });
                    });
                }, self);
            });
        };
        
        init();
    };

}(jQuery));