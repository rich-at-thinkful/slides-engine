# DFS: Pre-order

<div class="row">
<div class="cell-4">

```
dfsPreOrder() {
    console.log(this.key);
    if (this.left) {
        this.left.dfsPreOrder();
    }
    if (this.right) {
        this.right.dfsPreOrder();
    }
}
```

</div>
<div class="cell-2">

* Process node
* Step left
* Step right

</div>
</div>

<div class="row">
<div class="cell-5">


<div class="row mb-2">
<div class="node" id="dfs-pre-1">
<div class="node-inner fragment fragment-dn" data-style="out-in">
a
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out">
a
</div>
</div>
</div>

<div class="row mb-2">
<div></div>
<div class="node" id="dfs-pre-2">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="2">
b
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="2">
b
</div>
</div>
<div class="node" id="dfs-pre-3">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="5">
c
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="5">
c
</div>
</div>
<div></div>
</div>

<div class="row mb-2" >
<div class="node" id="dfs-pre-4">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="3">
d
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="3">
d
</div>
</div>
<div class="node" id="dfs-pre-5">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="4">
e
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="4">
e
</div>
</div>
<div class="node" id="dfs-pre-6">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="6">
f
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="6">
f
</div>
</div>
<div class="node" id="dfs-pre-7">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="7">
g
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="7">
g
</div>
</div>
</div>

</div>
<div class="cell-1">

* a {.fragment}
* b {.fragment data-index=2}
* d {.fragment data-index=3}
* e {.fragment data-index=4}
* c {.fragment data-index=5}
* f {.fragment data-index=6}
* g {.fragment data-index=7}

</div>


<div class="line line-arrow-end" data-from="dfs-pre-1" data-to="dfs-pre-2" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-pre-1" data-to="dfs-pre-3" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-pre-2" data-to="dfs-pre-4" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-pre-2" data-to="dfs-pre-5" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-pre-3" data-to="dfs-pre-6" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-pre-3" data-to="dfs-pre-7" data-from-side="b" data-to-side="t"></div>

