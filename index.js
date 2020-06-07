// Your code here
function saturdayFun(activity="roller-skate"){
 return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");
function mondayWork(target="go to the office"){
  return `This Monday, I will ${target}.`;
}
mondayWork();
mondayWork("I willwork from home");

function wrapAdjective(visualFlair="*") {
  return function (adjective='special') {
    return `You are ${visualFlair}${adjective}${visualFlair}!`
  }
}

let Calculator = {
  add: function () {
    return 1 + 3
  },
  subtract: function () {
    return 1 - 3
  },
  multiply: function () {
    return 1 * 3
  },
  divide: function () {
    return 10 / 5
  }
}


function actionApplyer(startingInt, arrayOfFunctions) {
  if (!arrayOfFunctions.length){
    return startingInt
  } else {
    let [mult,add,mod] = arrayOfFunctions;
    startingInt =mult(startingInt)
    startingInt =add(startingInt)
    startingInt =mod(startingInt)
    return startingInt
  }
}