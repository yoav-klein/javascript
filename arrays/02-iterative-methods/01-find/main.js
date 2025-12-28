
const arr = [];

arr.push(1);
arr.push('Yoav');
arr.push('Great');
arr.push('');

console.log(arr.find(e => e === 'Yoav'));

const numbers = [4, 3, 2, 4, 3, 6];

// use of the iterative method's callback signature: callbackFn(element, index, arr) 
// find the first number that is smaller than both its neighbors
console.log(numbers.find((number, index, numsArr) => {
    if(index > 0 && number >= numsArr[index - 1]) return false;
    if(index < numsArr.length - 1 && number >= numsArr[index + 1]) return false;

    return true;
}));