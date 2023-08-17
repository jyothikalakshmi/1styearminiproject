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
function myFunction() {
  // Get the SUBMIT DIV
  var x = document.getElementById("SUBMIT");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
const wetCheckbox = document.getElementById('1');
const dryCheckbox = document.getElementById('2');
const bothCheckbox = document.getElementById('3');
const wetWeightDiv = document.getElementById('wetWeight');
const dryWeightDiv = document.getElementById('dryWeight');
wetWeightDiv.style.display = 'none';
dryWeightDiv.style.display = 'none';

wetCheckbox.addEventListener('change', updateBothCheckbox);
dryCheckbox.addEventListener('change', updateBothCheckbox);
bothCheckbox.addEventListener('change', updateIndividualCheckboxes);

function updateBothCheckbox() {
  if (wetCheckbox.checked && dryCheckbox.checked) {
    bothCheckbox.checked = true;
    wetWeightDiv.style.display = 'block';
    dryWeightDiv.style.display = 'block';
  } else {
    bothCheckbox.checked = false;
    if(wetCheckbox.checked){
      wetWeightDiv.style.display = 'block';
      dryWeightDiv.style.display = 'none';
    }
    else if(dryCheckbox.checked){
      wetWeightDiv.style.display = 'none';
      dryWeightDiv.style.display = 'block';
    }
    else{
      wetWeightDiv.style.display = 'none';
      dryWeightDiv.style.display = 'none';
    }
  }
  
}

function updateIndividualCheckboxes() {
  if (bothCheckbox.checked) {
    wetCheckbox.checked = true;
    dryCheckbox.checked = true;
    wetWeightDiv.style.display = 'block';
    dryWeightDiv.style.display = 'block';
  } else {
    wetCheckbox.checked = false;
    dryCheckbox.checked = false;
    wetWeightDiv.style.display = 'none';
    dryWeightDiv.style.display = 'none';
  }
}