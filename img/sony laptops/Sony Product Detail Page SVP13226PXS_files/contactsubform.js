var myCells=new Array();

/// get the type of XMLhttp object based on the browser verion
function GetXmlHttpObject()
{  
 var xmlHttp=null;
  try
    {
    // Firefox, Opera 8.0+, Safari
    xmlHttp=new XMLHttpRequest();
    }
  catch (e)
    {
    // Internet Explorer
    try
      {
      xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
      }
    catch (e)
      {
      try
      	{		
      	xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
      	}
      //if AJAX is not supported
      catch(e){
		  alert ("Your browser does not support AJAX!");      
		}  
      }
    }
  return xmlHttp;
}


function fillModels() {
         //alert("For Fill Models");
	//commented for the providing new drop down ofmodels.
	//var url = '/bbsc/jsp/getAllResellerModels.jsp';
	var url = '/bbsc/jsp/getAllContactUsFormModels.jsp';
	var xmlhttp = new GetXmlHttpObject();
	if(xmlhttp){
	xmlhttp.open("GET",url,false);
	xmlhttp.send(null);
	var str = xmlhttp.responseText;
       // alert(str);
      	myCells = str.split(":");
		
		
	}
}

//Changes by Rakesh For Dealer source for state filter

function findStates()
{
	//alert("working on now Inside Find for  All state.js");
	var url = '/bbsc/jsp/getAllStates.jsp';
	var xmlhttp = new GetXmlHttpObject(); 
	if(xmlhttp){
		xmlhttp.open("GET",url,false);
		xmlhttp.send(null);
	        var str = xmlhttp.responseText;               
		var myCells = str.trim().split(":");		
		var myselect=document.getElementById("states");		
		var str1 = "";
		for(var i=0;i<myCells.length;i++)
		{			
						
			str1 = str1 + '<option value=\"' + myCells[i] + '\">' + myCells[i]+ '</option>';
					
			
		}
            //alert('final stirng' + str1);
		document.write(str1);
		//return str1;

	}

}


function findStateForZip()
{
  //alert("Inside find State_js");
  var str=document.getElementById("zipCode").value; 
  var url = '/bbsc/jsp/getState.jsp?zipcode='+escape(str);
	var xmlhttp = new GetXmlHttpObject();
	if(xmlhttp){
	xmlhttp.open("GET",url,false);
	xmlhttp.send(null);
	var str1 = xmlhttp.responseText;
        str1=str1.trim();        
       if(str1=="")
       {
        alert("Invalid zipCode. \nPlease Enter a valid zipCode");
        document.getElementById("zipCode").value="";
       }
       else
       {
        var myselect=document.getElementById("states");              
        
        for (var index = 0; index < myselect.length; index++)
         {
                  var s= myselect.options[index].value.trim();                                
                
                  if(s.toString()==str1.toString())
                   {                     
        		     myselect[index].selected = true;
                       
        	        }
         } 
        Dom.get('statesData').innerHTML=str1;
          
        }
			
	}
}

//End Changes by Rakesh for dealer source for state filter

function fillContactUsFormModels() {
      var url = '/bbsc/jsp/getAllContactUsFormModels.jsp';
	  //var url = '/bbsc/jsp/getAllResellerModels.jsp';
      var xmlhttp = new GetXmlHttpObject();
      if(xmlhttp){
      xmlhttp.open("GET",url,false);
      xmlhttp.send(null);
      var str = xmlhttp.responseText;
      myCells = str.split(":");
            
            
      }
}


function loadContactHeader() {
	var url = "/bbsccms/ext/eblasts/formtest/formaddinfo.shtml";

	var xmlhttp = new GetXmlHttpObject();
	
	if(xmlhttp){
	xmlhttp.open("GET",url,false);
	xmlhttp.send(null);
	var str = xmlhttp.responseText;

		if(str !='EOF') {

			var product = document.getElementById("product");
			if(product){
				product.innerHTML = str;		
			}
		}
	}
}


function splCharCheckComp(str)
{
var iChars = "!@#$%^&*()+=[]\\\';/{}|\":<>?";
 for (var i = 0; i < str.length; i++) {
  if (iChars.indexOf(str.charAt(i)) != -1) { 
        return true;
  }
  }
}




function specialCharHnadle(str)
{
var iChars = "!@#$%^&*()+=[]\\\';,./{}|\":<>?";
 for (var i = 0; i < str.length; i++) {
  	if (iChars.indexOf(str.charAt(i)) != -1) { 
  	//alert ("Sorry special characters are not allowed!");
  	return true;
  	}
  }
}
function textCounter(field,cntfield,maxlimit) {
if (field.value.length > maxlimit) // if too long...trim it!
field.value = field.value.substring(0, maxlimit);
// otherwise, update 'characters left' counter
else
cntfield.value = maxlimit - field.value.length;
}
//Added by Narendra for validation change
function moveToNextField(currentField, nextField, len) {
var letters = document.contactdataForm.elements[currentField].value.length + 1;
	if(letters <=len) {
		document.contactdataForm.elements[currentField].focus();
	} else {
		document.contactdataForm.elements[nextField].focus();
	}
}
function isFaxEntered() {
	if(isEmpty(document.contactdataForm.XX_08_fax1.value)
		&& isEmpty(document.contactdataForm.XX_08_fax2.value)
		&& isEmpty(document.contactdataForm.XX_08_fax3.value)) {
		return false;
	} else {
		return true;
	}
}

function isFaxValid() {

var str1 = document.contactdataForm.XX_08_fax1.value;
var str2 = document.contactdataForm.XX_08_fax2.value;
var str3 = document.contactdataForm.XX_08_fax3.value;
var re3digit = /\d{3}/;
var re4digit = /\d{4}$/;

if(str1.search(re3digit) == -1) {
	alert("Please make sure your fax number is in the correct format in numerics 'xxx-xxx-xxxx'");
	//document.contactdataForm.XX_08_fax1.focus();
	document.contactdataForm.XX_08_fax1.value="";
	document.contactdataForm.XX_08_fax2.value="";
	document.contactdataForm.XX_08_fax3.value="";
	return false;
}

if(str2.search(re3digit) == -1) {
	alert("Please make sure your fax number is in the correct format in numerics 'xxx-xxx-xxxx'");
	document.contactdataForm.XX_08_fax1.value="";
	document.contactdataForm.XX_08_fax2.value="";
	document.contactdataForm.XX_08_fax3.value="";
	return false;
}

if(str3.search(re4digit) == -1) {
	alert("Please make sure your fax number is in the correct format in numerics 'xxx-xxx-xxxx'");
	//document.contactdataForm.XX_08_fax3.focus();
	document.contactdataForm.XX_08_fax1.value="";
	document.contactdataForm.XX_08_fax2.value="";
	document.contactdataForm.XX_08_fax3.value="";
	return false;
}

return true;

} //end of isFaxValid

function isPhoneEntered() {

	if(!isEmpty(document.contactdataForm.XX_08_phone1.value)
		|| !isEmpty(document.contactdataForm.XX_08_phone2.value)
		|| !isEmpty(document.contactdataForm.XX_08_phone3.value))
	{
	return true;
	}
	else{
	return false;
	}
/*if(isEmpty(document.contactdataForm.XX_08_phone1.value)) {
	//document.contactdataForm.XX_08_phone1.focus();
	document.contactdataForm.XX_08_phone1.value="";
	//document.contactdataForm.XX_08_phone2.value="";
	//	document.contactdataForm.XX_08_phone3.value="";
	return false;
}

if(isEmpty(document.contactdataForm.XX_08_phone2.value)) {
	//document.contactdataForm.XX_08_phone2.focus();
	document.contactdataForm.XX_08_phone1.value="";
	//document.contactdataForm.XX_08_phone2.value="";
	//document.contactdataForm.XX_08_phone3.value="";
	return false;
}

if(isEmpty(document.contactdataForm.XX_08_phone3.value)) {
	//document.contactdataForm.XX_08_phone3.focus();
	document.contactdataForm.XX_08_phone1.value="";
	//document.contactdataForm.XX_08_phone2.value="";
	//document.contactdataForm.XX_08_phone3.value="";
	return false;
}
	return true;*/
}

