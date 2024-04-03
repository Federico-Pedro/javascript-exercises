const convertToCelsius = function(f) {
  let tempInC = Math.round(((f - 32 ) * 5/9) * 10) / 10;
  return tempInC;
};

const convertToFahrenheit = function(c) {
  let tempInF = Math.round(((c * 9/5) + 32) * 10) / 10;
  return tempInF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
