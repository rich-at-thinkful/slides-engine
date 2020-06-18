# Doubly linked lists

<div class="row">


<div>

`head`{#dlls-head}

`null` {#dlls-null-start}

</div>


<div class="node" id="dlls-l">
    <div class="node-inner">
        L
        <div id="dlls-l-next">next</div>
        <div id="dlls-l-prev">prev</div>
        <div>&nbsp;</div>
    </div>
</div>
<div class="node" id="dlls-n">
    <div class="node-inner">
        N
        <div id="dlls-n-next">next</div>
        <div id="dlls-n-prev">prev</div>
        <div>&nbsp;</div>
    </div>
</div>
<div class="node" id="dlls-k">
    <div class="node-inner">k
        <div id="dlls-k-next">next</div>
        <div id="dlls-k-prev">prev</div>
        <div>&nbsp;</div>
    </div>
</div>
<div class="node" id="dlls-d">
    <div class="node-inner">
        D
        <div id="dlls-d-next">next</div>
        <div id="dlls-d-prev">prev</div>
        <div>&nbsp;</div>
    </div>
</div>

<div>

`null`{#dlls-null-end}

`tail` {#dlls-tail}

</div>

</div>

<div class="line line-arrow-end" data-from="dlls-head" data-to="dlls-l" />
<div class="line line-arrow-end" data-from="dlls-l-next" data-to="dlls-n" />
<div class="line line-arrow-end" data-from="dlls-n-next" data-to="dlls-k" />
<div class="line line-arrow-end" data-from="dlls-k-next" data-to="dlls-d" />
<div class="line line-arrow-end" data-from="dlls-d-next" data-to="dlls-null-end" />
<div class="line line-arrow-end" data-from="dlls-l-prev" data-to="dlls-null-start" />
<div class="line line-arrow-end" data-from="dlls-n-prev" data-to="dlls-l" />
<div class="line line-arrow-end" data-from="dlls-k-prev" data-to="dlls-n" />
<div class="line line-arrow-end" data-from="dlls-d-prev" data-to="dlls-k" />
<div class="line line-arrow-end" data-from="dlls-tail" data-to="dlls-d" />