function isPhoneValid() {

var str1 = document.contactdataForm.XX_08_phone1.value;
var str2 = document.contactdataForm.XX_08_phone2.value;
var str3 = document.contactdataForm.XX_08_phone3.value;
var re3digit = /\d{3}/;
var re4digit = /\d{4}$/;
//var re10digit= /^\d{3}-\d{3}-\d{4}$/;

if(str1.search(re3digit) == -1) {
	//alert("Please make sure your phone number is in the correct format in numerics 'xxx-xxx-xxxx'");
	//document.contactdataForm.XX_08_phone1.focus();
	document.contactdataForm.XX_08_phone1.value="";
	document.contactdataForm.XX_08_phone2.value="";
	document.contactdataForm.XX_08_phone3.value="";
	return false;
}

if(str2.search(re3digit) == -1) {
	//alert("Please make sure your phone number is in the correct format in numerics 'xxx-xxx-xxxx'");
	//document.contactdataForm.XX_08_phone2.focus();
	document.contactdataForm.XX_08_phone1.value="";
	document.contactdataForm.XX_08_phone2.value="";
	document.contactdataForm.XX_08_phone3.value="";
	return false;
}

if(str3.search(re4digit) == -1) {
	//alert("Please make sure your phone number is in the correct format in numerics 'xxx-xxx-xxxx'");
	//document.contactdataForm.XX_08_phone3.focus();
	document.contactdataForm.XX_08_phone1.value="";
	document.contactdataForm.XX_08_phone2.value="";
	document.contactdataForm.XX_08_phone3.value="";
	return false;
}

return true;

} //end of isPhoneValid


function isZipCodeEntered() {
	if(isEmpty(document.contactdataForm.XX_07_zip1.value)) {
		//document.contactdataForm.XX_07_zip1.focus();
		return false;
	}
}

function isZipCodeValid() {

var str1 = document.contactdataForm.XX_07_zip1.value;
var str2 = document.contactdataForm.XX_07_zip2.value;
var re5digit = /\d{5}/;
var re4digit = /\d{4}$/;

	if(str1.search(re5digit) == -1) {
		//alert("zipcode is in numerics. it is accepted either in 'xxxxx' or 'xxxxx-xxxx' format");
		//document.contactdataForm.XX_07_zip1.focus();
		document.contactdataForm.XX_07_zip1.value="";
		document.contactdataForm.XX_07_zip2.value="";
		return false;
	}

	if(!isEmpty(document.contactdataForm.XX_07_zip2.value)) {

		if(str2.search(re4digit) == -1) {
				//alert("zipcode is in numerics. it is accepted either in 'xxxxx' or 'xxxxx-xxxx' format");
				//document.contactdataForm.XX_07_zip2.focus();
				document.contactdataForm.XX_07_zip1.value="";
				document.contactdataForm.XX_07_zip2.value="";
				return false;
		}

	}

return true;

}
//End of changes by narendra
//start of sub form validation(narnedra - feb 07 2010)

function validateSubFormData()
{
  	var errmsg = "";
	var errFlag = false;
	if (isEmpty(document.contactdataForm.XX_01_firstName.value)) 
	{ 
		errmsg = "You Must Input First Name\n";
		errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_01_firstName.value))
			{
				//errmsg = "You Must Not Input Special Characters in First Name\n";
				errmsg += "Fields cannot contain Special Characters";
				errFlag = true;	
			}


	}
    if (isEmpty(document.contactdataForm.XX_02_lastName.value))
	{
		errmsg +="You Must Input Last Name\n";
		errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_02_lastName.value))
			{
				//errmsg += "You Must Not Input Special Characters in Last Name\n";
				errmsg += "Fields cannot contain Special Characters";
				errFlag = true;	
			}


	} 
	if (isEmpty(document.contactdataForm.XX_20_title.value))
	{
		errmsg +="You Must Input Title\n";
		errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_20_title.value))
			{
				//errmsg += "You Must Not Input Special Characters in Title\n";
				errmsg += "Fields cannot contain Special Characters";
				errFlag = true;	
			}


	}
	
	if (isEmpty(document.contactdataForm.XX_10_email.value))
	{
		errmsg +="You Must Input Email \n";
		errFlag = true;	
	}else{
		if (EmailValid(document.contactdataForm.XX_10_email.value))
			{
				errmsg +="Please input a valid email address! \n";
				errFlag = true;	
			}


	}
	if (isEmpty(document.contactdataForm.XX_05_city.value))
	{
		 errmsg +="You Must Input City\n";
		 errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_05_city.value))
			{
				//errmsg += "You Must Not Input Special Characters in City Name\n";
				errmsg += "Fields cannot contain Special Characters";
				errFlag = true;	
			}


	}  
	if(document.contactdataForm.XX_06_state.value == ""){
		 errmsg +="You Must Select State\n";
		 errFlag = true;	  
	}
	
	if(isZipCodeEntered() == false) {
			errmsg += "You Must Input Zip\n";
			errFlag = true;	
	 }
	 else{
		if(isZipCodeValid() == false) {
			//alert("zipCode not valid");
			errmsg +="Zipcode is in Numerics. It is accepted either in 'xxxxx' or 'xxxxx-xxxx' format \n"
			errFlag = true;	
		 }
	}


	if(isPhoneEntered() == false) {
		errmsg +="You Must Input Phone \n";
		errFlag = true;	
	}else{

	if(isPhoneValid() == false) {
		errmsg +="Please make sure your phone number is the correct format in numerics 'xxx-xxx-xxxx' \n";
		errFlag = true;	
	}
	}
	
	if(!isEmpty(document.contactdataForm.XX_08_phone1.value)
		&& !isEmpty(document.contactdataForm.XX_08_phone2.value)
		&& !isEmpty(document.contactdataForm.XX_08_phone3.value))
	{
		document.contactdataForm.XX_08_phone.value =
		document.contactdataForm.XX_08_phone1.value + "-" +
		document.contactdataForm.XX_08_phone2.value + "-" +
		document.contactdataForm.XX_08_phone3.value;
	}
	else{
		document.contactdataForm.XX_08_phone.value ="";
	}
//	var newdiv = document.createElement('div');
	var newdiv = document.createElement('div');
	newdiv.innerHTML = "<input type='hidden' name='XX_16_company'><br><input type='hidden' name='XX_17_industry'><br><input type='hidden' name='model'><br><input type='hidden' name='XX_18_categoryofinterest'>";
	document.getElementById("contactdataForm").appendChild(newdiv);

	//document.contactdataForm.appendChild(XX_16_company);
//	var document.contactdataForm.XX_17_industry="";
//	var document.contactdataForm.model="";
//	var document.contactdataForm.XX_18_categoryofinterest="";

	if(!isEmpty(document.contactdataForm.XX_07_zip2.value)) {
			document.contactdataForm.XX_07_zip.value =
			document.contactdataForm.XX_07_zip1.value + "-" +
			document.contactdataForm.XX_07_zip2.value;
	} else {
			document.contactdataForm.XX_07_zip.value = document.contactdataForm.XX_07_zip1.value;
	}

	
	if (errFlag)
	{
		if(errmsg.length>1){
			//errmsg +="The following error(s)occured \n";
			//alert("The following error(s)occured \n"+errmsg);
		}
			if (isEmpty(document.contactdataForm.XX_01_firstName.value)|| specialCharHnadle(document.contactdataForm.XX_01_firstName.value))
			{
			document.contactdataForm.XX_01_firstName.focus();
			}else if (isEmpty(document.contactdataForm.XX_02_lastName.value)|| specialCharHnadle(document.contactdataForm.XX_02_lastName.value)){
				document.contactdataForm.XX_02_lastName.focus();
			}else if (isEmpty(document.contactdataForm.XX_20_title.value)|| specialCharHnadle(document.contactdataForm.XX_20_title.value)){
				document.contactdataForm.XX_20_title.focus();
			}else if (isEmpty(document.contactdataForm.XX_10_email.value)){
				document.contactdataForm.XX_10_email.focus();
			}else if (isEmpty(document.contactdataForm.XX_05_city.value)|| specialCharHnadle(document.contactdataForm.XX_05_city.value)){
				document.contactdataForm.XX_05_city.focus(); 
			}else if(document.contactdataForm.XX_06_state.value == ""){ 
			 	document.contactdataForm.XX_06_state.focus(); 
			}else if(document.contactdataForm.XX_07_zip.value == ""){ 
			 	document.contactdataForm.XX_07_zip1.focus(); 
			}else if(document.contactdataForm.XX_08_phone.value == ""){ 
			 	document.contactdataForm.XX_08_phone1.focus(); 
			}else {
				if (isEmpty(document.contactdataForm.model.value)&& document.contactdataForm.XX_18_categoryofinterest.value == ""){
					document.contactdataForm.XX_18_categoryofinterest.focus();  
				}
			}

			
	}
	//20080804
	else
	{	
//alert(document.contactdataForm.var_surv_answer1.value);
//alert(document.contactdataForm.var_surv_answer2.value);
//alert(document.contactdataForm.formID.value);
		//document.contactdataForm.submit();
	}
 return errmsg;
}

