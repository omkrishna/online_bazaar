/*!************************************************
 * E-Store Interface 관련 공통 Util
 * 인터페이스명세서(NG_to_Store)_20140226-v.3.0 적용
 **************************************************/
var estore = (function(){
	
	/**
	 * JSON 을 URL Parameter 로 변경
	 */
	var jsonToStringParameter = function( jsonParam ) {
		var strParam = '?';
		var idx = 0;
		var value;
		for( key in jsonParam ) {
			if( idx != 0 ) strParam += '&';
			value = jsonParam[key];
			if( $.isArray(value) ) {
				$.each(value, function(idx, data){
					strParam += key + '=' + data;
					if( idx < value.length-1 ) strParam += '&';
				});
			} else {
				strParam += key + '=' + value;
			}
			idx++;
		}
		return strParam;
	};
	
	/**
	 * ESTORE ERROR MESSAGE Alert Show
	 */
	var errorMsgShow = function( message ) {
		var $layer = $('#popup_alert');
		$layer.find('.msg-text').html( message );
		$(".layer_popup").hide();
		$layer.parent().show();
		$('body').append('<div class="lightbox-skrim"></div>');
		var l = parseInt(($('body').width() - $layer.width())/2);
		var t = parseInt( $(window).scrollTop() + (($(window).height()-$layer.height())/2) );
		$layer.css({ "top":t+"px", "left":l+"px" });
	};
	
	/*************************
	 * ajax call
	 *************************/
	var send = function( service, param, returnCallback ) {
		var url = 'http://' + STORE_DOMAIN + '/' + SITE_CD + '/ng/p4v1/' + service + ( param ? jsonToStringParameter(param) : '' );
	    $.ajax({
	        url: url,
	        type: 'GET',
	        dataType : 'jsonp',
	        jsonp : 'callback',
	        success: function (data) {
	        	// 쿠키/세션간 사용자 정보가 일치하지 않을 경우
	        	if( '2100' == data.resultCode ) {
	        		//store 세션없음. 로그아웃처리
	        		if( param && param.hasOwnProperty('returnUrl') && '' !== param.returnUrl ) {
	        			$.Auth.signOut( param.returnUrl );
	        		} else {
	        			$.Auth.signOut();
	        		}
	        		// cn 사이트일 경우 코드값이 2000 ~ 3000번 일때만 경고창 노출
	        	} else if(SITE_CD == "cn" && 
	        			 '0000' != data.resultCode && '9000' != data.resultCode && '9001' != data.resultCode && '9002' != data.resultCode &&
		        			// 2014.05.08. 로그인 중일 때 호출하게 되면 '2110' 반환
		        			'2110' != data.resultCode &&
		        			(data.resultCode.length == 4 && ('2' == data.resultCode.charAt(0) || '3' == data.resultCode.charAt(0)))){
	        		errorMsgShow( data.resultMessage );
	        	} else if( SITE_CD != "cn" &&  '0000' != data.resultCode && '9000' != data.resultCode && '9001' != data.resultCode && '9002' != data.resultCode &&
	        			// 2014.05.08. 로그인 중일 때 호출하게 되면 '2110' 반환
	        			'2110' != data.resultCode ) {
	        		errorMsgShow( data.resultMessage );
	        	}
	        	// return callback
	        	if( $.isFunction(returnCallback) ) {
	        		returnCallback( data );
	        	}
	        },
	        error:function(jqXHR, textStatus, errorThrown){
	        	//errorMsgShow( ESTORE_FAULT_MSG );
	        }
	    });
	};
	
	
	/*************************
	 * public network service
	 *************************/
	var estoreConstructor = function(){};

	/**
	 * 장바구니 상품 추가
	 * @param  
	 * {
	 * 		productCode : 상품코드 [필수],
	 * 		quantity : 수량,
	 * 		returnUrl : 세션 종료시 redirect URL
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.addCart = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'addCart', param, returnCallback);
	};
	
	/**
	 * Cart 건수 조회
	 * @param callback function
	 */
	estoreConstructor.prototype.getCartCount = function( returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getCartCount', null, returnCallback);
	};
	
	/**
	 * 실시간 상품 정보 조회(가격, 재고, 주문 Min/Max 수량, Promotion 여부)
	 * @param  
	 * {
	 * 		 productCode : 상품코드 [필수],
	 * 		 guid : 글로벌유저아이디
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.getRealTimeProductSimpleInfo = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getRealTimeProductSimpleInfo', param, returnCallback);
	};
	
	/**
	 * 리스트용 실시간 상품 정보 조회
	 * @param  
	 * {
	 * 		 guid : 글로벌유저아이디,
	 * 		 productCode (Array<string>) : 상품 모델코드 배열
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.getRealTimeProductListInfo = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getRealTimeProductListInfo', param, returnCallback);
	};
	
	/**
	 * 위시리스트 추가
	 * @param  
	 * {
	 * 		 productCode : 상품코드
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.addWishListItem = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'addWishListItem', param, returnCallback);
	};
	
	/**
	 * 위시리스트 추가(queue에 담을 필요 없는 경우-로그인 직후 cookie에 있는 wishlist 저장 시)
	 * @param  
	 * {
	 * 		 productCode : 상품코드
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.addWishListItemForce = function( param, returnCallback ) {
		send('addWishListItem', param, returnCallback);
	};
	
	/**
	 * 위시리스트 삭제
	 * @param  
	 * {
	 * 		productCode : 상품코드,
	 * 		returnUrl : 세션 종료시 redirect URL
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.delWishListItem = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'delWishListItem', param, returnCallback);
	};
	
	/**
	 * 위시리스트 가져오기
	 * @param  
	 * {
	 * 		 page (int) : 페이지번호[default:0],
	 * 		 pageSize (int) : 페이지사이즈[default:5],
	 * 		 returnUrl : 세션 종료시 redirect URL
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.getWishList = function( param, returnCallback ) {
		// defaultParam setting
		var defaultParam = {
			page : 1,
			pageSize : 5
		};
		if( param && !$.isFunction(param) ) defaultParam = $.extend( defaultParam, param );
		$.EstoreIfQueue.setQueue(send, 'getWishList', defaultParam, returnCallback);
	};
	
	/**
	 * Store Login
	 * @param callback function
	 */
	estoreConstructor.prototype.login = function( returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'login', null, returnCallback);
	};

	
	/**
	 * Store Logout
	 * @param  
	 * {
	 * 		 returnUrl : 세션 종료시 redirect URL
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.logout = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'logout', param, returnCallback);
	};

	/**
	 * 위시리스트용 실시간 상품 정보 조회
	 * @param  
	 * {
	 * 		 guid : 글로벌유저아이디,
	 * 		 productCode (Array<string>) : 상품 모델코드 배열,
	 * 		 returnUrl : 세션 종료시 redirect URL
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.getRealTimeWishProductListInfo = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getRealTimeWishProductListInfo', param, returnCallback);
	};
	
	/**
	 * 비회원 주문정보 존재여부 조회
	 * @param  
	 * {
	 * 		 orderCode : 주문코드 [필수],
	 * 		 email : 주문자이메일 [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.getGuestOrderExistYn = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getGuestOrderExistYn', param, returnCallback);
	};
	
	/**
	 * SNS Login 사용자 정보 조회
	 * @param  
	 * {
	 * 		 snsSessionId : SNS Session ID [필수],
	 * 		 returnUrl : 세션 종료시 redirect URL
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.getSnsUserInfo = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getSnsUserInfo', param, returnCallback);
	};
	
	/**
	 * 미니카트 조회
	 * @param callback function
	 */
	estoreConstructor.prototype.getMiniCartList = function( returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getMiniCartList', null, returnCallback);
	};
	
	/**
	 * 미니카트 아이템 삭제
	 * @param  
	 * {
	 * 		 productCode : 상품코드 [필수],
	 * 		 moveWishList : WishList 등록여부 [필수:Y/N]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.delMiniCartItem = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'delMiniCartItem', param, returnCallback);
	};
	
	/**
	 * Store 개인정보보호정책 동의
	 * @param  
	 * {
	 * 		 receiveEmail : 메일수신여부 [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.setAgreeStorePolicy = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'setAgreeStorePolicy', param, returnCallback);
	};
	
	/**
	 * Store Session 체크
	 * @param  
	 * {
	 * 		 returnUrl : 세션 종료시 redirect URL
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.getSessionCheck = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getSessionCheck', param, returnCallback);
	};
	
	/**
	 * Estore Category목록 가져오기
	 * @param callback function
	 */
	estoreConstructor.prototype.getEstoreCategoryList = function( returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getEstoreCategoryList', null, returnCallback);
	};
	
	/**
	 * 스토어 사용자 정보
	 * @param  
	 * {
	 * 		storeSessionId : SNS Session ID [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.getCurrentUserInfo = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getCurrentUserInfo', param, returnCallback);
	};
	
	/**
	 * 장바구니 상품 추가
	 * @param  
	 * {
	 * 		productCode : 상품코드 [필수],
	 * 		quantity : 수량
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.buyNow = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'buyNow', param, returnCallback);
	};
	
	/**
	 * 리뷰 조회
	 * @param  
	 * {
	 * 		siteCode : 국가코드 [필수],
	 * 		pageNum : List 시작 페이지 [필수],
	 * 		rowNum : List 개수 [필수],
	 * 		productCode : 상품코드 [필수],
	 * 		sort : 정렬타입 [옵션],
	 * 		userListYn : Y일 경우 사용자가 입력한 Review를 같이 보여줌 [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.getReviews = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getReviewList', param, returnCallback);
	};		
	
	/**
	 * 나의 리뷰 조회
	 * @param  
	 * {
	 * 		siteCode : 국가코드 [필수],
	 * 		productCode : 상품 코드 [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.getMyReview = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getMyReview', param, returnCallback);
	};
	
	/**
	 * 나의 리뷰 등록
	 * @param  
	 * {
	 * 		siteCode : 국가코드 [필수],
	 * 		productCode : 상품코드 [필수],
	 * 		rating : Review 평가 [필수],
	 * 		headline : Review 제목 [필수],
	 * 		comment : Review 내용 [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.addReview = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'addReview', param, returnCallback);
	};
	
	/**
	 * 나의 리뷰 수정
	 * @param  
	 * {
	 * 		siteCode : 국가코드 [필수],
	 * 		productCode : 상품코드 [필수],
	 * 		reviewId : Review ID [필수],
	 * 		headline : Review 제목 [필수],
	 * 		comment : Review 내용 [필수],
	 * 		rating : Review 평가 [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.updateReview = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'updateReview', param, returnCallback);
	};
	
	/**
	 * 나의 리뷰 삭제
	 * @param  
	 * {
	 * 		siteCode : 국가코드 [필수],
	 * 		productCode : 상품코드 [필수],
	 * 		reviewId : Review ID [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.deleteReview = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'deleteReview', param, returnCallback);
	};

	/**
	 * 리뷰 추천
	 * @param  
	 * {
	 * 		siteCode : 국가코드 [필수],
	 * 		productCode : 상품코드 [필수],
	 * 		reviewId : Review ID [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.addReviewHelpful = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'setReviewHelpful', param, returnCallback);
	};
	
	/**
	 * 리뷰 추천 등록
	 * @param  
	 * {
	 * 		siteCode : 국가코드 [필수],
	 * 		productCode : 상품코드 [필수],
	 * 		reviewId : Review ID [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.addReviewHelpful = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'setReviewHelpful', param, returnCallback);
	};
	
	/**
	 * 리뷰 비추천 등록
	 * @param  
	 * {
	 * 		siteCode : 국가코드 [필수],
	 * 		productCode : 상품코드 [필수],
	 * 		reviewId : Review ID [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.addReviewUnHelpful = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'setReviewUnHelpful', param, returnCallback);
	};
	
	/**
	 * 전문가 리뷰 조회
	 * @param  
	 * {
	 * 		siteCode : 국가코드 [필수],
	 * 		productCode : 상품코드 [필수],
	 * 		page : 페이지 번호 [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.addReviewAbuse = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'setReviewAbuse', param, returnCallback);
	};
	
	/**
	 * 리뷰신고
	 * @param  
	 * {
	 * 		siteCode : 국가코드 [필수],
	 * 		productCode : 상품코드 [필수],
	 * 		review ID : Review ID [필수],
	 * 		issueDescription : Abuse comment [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.getExpertReviewList = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getExpertReviewList', param, returnCallback);
	};	
	
	/**
	 * 대물상품 중국의 성 조회( 성 코드, 성 이름 )
	 * @param  
	 * {
	 * 		 
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.getProductDetailRegion = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getProductDetailRegion', param, returnCallback);
	};
	
	/**
	 * 대물상품 중국의 시 조회( 시 코드, 시 이름 )
	 * @param  
	 * {
	 * 		 region : 지역코드 [필수]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.getProductDetailCity = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'getProductDetailCity', param, returnCallback);
	};
	
	/**
	 * 개통폰 예상금액 조회
	 * @param  
	 * {
	 *       productCode   : 상품 코드 [옵션] 
	 *       makerx           : 통신사 사업자 코드 [옵션]
	 *       charge             : 요금제 [옵션]
	 *       contract          : 약정기간 [옵션]
	 *       jointype           : 가입유형 [옵션]
	 *       monthly          : 단말기할부기간 [옵션]
	 *       subside            : 추가할인 [옵션]
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.showProductOpenphoneOption = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'showProductOpenphoneOption', param, returnCallback);
	};
	
	/**
	 * 미리계산기 금액 조회
	 * @param  
	 * {
	 *  productCodePost  : 상품코드	 
	 *  quantity                : 수량
	 *  spointadd              : spoint 잔여 및 기본 포인트
	 *  spointbase             : spoint 추가 포인트
	 * }
	 * @param callback function
	 */
	estoreConstructor.prototype.preCalc = function( param, returnCallback ) {
		$.EstoreIfQueue.setQueue(send, 'preCalc', param, returnCallback);
	};
	
	return new estoreConstructor();
	
})();