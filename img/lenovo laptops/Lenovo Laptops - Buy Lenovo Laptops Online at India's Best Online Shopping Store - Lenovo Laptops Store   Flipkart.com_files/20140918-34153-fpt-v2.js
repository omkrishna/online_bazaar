var fkAdWrap=fkAdWrap||{};fkAdWrap.config=fkAdWrap.config||{};fkAdWrap.response={};fkAdWrap.init=function(){var b=0,a=fkAdWrap.config.length;if(0<a)for(b;b<a;b++)fkAdWrap.createAd(fkAdWrap.config[b]);fkAdWrap.config=[]};
fkAdWrap.wrapper=function(b){var a=b.deliveryEndPoint,f=Math.floor(99999999999*Math.random()),a=a+"?zoneid="+b.zoneId,c=b.targetMap,a=a+"&delivery_version=1",e;for(e in c)a+="&"+c[e].key+"="+c[e].value;a+="&cb="+f;document.charset?a+="&charset="+document.charset:document.characterSet&&(a+="&charset="+document.characterSet);a+="&loc="+escape(window.location);document.referrer&&(a+="&referer="+escape(document.referrer));document.context&&(a+="&context="+escape(document.context));document.mmm_fo&&(a+=
"&mmm_fo=1");var d;if(window.XMLHttpRequest)try{d=new XMLHttpRequest}catch(g){}else try{d=new ActiveXObject("MSXML2.XMLHTTP.6.0")}catch(h){}d.open("GET",a);d.onreadystatechange=function(){if((4==d.readyState||200==d.status)&&""!==d.responseText){var a=document.createElement("div");a.innerHTML=d.responseText;var a=a.getElementsByTagName("script"),c=document.getElementsByTagName("script"),c=c[c.length-1];if(0<a.length)for(var e=0;e<=a.length;e++)a.item(0).type="text/javascript+fk-openx-ads",c.parentNode.insertBefore(a.item(0),
c),fkAdWrap.executeAd();document.getElementById("fk_ad_slot_"+b.slotNumber).innerHTML=d.responseText;fireEvent(b.slotNumber)}};d.send()};var fireEvent=function(b){var a=document.createEvent("Event");a.initEvent("adResponseComplete",!0,!0);a.param=b;document.dispatchEvent(a)};
fkAdWrap.runAd=function(){var b=function(a,b){var c=a.text||a.textContent||a.innerHTML,e=document.head||document.getElementsByTagName("head")[0]||document.documentElement,d=document.createElement("script");""!==b?d.src=b:d.text=c;e.insertBefore(d,e.firstChild);e.removeChild(d);a.type+="-executed"};return{init:function(){for(var a=document.querySelectorAll("script[type='text/javascript+fk-openx-ads']"),f=a.length,c=0;c<f;c++)a[c].hasAttribute("src")?b(a[c],a[c].getAttribute("src")):b(a[c],"")}}};
fkAdWrap.createAd=function(b){return new fkAdWrap.wrapper(b)};fkAdWrap.executeAd=function(){return(new fkAdWrap.runAd).init()};fkAdWrap.init();