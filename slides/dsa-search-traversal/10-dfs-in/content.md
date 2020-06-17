# DFS: In-order

<div class="row">
<div class="cell-4">

```
dfsInOrder() {
    if (this.left) {
        this.left.dfsInOrder();
    }
    console.log(this.key);
    if (this.right) {
        this.right.dfsInOrder();
    }
}
```

</div>
<div class="cell-2">

* Step left
* Process node
* Step right

</div>
</div>

<div class="row">
<div class="cell-5">


<div class="row mb-2">
<div class="node" id="dfs-in-1">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="4">
a
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="4">
a
</div>
</div>
</div>

<div class="row mb-2">
<div></div>
<div class="node" id="dfs-in-2">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="2">
b
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="2">
b
</div>
</div>
<div class="node" id="dfs-in-3">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="6">
c
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="6">
c
</div>
</div>
<div></div>
</div>

<div class="row mb-2" >
<div class="node" id="dfs-in-4">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="1">
d
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="1">
d
</div>
</div>
<div class="node" id="dfs-in-5">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="3">
e
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="3">
e
</div>
</div>
<div class="node" id="dfs-in-6">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="5">
f
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="5">
f
</div>
</div>
<div class="node" id="dfs-in-7">
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

* d {.fragment}
* b {.fragment data-index=2}
* e {.fragment data-index=3}
* a {.fragment data-index=4}
* f {.fragment data-index=5}
* c {.fragment data-index=6}
* g {.fragment data-index=7}

</div>


<div class="line line-arrow-end" data-from="dfs-in-1" data-to="dfs-in-2" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-in-1" data-to="dfs-in-3" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-in-2" data-to="dfs-in-4" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-in-2" data-to="dfs-in-5" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-in-3" data-to="dfs-in-6" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-in-3" data-to="dfs-in-7" data-from-side="b" data-to-side="t"></div>

