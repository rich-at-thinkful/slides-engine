# Response with Express

<div class="row">
<div class="cell-4">

```js {#example-1}
app.get('/hello', (req, res) => {
  res.status(200);
  res.send('Good to go, yo!');
});
```

</div>
<div class="cell-2">

Set status code to 200 {.smallest .annotation data-for="example-1" data-line="2" .fragment data-index="1"}

Add response body in plain text {.smallest .annotation data-for="example-1" data-line="3" .fragment data-index="2"}

</div>
</div>

### ...can also be method chained... {.smaller .fragment data-index="3"}

<div class="row fragment" data-index="3">
<div class="cell-4">

```js {#example-2}
res.status(200).send('Good to go, yo!');
```

</div>
<div class="cell-2">
</div>
</div>

### And what about a JSON response? {.smaller .fragment data-index="4"}

<div class="row fragment" data-index="4">
<div class="cell-4">

```js {#example-3}
const bodyData = JSON.stringify({ message: 'Hello there!' });
res
  .set('Content-Type', 'application/json')
  .status(200)
  .send(bodyData);
```

</div>
<div class="cell-2">

Create a JSON string with your JavaScript data {.smallest .annotation data-for="example-3" data-line="1" .fragment data-index="5"}

Add a `Content-Type` header field {.smallest .annotation data-for="example-3" data-line="3" .fragment data-index="6"}

</div>
</div>

### Or use the Express shortcut... {.smaller .fragment data-index="7"}

<div class="row fragment" data-index="7">
<div class="cell-4">

```js {#example-4}
res.json({ message: 'Hello there!' });
```

</div>
<div class="cell-2">

Express' built-in `json()` method does everything above {.smallest .annotation data-for="example-4" data-line="1" .fragment data-index="8"}

</div>
</div>

