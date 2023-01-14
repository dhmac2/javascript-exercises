const removeFromArray = function(array, ...arg) {
    const args = Array.from(arg);
    const length = args.length;
    for(i = 0; i < length; i++){
        j = array.indexOf(args[i]);
        if (j >= 0) {
            array.splice(j,1);
        }
    }
    
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
