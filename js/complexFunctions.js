function sin() {
    var degrees = document.getElementById("result").value;
    var radians = degrees * (Math.PI / 180);
    var result = Math.sin(radians);
    
    if (Number.isInteger(result)) {
        result = result.toFixed(0); // Convert to a whole number string
    } else {
        result = result.toFixed(16); // Keep up to 16 decimal places
    }
    document.getElementById('result').value = result;
}

function cos() {
    var degrees = document.getElementById("result").value;
    var radians = degrees * (Math.PI / 180);
    var result = Math.cos(radians);

    if (Math.abs(result - Math.round(result)) < Number.EPSILON) {
        result = Math.round(result); // Round the result to remove decimal places for integer values
    } else {
        result = result.toFixed(16); // Keep up to 16 decimal places for non-integer values
    }

    document.getElementById('result').value = result;
}

function tan() {
    
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
}

function euler(){
    var eulerValue = Math.E;
    document.getElementById("result").value = eulerValue;
}

function eulerExp(){
    
    var exponent = document.getElementById("result").value;
    
    var result = Math.pow(Math.E, exponent);

    if (Math.abs(result - Math.round(result)) < Number.EPSILON) {
        result = Math.round(result); // Show integer result without decimal part
      } else {
        result = result.toFixed(16); // Keep up to 16 decimal places for non-integer values
      }
    
    document.getElementById("result").value = result;
}

function asin() {
    var value = document.getElementById("result").value;

    if (value >= -1 && value <= 1) {
      var result = Math.asin(value) * (180 / Math.PI); // Convert result to degrees
      document.getElementById("result").value = result;
    } else {
        document.getElementById("result").value = "Entrada inválida";
    }
}

function acos() {
    var value = document.getElementById("result").value;

    if (value >= -1 && value <= 1) {
      var result = Math.acos(value);
      result = (result * 180) / Math.PI; // Convert result to degrees
      document.getElementById("result").value = result;
    } else {
        document.getElementById("result").value = "Entrada inválida";
    }
}

function atan() {

    var value = document.getElementById("result").value;
    var result = Math.atan(parseFloat(value)) * (180 / Math.PI); // Calculate arctan and convert to degrees

    document.getElementById("result").value = result;
}

function cubic() {
    var value = document.getElementById("result").value;
    var number = parseFloat(value);
    var result = Math.pow(number, 3); // Calculate cubic function

    document.getElementById("result").value = result;
}

function calculate(){
    var input = document.getElementById("result").value;

    var valueIndex = input.indexOf('*');
    var percentageIndex = input.indexOf('%');
    /*EQUIVALENT TO PERCENT FUNCTION */
    if(valueIndex != -1 && percentageIndex != -1){

    if (valueIndex !== -1 && percentageIndex !== -1) {
      var value = parseFloat(input.substring(0, valueIndex));
      var percentage = parseFloat(input.substring(valueIndex + 1, percentageIndex));
      var result = (value * percentage) / 100;

      document.getElementById("result").value = result;
    } else {
      document.getElementById("result").value = "Entrada inválida";
    }
}
}

function sec(){

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
}


function cosc() {
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
}

function cot() {
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
}
/*Não está funcional*/
function calculateRoot() {
    var input = document.getElementById("result").value;

    var indices = input.match(/\d+/g); // Extract all numbers from the input
    var index = parseInt(indices[0]); // Parse the first number as the index of the root
    var radicand = parseFloat(indices[1]); // Parse the second number as the radicand

    var result = Math.pow(radicand, 1 / index);

    document.getElementById("result").value = result;
  }

function phi() {
    var phiValue = Math.PI;
    document.getElementById("result").value = phiValue;
}
