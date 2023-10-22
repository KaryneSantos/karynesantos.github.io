function validarNascimento(nascimento){
    return !isNaN(new Date(nascimento).getTime());
}

function validarEmail(email){
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function validarDDD(ddd){
    const dddsValidos = [
    '11',  // São Paulo, SP
    '12',  // São José dos Campos, SP
    '13',  // Santos, SP
    '14',  // Bauru, SP
    '15',  // Sorocaba, SP
    '16',  // Ribeirão Preto, SP
    '17',  // São José do Rio Preto, SP
    '18',  // Presidente Prudente, SP
    '19',  // Campinas, SP
    '21',  // Rio de Janeiro, RJ
    '22',  // Campos dos Goytacazes, RJ
    '24',  // Volta Redonda, RJ
    '27',  // Vitória, ES
    '28',  // Cachoeiro de Itapemirim, ES
    '31',  // Belo Horizonte, MG
    '32',  // Juiz de Fora, MG
    '33',  // Governador Valadares, MG
    '34',  // Uberlândia, MG
    '35',  // Poços de Caldas, MG
    '37',  // Divinópolis, MG
    '38',  // Montes Claros, MG
    '41',  // Curitiba, PR
    '42',  // Ponta Grossa, PR
    '43',  // Londrina, PR
    '44',  // Maringá, PR
    '45',  // Foz do Iguaçu, PR
    '46',  // Francisco Beltrão, PR
    '47',  // Joinville, SC
    '48',  // Florianópolis, SC
    '49',  // Chapecó, SC
    '51',  // Porto Alegre, RS
    '53',  // Pelotas, RS
    '54',  // Caxias do Sul, RS
    '55',  // Santa Maria, RS
    '61',  // Brasília, DF
    '62',  // Goiânia, GO
    '63',  // Palmas, TO
    '64',  // Rio Verde, GO
    '65',  // Cuiabá, MT
    '66',  // Rondonópolis, MT
    '67',  // Campo Grande, MS
    '68',  // Rio Branco, AC
    '69',  // Porto Velho, RO
    '71',  // Salvador, BA
    '73',  // Ilhéus, BA
    '74',  // Juazeiro, BA
    '75',  // Feira de Santana, BA
    '77',  // Barreiras, BA
    '79',  // Aracaju, SE
    '81',  // Recife, PE
    '82',  // Maceió, AL
    '83',  // João Pessoa, PB
    '84',  // Natal, RN
    '85',  // Fortaleza, CE
    '86',  // Teresina, PI
    '87',  // Petrolina, PE
    '88',  // Juazeiro do Norte, CE
    '89',  // Picos, PI
    '91',  // Belém, PA
    '92',  // Manaus, AM
    '93',  // Santarém, PA
    '94',  // Marabá, PA
    '95',  // Boa Vista, RR
    '96',  // Macapá, AP
    '97',  // Coari, AM
    '98',  // São Luís, MA
    '99',  // Imperatriz, MA
];

return dddsValidos.includes(ddd);
}

function mostrarMensagem(mensagem){
    const mensagemValidacao = document.getElementById('mensagem');
    mensagemValidacao.innerHTML = mensagem;
}


const buttonValidacao = document.getElementById('validacao-campos');


buttonValidacao.addEventListener('click', () => {
    const nomeAluno = document.getElementById('nome-aluno').value;
    const nomeMae = document.getElementById('nome-mae').value;
    const nomePai = document.getElementById('nome-pai').value;
    const nascimentoAluno = document.getElementById('nascimento-aluno').value;
    const emailAluno = document.getElementById('email-aluno').value;
    const telefoneDDD = document.getElementById('telefone-ddd-aluno').value;
    const telefone = parseInt(document.getElementById('telefone-aluno').value);

    if(nomeAluno.trim() === ''){
        mostrarMensagem('Por favor, preencha o campo "Nome do Aluno".');
        return;
    }
    if(nomeMae.trim() === ''){
        mostrarMensagem('Por favor, preencha o campo "Nome da Mãe".');
        return; 
    }
    if(nomePai.trim() === ''){
        mostrarMensagem('Por favor, preencha o campo "Nome do Pai".');
        return;
    }

    if(!validarNascimento(nascimentoAluno)){
        mostrarMensagem('Por favor, insira uma data de nascimento válida.');
        return;
    }

    if(!validarEmail(emailAluno)){
        mostrarMensagem('Por favor, insira um endereço de email válido.');
        return;
    }

    if (!validarDDD(telefoneDDD)) {
        mostrarMensagem('Por favor, insira um DDD válido.');
        return;
    }

    
    if(isNaN(telefone)){
        mostrarMensagem('Por favor, insira um número de telefone válido.');
        return;
    }


    const atividadesExtracurriculares = document.querySelectorAll('input[type="checkbox"]:checked');
    if (atividadesExtracurriculares.length === 0) {
        mostrarMensagem('Selecione pelo menos uma atividade extracurricular (opcional).');
        return;
    }

    if (atividadesExtracurriculares.length > 3) {
        mostrarMensagem('Selecione no máximo 3 atividades extracurriculares.');
        return;
    }

    mostrarMensagem('Cadastro realizado com sucesso!');

});

const buttonLimparCampos = document.getElementById('limpar-campos');

buttonLimparCampos.addEventListener('click', () => {
    document.getElementById('nome-aluno').value = '';
    document.getElementById('nome-mae').value = '';
    document.getElementById('nome-pai').value = '';
    document.getElementById('nascimento-aluno').value = '';
    document.getElementById('email-aluno').value = '';
    document.getElementById('telefone-ddd-aluno').value = '';
    document.getElementById('telefone-aluno').value = '';
    document.getElementById('ramal-aluno').value = '';

    const atividadesExtracurriculares = document.querySelectorAll('input[type="checkbox"]');
    atividadesExtracurriculares.forEach(checkbox => {
        checkbox.checked = false;
    });

    mostrarMensagem('');
});
