// function mult(a,b,c){
//     const result = a*b*c;
//     console.log(result);
// }

// mult(1,2,3);
// mult(1,2,"abc");    // NaN
// mult(); //NaN
// console.log(mult(1,2,3));   // as function does not return anything therefore undefined.

// --------------------------------------------------------------------------------------------

// function concatenateString(a,b){
//     return a+b;
// }

// console.log(concatenateString("Heloo"," world"));

//  ---------------------------------------------------------------------------------------

// function outerFunction(a,b){
//     const sum = a+b;
    
//     function innerFunction(sum){
//         let v = 10;
//         return sum*sum;
//     }

//     console.log(v);     // v scope is limited till function innerFunction therefore will give error:- ReferenceError: v is not defined

//     console.log(innerFunction(sum));
// }

// outerFunction(1,2);

// ------------------------------------------------------------------------------------------------

// const myFun = function(){};

// console.log(myFun);     // [Function: myFun]
// console.log(myFun());   // undefined

// ------------------------------------------------------------------------------------------------
let i = 1;

const num = setInterval(function(){
    console.log("message: "+i);
    i++;
}, 2000);

//console.log(num);

setTimeout(function(){
    clearInterval(num);
    console.log("Interval cleared");
}, 12000);