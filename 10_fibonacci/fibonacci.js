const fibonacci = function(position) {
    position = +position;
    if (position < 0){
        return 'OOPS';
    }else if (position <= 1){
    return position;
    } 
  return fibonacci(position-1) + fibonacci(position-2);
};

// Do not edit below this line
module.exports = fibonacci;
