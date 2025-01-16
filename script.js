currentPlayer = "X"

let jogadas = {
    "X": [],
    "O": [],
}

let vitorias = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function colocar(element){
    element.innerHTML = (currentPlayer === "X") ? '<i class="fa fa-times fa-rotate-"></i>' : '<i class="fa fa-circle-o"></i>';

    jogadas[currentPlayer].push(parseInt(element.id))

    currentPlayer = (currentPlayer === "X") ? "O" : "X";

    checar_vitoria();

    element.onclick = null;
}

function checar_vitoria(){
    let som_vic = new Audio('src/vitoria.mp3');
    let som_draw = new Audio('src/draw.mp3');
    let som_click = new Audio('src/click.mp3')

    for (let i=0; i < vitorias.length; i++ ){
        let vitoria = vitorias[i]
        let ids_vitoria = [];

        if (jogadas["X"].indexOf(vitoria[0]) != -1 && jogadas["X"].indexOf(vitoria[1]) != -1 && jogadas["X"].indexOf(vitoria[2]) != -1) {
                ids_vitoria.push(vitoria[0]);
                ids_vitoria.push(vitoria[1]);
                ids_vitoria.push(vitoria[2]);
                console.log("jogador X venceu!")
                colorir(ids_vitoria);
                congelar()
                som_vic.play();
                return true;
        }
        
        if (jogadas["O"].indexOf(vitoria[0]) != -1 && jogadas["O"].indexOf(vitoria[1]) != -1 && jogadas["O"].indexOf(vitoria[2]) != -1) {
                ids_vitoria.push(vitoria[0]);
                ids_vitoria.push(vitoria[1]);
                ids_vitoria.push(vitoria[2]);
                console.log("jogador O venceu!")
                colorir(ids_vitoria);
                congelar()
                som_vic.play();
                return true;
        } 
    }

    if (jogadas["O"].length + jogadas["X"].length >= 9){
        console.log("Empate!")
        congelar()
        som_draw.play()

        for (i=1; i <= 9; i++){
            document.getElementById(i).style.backgroundColor = "red"
            document.getElementById(i).style.color = "pink"
            document.getElementById(i).style.transition = "all 1s ease"
        }
        return true
    }

    som_click.play();
    return false;
}

function colorir(ids_vitoria){
    for (i=0; i < ids_vitoria.length; i++){
        document.getElementById(ids_vitoria[i]).style.backgroundColor = "#90a955"
        document.getElementById(ids_vitoria[i]).style.color = "#31572c"
        document.getElementById(ids_vitoria[i]).style.transition = "all 1s ease"
    }
}

function congelar(){
    items = document.querySelectorAll('.item')
    for(i=0; i < items.length; i++){
        items[i].onclick = null
    }
}
