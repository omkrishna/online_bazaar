var bt_today = new Date();
bt_today.setMonth(bt_today.getMonth()+1);
if(bt_parameter("affid") != ""){
    document.cookie = "asosAffiliateX=affiliateId="+bt_parameter("affid")+"; domain="+location.hostname.replace(/[a-z]+./,".")+"; path=/; expires="+bt_today.toGMTString()+";";
}else if(location.href.toLowerCase().indexOf("affid=")>-1){
    document.cookie = "asosAffiliateX=affiliateId="+location.href.toLowerCase().split("affid=")[1].split("&")[0]+"; domain="+location.hostname.replace(/[a-z]+./,".")+"; path=/; expires="+bt_today.toGMTString()+";";
}
jQuery("#siteSelectorList li a").each(function(){
    jQuery(this).attr("href", (jQuery(this).attr("href").replace("setPref",(bt_cookie("asosAffiliateX").replace("iliateId","id")+"&setPref"))));
});