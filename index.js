// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapC = '*') {
    return function(adjective = "special") {
        return `You are ${wrapC}${adjective}${wrapC}!`
    }
}
let Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

function actionApplyer(i, functions) {
    return functions.reduce((x, func) => func(x), i);
}
