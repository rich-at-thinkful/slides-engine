# Breadth first search

<div class="row">
<div class="cell-4">

```js
bfs(values=[]) {
    const queue = [this];
    while (queue.length) {
        const node = queue.shift();
        values.push(node.value);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return values;
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
<div class="cell-4">


<div class="row mb-1">
<div class="node" id="bfs-1">
<div class="node-inner fragment fragment-dn" data-style="out-in">
a
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out">
a
</div>
</div>
</div>

<div class="row mb-1">
<div></div>
<div class="node" id="bfs-2">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="2">
b
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="2">
b
</div>
</div>
<div class="node" id="bfs-3">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="3">
c
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="3">
c
</div>
</div>
<div></div>
</div>

<div class="row mb-1" >
<div class="node" id="bfs-4">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="4">
d
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="4">
d
</div>
</div>
<div class="node" id="bfs-5">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="5">
e
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="5">
e
</div>
</div>
<div class="node" id="bfs-6">
<div class="node-inner fragment fragment-dn" data-style="out-in" data-index="6">
f
</div>
<div class="node-inner fragment fragment-dn background-green" data-style="in-out" data-index="6">
f
</div>
</div>
<div class="node" id="bfs-7">
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

### Queue

* a {.fragment .fragment-dn data-style="out"}
* b {.fragment .fragment-dn data-style="in-out" data-index="1"}
* c {.fragment .fragment-dn data-style="in-out" data-index="1"}
* c {.fragment .fragment-dn data-style="in-out" data-index="2"}
* d {.fragment .fragment-dn data-style="in-out" data-index="2"}
* e {.fragment .fragment-dn data-style="in-out" data-index="2"}
* d {.fragment .fragment-dn data-style="in-out" data-index="3"}
* e {.fragment .fragment-dn data-style="in-out" data-index="3"}
* f {.fragment .fragment-dn data-style="in-out" data-index="3"}
* g {.fragment .fragment-dn data-style="in-out" data-index="3"}
* e {.fragment .fragment-dn data-style="in-out" data-index="4"}
* f {.fragment .fragment-dn data-style="in-out" data-index="4"}
* g {.fragment .fragment-dn data-style="in-out" data-index="4"}
* f {.fragment .fragment-dn data-style="in-out" data-index="5"}
* g {.fragment .fragment-dn data-style="in-out" data-index="5"}
* g {.fragment .fragment-dn data-style="in-out" data-index="6"}
{.small}

</div>
<div class="cell-1">

### Output

* a {.fragment}
* b {.fragment data-index=2}
* c {.fragment data-index=3}
* d {.fragment data-index=4}
* e {.fragment data-index=5}
* f {.fragment data-index=6}
* g {.fragment data-index=7}
{.small}

</div>
</div>


<div class="line line-arrow-end" data-from="bfs-1" data-to="bfs-2" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="bfs-1" data-to="bfs-3" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="bfs-2" data-to="bfs-4" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="bfs-2" data-to="bfs-5" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="bfs-3" data-to="bfs-6" data-from-side="b" data-to-side="t"></div>
<div class="line line-arrow-end" data-from="bfs-3" data-to="bfs-7" data-from-side="b" data-to-side="t"></div>

