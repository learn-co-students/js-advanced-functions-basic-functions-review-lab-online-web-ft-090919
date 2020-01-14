// Your code here
 function saturdayFun(activity='roller-skate'){
     return `This Saturday, I want to ${activity}!`
 }

 const mondayWork = function(activity='go to the office'){
     return `This Monday, I will ${activity}.`
 }

 function wrapAdjective(flair="*"){
     return function(param='special'){
         return `You are ${flair}${param}${flair}!`
     }
 }

 const Calculator = {
     add: (x, y) => {return x + y},
     subtract: (x, y) => {return x - y},
     multiply: (x, y) => {return x * y},
     divide: (x, y) => {return x / y},
 }

 function actionApplyer(start, funcArray){
     if (funcArray === []){
         return start
     } else {
         return funcArray.reduce((final, currentFunc) => {
           return currentFunc(final)
         }, start)
     }
 } 