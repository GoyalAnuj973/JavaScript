// Function Statement aka Function Declaration
function a() {
    console.log("a called");
} // it can be used before this code also i.e. hoisting will work for it.

// Function Expression
var b = function () {
    console.log("b called");
} // it cannot be used before this code also i.e. hoisting will not work for it.

//Anonymous function
// function () {

// } // no name -> syntax error but are used as values
   
// First Class Functions -> Ability to be used like values
// Thats why functions are first class citizens
