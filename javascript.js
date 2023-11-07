const buttonContainer = document.getElementById('buttonContainer');
const enterBtn = document.querySelector('#Btnenter');
const gridArray = [];
const operatorArray = [];
operatorArray.push(enterBtn.id);

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
            gridArray.push(cell.id);
        };
        if(c === 3){
            cell.textContent = '/';
            operatorArray.push(cell.id);
        };
        if(c >= 4 && c <= 6){
            cell.textContent = c;
            gridArray.push(cell.id);
        };
        if(c === 7){
            cell.textContent = '*';
            operatorArray.push(cell.id);
        };
        if(c >= 8 && c <= 10){
            cell.textContent = c - 1;
            gridArray.push(cell.id);
        };
        if(c === 11){
            cell.textContent = '+';
            operatorArray.push(cell.id);
        };
        if(c === 12){
            cell.textContent = 'CLEAR';
        };
        if(c === 13){
            cell.textContent = 0;
            gridArray.push(cell.id);
        };
        if(c === 14){
            cell.textContent = ".";
        };
        if(c === 15){
            cell.textContent = '-';
            operatorArray.push(cell.id);
        };
    };
};
makeRows(4,4);


const buttons = document.querySelectorAll('.grid-item');
const input = document.querySelector('.input');
var operator = '';
var entryOne = 0;
var entryTwo = 0;

      buttons.forEach(function(button) {
        button.addEventListener("click", function(){
            if(input.textContent.length < 7 && gridArray.find((buttonId) => button.id == buttonId)){
                input.textContent = input.textContent + button.textContent;
            };
            if(input.textContent.length < 7 && button.id == 'grid-item14'){
                if(!input.textContent.includes('.')){
                    input.textContent = input.textContent + button.textContent
                };
            };
            if(button.id == 'grid-item12'){
                input.textContent = "";
                    entryOne = 0;
                    entryTwo = 0;
            };
            if(button.id == 'grid-item3'){
                operator = '/';
                if(!entryOne == 0 && !input.textContent == ""){
                    entryOne = parseFloat(entryOne) + parseFloat(input.textContent);
                }else if(!entryOne == 0 && input.textContent == ""){
                    
                }else
                entryOne = input.textContent;
                input.textContent = "";
            };
            if(button.id == 'grid-item7'){
                operator = '*';
                if(!entryOne == 0 && !input.textContent == ""){
                    entryOne = parseFloat(entryOne) + parseFloat(input.textContent);
                }else if(!entryOne == 0 && input.textContent == ""){
                    
                }else
                entryOne = input.textContent;
                input.textContent = "";
            };
            if(button.id == 'grid-item11'){
                operator = '+';
                if(!entryOne == 0 && !input.textContent == ""){
                    entryOne = parseFloat(entryOne) + parseFloat(input.textContent);
                }else if(!entryOne == 0 && input.textContent == ""){
                    
                }else
                entryOne = input.textContent;
                input.textContent = "";
            };
            if(button.id == 'grid-item15'){
                operator = '-';
                if(!entryOne == 0 && !input.textContent == ""){
                    entryOne = parseFloat(entryOne) + parseFloat(input.textContent);
                } else if(!entryOne == 0 && input.textContent == ""){
                    
                } else
                entryOne = input.textContent;
                input.textContent = "";
                
            }
            if(button.id == 'Btnenter' && !entryOne == 0 && input.textContent.length <=7){
                if(!input.textContent == ""){
                    entryTwo = input.textContent;
                    operate(entryOne, entryTwo);
                };
            };
        });
      });

function operate(inputOne, inputTwo){
    const firstNumber = parseFloat(inputOne);
    const secondNumber = parseFloat(inputTwo);

    if(operator == '+'){
        input.textContent = Math.round((firstNumber + secondNumber) * 100) /100;
    } else if(operator == '-'){
        input.textContent = Math.round((firstNumber - secondNumber) * 100) /100;
    } else if(operator == '*'){
        input.textContent = Math.round((firstNumber * secondNumber) * 100) /100;
    } else if(operator == '/'){
        input.textContent = Math.round((firstNumber / secondNumber) * 100) /100;
    } else console.log('there was an error..' + firstNumber + secondNumber + operator);


    
};
