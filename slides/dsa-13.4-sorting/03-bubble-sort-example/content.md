# Bubble sort

```js
function bubbleSort(array) {
    let swaps;
    do {
        swaps = 0;
        for (let i=0; i<array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swaps++;
            }
        }
    } while (swaps > 0);
}
```

Swaps: 0 {.fragment .fragment-dn data-style=out}

<table class="fragment fragment-dn" data-style="out">
    <tr>
        <td>88</td>
        <td>33</td>
        <td>99</td>
        <td>22</td>
        <td>54</td>
    </tr>
</table>

Swaps: 0 {.fragment .fragment-dn data-style=in-out data-index=1}

<table class="fragment fragment-dn" data-style="in-out" data-index="1">
    <tr>
        <td class="background-blue">88</td>
        <td class="background-blue">33</td>
        <td>99</td>
        <td>22</td>
        <td>54</td>
    </tr>
</table>

Swaps: 1 {.fragment .fragment-dn data-style=in-out data-index=2}

<table class="fragment fragment-dn" data-style="in-out" data-index="2">
    <tr>
        <td class="background-green">33</td>
        <td class="background-green">88</td>
        <td>99</td>
        <td>22</td>
        <td>54</td>
    </tr>
</table>

Swaps: 1 {.fragment .fragment-dn data-style=in-out data-index=3}

<table class="fragment fragment-dn" data-style="in-out" data-index="3">
    <tr>
        <td>33</td>
        <td class="background-blue">88</td>
        <td class="background-blue">99</td>
        <td>22</td>
        <td>54</td>
    </tr>
</table>

Swaps: 1 {.fragment .fragment-dn data-style=in-out data-index=4}

<table class="fragment fragment-dn" data-style="in-out" data-index="4">
    <tr>
        <td>33</td>
        <td class="background">88</td>
        <td class="background-blue">99</td>
        <td class="background-blue">22</td>
        <td>54</td>
    </tr>
</table>

Swaps: 2 {.fragment .fragment-dn data-style=in-out data-index=5}

<table class="fragment fragment-dn" data-style="in-out" data-index="5">
    <tr>
        <td>33</td>
        <td>88</td>
        <td class="background-green">22</td>
        <td class="background-green">99</td>
        <td>54</td>
    </tr>
</table>

Swaps: 2 {.fragment .fragment-dn data-style=in-out data-index=6}

<table class="fragment fragment-dn" data-style="in-out" data-index="6">
    <tr>
        <td>33</td>
        <td>88</td>
        <td>22</td>
        <td class="background-blue">99</td>
        <td class="background-blue">54</td>
    </tr>
</table>

Swaps: 3 {.fragment .fragment-dn data-style=in-out data-index=7}

<table class="fragment fragment-dn" data-style="in-out" data-index="7">
    <tr>
        <td>33</td>
        <td>88</td>
        <td>22</td>
        <td class="background-green">54</td>
        <td class="background-green">99</td>
    </tr>
</table>

Swaps: 0 {.fragment .fragment-dn data-style=in-out data-index=8}

<table class="fragment fragment-dn" data-style="in-out" data-index="8">
    <tr>
        <td class="background-blue">33</td>
        <td class="background-blue">88</td>
        <td>22</td>
        <td>54</td>
        <td>99</td>
    </tr>
</table>


Swaps: 0 {.fragment .fragment-dn data-style=in-out data-index=9}

<table class="fragment fragment-dn" data-style="in-out" data-index="9">
    <tr>
        <td>33</td>
        <td class="background-blue">88</td>
        <td class="background-blue">22</td>
        <td>54</td>
        <td>99</td>
    </tr>
</table>

Swaps: 1 {.fragment .fragment-dn data-style=in-out data-index=10}

<table class="fragment fragment-dn" data-style="in-out" data-index="10">
    <tr>
        <td>33</td>
        <td class="background-green">22</td>
        <td class="background-green">88</td>
        <td>54</td>
        <td>99</td>
    </tr>
</table>

Swaps: 1 {.fragment .fragment-dn data-style=in-out data-index=11}