//end of validations

//End of changes by narendra
function validateContactFormData()
{
    //alert('test-contact validations');
	var errmsg = "";
	var errFlag = false;
	if (isEmpty(document.contactdataForm.XX_01_firstName.value)) 
	{ 
		errmsg = "You Must Input First Name\n";
		errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_01_firstName.value))
			{
				//errmsg = "You Must Not Input Special Characters in First Name\n";
				errmsg += "Fields cannot contain Special Characters";
				errFlag = true;	
			}


	}
    if (isEmpty(document.contactdataForm.XX_02_lastName.value))
	{
		errmsg +="You Must Input Last Name\n";
		errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_02_lastName.value))
			{
				//errmsg += "You Must Not Input Special Characters in Last Name\n";
				errmsg += "Fields cannot contain Special Characters";
				errFlag = true;	
			}


	} 
	//alert('test-2contact validations');
	
	 if (isEmpty(document.contactdataForm.XX_10_email.value))
	{
		errmsg +="You Must Input Email \n";
		errFlag = true;	
	}else{
		if (EmailValid(document.contactdataForm.XX_10_email.value))
			{
				errmsg +="Please input a valid email address! \n";
				errFlag = true;	
			}


	}
	//alert('test-3contact validations');
	if(document.contactdataForm.XX_17_industry.value == ""){
		errmsg +="You Must Select Industry\n";
		errFlag = true;	  
	}
	 if (isEmpty(document.contactdataForm.XX_05_city.value))
	{
		 errmsg +="You Must Input City\n";
		 errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_05_city.value))
			{
				//errmsg += "You Must Not Input Special Characters in City Name\n";
				errmsg += "Fields cannot contain Special Characters\n";
				errFlag = true;	
			}


	}  
	if(document.contactdataForm.XX_06_state.value == ""){
		 errmsg +="You Must Select State\n";
		 errFlag = true;	  
	}
	
	if (isEmpty(document.contactdataForm.XX_20_title.value))
	{
		//errmsg +="You Must Input Title\n";
		//errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_20_title.value))
			{
				//errmsg += "You Must Not Input Special Characters in Title\n";
				errmsg += "Fields cannot contain Special Characters\n";
				errFlag = true;	
			}


	}
		if (isEmpty(document.contactdataForm.XX_16_company.value))
	{
		//errmsg +="You Must Input Company\n";
		//errFlag = true;	
	}else{
		if (splCharCheckComp(document.contactdataForm.XX_16_company.value))
               {
                    // errmsg += "You Must Not Input Special Characters in Company Name\n";
					errmsg += "Fields cannot contain Special Characters\n";
                     errFlag = true;   
               }
	}
	
	
	if (isEmpty(document.contactdataForm.XX_03_street.value))
	{ 
		//errmsg += "You Must Input Address\n";
		//errFlag = true;	
	}
   	/*if (isEmpty(document.contactdataForm.XX_07_zip.value))
	{ 
		errmsg += "You Must Input Zip\n";
		errFlag = true;	
	}else{
		if (ValidZIP(document.contactdataForm.XX_07_zip.value))
		{ 
			errFlag = true;
	
		}
	}*/
	 if(isZipCodeEntered() == false) {
			errmsg += "You Must Input Zip\n";
			errFlag = true;	
	 }
	 else{
		if(isZipCodeValid() == false) {
			//alert("zipCode not valid");
			errmsg +="Zipcode is in Numerics. It is accepted either in 'xxxxx' or 'xxxxx-xxxx' format \n"
			errFlag = true;	
		 }
	}

    /*if (isEmpty(document.contactdataForm.XX_08_phone.value))
	{
		errmsg +="You Must Input Phone \n";
		errFlag = true;	
	}else{
		if (PhoneValid(document.contactdataForm.XX_08_phone.value))
			{
				errmsg +="Please make sure your phone number is the correct format in numerics 'xxx-xxx-xxxx' \n";
				errFlag = true;	
			}
	}*/
	if(isPhoneEntered() == false) {
		errmsg +="You Must Input Phone \n";
		errFlag = true;	
	}else{

	if(isPhoneValid() == false) {
		errmsg +="Please make sure your phone number is the correct format in numerics 'xxx-xxx-xxxx' \n";
		errFlag = true;	
	}
	}
	/*if (!isEmpty(document.contactdataForm.XX_09_fax.value))
	{ 
		//errmsg += "You Must Input Fax \n";
		//errFlag = true;	
	//}else{
		if (FaxValid(document.contactdataForm.XX_09_fax.value))
			{
				errFlag = true;	
				document.contactdataForm.XX_09_fax.focus();
			}
	}*/
	
	if(isFaxEntered() == true) { //fax entered, now validate

	if(isFaxValid() == false) {
		//alert("fax not valid");
		errmsg +="Please make sure your fax number is in the correct format in numerics 'xxx-xxx-xxxx'\n";
		errFlag = true;	
	}

	}
	//finally, submit the form!!
		if(!isEmpty(document.contactdataForm.XX_08_fax1.value)
		&& !isEmpty(document.contactdataForm.XX_08_fax2.value)
		&& !isEmpty(document.contactdataForm.XX_08_fax3.value)) {
		document.contactdataForm.XX_09_fax.value =
			document.contactdataForm.XX_08_fax1.value + "-" +
			document.contactdataForm.XX_08_fax2.value + "-" +
			document.contactdataForm.XX_08_fax3.value;
		} else {
			document.contactdataForm.XX_09_fax.value = "";
		}

		if(!isEmpty(document.contactdataForm.XX_08_phone1.value)
		&& !isEmpty(document.contactdataForm.XX_08_phone2.value)
		&& !isEmpty(document.contactdataForm.XX_08_phone3.value))
		{
		document.contactdataForm.XX_08_phone.value =
		document.contactdataForm.XX_08_phone1.value + "-" +
		document.contactdataForm.XX_08_phone2.value + "-" +
		document.contactdataForm.XX_08_phone3.value;
	}
		else{
		document.contactdataForm.XX_08_phone.value ="";
		}

		if(!isEmpty(document.contactdataForm.XX_07_zip2.value)) {
			document.contactdataForm.XX_07_zip.value =
			document.contactdataForm.XX_07_zip1.value + "-" +
			document.contactdataForm.XX_07_zip2.value;
		} else {
			document.contactdataForm.XX_07_zip.value = document.contactdataForm.XX_07_zip1.value;
		}

		//alert("fax 		:->:" + document.contactdataForm.XX_09_fax.value);
		//alert("phone	:->:" + document.contactdataForm.XX_08_phone.value);
		//alert("zip 		:->:" + document.contactdataForm.XX_07_zip.value);
	
	if (isEmpty(document.contactdataForm.model.value)
	&& document.contactdataForm.XX_18_categoryofinterest.value == "" ){
		errmsg +="Select at least one in Category of interest/Product of interest \n";
		errFlag = true;	  
	}

	if (!isEmpty(document.contactdataForm.XX_14_description.value))
	{
		if (splCharCheckComp(document.contactdataForm.XX_14_description.value))
        {
                     errmsg += "You Must Not Input Special Characters in Specific Need/Description/Feedback\n";
                     errFlag = true;   
        }
	}
	
	
   
	if (errFlag)
	{
		if(errmsg.length>1){
			//errmsg +="The following error(s)occured \n";
			//alert("The following error(s)occured \n"+errmsg);
		}
			if (isEmpty(document.contactdataForm.XX_01_firstName.value)|| specialCharHnadle(document.contactdataForm.XX_01_firstName.value))
			{
			document.contactdataForm.XX_01_firstName.focus();
			}else if (isEmpty(document.contactdataForm.XX_02_lastName.value)|| specialCharHnadle(document.contactdataForm.XX_02_lastName.value)){
				document.contactdataForm.XX_02_lastName.focus();
			}else if (isEmpty(document.contactdataForm.XX_10_email.value)){
				document.contactdataForm.XX_10_email.focus();
			}else if(document.contactdataForm.XX_17_industry.value == ""){ 
			 	document.contactdataForm.XX_17_industry.focus();
			}else if (isEmpty(document.contactdataForm.XX_05_city.value)|| specialCharHnadle(document.contactdataForm.XX_05_city.value)){
				document.contactdataForm.XX_05_city.focus(); 
			}else if(document.contactdataForm.XX_06_state.value == ""){ 
			 	document.contactdataForm.XX_06_state.focus(); 
			}else if(document.contactdataForm.XX_07_zip.value == ""){ 
			 	document.contactdataForm.XX_07_zip1.focus(); 
			}else if(document.contactdataForm.XX_08_phone.value == ""){ 
			 	document.contactdataForm.XX_08_phone1.focus(); 
			}else {
				if (isEmpty(document.contactdataForm.model.value)&& document.contactdataForm.XX_18_categoryofinterest.value == ""){
					document.contactdataForm.XX_18_categoryofinterest.focus();  
				}
			}

			
	}
	//20080804
	else
	{	
//alert(document.contactdataForm.var_surv_answer1.value);
//alert(document.contactdataForm.var_surv_answer2.value);
//alert(document.contactdataForm.formID.value);
		//document.contactdataForm.submit();
	}
 return errmsg;
}

