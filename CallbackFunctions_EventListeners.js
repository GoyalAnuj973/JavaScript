// What is Callback Function in JavaScript

// setTimeout(function () {
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// });

//Deep about Event Listeners
//Closures Demo with Event Listeners
// Scope Demo with Event Listeners
// Garbage Collection & removeEventListeners

function attachEventListeners() {
    let count=0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("Button Clicked", ++count);
    })
}
attachEventListeners();