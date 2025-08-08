
/** 
 * BASIC PROMISE 
 * 
 * Write a function delayedHello() that returns a Promise which resolves after 1 second with "Hello".
 * */

function delayedHello() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("hello"), 3000);
  })
}

delayedHello().then((val) => console.log(val));

/**
 * PROMISE THAT MAY REJECT
 * 
 * Write a function maybeFail() that returns a Promise which randomly resolves to Success or rejects with Failed
 */

function mayFail() {
  return new Promise((resolve, reject) => {
    const poor = Math.round(Math.random());
    if(poor === 1) {
      resolve("Succeed!");
    } else {
      reject("Failed!")
    }
  })
}

// mayFail().then(val => console.log(val)).catch(e => console.log(e));

/** 
 * PROMISIFY setTimeout 
 * 
 * Write a sleep(ms) function that returns a Promise that resolves after ms milliseconds.
*/

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

sleep(2000).then(() => console.log("After"));

/**
 * CHAINED PROMISES
 * 
 * Create a chain of 3 .then() calls that: 1. Starts with a value of 2, 2. Doubles it, 3. Adds 10, 4. Logs the final result
 */

new Promise((resolve) => { resolve(2) })
  .then((val) => { return new Promise((resolve) => resolve(val * 2)) })
  .then((val) => { return new Promise((resolve) => resolve(val + 10)) })
  .then((val) => { console.log(val) });

// alternative. then wraps the value in a Promise
Promise.resolve(2)
  .then(val => val * 2)
  .then(val => val + 10)
  .then(console.log); // 14

/**
 * USING async/await
 * 
 * Write an async function getResult() that calls maybeFail() using await, and handles errors using try/catch.
 */

async function getResult() {
  try {
    const a = await mayFail();
    console.log(a);
  } catch(e) {
    console.log(e);
  }
}

getResult().then(() => {});

/** 
 * PARALLEL EXECUTION WITH Promise.all 
 * 
 * Write an async function that runs three Promises in parallel (each resolves after a different time) and returns an array of their results after all are done.
 * 
 * */

function parallelPromises() {
  const a = new Promise((resolve) => setTimeout(() => resolve("A"), 2000));
  const b = new Promise((resolve) => setTimeout(() => resolve("B"), 2000));
  const c = new Promise((resolve) => setTimeout(() => resolve("C"), 5000));

  Promise.all([a, b, c]).then((responses) => {
    for(const response of responses) {
      console.log(response);
    }
  })
}

parallelPromises();

/**
 * PROMISE RACE
 * 
 * Create 2 Promises: one resolves in 1s, another in 2s. Use Promise.race() to get the result of whichever finishes first.
 */

function race() {
  const a = new Promise((resolve) => setTimeout(() => resolve("FAST"), 2000));
  const b = new Promise((resolve) => setTimeout(() => resolve("SLOW"), 4000));

  Promise.race([a, b]).then(value => console.log(value));
}

race();

/**
 *  SEQUENTIAL EXECUTION WITH async/await
 *  You have an array of async tasks. Write a function that runs them one by one in order — not in parallel.
 */

async function sequential() {
  const fast = await new Promise((resolve) => setTimeout(() => resolve("FAST"), 2000));
  console.log("sequential" + fast);
  const slow = await new Promise((resolve) => setTimeout(() => resolve("SLOW"), 4000));
  console.log("sequential" + slow);
}

sequential();