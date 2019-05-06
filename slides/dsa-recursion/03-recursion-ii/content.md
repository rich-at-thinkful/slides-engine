# Recursion

## A recursive method is one that calls itself

<pre><code class="language-javascript">
const <span class="highlight">countDown</span> = function (some parameters) {
    // other logic that the function should perform

    <span class="highlight">countDown</span>(some other parameters);
};

countDown(5);
</code></pre>
