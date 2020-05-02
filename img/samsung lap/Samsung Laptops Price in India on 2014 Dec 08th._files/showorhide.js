$(document).ready(function () {
   
var pagewidth = $('#listingcontent').width();

      //alert(pagewidth);
    if(pagewidth < 320 ){

        var showChar = 110; // How many characters are shown by default
        var ellipsestext = "...";
        var moretext = "Read more";
        var lesstext = "Show less";
         $('#latestcon').hide(); 
         $('#latesttop').hide();

        $('#listingcontent').each(function() {
            var content = $(this).html();
     
            if(content.length > showChar) {
     
                var c = content.substr(0, showChar);
                var h = content.substr(showChar, content.length - showChar);
     //alert(c);
                var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
     
                $(this).html(html);
            }
     
        });
    
        $(".morelink").click(function(){
            if($(this).hasClass("less")) {
                $(this).removeClass("less");
                $(this).html(moretext);
            } else {
                $(this).addClass("less");
                $(this).html(lesstext);
            }
            $(this).parent().prev().slideToggle( "slow" );
            $(this).prev().slideToggle( "slow" );
            return false;
        });
        
    }
   else if(pagewidth < 783 ){

     //   var showChar = 200; // How many characters are shown by default
     //   var ellipsestext = "...";
     //   var moretext = "Read more";
     //   var lesstext = "Show less";
     //    $('#latestcon').hide();
     //    $('#latesttop').hide();
     //
     //   $('#listingcontent').each(function() {
     //       var content = $(this).html();
     //
     //       if(content.length > showChar) {
     //
     //           var c = content.substr(0, showChar);
     //           var h = content.substr(showChar, content.length - showChar);
     ////alert(c);
     //           var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
     //
     //           $(this).html(html);
     //       }
     //
     //   });
    
        //$(".morelink").click(function(){
        //    if($(this).hasClass("less")) {
        //        $(this).removeClass("less");
        //        $(this).html(moretext);
        //    } else {
        //        $(this).addClass("less");
        //        $(this).html(lesstext);
        //    }
        //    $(this).parent().prev().slideToggle( "slow" );
        //    $(this).prev().slideToggle( "slow" );
        //    return false;
        //});
        
    }
    else{
          $temp = $('p').html().length;
         //alert($temp);
if($temp > 479)
{  
        var showChar = 479; // How many characters are shown by default
        var ellipsestext = "...";
        var moretext = "Read more";
        var lesstext = "Show less";
        

       $('#listingcontent').each(function() {
           var content = $(this).html();
     
           if(content.length > showChar) {
     
               var c = content.substr(0, showChar);
               var h = content.substr(showChar, content.length - showChar);
     //alert(c);
               var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
     
               $(this).html(html);
           }
     
       });
    
       $(".morelink").click(function(){
           if($(this).hasClass("less")) {
               $(this).removeClass("less");
               $(this).html(moretext);
           } else {
               $(this).addClass("less");
               $(this).html(lesstext);
           }
           $(this).parent().prev().slideToggle( "slow" );
           $(this).prev().slideToggle( "slow" );
           return false;
       });
} 
    }

    
    
}); 

    
 
 
