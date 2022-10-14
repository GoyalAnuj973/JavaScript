const cart = ["shoes",  "pants", "kurta"];

// const promise = createOrder(cart); // orderId
//console.log(promise) // will show Pending state due to setTimeout attached.

createOrder(cart)
    .then(function(orderId) {
        console.log(orderId);
        return orderId;
        // proceedToPayment(orderId);
    })
    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function(err) { // will be called if we reject the promise.
        console.log(err.message);
    });

/// Producer
function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        //logic for createOrder
        const orderId = "12345";
        if(orderId) {
            setTimeout(function() {
                resolve(orderId);
            }, 5000);
            // resolve(orderId);
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    ///
    return new Promise(function(resolve,reject) {
        resolve("payment Succesfull");
    })
}

function validateCart(cart) {
    return true; // just to resolve the promise.
}