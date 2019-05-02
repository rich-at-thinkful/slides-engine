# Functions as arguments

<div class="row">
<div class="cell-4">

<pre><code id="function-arguments">
function myForEach(array, <span class="fragment" data-style="highlight-in">callback</span>) {
  for (let i = 0; i < array.length; i++) {
    <span class="fragment" data-style="highlight-in" data-index="2">callback</span>(array[i], i);
  }
}

const arr = [0, 2, 7, 9, 10];

myForEach(arr, function(value, index) {
  console.log('Value at index ' + index + ' is ' + value);
});

myForEach(arr, function(value, index) {
  console.log('Here is the value! ' + value);
});
</pre></code>

</div>

<div class="cell-2">

"Placeholder" for a function to be defined {.annotation .fragment data-line=1 data-for=function-arguments}

Invoking the placeholder function, providing values for the parameters {.annotation .fragment data-index=2 data-line=3 data-for=function-arguments}

Sending in two different anonymous functions {.annotation .fragment data-line="9 13" data-index=3 data-for=function-arguments}

</div>
</div>
