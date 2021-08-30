var listaFilmes = [
    "https://cdn.myanimelist.net/images/anime/3/67177.jpg",
    "https://cdn.myanimelist.net/images/anime/1864/93518.jpg",
    "https://cdn.myanimelist.net/images/anime/5/18179.jpg",
    "https://cdn.myanimelist.net/images/anime/9/56941.jpg"
]

var listaNomes = [
    "Shigatsu Wa Kimi no Uso",
    "Wotakoi", 
    "Fairy Tail",
    "Seitokai Yakuindomo"
]

for (var i = 0; i < listaFilmes.length && listaNomes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">" + "<h3>" + listaNomes[i] +"</h3>")
}
