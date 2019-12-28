const saturdayFun = (activity = "roller-skate") => `This Saturday, I want to ${activity}!`;

const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`;

const wrapAdjective = function(flair = "*") {
  return function(param = "special") {
    return `You are ${flair}${param}${flair}!`;
  }
};

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b;
  },
  multiply: function(a,b) {
    return a * b;
  },
  divide: function(a,b) {
    return a / b;
  },
  actionApplyer: function(int, [...fns]) {
      fns.forEach(fn => {
        return (fn(int));
      });
    }
};

function actionApplyer(int, fns) {
  fns.forEach(fn => {
    int = (fn(int));
  });

  return int;
}
