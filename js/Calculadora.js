// Função para adicionar um elemento ao campo de texto
function append(value) {
  document.getElementById('result').value += value;
}

// Função para calcular o resultado da expressão
function calculate() {
  var expression = document.getElementById('result').value;
  var result;

  try {
    // Verificando se a expressão "yroot" está presente
    if (expression.includes("yroot")) {
      
      // Extraindo os valores de y e x da string
      var equationParts = expression.split("yroot");
      var y = parseFloat(equationParts[0]);
      var x = parseFloat(equationParts[1].split("=")[0]);

      // Calculando a raiz enésima usando Math.pow()
      result = Math.pow(x, 1 / y);
    } else {
      result = eval(expression); // Usar eval() apenas se não for uma raiz enésima
    }
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

  // Adiciona ao localStorage
  var history = localStorage.getItem('history'); // Obtem o histórico atual
  if (history) {
    history += ',' + expression; // Adiciona a nova expressão ao histórico existente
  } else {
    history = expression; // Cria um novo histórico com a primeira expressão
  }
  localStorage.setItem('history', history); // Armazena o histórico atualizado
}


// Função para fazer download do histórico
function downloadHistory() {
  var historyList = document.getElementById('history-list');
  var historyItems = historyList.getElementsByTagName('li');

  var content = '';
  for (var i = 0; i < historyItems.length; i++) {
    content += historyItems[i].textContent + '\n';
  }

  var blob = new Blob([content], {
    type: 'text/plain'
  });
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
  result1 = document.getElementById('result').value = Math.pow(eval(result), 2);
  addToHistory(result + ' = ' + result1);

}

// Função para calcular o triplo t vde um número
function squareTriple() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.pow(eval(result), 3);
  result1 = document.getElementById('result').value = Math.pow(eval(result), 3);
  addToHistory(result + ' = ' + result1);
}

// Função para calcular o inverso de um número
function reciprocal() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = 1 / eval(result);
  result1 = document.getElementById('result').value = 1 / eval(result);
  addToHistory('1/' + result + ' = ' + result1);
}

function log() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.log10(eval(result));
  result1 = document.getElementById('result').value = Math.log10(eval(result));
  addToHistory('log(' + result + ')' + ' = ' + result1);
}

function ln() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.LN2(eval(result));
  result1 = document.getElementById('result').value = Math.LN2(eval(result));
  addToHistory('ln(' + result + ')' + ' = ' + result1);
}

// Função para calcular o valor absoluto de um número
function absolute() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.abs(eval(result));
  result1 = document.getElementById('result').value = Math.abs(eval(result));
  addToHistory("|" + result + "|" + ' = ' + result1);
}

// Função para calcular a exponencial de um número
function exponential() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.exp(eval(result));
  addToHistory(result + ' = ' + result1);
}

// Função para calcular o módulo de um número
function modulo() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.abs(eval(result));
  result1 = document.getElementById('result').value = Math.abs(eval(result));
  addToHistory(result + ' = ' + result1);
}

// Função para calcular a raiz quadrada de um número
function squareRoot() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = Math.sqrt(eval(result));
  result1 = document.getElementById('result').value = Math.sqrt(eval(result));
  addToHistory(result + ' = ' + result1);
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
  addToHistory(result + '!' + ' = ' + factorial);
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
  var calculatorDiv = document.querySelector(".calculator");

  calculatorDiv.style.backgroundColor = color;

}

function openConversionPage(option) {
  if (option === 'comprimento') {
    window.open('pages/comprimento.html', '_blank');
  } else if (option === 'temperatura') {
    window.open('pages/temperatura.html', '_blank');
  } else if (option === 'massa') {
    window.open('pages/massa.html', '_blank');
  } else if (option === 'calculadora') {
    window.open('pages/index.html', '_blank');
  }
}

