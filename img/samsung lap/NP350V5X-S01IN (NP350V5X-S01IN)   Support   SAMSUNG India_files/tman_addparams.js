// Get URL and split into array
var URL = unescape(window.location.href.replace( "http://", "" ));
var SplitedURL = URL.split("?")[0].split("/");

// Define variables
var group = "";
var type = "";
var subtype = "";
var pvi_type_name = "";
var pvi_subtype_name = "";
var model_name = "";
var model_code = "";
var price = "0.0";
var qty = "0";
var conversion_type = "";

// Set variables if they exist
if (document.getElementById("group") != undefined)
	group = document.getElementById("group").value;

if (document.getElementById("type") != undefined)
	type = document.getElementById("type").value;

if (document.getElementById("subtype") != undefined)
	subtype = document.getElementById("subtype").value;

if (document.getElementById("pvi_type_name") != undefined)
	pvi_type_name = document.getElementById("pvi_type_name").value;

if (document.getElementById("pvi_subtype_name") != undefined)
	pvi_subtype_name = document.getElementById("pvi_subtype_name").value;

if (document.getElementById("model_name") != undefined)
	model_name = document.getElementById("model_name").value;

if (document.getElementById("model_code") != undefined)
	model_code = document.getElementById("model_code").value;

if (document.getElementById("price") != undefined) {
	price = document.getElementById("price").value;
	if (price=="" || price=="0")
	{
		price = "0.0";
	}
}

// Set variables if they exist
if (document.getElementById("consideration_type") != undefined) {
	conversion_type = document.getElementById("consideration_type").value; } else {

if (SplitedURL[1] != "") {								
	if (SplitedURL[2] == "") {	// home
		conversion_type = "consideration";
	} else if (document.getElementById("group") != undefined) {
		if (location.href.indexOf("-dealerlocator") != -1)
			conversion_type = "purchase_indirect_offline";
		else
			conversion_type = "consideration";
	} else if (location.href.indexOf("page=RETAIL.LOCATIONS") != -1) {
		conversion_type = "purchase_indirect_offline";
	} 
}
}



