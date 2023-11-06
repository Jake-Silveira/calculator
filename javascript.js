const buttonContainer = document.getElementById('buttonContainer');


function makeRows(rows, cols){
    buttonContainer.style.setProperty('--grid-rows', rows);
    buttonContainer.style.setProperty('--grid-cols', cols);

    for(c = 0; c < (rows * cols); c++){
        let cell = document.createElement('div');
        buttonContainer.appendChild(cell).className = "grid-item";
        cell.id = "grid-item" + c;
        cell.style.backgroundColor = 'grey';
        cell.style.padding = '20px';
        if(c <= 2){
            cell.textContent = c + 1;
        };
        if(c === 3){
            cell.textContent = '/';
        };
        if(c >= 4 && c <= 6){
            cell.textContent = c;
        };
        if(c === 7){
            cell.textContent = '*';
        };
        if(c >= 8 && c <= 10){
            cell.textContent = c - 1;
        };
        if(c === 11){
            cell.textContent = '+';
        };
        if(c === 12){
            cell.textContent = 'CLEAR';
        };
        if(c === 13){
            cell.textContent = 0;
        };
        if(c === 14){
            cell.textContent = ".";
        };
        if(c === 15){
            cell.textContent = '-';
        };
    };
};
makeRows(4,4);