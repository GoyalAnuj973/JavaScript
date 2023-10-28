// When all the promises gets success then will give array of the result of all the promises as per their values.
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 success"), 2000);
});

Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log(res);
});

// If any one of the promise fails, then, will give the the respective result for it and those promises which are fulfilled will give values respectively.
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P4 success"), 3000);
});

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P5 failed"), 1000);
});

const p6 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P6 success"), 2000);
});

Promise.allSettled([p4, p5, p6])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });