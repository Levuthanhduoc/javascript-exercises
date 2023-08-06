const palindromes = function() {
    let arr = arguments[0];
    let newarr;
    arr = cleanString(arr);
    newarr = reverser(arr);
    if(newarr.join("") === arr.join("")){
        return true;
    }
    else{ return false;}
};

function reverser(){
    let arr = arguments[0];
    let newarr = [];
    for(let i = arr.length - 1; i >= 0 ; i--){
        newarr.push(arr[i]);
    }
    return newarr;
}
function cleanString(){
    let arr = (arguments[0].toLowerCase()).split("");
    let remove = ["!","?",",",".",":"," "];
    let end = 0;
    while(end < arr.length){
        for(let item of remove){
            if(arr.indexOf(item) != -1){
                arr.splice(arr.indexOf(item),1);
            }
        }
        end++;
    }
    return arr;
}
// Do not edit below this line
module.exports = palindromes;
