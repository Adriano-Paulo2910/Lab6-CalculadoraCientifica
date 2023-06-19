// Função para adicionar o resultado atual ao histórico
function addToHistory(expression) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(expression));
    document.getElementById('history-list').appendChild(li);
  }

  //Função  que converte o comprimento
function convertComprimento() {
    var valorEntrada = parseFloat(document.getElementById("result").value);
    var unidadeEntrada = document.getElementById("unidadeEntrada").value;
    var unidadeSaida = document.getElementById("unidadeSaida").value;
  
    // Realizar as conversões
    var resultado;
  
    if (unidadeEntrada === unidadeSaida) {
      resultado = valorEntrada;
    } else if (unidadeEntrada === "metro") {
      if (unidadeSaida === "centimetro") {
        resultado = valorEntrada * 100;
      } else if (unidadeSaida === "quilometro") {
        resultado = valorEntrada / 1000;
      } else if (unidadeSaida === "milimetro") {
        resultado = valorEntrada * 1000;
      } else if (unidadeSaida === "jardas") {
        resultado = valorEntrada * 1.09361;
      } else if (unidadeSaida === "nanometro") {
        resultado = valorEntrada * 1e+9;
      }
    } else if (unidadeEntrada === "centimetro") {
      if (unidadeSaida === "metro") {
        resultado = valorEntrada / 100;
      } else if (unidadeSaida === "quilometro") {
        resultado = valorEntrada / 100000;
      } else if (unidadeSaida === "milimetro") {
        resultado = valorEntrada * 10;
      } else if (unidadeSaida === "jardas") {
        resultado = valorEntrada * 0.0109361;
      } else if (unidadeSaida === "nanometro") {
        resultado = valorEntrada * 1e+7;
      }
    } else if (unidadeEntrada === "quilometro") {
      if (unidadeSaida === "metro") {
        resultado = valorEntrada * 1000;
      } else if (unidadeSaida === "centimetro") {
        resultado = valorEntrada * 100000;
      } else if (unidadeSaida === "milimetro") {
        resultado = valorEntrada * 1e+6;
      } else if (unidadeSaida === "jardas") {
        resultado = valorEntrada * 1093.61;
      } else if (unidadeSaida === "nanometro") {
        resultado = valorEntrada * 1e+12;
      }
    } else if (unidadeEntrada === "milimetro") {
      if (unidadeSaida === "metro") {
        resultado = valorEntrada / 1000;
      } else if (unidadeSaida === "centimetro") {
        resultado = valorEntrada / 10;
      } else if (unidadeSaida === "quilometro") {
        resultado = valorEntrada / 1e+6;
      } else if (unidadeSaida === "jardas") {
        resultado = valorEntrada * 0.00109361;
      } else if (unidadeSaida === "nanometro") {
        resultado = valorEntrada * 1e+6;
      }
    } else if (unidadeEntrada === "jardas") {
      if (unidadeSaida === "metro") {
        resultado = valorEntrada / 1.09361;
      } else if (unidadeSaida === "centimetro") {
        resultado = valorEntrada / 0.0109361;
      } else if (unidadeSaida === "quilometro") {
        resultado = valorEntrada / 1093.61;
      } else if (unidadeSaida === "milimetro") {
        resultado = valorEntrada / 0.00109361;
      } else if (unidadeSaida === "nanometro") {
        resultado = valorEntrada * 9.144e+8;
      }
    } else if (unidadeEntrada === "nanometro") {
      if (unidadeSaida === "metro") {
        resultado = valorEntrada / 1e+9;
      } else if (unidadeSaida === "centimetro") {
        resultado = valorEntrada / 1e+7;
      } else if (unidadeSaida === "quilometro") {
        resultado = valorEntrada / 1e+12;
      } else if (unidadeSaida === "milimetro") {
        resultado = valorEntrada / 1e+6;
      } else if (unidadeSaida === "jardas") {
        resultado = valorEntrada / 9.144e+8;
      }
    }
  
    // Exibir o resultado
    console.log(resultado);
    document.getElementById("result").value = resultado;
    addToHistory(valorEntrada + ' ' + unidadeEntrada + ' = ' + resultado + ' ' + unidadeSaida);
  }
