// Objectives
// Each button will have a listener
// All buttons will append their respective integers/operators into the numField
// "Equals" will compute the equation in the numField and display the solution
// 
// Things to consider:
//  - PEMDAS, Do I have to provide logic for performing certain equations before others? (4 + 5 x 6)
//  - Can I add all event listeners in a forEach loop and call their respective functions based on this.id?
//    - For example, 0 - 9 could be a boolean statement: 
//    - if this.id = to 0-9 ? add this.id to numField : performOperation
//    - I CAN add all event listeners besides "AC", "Equals" and "+/-"!
//    - They all share the same trait, they are added to num field and do not perform an operation.
//  - "AC" clears the numField
//  - "Negate" appends a "-" to the front of the integer
//  - "Equals" computes the equation and provides the solution.
let displayValue = [];
let clear = [];
let firstOperand = null;
let secondOperand = null;
let operator = null
let result = null;


// FOR LATER: MY ISSUE RIGHT NOW IS THAT I AM USING THE SAME ARRAY TO DISPLAY AND MAKE CALCULATIONS ON
//  I NEED TO SEPARATE THE TWO IN ORDER TO KEEP THE DATA CLEAN
// LISTENER
document.querySelectorAll('.calcBtn').forEach(button => {
    button.addEventListener('click', function() {
        let display = document.querySelector('.numField');
        let field = document.querySelector('.field');
        let num = this.getAttribute('data-target');
        displayValue.push(num)
        if (displayValue.length <= 22) {
            if (num === 'AC') {
                clearField(field, displayValue)
            } else if (num === 'negate') {
                console.log("Negate works")
                displayValue.pop()
            } else if (num === '=') {
                secondOperand = num
                displayValue.textContent = calculate(firstOperand, secondOperand);
                // displayValue.pop()
            } else if (num === 'x') {
                firstOperand = displayValue.join("");
            } else if (num === '-') {

            } else if (num === '%') {

            } else if (num === '+') {
                displayValue.pop();
                firstOperand = displayValue.join("");
                clearField(field, displayValue);

            } else {
                field.textContent = num;
                field.textContent = displayValue.join("");
            }
        } else {
            console.log("Error Cannot Exceed 22 digits")
            if (num === 'AC') {
                displayValue.splice(0, prevNum.length)
                field.textContent = clear;
            }
        }
        // console.log(p)
        // console.log(this.id + " - clicked")
    });
});

// OPERATIONS
let add = function(firstOperand, secondOperand) {
    return firstOperand + secondOperand;
}

let subract = function(firstOperand, secondOperand) {
    return firstOperand - secondOperand;
}

let divide = function(firstOperand, secondOperand) {
    return firstOperand / secondOperand;
}

let multiply = function(arr) {

}

let exponentiate = function(arr) {

}

let modulo = function(arr) {
    
}

let clearField = function(display, arr) {
    arr.splice(0, displayValue.length)
    display.textContent = clear;
}

let negateNum = function(arr) {

}

let calculate = function(firstOperand, secondOperand) {
    // Handle all functions in here

    return add(firstOperand, secondOperand);
}