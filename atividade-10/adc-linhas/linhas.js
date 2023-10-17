const txtRows = document.getElementById('txtNumRows');
const message = document.getElementById('message');
const table = document.getElementById('sampleTable');
let contador = 3;

function adicionandoLinhas(){

if (isNaN(txtRows.value)) { 
    message.innerText = "Só aceitamos números.";
    return;
}

if (txtRows.value < 1 || txtRows.value > 10) {
    message.innerText = 'Os valores válidos são entre 1 e 10.';
    return;
}


message.innerText = '';


const numRows = parseInt(txtRows.value);


for (var i = 0; i < numRows; i++) {
    table.innerHTML += `
        <tr>
            <td>Row${contador} cell1</td>
            <td>Row${contador} cell2</td>
        </tr>`;
    contador++;
}
}
