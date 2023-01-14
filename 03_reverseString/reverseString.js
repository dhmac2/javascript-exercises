const reverseString = function(str) {
    const wordLength = str.length - 1;
    const revArray = [];
    for (i = wordLength; i >= 0; i--){
        revArray.push(str[i]);
    }
    return revArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
