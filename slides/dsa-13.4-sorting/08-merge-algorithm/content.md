# Merge sort: Merge algorithm

* The lists we are merging are already sorted
* Choose the lowest of the two values at the head of the lists
* Keep going until no values remain

<div class="row">
<div class="cell-2">

## List 1

* 4
* 5
* 6
* 9
{.fragment .fragment-dn data-style=out}

<!-- Split list-->

* 4
* 5
* 6
* 9
{.fragment .fragment-dn data-style=in-out data-index=1}

<!-- Split list-->

* 4
* 5
* 6
* 9
{.fragment .fragment-dn data-style=in-out data-index=2}

<!-- Split list-->

* 4
* 5
* 6
* 9
{.fragment .fragment-dn data-style=in-out data-index=3}

<!-- Split list-->

* 5
* 6
* 9
{.fragment .fragment-dn data-style=in-out data-index=4}

<!-- Split list-->

* 6
* 9
{.fragment .fragment-dn data-style=in-out data-index=5}

<!-- Split list-->

* 9
{.fragment .fragment-dn data-style=in-out data-index=6}


<!-- Split list-->

* 9
{.fragment .fragment-dn data-style=in-out data-index=7}

</div>
<div class="cell-2">


## List 2

* 1
* 2
* 3
* 8
{.fragment .fragment-dn data-style=out}

<!-- Split list-->

* 2
* 3
* 8
{.fragment .fragment-dn data-style=in-out data-index=1}

<!-- Split list-->

* 3
* 8
{.fragment .fragment-dn data-style=in-out data-index=2}

<!-- Split list-->

* 8
{.fragment .fragment-dn data-style=in-out data-index=3}

<!-- Split list-->

* 8
{.fragment .fragment-dn data-style=in-out data-index=4}

<!-- Split list-->

* 8
{.fragment .fragment-dn data-style=in-out data-index=5}

<!-- Split list-->

* 8
{.fragment .fragment-dn data-style=in-out data-index=6}

</div>
<div class="cell-2">

## Merged list

* 1 {.fragment data-index=1}
* 2 {.fragment data-index=2}
* 3 {.fragment data-index=3}
* 4 {.fragment data-index=4}
* 5 {.fragment data-index=5}
* 6 {.fragment data-index=6}
* 8 {.fragment data-index=7}
* 9 {.fragment data-index=8}

</div>
