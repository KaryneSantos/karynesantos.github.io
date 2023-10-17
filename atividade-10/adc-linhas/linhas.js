const message = document.getElementById('msg');
const table = document.getElementById('sampleTable');

function adicionandoLinhas(){
    const txtRows = document.getElementById('txtNumRows').value;
    var rowNum = 3;

    message.textContent = "";

    if(!isNaN(txtRows) && txtRows >= 1 && txtRows <= 10){
        for(var i = 0; i < parseInt(txtRows); i++){
            const newRow = table.insertRow(-1);
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            cell1.innerHTML = `Row ${rowNum}  cell 1`;
            cell2.innerHTML = `Row ${rowNum} cell 2`;
        }
    }else if (isNaN(valorInput)) {
        message.textContent = 'Apenas valores numéricos são aceitos.';
    } else {
        message.textContent = 'Os valores válidos são entre 1 e 10.';
    }
}