function calculate(operand1, operand2,operator){
    'use strict';

    let result = operator === '+' ? addNums(operand1,operand2)
    : operator === '-' ? subtractNums(operand1,operand2)
    : operator === '*' ? multiplyNums(operand1,operand2)
    : operator === '/' ? divideNums(operand1,operand2)
    : moduleNums(operand1,operand2);

    let sum = (operand1,operand2) => operand1 + operand2;
    let subtract = (operand1,operand2) => operand1 - operand2;
    let multiply = (operand1,operand2) => operand1 * operand2;
    let divide = (operand1,operand2) => operand1 / operand2;
    let moduleResult = (operand1,operand2) => operand1 % operand2;

    return result;
}