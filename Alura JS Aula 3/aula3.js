var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while(tentativas > 0 ) {
    var chute = parseInt(prompt("Digite um número entre 0 e 10"))

    if (numeroSecreto == chute){
        alert("Acertou")
        break
    } else if(chute > numeroSecreto){
        alert("Chute é maior que o numero secreto")
        tentativas = tentativas - 1
    } else if(chute < numeroSecreto){
        alert("Chute é menor que o numero secreto")
        tentativas = tentativas - 1
    }
}
if (chute != numeroSecreto) {
    alert("Suas tentativas acabaram, o numero secreto era " + numeroSecreto)
}
