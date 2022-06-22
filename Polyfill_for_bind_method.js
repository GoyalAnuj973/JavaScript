let name = {
    fisrtname: "Anuj",
    lastname: "Goyal"
}

let printName = function () {
    console.log(this.fisrtname + " " + this.lastname);
}

let printMyName = printName.bind(name, "Dehradun");
printMyName("Uttrakhand");

Function.prototype.mybind = function(...args) {
    let obj = this,
        params = args.slice(1);
    return function (...args2) {
        // obj.call(args[0]);
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.mybind(name, "Dehradun");
printMyName2("Uttrakhand");