const convertToCelsius = function(farenheitTemp) {
  let celcius  = ((farenheitTemp - 32) * (5/9));
  let roundedCelcius = celcius.toFixed(1);
  let actualCelcius = parseFloat(roundedCelcius);
  return actualCelcius; 
};

const convertToFahrenheit = function(celciusTemp) {
  let farenheit = (celciusTemp * (9/5) + 32);
  let roundedFahrenheit = farenheit.toFixed(1);
  let actualFahrenheit = parseFloat(roundedFahrenheit);
  return actualFahrenheit;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
