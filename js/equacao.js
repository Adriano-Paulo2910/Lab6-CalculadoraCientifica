function solveEquation() {
    var input = document.getElementById("result").value;
    var equationType = getEquationType(input);

    if (equationType === "linear") {
        var solution = solveLinearEquation(input);
        displayResult(solution);
    } else if (equationType === "quadratic") {
        var solutions = solveQuadraticEquation(input);
        displayResult(solutions);
    } else {
        displayError("Equação inválida");
    }
}

function getEquationType(input) {
    if (input.includes("x^2")) {
        return "quadratic";
    } else if (input.includes("x")) {
        return "linear";
    } else {
        return "invalid";
    }
}

function solveLinearEquation(input) {
    // Extrair os coeficientes da equação linear
    var parts = input.split("=");
    var expression = parts[0].trim();
    var constant = parseFloat(parts[1].trim());
    var coefficient = parseFloat(expression);

    // Calcular a solução da equação linear (x = constante / coeficiente)
    return "x = " + (constant / coefficient);
}

function solveQuadraticEquation(input) {
    // Extrair os coeficientes da equação quadrática
    var parts = input.split("=");
    var expression = parts[0].trim();
    var constant = parseFloat(parts[1].trim());

    var a, b, c;
    if (expression.includes("x^2")) {
        var aIndex = expression.indexOf("x^2");
        a = parseFloat(expression.substring(0, aIndex));
    } else {
        a = 0;
    }

    if (expression.includes("x")) {
        var bIndex = expression.indexOf("x");
        var bSubstring = expression.substring(
            expression.lastIndexOf("+", bIndex) + 1,
            bIndex
        );
        b = parseFloat(bSubstring);
    } else {
        b = 0;
    }

    c = constant;

    // Calcular as soluções da equação quadrática
    var delta = b * b - 4 * a * c;
    if (delta < 0) {
        return "Não há soluções reais";
    } else if (delta === 0) {
        var x = -b / (2 * a);
        return "Solução única: x = " + x;
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return "Soluções: x1 = " + x1 + ", x2 = " + x2;
    }
}

function displayResult(result) {
    document.getElementById("result").value = result;
    var historyList = document.getElementById("history-list");
    var listItem = document.createElement("li");
    listItem.textContent = result;
    historyList.appendChild(listItem);
}

function displayError(error) {
    var resultElement = document.getElementById("result");
    resultElement.textContent = error;
    resultElement.classList.add("error");
}

function clearHistory() {
    var historyList = document.getElementById("history-list");
    while (historyList.firstChild) {
        historyList.removeChild(historyList.firstChild);
    }
}