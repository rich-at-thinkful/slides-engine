# DFS: Post-order

<div class="row">
<div class="cell-4">

```
dsfPostOrder() {
    if (this.left) {
        this.left.dsfPostOrder();
    }
    if (this.right) {
        this.right.dsfPostOrder();
    }
    console.log(this.key);
}
```

</div>
<div class="cell-2">

* Step left
* Step right
* Process node

</div>
</div>

<div class="row">
<div class="cell-5">


<div class="row mb-2">
<div class="node" id="dfs-post-1">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="7">
a
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="7">
a
</div>
</div>
</div>

<div class="row mb-2">
<div></div>
<div class="node" id="dfs-post-2">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="3">
b
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="3">
b
</div>
</div>
<div class="node" id="dfs-post-3">
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
<div class="node" id="dfs-post-4">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="1">
d
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="1">
d
</div>
</div>
<div class="node" id="dfs-post-5">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="2">
e
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="2">
e
</div>
</div>
<div class="node" id="dfs-post-6">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="4">
f
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="4">
f
</div>
</div>
<div class="node" id="dfs-post-7">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="5">
g
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="5">
g
</div>
</div>
</div>

</div>
<div class="cell-1">

* d {.fragment}
* e {.fragment data-index=2}
* b {.fragment data-index=3}
* f {.fragment data-index=4}
* g {.fragment data-index=5}
* c {.fragment data-index=6}
* a {.fragment data-index=7}

</div>


<div class="line line-arrow-end" data-from="dfs-post-1" data-to="dfs-post-2" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-post-1" data-to="dfs-post-3" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-post-2" data-to="dfs-post-4" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-post-2" data-to="dfs-post-5" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-post-3" data-to="dfs-post-6" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-post-3" data-to="dfs-post-7" data-from-side="b" data-to-side="t"></div>

