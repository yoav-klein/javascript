
import { createCommon } from './common.js';

function callback1() { console.log("Callback 1"); }
function callback2() { console.log("Callback 2"); }

const run = createCommon({ callback1: callback1, callback2: callback2});
run();