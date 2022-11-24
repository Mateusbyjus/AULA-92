function addUser(){
    var player1name = document.getElementById("jogador1nome").Value;
    var player2name = document.getElementById("jogador2nome").Value;
    localStorage.setItem("p1nome",player1name);
    localStorage.setItem("p2nome",player2name);
    window.location = "jogo.html";
}