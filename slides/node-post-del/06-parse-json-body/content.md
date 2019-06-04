# Parse the Request Body as JSON

* If we know the request body is JSON based on the request header, we can then parse it and access it as a JavaScript object {.smaller}
* Express provides built-in middleware to do this work {.smaller}

<div class='row fragment' data-index=0>
<div class='cell-4'>

```js {#json-ex-1 data-span="4:33:41 .fragment data-style=highlight-in data-index=2"}
app.use(express.jsonParser());

app.post('/character', (req, res) => {
  res.send(`You sent me a ${req.body.race}!`);
});
```

``` {.fragment data-index=3}
POST /character HTTP/1.1
Host: localhost:8000
Content-Type: application/json
cache-control: no-cache

{
  "name": "Samwise Gamgee",
  "status": "Hero",
  "role": "companion",
  "race": "Hobbit"
}
```

``` {.fragment data-index=4}
You sent me a Hobbit!
```

</div>
<div class='cell-2 smallest'>

mount the `jsonParser` middleware {.annotation data-for=json-ex-1 data-line=1 .fragment data-index=1}

if `Content-Type` is JSON, then `req.body` will be provided as an object parsed from the request's JSON body {.annotation data-for=json-ex-1 data-line=4 .fragment data-index=2}

</div>
</div><!-- end row -->

