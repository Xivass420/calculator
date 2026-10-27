//Functions: Addition, subtraction, multiplication, division
//Use an array to store calculation history
//Text based console or basic HTML for output
//Visualize the design using flowcharts or pseudocode

// test edge cases (e.g., ./0)

//Write a README file for your GitHub Ripo

//Maintainance
//Handle invalid inputs (e.g., non numeric numbers)
//Add more operations in the future

let calcData = []

function addToCalcData(num1, operator, num2, result) {
    const calculations = {
        operands: [num1, num2],
        operator: operator,
        results: result
    }
    calcData.push(calculations)
}



function add(num1, num2) {
    const result = num1 + num2
    addToCalcData(num1, "+", num2, result)
    return result;
}

function subtract(num1, num2) {
    const result = num1 - num2
    addToCalcData(num1, "-", num2, result)
    return result;
}

function multiply(num1, num2) {
    const result = num1 * num2
    addToCalcData(num1, "*", num2, result)
    return result;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Operation cant divide by 0"
    }
        const result = num1 / num2
        addToCalcData(num1, "/", num2, result)
        return result;
}

console.log(multiply(20, 10))

// {operation: 'add', operands: [a, b], results: x}