// Mapeamento das traduções
const translations = {
  'calculator.title': {
    pt: 'Calculadora Científica',
    en: 'Scientific Calculator',
    fr: 'Calculatrice Scientifique',
    ja: '科学電卓',
    zh: '科学计算器'
  },
  'calculator.op1': {
    pt: 'Calculadora Científica',
    en: 'Scientific Calculator',
    fr: 'Calculatrice Scientifique',
    ja: '科学電卓',
    zh: '科学计算器'
  },
  'calculator.op2': {
    pt: 'Comprimento',
    en: 'Length',
    fr: 'Longueur',
    ja: '長さ',
    zh: '长度'
  },
  'calculator.op3': {
    pt: 'Temperatura',
    en: 'Temperature',
    fr: 'Température',
    ja: '温度',
    zh: '温度'
  },
  'calculator.op4': {
    pt: 'Massa',
    en: 'Mass',
    fr: 'Masse',
    ja: '質量',
    zh: '大量的'
  },
  'calculator.history': {
    pt: 'Histórico',
    en: 'History',
    fr: 'Histoire',
    ja: '歴史',
    zh: '大量的'
  },
  'calculator.delete': {
    pt: 'Limpar histórico',
    en: 'Clean history',
    fr: 'Limpar historique',
    ja: 'リンパーの歴史',
    zh: '历史沿革'
  },
  'calculator.download': {
    pt: 'Baixar Histórico',
    en: 'Download History',
    fr: 'Historique des téléchargements',
    ja: 'ダウンロード履歴',
    zh: '下载历史'
  },
  'calculator.background': {
    pt: 'Fundo',
    en: 'background',
    fr: 'Arrière-plan',
    ja: 'バックグラウンド',
    zh: '背景'
  },
  'calculator.cc': {
    pt: 'Cinzento claro',
    en: 'Light grey',
    fr: 'Gris clair',
    ja: 'ライトグレー',
    zh: '浅灰色'
  },
  'calculator.vc': {
    pt: 'Verde claro',
    en: 'Light green',
    fr: 'Vert clair-plan',
    ja: 'ライトグリーン',
    zh: '浅绿色'
  },
  'calculator.rc': {
    pt: 'Rosa Claro',
    en: 'Light pink',
    fr: 'Rose clair',
    ja: 'ライトピンク',
    zh: '淡粉色'
  },
  'calculator.az': {
    pt: 'Azul',
    en: 'Blue',
    fr: 'Bleu',
    ja: '青',
    zh: '蓝色的'
  },
  'calculator.la': {
    pt: 'Laranja',
    en: 'Orange',
    fr: 'Orange',
    ja: 'オレンジ',
    zh: '橙子'
  },
  'calculator.title1': {
    pt: 'Conversão de comprimento',
    en: 'Length conversion',
    fr: 'Conversion de longueur',
    ja: '長さの変換',
    zh: '长度换算'
  },
  'calculator.length': {
    pt: 'Comprimento',
    en: 'Length',
    fr: 'Longeur',
    ja: '長さ',
    zh: '长度'
  },
  'calculator.temperature': {
    pt: 'Temperatura',
    en: 'Temperature',
    fr: 'Température',
    ja: '温度',
    zh: '温度'
  },
  'calculator.mass': {
    pt: 'Massa',
    en: 'Mass',
    fr: 'Masse',
    ja: '質量',
    zh: '大量的'
  },
  'calculator.sc': {
    pt: 'Calculadora Científica',
    en: 'Scientific Calculator',
    fr: 'Calculatrice Scientifique',
    ja: '科学電卓',
    zh: '科学计算器'
  },
  'calculator.input': {
    pt: 'Unidade de entrada',
    en: 'Input unit',
    fr: "l'unité d'entrée",
    ja: '入力ユニット',
    zh: '输入单元'
  },
  'calculator.output': {
    pt: 'Unidade de saída',
    en: 'Output unit',
    fr: 'Unité de sortie',
    ja: '出力ユニット',
    zh: '输出单元'
  },
  'calculator.meter': {
    pt: 'Metro',
    en: 'Meter',
    fr: 'Mètre',
    ja: 'メートル',
    zh: '米'
  },
  'calculator.cm': {
    pt: 'Centímetro',
    en: 'Centimeter',
    fr: 'Centimètre',
    ja: 'センチメートル',
    zh: '厘米'
  },
  'calculator.km': {
    pt: 'Quilômetro',
    en: 'Kilometer',
    fr: 'Kilomètre',
    ja: 'キロメートル',
    zh: '公里'
  },
  'calculator.ml': {
    pt: 'Milímetro',
    en: 'Millimeter',
    fr: 'Millimètre',
    ja: 'ミリメートル',
    zh: '毫米'
  },
  'calculator.ja': {
    pt: 'Jarda',
    en: 'Yard',
    fr: 'Cour',
    ja: 'ヤード',
    zh: '院子'
  },
  'calculator.na': {
    pt: 'Nanômetro',
    en: 'Nanometer',
    fr: 'Nanomètre',
    ja: 'ナノメートル',
    zh: '纳米'
  },
  'calculator.title2': {
    pt: 'Conversão de massa e peso',
    en: 'Conversion of mass and weight',
    fr: 'Conversion de la masse et du poids',
    ja: '質量と重量の換算',
    zh: '质量和重量的换算'
  },
  'calculator.kg': {
    pt: 'Quilograma',
    en: 'Kilogram',
    fr: 'Kilogramme',
    ja: 'キログラム',
    zh: '公斤'
  },
  'calculator.gr': {
    pt: 'Grama',
    en: 'Gram',
    fr: 'Gramme',
    ja: 'グラム',
    zh: '公克'
  },
  'calculator.ml': {
    pt: 'Miligrama',
    en: 'Milligram',
    fr: 'Milligramme',
    ja: 'ミリグラム',
    zh: '毫克'
  },
  'calculator.mcr': {
    pt: 'Micrograma',
    en: 'Microgram',
    fr: 'Microgramme',
    ja: 'マイクログラム',
    zh: '微克'
  },
  'calculator.to': {
    pt: 'Tonelada',
    en: 'Ton',
    fr: 'Tonne',
    ja: 'トン',
    zh: '公吨'
  },
  'calculator.li': {
    pt: 'Libra',
    en: 'Pound',
    fr: 'Livre',
    ja: 'オレポンド',
    zh: '磅'
  },
  'calculator.on': {
    pt: 'Onça',
    en: 'Once',
    fr: 'Orange',
    ja: 'オンス',
    zh: '盎司'
  },
  'calculator.title3': {
    pt: 'Conversão de temperatura',
    en: 'Temperature conversion',
    fr: 'Conversion de température',
    ja: '温度変換',
    zh: '温度转换'
  },
  'calculator.ce': {
    pt: 'Celsius',
    en: 'Celsius',
    fr: 'Celsius',
    ja: '摂氏',
    zh: '摄氏度'
  },
  'calculator.fa': {
    pt: 'Fahrenheit',
    en: 'Fahrenheit',
    fr: 'Fahrenheit',
    ja: '華氏',
    zh: '华氏温度'
  },
  'calculator.ke': {
    pt: 'Kelvin',
    en: 'Kelvin',
    fr: 'Kelvin',
    ja: 'ケルビン',
    zh: '开尔文'
  }

};

