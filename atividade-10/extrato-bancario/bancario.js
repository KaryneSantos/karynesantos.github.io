// Arquivo bancario.js

// Array para armazenar os registros de gastos
const gastos = [];

function adicionarRegistro() {
    const categoria = document.getElementById('categorias').value;
    const valor = parseFloat(document.getElementById('valor-categoria').value);
    const data = document.getElementById('data-extrato').value;

    if (!categoria || isNaN(valor) || !data) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    gastos.push({ categoria, valor, data });
    atualizarTabela();
}

function calcularRegistro() {
    if (gastos.length === 0) {
        alert("Nenhum registro de gasto encontrado.");
        return;
    }

    const totalGasto = gastos.reduce((total, gasto) => total + gasto.valor, 0);
    const maiorGasto = Math.max(...gastos.map(gasto => gasto.valor));

    const totalCategoria = gastos.reduce((acc, gasto) => {
        if (!acc[gasto.categoria]) {
            acc[gasto.categoria] = 0;
        }
        acc[gasto.categoria] += gasto.valor;
        return acc;
    }, {});

    const categorias = Object.keys(totalCategoria);
    const maiorCategoria = categorias.reduce((categoria, maior) => (totalCategoria[categoria] > totalCategoria[maior] ? categoria : maior));

    const resumo = document.getElementById('resumo');
    const totalGastoSpan = document.getElementById('total-gasto');
    const maiorGastoSpan = document.getElementById('maior-gasto');
    const totalDataDiv = document.getElementById('total-data');
    const totalCategoriaDiv = document.getElementById('total-categoria');

    totalGastoSpan.textContent = totalGasto.toFixed(2);
    maiorGastoSpan.textContent = maiorGasto.toFixed(2);

    // Mostrar informações por data
    totalDataDiv.innerHTML = `<p>Total por Data:</p>`;
    gastos.forEach(gasto => {
        const data = gasto.data;
        const totalPorData = gastos.filter(g => g.data === data).reduce((total, g) => total + g.valor, 0);
        totalDataDiv.innerHTML += `<p>${data}: ${totalPorData.toFixed(2)}</p>`;
    });

    // Mostrar informações por categoria
    totalCategoriaDiv.innerHTML = `<p>Total por Categoria:</p>`;
    categorias.forEach(categoria => {
        const total = totalCategoria[categoria];
        totalCategoriaDiv.innerHTML += `<p>${categoria}: ${total.toFixed(2)}</p>`;
    });

    resumo.style.display = 'block';
}

function atualizarTabela() {
    const tabela = document.getElementById('gastos-tabela');
    tabela.innerHTML = '';

    for (const gasto of gastos) {
        tabela.innerHTML += `
            <tr>
                <td>${gasto.categoria}</td>
                <td>${gasto.data}</td>
                <td>${gasto.valor.toFixed(2)}</td>
            </tr>`;
    }
}
