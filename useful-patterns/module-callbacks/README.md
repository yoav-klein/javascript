Callback Patterns
---

It can be useful to have a module that contains some methods, that call callbacks that you pass to it.
You can pass callbacks to functions, but how do you pass a callback to a module?

So the trick is - the module has a function `createCommon` that takes an object that contains all the callbacks. Then, it returns any number of functions that can use those callbacks.