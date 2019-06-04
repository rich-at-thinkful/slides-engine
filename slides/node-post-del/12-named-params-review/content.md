# Named Parameters

* Let's review the ways we've received data specificity in an HTTP request...

<div class="row fragment" data-index="1">
<div class="cell-4">

## ...in a GET querystring {.smaller}

```text {data-span="1:29:43 .highlight}
http://localhost:8080/items?completed=false
```

</div><div class="cell-2"></div>
</div> <!-- end row -->


<div class="row fragment" data-index="2">
<div class="cell-4">

## ...in a POST request body {.smaller}

```text {data-span="4:1:50 .highlight}
POST /items HTTP/1.1
Content-Type: application/json

{ "name":"apples", "completed":"false" }
```

</div><div class="cell-2"></div>
</div> <!-- end row -->

&nbsp;

* The **named parameter** is one more common approach... {.fragment data-index=3}