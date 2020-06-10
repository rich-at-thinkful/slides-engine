# What makes a good hash function?

* Uniform hashing: each key is equally likely to hash to any position, independently of where any other key has hashed to
    * In practice it doesn't need to be perfect
* Speed depends on application:
    * For hash maps, it should be fast
    * For cryptographic applications, it should be slow to prevent brute-force attacks

50 keys {.center #good-hash-functions-keys .mb-2}

<div class="row">
<div class="cell-2"></div>
<div class="cell-2">

Hash function {.highlight .center #good-hash-functions-hash-fn .mb-2}

</div>
<div class="cell-2"></div>
</div>

<table style="table-layout: fixed; text-align:center;">
    <tr>
        <td id="good-hash-functions-bucket-1">10 keys</td>
        <td id="good-hash-functions-bucket-2">10 keys</td>
        <td id="good-hash-functions-bucket-3">10 keys</td>
        <td id="good-hash-functions-bucket-4">10 keys</td>
        <td id="good-hash-functions-bucket-5">10 keys</td>
    </tr>
</table>

<div class="line" data-from="good-hash-functions-keys" data-to="good-hash-functions-hash-fn"></div>
<div class="line" data-from="good-hash-functions-hash-fn" data-to="good-hash-functions-bucket-1" data-to-side="t" data-from-side="b"></div>
<div class="line" data-from="good-hash-functions-hash-fn" data-to="good-hash-functions-bucket-1" data-to-side="t" data-from-side="b"></div>
<div class="line" data-from="good-hash-functions-hash-fn" data-to="good-hash-functions-bucket-2" data-to-side="t" data-from-side="b"></div>
<div class="line" data-from="good-hash-functions-hash-fn" data-to="good-hash-functions-bucket-3" data-to-side="t" data-from-side="b"></div>
<div class="line" data-from="good-hash-functions-hash-fn" data-to="good-hash-functions-bucket-4" data-to-side="t" data-from-side="b"></div>
<div class="line" data-from="good-hash-functions-hash-fn" data-to="good-hash-functions-bucket-5" data-to-side="t" data-from-side="b"></div>

