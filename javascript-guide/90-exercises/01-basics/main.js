
// FizzBuzz

// a function fizzBuzz that takes a number n, prints the numbers 1 to n
// for multiples of 3 prints Fizz, for multiples of 5 prints Buzz, and for multiples of both prints FizzBuzz 

function fizzBuzz(n) {
    for(i = 0; i < n; ++i) {
        if((i % 3 == 0) && (i % 5 == 0)) {
            console.log("FizzBuzz");
            continue;
        }
        if(i % 3 == 0) {
            console.log("Fizz");
        }
        if(i % 5 == 0) {
            console.log("Buzz");
        }
        if((i % 3 != 0) && (i % 5 != 0)) {
            console.log(i)
        }
    }
}

fizzBuzz(30);

/**
 * REVERSE STRING
 */

function reverseString(s) {
    let retStr = '';
    for(i = s.length - 1; i >= 0; --i) {
        console.log(s[i])
        retStr += s[i];
    }

    return retStr
}

console.log(reverseString("Yoav"));

/**
 * COUNT VOWELS
 * 
 * write a function countVowels that counts that counts the number of vowels a, e, i, o, u in a string
 */

function countVowels(s) {
    let numVowels = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(i = 0; i < s.length; ++i) {
        if(vowels.includes(s[i])) {
            numVowels++;
        }
    }

    return numVowels;
}

console.log(countVowels("foobar"));
console.log(countVowels("ppp"));
console.log(countVowels("bob"));

/**
 * FACTORIAL
 * 
 * write a factorial function
 */

function factorial(n) {
    if(n === 1) return 1;

    return n * (factorial(n-1));
}

console.log(factorial(5));

/** FIND LARGEST 
 * 
 * find the largest number in an array
*/

function maxInArray(arr) {
    let currentMax = arr[0];

    for(i = 1; i < arr.length; ++i) {
        if(arr[i] > currentMax) {
            currentMax = arr[i];
        }
    }

    return currentMax;
}

console.log(maxInArray([50, 3, 2, 20, 30]));

/** 
 * PALINDROME CHECKER 
 * 
 * write a function that checks if a string is a palyndrome
*/

function isPalindrome(s) {
    for(let i = 0, j = s.length - 1; i < j; ++i, --j) {
        if(s[i] != s[j]) {
            return false;
        }

        return true;
    }
}

console.log(isPalindrome('laminimal'));

/**
 * SUM OF NUMBERS
 * 
 * write a number that returns the sum of all numbers from 1 to n
 */

function sumOfNumbers(n) {
    let sum = 0;
    for(let i = 0; i <= n; ++i) {
        sum += i;
    }

    return sum;
}

console.log(sumOfNumbers(5));

