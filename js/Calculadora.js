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

// Função para fazer download do histórico
function downloadHistory() {
  var historyList = document.getElementById('history-list');
  var historyItems = historyList.getElementsByTagName('li');
  
  var content = '';
  for (var i = 0; i < historyItems.length; i++) {
    content += historyItems[i].textContent + '\n';
  }
  
  var blob = new Blob([content], { type: 'text/plain' });
  var url = URL.createObjectURL(blob);
  
  var downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'historico.txt';
  downloadLink.click();
}

// Adicionar evento de clique para o botão "Download Histórico"
document.getElementById('btn-download').addEventListener('click', downloadHistory);

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
    window.open('pages/comprimento.html', '_blank');
  } else if (option === 'temperatura') {
    window.open('pages/temperatura.html', '_blank');
  } else if (option === 'massa') {
    window.open('pages/massa.html', '_blank');
  }
  else if (option === 'calculadora') {
    window.open('pages/index.html', '_blank');
  }
}

//inicio dos idiomas 
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const h3El = document.querySelector('.h3');
const hisEl = document.querySelector('.his');
const labelEl = document.querySelector('.label');
const ccEl = document.querySelector('.cc');
const vcEl = document.querySelector('.vc');
const rcEl = document.querySelector('.rc');
const azEl = document.querySelector('.az');
const ptEl = document.querySelector('.pt');

const caEl = document.querySelector('.ca');
const coEl = document.querySelector('.co');
const teEl = document.querySelector('.te');
const maEl = document.querySelector('.ma');


link.forEach(el =>{
  el.addEventListener('click', () =>  {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');

    h3El.textContent = data[attr].h3;
    hisEl.textContent = data[attr].his;
    labelEl.textContent = data[attr].label;
    ccEl.textContent = data[attr].cc;
    vcEl.textContent = data[attr].vc;
    rcEl.textContent = data[attr].rc;
    azEl.textContent = data[attr].az;
    ptEl.textContent = data[attr].pt;

    caEl.textContent = data[attr].ca;
    coEl.textContent = data[attr].co;
    teEl.textContent = data[attr].te;
    maEl.textContent = data[attr].ma;

  })
});

//Idiomas da calculadora
var data ={
  "portuguese":{
    "h3" : "Histórico",
    "his": "Limpar histórico",
    "label": "Fundo",
    "cc": "Cinzento claro",
    "vc": "Verde claro",
    "rc": "Rosa claro",
    "az": "Azul",
    "pt": "Preto",
    "ca": "Calculadora Científica",
    "co": "Comprimento",
    "te": "Temperatura",
    "ma": "Massa"
  },"english":{
    "h3" : "History",
    "his": "Clear history",
    "label": "Background",
    "cc": "Light grey",
    "vc": "Light green",
    "rc": "Light pink",
    "az": "Blue",
    "pt": "Black",
    "ca": "Scientific Calculator",
    "co": "Length",
    "te": "Temperature",
    "ma": "Mass"
  },"french":{
    "h3" : "Historique",
    "his": "Effacer l'historique",
    "label": "Arrière-plan",
    "cc": "Gris clair",
    "vc": "Vert clair",
    "rc": "Rose clair",
    "az": "Bleu",
    "pt": "Noir",
    "ca": "Calculatrice Scientifique",
    "co": "Longueur",
    "te": "Température",
    "ma": "Masse"
  },"japanese":{
    "h3" : "ヒストリコ",
    "his": "履歴をクリア",
    "label": "バックグラウンド",
    "cc": "ライトグレー",
    "vc": "ライトグリーン",
    "rc": "ライトピンク",
    "az": "青",
    "pt": "黒",
    "ca": "関数電卓",
    "co": "長さ",
    "te": "温度",
    "ma": "質量"
  },"chinese":{
    "h3" : "历史",
    "his": "清除历史记录",
    "label": "背景",
    "cc": "浅灰色",
    "vc": "蓝色的",
    "rc": "黑色的",
    "az": "蓝色的",
    "pt": "黑色的",
    "ca": "科学计算器",
    "co": "长度",
    "te": "温度",
    "ma": "质量"
  }

}

// Função para verificar se a tecla pressionada é o Enter
function verificarTecla(event) {
  if (event.keyCode === 13) {
    calculate();
  }
}

// Obtém o elemento do campo de texto
var inputElement = document.getElementById("result");

// Adiciona o evento de tecla pressionada ao campo de texto
inputElement.addEventListener("keydown", verificarTecla);

