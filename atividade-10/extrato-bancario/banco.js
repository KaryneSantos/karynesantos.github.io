const adicionar = document.getElementById('adicionar-categoria');
const calcular = document.getElementById('calcular-categoria');
var gastos = [];

function adicionarGastos(){
    const categoria = document.getElementById('categoria').value;
    const valor = parseInt(document.getElementById('valor').value);
    const data = document.getElementById('data').value;

    if(!categoria || isNaN(valor) || !data){
        alert("Preencha todos os blocos disponiveis.");
        return;
    } else {
        console.log("Adicionando gastos...");
        gastos.push({categoria, valor, data});
        atualizarTabela();
    }
}

function calcularGastos(){
    if(gastos.length === 0){
        window.alert("Nenhum registro de gastos encontrado.");
        return;
    }

    const totalGastos = gastos.reduce((total, gasto) => total + gasto.valor, 0);

    const totalMensais = {};
    gastos.forEach(gasto => {
    if (gasto.data) {
        const datas = new Date(gasto.data);
        const mes = datas.getMonth() + 1;
        if (!totalMensais[mes]) {
            totalMensais[mes] = 0;
        }
        totalMensais[mes] += gasto.valor;
    }
    });


    // Criar um array de categorias a partir dos dados de gastos
  const categorias = [...new Set(gastos.map(gasto => gasto.categoria))];

// Inicializar um objeto para armazenar os totais por categoria
  const totalCategoria = {};

// Calcular os totais por categoria
  categorias.forEach(categoria => {
    totalCategoria[categoria] = gastos
        .filter(gasto => gasto.categoria === categoria)
        .reduce((total, gasto) => total + gasto.valor, 0);
  });


    const resTotalGasto = document.getElementById('total-gasto');
    const resTotalMensal = document.getElementById('total-mes');
    const resTotalCategoria = document.getElementById('total-categoria');

    resTotalGasto.innerText = totalGastos.toFixed(2);

    resTotalMensal.innerHTML = `<p>Total por Mês:</p>`;
    for (const mes in totalMensais) {
        resTotalMensal.innerHTML += `<p>Mês ${mes}: ${totalMensais[mes].toFixed(2)}</p>`;
    }

    resTotalCategoria.innerHTML = `<p>Total por Categoria:</p>`;
    categorias.forEach(categoria => {
        const total = totalCategoria[categoria];
        resTotalCategoria.innerHTML += `<p>${categoria}: ${total.toFixed(2)}</p>`;
    });

    document.getElementById('resumo-calculado').style.display = "block";
}

function atualizarTabela(){
    const tabela = document.getElementById('gastos-tabela');
    tabela.innerHTML = '';

    for (let i = 0; i < gastos.length; i++) {
        const gasto = gastos[i];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${gasto.categoria}</td>
            <td>${gasto.data}</td>
            <td>${gasto.valor.toFixed(2)}</td>
        `;
        tabela.appendChild(row);
    }
}

adicionar.addEventListener('click', adicionarGastos);
calcular.addEventListener('click', calcularGastos);