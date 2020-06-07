// Your code here
function saturdayFun(activity="roller-skate"){
 return console.log(`This Saturday, I want to !${activity}`);
}
saturdayFun();
saturdayFun("bathe my dog");
function mondayWork(target="go to the office"){
  console.log(`This Monday, I will${target}` );
}
mondayWork();
mondayWork("I willwork from home");

function wrapAdjective(star="*"){
  return (m="special")=>{
    return console.log(`You are ${star} ${m} ${star}`);
  }
}

let calculator{
   add: ()=>1+3;
   subtract: ()=> 1-3;
    multiply:()=> 1*3;
    divide: ()=> 10/5;
}