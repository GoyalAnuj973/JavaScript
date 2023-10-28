// When all the promises gets success then will give array of the result of all the promises.
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 success"), 2000);
});

Promise.all([p1, p2, p3]).then((res) => {
    console.log(res);
});

// If any one of the promise fails, then, will give the error of that respective promise
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P4 failed"), 3000);
});

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P5 failed"), 1000);
});

const p6 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P6 failed"), 2000);
});

Promise.all([p4, p5, p6])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
        console.log(err.errors); // for obtaining the array of erros from that Aggregate error which the previous line is giving us in case if all the errors fail.
    });