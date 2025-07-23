
/** CONTROL FLOW AND ERROR HANDLING */

// if statement

let a = 1;
if(a === 2) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}


switch(a) {
    case 1: 
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    default:
        console.log("Some number");
        break;
}

/** EXCEPTIONS */

try {
    throw "Errorss...";
} catch(e) {
    console.log(e);
} finally {
    console.log("This will happen anyways");
}

// if finally returns a value, this is the return value of the function

function foo() {
    try {
        return 1;
    } catch(e) {

    } finally { 
        return 2;
    }
}

let val = foo()
console.log(val);

function bar() {
    try {
        throw "something";
    } catch(e) {
        return e;
    } finally {
        return 3;
    }
}

val = bar()
console.log(val);

// even if the catch re-throws, the return value of finally is what returns
function baz() {
    try {
        throw "something";
    } catch(e) {
        throw e;
    } finally {
        return 5;
    }
}

console.log(baz());