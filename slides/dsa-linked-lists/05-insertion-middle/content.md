# Insertion in the middle

* Traverse to the insertion point
* Create the node
* Set the new node's next pointer to the insertion node's next pointer
* Set the insertion node's next pointer to the new node

<div class="row">


`head`{#insertion-middle-head}


<div class="node" id="insertion-middle-l">
    <div class="node-inner fragment fragment-dn" data-style="out">L<div id="insertion-middle-l-next">next</div></div>
    <div class="node-inner fragment fragment-dn background-blue" data-style="in-out">L<div id="insertion-middle-l-next-ii">next</div></div>
    <div class="node-inner fragment fragment-dn" data-style="in" data-index="2">L<div id="insertion-middle-l-next-iii">next</div></div>
</div>
<div class="node" id="insertion-middle-n">
    <div class="node-inner fragment fragment-dn" data-style="out" data-index="2">N<div id="insertion-middle-n-next">next</div></div>
    <div class="node-inner fragment fragment-dn background-blue" data-style="in" data-index="2">N<div id="insertion-middle-n-next-ii">next</div></div>
</div>
<div class="node" id="insertion-middle-d">
    <div class="node-inner">D<div id="insertion-middle-d-next">next</div></div>
</div>

`null`{#insertion-middle-null}

</div>

<div class="row">

<div></div>
<div></div>

<div class="node fragment" id="insertion-middle-k" data-index="3">
    <div class="node-inner background-green">K<div id="insertion-middle-k-next">next</div></div>
</div>

<div></div>

</div>


<div class="line line-arrow-end" data-from="insertion-middle-head" data-to="insertion-middle-l" />
<div class="line line-arrow-end" data-from="insertion-middle-l-next" data-to="insertion-middle-n" />
<div class="line line-arrow-end" data-from="insertion-middle-l-next-ii" data-to="insertion-middle-n" />
<div class="line line-arrow-end" data-from="insertion-middle-l-next-iii" data-to="insertion-middle-n" />
<div class="line line-arrow-end" data-from="insertion-middle-n-next" data-to="insertion-middle-d" />
<div class="line line-arrow-end fragment" data-from="insertion-middle-n-next-ii" data-to="insertion-middle-d" data-style="out" data-index="5" />
<div class="line line-arrow-end" data-from="insertion-middle-d-next" data-to="insertion-middle-null" />
<div class="line line-arrow-end fragment" data-from="insertion-middle-k-next" data-to="insertion-middle-d" data-index="4" />
<div class="line line-arrow-end fragment" data-from="insertion-middle-n-next-ii" data-to="insertion-middle-k" data-index="5"/>
