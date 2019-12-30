// Your code here
function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*'){
  return function(word = 'special'){
    return `You are ${flair}${word}${flair}!`
  }
}

let Calculator = new Object

Calculator.add = function(a,b){
  return a+b
}

Calculator.subtract = function(a,b){
  return a-b
}

Calculator.multiply = function(a,b){
  return a*b
}

Calculator.divide = function(a,b){
  return a/b
}

function actionApplyer(start, funcArray){
  if (funcArray.length > 0){
    funcArray.forEach(func => start = func(start))
  }
  return start
}
