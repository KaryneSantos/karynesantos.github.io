const imgsRobotron = [
    "imgRobotron", "robotron-amarelo",
    "robotron-azul", "robotron-branco",
    "robotron-preto", "robotron-rosa", 
    "robotron-vermelho" 
];

let indice = 0;

function avancar(){
    esconderImagem(indice);
    indice++;
    if(indice >= imgsRobotron.length){
        indice = 0;
    }

    mostrarImagem(indice);
}

function voltar(){
    esconderImagem(indice);
    indice--;
    if(indice < 0){
        indice = imgsRobotron.length - 1;
    }
    
    mostrarImagem(indice);
}

function mostrarImagem(indiceAtual){
    const imagemRobotron = document.getElementById(imgsRobotron[indiceAtual]);
    imagemRobotron.style.display = "block";
}

function esconderImagem(indiceAtual){
    const imagemRobotron = document.getElementById(imgsRobotron[indiceAtual]);
    imagemRobotron.style.display = "none";
}

