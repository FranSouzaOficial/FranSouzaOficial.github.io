var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var resultado = document.getElementById("resultado");

document.getElementById("somar").onclick = function() {
 resultado.innerText = parseFloat(numero1.value) + parseFloat(numero2.value);
};

document.getElementById("subtrair").onclick = function() {
 resultado.innerText = parseFloat(numero1.value) - parseFloat(numero2.value);
};

document.getElementById("multiplicar").onclick = function() {
 resultado.innerText = parseFloat(numero1.value) * parseFloat(numero2.value);
};

document.getElementById("dividir").onclick = function() {
 resultado.innerText = parseFloat(numero1.value) / parseFloat(numero2.value);
};
