# Insertion at the start

* Create the new node
* Set the new node's next pointer to the head's next pointer
* Set the head pointer to the new node

<div class="row">


`head`{#insertion-start-head}


<div class="node" id="insertion-start-n">
    <div class="node-inner">N<div id="insertion-start-n-next">next</div></div>
</div>
<div class="node" id="insertion-start-k">
    <div class="node-inner">k<div id="insertion-start-k-next">next</div></div>
</div>
<div class="node" id="insertion-start-d">
    <div class="node-inner">D<div id="insertion-start-d-next">next</div></div>
</div>

`null`{#insertion-start-null}

</div>

<div class="row">

<div class="node fragment" id="insertion-start-l">
    <div class="node-inner background-green">L<div id="insertion-start-l-next">next</div></div>
</div>
<div></div>
<div></div>
<div></div>

</div>


<div class="line line-arrow-end fragment" data-from="insertion-start-l" data-to="insertion-start-n" data-index="2" />
<div class="line line-arrow-end fragment" data-from="insertion-start-head" data-to="insertion-start-n" data-style="out" data-index="3" />
<div class="line line-arrow-end fragment" data-from="insertion-start-head" data-to="insertion-start-l" data-style="in" data-index="3" />
<div class="line line-arrow-end" data-from="insertion-start-n-next" data-to="insertion-start-k" />
<div class="line line-arrow-end" data-from="insertion-start-k-next" data-to="insertion-start-d" />
<div class="line line-arrow-end" data-from="insertion-start-d-next" data-to="insertion-start-null" />
