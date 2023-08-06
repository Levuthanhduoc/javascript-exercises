const fibonacci = function() {
    num = Number(arguments[0]);
    arr = [1,1]
    if(num < 0){
        return"OOPS";
    }
    else if(num == 0){
        return arr[0];
    }
    for(let i = 2; i <= num;i++){
        arr[i] = arr[i-2] + arr[i-1];
    }
    console.log(arr);
    return arr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
