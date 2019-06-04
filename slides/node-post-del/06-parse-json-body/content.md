# Parse the Request Body as JSON

* If we know the request body is JSON based on the request header, we can then parse it and access it as a JavaScript object
* Express provides built-in middleware to do this work

<div class='row fragment' data-index=0>
<div class='cell-4'>

```js {#json-ex-1 data-span="4:33:40 .fragment data-style=highlight-in data-index=2"}
app.use(express.jsonParser());

app.post('/item', (req, res) => {
  res.send(`Your message was: ${req.body.message}`);
});
```

</div>
<div class='cell-2 smallest'>

mount the `jsonParser` middleware {.annotation data-for=json-ex-1 data-line=1 .fragment data-index=1}

if `Content-Type` is JSON, then `req.body` will be provided as an object parsed from the request's JSON body {.annotation data-for=json-ex-1 data-line=4 .fragment data-index=2}

</div>
</div><!-- end row -->

