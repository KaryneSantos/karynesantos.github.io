const buttonConsultar = document.getElementById("consultar-cnpj");

buttonConsultar.addEventListener('click', () => {
    let cnpj = document.getElementById("cnpj").value.replace(/\D/g, ''); // replace: remove caracteres que não são números
    let linkCNPJ = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

    let resultado = document.getElementById("resultado-cnpj");

    const siglasEstados = {
        'AC' : 'img/acre.png',
        'AL' : 'img/alagoas.png',
        'AP' : 'img/amapa.png',
        'AM' : 'img/amazonas.png',
        'BA' : 'img/bahia.png',
        'CE' : 'img/ceara.png',
        'DF' : 'img/distrito-federal.png',
        'ES' : 'img/espirito-santo.png',
        'GO' : 'img/goias.png',
        'MA' : 'img/maranhao.jpg',
        'MS' : 'img/mato-grosso-sul.png',
        'MT' : 'img/mato-grosso.png',
        'MG' : 'img/minas-gerais.png',
        'PA' : 'img/para.png',
        'PB' : 'img/paraiba.png',
        'PR' : 'img/parana.png',
        'PE' : 'img/pernambuco.png',
        'PI' : 'img/piaui.png',
        'RJ' : 'img/rio-de-janeiro.png',
        'RN' : 'img/rio-grande-norte.png',
        'RS' : 'img/rio-grande-sul.png',
        'RO' : 'img/rondonia.png',
        'RR' : 'img/roraima.png',
        'SC' : 'img/santa-catarina.png',
        'SP' : 'img/sao-paulo.png',
        'SE' : 'img/sergipe.png',
        'TO' : 'img/tocantins.png'
    }
    
    if(cnpj === ""){
        document.getElementById('cnpj').placeholder = "Campo obrigátorio.";
        document.getElementById('cnpj').style.border = "1px solid red";

    } else {
        document.getElementById('cnpj').placeholder = "00.000.000/0000-00";
        document.getElementById('cnpj').style.border = "";
    }

    fetch(linkCNPJ)
    .then(response => response.json())
    .then(data => {
        if(data.cnpj != undefined){
        console.log(data)
        const estadosCNPJ = data.uf;
        const bandeiraURL = siglasEstados[estadosCNPJ] || '';
        resultado.innerHTML = `<div class="blocos">
    <h3 class="m-2 p-3">Cartão CNPJ:</h3>
        <div class="light-gray p4 print-border linha-result">
            <label for="num-inscricao" class="small mb1">Número inscrição:</label>
            <p class="font-color-tertiary no-decoration">${data.cnpj} - ${data.descricao_identificador_matriz_filial}</p>
        </div>
        <div class=" p4 print-border print-mr-2 print-grow-1 linha-result">
            <label for="abertura" class="small mb1">Data de abertura:</label>
            <p class="font-color-tertiary">${data.data_inicio_atividade}</p>
        </div>
        <div class=" light-gray linha-result">
            <label for="nome-empresarial" class="small mb1">Nome empresarial:</label>
            <p>${data.razao_social}</p>
        </div>
        <div class="linha-result">
            <label for="nome-fantasia" class="small mb1">Titulo do estabelecimento (nome fantasia):</label>
            <p>${data.nome_fantasia}</p>
        </div>
        <div class=" light-gray linha-result">
            <label for="codigo-descricao-atividade" class="small mb1">Código e descrição da atividade econômica principal:</label>
            <p>${data.cnae_fiscal} - ${data.cnae_fiscal_descricao}</p>
        </div>
        <div class="linha-result">
            <label for="logradouro" class="small mb1">Logradouro:</label>
            <p>${data.logradouro}</p>
        </div>
        <div class=" d-flex light-gray  linha-result">
        <div class="container-linhas">
        <div class="row">
          <div class="col">
          <label for="numero-complemento" class="small mb1">Número:</label>
          <p  style="white-space: nowrap">${data.numero}</p>
          </div>
          <div class="col">
          <label for="numero-complemento" class="small mb1">Complemento:</label>
            <p style="white-space: nowrap">${data.complemento}</p>
          </div>
        </div>
            </div>
        </div>
        <div class="d-flex linha-result ">
            <div class="container-linhas">
                <div class="row">
                  <div class="col">
                    <label for="cep" class="small mb1">CEP:</label>
                    <p style="white-space: nowrap">${data.cep}</p>
                  </div>
                  <div class="col">
                    <label for="bairro" class="small mb1 ml-auto">Bairro:</label>
                    <p  style="white-space: nowrap">${data.bairro}</p>
                  </div>
                </div>
        </div>
        </div>
        <div class=" light-gray  d-flex linha-result">
            <div class="container-linhas">
                <div class="row">
                  <div class="col">
                    <label for="municipio" class="small mb1">Múnicipio:</label>
                    <p style="white-space: nowrap">${data.municipio}</p>
                  </div>
                  <div class="col">
                    <label for="uf" class="small mb1">UF:</label>
                    <p  style="white-space: nowrap"><img src="${bandeiraURL}" alt="bandeira do  estado CNPJ"></p>
                  </div>
                </div>
        </div>
        </div>
        <div class="linha-result">
            <label for="telefones" class="small mb1">Telefone:</label>
            <p>${data.ddd_telefone_1} - ${data.ddd_telefone_2}</p>
        </div>
        <div class="  light-gray linha-result">
            <label for="situacao" class="small mb1">Situação:</label>
            <p>${data.descricao_situacao_cadastral}</p>
        </div>
   </div>`} else {
    resultado.innerHTML = `<p>Digite um CNPJ válido</p>`;
   }}) 
    .catch(error => {
        console.log("Erro na aquisição da api:", error);
        resultado.innerHTML = `<p>Digite um CNPJ válido</p>`;
    });
});
