const throttle = (func, limit) => {
    let flag = true;
    return function () {
        let context = this,
            args = arguments;
        if(flag) {
            func.apply(context,arguments);
            setTimeout(() => {
                flag=true;
            },100);
        }
    }
}

window.addEventListener("resize", throttle);