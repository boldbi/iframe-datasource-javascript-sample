$(document).ready(function(){
    getToken();
    showDatasourceListing();    
});

function showDatasourceListing() {
	var xhr = new XMLHttpRequest();
    xhr.open("GET", dashboardServerApiUrl + "/v2.0/items?ItemType=4", true);
    xhr.setRequestHeader('Authorization', 'bearer ' + accessToken);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var datasource = data;
        if (datasource !== "") {
          for (var i = 0; i < datasource.length; i++) {
            var divDom = document.createElement('div');
            divDom.className = 'datasource-item';
            divDom.setAttribute('Name', datasource[i].Name);
            divDom.setAttribute('ItemId', datasource[i].Id);
            divDom.textContent = datasource[i].Name;
            document.getElementById("panel").appendChild(divDom);
          }
        }
      }
    };
    xhr.send();  
}

//Create a new datasource
$(document).on("click","#create-datasource",function(){
    openDesignerForCreate();
})

function openDesignerForCreate() {
    $("#datasource").html("");
    $("#datasource").css("height",window.innerHeight-48); //change this value to dynamically set the height of the datasource rendernig dom
	var divIFrame = $("<iframe src='" + baseUrl 
  + "/datasource-designer/connection?isembed=true' id='dashboard-frame' width='100%' height='100%' allowfullscreen frameborder='0'></iframe>");					
	$("#datasource").append(divIFrame);
}

//Edit an existing Datasource
$(document).on("click",".datasource-item",function(){
  $(".datasource-item").removeClass("active");
  $(this).addClass("active");
  id=$(this).attr("ItemId");
  datasourcename =$(this).attr("Name");
openDesignerForEdit(id, datasourcename);
});

function openDesignerForEdit(itemId, datasourcename) {
    $("#datasource").html("");
    $("#datasource").css("height",window.innerHeight-48); //change this value to dynamically set the height of the datasource rendernig dom
	var divIFrame = $("<iframe src='" + baseUrl + "/datasource-designer/" 
  + itemId + "/" + datasourcename + "?isembed=true' id='dashboard-frame' width='100%' height='100%' allowfullscreen frameborder='0'></iframe>");					
	$("#datasource").append(divIFrame);
}
