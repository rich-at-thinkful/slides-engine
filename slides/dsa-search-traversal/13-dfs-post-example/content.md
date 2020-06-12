# DFS: Post-order

# Use cases

* Calculation relationships
* Language processors

<div class="row">
<div class="cell-5">

<div class="row mb-2">
<div class="node" id="dfs-post-example-1">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="7">
+
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="7">
+
</div>
</div>
</div>

<div class="row mb-2">
<div></div>
<div class="node" id="dfs-post-example-2">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="3">
^
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="3">
^
</div>
</div>
<div class="node" id="dfs-post-example-3">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="6">
/
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="6">
/
</div>
</div>
<div></div>
</div>

<div class="row mb-2" >
<div class="node" id="dfs-post-example-4">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="1">
4
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="1">
4
</div>
</div>
<div class="node" id="dfs-post-example-5">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="2">
2
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="2">
2
</div>
</div>
<div class="node" id="dfs-post-example-6">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="4">
9
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="4">
9
</div>
</div>
<div class="node" id="dfs-post-example-7">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="5">
3
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="5">
3
</div>
</div>
</div>

</div>
<div class="cell-1">

### 4 ^ 2 + (9 / 3)

* 4 {.fragment .fragment-dn data-style=in-out data-index=1}
* 4 {.fragment .fragment-dn data-style=in-out data-index=2}
* 2 {.fragment .fragment-dn data-style=in-out data-index=2}
* 16 {.fragment .fragment-dn data-style=in-out data-index=3}
* 16 {.fragment .fragment-dn data-style=in-out data-index=4}
* 9 {.fragment .fragment-dn data-style=in-out data-index=4}
* 16 {.fragment .fragment-dn data-style=in-out data-index=5}
* 9 {.fragment .fragment-dn data-style=in-out data-index=5}
* 3 {.fragment .fragment-dn data-style=in-out data-index=5}
* 16 {.fragment .fragment-dn data-style=in-out data-index=6}
* 3 {.fragment .fragment-dn data-style=in-out data-index=6}
* 19 {.fragment .fragment-dn data-style=in-out data-index=7}


</div>
</div>

<div class="line line-arrow-end" data-from="dfs-post-example-1" data-to="dfs-post-example-2" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-post-example-1" data-to="dfs-post-example-3" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-post-example-2" data-to="dfs-post-example-4" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-post-example-2" data-to="dfs-post-example-5" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-post-example-3" data-to="dfs-post-example-6" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="dfs-post-example-3" data-to="dfs-post-example-7" data-from-side="b" data-to-side="t"></div>

