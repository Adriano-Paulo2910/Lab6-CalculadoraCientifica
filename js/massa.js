// Função para adicionar o resultado atual ao histórico
function addToHistory(expression) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(expression));
    document.getElementById('history-list').appendChild(li);
  }

  //Função que converte a massa
function converterMassa() {
    var valorEntrada = parseFloat(document.getElementById("result").value);
    var unidadeEntrada = document.getElementById("unidadeEntrada").value;
    var unidadeSaida = document.getElementById("unidadeSaida").value;
  
    // Realizar as conversões
    var resultado;
  
    if (unidadeEntrada === unidadeSaida) {
      resultado = valorEntrada;
    } else if (unidadeEntrada === "quilograma") {
      if (unidadeSaida === "grama") {
        resultado = valorEntrada * 1000;
      } else if (unidadeSaida === "miligrama") {
        resultado = valorEntrada * 1e+6;
      } else if (unidadeSaida === "micrograma") {
        resultado = valorEntrada * 1e+9;
      } else if (unidadeSaida === "tonelada") {
        resultado = valorEntrada / 1000;
      } else if (unidadeSaida === "libra") {
        resultado = valorEntrada * 2.20462;
      } else if (unidadeSaida === "onca") {
        resultado = valorEntrada * 35.274;
      }
    } else if (unidadeEntrada === "grama") {
      if (unidadeSaida === "quilograma") {
        resultado = valorEntrada / 1000;
      } else if (unidadeSaida === "miligrama") {
        resultado = valorEntrada * 1000;
      } else if (unidadeSaida === "micrograma") {
        resultado = valorEntrada * 1e+6;
      } else if (unidadeSaida === "tonelada") {
        resultado = valorEntrada / 1e+6;
      } else if (unidadeSaida === "libra") {
        resultado = valorEntrada / 453.592;
      } else if (unidadeSaida === "onca") {
        resultado = valorEntrada / 28.3495;
      }
    } else if (unidadeEntrada === "miligrama") {
      if (unidadeSaida === "quilograma") {
        resultado = valorEntrada / 1e+6;
      } else if (unidadeSaida === "grama") {
        resultado = valorEntrada / 1000;
      } else if (unidadeSaida === "micrograma") {
        resultado = valorEntrada * 1000;
      } else if (unidadeSaida === "tonelada") {
        resultado = valorEntrada / 1e+9;
      } else if (unidadeSaida === "libra") {
        resultado = valorEntrada / 453592.37;
      } else if (unidadeSaida === "onca") {
        resultado = valorEntrada / 28349.523;
      }
    } else if (unidadeEntrada === "micrograma") {
      if (unidadeSaida === "quilograma") {
        resultado = valorEntrada / 1e+9;
      } else if (unidadeSaida === "grama") {
        resultado = valorEntrada / 1e+6;
      } else if (unidadeSaida === "miligrama") {
        resultado = valorEntrada / 1000;
      } else if (unidadeSaida === "tonelada") {
        resultado = valorEntrada / 1e+12;
      } else if (unidadeSaida === "libra") {
        resultado = valorEntrada / 4.5359237e+8;
      } else if (unidadeSaida === "onca") {
        resultado = valorEntrada / 2.8349523e+7;
      }
    } else if (unidadeEntrada === "tonelada") {
      if (unidadeSaida === "quilograma") {
        resultado = valorEntrada * 1000;
      } else if (unidadeSaida === "grama") {
        resultado = valorEntrada * 1e+6;
      } else if (unidadeSaida === "miligrama") {
        resultado = valorEntrada * 1e+9;
      } else if (unidadeSaida === "micrograma") {
        resultado = valorEntrada * 1e+12;
      } else if (unidadeSaida === "libra") {
        resultado = valorEntrada * 2204.62;
      } else if (unidadeSaida === "onca") {
        resultado = valorEntrada * 35273.962;
      }
    } else if (unidadeEntrada === "libra") {
      if (unidadeSaida === "quilograma") {
        resultado = valorEntrada / 2.20462;
      } else if (unidadeSaida === "grama") {
        resultado = valorEntrada * 453.592;
      } else if (unidadeSaida === "miligrama") {
        resultado = valorEntrada * 453592.37;
      } else if (unidadeSaida === "micrograma") {
        resultado = valorEntrada * 4.5359237e+8;
      } else if (unidadeSaida === "tonelada") {
        resultado = valorEntrada / 2204.62;
      } else if (unidadeSaida === "onca") {
        resultado = valorEntrada * 16;
      }
    } else if (unidadeEntrada === "onca") {
      if (unidadeSaida === "quilograma") {
        resultado = valorEntrada / 35.274;
      } else if (unidadeSaida === "grama") {
        resultado = valorEntrada * 28.3495;
      } else if (unidadeSaida === "miligrama") {
        resultado = valorEntrada * 28349.523;
      } else if (unidadeSaida === "micrograma") {
        resultado = valorEntrada * 2.8349523e+7;
      } else if (unidadeSaida === "tonelada") {
        resultado = valorEntrada / 35273.962;
      } else if (unidadeSaida === "libra") {
        resultado = valorEntrada / 16;
      }
    }
  
    console.log(resultado);
    // Exibir o resultado
    document.getElementById("result").value = resultado;
    addToHistory(valorEntrada + ' ' + unidadeEntrada + ' = ' + resultado + ' ' + unidadeSaida);
  }
  