// begin - added for VAIO forms project
function resetLimitedFormData()  
{
	document.contactdataForm.XX_01_firstName.value=""; 
	document.contactdataForm.XX_02_lastName.value="";			
	document.contactdataForm.XX_16_company.value="";			
	document.contactdataForm.XX_10_email.value="";
           
	parent.document.dataForm.reset();
}
function validateLimitedFieldFormData()
{
    
	var errmsg = "";
	var errFlag = false;
	if (isEmpty(document.contactdataForm.XX_01_firstName.value)) 
	{ 
		errmsg = "You Must Input First Name\n";
		errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_01_firstName.value))
			{
				//errmsg = "You Must Not Input Special Characters in First Name\n";
				errmsg += "Fields cannot contain Special Characters\n";
				errFlag = true;	
			}


	}
      if (isEmpty(document.contactdataForm.XX_02_lastName.value))
	{
		errmsg +="You Must Input Last Name\n";
		errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_02_lastName.value))
			{
				//errmsg += "You Must Not Input Special Characters in Last Name\n";
				errmsg += "Fields cannot contain Special Characters\n";
				errFlag = true;	
			}


	} 
	//alert('test-2contact validations');
	
	 if (isEmpty(document.contactdataForm.XX_10_email.value))
	{
		errmsg +="You Must Input Email \n";
		errFlag = true;	
	}else{
		if (EmailValid(document.contactdataForm.XX_10_email.value))
			{
				errmsg +="Please input a valid email address! \n";
				errFlag = true;	
			}
	}
	
	if (isEmpty(document.contactdataForm.XX_16_company.value))
	{
		errmsg +="You Must Input Company\n";
		errFlag = true;	
	}else{
		if (splCharCheckComp(document.contactdataForm.XX_16_company.value))
               {
                     //errmsg += "You Must Not Input Special Characters in Company Name\n";
					 errmsg += "Fields cannot contain Special Characters\n";
                     errFlag = true;   
               }
	}
	
	if (isEmpty(document.contactdataForm.XX_20_title.value))
	{
		//errmsg +="You Must Input Title\n";
		//errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_20_title.value))
			{
				//errmsg += "You Must Not Input Special Characters in Title\n";
				errmsg += "Fields cannot contain Special Characters\n";
				errFlag = true;	
			}


	}	
	
	 if (isEmpty(document.contactdataForm.XX_05_city.value))
	{
		 //errmsg +="You Must Input City\n";
		// errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_05_city.value))
			{
				//errmsg += "You Must Not Input Special Characters in City Name\n";
				errmsg += "Fields cannot contain Special Characters\n";
				errFlag = true;	
			}
	}  	
	
	if(isPhoneEntered() == false) {
		//errmsg +="You Must Input Phone \n";
		//errFlag = true;	
	}else{
	if(isPhoneValid() == false) {
		errmsg +="Please make sure your phone number is the correct format in numerics 'xxx-xxx-xxxx' \n";
		errFlag = true;	
	}
	}
	
	if(isZipCodeEntered() == false) {
			//errmsg += "You Must Input Zip\n";
			//errFlag = true;	
	 }
	 else{
		if(isZipCodeValid() == false) {
			//alert("zipCode not valid");
			errmsg +="Zipcode is in Numerics. It is accepted either in 'xxxxx' or 'xxxxx-xxxx' format \n"
			errFlag = true;	
		 }
	}
	
	if(isFaxEntered() == true) { //fax entered, now validate

	if(isFaxValid() == false) {
		//alert("fax not valid");
		errmsg +="Please make sure your fax number is in the correct format in numerics 'xxx-xxx-xxxx'\n";
		errFlag = true;	
	}
	}
   
     //finally, submit the form!!
		if(!isEmpty(document.contactdataForm.XX_08_fax1.value)
		&& !isEmpty(document.contactdataForm.XX_08_fax2.value)
		&& !isEmpty(document.contactdataForm.XX_08_fax3.value)) {
		document.contactdataForm.XX_09_fax.value =
			document.contactdataForm.XX_08_fax1.value + "-" +
			document.contactdataForm.XX_08_fax2.value + "-" +
			document.contactdataForm.XX_08_fax3.value;
		} else {
			document.contactdataForm.XX_09_fax.value = "";
		}

		if(!isEmpty(document.contactdataForm.XX_08_phone1.value)
		&& !isEmpty(document.contactdataForm.XX_08_phone2.value)
		&& !isEmpty(document.contactdataForm.XX_08_phone3.value))
		{
		document.contactdataForm.XX_08_phone.value =
		document.contactdataForm.XX_08_phone1.value + "-" +
		document.contactdataForm.XX_08_phone2.value + "-" +
		document.contactdataForm.XX_08_phone3.value;
		}
		else{
		document.contactdataForm.XX_08_phone.value ="";
		}

		if(!isEmpty(document.contactdataForm.XX_07_zip2.value)) {
			document.contactdataForm.XX_07_zip.value =
			document.contactdataForm.XX_07_zip1.value + "-" +
			document.contactdataForm.XX_07_zip2.value;
		} else {
			document.contactdataForm.XX_07_zip.value = document.contactdataForm.XX_07_zip1.value;
		}

		//alert("fax 		:->:" + document.contactdataForm.XX_09_fax.value);
		//alert("phone	:->:" + document.contactdataForm.XX_08_phone.value);
		//alert("zip 		:->:" + document.contactdataForm.XX_07_zip.value);
	
	if (!isEmpty(document.contactdataForm.XX_14_description.value))
	{
		if (splCharCheckComp(document.contactdataForm.XX_14_description.value))
        {
                     errmsg += "You Must Not Input Special Characters in Specific Need/Description/Feedback\n";
                     errFlag = true;   
        }
	}
	
	if (errFlag)
	{
		if(errmsg.length>1){
			//errmsg +="The following error(s)occured \n";
			//alert("The following error(s)occured \n"+errmsg);
		}
			if (isEmpty(document.contactdataForm.XX_01_firstName.value)|| specialCharHnadle(document.contactdataForm.XX_01_firstName.value))
			{
			document.contactdataForm.XX_01_firstName.focus();
			}else if (isEmpty(document.contactdataForm.XX_02_lastName.value)|| specialCharHnadle(document.contactdataForm.XX_02_lastName.value)){
				document.contactdataForm.XX_02_lastName.focus();
			}else if (isEmpty(document.contactdataForm.XX_10_email.value)){
				document.contactdataForm.XX_10_email.focus();
			}else if (isEmpty(document.contactdataForm.XX_16_company.value)|| specialCharHnadle(document.contactdataForm.XX_16_company.value)){
				document.contactdataForm.XX_16_company.focus(); 
			}

			
	}
	//20080804
	else
	{	
//alert(document.contactdataForm.var_surv_answer1.value);
//alert(document.contactdataForm.var_surv_answer2.value);
//alert(document.contactdataForm.formID.value);
		//document.contactdataForm.submit();
	}
 return errmsg;
}
// end - added for VAIO forms project

