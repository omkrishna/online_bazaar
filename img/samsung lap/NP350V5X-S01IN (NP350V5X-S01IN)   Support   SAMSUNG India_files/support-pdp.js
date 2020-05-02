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
    $.SupportPDP = function (params) {

        /**
        Stores the top level scope.

        @property self
        **/
        var $commentList = $('#commentList');
        
        /**
        @method init
        **/
        function init() {
        	
        	$.SupportPDP.commentAccordions = commentAccordions;
        	bindEvents();
            bindAskAnswerSubmitEvents();
            
            if(location.hash !== "#csc"){
                $('.support-pdp .top-wrap').trigger('click');
                $('.support-pdp h2.toggler').trigger('click'); // ADN ADDED support.js 17038 by moon
            }
            
            // get-help hash 처리
            if(location.hash === "#get-help"){
            	$(".support-pdp .get-menu-buttons a[data-section=get-help]").trigger("click");
            }
                        
            if(location.hash === "#csc"){
            	ss.htmlBody.animate({ scrollTop: ss.metrics.elemTop($(".get-menu-buttons")) }, 0);
            	$("div.useful-software.common-list").hide();
            	$('.featured-topics').hide();
            	$('.show-more-button[data-area=useful-software]').hide();
            }
        }
        
        /**
        Bind Ask & Answer List events.

        @method commentAccordions
        @author syy.song
        **/
		function commentAccordions(){
			var $self = $(this),
				$nextContent = $self.next('.comment-content');
			if($nextContent.hasClass('active')){
				$nextContent.removeClass('active');
			} else {
				$nextContent.addClass('active');
				ss.htmlBody.animate({ scrollTop: ss.metrics.elemTop($self) }, 1000);	
			}
		}
		/* ADD ADNSTYLE 13258 */
		/* ADD ADNSTYLE 13448 반영*/
		/*
		function showTooltip(container, popover, evnt){

			var e = evnt,
				$container = container,
				$link = $(this),
				$tooltip = popover;	
			
			console.log(e.type);

			if(e.type=='mouseover'||e.type=='click'){		
				var ex = e.pageX;	
				var ey = e.pageY;	
				var offset = $container.offset();	
				var offsetX = ex - offset.left;		
				var offsetY = ey - offset.top;		
			}

			if(e.type=='mouseover'||e.type=='click'){	
				var width = $tooltip.outerWidth();		
				var height = $tooltip.outerHeight();
			}

			$tooltip.removeClass('hide').show();	

			if(e.type=='mouseover'||e.type=='click'){
				var posX = offsetX-(width/2);
				console.log(posX);
				if(posX<0){
//					$tooltip.find('.arrow').css({'margin-left': (posX)+'px', 'border-width':'0px'});
					$tooltip.find('.arrow').css({'margin-left': (posX)+'px'});
					posX = 0;
				}else{
//					$tooltip.find('.arrow').css({'margin-left': '-11px', 'border-width':'0px'});
					$tooltip.find('.arrow').css({'margin-left': '-11px'});
				}
				if($(this).offset().top-(popover.outerHeight()+12)>$(window).scrollTop()){
					$tooltip.css({ 'left' : posX, 'top' : offsetY-height-10 });	
					$tooltip.removeClass('bottom').addClass('top');
				}else{
					$tooltip.css({ 'left' : posX, 'top' : offsetY+12});	
					$tooltip.removeClass('top').addClass('bottom');
				}
			}
		}

		function hideTooltip(popover){
			var $tooltip = popover;	
			$tooltip.addClass('hide').hide();
		}
		*/
        /**
        Bind events.

        @method bindEvents
        **/
        function bindEvents() {
        	/* ADD ADNSTYLE 13448 반영*/
        	/*
        	$('.tooltipbox').bind({
				'mouseover click' :function(e){
					var evnt = e,
						popover = $(this).parent().siblings('.popover'),
						container = $(this).parents('.manuals-module');
			
					showTooltip.call($(this), container, popover, evnt);
				},
				'mousemove': function(e){
					var evnt = e,
					popover = $(this).parent().siblings('.popover'),
					container = $(this).parents('.manuals-module');

					//showTooltip.call($(this), container, popover, evnt);
				},
				'mouseleave': function(e){
					var popover = $(this).parent().siblings('.popover');
					hideTooltip(popover);
				}
			});
        	
			$('.manuals-module').find('.popover').on('click', '.close-button', function(){
				var popover = $(this).parents('.popover');
				hideTooltip(popover);
			});
			*/
            /* ADD ADNSTYLE 13448 반영*/
        	
        	/* ADD ADNSTYLE */
			$commentList.on('click', '.comment-button', commentAccordions);

			$('.common-layer-default').on('click', '.icon-close-x', function(){
				$('.common-layer-default').removeClass('active');
			});
         
			/* ADD ADNSTYLE */
			
			
			/* ADD ADNSTYLE 20140312*/
			if(pageInfo.smartSimulatorUrl != void 0 && pageInfo.smartSimulatorUrl!= ""){
				$('.support-pdp .smart-simulator').on('click',function(e){
					sendClickCode('content_click', 'smart simulator');
					window.open(pageInfo.smartSimulatorUrl, 'POPSMARTSIMULATOR','width=990, height=800, location=1,status=0,scrollbars=1');
				});
			}
			
            $('.support-pdp .toggle').on('click', function(e) {
				eventBridge.trigger('myScroll', { link : this });
			});
            
            eventBridge.on('myScroll', function(e, data){
				var $self = $(data.link);

				if($self.hasClass('clsBtn')){
					$self.parent().prev('.toggle').removeClass('link-toggled').find('.icon-plus').removeClass('icon-minus');
				}
				if($self.hasClass('extra-specs') && $self.attr('data-autoscroll') == "true"){
					if(!$('.more-specs').find('> .header').next().hasClass('toggled')){
						$('.more-specs').find('> .header').trigger('click');
						var offset = ss.metrics.elemTop($('.more-specs'));
						ss.htmlBody.animate({ scrollTop : offset }, 1000);
					}
				}
				if($self.hasClass('top-wrap')){
					if(!$('.header').next().hasClass('toggled')){
						$('.product-specs-full').find('> .header').trigger('click');
						if ( $self.hasClass('_bind-init2click') ) {
							$self.removeClass('_bind-init2click');
						}
					}
				}
			});
            /* ADD ADNSTYLE 20140312 END*/
            $('.support-pdp .refine-results-button, .manual-item .toggler').on('click', mobileCheck);
        }
        
        /**
        Bind Ask & Answer Submit events.

        @method bindAskAnswerSubmitEvents
        @author syy.song
        **/
        function bindAskAnswerSubmitEvents() {
        	
        	var $questionWritePopup = $('#newQuestion1');
        	var $questionSubmitPopup = $('#newQuestion2');
        	var $answerWritePopup = $('#answerQuestion1');
        	var $answerSubmitPopup = $('#answerQuestion2');
        	var $answerSuccessPopup = $('#answerQuestion3');
        	// without Answer list 초기 페이징 데이터
   			var offset = 0;
   			var limit = 2;

   			/**
   			 * Private Function
   			 */
   			// [Question] Validate & Submit Setting
   			var previewQuestion = function() {
   				// validation
   				var questionsummary = $questionWritePopup.find('[data-key=questionsummary]').val2();
   				var usernickname = $questionWritePopup.find('[data-key=usernickname]').val2();
   				var useremail = $questionWritePopup.find('[data-key=useremail]').val2();
   				var reg = new RegExp("^[\\w\\-]+(\\.[\\w\\-_]+)*@[\\w\\-]+(\\.[\\w\\-]+)*(\\.[a-zA-Z]{2,3})$", "gi");
   				var summaryFlag = ('' === questionsummary);
   				var nicknameFlag = ('' === usernickname);
   				var emailFlag = ('' === useremail || !reg.test(useremail));
   				( summaryFlag ? $questionWritePopup.find('[data-key=questionSummaryError]').show() : $questionWritePopup.find('[data-key=questionSummaryError]').hide() );
   				( nicknameFlag ? $questionWritePopup.find('[data-key=userNicknameError]').show() : $questionWritePopup.find('[data-key=userNicknameError]').hide() );
   				( emailFlag ? $questionWritePopup.find('[data-key=userEmailError]').show() : $questionWritePopup.find('[data-key=userEmailError]').hide() );
   				if( summaryFlag ) {
   					$questionWritePopup.find('[data-key=questionsummary]').focus();
   					return false;
   				}
   				if( nicknameFlag ) {
   					$questionWritePopup.find('[data-key=usernickname]').focus();
   					return false;
   				}
   				if( emailFlag ) {
   					$questionWritePopup.find('[data-key=useremail]').focus();
   					return false;
   				}
        		// submit setting
   				$questionSubmitPopup.find('[data-key=usernickname]').text($questionWritePopup.find('[data-key=usernickname]').text());
        		$questionSubmitPopup.find('[data-key=questionsummary]').text(questionsummary);
        		if( $questionWritePopup.find('[data-key=useremailalerts]').is(':checked') ) {
        			$questionSubmitPopup.find('[data-key=useremail]').text(useremail);
        			$questionSubmitPopup.find('[data-key=useremailalerts]').show();
        		} else {
        			$questionSubmitPopup.find('[data-key=useremailalerts]').hide();
        		}
        		return true;
   			};
   		
   			// [Answer] Validate & Submit Setting
   			var previewAnswer = function() {
   				// validation
   				var answertext =  $answerWritePopup.find('[data-key=answertext]').val2();
   				var usernickname = $answerWritePopup.find('[data-key=usernickname]').val2();
   				var useremail = $answerWritePopup.find('[data-key=useremail]').val2();
   				var reg = new RegExp("^[\\w\\-]+(\\.[\\w\\-_]+)*@[\\w\\-]+(\\.[\\w\\-]+)*(\\.[a-zA-Z]{2,3})$", "gi");
   				var textFlag = ('' === answertext);
   				var nicknameFlag = ('' === usernickname);
   				var emailFlag = ('' === useremail || !reg.test(useremail));
   				( textFlag ? $answerWritePopup.find('[data-key=answerTextError]').show() : $answerWritePopup.find('[data-key=answerTextError]').hide() );
   				( nicknameFlag ? $answerWritePopup.find('[data-key=userNicknameError]').show() : $answerWritePopup.find('[data-key=userNicknameError]').hide() );
   				( emailFlag ? $answerWritePopup.find('[data-key=userEmailError]').show() : $answerWritePopup.find('[data-key=userEmailError]').hide() );
   				if( textFlag ) {
   					$answerWritePopup.find('[data-key=answertext]').focus();
   					return false;
   				}
   				if( nicknameFlag ) {
   					$answerWritePopup.find('[data-key=usernickname]').focus();
   					return false;
   				}
   				if( emailFlag ) {
   					$answerWritePopup.find('[data-key=useremail]').focus();
   					return false;
   				}
   				// submit setting
   				useremail = ( ''===useremail ? $answerWritePopup.find('[data-key=useremail]').attr('placeholder') : useremail );
        		$answerSubmitPopup.find('[data-key=usernickname]').text($answerWritePopup.find('[data-key=usernickname]').text());
        		$answerSubmitPopup.find('[data-key=answertext]').html( answertext.replace(/\n/gi,'<br/>') );
        		if( $answerWritePopup.find('[data-key=useremailalerts]').is(':checked') ) { 
        			$answerSubmitPopup.find('[data-key=useremail]').text(useremail);
        			$answerSubmitPopup.find('[data-key=useremailalerts]').show();
        		} else {
        			$answerSubmitPopup.find('[data-key=useremailalerts]').hide();
        		}
        		return true;
   			};
   			
   			// [Question] 등록
   			var questionSubmit = function( callback ){
   				// parameter setting
   				var param = {
						'questionsummary' : $questionWritePopup.find('[data-key=questionsummary]').val2(),
						'questiondetails' : $questionWritePopup.find('[data-key=questiondetails]').val2(),
						'usernickname' : $questionWritePopup.find('[data-key=usernickname]').val2(),
						'userlocation' : $questionWritePopup.find('[data-key=userlocation]').val2(),
						'useremail' : $questionWritePopup.find('[data-key=useremail]').val2(),
						'useremailalerts' : $questionWritePopup.find('[data-key=useremailalerts]').is(':checked'),
						// 사용자 정의 파라미터 Tag (AS-IS와 동일하게 진행함)
						'tag_Topic_1' : $questionWritePopup.find('[data-key=tag_Topic_1]').val2(),
						'tag_Topic_2' : $questionWritePopup.find('[data-key=tag_Topic_2]').val2(),
						'tag_Topic_3' : $questionWritePopup.find('[data-key=tag_Topic_3]').val2(),
						'tag_Topic_4' : $questionWritePopup.find('[data-key=tag_Topic_4]').val2(),
						'tag_Topic_5' : $questionWritePopup.find('[data-key=tag_Topic_5]').val2(),
						'tag_Topic_6' : $questionWritePopup.find('[data-key=tag_Topic_6]').val2(),
						'tag_Topic_7' : $questionWritePopup.find('[data-key=tag_Topic_7]').val2(),
						'tag_Topic_8' : $questionWritePopup.find('[data-key=tag_Topic_8]').val2(),
						'tag_Topic_9' : $questionWritePopup.find('[data-key=tag_Topic_9]').val2(),
						'tag_Topic_10' : $questionWritePopup.find('[data-key=tag_Topic_10]').val2()
   				};
   				// ajax call 
        		var url = '/'+SITE_CD+'/data-support/question-submit/'+pageInfo.modelCode;
    	    	$.ajax({
    	    		type : 'POST',
    	    		url : url,
    	    		dataType : 'json',
    	    		data : param,
    	    		success : function(data) {
    	    			if( $.isFunction(callback) ) callback(data);
    	    		},
    	    		error : function(data) {
    	    			return false;
    	    		}
    	    	});
   			};
   			
   			// [Answer] 등록
   			var answerSubmit = function( callback ) {
   				// parameter setting
   				var param = {
					'questionid' : $answerWritePopup.find('[data-key=questionid]').val2(),
					'answertext' : $answerWritePopup.find('[data-key=answertext]').val2(),
					'usernickname' : $answerWritePopup.find('[data-key=usernickname]').val2(),
					'useremail' : $answerWritePopup.find('[data-key=useremail]').val2(),
					'useremailalerts' : $answerWritePopup.find('[data-key=useremailalerts]').is(':checked')
   				};
   				// ajax call
        		var url = '/'+SITE_CD+'/data-support/answer-submit/'+pageInfo.modelCode;
    	    	$.ajax({
    	    		type : 'POST',
    	    		url : url,
    	    		dataType : 'json',
    	    		data : param,
    	    		success : function(data) {
    	    			if( $.isFunction(callback) ) callback(data);
    	    		},
    	    		error : function(data) {
    	    			return false;
    	    		}
    	    	});
   			};
   			
   			// [Answer] 등록 팝업 초기화
			var answerWritePopupSetting = function($answer, e) {
				// Question Write & Subtmit 데이터 셋팅
				$answerWritePopup.find('[data-key=questionid]').val( $answer.attr('questionid') );
				$answerWritePopup.find('[data-key=questionsummary]').text( $answer.attr('questionsummary') );
				$answerWritePopup.find('[data-key=questionusernickname]').text( $answer.attr('author') );
				$answerWritePopup.find('[data-key=elapsedTime]').text( $answer.attr('date') );
				$answerSubmitPopup.find('[data-key=questionid]').val( $answer.attr('questionid') );
				$answerSubmitPopup.find('[data-key=questionsummary]').text( $answer.attr('questionsummary') );
				$answerSubmitPopup.find('[data-key=questionusernickname]').text( $answer.attr('author') );
				$answerSubmitPopup.find('[data-key=elapsedTime]').text( $answer.attr('date') );
				// WriteForm 데이터 초기화
				$answerWritePopup.find('[data-key=useremailalerts]').attr('checked',true);
				$answerWritePopup.find('[data-key=answertext]').val('');
				$answerWritePopup.find('[data-key=usernickname]').val('');
				$answerWritePopup.find('[data-key=userlocation]').val('');
				$answerWritePopup.find('[data-key=useremail]').val('');
				$answerWritePopup.find('[data-key=answerTextError]').hide();
				$answerWritePopup.find('[data-key=userNicknameError]').hide();
				$answerWritePopup.find('[data-key=userEmailError]').hide();
				showOpenLayer(e, 'answerQuestion1');
			};
   			
   			// [Answer] 답변이 등록되지 않은 Question 목록 조회 및 리스트 생성
   			var getWithoutAnswerList = function( searchParam, initFlag ){
        		var listContainer = $answerSuccessPopup.find('.ysubmitList');
        		var listTemplate = $('#answerSubmitListTemplate .searchRow');
        		if( initFlag ) listContainer.empty(); // list 초기화
        		// ajax call
   				var url = '/'+SITE_CD+'/data-support/question-list/'+pageInfo.modelCode;
    	    	$.ajax({
    	    		type : 'POST',
    	    		url : url,
    	    		dataType : 'json',
    	    		data : searchParam,
    	    		success : function(data) {
    	    			var askAnswers = data.askAnswers;
    	    			var askAnswerList = askAnswers.collection.askAnswerList;
    	    			$.each(askAnswerList, function(idx,data) {
    	    				var ask = data.ask;
    	    				var $row = listTemplate.clone();
    	    				$row.find('[data-key=questionSummary]').text(ask.questionSummary);
    	    				$row.find('[data-key=questionDetails]').text(ask.questionDetails);
    	    				$row.find('[data-key=author]').text(ask.author);
    	    				if(0==idx%2) $row.addClass('odd');
    	    				// answer this question button setting
    	    				var $answerBtn = $row.find('.answer');
    	    				$answerBtn.attr('questionid',ask.questionId);
    	    				$answerBtn.attr('questionsummary',ask.questionSummary);
    	    				$answerBtn.attr('author',ask.author);
    	    				$answerBtn.attr('date',ask.date);
    	    				// append
    	    				listContainer.append($row);
    	    			});
    	    			if( offset+limit >= Number(askAnswers.collection.totalCount) ) {
    	    				// VIEW MORE 버튼 삭제
    	    				$answerSuccessPopup.find('.show-more-button').remove();
    	    			}
    	    		},
    	    		error : function(data) {
    	    			return false;
    	    		}
    	    	});
   			};
   			
			var showQuestionAddForm = function(e){
				// WriteForm 데이터 초기화
				$questionWritePopup.find('[data-key=useremailalerts]').attr('checked',true);
				$questionWritePopup.find('[data-key=questionsummary]').val('');
				$questionWritePopup.find('[data-key=questiondetails]').val('');
				$questionWritePopup.find('[data-key=usernickname]').val('');
				$questionWritePopup.find('[data-key=userlocation]').val('');
				$questionWritePopup.find('[data-key=useremail]').val('');
				$questionWritePopup.find('.topicContainer').each(function(){
					var $this = $(this);
					$this.find('input[type=text]').val('');
					$this.find('input[type=checkbox]').attr('checked',false);
					if( 1 < Number($this.attr('count')) ) {
						$this.hide();
					}
				});
				$questionWritePopup.find('[data-key=questionSummaryError]').hide();
				$questionWritePopup.find('[data-key=userNicknameError]').hide();
				$questionWritePopup.find('[data-key=userEmailError]').hide();
				showOpenLayer(e, 'newQuestion1');
			};
        	
        	/**
        	 * Question Form 이벤트
        	 */
        	// [question write popup] show
			$('.ask-the-community').on('click', 'button.add', function(e){
				showQuestionAddForm(e);
			});
			// TODO a 태그는 사라질 예정
			$('.ask-the-community').on('click', 'a.add', function(e){
				showQuestionAddForm(e);
			});

			
			// [question write popup] category 추가
			$questionWritePopup.on('keyup', 'input.addCategory', function(e){
				var $this = $(this);
				var count = Number($this.parent().parent().attr('count'));
				if( '' !== $this.val() ) {
					$questionWritePopup.find('#' + $this.attr('data-key') + '_checkbox').attr('checked',true);
					if( 'none' === $questionWritePopup.find('.topicContainer[count='+(count+1)+']').css('display') ) {
						$questionWritePopup.find('.topicContainer[count='+(count+1)+']').show();
					}
				} else {
					$questionWritePopup.find('#' + $this.attr('data-key') + '_checkbox').attr('checked',false);
				}
			});
			
			// [question write popup] preview 버튼 클릭
			$questionWritePopup.on('click', 'button.preview', function(e){
				if( !previewQuestion() ) return;
        		// Omniture 적용
        		sendClickCode('reviews','ask a new question:write');
				showOpenLayer(e, 'newQuestion2');
			});
			
			// [question submit popup] edit 버튼 클릭
			$questionSubmitPopup.on('click', 'button.edit', function(e){
				showOpenLayer(e, 'newQuestion1');
			});
			
			// [question submit popup] submit 버튼 클릭
			$questionSubmitPopup.on('click', 'button.submit', function(e){
				questionSubmit(function( data ){
					if( data.success ) {
						showOpenLayer(e, 'newQuestion3');
		        		// Omniture 적용
		        		sendClickCode('support_submit','ask a new question:submit');
					}
				});
			});
			
			// 모든 Question 등록 팝업 cancel
			$('.new-question').on('click', 'button.cancel', function(e){
				e.preventDefault();
				$(this).parents('.new-question').removeClass('active');
			});
			
			
        	/**
        	 * Answer Form 이벤트
        	 */
			// [answer write popup] show
			$commentList.on('click', '.answer', function(e){
				answerWritePopupSetting($(this), e);
			});
			
			// [answer write popup] preview 버튼 클릭
			$answerWritePopup.on('click', 'button.preview', function(e){
				if( !previewAnswer() ) return;
				showOpenLayer(e, 'answerQuestion2');
			});

			// [answer submit popup] edit 버튼 클릭
			$('.answer-question').on('click', 'button.edit', function(e){
				showOpenLayer(e, 'answerQuestion1');
			});
			
			// [answer submit popup] submit 버튼 클릭
			$('.answer-question').on('click', 'button.submit', function(e){
				answerSubmit(function( data ){
					if( data.success ) {
						showOpenLayer(e, 'answerQuestion3');
		        		// Omniture 적용
		        		sendClickCode('support_submit','answer this questions:submit|' + $answerWritePopup.find('[data-key=questionid]').val() );
						getWithoutAnswerList({'offset' : offset,'limit' : limit}, true);
					}
				});
			});
			
			// 모든 Answer 등록 팝업 cancel
			$('.answer-question').on('click', 'button.cancel', function(e){
				e.preventDefault();
				$(this).parents('.answer-question').removeClass('active');
			});

			// Question & Answer 팝업 내부 terms & condition POPUP
			$('.new-question').on('click', '.goTermsCondition', function(){
        		// Omniture 적용
				sendClickCode('reviews','ask a question:terms and conditions');
				window.open('http://answers.'+SITE_CD+'.samsung.com/answers/'+bvDisplayCd+'/content/termsandconditions.htm', 'termsConditionWindow','width=784px,height=616px');
			});
			$('.answer-question').on('click', '.goTermsCondition', function(){
        		// Omniture 적용
        		sendClickCode('reviews','answer this question:terms conditions');
				window.open('http://answers.'+SITE_CD+'.samsung.com/answers/'+bvDisplayCd+'/content/termsandconditions.htm', 'termsConditionWindow','width=784px,height=616px');
			});
			
			// Question & Answer 팝업 내부 guide lines POPUP
			$('.new-question').on('click', '.goGuidelines', function(){
        		// Omniture 적용
				sendClickCode('reviews','ask a question:policies and guideline');
				window.open('http://answers.'+SITE_CD+'.samsung.com/answers/'+bvDisplayCd+'/content/guidelines.htm', 'guideLinesWindow','width=784px,height=616px');
			});
			$('.answer-question').on('click', '.goGuidelines', function(){
        		// Omniture 적용
        		sendClickCode('reviews','answer this question:policies and guideline');
				window.open('http://answers.'+SITE_CD+'.samsung.com/answers/'+bvDisplayCd+'/content/guidelines.htm', 'guideLinesWindow','width=784px,height=616px');
			});
			
		
            // Answer Success 팝업 내부 WithoutAnswerList toggle 클릭
			// main.js 에서 분리 (main.js에서 delegate 로 선언시 제거 해야 함)
            $answerSuccessPopup.on('click', '.toggle', function (e) {
                var $toggler = $(this),
                args = {
                    content: $toggler.data('content'),
                    afterText: $toggler.data('after-text'),
                    currText: $toggler.data('text'),
                    autoScroll: $toggler.data('autoscroll')
                },
                toggleView = new ss.Toggle($toggler, args);
                toggleView.action();
            });
			
			// Answer Success 팝업 내부 WithoutAnswerList 내 VIEW MORE 버튼 이벤트
			$answerSuccessPopup.on('click', '.show-more-button', function(e){
				offset = offset + (limit);
				getWithoutAnswerList({'offset' : offset,'limit' : limit}, false);
			});
			
			// Answer Success 팝업 내부 WithoutAnswerList 내 Answer This Question
			$answerSuccessPopup.find('.ysubmitList').on('click', '.answer', function(e){
				answerWritePopupSetting($(this), e);
			});
			
			
			/**
			 * Comment Content 이벤트
			 */
			var $writerDetail = $('.writer-detail'),
			$feedDetail = $('.feed-detail'),
			ua = window.navigator.userAgent.toLowerCase(),
			ey;
			
			// helpfulness feedback submit
			var helpfulnessFeedbackSubmit = function($btn, mode) {
				var param = {
						authorid : $btn.attr('authorid'),
						contenttype : $btn.attr('contenttype'),
						contentid : $btn.attr('contentid'),
						feedbacktype : 'helpfulness',
						vote : ( $btn.hasClass('activity') ? 'undo' : mode),
				};
				// 쿠키 조회
				var cookieVal = $.cookies.get(param.contentid);
				if( cookieVal && mode == cookieVal ) {
					$btn.addClass('activity');
					param.vote = 'undo';
				} else if( cookieVal && mode !== cookieVal ) {
					return;
				}
				feedbackSubmit( param, function(data){
					if( data.success ) {
						if( $btn.hasClass('activity') ) {
							// remove
							$feedDetail.find('.cld_etc').children().hide();
							$feedDetail.find('.cld_etc .feed-cancel').show();
							$btn.removeClass('activity');
							// 쿠키 삭제
							$.cookies.del(param.contentid);
						} else {
							// submit
							$feedDetail.find('.cld_etc').children().hide();
							$feedDetail.find('.cld_etc .feed-'+param.contenttype).show();
							$btn.addClass('activity');
							// 쿠키 추가
							$.cookies.set(param.contentid, mode);
						}
						if(ua.indexOf('chrome') != -1){
							ey = document.body.scrollTop+ 80;
						} else {
							ey = document.documentElement.scrollTop+ 80;
						}
						$feedDetail.addClass('active');
						$feedDetail.css('top', ey +'px');
					}
				});
			};
			
   			// [feedback] 등록
   			var feedbackSubmit = function( param, callback ){
   				var defaultParam = {
					authorid : '',
					contenttype : '',
					contentid : '',
					feedbacktype : ''	
   				};
   				defaultParam = $.extend( defaultParam, param );
   				// ajax call
   				var url = '/'+SITE_CD+'/data-support/feedback-submit/'+pageInfo.modelCode;
    	    	$.ajax({
    	    		type : 'POST',
    	    		url : url,
    	    		dataType : 'json',
    	    		data : defaultParam,
    	    		success : function(data) {
    	    			if( $.isFunction(callback) ) callback(data);
    	    		},
    	    		error : function(data) {
    	    			return false;
    	    		}
    	    	});
   			};
   			
   			// User Profile 조회
   			var getUserProfile = function( id, callback ) {
   				// ajax call
   				var url = '/'+SITE_CD+'/data-support/authors';
    	    	$.ajax({
    	    		type : 'POST',
    	    		url : url,
    	    		dataType : 'json',
    	    		data : {userId : id},
    	    		success : function(data) {
    	    			if( $.isFunction(callback) ) callback(data);
    	    		},
    	    		error : function(data) {
    	    			return false;
    	    		}
    	    	});
   			};
   			
			// [Ask & Answer] User Nickname 클릭
   			$commentList.on('click', 'a.writer', function(e){
				var userId = $(this).attr('authorId');
				if( userId && '' !== userId ) {
					getUserProfile( userId, function( data ){
						var profile = data.profile;
						if( profile ) {
							$writerDetail.find('[data-key]').each(function(){
								$(this).text( profile[$(this).attr('data-key')] ? profile[$(this).attr('data-key')] : '' );
							});
							var $seeAll = $writerDetail.find('[data-type=userNickname]');
							$seeAll.find('.name').text( profile.userNickname );
							$seeAll.on('click', function(){
								window.open(profile.seeAllUrl, 'userProfileWindow','width=800px,height=800px');
							});
							if(ua.indexOf('chrome') != -1){
								ey = document.body.scrollTop+ $(window).height()/2;
							}else{	
								ey = document.documentElement.scrollTop+ $(window).height()/2;
							}
							$writerDetail.addClass('active');
							$writerDetail.css('top', ey-($writerDetail.outerHeight()/2)  +'px');
						}
					});
				}
			});
			
			// [Ask & Answer] feedback report 버튼 클릭
   			$commentList.on('click', '.report-button', function(){
				// 쿠키 조회
				var cookieVal = $.cookies.get( $(this).prev().attr('contentid') );
				if( !cookieVal || 'inappropriate' !== cookieVal ) {
					// report show
					$(this).parent().next('.desbox_y').find('[data-key=reasontext]').val('');
					$(this).parent().next('.desbox_y').show();
				}
			});
			
			// [Ask & Answer] feedback report submit 버튼 클릭
   			$commentList.on('click', '.submit-button', function(){
				var $this = $(this);
				var param = {
						authorid : $this.attr('authorid'),
						contenttype : $this.attr('contenttype'),
						contentid : $this.attr('contentid'),
						feedbacktype : 'inappropriate',
						reasontext : $this.parent().parent().find('[data-key=reasontext]').val()
				};
				feedbackSubmit( param, function(data){
					if( data.success ) {
						if(ua.indexOf('chrome') != -1){
							ey = document.body.scrollTop+ 80;
						} else {
							ey = document.documentElement.scrollTop+ 80;
						}
						$feedDetail.addClass('active');
						$feedDetail.css('top', ey +'px');
						$feedDetail.find('.cld_etc').children().hide();
						$feedDetail.find('.cld_etc .feed-'+param.contenttype).show();
						// 레포트 마크업 제거
						$this.parent().parent().remove();
						// 쿠키 추가
						$.cookies.set(param.contentid, param.feedbacktype);
					}
				});
        		// Omniture 적용
        		sendClickCode('support_submit','ask comm:issue submit|' + $(this).attr('contentid'));
			});

			// [Ask & Answer] feedback report cancel 버튼 클릭
   			$commentList.on('click', '.cancel-button', function(){
				$(this).parents('.desbox_y').hide();
			});

			// [Ask & Answer] feedback Yes 버튼 클릭
   			$commentList.on('click', '.yes', function(e){
				helpfulnessFeedbackSubmit( $(this), 'positive' );
        		// Omniture 적용
        		sendClickCode('support_submit','ask comm:helpful:yes|' + $(this).attr('contentid'));
			});
			
			// [Ask & Answer] feedback No 버튼 클릭
   			$commentList.on('click', '.no', function(e){
				helpfulnessFeedbackSubmit( $(this), 'negative' );
        		// Omniture 적용
        		sendClickCode('support_submit','ask comm:helpful:no|' + $(this).attr('contentid'));
			});

        }
        
        function showOpenLayer(e, layerID) {
            var layerEl = $('#' + layerID),
				ua = window.navigator.userAgent.toLowerCase(),
				ey;
            
            e.preventDefault();

            if ($('.new-question').hasClass('active')) $('.new-question').removeClass('active');
            if ($('.answer-question').hasClass('active')) $('.answer-question').removeClass('active');

            if(ua.indexOf('chrome') != -1 || ss.metrics.isIOS() == true || ss.metrics.isIOS7() == true || ss.metrics.isMobile() == true){
                ey = document.body.scrollTop + $(window).height() / 2;
            } else {
                ey = document.documentElement.scrollTop + $(window).height() / 2;
            }

            layerEl.addClass('active');
            layerEl.scrollTop(0);
            layerEl.css('top', ey - (layerEl.outerHeight() / 2) + 'px');
        }

        /**
        @function mobileCheck
        Verifies for mobile false positives
        **/
        function mobileCheck(ev) {
            var mobile = new RegExp('(^mobile)');
            if (!mobile.test(ss.metrics.device)){
                ev.preventDefault();
                return false;
            }
        }
        init();
    };

} (jQuery));

$(function() {
    new ss.Support({ 'page': 'pdp' });
    new ss.SupportPDP();
});