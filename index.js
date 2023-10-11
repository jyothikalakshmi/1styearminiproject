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

const wetCheckbox = document.getElementById('1');
const dryCheckbox = document.getElementById('2');
const bothCheckbox = document.getElementById('3');
const wetWeightDiv = document.getElementById('wetWeight');
const dryWeightDiv = document.getElementById('dryWeight');
const totalCostPriceDiv = document.getElementById('totalCost');
const totalCostDiv = document.getElementById('totalCostDiv');
const dryWasteKg = document.getElementById('dryWasteKg');
const wetWasteKg = document.getElementById('wetWasteKg');
let totalCost = 0;
let dryTotalCost = 0;
let wetTotalCost = 0;

wetWeightDiv.style.display = 'none';
dryWeightDiv.style.display = 'none';
totalCostDiv.style.display = 'none';


wetCheckbox.addEventListener('change', updateBothCheckbox);
dryCheckbox.addEventListener('change', updateBothCheckbox);
bothCheckbox.addEventListener('change', updateIndividualCheckboxes);

wetWasteKg.addEventListener('change', function () {
  updateTotalCost(wetWasteKg.value, 'WET');
});

dryWasteKg.addEventListener('change', function () {
  updateTotalCost(dryWasteKg.value, 'DRY');
});

function updateBothCheckbox() {
  checkSubmitButtonStatus();
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
  checkSubmitButtonStatus();
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
function updateTotalCost(value, wasteType) {

  if (wasteType == 'DRY') {
    if (value > 0 && value <= 2) {
      dryTotalCost = 30;
    }
    else if (value > 2 && value <= 4) {
      dryTotalCost = 50;
    }
    else {
      let extraValue = value - 4;
      dryTotalCost = 50 + (extraValue * 10);
    }
    if (value == 0) {
      dryTotalCost = 0;
    }
  }
  else if (wasteType == 'WET') {
    if (value > 0 && value <= 1) {
      wetTotalCost = 25;
    }
    else if (value > 1 && value <= 2) {
      wetTotalCost = 35;
    }
    else if (value > 2 && value <= 3) {
      wetTotalCost = 45;
    }
    else if (value > 3 && value <= 4) {
      wetTotalCost = 55;
    }
    else {
      let extraValue = value - 4;
      wetTotalCost = 55 + (extraValue * 15);
    }
    if (value == 0) {
      wetTotalCost = 0;
    }

  }
  totalCost = wetTotalCost + dryTotalCost;
  totalCostPriceDiv.innerHTML = totalCost + ' Rupees';

}
function validateTime(selectedTime) {
  const selectedHour = parseInt(selectedTime.split(':')[0]);

  if (selectedHour < 6 || selectedHour > 20) {
    alert('Please select a time between 6 AM and 8 PM.');
    document.getElementById('timeInput').value = ''; // Reset the input value
  }
  checkSubmitButtonStatus();
}
const resetButton = document.getElementById("resetButton");
const nameInput = document.getElementById("inputName");
const dateInput = document.getElementById("inputDate");
const timeInput = document.getElementById("inputTime");
const addressInput = document.getElementById("w3review");
const phoneNumberInput = document.getElementById("inputNumber");

resetButton.addEventListener("click", function () {
  nameInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
  addressInput.value = "";
  phoneNumberInput.value = "";
  if(wetCheckbox.checked){
    wetWeightDiv.style.display = 'none';
    wetCheckbox.checked=false; 
    wetWasteKg.value="";
  }
  if(dryCheckbox.checked){
    dryWeightDiv.style.display = 'none';
    dryCheckbox.checked=false;
    dryWasteKg.value='';
  }
  totalCostDiv.style.display = 'none';
  bothCheckbox.checked=false;
  totalCost=0;
  totalCostPriceDiv.innerHTML = totalCost + ' Rupees';
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

function validateForm() {
  var contactNumber = document.getElementById("contactNumber").value;
  var contactNumberPattern = /^[1-9][0-9]{9}$/; // Pattern to match 10-digit phone number
  
  if (contactNumberPattern.test(contactNumber)) {
    return true; // Submit the form
  } else {
    return false; // Prevent form submission
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isValidContactNumber = validateForm();
  if (form.checkValidity() && isValidContactNumber) {
    // All required fields are filled in correctly, you can proceed with form submission
    alert("complaint has been successfully raised!");
    form.reset();
    submitButton.setAttribute("disabled", "true");
  } else {
    if(!isValidContactNumber) {
      alert("Please enter a valid 10-digit phone number.");
    } else {
      alert("Please fill in all required fields correctly.");
    }
  }
});

function checkSubmitButtonStatus() {
  if (nameInput.value && dateInput.value && timeInput.value && addressInput.value && phoneNumberInput.value) {
    if (wetCheckbox.checked && dryCheckbox.checked) 
    {
        if (dryWasteKg.value && wetWasteKg.value) 
        {
          document.getElementById('bookingSubmit').disabled = false;
        }
        else 
        {
          document.getElementById('bookingSubmit').disabled = true;
        }
    }
    else if(wetCheckbox.checked && wetWasteKg.value) 
    {
      document.getElementById('bookingSubmit').disabled = false;
    }
    else if(dryCheckbox.checked && dryWasteKg.value)
    {
      ocument.getElementById('bookingSubmit').disabled = false;
    }
    else
    {
      document.getElementById('bookingSubmit').disabled = true;
    }
  }
  else {
    document.getElementById('bookingSubmit').disabled = true;
  }
}

function bookingsSearch(){
  if(document.getElementById('bookingSearch').value){
    document.getElementById('bookingSearchDetails').style.display='block';
  }
  else{
    alert("Enter Booking ID");
  }
}

function bookingsSearchReset(){
  document.getElementById('bookingSearchDetails').style.display='none';
  document.getElementById('bookingSearch').value=""
}
