function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
};

let Calculator = {
  add: function add(n1, n2) {
    return n1 + n2;
  },
  subtract: function subtract(n1, n2) {
    return n1 - n2;
  },
  multiply: function multiply(n1, n2) {
    return n1 * n2;
  },
  divide: function divide(n1, n2) {
    return n1 / n2;
  }
};

let actionApplyer = function(int, array) {
  array.forEach(function(element) {
    int = element(int);
  });
  return int;
};

arrayOfTransforms = [
  function(a) {
    return a * 2;
  },
  function(a) {
    return a + 1000;
  },
  function(a) {
    return a % 7;
  }
];

function wrapAdjective(mySym) {
  return function(adj) {
    return `You are ${mySym}${adj}${mySym}!`;
  };
}
