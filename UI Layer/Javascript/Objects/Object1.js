/*
let myPost = {};

myPost.postTile = "Object is of reference type";
myPost.postLikes = 0;
myPost.shared = false;

console.log(myPost);

myPost.postLikes++;

console.log(myPost);

delete myPost.shared;   // deleting property shared from object myPost.

console.log(myPost);
*/

// -----------------------------------------------------------

/*
const myVariable = {};

myVariable.a = 10;

console.log(myVariable);

myVariable.b = "Pratik";
myVariable.a = 39;

console.log(myVariable);

myVariable = {
    a: 10,
    c: 55
};      // will give error: TypeError: Assignment to constant variable.

console.log(myVariable);
*/

// --------------------------------------------------------------------------

// const myObject = {
//     a: 10
// };

// const copyOfMyObject = myObject;

// copyOfMyObject.b = false;

// console.log(myObject);
// console.log(copyOfMyObject);        // object is o reference type so values will get reflected.

// -------------------------------------------------------------------------------------

// let myObject = {
//     a: 10,
//     b: null,
//     c: "Pratik"
// };

// console.log(myObject["a"]); // o/p:- 10

// //console.log(myObject[b]);       // error: ReferenceError: b is not defined
//                                 // becoz it searches for variable b not property b.

// const lastProperty = "c";
// console.log(myObject[lastProperty]);

// myObject["new"+"Property"] = "Making of dynAMIC PROPERTY";

// console.log(myObject);

// ------------------------------------------------------------------------------

// let objectWithNestedObject = {};

// objectWithNestedObject.nestedObject = {};

// objectWithNestedObject.nestedObject.a = null;
// objectWithNestedObject.nestedObject["b"] = true;

// console.log(objectWithNestedObject);

// -----------------------------------------------------------------------------

const myCity = {
    city: "NY",
    cityGreetings: function(){
        console.log("Hello");
    }
};

console.log(myCity);
myCity.cityGreetings();