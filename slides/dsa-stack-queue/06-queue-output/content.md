# What happens to the queue?

```js
const queue = new Queue();
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.enqueue(10);
queue.dequeue();
queue.dequeue();
queue.dequeue();
```

<table style="width: auto;" class="fragment fragment-dn" data-style="in-out">
    <tr>
        <td>4</td>
    </tr>
</table>

<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="2">
    <tr>
        <td>4</td>
        <td>5</td>
    </tr>
</table>

<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="3">
    <tr>
        <td>5</td>
    </tr>
</table>

<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="4">
    <tr>
        <td>5</td>
        <td>2</td>
    </tr>
</table>

<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="5">
    <tr>
        <td>5</td>
        <td>2</td>
        <td>3</td>
    </tr>
</table>

<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="6">
    <tr>
        <td>2</td>
        <td>3</td>
    </tr>
</table>

<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="7">
    <tr>
        <td>2</td>
        <td>3</td>
        <td>10</td>
    </tr>
</table>
<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="8">
    <tr>
        <td>3</td>
        <td>10</td>
    </tr>
</table>
<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="9">
    <tr>
        <td>10</td>
    </tr>
</table>
<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="10">
    <tr>
    </tr>
</table>
