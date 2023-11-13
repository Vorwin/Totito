var tab = new Array(); 
var turno = 0; 
var flag = false; 
var contador1 = 0;
var contador2 = 0;




window.onload = function () {
    var start = document.getElementById("iniciar");
    start.addEventListener("click", comenzar)
}

function comenzar() {
    bandera = true; 
    var j1 = document.getElementById("j1"); 
    var j2 = document.getElementById("j2");

    document.getElementById("ganador").innerHTML = " ";

    if (j1.value == "") {
        alert("Falta el nombre del jugador 1");
        j1.focus(); 
    }
    else{ 
        if (j2.value == ""){
        alert("Falta el nombre del jugador 2");
        j2.focus(); 
        }
        else{
            tab[0] = document.getElementById("b1");
            tab[1] = document.getElementById("b2");
            tab[2] = document.getElementById("b3");
            tab[3] = document.getElementById("b4");
            tab[4] = document.getElementById("b5");
            tab[5] = document.getElementById("b6");
            tab[6] = document.getElementById("b7");
            tab[7] = document.getElementById("b8");
            tab[8] = document.getElementById("b9");

            for (var index = 0; index < 9; index++) {
                tab[index].value = " ";
            }

            turno = Math.floor(Math.random() * 2) + 1;

            if(turno == 1){
                document.getElementById("etiquetaTurno").innerHTML= j1.value;
            }else if(turno == 2){
                document.getElementById("etiquetaTurno").innerHTML= j2.value;
            }

        }
    }
}


function colocar(boton) {
    if(bandera == true){
        if(turno == 1 && boton.value == " "){
            turno = 2; 
            document.getElementById("etiquetaTurno").innerHTML= j2.value;
            boton.value= "X";
            boton.className = "simbolo";
        }else{
            if(turno == 2 && boton.value == " "){
                turno = 1; 
                document.getElementById("etiquetaTurno").innerHTML= j1.value;
                boton.value= "O";
                boton.className = "simbolo";
            }
        }
    }

    confirmarGanador();
}

function confirmarGanador() {
    var empate = true;
    if(
        (tab[0].value == "X" && tab[1].value == "X" && tab[2].value == "X")||
        (tab[3].value == "X" && tab[4].value == "X" && tab[5].value == "X")||
        (tab[6].value == "X" && tab[7].value == "X" && tab[8].value == "X")||
        (tab[0].value == "X" && tab[3].value == "X" && tab[6].value == "X")||
        (tab[1].value == "X" && tab[4].value == "X" && tab[7].value == "X")||
        (tab[2].value == "X" && tab[5].value == "X" && tab[8].value == "X")||
        (tab[0].value == "X" && tab[4].value == "X" && tab[8].value == "X")||
        (tab[2].value == "X" && tab[4].value == "X" && tab[6].value == "X")

        )
        
        {
        document.getElementById("ganador").innerHTML = "Gana el jugador: " + j1.value; 
        contador1 += 1;
        document.getElementById("RondaJ1").innerHTML = contador1;
        bandera = false; 
        empate = false;
        for (var index = 0; index < 9; index++) {
            tab[index].value = " ";
        }

    }
    if(
        (tab[0].value == "O" && tab[1].value == "O" && tab[2].value == "O")||
        (tab[3].value == "O" && tab[4].value == "O" && tab[5].value == "O")||
        (tab[6].value == "O" && tab[7].value == "O" && tab[8].value == "O")||
        (tab[0].value == "O" && tab[3].value == "O" && tab[6].value == "O")||
        (tab[1].value == "O" && tab[4].value == "O" && tab[7].value == "O")||
        (tab[2].value == "O" && tab[5].value == "O" && tab[8].value == "O")||
        (tab[0].value == "O" && tab[4].value == "O" && tab[8].value == "O")||
        (tab[2].value == "O" && tab[4].value == "O" && tab[6].value == "O")

        )
        
        {
        document.getElementById("ganador").innerHTML = "Gana el jugador: " + j2.value; 
        contador2 += 1;
        document.getElementById("RondaJ2").innerHTML = contador2;
        bandera = false; 
        empate = false;
        for (var index = 0; index < 9; index++) {
            tab[index].value = " ";
        }
    }

    if (empate && !tab.some(boton => boton.value == " ")) {
        document.getElementById("ganador").innerHTML = "Empate";
        bandera = false;
    }
}

function reiniciar(){
    document.getElementById("ganador").innerHTML = " ";
    document.getElementById("RondaJ1").innerHTML = 0;
    document.getElementById("RondaJ2").innerHTML = 0;
    document.getElementById("j1").value = "";
    document.getElementById("j2").value = "";
    document.getElementById("etiquetaTurno").innerHTML= " ";
    contador1 = 0; 
    contador2 = 0; 
    
    for (var index = 0; index < 9; index++) {
        tab[index].value = " ";
    }
}