//Muni Changes for Reg form
function validateRegFormData()
{
	//alert("i m in validate contactus");
	var errmsg = "";
	var errFlag = false;
	if (isEmpty(document.contactdataForm.XX_01_firstName.value)) 
	{ 
		errmsg = "You Must Input First Name\n";
		errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_01_firstName.value))
			{
				///errmsg = "You Must Not Input Special Characters in First Name\n";
				errmsg += "Fields cannot contain Special Characters\n";
				errFlag = true;	
			}


	}
    if (isEmpty(document.contactdataForm.XX_02_lastName.value))
	{
		errmsg +="You Must Input Last Name\n";
		errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_02_lastName.value))
			{
				//errmsg += "You Must Not Input Special Characters in Last Name\n";
				errmsg += "Fields cannot contain Special Characters\n";
				errFlag = true;	
			}


	} 
	if (isEmpty(document.contactdataForm.XX_20_title.value))
	{
		errmsg +="You Must Input Title\n";
		errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_20_title.value))
			{
				//errmsg += "You Must Not Input Special Characters in Title\n";
				errmsg += "Fields cannot contain Special Characters\n";
				errFlag = true;	
			}


	}
	if (isEmpty(document.contactdataForm.XX_10_email.value))
	{
		errmsg +="You Must Input Email \n";
		errFlag = true;	
	}else{
		if (EmailValid(document.contactdataForm.XX_10_email.value))
			{
				errmsg +="Please input a valid email address! \n";
				errFlag = true;	
			}


	}
	if (isEmpty(document.contactdataForm.XX_16_company.value))
	{
		errmsg +="You Must Input Company\n";
		errFlag = true;	
	}else{
		if (splCharCheckComp(document.contactdataForm.XX_16_company.value))
               {
                     //errmsg += "You Must Not Input Special Characters in Company Name\n";
					 errmsg += "Fields cannot contain Special Characters\n";
                     errFlag = true;   
               }
	}
	 
	if(document.contactdataForm.XX_17_industry.value == ""){
		errmsg +="You Must Select Industry\n";
		errFlag = true;	  
	}
	 if (isEmpty(document.contactdataForm.XX_05_city.value))
	{
		 //errmsg +="You Must Input City\n";
		 //errFlag = true;	
	}else{
		if (specialCharHnadle(document.contactdataForm.XX_05_city.value))
			{
				//errmsg += "You Must Not Input Special Characters in City Name\n";
				errmsg += "Fields cannot contain Special Characters\n";
				errFlag = true;	
			}


	}  
	if(document.contactdataForm.XX_06_state.value == ""){
		 errmsg +="You Must Select State\n";
		 errFlag = true;	  
	}
	
	/*if (isEmpty(document.contactdataForm.XX_07_zip.value))
	{ 
		//errmsg += "You Must Input Zip\n";
		//errFlag = true;	
	}else{
		if (ValidZIP(document.contactdataForm.XX_07_zip.value))
		{ 
			errFlag = true;
	
		}
	}*/
	
	if(isZipCodeEntered() == false) {
			errmsg += "You Must Input Zip\n";
			errFlag = true;	
	 }
	 else{
		if(isZipCodeValid() == false) {
			//alert("zipCode not valid");
			errmsg +="Zipcode is in Numerics. It is accepted either in 'xxxxx' or 'xxxxx-xxxx' format \n"
			errFlag = true;	
		 }
	 }
	if(!isEmpty(document.contactdataForm.XX_07_zip2.value)) {
			document.contactdataForm.XX_07_zip.value =
			document.contactdataForm.XX_07_zip1.value + "-" +
			document.contactdataForm.XX_07_zip2.value;
	} else {
		document.contactdataForm.XX_07_zip.value = document.contactdataForm.XX_07_zip1.value;
	}
	if (isEmpty(document.contactdataForm.model.value)
	&& document.contactdataForm.XX_18_categoryofinterest.value == "" ){
		errmsg +="Select at least one in Category of interest/Product of interest \n";
		errFlag = true;	  
	}
	
	//alert('test-1');
   
	if (errFlag)
	{
		if(errmsg.length>1){
			//errmsg +="The following error(s)occured \n";
			//alert("The following error(s)occured \n"+errmsg);
		}
			if (isEmpty(document.contactdataForm.XX_01_firstName.value)|| specialCharHnadle(document.contactdataForm.XX_01_firstName.value))
			{
			document.contactdataForm.XX_01_firstName.focus();
			}else if (isEmpty(document.contactdataForm.XX_02_lastName.value)|| specialCharHnadle(document.contactdataForm.XX_02_lastName.value)){
				document.contactdataForm.XX_02_lastName.focus();
			}else if (isEmpty(document.contactdataForm.XX_20_title.value)|| specialCharHnadle(document.contactdataForm.XX_20_title.value)){
				document.contactdataForm.XX_20_title.focus();
			}else if (isEmpty(document.contactdataForm.XX_10_email.value)){
				document.contactdataForm.XX_10_email.focus();
			}else if (isEmpty(document.contactdataForm.XX_16_company.value)|| specialCharHnadle(document.contactdataForm.XX_16_company.value)){
				document.contactdataForm.XX_16_company.focus();
			}else if(document.contactdataForm.XX_17_industry.value == ""){ 
			 	document.contactdataForm.XX_17_industry.focus();
			}else if(document.contactdataForm.XX_06_state.value == ""){ 
			 	document.contactdataForm.XX_06_state.focus(); 
			}else if(document.contactdataForm.XX_07_zip.value == ""){ 
			 	document.contactdataForm.XX_07_zip1.focus(); 
			}else {
				if (isEmpty(document.contactdataForm.model.value)&& document.contactdataForm.XX_18_categoryofinterest.value == ""){
					document.contactdataForm.XX_18_categoryofinterest.focus();  
				}
			}

			
	}
	//20080804
	else
	{	
//alert(document.contactdataForm.var_surv_answer1.value);
//alert(document.contactdataForm.var_surv_answer2.value);
//alert(document.contactdataForm.formID.value);
		//document.contactdataForm.submit();
	}
 return errmsg;
}
//Muni Chnages end

// check is null
function isEmpty(strVal){
    var result = false;
   if ( strVal.length == 0)
      result = true ;
  return result;
}
function ValidZIP(zipval)
{
// declare valid variable as a string with all valid characters (digits from 0 to 9 )
    var valid = "0123456789";

//if number of character in phone field is not equal 10 - display warning and return false
         if(zipval.length !=5)
         {
    	 alert("Invalid ZIP number length! Please try again.")
		 document.contactdataForm.XX_07_zip.value="";
		 document.contactdataForm.XX_07_zip.focus();
         return true
         }
        //check each character entered in the phone field 
         for (var i=0; i < zipval.length; i++)
         {
         //put in temp variable each character, one at a time.
         temp = "" + zipval.substring(i, i+1);
    //check index of a phone character in the "valid" variable.
    // if temp contains a character which is not in "valid" variable, 
    //then valid.indexOf(temp) will be -1, otherwise it may be 0.1.2.3.4.5.6.7.8 or 9

         if (valid.indexOf(temp) == "-1") 
         {
          alert("Invalid characters in your zip. Please try again.")  
		  document.contactdataForm.XX_07_zip.value="";
		  document.contactdataForm.XX_07_zip.focus();
          return true;
         }
    }
    //if all conditions are passed, then return true
    return false;
}
function EmailValid(str){
var testresults
//var str=document.validation.emailcheck.value
var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
if (filter.test(str))
testresults=false
else{
//alert("Please input a valid email address!")
document.contactdataForm.XX_10_email.value="";
document.contactdataForm.XX_10_email.focus();
testresults=true
}
return (testresults)
}
 
function PhoneValid(str)
{
var re10digit= /^\d{3}-\d{3}-\d{4}$/; 
if (str.search(re10digit)==-1)
	{ 
	//alert("Please make sure your phone number is the correct format in numerics 'xxx-xxx-xxxx'");
	document.contactdataForm.XX_08_phone.value="";
    //document.contactdataForm.XX_08_phone.focus(); 
	return true; 
	}
}
function FaxValid(str)
{
var re10digit= /^\d{3}-\d{3}-\d{4}$/; 
if (str.search(re10digit)==-1)
	{ 
	alert("Please make sure your fax number is the correct format in numerics 'xxx-xxx-xxxx'"); 
	document.contactdataForm.XX_09_fax.value="";
	document.contactdataForm.XX_09_fax.focus();
	return true; 
	}
}
var WinE;
function OtherCountries(country)
{
var win2;
WinE = window.open(country, "WinE", "width=450,height=200,toolbar=no,resizable=yes");
usasection.style.display = 'none';
}

