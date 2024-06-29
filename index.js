function display(str){
    document.querySelector('#display').value += str;
  }
  function evaluateValue(){
    let displayValue = document.querySelector('#display').value;
    let result = eval(displayValue);
    document.querySelector('#display').value = result;
  }
  function clearDisplay(){
    document.querySelector('#display').value = ' ';
  }
  function backspace(){
    let displayValue = document.querySelector('#display').value;
    document.querySelector('#display').value = displayValue.slice(0,displayValue.length - 1);
  }