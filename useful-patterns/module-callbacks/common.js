

function createCommon(callbacks) {

    const {
        callback1, callback2
    } = callbacks;

    function run() {
        console.log("Run");
        callback1();
        callback2();
    }

    return run;
}

export { createCommon };