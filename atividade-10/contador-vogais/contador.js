function contador(){
    const texto = document.getElementById('txt').value.toLowerCase();
    const res = document.querySelector('.resposta');
    const vogais = ["a", "e", "i", "o", "u"];
    let contadorVogais = 0;

    for(let i = 0; i < texto.length; i++){
        if(vogais.includes(texto[i])){
            contadorVogais++
        }
        res.innerHTML = `Total de Vogais: ${contadorVogais}`;
    }
}

function apagar(){
    const texto = document.getElementById('txt');
    const res = document.querySelector('.resposta');

    texto.value = "";
    res.innerHTML = "";
}