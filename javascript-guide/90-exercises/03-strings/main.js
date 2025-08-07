
/** CAPITALIZE FIRST LETTER */

function capitalizeFirst(s) {
    if(!s) return "";

    return s[0].toUpperCase() + s.substring(1);
}

console.log(capitalizeFirst("yoavklein"));

/** 
 * REVERSE WORDS
 * 
 * reverse each word in a sentence
 */

function reverseWords(s) {
    let reversed = [];
    let words = s.split(" ");
    reversed = words.map(word => word.split("").reverse().join(""))
    
    return reversed.join(" ");
}


console.log(reverseWords("Hello world"));

/** COUNT CHARACTER OCCURENCES */

function countChar(s, c) {
    let count = 0;
    for(let i = 0; i < s.length; ++i) {
        console.log(s[i]);
        if(c.toLowerCase() === s[i].toLowerCase()) ++count;
    }

    return count;
}

console.log(countChar("Banana", "n"))

/** REMOVE EXTRA SPACES */

function removeSpaces(s) {
    let words = s.split(" ").filter((word) => word !== "");

    return words.join(" ");
}

console.log(removeSpaces("   This     is    messy    "));