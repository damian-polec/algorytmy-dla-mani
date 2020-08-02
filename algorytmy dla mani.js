// Intermediate Algorithm Scripting: Sum All Numbers in a RangePassed
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

//Rozwiązanie 1
function sumAll(arr) {
  let array = arr;
  if(arr[0] > arr[1]) {
    array = arr.reverse();
  }
  let sum = 0;
  for(let i = array[0]; i <= array[1]; i++) {
    sum += i;
  }
  return sum;
}

//Rozwiązanie 2
function sumAll(arr) {
  let array = arr.sort((a,b) => a-b)
  let sum = 0;
  for(let i = array[0]; i <= array[1]; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

// Intermediate Algorithm Scripting: Diff Two ArraysPassed
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

//Rozwiązanie 1

function diffArray(arr1, arr2) {
  const newArr = [];
  const array = arr1.concat(arr2);
  for(let i = 0; i < array.length; i++) {
    if((arr1.indexOf(array[i]) < 0 && arr2.indexOf(array[i]) >= 0) ||
       (arr1.indexOf(array[i]) >= 0 && arr2.indexOf(array[i]) < 0)) {
         newArr.push(array[i])
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Rozwiązanie 2

function diffArray(arr1, arr2) {
  const arr1Diff = arr1.filter(item => arr2.indexOf(item) < 0);
  const arr2Diff = arr2.filter(item => arr1.indexOf(item) < 0);
  return arr1Diff.concat(arr2Diff);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Intermediate Algorithm Scripting: Seek and DestroyPassed
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

// Rozwiązanie 1

function destroyer(arr) {
  const args = [...arguments];
  const array = arr;
  const destroyers = args.splice(1);
  return array.filter(arg => destroyers.indexOf(arg) < 0);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Intermediate Algorithm Scripting: Wherefore art thouPassed
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  const sourceKeys = Object.keys(source);
  for(let i = 0; i < collection.length; i++) {
    if(sourceKeys.length === 1) {
      if(collection[i][sourceKeys[0]] === source[sourceKeys[0]]) {
        arr.push(collection[i]);
      }
    } else {
      let isContainsEqualValues = true;
      for(let j = 0; j < sourceKeys.length; j++) {
        if(collection[i][sourceKeys[j]] !== source[sourceKeys[j]]) {
          isContainsEqualValues = false
        }
      }
      if(isContainsEqualValues) {
        arr.push(collection[i])
      }
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Intermediate Algorithm Scripting: Spinal Tap CasePassed
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes

function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();;
}

spinalCase('ThisIsSpinalTap');

// Intermediate Algorithm Scripting: Pig LatinPassed
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  const indexOfFirstVowel = str.search(/a|e|i|o|u/);
  if(!indexOfFirstVowel) {
    return str + 'way'
  } else {
    return str.substring(indexOfFirstVowel) + str.substring(0, indexOfFirstVowel) + 'ay';
  }
}

translatePigLatin("consonant");

// Intermediate Algorithm Scripting: Search and ReplacePassed
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  if(before.charCodeAt() >= 65 && before.charCodeAt() <=90) {
    return str.replace(before, after.replace(after.charAt(), after.charAt().toUpperCase()))
  }
  return str.replace(before, after);
}

myReplace("Let us go to the store", "store", "mall");

// Intermediate Algorithm Scripting: DNA PairingPassed
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  return str.split('').map(code => {
    switch(code) {
      case 'A':
        return ['A', 'T'];
      case 'T':
        return ['T', 'A'];
      case 'C':
        return ['C', 'G'];
      case 'G':
        return ['G', 'C'];
      default:
        break;
    }
  });
}

pairElement("GCG");

// Intermediate Algorithm Scripting: Missing lettersPassed
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  const letters = str.split('');
  let charCode = str.charCodeAt();
  for(let i = 1; i < letters.length; i++) {
    if((str.charCodeAt(i) - charCode) === 1) {
      charCode = str.charCodeAt(i);
    } else {
      return String.fromCharCode((charCode + 1))
    }
  }
  return undefined;
}

fearNotLetter("abce");


// Intermediate Algorithm Scripting: Sorted UnionPassed
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(arr) {
  const array = [...arguments].reduce((total, acc) =>  total.concat(acc));
  return array.reduce((total, number) => {
    if(total.indexOf(number) < 0) {
      total.push(number)
    }
    return total;
  }, []);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Intermediate Algorithm Scripting: Convert HTML EntitiesPassed
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  return str.split('').map(char => {
    switch(char) {
      case '&':
        return char.replace(char, '&amp;');
      case '<':
        return char.replace(char, '&lt;');
      case '>':
        return char.replace(char, '&gt;');
      case '"':
        return char.replace(char, '&quot;');
      case '\'':
        return char.replace(char, '&apos;');
      default:
        return char;
    }
  }).join('');
}

convertHTML("Dolce & Gabbana");

// Intermediate Algorithm Scripting: Sum All Odd Fibonacci NumbersPassed
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let firstNum = 0;
  let secNum = 1;
  let sum = 1;
  for(let number = secNum; number <= num; number) {
    secNum += firstNum;
    firstNum = number;

    if(secNum % 2 !== 0 && secNum <= num) {
      sum +=secNum;
    }
    number = secNum;
  }
  return sum;
}

sumFibs(4);

// Intermediate Algorithm Scripting: Sum All PrimesPassed
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
  const arrayOfNumbers = [];
  for (let i = 2; i <= num; i++) {
    arrayOfNumbers.push({num: i, isPrime: true});
  }
  
  for(let i = 0; i < arrayOfNumbers.length; i++) {
    if(i >= 2) {
      for(let j = 0; j < arrayOfNumbers.length; j++) {
        if(arrayOfNumbers[j].isPrime && i !== arrayOfNumbers[j].num && (arrayOfNumbers[j].num % i === 0)) {
          arrayOfNumbers[j].isPrime = false;
        }
      }
    }
  }

  return arrayOfNumbers.reduce((sum, number) => {
    if(number.isPrime) {
      sum += number.num
    }
    return sum;
  }, 0);
}

sumPrimes(10);

// Intermediate Algorithm Scripting: Smallest Common MultiplePassed
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  const array = arr.sort((a,b) => a-b)
  let max = array[1];
  let min = array[0];
  let scm = max;

  for (let i = max - 1; i >= min; i--) {
    if (scm % i) {
      scm += max;
      i = max;
    }
  }
  return scm;
}


smallestCommons([1,5]);

// Intermediate Algorithm Scripting: Drop itPassed
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  const array = [...arr];
  while (!func(array[0])) {
    array.splice(0,1);
  }
  return array;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});

// Intermediate Algorithm Scripting: SteamrollerPassed
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let array = [].concat(...arr);
  return array.some(Array.isArray) ? steamrollArray(array) : array;
}
steamrollArray([1, [2], [3, [[4]]]]);

// Intermediate Algorithm Scripting: Binary AgentsPassed
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {
  return str.split(' ').map(code => {
    const charCode = parseInt(code, 2);
    return String.fromCharCode(charCode);
  }).join('');
}

// Intermediate Algorithm Scripting: Everything Be TruePassed
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  let isTruthy = true;
  for(let i = 0; i < collection.length; i++){
    if(!collection[i][pre]) {
      isTruthy = false;
    }
  }
  return isTruthy;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// Intermediate Algorithm Scripting: Arguments OptionalPassed
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
  const args = [...arguments];
  function sumAll(arr) {
    return arr.reduce((total, num) => {
      return total+=num;
    })
  }
  if(args.some(el =>typeof el !== 'number')) {
    return undefined;
  }
  if(args.length > 1) {
    return sumAll(args)
  }
  return function() {
    const newArgs = [...arguments].concat(args)
    if(newArgs.some(el =>typeof el !== 'number')) {
      return undefined;
    }
    return sumAll(newArgs);
  }
}

addTogether(2)([3]);

// Intermediate Algorithm Scripting: Make a PersonPassed
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
 let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

// Intermediate Algorithm Scripting: Map the DebrisPassed
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(object => {
    const T = Math.round(2 * Math.PI * Math.sqrt((Math.pow(earthRadius + object.avgAlt, 3)/ GM)));
    return {name: object.name, orbitalPeriod: T}
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);