function usa()
{ 


if (document.getElementById) { // DOM3 = IE5, NS6 
		document.getElementById('usasection').style.visibility = 'visible'; 
		//alert("check");
		document.getElementById('staticsec').style.display = 'none';
		parent.resize_iframe();
		//document.getElementById('subsection').style.display = 'inline';
		
		} 
		else
		{
				
			if (document.getElementByName) { // DOM3 = IE5, NS6 
			document.getElementByName('usasection').style.visibility = 'visible'; 
			
			document.getElementByName('staticsec').style.display = 'none';
			parent.resize_iframe();
			//document.getElementByName('subsection').style.display = 'inline';
			} 
			else 
			{ 
				if (document.layers) { // Netscape 4 
				document.usasection.visibility = 'visible';
				//document.subsection.style.display = 'inline'; 
				} 
				else { // IE 4 
				document.all.usasection.style.visibility = 'visible'; 
				//document.all.subsection.style.display = 'inline'; 
				
				} 
			} 
		}


parent.enablediv();
refreshiframes();
//clearing the HTML form fields
parent.document.dataForm.reset();

}



function refreshiframes() 
    { 
    	//parent.captchframe.location.href="generateCaptcha.jsp";
    	parent.captchframe.location.replace('jsp/forms/generateCaptcha.jsp');
    	setTimeout("refreshiframe()",1000);
        
    } 
function refreshiframe() 
    { 
    	//parent.captchID.location.href="captcha.jsp" 
    	parent.captchID.location.replace('jsp/forms/captcha.jsp');
     } 
function reloadOptions(){  
	//clearing the jsp form fields
	document.contactdataForm.reset();

	if(document.contactdataForm.meta[0].checked==true){  
		if (document.getElementById) { // DOM3 = IE5, NS6 
			document.getElementById('usasection').style.visibility = 'visible'; 
		} 
		else
		{
				
			if (document.getElementByName) { // DOM3 = IE5, NS6 
				document.getElementByName('usasection').style.visibility = 'visible'; 
		
			} 
			else 
			{ 
				if (document.layers) { // Netscape 4 
					document.usasection.visibility = 'visible';
				
				} 
				else { // IE 4 
					document.all.usasection.style.visibility = 'visible'; 

				
				} 
			} 
		}	


		parent.enablediv();
		refreshiframes();
	}else if(document.contactdataForm.meta[1].checked==true){
		document.getElementByName('usasection').style.visibility = 'none';  
		parent.disablediv();
	}
		
}


//Muni Changes - Reg form

function resetRegForm()  
{
			document.contactdataForm.XX_01_firstName.value=""; 
			document.contactdataForm.XX_02_lastName.value="";
			document.contactdataForm.XX_03_street.value="";
			document.contactdataForm.XX_04_street2.value="";
			document.contactdataForm.XX_05_city.value="";
			document.contactdataForm.XX_06_state.value="";
			document.contactdataForm.XX_07_zip.value="";
			//document.contactdataForm.XX_08_phone.value="";
			//document.contactdataForm.XX_09_fax.value="";
			document.contactdataForm.XX_10_email.value="";
            //document.contactdataForm.XX_14_description.value="";
            document.contactdataForm.XX_16_company.value="";
            document.contactdataForm.XX_17_industry.value="";
            document.contactdataForm.XX_18_categoryofinterest.value="";
            document.contactdataForm.model.value="";
   			document.contactdataForm.XX_20_title.value="";
           
			parent.document.dataForm.reset();
}

function resetFormData()  
{
			document.contactdataForm.XX_01_firstName.value=""; 
			document.contactdataForm.XX_02_lastName.value="";
			document.contactdataForm.XX_03_street.value="";
			document.contactdataForm.XX_04_street2.value="";
			document.contactdataForm.XX_05_city.value="";
			document.contactdataForm.XX_06_state.value="";
			document.contactdataForm.XX_07_zip.value="";
			document.contactdataForm.XX_08_phone.value="";
			document.contactdataForm.XX_09_fax.value="";
			document.contactdataForm.XX_10_email.value="";
            document.contactdataForm.XX_14_description.value="";
            document.contactdataForm.XX_16_company.value="";
            document.contactdataForm.XX_17_industry.value="";
            document.contactdataForm.XX_18_categoryofinterest.value="";
            document.contactdataForm.model.value="";
           // document.contactdataForm.XX_13_sales.checked=false; 
           // document.contactdataForm.XX_19_sonyreseller.checked=false;
   			document.contactdataForm.XX_20_title.value="";
           // document.contactdataForm.var_surv_answer1.value="";
           // document.contactdataForm.var_surv_answer2.value=""; 
			//document.contactdataForm.var_surv_answer3.value=""; 
           // document.contactdataForm.var_surv_answer4.value=""; 
          //  document.contactdataForm.var_surv_answer5.value=""; 
          //  document.contactdataForm.var_surv_answer6.value=""; 
         //   document.contactdataForm.var_surv_answer7.value=""; 
         //   document.contactdataForm.var_surv_answer8.value=""; 
         //   document.contactdataForm.var_surv_answer9.value=""; 
			 // parent.resetVariableFormData(); 
			 parent.document.dataForm.reset();
}
function validateContactFormData1(){
document.contactdataForm.submit();
}

