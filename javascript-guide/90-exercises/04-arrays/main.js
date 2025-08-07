
/** SUM ARRAY */

function sumArray(arr) {
    let sum = 0;
    for(const num of arr) {
        sum += num;
    }

    return sum;
}

console.log(sumArray([1, 4, 5, 6]));

/** DOUBLE ARRAY */

function verifyArr(arr) {
    if(!Array.isArray(arr)) {
        throw new TypeError("Not array");
    }
}

function doubleArr(arr) {
    verifyArr(arr);
    return arr.map((num) => num * 2);
}

console.log(doubleArr([1, 2, 3]));

/** MAX NUMBER IN ARRAY */

function maxInArray(arr) {
    verifyArr(arr);

    arr.sort((a, b) => { 
        if(a < b) return 1;
        if(a > b) return -1;
        return 0;
    });

    return arr[0];
}

console.log(maxInArray([1, 3, 200, 30]));

/** 
 * CHUNK ARRAY 
 * 
 * Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
 * */
function chunkArray(arr, n) {
    verifyArr(arr);
    let result = [];
    let i = 0;
    for (; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}

console.log(chunkArray([1, 3, 2, 4, 5, 6, 7, "arr", "last"], 2));

/** 
 * DEEP FLATTEN AN ARRAY
 * 
 * Write a function deepFlatten(arr) that flattens an array recursively (no matter how deeply nested).
 * 
 */



function deepFlatten(arr) {
    verifyArr(arr);
    let result = [];

    function deepFlattenRec(curr, res) {
        for(let i = 0; i < curr.length; ++i) {
            if(!Array.isArray(curr[i])) {
                res.push(curr[i]);
            } else {
                deepFlattenRec(curr[i], res);
            }
        }
    }

    deepFlattenRec(arr, result);

    return result;
}

console.log(deepFlatten([1, 2, [3, 4], [5, 6, [7, 8]]]));

/**
 * GROUP BY
 * 
 * Write a function groupBy(arr, fn) that groups items in the array based on the return value of fn
 */

function groupBy(arr, fn) {
    let o = {};

    for(const element of arr) {
        const bucket = fn(element);

        if(!(bucket in o)) {
            o[bucket] = new Array();
        } 
        o[bucket].push(element);
    }

    return o;
}

const fn = (element) => element.type;
console.log(groupBy([{ a: 1, type: "car" }, { b: 1, type: "car" }, { a:2, type: "animal" }], fn));

// another alternative
const groupBy2 = (arr, fn) =>
    arr.reduce((acc, item) => {
        const key = fn(item);
        (acc[key] ||= []).push(item);
        return acc;
    }, {});
    
    console.log(groupBy2([{ a: 1, type: "car" }, { b: 1, type: "car" }, { a:2, type: "animal" }], fn));