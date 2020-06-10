# Hash Functions

* Convert data of an arbitrary size to data of a fixed size
    * E.g. Any string to a 32-bit integer
* The same input will always give the same output
* For hash maps, converts the key to an integer index into the data table

<div class="row">
<div class="cell-1">

* `"Alice"` {#hash-functions-key-1}
* `"Bob"` {#hash-functions-key-2 .fragment data-index=1}
* `"Carol"` {#hash-functions-key-3 .fragment data-index=2}

</div>


<div class="cell-1"></div>

<div class="cell-2">

Hash function {.center .highlight #hash-functions-hash-fn}

</div>

<div class="cell-1"></div>

<div class="cell-1">

* Position 4 {#hash-functions-hash-1}
* Position 2 {#hash-functions-hash-2 .fragment data-index=1}
* Position 2 {#hash-functions-hash-3 .fragment data-index=2}

</div>
</div>

<div class="line line-arrow-end" data-from="hash-functions-key-1" data-to="hash-functions-hash-fn"></div>
<div class="line" data-from="hash-functions-key-2" data-to="hash-functions-hash-fn"></div>
<div class="line" data-from="hash-functions-key-3" data-to="hash-functions-hash-fn"></div>

<div class="line line-arrow-end" data-from="hash-functions-hash-fn" data-to="hash-functions-hash-1"></div>
<div class="line line-arrow-end" data-from="hash-functions-hash-fn" data-to="hash-functions-hash-2"></div>
<div class="line line-arrow-end" data-from="hash-functions-hash-fn" data-to="hash-functions-hash-3"></div>

When two keys hash to the same position, it's called a *collision* {.bigger .fragment data-index=2}
