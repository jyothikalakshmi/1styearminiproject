document.getElementById("defaultTab").click();

function openTab(id) {
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
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
const wetCheckbox = document.getElementById('1');
const dryCheckbox = document.getElementById('2');
const bothCheckbox = document.getElementById('3');
const wetWeightDiv = document.getElementById('wetWeight');
const dryWeightDiv = document.getElementById('dryWeight');
const totalCostPriceDiv = document.getElementById('totalCost');
const totalCostDiv = document.getElementById('totalCostDiv');
const dryWasteKg = document.getElementById('dryWasteKg');
const wetWasteKg = document.getElementById('wetWasteKg');
let totalCost=0;
let dryTotalCost=0;
let wetTotalCost=0;

wetWeightDiv.style.display = 'none';
dryWeightDiv.style.display = 'none';
totalCostDiv.style.display = 'none';


wetCheckbox.addEventListener('change', updateBothCheckbox);
dryCheckbox.addEventListener('change', updateBothCheckbox);
bothCheckbox.addEventListener('change', updateIndividualCheckboxes);

wetWasteKg.addEventListener('change', function () {
  updateTotalCost(wetWasteKg.value,'WET');
});

dryWasteKg.addEventListener('change', function () {
  updateTotalCost(dryWasteKg.value,'DRY');
});

function updateBothCheckbox() {
  if (wetCheckbox.checked && dryCheckbox.checked) {
    bothCheckbox.checked = true;
    wetWeightDiv.style.display = 'block';
    dryWeightDiv.style.display = 'block';
    totalCostDiv.style.display = 'flex';
  } else {
    bothCheckbox.checked = false;
    if (wetCheckbox.checked) {
      wetWeightDiv.style.display = 'block';
      dryWeightDiv.style.display = 'none';
      totalCostDiv.style.display = 'flex';
    }
    else if (dryCheckbox.checked) {
      wetWeightDiv.style.display = 'none';
      dryWeightDiv.style.display = 'block';
      totalCostDiv.style.display = 'flex';
    }
    else {
      wetWeightDiv.style.display = 'none';
      dryWeightDiv.style.display = 'none';
      totalCostDiv.style.display = 'none';
    }
  }

}

function updateIndividualCheckboxes() {
  if (bothCheckbox.checked) {
    wetCheckbox.checked = true;
    dryCheckbox.checked = true;
    wetWeightDiv.style.display = 'block';
    dryWeightDiv.style.display = 'block';
    totalCostDiv.style.display = 'flex';
  } else {
    wetCheckbox.checked = false;
    dryCheckbox.checked = false;
    wetWeightDiv.style.display = 'none';
    dryWeightDiv.style.display = 'none';
    totalCostDiv.style.display = 'none';
  }
}
function updateTotalCost(value,wasteType) {

  if(wasteType=='DRY'){
    if(value>0 && value<=2){
      dryTotalCost=30;
    }
    else if(value>2 && value<=4){
      dryTotalCost=50;
    }
    else{
      let extraValue=value-4;
      dryTotalCost=50+(extraValue*10);
    }
    if(value==0){
      dryTotalCost=0;
    }
  }
  else if(wasteType=='WET'){
    if(value>0&&value<=1){
      wetTotalCost=25;
    }
    else if(value>1&&value<=2){
      wetTotalCost=35;
    }
    else if(value>2&&value<=3){
      wetTotalCost=45;
    }
    else if(value>3&&value<=4){
      wetTotalCost=55;
    }
    else{
      let extraValue=value-4;
      wetTotalCost=55+(extraValue*15);
    }
    if(value==0){
      wetTotalCost=0;
    }
    
  }
  totalCost=wetTotalCost+dryTotalCost;
  totalCostPriceDiv.innerHTML=totalCost+' Rupees';
  
}
function validateTime(selectedTime) {
  const selectedHour = parseInt(selectedTime.split(':')[0]);
  
  if (selectedHour < 6 || selectedHour > 20) {
      alert('Please select a time between 6 AM and 8 PM.');
      document.getElementById('timeInput').value = ''; // Reset the input value
  }
}
const resetButton = document.getElementById("resetButton");
const nameInput = document.getElementById("inputName");
const dateInput = document.getElementById("inputDate");
const timeInput = document.getElementById("inputTime");
const addressInput = document.getElementById("w3review");
const phoneNumberInput = document.getElementById("inputNumber");

resetButton.addEventListener("click",function(){
  nameInput.value="";
  dateInput.value="";
  timeInput.value="";
  addressInput.value="";
  phoneNumberInput.value="";
});

function handleFormReset() {
  // Disable the submit button after form reset
  document.querySelector('#raiseComplaint').disabled = true;
}

const form = document.getElementById("myForm");
const submitButton = document.getElementById("submitButton");

form.addEventListener("input", () => {
  if (form.checkValidity()) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "true");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    // All required fields are filled in correctly, you can proceed with form submission
    alert("Form submitted successfully!");
    form.reset();
    submitButton.setAttribute("disabled", "true");
  } else {
    alert("Please fill in all required fields correctly.");
  }         
});