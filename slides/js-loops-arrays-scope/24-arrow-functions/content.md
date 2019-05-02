# Arrow functions `=>`

* An abbreviated syntax for working with functions
* AKA Fat arrow
* Make code more readable and compact

### Function

<pre><code class="language-js">
var studentList = <span class="highlight">function(students) {</span>
    console.log(students);
}
studentList(["Joe", "Cindy", "Jeanne"]);
</code></pre>


### Arrow function

<pre><code class="language-js">
studentList(["Joe", "Cindy", "Jeanne"]);
var studentList = <span class="highlight">(students) =></span> console.log(students);
studentList(["Joe", "Cindy", "Jeanne"]);
</code></pre>
