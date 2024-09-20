let display = document.getElementById('display');
let currentInput = '0';
let operator = '';
let operand1 = '';
let operand2 = '';

function clearDisplay() {
  currentInput = '0';
  operator = '';
  operand1 = '';
  operand2 = '';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1) || '0';
  updateDisplay();
}

function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operand1 === '') {
    operand1 = currentInput;
    operator = op;
    currentInput = '0';
  }
}

function calculate() {
  operand2 = currentInput;
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case '-':
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case '*':
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case '/':
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      result = currentInput;
  }
  currentInput = result.toString();
  operator = '';
  operand1 = '';
  operand2 = '';
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput;
}
