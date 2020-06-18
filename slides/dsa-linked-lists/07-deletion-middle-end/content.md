# Deletion from the middle or end

* Navigate to the node before the node to delete
* Set the next pointer of the node before to the next pointer of the node to delete

<div class="row">


`head`{#deletion-middle-end-head}


<div class="node" id="deletion-middle-end-l">
    <div class="node-inner fragment fragment-dn" data-style="out">L<div id="deletion-middle-end-l-next">next</div></div>
    <div class="node-inner fragment fragment-dn background-blue" data-style="in-out">L<div id="deletion-middle-end-l-next-ii">next</div></div>
    <div class="node-inner fragment fragment-dn" data-style="in" data-index="2">L<div id="deletion-middle-end-l-next-iii">next</div></div>
</div>
<div class="node" id="deletion-middle-end-n">
    <div class="node-inner fragment fragment-dn" data-style="out" data-index="2">N<div id="deletion-middle-end-n-next">next</div></div>
    <div class="node-inner fragment fragment-dn background-blue" data-style="in" data-index="2">N<div id="deletion-middle-end-n-next-ii">next</div></div>
</div>

<div></div>
<div class="node" id="deletion-middle-end-d">
    <div class="node-inner">D<div id="deletion-middle-end-d-next">next</div></div>
</div>

`null`{#deletion-middle-end-null}

</div>

<div class="row">

<div></div>
<div></div>
<div></div>
<div class="node fragment" id="deletion-middle-end-k" data-style="out" data-index="4">
    <div class="node-inner background-red">K<div id="deletion-middle-end-k-next">next</div></div>
</div>
<div></div>
<div></div>
</div>


<div class="line line-arrow-end" data-from="deletion-middle-end-head" data-to="deletion-middle-end-l" />
<div class="line line-arrow-end" data-from="deletion-middle-end-l-next" data-to="deletion-middle-end-n" />
<div class="line line-arrow-end" data-from="deletion-middle-end-l-next-ii" data-to="deletion-middle-end-n" />
<div class="line line-arrow-end" data-from="deletion-middle-end-l-next-iii" data-to="deletion-middle-end-n" />
<div class="line line-arrow-end" data-from="deletion-middle-end-n-next" data-to="deletion-middle-end-k" />
<div class="line line-arrow-end fragment" data-from="deletion-middle-end-n-next-ii" data-to="deletion-middle-end-k" data-style="out" data-index="3" />
<div class="line line-arrow-end fragment" data-from="deletion-middle-end-n-next-ii" data-to="deletion-middle-end-d" data-index="3" />
<div class="line line-arrow-end" data-from="deletion-middle-end-k-next" data-to="deletion-middle-end-d" />
<div class="line line-arrow-end" data-from="deletion-middle-end-d-next" data-to="deletion-middle-end-null" />
