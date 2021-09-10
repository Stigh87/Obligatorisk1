// controller

function newBar() { 
    if ((inputValue > 0) && (inputValue < 11)) {
        numbers.push(inputValue);
    }
    else if (inputValue < 1) {
        alert("FEILMELDING: Verdien du har skrevet inn er for lav!")
    }
    else if (inputValue > 10) {
        alert("FEILMELDING: Verdien du har skrevet inn er for høy!")
    }
    show();
}

function mark(element) {
  if (chosenBar != element) {
      chosenBar = element;
      disabled = '';
     } 
     else { chosenBar = '';  
     disabled = "disabled";
    }
  show();
}
function remove(element) {
  if (chosenBar == element) {
  numbers.splice(chosenBar-1, 1,)
  }
  show();
}
function change(element) {
  if (inputValue < 1) {
      alert("FEILMELDING: Verdien du har skrevet inn er for lav!")
  }
  else if (inputValue > 10) {
      alert("FEILMELDING: Verdien du har skrevet inn er for høy!")
  }
  else if (chosenBar == element) {
    numbers.splice(chosenBar-1, 1, inputValue)
  }
  show();
}




