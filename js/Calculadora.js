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

    function calculate() {
      var expression = document.getElementById('result').value;
      var result = eval(expression);

      document.getElementById('result').value = result;

      var historyItem = document.createElement('li');
      historyItem.innerText = expression + ' = ' + result;
      historyList.appendChild(historyItem);
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
      /*Não está funcional, mostra apenas um alert*/
      alert('Selected language: ' + selectedLanguage);
    }