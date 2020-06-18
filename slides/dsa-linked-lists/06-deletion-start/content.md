# Deletion from the start

* Replace the head pointer with the head node's next pointer


`head`{#deletion-start-head} {.mb-2}

<div class="row">

<div></div>

<div class="node fragment" id="deletion-start-l" data-style="out" data-index="2">
    <div class="node-inner background-red">L<div id="deletion-start-l-next">next</div></div>
</div>
<div class="node" id="deletion-start-n">
    <div class="node-inner">N<div id="deletion-start-n-next">next</div></div>
</div>
<div class="node" id="deletion-start-k">
    <div class="node-inner">k<div id="deletion-start-k-next">next</div></div>
</div>
<div class="node" id="deletion-start-d">
    <div class="node-inner">D<div id="deletion-start-d-next">next</div></div>
</div>

`null`{#deletion-start-null}

</div>

<div class="line line-arrow-end fragment" data-from="deletion-start-head" data-to="deletion-start-l" data-style="out" />
<div class="line line-arrow-end fragment" data-from="deletion-start-head" data-to="deletion-start-n" />
<div class="line line-arrow-end" data-from="deletion-start-l-next" data-to="deletion-start-n" />
<div class="line line-arrow-end" data-from="deletion-start-n-next" data-to="deletion-start-k" />
<div class="line line-arrow-end" data-from="deletion-start-k-next" data-to="deletion-start-d" />
<div class="line line-arrow-end" data-from="deletion-start-d-next" data-to="deletion-start-null" />
