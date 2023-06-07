function appendToDisplay(value) {
    var display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    var display = document.getElementById("display");
    var equation = document.getElementById("equation");
    display.value = "";
    equation.value = "";
}

function deleteLastChar() {
    var display = document.getElementById("display");
    var equation = document.getElementById("equation");
    display.value = display.value.slice(0, -1);
    equation.value = display.value;
}

function evaluateExpression() {
    var display = document.getElementById("display");
    var equation = document.getElementById("equation");
    if(display.value == "")
    {
        display.value = "0"
    }
    equation.value = display.value;
    display.value = eval(display.value);
}