# Removing values

## Node with two children

* Replace 3 - replace the node with the **largest** value from the **left subtree**

<div class="row mb-2">
    <div class="node" id="removing-two-left-1">
        <div class="node-inner fragment fragment-dn" data-style="out">
        5
        </div>
        <div class="node-inner fragment fragment-dn background-green" data-style="in-out">
        &lt;5
        </div>
        <div class="node-inner fragment fragment-dn" data-style="in" data-index="2">
        5
        </div>
    </div>
</div>

<div class="row mb-2">
    <div></div>
    <div class="node" id="removing-two-left-2">
        <div class="node-inner fragment fragment-dn" data-style="out" data-index="2">
        3
        </div>
        <div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="2">
        3
        </div>
        <div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="3">
        3
        </div>
        <div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="4">
        3
        </div>
        <div class="node-inner fragment fragment-dn background-blue" data-style="in-out" data-index="5">
        2
        </div>
    </div>
    <div class="node" id="removing-two-left-3">
        <div class="node-inner">
        6
        </div>
    </div>
    <div></div>
</div>


<div class="row mb-2" >
    <div class="node" id="removing-two-left-4">
        <div class="node-inner fragment fragment-dn" data-style="out" data-index="3">
        1
        </div>
        <div class="node-inner fragment fragment-dn background-blue" data-style="in-out" data-index="3">
        1
        </div>
        <div class="node-inner fragment fragment-dn" data-style="in" data-index="4">
        1
        </div>
    </div>
    <div class="node" id="removing-two-left-5">
        <div class="node-inner">
        4
        </div>
    </div>
    <div class="node" id="removing-two-left-6">
        <div class="node-inner">
        8
        </div>
    </div>
</div>

<div class="row mb-2" >
    <div class="node" id="removing-two-left-7">
        <div class="node-inner">
        0
        </div>
    </div>
    <div class="node fragment fragment-dn" id="removing-two-left-8" data-style="out" data-index="5">
        <div class="node-inner fragment fragment-dn" data-style="out" data-index="4">
        2
        </div>
        <div class="node-inner fragment fragment-dn background-blue" data-style="in" data-index="4">
        2
        </div>
    </div>
    <div class="fragment fragment-dn" data-style="in" data-index="5" style="min-width: 48px; min-height: 48px;"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="node" id="removing-two-left-9">
        <div class="node-inner">
        7
        </div>
    </div>
    <div class="node" id="removing-two-left-10">
        <div class="node-inner">
        9
        </div>
    </div>
</div>


<div class="line line-arrow-end" data-from="removing-two-left-1" data-to="removing-two-left-2" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-left-1" data-to="removing-two-left-3" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-left-2" data-to="removing-two-left-4" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-left-2" data-to="removing-two-left-5" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-left-3" data-to="removing-two-left-6" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-left-4" data-to="removing-two-left-7" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-left-4" data-to="removing-two-left-8" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-left-6" data-to="removing-two-left-9" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-left-6" data-to="removing-two-left-10" data-from-side="b" data-to-side="t"></div>


