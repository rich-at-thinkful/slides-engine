# Removing values

## Node with two children

* Replace 3 - replace the node with the **smallest** value from the **right subtree**

<div class="row mb-2">
    <div class="node" id="removing-two-right-1">
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
    <div class="node" id="removing-two-right-2">
        <div class="node-inner fragment fragment-dn" data-style="out" data-index="2">
        3
        </div>
        <div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="2">
        3
        </div>
        <div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="3">
        3
        </div>
        <div class="node-inner fragment fragment-dn background-blue" data-style="in" data-index="4">
        4
        </div>
    </div>
    <div class="node" id="removing-two-right-3">
        <div class="node-inner">
        6
        </div>
    </div>
    <div></div>
</div>


<div class="row mb-2" >
    <div class="node" id="removing-two-right-4">
        <div class="node-inner">
        1
        </div>
    </div>
    <div class="node fragment fragment-dn" id="removing-two-right-5" data-index="4" data-style="out">
        <div class="node-inner fragment fragment-dn" data-style="out" data-index="3">
        4
        </div>
        <div class="node-inner fragment fragment-dn background-blue" data-style="in-out" data-index="3">
        4
        </div>
        <div class="node-inner fragment fragment-dn" data-style="in" data-index="4">
        4
        </div>
    </div>
    <div class="node fragment fragment-dn" data-style="in" data-index="4" style="min-width: 48px; min-height: 48px;"></div>
    <div class="node" id="removing-two-right-6">
        <div class="node-inner">
        8
        </div>
    </div>
</div>

<div class="row mb-2" >
    <div class="node" id="removing-two-right-7">
        <div class="node-inner">
        0
        </div>
    </div>
    <div class="node" id="removing-two-right-8">
        <div class="node-inner">
        2
        </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="node" id="removing-two-right-9">
        <div class="node-inner">
        7
        </div>
    </div>
    <div class="node" id="removing-two-right-10">
        <div class="node-inner">
        9
        </div>
    </div>
</div>


<div class="line line-arrow-end" data-from="removing-two-right-1" data-to="removing-two-right-2" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-right-1" data-to="removing-two-right-3" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-right-2" data-to="removing-two-right-4" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-right-2" data-to="removing-two-right-5" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-right-3" data-to="removing-two-right-6" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-right-4" data-to="removing-two-right-7" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-right-4" data-to="removing-two-right-8" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-right-6" data-to="removing-two-right-9" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="removing-two-right-6" data-to="removing-two-right-10" data-from-side="b" data-to-side="t"></div>


