const cart = ["shoes",  "pants", "kurta"];

//callback (earlier what we used to do)
createOrder(cart, function(orderId) {
    proceedToPayment(orderId);
}); 

// one more issue with calbbacks are => CALLBACK HELL -> Pyramid of DOOM. 
createOrder(cart, function(orderId) {
    proceedToPayment(orderId, function(paymentInfo) {
        showOrderSummary(paymentInfo, function() {
            updateWalletBalance();
        });
    });
});

// see below for better code using promise object

const promise = createOrder(cart);
// {data: undefined} -> {data: orderDetails}

promise.then(function(orderId) {
    proceedToPayment(orderId);
});

const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API); // fetch gives us the promise object and that will be given to user.

console.log(user);

user.then(function(data) {
    console.log(data);
}); // general way of handing the data coming from API calls.

// Promise Chaining and dont forget to use "return" as it will improve code execution and quality
createOrder(cart)
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function(paymentInfo) {
        return updateWalletBalance([paymentInfo]);
    })