// Função para traduzir o conteúdo
function translateContent() {
  const langSelect = document.getElementById('language-select');
  const lang = langSelect.value;

  // Percorre todos os elementos com atributo 'data-lang-key'
  const elements = document.querySelectorAll('[data-lang-key]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-lang-key');
    if (translations[key] && translations[key][lang]) {
      element.textContent = translations[key][lang];
    }
  });
}

// Adicionar evento de mudança ao <select>
const langSelect = document.getElementById('language-select');
langSelect.addEventListener('change', translateContent);

// Traduzir conteúdo inicial
translateContent();

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

function sin() {
  var expression = document.getElementById('result').value;
  var degrees = document.getElementById("result").value;
  var radians = degrees * (Math.PI / 180);
  var result = Math.sin(radians);

  if (Number.isInteger(result)) {
    result = result.toFixed(0); // Convert to a whole number string
  } else {
    result = result.toFixed(16); // Keep up to 16 decimal places
  }
  document.getElementById('result').value = result;
  addToHistory("sin(" + expression + ")" + ' = ' + result);
}

function cos() {
  var expression = document.getElementById('result').value;
  var degrees = document.getElementById("result").value;
  var radians = degrees * (Math.PI / 180);
  var result = Math.cos(radians);

  if (Math.abs(result - Math.round(result)) < Number.EPSILON) {
    result = Math.round(result); // Round the result to remove decimal places for integer values
  } else {
    result = result.toFixed(16); // Keep up to 16 decimal places for non-integer values
  }

  document.getElementById('result').value = result;
  addToHistory("cos(" + expression + ")" + ' = ' + result);
}

function tan() {

  var expression = document.getElementById('result').value;
  var degrees = document.getElementById("result").value;
  var radians = degrees * (Math.PI / 180);
  var result = Math.tan(radians);

  if (Math.abs(degrees % 90) === 0 && Math.abs(degrees % 180) !== 0) {
    result = "Entrada inválida"; // Handle multiples of 90 degrees (except multiples of 180 degrees)
  } else if (Math.abs(result - Math.round(result)) < Number.EPSILON) {
    result = Math.round(result); // Round the result to remove decimal places for integer values
  } else {
    result = result.toFixed(16); // Keep up to 16 decimal places for non-integer values
  }

  document.getElementById('result').value = result;
  addToHistory("tan(" + expression + ")" + ' = ' + result);
}

function euler() {
  var expression = document.getElementById('result').value;
  var eulerValue = Math.E;
  document.getElementById("result").value = eulerValue;
  addToHistory(expression + ' = ' + result);
}

