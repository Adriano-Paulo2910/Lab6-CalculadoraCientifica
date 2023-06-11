// Função para adicionar um elemento ao campo de texto
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
  addToHistory(expression + ' = ' + result);
}

// Função para adicionar o resultado atual ao histórico
function addToHistory(expression) {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(expression));
  document.getElementById('history-list').appendChild(li);
}

// Função para limpar o histórico
function clearHistory() {
  var historyList = document.getElementById('history-list');
  while (historyList.firstChild) {
    historyList.removeChild(historyList.firstChild);
  }
}

// Função para limpar o campo de texto
function clearResult() {
  document.getElementById('result').value = '';
}

// Função para remover o último caractere do campo de texto
function backspace() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}

// Função para adicionar o número à memória
function addToMemory() {
  var result = document.getElementById('result').value;
  localStorage.setItem('memory', result);
}

// Função para recuperar o valor da memória
function recallMemory() {
  var memory = localStorage.getItem('memory');
  if (memory) {
    document.getElementById('result').value += memory;
  }
}

// Função para limpar o valor da memória
function clearMemory() {
  localStorage.removeItem('memory');
}

// Função para calcular o quadrado de um número
function square() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.pow(eval(result), 2);
}

// Função para calcular o triplo t vde um número
function squareTriple() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.pow(eval(result), 3);
}

// Função para calcular o inverso de um número
function reciprocal() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = 1 / eval(result);
}

// Função para calcular o valor absoluto de um número
function absolute() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.abs(eval(result));
}

// Função para calcular a exponencial de um número
function exponential() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.exp(eval(result));
}

// Função para calcular o módulo de um número
function modulo() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.abs(eval(result));
}

// Função para calcular a raiz quadrada de um número
function squareRoot() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.sqrt(eval(result));
}

// Função para adicionar parênteses ao redor da expressão
function addParentheses() {
  var result = document.getElementById('result');
  var startPosition = result.selectionStart;
  var endPosition = result.selectionEnd;
  var selectedText = result.value.substring(startPosition, endPosition);
  result.value =
    result.value.substring(0, startPosition) +
    '(' +
    selectedText +
    ')' +
    result.value.substring(endPosition, result.value.length);
}

// Função para calcular o fatorial de um número
function factorial() {
  var result = document.getElementById('result').value;
  var num = parseInt(eval(result));
  var factorial = 1;

  if (num < 0) {
    document.getElementById('result').value = 'Erro';
    return;
  }

  for (var i = 2; i <= num; i++) {
    factorial *= i;
  }

  document.getElementById('result').value = factorial;
}

// Função para alterar o idioma da calculadora
function changeLanguage() {
  var languageSelect = document.getElementById('language-select');
  var language = languageSelect.options[languageSelect.selectedIndex].value;

  // Aqui você pode adicionar o código para alterar o idioma da calculadora de acordo com a opção selecionada
}

// Função para alterar a cor de fundo da calculadora
function changeBackgroundColor() {
  var colorSelect = document.getElementById('color-select');
  var color = colorSelect.options[colorSelect.selectedIndex].value;
  document.body.style.backgroundColor = color;
}

function openConversionPage(option) {
  if (option === 'comprimento') {
    window.open('comprimento.html', '_blank');
  } else if (option === 'temperatura') {
    window.open('temperatura.html', '_blank');
  } else if (option === 'massa') {
    window.open('massa.html', '_blank');
  }
}