const nomeCompleto = document.getElementById('nome-completo');
const primeiroNome = document.getElementById('primeiro-nome');
const sobreNome = document.getElementById('sobrenome');

function dividirNome(){
    const nomeSobrenome = nomeCompleto.value.trim();
    const corte = nomeSobrenome.split(' ');

        primeiroNome.value = corte[0];
        sobreNome.value = corte.slice(1).join(' ');

        if(nomeSobrenome == ""){
            window.alert(" Digite um nome completo ");
        }
}
