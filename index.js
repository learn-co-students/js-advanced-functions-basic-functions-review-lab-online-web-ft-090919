function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(wrap = "*") {
    return function(adj = "special") {
        return `You are ${wrap}${adj}${wrap}!`;
    };
};

const Calculator = {
    // let add = function(num1, num2) {} doesn't work, why?
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
}

// Needed help on this one
// I understand what it's doing, but would have had trouble writing this on my own
// with the given tests
const actionApplyer = function(start, array) {
    let a = start
  
    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
    }
  
    return a
  }