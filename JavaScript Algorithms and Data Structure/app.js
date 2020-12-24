// Basic Algorithm Scripting: Convert Celsius to FahrenheitPassed
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9 / 5, plus 32.

// You are given a variable celsius representing a temperature in Celsius.Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit

function convertToF(celsius) {
    let fahrenheit = celsius*(9/5) + 32;
    return fahrenheit;
  }
  
  convertToF(30);

//Basic Algorithm Scripting: Reverse a StringPassed
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
    return str.split("").reverse().join("");
  }

  reverseString("hello");

//   Basic Algorithm Scripting: Factorialize a Number

// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
    let result = 1;
    for (let i=1; i <= num; i++) {
      result *= i
    }
      return result;
    }
  factorialize(5);

// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.



