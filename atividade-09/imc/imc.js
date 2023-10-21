const peso = document.getElementById('pesoUser');
const altura = document.getElementById('alturaUser');
const resultado = document.getElementById('resultadoFinal');
const classificacao = document.getElementById('classificacaoFinal');


function calculoFinal(){
    let pesoValue = peso.value;
    let alturaValue = altura.value;

    const formulaIMC = (pesoValue/alturaValue**2);

    if(formulaIMC < 18.5){
        classificacao.innerHTML = `Abaixo do Peso`;
        resultado.innerHTML = `IMC total: ${formulaIMC.toFixed(2)}.`;
    }  if(formulaIMC >= 18.5 || formulaIMC <= 24.9){
        classificacao.innerHTML = `Peso Normal`;
        resultado.innerHTML = `IMC total: ${formulaIMC.toFixed(2)}.`;
    }  if(formulaIMC >= 25 || formulaIMC <= 29.9){
        classificacao.innerHTML = `Sobrepeso`;
        resultado.innerHTML = `IMC total: ${formulaIMC.toFixed(2)}.`;
    }  if(formulaIMC >= 30 || formulaIMC <= 34.9){
        classificacao.innerHTML = `Obesidade grau I`;
        resultado.innerHTML = `IMC total: ${formulaIMC.toFixed(2)}.`;
    } if(formulaIMC >= 35 || formulaIMC <= 39.9){
        classificacao.innerHTML = `Obesidade grau II`;
        resultado.innerHTML = `IMC total: ${formulaIMC.toFixed(2)}.`;
    } if(formulaIMC >= 40){
        classificacao.innerHTML = `Obesidade grau III`;
        resultado.innerHTML = `IMC total: ${formulaIMC.toFixed(2)}.`;
    }

}

function reiniciarCalculo(){
    peso.value = " ";
    altura.value = " ";
    resultado.innerHTML = " ";
    classificacao.innerHTML = " ";
}
