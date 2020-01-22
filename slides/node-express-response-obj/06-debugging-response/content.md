### Live Debugging

<div class="row">
<div class="cell-3">
<div class="smallest">

```js
app.get('/grade', (req, res) => {
  // get the mark from the query
  const { mark } = req.query;

  // do some validation
  if(!mark) {
    // mark is required
    return res
      .status(400)
      .send("Please provide a mark");
  }

  const numericMark = parseFloat(mark);
  if(Number.isNaN(numericMark)) {
    // mark must be a number
    return res
      .status(400)
      .send("Mark must be a numeric value");
  }

  if(numericMark < 0 || numericMark > 100) {
    // mark must be in range 0 to 100
    return res
      .status(400)
      .send("Mark must be in range 0 to 100");
  }

  if(numericMark >= 90) {
    return res
      .send("A");
  } 

  if(numericMark > 80) {
    return res
      .send("B");
  }

  if(numericMark >= 70) {
    return res
      .send("C");
  }

  res
    .send("F");
});
```

</div>
</div>
<div class="cell-3">

**Use the VSC debugger to step through**

**Attempt:**

```text
http://localhost:8080/grade?mark=50
```

<div class="smaller">

<em>expected: F | got: <span style="color: green;"><strong>F</strong></span></em>

</div>

**Attempt:**

```text
http://localhost:8080/grade?mark=80
```

<div class="smaller">

<em>expected: B | got: <span style="color: red;"><strong>C</strong></span></em>

</div>

</div>
</div>
