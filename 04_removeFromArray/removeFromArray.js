const removeFromArray = function(arr, x, y, z, w ) {
    let lg = arr.length;
    let newArr = [];
    for (let i = 0; i < lg; i++){
        if ((arr[i] === x) || (arr[i] === y) || (arr[i] === z) || (arr[i] === w)) {
            continue;
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
