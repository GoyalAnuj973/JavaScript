let name = {
    firstname: "Anuj",
    lastname: "Goyal",
    // printFullName: function () {
    //     console.log(this.firstname + " " + this.lastname);
    // }
}

let printFullName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
}

printFullName.call(name, "Dehradun", "Uttrakhand");
// name.printFullName();

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}

printFullName.call(name2,"Mumbai", "Maharashtra");

printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

//bind method
let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName);
printMyName();