const txtRows = document.getElementById('txtNumRows');
const message = document.getElementById('message');
const table = document.getElementById('sampleTable');
let contador = 3;

function adicionandoLinhas(){

if (isNaN(txtRows.value)) { // Verifique se não é um número
    message.innerText = "Só aceitamos números.";
    return;
}

if (txtRows.value < 1 || txtRows.value > 10) {
    message.innerText = 'Os valores válidos são entre 1 e 10.';
    return;
}

// Limpe a mensagem anterior
message.innerText = '';

// Converta txtRows.value para um número
const numRows = parseInt(txtRows.value);

// Agora, adicione as linhas à tabela
for (var i = 0; i < numRows; i++) {
    table.innerHTML += `
        <tr>
            <td>Row${contador} cell1</td>
            <td>Row${contador} cell2</td>
        </tr>`;
    contador++;
}
}