<table class="fragment fragment-dn" data-style="in-out" data-index="11">
    <tr>
        <td>33</td>
        <td>22</td>
        <td class="background-blue">88</td>
        <td class="background-blue">54</td>
        <td>99</td>
    </tr>
</table>

Swaps: 2 {.fragment .fragment-dn data-style=in-out data-index=12}

<table class="fragment fragment-dn" data-style="in-out" data-index="12">
    <tr>
        <td>33</td>
        <td>22</td>
        <td class="background-green">54</td>
        <td class="background-green">88</td>
        <td>99</td>
    </tr>
</table>

Swaps: 2 {.fragment .fragment-dn data-style=in-out data-index=13}

<table class="fragment fragment-dn" data-style="in-out" data-index="13">
    <tr>
        <td>33</td>
        <td>22</td>
        <td>54</td>
        <td class="background-blue">88</td>
        <td class="background-blue">99</td>
    </tr>
</table>

Swaps: 0 {.fragment .fragment-dn data-style=in-out data-index=14}

<table class="fragment fragment-dn" data-style="in-out" data-index="14">
    <tr>
        <td class="background-blue">33</td>
        <td class="background-blue">22</td>
        <td>54</td>
        <td>88</td>
        <td>99</td>
    </tr>
</table>

Swaps: 1 {.fragment .fragment-dn data-style=in-out data-index=15}

<table class="fragment fragment-dn" data-style="in-out" data-index="15">
    <tr>
        <td class="background-green">22</td>
        <td class="background-green">33</td>
        <td>54</td>
        <td>88</td>
        <td>99</td>
    </tr>
</table>

Swaps: 1 {.fragment .fragment-dn data-style=in-out data-index=16}

<table class="fragment fragment-dn" data-style="in-out" data-index="16">
    <tr>
        <td>22</td>
        <td class="background-blue">33</td>
        <td class="background-blue">54</td>
        <td>88</td>
        <td>99</td>
    </tr>
</table>

Swaps: 1 {.fragment .fragment-dn data-style=in-out data-index=17}

<table class="fragment fragment-dn" data-style="in-out" data-index="17">
    <tr>
        <td>22</td>
        <td>33</td>
        <td class="background-blue">54</td>
        <td class="background-blue">88</td>
        <td>99</td>
    </tr>
</table>

Swaps: 1 {.fragment .fragment-dn data-style=in-out data-index=18}

<table class="fragment fragment-dn" data-style="in-out" data-index="18">
    <tr>
        <td>22</td>
        <td>33</td>
        <td>54</td>
        <td class="background-blue">88</td>
        <td class="background-blue">99</td>
    </tr>
</table>

Swaps: 0 {.fragment .fragment-dn data-style=in-out data-index=19}

<table class="fragment fragment-dn" data-style="in-out" data-index="19">
    <tr>
        <td class="background-blue">22</td>
        <td class="background-blue">33</td>
        <td>54</td>
        <td>88</td>
        <td>99</td>
    </tr>
</table>

Swaps: 0 {.fragment .fragment-dn data-style=in-out data-index=20}

<table class="fragment fragment-dn" data-style="in-out" data-index="20">
    <tr>
        <td>22</td>
        <td class="background-blue">33</td>
        <td class="background-blue">54</td>
        <td>88</td>
        <td>99</td>
    </tr>
</table>

Swaps: 0 {.fragment .fragment-dn data-style=in-out data-index=21}

<table class="fragment fragment-dn" data-style="in-out" data-index="21">
    <tr>
        <td>22</td>
        <td>33</td>
        <td class="background-blue">54</td>
        <td class="background-blue">88</td>
        <td>99</td>
    </tr>
</table>

Swaps: 0 {.fragment .fragment-dn data-style=in-out data-index=22}

<table class="fragment fragment-dn" data-style="in-out" data-index="22">
    <tr>
        <td>22</td>
        <td>33</td>
        <td>54</td>
        <td class="background-blue">88</td>
        <td class="background-blue">99</td>
    </tr>
</table>
