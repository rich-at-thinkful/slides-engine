# Quicksort: Partitioning

* Lomuto algorithm partitions values in-place
* Two indices, `i` and `j`
    * `j` iterates through the list
* Swap values at `i` and `j` if `array[j]` is less than the pivot
    * Increment `i` if there is a swap
* To put the pivot in place, swap it with `array[i]` at the end

<table class="fragment fragment-dn" data-style="out">
    <tr>
        <td>i</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>j</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="background-purple">9</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>2</td>
        <td>1</td>
        <td>8</td>
        <td class="background-blue">3</td>
    </tr>
</table>

<table class="fragment fragment-dn" data-style="in-out" data-index="1">
    <tr>
        <td>i</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>j</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>9</td>
        <td class="background-purple">4</td>
        <td>5</td>
        <td>6</td>
        <td>2</td>
        <td>1</td>
        <td>8</td>
        <td class="background-blue">3</td>
    </tr>
</table>

<table class="fragment fragment-dn" data-style="in-out" data-index="2">
    <tr>
        <td>i</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td>j</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>9</td>
        <td>4</td>
        <td class="background-purple">5</td>
        <td>6</td>
        <td>2</td>
        <td>1</td>
        <td>8</td>
        <td class="background-blue">3</td>
    </tr>
</table>

<table class="fragment fragment-dn" data-style="in-out" data-index="3">
    <tr>
        <td>i</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>j</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>9</td>
        <td>4</td>
        <td>5</td>
        <td class="background-purple">6</td>
        <td>2</td>
        <td>1</td>
        <td>8</td>
        <td class="background-blue">3</td>
    </tr>
</table>

<table class="fragment fragment-dn" data-style="in-out" data-index="4">
    <tr>
        <td>i</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>j</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>9</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td class="background-purple">2</td>
        <td>1</td>
        <td>8</td>
        <td class="background-blue">3</td>
    </tr>
</table>

<table class="fragment fragment-dn" data-style="in-out" data-index="5">
    <tr>
        <td></td>
        <td>i</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>j</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="background-green">2</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td class="background-green">9</td>
        <td>1</td>
        <td>8</td>
        <td class="background-blue">3</td>
    </tr>
</table>

<table class="fragment fragment-dn" data-style="in-out" data-index="6">
    <tr>
        <td></td>
        <td>i</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>j</td>
        <td></td>
    </tr>
    <tr>
        <td>2</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>9</td>
        <td class="background-purple">1</td>
        <td>8</td>
        <td class="background-blue">3</td>
    </tr>
</table>

<table class="fragment fragment-dn" data-style="in-out" data-index="7">
    <tr>
        <td></td>
        <td></td>
        <td>i</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>j</td>
        <td></td>
    </tr>
    <tr>
        <td>2</td>
        <td class="background-green">1</td>
        <td>5</td>
        <td>6</td>
        <td>9</td>
        <td class="background-green">4</td>
        <td>8</td>
        <td class="background-blue">3</td>
    </tr>
</table>

<table class="fragment fragment-dn" data-style="in-out" data-index="8">
    <tr>
        <td></td>
        <td></td>
        <td>i</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>j</td>
    </tr>
    <tr>
        <td>2</td>
        <td>1</td>
        <td>5</td>
        <td>6</td>
        <td>9</td>
        <td>4</td>
        <td class="background-purple">8</td>
        <td class="background-blue">3</td>
    </tr>
</table>

<table class="fragment fragment-dn" data-style="in-out" data-index="9">
    <tr>
        <td></td>
        <td></td>
        <td>i</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>j</td>
    </tr>
    <tr>
        <td>2</td>
        <td>1</td>
        <td class="background-green">3</td>
        <td>6</td>
        <td>9</td>
        <td>4</td>
        <td>8</td>
        <td class="background-green">5</td>
    </tr>
</table>
