# When not to use arrow functions?

* They are generally intended to be used when defining callback functions, not top-level functions
* Arrow functions affect the `this`  keyword - the context of `this` is different
* We're working with `this` tomorrow when we cover objects
* Warning! Many libraries/frameworks make assumptions about `this` - you will need to know whether arrows functions break the behavior.

