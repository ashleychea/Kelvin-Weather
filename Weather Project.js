// A const variable was named kelvin and set to equal 293. Output if put into console.log(); 293.
const kelvin = 293;

// A const variable was named celsius and performed the action of taking the number given to kelvin and subtracting it by 273 to get the new answer. Output if put into console.log(); 20.
const celsius = kelvin - 273;

// A let variable was named farhrenheit (I used let because it can be changed unlike const). Fahrenheit took the value of celsius but multiplied it by (9/5) and added 32. 
let fahrenheit = celsius * (9/5) + 32;

// The Math.floor() operator will take the decimal answer of fahrenheit and round it down to the nearest whole number.
fahrenheit = Math.floor(fahrenheit);

// Using String Interpolation, specifically using the template literal: ${} to make easier to log strings together without having to use ' + '. Output: The temperature is 68 degrees Fahrenheit. 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Newton was declared, the Math.floor operator was used to round the decimal down to the nearest whole number, a template literal was used to log the strings together. Output: The temperature is 6 degrees Newton.
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
