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

function wrapAdjective(star="*"){
  return (m="special")=>{
    return `You are ${star} ${m} ${star}`;
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

function actionApplyer(startingInteger, arrOfFns) {
  if (!arrOfFns.length){
    return startingInteger
  } else {
    let [mult,add,mod] = arrOfFns;
    startingInteger = mult(startingInteger)
    startingInteger = add(startingInteger)
    startingInteger = mod(startingInteger)
    return startingInteger
  }
}