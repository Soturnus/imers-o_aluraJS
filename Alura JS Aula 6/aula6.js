var soturno = {
    nome: "Soturno",
    vitorias: 0, 
    empates: 0,
    derrotas: 0,
    pontos: 0
}
var noturno = {
    nome: "Noturno",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

soturno.pontos = calcularPontos(soturno)
noturno.pontos = calcularPontos(noturno)


function calcularPontos(jogador){
   var pontos = (jogador.vitorias * 3) + jogador.empates
   return pontos
}

var jogadores = [soturno, noturno]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i=0; i< jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html 
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calcularPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calcularPontos(jogador)
    exibirJogadoresNaTela(jogadores)
} 

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
} 