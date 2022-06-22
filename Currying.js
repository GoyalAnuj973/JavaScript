// let multiply = function (x,y) {
//     console.log(x * y);
// }

// Closures of javascript
let multiply = function (x) {
    return function(y) {
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(2);
// let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5); // will give 10

let multiplyByThree = multiply(3);
// let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5); // will give 15