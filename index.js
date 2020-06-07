// Your code here
function saturdayFun(activity="roller-skate"){
 return `This Saturday, I want to !${activity}`;
}
saturdayFun();
saturdayFun("bathe my dog");
function mondayWork(target="go to the office"){
  return `This Monday, I will${target}`;
}
mondayWork();
mondayWork("I willwork from home");

function wrapAdjective(star="*"){
  return (m="special")=>{
    return `You are ${star} ${m} ${star}`;
  }
}

let calculator={
   add: ()=>1+3,
   subtract: ()=> 1-3,
    multiply:()=> 1*3,
    divide: ()=> 10/5,
};

function actionApplyer(startingInteger, arrOfFns) {
  if (!arrOfFns.length){
    return startingInteger
  } else {
    let [mult,add,mod] = arrOfFns;
    startingInt = mult(startingInt)
    startingInt = add(startingInteger)
    startingInt = mod(startingInteger)
    return startingInt
  }
}