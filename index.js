// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun()

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

mondayWork()

function wrapAdjective(flair='*') {
    return function(param='special') {
        return `You are ${flair}${param}${flair}!`
    }
}

wrapAdjective()()

const Calculator = {
    add: function add(a, b) {
        return a + b
    },
    
    subtract: function subtract(a, b) {
        return a - b
    },
    
    multiply: function multiply(a, b) {
        return a * b
    },
    
    divide: function divide(a, b) {
        return a / b
    }
} 

function actionApplyer(integer, array) {
    if (array.size == 0) {
        return integer
    }
    let result = integer
    array.forEach(op => result = op(result))
    return result
}