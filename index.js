document.getElementById("defaultTab").click();

function openTab(id){
     // Declare all variables
  var i, tabcontent;
 
  // Get all elements with class="tabContentDetails" and hide them
  tabcontent = document.getElementsByClassName("tabContentDetails");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(id).style.display = "block";
 
}