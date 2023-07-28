const removeFromArray = function() {
    let args = Array.from(arguments)
    let removeArray = arguments[0], elementToRemove = args.slice(1);
    let newArray =[];
    let trigger = 1; /**if find elenent to remove change to 0 */
    for(let element of removeArray)
    {
        for(let removeElement of elementToRemove)
        {
            if(element === removeElement){
                trigger = 0;
                break;
            }
            else{
                trigger = 1;
            }
        }
        if(trigger ==1){
            newArray.push(element);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