function eulerExp() {

  var expression = document.getElementById('result').value;
  var exponent = document.getElementById("result").value;
  var result = Math.pow(Math.E, exponent);

  if (Math.abs(result - Math.round(result)) < Number.EPSILON) {
    result = Math.round(result); // Show integer result without decimal part
  } else {
    result = result.toFixed(16); // Keep up to 16 decimal places for non-integer values
  }

  document.getElementById("result").value = result;
  addToHistory("eulerExp(" + expression + ")" + ' = ' + result);
}

function asin() {
  var expression = document.getElementById('result').value;
  var value = document.getElementById("result").value;

  if (value >= -1 && value <= 1) {
    var result = Math.asin(value) * (180 / Math.PI); // Convert result to degrees
    document.getElementById("result").value = result;
    addToHistory("asin(" + expression + ")" + ' = ' + result);
  } else {
    document.getElementById("result").value = "Entrada inválida";
  }
}

function acos() {
  var expression = document.getElementById('result').value;
  var value = document.getElementById("result").value;

  if (value >= -1 && value <= 1) {
    var result = Math.acos(value);
    result = (result * 180) / Math.PI; // Convert result to degrees
    document.getElementById("result").value = result;
    addToHistory("acos(" + expression + ")" + ' = ' + result);
  } else {
    document.getElementById("result").value = "Entrada inválida";
  }
}

function atan() {
  var expression = document.getElementById('result').value;
  var value = document.getElementById("result").value;
  var result = Math.atan(parseFloat(value)) * (180 / Math.PI); // Calculate arctan and convert to degrees

  document.getElementById("result").value = result;
  addToHistory("atan(" + expression + ")" + ' = ' + result);
}

function sec() {

  var expression = document.getElementById('result').value;
  var angle = document.getElementById("result").value;
  var radians = angle * (Math.PI / 180);
  var cosine = Math.cos(radians);

  if (Math.abs(cosine) < Number.EPSILON) {
    document.getElementById("result").value = "Não é possível dividir por zero";
    return;
  }

  var result = 1 / cosine;

  if (Number.isInteger(result)) {
    result = Math.round(result); // Show integer result without decimal part
  } else {
    result = result.toFixed(16); // Keep up to 16 decimal places for non-integer values
  }

  document.getElementById("result").value = result;
  addToHistory(expression + ' = ' + result);
}


function cosc() {
  var expression = document.getElementById('result').value;
  var input = document.getElementById("result").value;
  var angle = parseFloat(input);

  if (Math.sin(angle * (Math.PI / 180)) === 0) {
    document.getElementById("result").value = "Não é possível dividir por zero";
    return;
  }

  var result = 1 / Math.sin(angle * (Math.PI / 180));

  if (Math.abs(result - Math.round(result)) < Number.EPSILON) {
    result = Math.round(result); // Show integer result without decimal part
  } else {
    result = result.toFixed(16); // Keep up to 16 decimal places for non-integer values
  }

  document.getElementById("result").value = result;
  addToHistory("cot(" + expression + ")" + ' = ' + result);
}

function cot() {
  var expression = document.getElementById('result').value;
  var input = document.getElementById("result").value;
  var angle = parseFloat(input);
  var tangent = Math.tan(angle * (Math.PI / 180)); // Calculate tangent in radians

  if (Math.abs(Math.cos(angle * (Math.PI / 180))) < Number.EPSILON) {
    if (Math.abs(Math.sin(angle * (Math.PI / 180))) < Number.EPSILON) {
      document.getElementById("result").value = "Não é possível dividir por zero"; // Angle is an integer multiple of 180 degrees
    } else {
      document.getElementById("result").value = "Entrada inválida"; // Angle falls on a vertical asymptote
    }
    return;
  }

  if (Math.abs(tangent) < Number.EPSILON) {
    document.getElementById("result").value = "Não é possível dividir por zero";
    return;
  }

  var result = 1 / tangent;

  if (Math.abs(result - Math.round(result)) < Number.EPSILON) {
    result = Math.round(result); // Show integer result without decimal part
  } else {
    result = result.toFixed(16); // Keep up to 16 decimal places for non-integer values
  }

  document.getElementById("result").value = result;
  addToHistory("cot(" + expression + ")" + ' = ' + result);

}

function phi() {
  var expression = document.getElementById('result').value;
  var phiValue = Math.PI;
  document.getElementById("result").value = phiValue;
  addToHistory(expression + ' = ' + phiValue);
}

function calculateRoot() {
  var input = document.getElementById("result").value;

  var indices = input.match(/\d+/g); // Extract all numbers from the input
  var index = parseInt(indices[0]); // Parse the first number as the index of the root
  var radicand = parseFloat(indices[1]); // Parse the second number as the radicand

  var result = Math.pow(radicand, 1 / index);

  document.getElementById("result").value = result;
}

