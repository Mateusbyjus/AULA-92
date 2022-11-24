p1nomee = localStorage.getItem("p1nome");
p2nomee = localStorage.getItem("p2nome");
score1 = 0;
score2 = 0;
document.getElementById("p1nome").innerHTML = p1nomee;
document.getElementById("p2nome").innerHTML = p2nomee;


document.getElementById("p1nome").innerHTML = score1;
document.getElementById("p2nome").innerHTML = score2;



document.getElementById("playerpergunta").innerHTML = "turno de pergunta: " + p1nome;
document.getElementById("playerresposta").innerHTML = "turno de resposta: " + p2nome;


function enviar() {
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log(word);


    charp1 = word.charAt(1);
    console.log(charp1);


    compp = Math.floor(word.length / 2);


    charp2 = word.charAt(compp);
    console.log(charp2);


    compa = word.length - 1;
    charp3 = word.charAt(compa);
    console.log(charp3);


    removcharp1 = word.replace(charp1, "_");
    removcharp2 = removcharp1.replace(charp2, "_");
    removcharp3 = removcharp2.replace(charp3, "_");
    console.log(removcharp3);


    pword = "<h4 id='wordDisplay'> p: " + removcharp3 + "</h4>";
    inputBox = "<br> resposta: <input type='text' id='inputCheckBox'>";
    checarbt = "<br> <button class='btn btn-warning' onclick='checar()'> Checar </button>";
    row = pword + inputBox + checarbt;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = " ";
}

pturno = "player1";
prespostaturno = "player2";

function checar() {
    getAnswer = document.getElementById("inputCheckBox").value;
    Answer = getAnswer.toLowerCase();
    console.log("resposta em caixa baixa " + Answer);


    if (Answer == word) {
        if (prespostaturno == "player1") {
            score1 = score1 + 1;
            document.getElementById("score1").innerHTML = score1;
        }
        else {
            score2 = score2 + 1;
            document.getElementById("score2").innerHTML = score2;
        }
    }
    if (pturno == p1nomee) {
        pturno = "player2";
        document.getElementById("playerQuestion").innerHTML = "turno de pergunta" + p2nomee;
    }
    else {
        pturno = "player1";
        document.getElementById("playerQuestion").innerHTML = "turno de pergunta" + p1nomee;
    }

    if (prespostaturno == p1nomee) {
        prespostaturno = "player2";
        document.getElementById("playerAnswer").innerHTML = "turno de resposta" + p2nomee;
    }
    else {
        prespostaturno = "player1";
        document.getElementById("playerAnswer").innerHTML = "turno de resposta" + p1nomee;
    }
    document.getElementById("output").innerHTML = "";
}