function addEvent(obj,event_name,func_name){
	if (obj.attachEvent){
		obj.attachEvent("on"+event_name, func_name);
	}else if(obj.addEventListener){
		obj.addEventListener(event_name,func_name,true);
	}else{
		obj["on"+event_name] = func_name;
	}
}
function removeEvent(obj,event_name,func_name){
	if (obj.detachEvent){
		obj.detachEvent("on"+event_name,func_name);
	}else if(obj.removeEventListener){
		obj.removeEventListener(event_name,func_name,true);
	}else{
		obj["on"+event_name] = null; 
	}
}	
function stopEvent(evt){
	evt || window.event;
	if (evt.stopPropagation){
		evt.stopPropagation();
		evt.preventDefault();
	}else if(typeof evt.cancelBubble != "undefined"){
		evt.cancelBubble = true;
		evt.returnValue = false;
	}
	return false;
}
function getElement(evt){
	if (window.event){
		return window.event.srcElement;
	}else{
		return evt.currentTarget;
	}
}
function getTargetElement(evt){
	if (window.event){
		return window.event.srcElement;
	}else{
		return evt.target;
	}
}
function stopSelect(obj){
	if (typeof obj.onselectstart != 'undefined'){
		addEvent(obj,"selectstart",function(){ return false;});
	}
}
function getCaretEnd(obj){
	if(typeof obj.selectionEnd != "undefined"){
		return obj.selectionEnd;
	}else if(document.selection&&document.selection.createRange){
		var M=document.selection.createRange();
		try{
			var Lp = M.duplicate();
			Lp.moveToElementText(obj);
		}catch(e){
			var Lp=obj.createTextRange();
		}
		Lp.setEndPoint("EndToEnd",M);
		var rb=Lp.text.length;
		if(rb>obj.value.length){
			return -1;
		}
		return rb;
	}
}
function getCaretStart(obj){
	if(typeof obj.selectionStart != "undefined"){
		return obj.selectionStart;
	}else if(document.selection&&document.selection.createRange){
		var M=document.selection.createRange();
		try{
			var Lp = M.duplicate();
			Lp.moveToElementText(obj);
		}catch(e){
			var Lp=obj.createTextRange();
		}
		Lp.setEndPoint("EndToStart",M);
		var rb=Lp.text.length;
		if(rb>obj.value.length){
			return -1;
		}
		return rb;
	}
}
function setCaret(obj,l){
	obj.focus();
	if (obj.setSelectionRange){
		obj.setSelectionRange(l,l);
	}else if(obj.createTextRange){
		m = obj.createTextRange();
		m.moveStart('character',l);
		m.collapse();
		m.select();
	}
}
function setSelection(obj,s,e){
	obj.focus();
	if (obj.setSelectionRange){
		obj.setSelectionRange(s,e);
	}else if(obj.createTextRange){
		m = obj.createTextRange();
		m.moveStart('character',s);
		m.moveEnd('character',e);
		m.select();
	}
}
String.prototype.addslashes = function(){
	return this.replace(/(["\\\.\|\[\]\^\*\+\?$\(\)])/g, '\$1');
}
String.prototype.trim = function () {
    return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1");
};
function curTop(obj){
	toreturn = 0;
	while(obj){
		toreturn += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return toreturn;
}
function curLeft(obj){
	toreturn = 0;
	while(obj){
		toreturn += obj.offsetLeft;
		obj = obj.offsetParent;
	}
	return toreturn;
}
function isNumber(a) {
    return typeof a == 'number' && isFinite(a);
}
function replaceHTML(obj,text){
	while(el = obj.childNodes[0]){
		obj.removeChild(el);
	};
	obj.appendChild(document.createTextNode(text));
}
function actb(obj,ca){
//alert("Mycells........"+ca);
	/* ---- Public Variables ---- */
	this.actb_timeOut = -1; // Autocomplete Timeout in ms (-1: autocomplete never time out)
	this.actb_lim = 4;    // Number of elements autocomplete can show (-1: no limit)
	this.actb_firstText = true; // should the auto complete be limited to the beginning of keyword? True == Yes
	this.actb_mouse = true; // Enable Mouse Support
	this.actb_delimiter = new Array(';',',');  // Delimiter for multiple autocomplete. Set it to empty array for single autocomplete
	this.actb_startcheck = 1; // Show widget only after this number of characters is typed in.
	/* ---- Public Variables ---- */

	/* --- Styles --- */
	this.actb_bgColor = '#888888';  
	this.actb_textColor = '#FFFFFF'; 
	this.actb_hColor = '#000000';
	this.actb_fFamily = 'Verdana';
	this.actb_fSize = '12px';
	this.actb_hStyle = 'text-decoration:underline;font-weight="bold"';
	/* --- Styles --- */

	/* ---- Private Variables ---- */
	var actb_delimwords = new Array();
	var actb_cdelimword = 0;
	var actb_delimchar = new Array();
	var actb_display = false;
	var actb_pos = 0;
	var actb_total = 0;
	var actb_curr = null;
	var actb_rangeu = 0;
	var actb_ranged = 0;
	var actb_bool = new Array();
	var actb_pre = 0;
	var actb_toid;
	var actb_tomake = false;
	var actb_getpre = "";
	var actb_mouse_on_list = 1;
	var actb_kwcount = 0;
	var actb_caretmove = false;
	this.actb_keywords = new Array();
	/* ---- Private Variables---- */

	this.actb_keywords = ca;
	var actb_self = this;

	actb_curr = obj;

	addEvent(actb_curr,"focus",actb_setup);
	
	function actb_setup(){
		addEvent(document,"keydown",actb_checkkey);
		addEvent(actb_curr,"blur",actb_clear);
		addEvent(document,"keypress",actb_keypress);
	}

	function actb_clear(evt){
		if (!evt) evt = event;
		removeEvent(document,"keydown",actb_checkkey);
		removeEvent(actb_curr,"blur",actb_clear);
		removeEvent(document,"keypress",actb_keypress);
		actb_removedisp();
	}
	function actb_parse(n){
		if (actb_self.actb_delimiter.length > 0){
			var t = actb_delimwords[actb_cdelimword].trim().addslashes();
			var plen = actb_delimwords[actb_cdelimword].trim().length;
		}else{
			var t = actb_curr.value.addslashes();
			var plen = actb_curr.value.length;
		}
		var tobuild = '';
		var i;

		if (actb_self.actb_firstText){
			var re = new RegExp("^" + t, "i");
		}else{
			var re = new RegExp(t, "i");
		}
		var p = n.search(re);

		for (i=0;i<p;i++){
			tobuild += n.substr(i,1);
		}
		tobuild += "<font style='"+(actb_self.actb_hStyle)+"'>"
		for (i=p;i<plen+p;i++){ 
			tobuild += n.substr(i,1);
		}
		tobuild += "</font>";
			for (i=plen+p;i<n.length;i++){
			tobuild += n.substr(i,1);
		}
		return tobuild;
	}
	function actb_generate(){
		if (document.getElementById('tat_table')){ actb_display = false;document.body.removeChild(document.getElementById('tat_table')); }
		if (actb_kwcount == 0){
			actb_display = false;
			return;
		}
		a = document.createElement('table');
		a.cellSpacing='1px';
		a.cellPadding='2px';
		a.style.position='absolute';
		a.style.top = eval(curTop(actb_curr) + actb_curr.offsetHeight) + "px";
		a.style.left = curLeft(actb_curr) + "px";
		a.style.backgroundColor=actb_self.actb_bgColor;
		a.id = 'tat_table';
		document.body.appendChild(a);
		var i;
		var first = true;
		var j = 1;
		if (actb_self.actb_mouse){
			a.onmouseout = actb_table_unfocus;
			a.onmouseover = actb_table_focus;
		}
		var counter = 0;
		for (i=0;i<actb_self.actb_keywords.length;i++){
			if (actb_bool[i]){
				counter++;
				r = a.insertRow(-1);
				if (first && !actb_tomake){
					r.style.backgroundColor = actb_self.actb_hColor;
					first = false;
					actb_pos = counter;
				}else if(actb_pre == i){
					r.style.backgroundColor = actb_self.actb_hColor;
					first = false;
					actb_pos = counter;
				}else{
					r.style.backgroundColor = actb_self.actb_bgColor;
				}
				r.id = 'tat_tr'+(j);
				c = r.insertCell(-1);
				c.style.color = actb_self.actb_textColor;
				c.style.fontFamily = actb_self.actb_fFamily;
				c.style.fontSize = actb_self.actb_fSize;
				c.innerHTML = actb_parse(actb_self.actb_keywords[i]);
				c.id = 'tat_td'+(j);
				c.setAttribute('pos',j);
				if (actb_self.actb_mouse){
					c.style.cursor = 'pointer';
					c.onclick=actb_mouseclick;
					c.onmouseover = actb_table_highlight;
				}
				j++;
			}
			if (j - 1 == actb_self.actb_lim && j < actb_total){
				r = a.insertRow(-1);
				r.style.backgroundColor = actb_self.actb_bgColor;
				c = r.insertCell(-1);
				c.style.color = actb_self.actb_textColor;
				c.style.fontFamily = 'arial narrow';
				c.style.fontSize = actb_self.actb_fSize;
				c.align='center';
				replaceHTML(c,'\\/');
				if (actb_self.actb_mouse){
					c.style.cursor = 'pointer';
					c.onclick = actb_mouse_down;
				}
				break;
			}
		}
		actb_rangeu = 1;
		actb_ranged = j-1;
		actb_display = true;
		if (actb_pos <= 0) actb_pos = 1;
	}
	function actb_remake(){
		document.body.removeChild(document.getElementById('tat_table'));
		a = document.createElement('table');
		a.cellSpacing='1px';
		a.cellPadding='2px';
		a.style.position='absolute';
		a.style.top = eval(curTop(actb_curr) + actb_curr.offsetHeight) + "px";
		a.style.left = curLeft(actb_curr) + "px";
		a.style.backgroundColor=actb_self.actb_bgColor;
		a.id = 'tat_table';
		if (actb_self.actb_mouse){
			a.onmouseout= actb_table_unfocus;
			a.onmouseover=actb_table_focus;
		}
		document.body.appendChild(a);
		var i;
		var first = true;
		var j = 1;
		if (actb_rangeu > 1){
			r = a.insertRow(-1);
			r.style.backgroundColor = actb_self.actb_bgColor;
			c = r.insertCell(-1);
			c.style.color = actb_self.actb_textColor;
			c.style.fontFamily = 'arial narrow';
			c.style.fontSize = actb_self.actb_fSize;
			c.align='center';
			replaceHTML(c,'/\\');
			if (actb_self.actb_mouse){
				c.style.cursor = 'pointer';
				c.onclick = actb_mouse_up;
			}
		}
		for (i=0;i<actb_self.actb_keywords.length;i++){
			if (actb_bool[i]){
				if (j >= actb_rangeu && j <= actb_ranged){
					r = a.insertRow(-1);
					r.style.backgroundColor = actb_self.actb_bgColor;
					r.id = 'tat_tr'+(j);
					c = r.insertCell(-1);
					c.style.color = actb_self.actb_textColor;
					c.style.fontFamily = actb_self.actb_fFamily;
					c.style.fontSize = actb_self.actb_fSize;
					c.innerHTML = actb_parse(actb_self.actb_keywords[i]);
					c.id = 'tat_td'+(j);
					c.setAttribute('pos',j);
					if (actb_self.actb_mouse){
						c.style.cursor = 'pointer';
						c.onclick=actb_mouseclick;
						c.onmouseover = actb_table_highlight;
					}
					j++;
				}else{
					j++;
				}
			}
			if (j > actb_ranged) break;
		}
		if (j-1 < actb_total){
			r = a.insertRow(-1);
			r.style.backgroundColor = actb_self.actb_bgColor;
			c = r.insertCell(-1);
			c.style.color = actb_self.actb_textColor;
			c.style.fontFamily = 'arial narrow';
			c.style.fontSize = actb_self.actb_fSize;
			c.align='center';
			replaceHTML(c,'\\/');
			if (actb_self.actb_mouse){
				c.style.cursor = 'pointer';
				c.onclick = actb_mouse_down;
			}
		}
	}
	function actb_goup(){
		if (!actb_display) return;
		if (actb_pos == 1) return;
		document.getElementById('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_bgColor;
		actb_pos--;
		if (actb_pos < actb_rangeu) actb_moveup();
		document.getElementById('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_hColor;
		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list=0;actb_removedisp();},actb_self.actb_timeOut);
	}
	function actb_godown(){
		if (!actb_display) return;
		if (actb_pos == actb_total) return;
		document.getElementById('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_bgColor;
		actb_pos++;
		if (actb_pos > actb_ranged) actb_movedown();
		document.getElementById('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_hColor;
		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list=0;actb_removedisp();},actb_self.actb_timeOut);
	}
	function actb_movedown(){
		actb_rangeu++;
		actb_ranged++;
		actb_remake();
	}
	function actb_moveup(){
		actb_rangeu--;
		actb_ranged--;
		actb_remake();
	}

	/* Mouse */
	function actb_mouse_down(){
		document.getElementById('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_bgColor;
		actb_pos++;
		actb_movedown();
		document.getElementById('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_hColor;
		actb_curr.focus();
		actb_mouse_on_list = 0;
		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list=0;actb_removedisp();},actb_self.actb_timeOut);
	}
	function actb_mouse_up(evt){
		if (!evt) evt = event;
		if (evt.stopPropagation){
			evt.stopPropagation();
		}else{
			evt.cancelBubble = true;
		}
		document.getElementById('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_bgColor;
		actb_pos--;
		actb_moveup();
		document.getElementById('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_hColor;
		actb_curr.focus();
		actb_mouse_on_list = 0;
		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list=0;actb_removedisp();},actb_self.actb_timeOut);
	}
	function actb_mouseclick(evt){
		if (!evt) evt = event;
		if (!actb_display) return;
		actb_mouse_on_list = 0;
		actb_pos = this.getAttribute('pos');
		actb_penter();
	}
	function actb_table_focus(){
		actb_mouse_on_list = 1;
	}
	function actb_table_unfocus(){
		actb_mouse_on_list = 0;
		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list = 0;actb_removedisp();},actb_self.actb_timeOut);
	}
	function actb_table_highlight(){
		actb_mouse_on_list = 1;
		document.getElementById('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_bgColor;
		actb_pos = this.getAttribute('pos');
		while (actb_pos < actb_rangeu) actb_moveup();
		while (actb_pos > actb_ranged) actb_movedown();
		document.getElementById('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_hColor;
		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list = 0;actb_removedisp();},actb_self.actb_timeOut);
	}
	/* ---- */

	function actb_insertword(a){
		if (actb_self.actb_delimiter.length > 0){
			str = '';
			l=0;
			for (i=0;i<actb_delimwords.length;i++){
				if (actb_cdelimword == i){
					prespace = postspace = '';
					gotbreak = false;
					for (j=0;j<actb_delimwords[i].length;++j){
						if (actb_delimwords[i].charAt(j) != ' '){
							gotbreak = true;
							break;
						}
						prespace += ' ';
					}
					for (j=actb_delimwords[i].length-1;j>=0;--j){
						if (actb_delimwords[i].charAt(j) != ' ') break;
						postspace += ' ';
					}
					str += prespace;
					str += a;
					l = str.length;
					if (gotbreak) str += postspace;
				}else{
					str += actb_delimwords[i];
				}
				if (i != actb_delimwords.length - 1){
					str += actb_delimchar[i];
				}
			}
			actb_curr.value = str;
			setCaret(actb_curr,l);
		}else{
			actb_curr.value = a;
		}
		actb_mouse_on_list = 0;
		actb_removedisp();
	}
	function actb_penter(){
		if (!actb_display) return;
		actb_display = false;
		var word = '';
		var c = 0;
		for (var i=0;i<=actb_self.actb_keywords.length;i++){
			if (actb_bool[i]) c++;
			if (c == actb_pos){
				word = actb_self.actb_keywords[i];
				break;
			}
		}
		actb_insertword(word);
		l = getCaretStart(actb_curr);
	}
	function actb_removedisp(){
		if (actb_mouse_on_list==0){
			actb_display = 0;
			if (document.getElementById('tat_table')){ document.body.removeChild(document.getElementById('tat_table')); }
			if (actb_toid) clearTimeout(actb_toid);
		}
	}
	function actb_keypress(e){
		if (actb_caretmove) stopEvent(e);
		return !actb_caretmove;
	}
	function actb_checkkey(evt){
		if (!evt) evt = event;
		a = evt.keyCode;
		caret_pos_start = getCaretStart(actb_curr);
		actb_caretmove = 0;
		switch (a){
			case 38:
				actb_goup();
				actb_caretmove = 1;
				return false;
				break;
			case 40:
				actb_godown();
				actb_caretmove = 1;
				return false;
				break;
			case 13: case 9:
				if (actb_display){
					actb_caretmove = 1;
					actb_penter();
					return false;
				}else{
					return true;
				}
				break;
			default:
				setTimeout(function(){actb_tocomplete(a)},50);
				break;
		}
	}

	function actb_tocomplete(kc){
		if (kc == 38 || kc == 40 || kc == 13) return;
		var i;
		if (actb_display){
			var word = 0;
			var c = 0;
			for (var i=0;i<=actb_self.actb_keywords.length;i++){
				if (actb_bool[i]) c++;
				if (c == actb_pos){
					word = i;
					break;
				}
			}
			actb_pre = word;
		}else{ actb_pre = -1};

		if (actb_curr.value == ''){
			actb_mouse_on_list = 0;
			actb_removedisp();
			return;
		}
		if (actb_self.actb_delimiter.length > 0){
			caret_pos_start = getCaretStart(actb_curr);
			caret_pos_end = getCaretEnd(actb_curr);

			delim_split = '';
			for (i=0;i<actb_self.actb_delimiter.length;i++){
				delim_split += actb_self.actb_delimiter[i];
			}
			delim_split = delim_split.addslashes();
			delim_split_rx = new RegExp("(["+delim_split+"])");
			c = 0;
			actb_delimwords = new Array();
			actb_delimwords[0] = '';
			for (i=0,j=actb_curr.value.length;i<actb_curr.value.length;i++,j--){
				if (actb_curr.value.substr(i,j).search(delim_split_rx) == 0){
					ma = actb_curr.value.substr(i,j).match(delim_split_rx);
					actb_delimchar[c] = ma[1];
					c++;
					actb_delimwords[c] = '';
				}else{
					actb_delimwords[c] += actb_curr.value.charAt(i);
				}
			}

			var l = 0;
			actb_cdelimword = -1;
			for (i=0;i<actb_delimwords.length;i++){
				if (caret_pos_end >= l && caret_pos_end <= l + actb_delimwords[i].length){
					actb_cdelimword = i;
				}
				l+=actb_delimwords[i].length + 1;
			}
			var ot = actb_delimwords[actb_cdelimword].trim();
			var t = actb_delimwords[actb_cdelimword].addslashes().trim();
		}else{
			var ot = actb_curr.value;
			var t = actb_curr.value.addslashes();
		}
		if (ot.length == 0){
			actb_mouse_on_list = 0;
			actb_removedisp();
		}
		if (ot.length < actb_self.actb_startcheck) return this;
		if (actb_self.actb_firstText){
			var re = new RegExp("^" + t, "i");
		}else{
			var re = new RegExp(t, "i");
		}

		actb_total = 0;
		actb_tomake = false;
		actb_kwcount = 0;
		for (i=0;i<actb_self.actb_keywords.length;i++){
			actb_bool[i] = false;
			if (re.test(actb_self.actb_keywords[i])){
				actb_total++;
				actb_bool[i] = true;
				actb_kwcount++;
				if (actb_pre == i) actb_tomake = true;  
			}
		}

		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list = 0;actb_removedisp();},actb_self.actb_timeOut);
		actb_generate();
	}
	return this;
}





