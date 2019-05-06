# Why parallelize promises?

## Performing lots of asynchronous tasks at once


<div class="row">
<div class="cell-4">

* Make an AJAX request for a user's repositories
* Decode the repository data in the response
* For each repository:
    * Make a request to get the README
* Display a count of how many repos are missing READMEs

</div>
<div class="cell-2">

<div class="node"><div id="parallel-a" class="node-inner"></div></div>
<div class="node"><div id="parallel-b" class="node-inner"></div></div>
<div class="row">
    <div class="node"><div id="parallel-c" class="node-inner"></div></div>
    <div class="node"><div id="parallel-d" class="node-inner"></div></div>
    <div class="node"><div id="parallel-e" class="node-inner"></div></div>
</div>
<div class="node"><div id="parallel-f" class="node-inner"></div></div>

<div class="line" data-from="parallel-a" data-to="parallel-b"></div>
<div class="line" data-from="parallel-b" data-to="parallel-c"></div>
<div class="line" data-from="parallel-b" data-to="parallel-d"></div>
<div class="line" data-from="parallel-b" data-to="parallel-e"></div>
<div class="line" data-from="parallel-c" data-to="parallel-f"></div>
<div class="line" data-from="parallel-d" data-to="parallel-f"></div>
<div class="line" data-from="parallel-e" data-to="parallel-f"></div>

</div>
</div>
