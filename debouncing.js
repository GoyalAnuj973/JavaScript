let counter = 0;
const getData = () => {
    console.log("Fetching Data ..", counter++);
}

const debounce = function (fn,d) {
    let timer;
    return function(){
        let context  =  this,
            args = arguments;
        timer = setTimeout(() => {
            getData.apply(context, arguments);
        },d);
    }
}

const betterFunction = debounce(getData, 300);