const findTheOldest = function() {
    const year = new Date().getFullYear()
    let death,live;
    let arr = arguments[0].map(function(item,index){
        death = item.yearOfDeath;
        if(item.yearOfDeath == undefined){
            death = year;
        }
        live = item.yearOfBirth;
        return {id:index,age:death - live,};
    })
    arr.sort((a,b)=>a.age>b.age?-1:a.age<b.age?1:0);
    console.log(arr);
    console.log(year);
    return arguments[0][arr[0].id];
};

// Do not edit below this line
module.exports = findTheOldest;
