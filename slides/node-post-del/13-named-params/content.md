# Named Parameters

* The named parameter is a specific **path segment** reserved for input from the client
* Think of it like a function parameter 

<div class='row'>
<div class='cell-4'>

```text {#named-1 data-span="1:29:32 .fragment data-style=highlight-in data-index=1"}
http://localhost:8080/items/100
```

</div>
<div class='cell-2 smallest'>

the server expects the second path segment to be some value it intends to capture {.annotation data-for=named-1 data-line=1 .fragment data-index=1}

</div>
</div>

<div class='row fragment' data-index="2">
<div class='cell-4'>

```js {#named-2 data-span="1:17:23 .fragment data-style=highlight-in data-index=3; 2:27:36 .fragment data-style=highlight-in data-index=4"}
app.get('/items/:itemId', (req, res) => {
  res.send(`The id was: ${req.params.itemId}`);
});
```

<div class="fragment" data-index="5" style="padding-top:25px;">

### request {.smallest}
```text
GET /items/666 HTTP/1.1
```
### response {.smallest}
```text
HTTP/1.1 200 OK
Content-Type: text/plain

The id was: 666
```

</div>

</div>
<div class='cell-2 smallest'>

special use of `:` char determines the name of our parameter {.annotation data-for=named-2 data-line=1 .fragment data-index=3}

the value is now available on the `req.params` object {.annotation data-for=named-2 data-line=2 .fragment data-index=4}

</div>
</div>

