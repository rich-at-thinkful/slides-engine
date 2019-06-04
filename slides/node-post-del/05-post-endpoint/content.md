# Express POST endpoint

* The Express `app` supplies methods for most HTTP methods

<div class='row'>
<div class='cell-4'>

```js {#post-ex-1}
app.post('/item', (req, res) => {
  res.send('POST to /item received!');
});
```

</div>
<div class='cell-2 smallest'>

send a simple plaintext response {.annotation data-for=post-ex-1 data-line=2 .fragment data-index=1}

</div>
</div> <!-- end row -->


<div class='row fragment' data-index=2>
<div class='cell-4'>

* Same path, different methods are valid **different routes**

```js {#post-ex-2 data-span="1:1:15 .highlight; 5:1:16 .highlight"}
app.get('/item', (req, res) => {
  res.send('GET to /item received!');
});

app.post('/item', (req, res) => {
  res.send('POST to /item received!');
});
```

</div>
<div class='cell-2 smallest'>

</div>
</div>
