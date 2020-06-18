# Insertion at the end

* Traverse to the end
* Create the new node
* Set the new node's next pointer to null
* Set the end node's next pointer to the node

<div class="row">


`head`{#insertion-end-head}


<div class="node" id="insertion-end-l">
    <div class="node-inner fragment fragment-dn" data-style="out">L<div id="insertion-end-l-next">next</div></div>
    <div class="node-inner fragment fragment-dn background-blue" data-style="in-out">L<div id="insertion-end-l-next-ii">next</div></div>
    <div class="node-inner fragment fragment-dn" data-style="in" data-index="2">L<div id="insertion-end-l-next-iii">next</div></div>
</div>
<div class="node" id="insertion-end-n">
    <div class="node-inner fragment fragment-dn" data-style="out" data-index="2">N<div id="insertion-end-n-next">next</div></div>
    <div class="node-inner fragment fragment-dn background-blue" data-style="in-out" data-index="2">N<div id="insertion-end-n-next-ii">next</div></div>
    <div class="node-inner fragment fragment-dn" data-style="in" data-index="3">N<div id="insertion-end-n-next-iii">next</div></div>
</div>
<div class="node" id="insertion-end-k">
    <div class="node-inner fragment fragment-dn" data-style="out" data-index="3">K<div id="insertion-end-k-next">next</div></div>
    <div class="node-inner fragment fragment-dn background-blue" data-style="in" data-index="3">K<div id="insertion-end-k-next-ii">next</div></div>
</div>

`null`{#insertion-end-null}

</div>

<div class="row">

<div></div>
<div></div>
<div></div>

<div class="node" id="insertion-end-d">
    <div class="node-inner fragment background-green" data-index="4">D<div id="insertion-end-d-next">next</div></div>
</div>

</div>


<div class="line line-arrow-end" data-from="insertion-end-head" data-to="insertion-end-l" />
<div class="line line-arrow-end" data-from="insertion-end-l-next" data-to="insertion-end-n" />
<div class="line line-arrow-end" data-from="insertion-end-l-next-ii" data-to="insertion-end-n" />
<div class="line line-arrow-end" data-from="insertion-end-l-next-iii" data-to="insertion-end-n" />
<div class="line line-arrow-end" data-from="insertion-end-n-next" data-to="insertion-end-k" />
<div class="line line-arrow-end" data-from="insertion-end-n-next-ii" data-to="insertion-end-k" />
<div class="line line-arrow-end" data-from="insertion-end-n-next-iii" data-to="insertion-end-k" />
<div class="line line-arrow-end" data-from="insertion-end-k-next" data-to="insertion-end-null" />
<div class="line line-arrow-end fragment" data-from="insertion-end-k-next-ii" data-to="insertion-end-null" data-style="out" data-index="6"/>
<div class="line line-arrow-end fragment" data-from="insertion-end-k-next-ii" data-to="insertion-end-d" data-index="6"/>
<div class="line line-arrow-end fragment" data-from="insertion-end-d-next" data-to="insertion-end-null" data-index="5" data-from-side="r"/>
