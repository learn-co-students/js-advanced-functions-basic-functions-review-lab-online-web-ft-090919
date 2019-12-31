// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(str='go to the office') {
    return `This Monday, I will ${str}.`;
}

function wrapAdjective(flair="*") {
    return function(p="special") {
        return `You are ${flair}${p}${flair}!`;
    }
}


let Calculator = {
    add: (a,b) => { return a+b },
    subtract: (a,b) => { return a-b },
    multiply: (a,b) => { return a*b },
    divide: (a,b) => { return a/b }
}

function actionApplyer(acc,funcs) {
    if (funcs.length === 0) {
        return acc;
    } else {
        let reduced = funcs.reduce((acc, cv) => {
            return cv(acc);
        }, acc)
        return reduced;
    }
}


arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

console.log(actionApplyer(13, arrayOfTransforms));