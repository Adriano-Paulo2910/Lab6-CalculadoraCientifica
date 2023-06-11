<!DOCTYPE html>
<html lang="pt">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/Calculadora.css">
  <title>Calculadora Científica</title>
</head>

<body>
  <div class="calculator">
    <div class="column">
      <input type="text" id="result" readonly>

      <div class="row">
        <div class="button" onclick="addToMemory()">M+</div>
        <div class="button" onclick="recallMemory()">MR</div>
        <div class="button" onclick="clearMemory()">MC</div>
        <div class="button" onclick="clearResult()">C</div>
        <div class="button" onclick="backspace()">&#9003;</div>
      </div>

      <div class="row">
        <div class="button operator" onclick="append('Math.sin(')">sin</div>
        <div class="button operator" onclick="append('Math.cos(')">cos</div>
        <div class="button operator" onclick="append('Math.tan(')">tan</div>
        <div class="button operator" onclick="append('Math.E')">e</div>
        <div class="button operator" onclick=""><span>e<sup>x</sup></span></div>
      </div>

      <div class="row">
        <div class="button operator" onclick="append('Math.asin(')">asin</div>
        <div class="button operator" onclick="append('Math.acos(')">acos</div>
        <div class="button operator" onclick="append('Math.atan(')">atan</div>
        <div class="button operator" onclick="append('Math.log10(')"><span>x<sup>3</sup></span></div>
        <div class="button operator" onclick="">%</div>
      </div>

      <div class="row">
        <div class="button operator" onclick="append('Math.sin(')">sec</div>
        <div class="button operator" onclick="append('Math.cos(')">cosc</div>
        <div class="button operator" onclick="append('Math.tan(')">cot</div>
        <div class="button operator" onclick="append('Math.E')"><span><sup>y</sup>&Sqrt;x</span></div>
        <div class="button operator" onclick="append('Math.PI')">π</div>
      </div>

      <div class="row">
        <div class="button operator" onclick=""><span>x<sup>2</sup></span></div>
        <div class="button operator" onclick=""><span><sup>1</sup>/x</span></div>
        <div class="button operator" onclick="">|x|</div>
        <div class="button operator" onclick="">exp</div>
        <div class="button operator" onclick="">mod</div>
      </div>

      <div class="row">
        <div class="button operator" onclick="append('Math.sqrt(')"><span><sup>2</sup>&Sqrt;x</span></div>
        <div class="button operator" onclick="">(</div>
        <div class="button operator" onclick="">)</div>
        <div class="button operator" onclick="">n!</div>
        <div class="button operator" onclick="append('/')">/</div>
      </div>

      <div class="row">
        <div class="button operator" onclick="append('Math.pow(')"><span>x<sup>y</sup></span></div>
        <div class="button" onclick="append('7')">7</div>
        <div class="button" onclick="append('8')">8</div>
        <div class="button" onclick="append('9')">9</div>
        <div class="button operator" onclick="append('*')">*</div>
      </div>

      <div class="row">
        <div class="button operator" onclick="append('Math.pow(')"><span>10<sup>x</sup></span></div>
        <div class="button" onclick="append('4')">4</div>
        <div class="button" onclick="append('5')">5</div>
        <div class="button" onclick="append('6')">6</div>
        <div class="button operator" onclick="append('-')">-</div>
      </div>

      <div class="row">
        <div class="button operator" onclick="append('Math.log(')">log</div>
        <div class="button" onclick="append('1')">1</div>
        <div class="button" onclick="append('2')">2</div>
        <div class="button" onclick="append('3')">3</div>
        <div class="button operator" onclick="append('+')">+</div>
      </div>

      <div class="row">
        <div class="button operator">ln</div>
        <div class="button"><span> <sup>+</sup>/-</span></div>
        <div class="button" onclick="append('0')">0</div>
        <div class="button" onclick="append('.')">.</div>
        <div class="button-equal" onclick="calculate()">=</div>
      </div>
    </div>

    <div class="history">
      <h3>Histórico</h3>
      <ul id="history-list"></ul>
      <button id="clear-history" onclick="clearHistory()">Limpar Histórico</button>
    </div>

    <div class="color-picker">
      <label for="color-select">Fundo:</label>
      <select id="color-select" onchange="changeBackgroundColor()">
        <option value="#f4f4f4">Padrão</option>
        <option value="#c3e6cb">Green</option>
        <option value="#f8d7da">Red</option>
        <option value="#d4edda">Teal</option>
        <option value="#000000">black</option>
      </select>
    </div>

    <div class="language-select">
      <label for="language-select">Idioma:</label>
      <select id="language-select" onchange="changeLanguage()">
        <option value="en">English</option>
        <option value="pt">Portuguese</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  </div>

  <script src="js/Calculadora.js"></script>
</body>

</html>