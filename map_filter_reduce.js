const arr = [5,1,3,2,6];

//map():
const binary = arr.map((x) => x.toString(2));
console.log(binary);

//filter() out odd numbers:
const odd = arr.filter((x) => x%2);
console.log(odd);

// reduce() for finding the sum of elements:
const sum = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0); // 0 is the initial value of acc i.e accumulator.
console.log(sum);

// reduce() for finding max value in array:
//normal function for it:
function findMax(arr) {
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

//using reduce:
const max = arr.reduce(function(ans, curr) {
    if(curr>ans) {
        ans = curr;
    }
    return ans;
}, 0);
console.log(max);

const users = [
    {firstName: "akshay", lastName: "saini", age: "26"},
    {firstName: "donald", lastName: "trump", age: "75"},
    {firstName: "elon", lastName: "musk", age: "50"},
    {firstName: "deepika", lastName: "padukone", age: "26"},
];
// tricky map():
const outputname = users.map((x) => x.firstName + " " + x.lastName);
console.log(outputname);
// frequecy of ages:
const outputagefreq = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(outputagefreq);

// "fistname" of all people whose age is less then 30:
const output1 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(output1);
// second way :
const output2 = users.reduce(function(acc,curr) {
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, []);
console.log(output2);