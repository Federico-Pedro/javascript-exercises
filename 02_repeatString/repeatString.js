const repeatString = function(str, num) {
    let txt = ""
    if (num < 0){
        txt = 'ERROR';
    } else {
        for (let i = 0; i < num; i++){
            txt += str; 
        }
    }
    return txt;
    };
   


// Do not edit below this line
module.exports = repeatString;
