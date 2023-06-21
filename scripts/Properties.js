var rootUrl = data.ServerUrl; 
var siteIdentifier = data.SiteIdentifier;
var userEmail = data.UserEmail;
var environment =data.Environment;
var embedSecret = data.EmbedSecret; 

var baseUrl = "";
var dashboardServerApiUrl = "";
var dataServiceUrl = "";
var designerServiceUrl = "";


if(environment == "onpremise")
{
	var intermediateDbStatus = false;
    var baseUrl = rootUrl + "/" + siteIdentifier;
    var dashboardServerApiUrl = rootUrl + "/api/" + siteIdentifier;
    var dataServiceUrl = rootUrl + "/designer/v1.0/datahandler";
    var designerServiceUrl = rootUrl + "/designer/v1.0/design";
    var designerRootUrl= rootUrl + "/designer";
}
else
{
	var intermediateDbStatus = false;
    var baseUrl = rootUrl;
    var dashboardServerApiUrl = rootUrl + "/api";
	var designerRootUrl = baseUrl;
    var dataServiceUrl = designerRootUrl + "/v1.0/datahandler";
    var designerServiceUrl = designerRootUrl + "/v1.0/design";
   
}
	
var accessToken="";


function getToken() {
	var apiRequest = {
		username: userEmail,
		embed_secret: embedSecret,
		grant_type: "embed_secret"
	  };	  
	  var xhr = new XMLHttpRequest();
	  xhr.open("POST", dashboardServerApiUrl + "/token", false);
	  xhr.setRequestHeader("Content-Type", "application/json");
	  xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
		  var data= JSON.parse(xhr.responseText);
		  accessToken = data.access_token;
		}
	  };
	  xhr.send(JSON.stringify(apiRequest));
}
