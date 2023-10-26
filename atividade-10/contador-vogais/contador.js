function contador(){
    const texto = document.getElementById('txt').value.toLowerCase();
    const res = document.querySelector('.resposta');
    const vogais = ['a', 'á', 'à', 'â', 'ã', 'A', 'Á', 'À', 'Â', 'Ã', 'e', 'é', 'ê', 'E', 'É', 'Ê', 'i', 'í', 'I', 'Í', 'o', 'ó', 'ô', 'õ', 'O', 'Ó', 'Ô', 'Õ', 'u', 'ú', 'û', 'U', 'Ú', 'Û'];

    var contarVogais = 0;

    for(var i = 0; i < texto.length; i++){
        if(vogais.includes(texto[i])){
            contarVogais++;
        }
    res.innerHTML = `Total de Vogais: ${contarVogais}`;
    }
}

function apagar(){
    const texto = document.getElementById('txt');
    const res = document.querySelector('.resposta');

    texto.value = "";
    res.innerHTML = "";
}
