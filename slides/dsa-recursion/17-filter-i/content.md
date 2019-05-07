# One more example

## What does this program do?

<pre><code class="language-js">
const <span class="highlight">filter</span> = function(arr, predicate){
    //base case
    if (!arr.length){
        return [];
    }
    if (<span class="highlight highlight-secondary">predicate</span>(arr[0])) {
        return [arr[0], ...filter(arr.slice(1), <span class="highlight highlight-secondary">predicate</span>)];
    }
    return <span class="highlight">filter</span>(arr.slice(1), <span class="highlight highlight-secondary">predicate</span>);
};

let arr = [10,5,6,3,8];
console.log(filter(arr, <span class="highlight highlight-secondary">x => x < 7</span>));
</code></pre>

* Lets walk through this example
* What is the base case?
* Can you explain what's happening in each recursive call?
