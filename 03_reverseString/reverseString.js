const reverseString = function(str) {
    let lg = str.length;
    let char = " ";
    let reverseStr = "";
    for (let i = 1; i <= lg; i++){
        char = str[lg - i];
        reverseStr = reverseStr + char;
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
