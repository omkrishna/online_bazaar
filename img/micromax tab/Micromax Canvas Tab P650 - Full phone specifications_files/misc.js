$(function() {
  // show/hide dropdown
  $('.type-of-search > a').click(function () {
    $(this).next('ul').toggle();
    $(this).toggleClass("on");

    return false;
  });

  $('.type-of-search > a').blur(function () {
    setTimeout(function () {
      $(".type-of-search ul").hide();
      $('.type-of-search > a').removeClass("on");
    }, 200);

    return false;
  });

  // change form action when link is clicked
  $('.type-of-search li>a').click(function () {
    $(".type-of-search li").removeClass("on");
    $(this).parent().addClass("on");

    var value = $(this).attr("href");

    if (value.indexOf("#") == 0)
      value = value.replace("#", "");
    else {
      return true; // if it doesn't start with #, it's a regular link, e.g. Advanced
    }

    $(this).parents("form").attr("action", value);

    // disable autocomplete if something other than Phones is selected
    if ($(this).text() !== "Phones")
      AUTOCOMPLETE_DISABLED = true;
    else
      AUTOCOMPLETE_DISABLED = false;

    var tst = $("#topsearch-text");
    if (tst.val() == "Quick phone search")
      tst.val("");

    $(this).parent().parent().hide();
    $('.type-of-search > a').removeClass("on");

    $("#topsearch-text").focus();

    return false;
  });
	
	
  var loginLink = $("a#login-active"); 
  loginLink.click(function(event){
	  this.focus();
	  event.preventDefault();
      $('span.tooltip').toggle();
  });
  loginLink.blur(function() {
	timerlogin = setTimeout(function() {
		$('span.tooltip').hide();
	}, 100);
  });


	
});




