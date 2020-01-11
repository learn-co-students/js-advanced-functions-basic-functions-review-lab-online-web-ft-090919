function saturdayFun (activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity="go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapper = "*"){
    return function( input = "special" ){
        return `You are ${wrapper}${input}${wrapper}!`
    }
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

function actionApplyer(start,ray){
    let beginning = start;

    for (let i = 0; i < ray.length; i++){
        beginning = ray[i](beginning);
    }
    return beginning;
}
