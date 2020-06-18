# Traversal

## Get the third value

<div class="row">


`head`{#traversal-head}


<div class="node" id="traversal-l">
    <div class="node-inner fragment fragment-dn" data-style="out">L<div id="traversal-l-next">next</div></div>
    <div class="node-inner fragment fragment-dn background-blue" data-style="in-out">L<div id="traversal-l-next-ii">next</div></div>
    <div class="node-inner fragment fragment-dn" data-style="in" data-index="2">L<div id="traversal-l-next-iii">next</div></div>
</div>
<div class="node" id="traversal-n">
    <div class="node-inner fragment fragment-dn" data-style="out" data-index="2">N<div id="traversal-n-next">next</div></div>
    <div class="node-inner fragment fragment-dn background-blue" data-style="in-out" data-index="2">N<div id="traversal-n-next-ii">next</div></div>
    <div class="node-inner fragment fragment-dn" data-style="in" data-index="3">N<div id="traversal-n-next-iii">next</div></div>
</div>
<div class="node" id="traversal-k">
    <div class="node-inner fragment fragment-dn" data-style="out" data-index="3">K<div id="traversal-k-next">next</div></div>
    <div class="node-inner fragment fragment-dn background-blue" data-style="in-out" data-index="3">K<div id="traversal-k-next-ii">next</div></div>
</div>
<div class="node" id="traversal-d">
    <div class="node-inner">D<div id="traversal-d-next">next</div></div>
</div>

`null`{#traversal-null}

</div>

<div class="row">

</div>


<div class="line line-arrow-end" data-from="traversal-head" data-to="traversal-l" />
<div class="line line-arrow-end" data-from="traversal-l-next" data-to="traversal-n" />
<div class="line line-arrow-end" data-from="traversal-l-next-ii" data-to="traversal-n" />
<div class="line line-arrow-end" data-from="traversal-l-next-iii" data-to="traversal-n" />
<div class="line line-arrow-end" data-from="traversal-n-next" data-to="traversal-k" />
<div class="line line-arrow-end" data-from="traversal-n-next-ii" data-to="traversal-k" />
<div class="line line-arrow-end" data-from="traversal-n-next-iii" data-to="traversal-k" />
<div class="line line-arrow-end" data-from="traversal-k-next" data-to="traversal-d" />
<div class="line line-arrow-end" data-from="traversal-k-next-ii" data-to="traversal-d" />
<div class="line line-arrow-end" data-from="traversal-d-next" data-to="traversal-null" />
