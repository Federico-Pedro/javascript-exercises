const sumAll = function(num1, num2) {
    let numX ;
    if ((num1 < 0 || num2 < 0) || (typeof num1 != 'number' || typeof num2 != 'number')){
        return 'ERROR';
    } else if (num1 > num2){
        numX = num1;
        num1 = num2;
        num2 = numX;
    }

    let sum = 0;
    for (i = num1; i <= num2; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
