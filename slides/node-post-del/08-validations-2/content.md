# Registration Validation

<div class='row'>
<div class='cell-4'>

```js {#register-1 data-span="2:45:62 .fragment data-style=highlight-in data-index=2"}
app.post('/register', (req, res) => {
  const { username, password, favoriteClub, newsLetter = false } = req.body;
```

</div>
<div class='cell-2 smallest'>

destructure **only** the fields we care about from body into local variables {.annotation data-for=register-1 data-line=2 .fragment data-index=1}

set `newsLetter` default value if not provided in request {.annotation data-for=register-1 data-line=2 .fragment data-index=2}

</div>
</div>


<div class='row fragment' data-index="3" style="padding-top:25px;">
<div class='cell-4'>

```js {#register-2}
if (!username) {
  return res
    .status(400)
    .send('Username required');
}
```

</div>
<div class='cell-2 smallest'>

send a 400 Bad Request if field missing {.annotation data-for=register-2 data-line=3 .fragment data-index=4}

</div>
</div>


<div class='row fragment' data-index="5" style="padding-top:25px;">
<div class='cell-4'>

```js {#register-3}
if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
  return res
    .status(400)
    .send('Password must be contain at least one digit');
}
```

</div>
<div class='cell-2 smallest'>

regular expression testing password strength {.annotation data-for=register-3 data-line=1 .fragment data-index=6}

</div>
</div>
