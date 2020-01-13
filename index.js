// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
  return function(pram="special"){return `You are ${flair + pram + flair}!`}
}



const Calculator = {
  add: function(x,y){
      return x + y;
  },
  subtract: function(x,y){
      return x - y;
  },
  multiply: function(x,y){
      return x * y;
  },
  divide: function(x,y){
      return x / y;
  }
}

function actionApplyer(integer, array){
  if (array == ""){
    return integer
  } else {
    let result = array.reduce((total, funct) => {
      return funct(total)
    }, integer)
    return result
  }
}


