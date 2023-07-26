const reverseString = function(texts){
    let revertext='';
    let textLeght = 0;
    for(let text of texts){
        textLeght++;
    }
    for(let i = 1;i <= textLeght;i++)
    {
        revertext += texts[textLeght-i];
    }
    return revertext;
} ;

// Do not edit below this line
module.exports = reverseString;
