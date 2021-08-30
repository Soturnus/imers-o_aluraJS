var cartaPaulo = {
    nome:"Seiya de Pegaso",
    atributos:{
        atk: 80,
        def: 60,
        magia: 90
    }
}
var cartaRafa = {
    nome: "Bulbasaur",
    atributos:{
        atk: 70,
        def: 65,
        magia: 85
    }
}
var cartaGui = {
    nome: "Lord Darth Vader",
    atributos:{
        atk: 88,
        def: 62,
        magia: 90
    }
}

var cartas = [cartaPaulo, cartaRafa, cartaGui]

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while(numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]

    document.getElementById('btnSortear').disabled = true 
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes()
}

function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio', name='atributo', value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++){
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value 
        } 
    }
}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        alert('Venceu a carta da Máquina')
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        alert('Venceu perdeu da Máquina')
    } else {
        alert('empatou')
    }
    console.log(cartaMaquina)
} 