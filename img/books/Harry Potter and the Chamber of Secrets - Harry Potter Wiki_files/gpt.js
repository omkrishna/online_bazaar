(function(){var a=this;var b=function(e,f){var c=parseFloat(e);return isNaN(c)||1<c||0>c?f:c},d=function(e,f){var c=parseInt(e,10);return isNaN(c)?f:c},g=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,h=function(e,f){if(!e)return f;var c=e.match(g);return c?c[0]:f};var k=b("0.02",0),l=b("0.0",0);var m=b("0.005",0),n=b("0",0),p=b("0.001",0),q=d("1500",1500),r=b("0.01",0),s=b("1.0",0),t=b("0.5",0),u=b("",.001),v=d("",200),w=b("0.01",0),x=b("0.01",
0),y=/^true$/.test("")?!0:!1,z=b("0.05",0),A=b("0.01",0),B=b("0.1",0),C=b("0.01",0),D=b("1",0),E=b("",.001);var F=function(){return a.googletag||(a.googletag={})};var G={};G["#1#"]=h("","pagead2.googlesyndication.com");G["#2#"]=h("","pubads.g.doubleclick.net");G["#3#"]=h("","securepubads.g.doubleclick.net");G["#4#"]=h("","partner.googleadservices.com");G["#5#"]="http://pagead2.googlesyndication.com/pagead/show_ads.js";var H;
E:{var I=null,J=window,K=null;try{for(;null!=J&&J!==I;){K=J.location.protocol;if("https:"===K)break;else if("http:"===K||"file:"===K){H=!1;break E}I=J;J=J.parent}}catch(L){}H=!0}G["#6#"]=H;G["#7#"]=k;G["#10#"]=n;G["#11#"]=p;G["#12#"]=m;G["#13#"]=q;G["#16#"]=r;G["#17#"]=s;G["#18#"]=t;G["#20#"]=l;G["#23#"]=u;G["#24#"]=v;G["#25#"]=w;G["#27#"]=x;G["#28#"]=z;G["#29#"]=A;G["#31#"]=B;G["#33#"]=h("","pagead2.googlesyndication.com");G["#34#"]=D;G["#36#"]=y;G["#37#"]=C;
G["#38#"]=E;G["#39#"]="108809042";var M=F();"_vars_"in M||(M._vars_=G);var N=[],O=F();"cmd"in O||(O.cmd=N);var P=(F()._vars_["#6#"]?"https:":"http:")+"//partner.googleadservices.com/gpt/pubads_impl_53r.js",Q=document.currentScript,R="complete"!=document.readyState&&"loaded"!=document.readyState&&!(Q&&Q.async),S="gpt-impl-"+Math.random();if(R)try{document.write('<script id="'+S+'" src="'+P+'">\x3c/script>')}catch(T){}
if(!R||!document.getElementById(S)){var U=document.createElement("script");U.src=P;U.id=S;U.async=!0;var V=document.getElementsByTagName("script");if(!Q)for(var W=0;W<V.length;W++){var X=V[W];if(X.src&&-1<X.src.indexOf("www.googletagservices.com/tag/js/gpt"))if(Q){Q=null;break}else Q=V[W]}Q&&Q.onload&&(U.onload=Q.onload,Q.onload=void 0);V[0].parentElement.insertBefore(U,V[0])};})()
