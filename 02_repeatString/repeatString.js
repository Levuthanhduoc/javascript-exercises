const repeatString = function(RepeatText,RepeatTime) {
    let resultText ='';
    if(RepeatTime <0){
        return "ERROR";
    }
    else if(RepeatTime == 0){
        return "";
    }
    for(let i = 0; i < Math.abs(RepeatTime);i++)
    {
        resultText = resultText + RepeatText;
    }
    return resultText;
};

// Do not edit below this line
module.exports = repeatString;
