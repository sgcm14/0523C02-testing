function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: Uno o los dos inputs están vacíos.';
    return;
  } 
  if(inputsAreNumber()){
    label.textContent = 'Error: Uno o los dos inputs no son números.';
    return;
  }
  updateLabel();
}
function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else {
    return false;
  }
}

function inputsAreNumber(){
  return isNaN(getNumber1()) || isNaN(getNumber2());
}

function updateLabel() {
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  var sum = parseFloat(addend1) + parseFloat(addend2);
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}
function getNumber1() {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}
var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);
