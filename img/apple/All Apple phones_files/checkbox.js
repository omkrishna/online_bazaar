//global variables that can be used by ALL the function son this page.
var inputs;
var imgFalse = 'chk-off.png';
var imgTrue = 'chk-on.png';

// http://www.thefutureoftheweb.com/blog/adddomloadevent
addDOMLoadEvent=(function(){var e=[],t,s,n,i,o,d=document,w=window,r='readyState',c='onreadystatechange',x=function(){n=1;clearInterval(t);while(i=e.shift())i();if(s)s[c]=''};return function(f){if(n)return f();if(!e[0]){d.addEventListener&&d.addEventListener("DOMContentLoaded",x,false);/*@cc_on@*//*@if(@_win32)d.write("<script id=__ie_onload defer src=//0><\/scr"+"ipt>");s=d.getElementById("__ie_onload");s[c]=function(){s[r]=="complete"&&x()};/*@end@*/if(/WebKit/i.test(navigator.userAgent))t=setInterval(function(){/loaded|complete/.test(d[r])&&x()},10);o=w.onload;w.onload=function(){x();o&&o()}}e.push(f)}})();


//this function runs when the page is loaded, put all your other onload stuff in here too.
function init() {
	replaceChecks();
}

function replaceChecks() {
	
	//get all the input fields on the page
	inputs = document.getElementsByTagName('input');

	//cycle trough the input fields
	for(var i=0; i < inputs.length; i++) {

		//check if the input is a checkbox
		if(inputs[i].getAttribute('type') == 'checkbox') {
			
			//create a new image
			var img = document.createElement('img');
			
			//check if the checkbox is checked
			if(inputs[i].checked) {
				img.src = imgTrue;
			} else {
				img.src = imgFalse;
			}

			//set image ID and onclick action
			img.id = 'checkImage'+i;
			//set image 
			img.onclick = new Function('checkChange('+i+')');
			//place image in front of the checkbox
			inputs[i].parentNode.insertBefore(img, inputs[i]);
			
			//hide the checkbox
			inputs[i].style.display='none';
		}
	}
}

//change the checkbox status and the replacement image
function checkChange(i) {

	if(inputs[i].checked) {
		inputs[i].checked = '';
		document.getElementById('checkImage'+i).src=imgFalse;
	} else {
		inputs[i].checked = 'checked';
		document.getElementById('checkImage'+i).src=imgTrue;
	}
}

// window.onload = init;
addDOMLoadEvent(init);