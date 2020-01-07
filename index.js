function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`

function wrapAdjective(string = "*"){
    return (adj = "special") => `You are ${string}${adj}${string}!`
}

const Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

function actionApplyer(int, arr){
    let x = int
    arr.forEach(fn => x = fn(x))
    return x
}