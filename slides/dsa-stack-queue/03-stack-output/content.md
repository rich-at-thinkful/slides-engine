# What happens to the stack?

```js
const stack = new Stack();
stack.push(4);
stack.push(5);
stack.pop();
stack.push(2);
stack.push(3);
stack.pop();
stack.push(10);
stack.pop();
stack.pop();
stack.pop();
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
        <td>4</td>
    </tr>
</table>

<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="4">
    <tr>
        <td>4</td>
        <td>2</td>
    </tr>
</table>

<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="5">
    <tr>
        <td>4</td>
        <td>2</td>
        <td>3</td>
    </tr>
</table>

<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="6">
    <tr>
        <td>4</td>
        <td>2</td>
    </tr>
</table>

<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="7">
    <tr>
        <td>4</td>
        <td>2</td>
        <td>10</td>
    </tr>
</table>
<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="8">
    <tr>
        <td>4</td>
        <td>2</td>
    </tr>
</table>
<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="9">
    <tr>
        <td>4</td>
    </tr>
</table>
<table style="width: auto;" class="fragment fragment-dn" data-style="in-out" data-index="10">
    <tr>
    </tr>
</table>
