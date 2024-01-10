"use strict";

// this in global space
console.log(this); // globalObject -> window(for browsers) and global(for inside nodejs environment)

// this inside a function
function x() {
    console.log(this); // -> Window(in normal mode) & undefined(in strict mode)
}
x();

// this inside non-strict mode -> (this substitution) -> If the value of this keyword is undefined or null
// , this will be replaced with globalObject only in Non-Strict Mode.

// this keyword value depends on how the this/function is called(window)
x(); // -> strict mode -> undefined
window.x(); // -> strict mode -> globalObject(Window)

// this inside a object's method
const obj = { // x is a method of object obj.
    a: 10,
    x: function() {
        console.log(this);  // -> {a:10, x:f} -> whenever we are inside a method then the value of this is the
    }, // is the object where that method is present.
};
obj.x();

// call, apply, bind methods (sharing methods)
const student1 = {
    name: "Akshay",
    printName: function() {
        console.log(this.name);
    },
};
student1.printName(); // -> Akshay

const student2 = {
    name:"Deepika", // -> here we cannot directly use student2.printName(), so we need to share this printName method and value of this
}
// so for above we can do:
student1.printName.call(student2); // -> Deepika

// this inside arrow function
const obj2 = {
    a: 10,
    x: () => {
        console.log(this);
    },
};
obj2.x(); // -> Window (it retains the this value from enclosing lexical context).

// this in a nested arrow function
const obj3 = {
    a: 10,
    x: function() {
        const y = () => {
            console.log(this);
        };
    },
};
obj3.x(); // -> {a: 10, x: f}

// this keyword in DOM
// see index.html
