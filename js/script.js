function konversiSuhu() {
    var celsiusInputs = document.getElementsByClassName("input-celsius");
    var fahrenheitInputs = document.getElementsByClassName("input-fahrenheit");
    var rumusOutput = document.getElementsByClassName("input-rumus");

    var celsius = celsiusInputs[0].value;
    var fahrenheit = (celsius * 9/5) + 32;
    
    for (var i = 0; i < fahrenheitInputs.length; i++) {
        fahrenheitInputs[i].value = fahrenheit.toFixed(2);
    }
}

function resetForm() {
    var inputFields = document.getElementsByClassName("input-fahrenheit");

    for (var i = 0; i < inputFields.length; i++) {
        inputFields[i].value = "";
    }

    var inputFields = document.getElementsByClassName("input-celsius");

    for (var i = 0; i < inputFields.length; i++) {
        inputFields[i].value = "";
    }
}

function reverseKonversi() {
    var fahrenheitInputs = document.getElementsByClassName("input-fahrenheit");
    var celsiusInputs = document.getElementsByClassName("input-celsius");

    var fahrenheit = fahrenheitInputs[0].value;
    var celsius = (fahrenheit - 32) * 5/9;

    for (var i = 0; i < celsiusInputs.length; i++) {
        celsiusInputs[i].value = celsius.toFixed(2);
    }
}