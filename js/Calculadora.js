var historyList = document.getElementById('history-list');

function clearResult() {
  document.getElementById('result').value = '';
}

function backspace() {
  var currentResult = document.getElementById('result').value;
  document.getElementById('result').value = currentResult.slice(0, -1);
}

function append(value) {
  document.getElementById('result').value += value;
}

// Função para calcular o resultado da expressão
function calculate() {
  var expression = document.getElementById('result').value;
  var result;

  try {
    result = eval(expression);
  } catch (error) {
    result = 'Erro';
  }

  document.getElementById('result').value = result;
}

function addToMemory() {
  var result = document.getElementById('result').value;
  localStorage.setItem('memory', result);
}

function recallMemory() {
  var memory = localStorage.getItem('memory');
  if (memory !== null) {
    document.getElementById('result').value += memory;
  }
}

function clearMemory() {
  localStorage.removeItem('memory');
}

function clearHistory() {
  var historyList = document.getElementById('history-list');
  historyList.innerHTML = '';
}

function changeBackgroundColor() {
  var colorSelect = document.getElementById('color-select');
  var selectedColor = colorSelect.value;
  var calculator = document.querySelector('.calculator');
  calculator.style.backgroundColor = selectedColor;
}

function changeLanguage() {
  var languageSelect = document.getElementById('language-select');
  var selectedLanguage = languageSelect.value;
  /**/
  alert('Selected language: ' + selectedLanguage);
}

// Função para calcular o quadrado de um número
function square() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.pow(eval(result), 2);
}

// Função para calcular o inverso de um número
function reciprocal() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = 1 / eval(result);
}