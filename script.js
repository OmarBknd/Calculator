const add = (number1,number2) => (number1 + number2)
const substract = (number1,number2) => (number1 - number2)
const multiply = (number1,number2) => (number1 * number2)
const divide = (number1,number2) => (number1 / number2)

let number1=Number('');
let operator='';
let number2=Number('');
let result=Number('');
let currentDisplay;
let decimalClicked = false;

function operate(number1,operator,number2){
switch (operator) {
    case '+': return add(number1,number2)
        
    case '-': return substract(number1,number2)

    case '*': return multiply(number1,number2)

    case '/': if(number2 == 0){return 'ERROR'}
    else { return divide(number1,number2)}

    default:
        break;
}
}

const displayScreen = document.querySelector('.display-screen');
const equalBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const digitBtn = document.querySelectorAll('.digitBtn');
const operatorsBtn = document.querySelectorAll('.operatorsBtn');
const decimalBtn = document.querySelector('.decimal')

decimalBtn.addEventListener('click',()=>{
    if(!decimalClicked){
        displayScreen.textContent += '.'
        decimalClicked = true;
    }
       
});

digitBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        
        displayScreen.textContent += button.textContent;
        decimalClicked = false;
        
    })
});

operatorsBtn.forEach(op =>{
    op.addEventListener('click',()=>{
        // Do the Math if an operator is clicked
        if (number1 !== '' && operator !== '') {
            number2 = displayScreen.textContent.split(operator)[1];
            result = operate(parseFloat(number1), operator, parseFloat(number2));
            displayScreen.textContent = result;
            number1 = result;
            number2 = '';
        }
        // Add the operator and store the value of number 1
            operator = op.textContent;
            number1 = parseFloat(displayScreen.textContent);  
            displayScreen.textContent = operator;
            decimalClicked = false;
            
            console.log('opertatosBtn    ','num1:',number1,'operator:',operator,'num2:',number2,'result:',result);
    })
    
});

equalBtn.addEventListener('click',()=>{
    number2 = displayScreen.textContent.split(operator)[1]
    result = operate(parseFloat(number1),operator,parseFloat(number2));
    console.log('num1:',number1,'operator:',operator,'num2:',number2,'result:',result);
    
    if (result % 1 === 0){ displayScreen.textContent =result}
    else{displayScreen.textContent = result.toFixed(5)};

    number1 = result;
    number2 = '';
    decimalClicked = false;
})

clearBtn.addEventListener('click',()=>{
    number1 = '';
    number2 = '';
    result = '';
    operator = '';
    displayScreen.textContent = '';
    decimalClicked = false;
})

const eraseBtn = document.querySelector('#erase');

