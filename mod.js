/* Solicitar ao usuário o primeiro valor a ser calculado */
var primeiValor = Number(prompt("Digite o primeiro valor: "))

/* Solicitar ao usuário o segundo valor a ser calculado */
var segunValor = Number(prompt("Digite o segundo valor: "))

/* Criar a variavel para realizar a solicitação das operações */
var op = Number(prompt("Tecle: 1 para dividir, 2 multiplicação, 3 soma e 4 subtração: "))

/* Criar a lógica ára saber qual operação será executada */
if (op === 1) {
    var res = primeiValor / segunValor
    document.write("<h2>" + primeiValor + " / " + segunValor + " = " + res + "</h2>")
} else if (op === 2) {
    var res = primeiValor * segunValor
    document.write("<h2>" + primeiValor + " x " + segunValor + " = " + res + "</h2>")
} else if (op === 3) {
    var res = primeiValor + segunValor
    document.write("<h2>" + primeiValor + " + " + segunValor + " = " + res + "</h2>")
} else if (op === 4) {
    var res = primeiValor - segunValor
    document.write("<h2>" + primeiValor + " - " + segunValor + " = " + res + "</h2>")
} else {
    document.write("<h2> [ERRO] </h2>")
}
