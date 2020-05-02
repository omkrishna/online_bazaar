
/*!************************************************
 * Menu(GNB/FOOTER_CONSUMER) 태깅
 **************************************************/
var menuTagging = (function(){
	// GNB navi 태깅
	$("a[href!='']:not([href^='#']):not([href^='javascript:'])", "ul.navigation").click(function() {
		
		// 태그 내에 태깅 함수를 호출 할 경우 return(중복 태깅 방지)
		if($(this).attr("onclick") && $(this).attr("onclick").indexOf("sendClickCode") > -1)
			return;
		
		// omniture - gnb 메뉴 클릭
		var existParent = true;
		var parent = $(this);
		var omniText = parent.attr("data-eng-title");
		var maxDepth = 4;		// 메뉴 최대 Depth
		var currentDepth = 1;
		var adminGen = parent.parent().hasClass("admin-gen");	//WCMS에서 제네레이트 된 메뉴인지 체크
		var menuTitle;
		
		if (!omniText || omniText == "")
		{
			// 예전 태깅 로직을 유지하기 위함
			omniText = parent.text(); 
			adminGen = true;
		}
		
		while(existParent)
		{
			parent = parent.closest("ul").parent();
			
			// sub group을 사용하는 경우 해당 sub group 들은 태깅에서 제외
			var isExceptionSub = parent.hasClass("exception");
			if (isExceptionSub)
			{
				omniText = omniText.substr( omniText.indexOf(":") + 1 );
			}
			
			if (parent && parent != "" && currentDepth < maxDepth &&
					parent.attr("class") != "navigation" && parent.find(".navigation").length < 1)
			{
				menuTitle = parent.children("a").attr("data-eng-title");
				
				if (!menuTitle || menuTitle == "")
				{
					// 예전 태깅 로직을 유지하기 위함
					menuTitle = parent.children("a").text();
					adminGen = true;
				}
				
				if (!adminGen)
					adminGen = parent.hasClass("admin-gen");
				
				omniText = menuTitle + ":" + omniText;
				
				currentDepth++;
			}
			else
			{
				existParent = false;
			}
				
			
			
		}
		
		// WCMS에서 제네레이트 된 메뉴가 아니면 태깅 안함
		if (adminGen)
		{
			omniText = omniText ? omniText.toLowerCase() : "";
			sendClickCode('gnb', omniText);
		}
	});
	
	// Footer consumer navi 태깅
	$("a[href!='']:not([href^='#']):not([href^='javascript:'])", ".footer-nav-wrap>.col-wrap").click(function() {
		
		// type text - sub category가 없는 category 일 경우 이 type text가 groupText가 된다
		var typeText = $(this).attr("data-eng-title");
		typeText = !typeText || typeText == "" ? $(this).text() : typeText; 
		var groupText = $(this).parents("div.col").find("h3>a").attr("data-eng-title");
		
		if ($(this).parent().get(0).tagName.indexOf("LI") > -1)
			groupText = !groupText || groupText == "" ? $(this).parents("div.col").find("h2>a").text() + "_" : groupText + "_";
		else
			groupText = "";
		
		var omniText = groupText + typeText;
		omniText = omniText.toLowerCase();
		
		sendClickCode('footer', 'footer:' + omniText);
	});
})();

