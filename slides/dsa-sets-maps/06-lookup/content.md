# Lookup

```js
const obj = {
    key: 'gregg',
};

const hash = hashString(obj.key); // 260512401

const index = hash % capacity; // 3
```


<table style="table-layout: fixed; text-align:center;">
    <tr>
        <td class="background-blue">0</td>
        <td class="background-blue">1</td>
        <td class="background-blue">2</td>
        <td class="background-red" id="lookup-open-addressing-insertion-point">david</td>
        <td class="background-green" id="lookup-open-addressing-next-insertion-point">gregg</td>
        <td class="background-blue">5</td>
    </tr>
    <tr style="background-color: transparent;">
        <td colspan="6">&nbsp;</td>
    </tr>
    <tr style="background-color: transparent;">
        <td></td>
        <td></td>
        <td></td>
        <td id="lookup-open-addressing-hash">Hash</td>
        <td id="lookup-open-addressing-next-hash"></td>
        <td></td>
    </tr>
</table>

<div class="line line-arrow-end" data-from="lookup-open-addressing-hash" data-to="lookup-open-addressing-insertion-point"></div>
<div class="line fragment" data-from="lookup-open-addressing-insertion-point" data-to="lookup-open-addressing-hash" data-to-side="rt"></div>
<div class="line fragment" data-from="lookup-open-addressing-hash" data-to="lookup-open-addressing-next-hash" data-from-side="rt" data-to-side="lt"></div>
<div class="line line-arrow-end fragment" data-from="lookup-open-addressing-next-hash" data-to="lookup-open-addressing-next-insertion-point" data-from-side="lt" data-to-side="b"></div>
