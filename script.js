function reset(){
    res.innerHTML = `Digite um novo valor!` //envia valor nulo para a div ress
}
function calcular() {

    var num = parseInt(window.document.getElementById('txtn').value)
    var divisores = 0 // quantidade de vezes que o Numero digitado é divizivel

    for (var contador = 1; contador <= num; contador++)
        if (num % contador == 0) {
            divisores++; //se o incremento for maior que dois o numero que esta digitado nao é primo, por haver mais de dois divisores
        }
    if (divisores == 2) {
        res.innerHTML = `O valor <strong>${num}</strong> é um numero Primo, por haver <strong>${divisores}</strong> divisores positivos!`

    } else {
        res.innerHTML = `O valor <strong>${num}</strong> não é um numero Primo, por haver <strong>${divisores}</strong> divisores positivos!`
    }
}
