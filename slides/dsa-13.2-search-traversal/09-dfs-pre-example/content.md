# DFS: Pre-order

## Use cases

* Organizational charts
* Directory structures
* HTML, XML, JSON

<div class="row">
<div class="cell-5">


<div class="row mb-2">
<div class="node" id="dfs-pre-example-1">
<div class="node-inner fragment fragment-dn" data-style="out-in">
CEO
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out">
CEO
</div>
</div>
</div>

<div class="row mb-2">
<div></div>
<div class="node" id="dfs-pre-example-2">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="2">
VP Tech
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="2">
VP Tech
</div>
</div>
<div class="node" id="dfs-pre-example-3">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="5">
VP Finance
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="5">
VP Finance
</div>
</div>
<div></div>
</div>

<div class="row mb-2" >
<div class="node" id="dfs-pre-example-4">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="3">
Engineering
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="3">
Engineers
</div>
</div>
<div class="node" id="dfs-pre-example-5">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="4">
Dev Ops
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="4">
Dev Ops
</div>
</div>
<div class="node" id="dfs-pre-example-6">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="6">
Sales
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="6">
Sales
</div>
</div>
<div class="node" id="dfs-pre-example-7">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="7">
Accounting
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="7">
Accounting
</div>
</div>
</div>

</div>
<div class="cell-1">

* CEO {.fragment}
    * VP Tech {.fragment data-index=2}
        * Engineering {.fragment data-index=3}
        * Dev Ops {.fragment data-index=4}
    * VP Finance {.fragment data-index=5}
        * Sales {.fragment data-index=6}
        * Accounting {.fragment data-index=7}

</div>


<div class="line line-arrow-end" data-from="dfs-pre-example-1" data-to="dfs-pre-example-2" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-pre-example-1" data-to="dfs-pre-example-3" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-pre-example-2" data-to="dfs-pre-example-4" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-pre-example-2" data-to="dfs-pre-example-5" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-pre-example-3" data-to="dfs-pre-example-6" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-pre-example-3" data-to="dfs-pre-example-7" data-from-side="b" data-to-side="t"></div>

