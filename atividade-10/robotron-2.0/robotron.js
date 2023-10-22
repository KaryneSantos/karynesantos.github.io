var imagensRobotron = [
    "imagens/robotron-amarelo.png",
    "imagens/robotron-azul.png",
    "imagens/robotron-branco.png",
    "imagens/robotron-preto.png",
    "imagens/robotron-rosa.png",
    "imagens/robotron-vermelho.png"
];

var index = 0;

const buttonEsquerdo = document.getElementById('button-esquerdo');
const buttonDireito = document.getElementById('button-direito');
const imagemRobotron = document.getElementById('imagem-robotron');

buttonEsquerdo.addEventListener('click', function(){
    index--;
    if(index < 0){
        index = imagensRobotron.length - 1;
    }
    atualizarImagem();
});

buttonDireito.addEventListener('click', function(){
    index++;
    if(index >= imagensRobotron.length){
        index = 0;
    }
    atualizarImagem();
})


function atualizarImagem(){
    imagemRobotron.src = imagensRobotron[index];
}

const buttonsAumentar = document.querySelectorAll('.button-aumentar');
const buttonsDiminuir = document.querySelectorAll('.button-diminuir');
const inputValores = document.querySelectorAll('.valor-texto');

buttonsAumentar.forEach((button, index) => {
    button.addEventListener('click', () => {
        let valor = parseInt(inputValores[index].value);

        if (valor < 10) {
            valor += 1;
            valor = Math.min(valor, 10);
            inputValores[index].value = valor < 10 ? `0${valor}` : valor;
        }
    });
});

buttonsDiminuir.forEach((button, index) => {
    button.addEventListener('click', () => {
        let valor = parseInt(inputValores[index].value);

        if (valor > 0) {
            valor -= 1;
            inputValores[index].value = valor < 10 ? `0${valor}` : valor;
        }
    });
});
