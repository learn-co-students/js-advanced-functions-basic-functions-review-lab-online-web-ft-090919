// Your code here
function saturdayFun(arg = "roller-skate"){
    return `This Saturday, I want to ${arg}!`
};

function mondayWork(arg = "go to the office"){
    return `This Monday, I will ${arg}.`
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