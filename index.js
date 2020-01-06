// Your code here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
    }


function wrapAdjective(visual = '*') {
    return function(adjective = "special") {
        return `You are ${visual}${adjective}${visual}!`
    }
}

let Calculator = {
    add: function(x, y) {
        return x + y
    },
    subtract: function (x, y) {
        return x - y 
    },
    multiply: function(x, y) {
        return x * y
    },
    divide: function(x, y) {
        return x / y
    }
  }
  
function actionApplyer(int, arr) {
    arr.forEach(a => {
       int = (a(int)) 
    })
    return int
}
