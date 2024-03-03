let displayValue = [];
let nums = [];
let clear = [];
let firstOperand = null;
let secondOperand = null;
let operator = null
let result = null;

// LISTENER
document.querySelectorAll('.calcBtn').forEach(button => {
    button.addEventListener('click', function() {
        let field = document.querySelector('.field');
        let num = this.getAttribute('data-target');
        displayValue.push(num)
        nums.push(num)
        if (displayValue.length <= 22) {
            if (num === 'AC') {
                clearField(field, displayValue)
                nums.length = 0;
            } else if (num === 'negate') {
                nums.pop();
                nums.unshift('-')
                firstOperand = nums.join("");
                field.textContent = firstOperand
            } else if (num === '=') {
                nums.pop()
                secondOperand = nums.join("");
                field.textContent = calculate(firstOperand, secondOperand, operator);
                // displayValue.pop()
            } else if (num === 'x') {
                operator = num;
                nums.pop();
                firstOperand = nums.join("");
                nums.length = 0
                clearField(field, displayValue);
            } else if (num === '-') {
                operator = num;
                nums.pop();
                firstOperand = nums.join("");
                nums.length = 0
                clearField(field, displayValue);
            } else if (num === '%') {
                operator = num;
                nums.pop();
                firstOperand = nums.join("");
                nums.length = 0
                clearField(field, displayValue);
            } else if (num === '+') {
                operator = num;
                nums.pop();
                firstOperand = nums.join("");
                nums.length = 0
                clearField(field, displayValue);
            } else if (num === '/') {
                operator = num;
                nums.pop();
                firstOperand = nums.join("");
                nums.length = 0
                clearField(field, displayValue);
            } else {
                field.textContent = num;
                field.textContent = displayValue.join("");
            }
        } else {
            console.log("Error Cannot Exceed 22 digits")
            if (num === 'AC') {
                displayValue.splice(0, displayValue.length)
                field.textContent = clear;
            }
        }
        // console.log(p)
        // console.log(this.id + " - clicked")
    });
});

// OPERATIONS
let add = function(firstOperand, secondOperand) {
    return parseFloat(firstOperand) + parseFloat(secondOperand);
}

let subract = function(firstOperand, secondOperand) {
    return parseFloat(firstOperand) - parseFloat(secondOperand);
}

let divide = function(firstOperand, secondOperand) {
    return parseFloat(firstOperand) / parseFloat(secondOperand);
}

let multiply = function(arr) {
    return parseFloat(firstOperand) * parseFloat(secondOperand)
}

let modulo = function(arr) {
    return parseFloat(firstOperand) % parseFloat(secondOperand)
}

let clearField = function(display, arr) {
    arr.splice(0, displayValue.length)
    display.textContent = clear;
}

let calculate = function(firstOperand, secondOperand, operation) {
    let result;
    switch(operation) {
        case '+':
            result = add(firstOperand, secondOperand);
            break;
        case 'x':
            result = multiply(firstOperand, secondOperand);
            break;
        case '/':
            result = divide(firstOperand,secondOperand);
            break;
        case '%':
            result = modulo(firstOperand, secondOperand);
            break;
        case 'xx':
            result = exponentiate(firstOperand, secondOperand)
        case 'negate':
            result = negateNum()
    }
    return result;
};