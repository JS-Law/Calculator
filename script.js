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

document.querySelectorAll('.calcBtn').forEach(button => {
    button.addEventListener('click', function() {
        console.log(this.id + " - clicked")
    });
});