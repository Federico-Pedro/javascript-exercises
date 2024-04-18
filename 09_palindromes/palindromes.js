const palindromes = function (str) {
    const char = 'abcdefghijklmnopqrstuvwxyz123456789';
    newStr = str.toLowerCase()
                .split('')
                .filter((character) => char.includes(character))
                .join('');
    reverseStr = newStr.split('').reverse().join('');
    return newStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
