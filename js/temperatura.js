// Função para adicionar o resultado atual ao histórico
function addToHistory(expression) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(expression));
    document.getElementById('history-list').appendChild(li);
  }

//Função que converte a temperatura
function converterTemperatura() {
    var valorEntrada = parseFloat(document.getElementById("result").value);
    var unidadeEntrada = document.getElementById("unidadeEntrada").value;
    var unidadeSaida = document.getElementById("unidadeSaida").value;
  
    // Realizar as conversões
    var resultado;
  
    if (unidadeEntrada === unidadeSaida) {
      resultado = valorEntrada;
    } else if (unidadeEntrada === "celsius") {
      if (unidadeSaida === "fahrenheit") {
        resultado = (valorEntrada * 9 / 5) + 32;
      } else if (unidadeSaida === "kelvin") {
        resultado = valorEntrada + 273.15;
      }
    } else if (unidadeEntrada === "fahrenheit") {
      if (unidadeSaida === "celsius") {
        resultado = (valorEntrada - 32) * 5 / 9;
      } else if (unidadeSaida === "kelvin") {
        resultado = (valorEntrada - 32) * 5 / 9 + 273.15;
      }
    } else if (unidadeEntrada === "kelvin") {
      if (unidadeSaida === "celsius") {
        resultado = valorEntrada - 273.15;
      } else if (unidadeSaida === "fahrenheit") {
        resultado = (valorEntrada - 273.15) * 9 / 5 + 32;
      }
    }
  
    // Exibir o resultado
    console.log(resultado);
    document.getElementById("result").value = resultado;
    addToHistory(valorEntrada + ' ' + unidadeEntrada + ' = ' + resultado + ' ' + unidadeSaida);
  }