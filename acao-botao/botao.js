const nomeCompleto = document.getElementById('nome-completo');
const primeiroNome = document.getElementById('primeiro-nome');
const sobreNome = document.getElementById('sobrenome');

function dividirNome(){
    const nomeSobrenome = nomeCompleto.value;
    const corte = nomeSobrenome.split(' ');

    if(corte.length === 2 ){
        primeiroNome.value = corte[0];
        sobreNome.value = corte[1];
    } else {
        window.alert("Digite um nome completo.");
    }
}