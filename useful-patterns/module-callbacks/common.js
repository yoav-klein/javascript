

function createCommon(callbacks) {

    const {
        callback1, callback2
    } = callbacks;

    function foo() {
        console.log("Foo");
        callback1();
        callback2();
    }

    function bar() {
        console.log("Bar");
        callback1();
        callback2();
    }

    return { foo, bar };
}

export { createCommon };