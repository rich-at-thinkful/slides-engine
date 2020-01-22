# Process Data and Respond

<div class="row">
<div class="cell-4">

## POST data {.smaller}
```json
{
  "username": "sallyStudent",
  "password": "c00d1ng1sc00l",
  "favoriteClub": "Cache Valley Stone Society",
  "newsLetter": "true"
}
```

</div>
<div class="cell-2"></div>
</div> <!-- end row -->

<div class="row fragment" data-index="1">
<div class="cell-4">

## Process in endpoint {.smaller}

```js {#process-1}
const users = [];

app.post('/register', (req, res) => {
  // [...]
  const id = uuid();
  const newUser = { id, username, password, favoriteClub, newsLetter };
  users.push(newUser);

  res
    .status(201)
    .location(`http://localhost:8000/user/${id}`)
    .json(newUser);
});
```

</div>
<div class="cell-2 smallest">

store users in memory {.annotation data-for=process-1 data-line=1 .fragment data-index=2}

get values from `req.body` and validate here {.annotation data-for=process-1 data-line=4 .fragment data-index=3}

db will usually generate id, but without one, we'll do it here {.annotation data-for=process-1 data-line=5 .fragment data-index=4}

construct validated object and store it {.annotation data-for=process-1 data-line=7 .fragment data-index=5}

respond `201 Created` with new `user` object (incl. newly minted id) and `Location` header {.annotation data-for=process-1 data-line=11 .fragment data-index=7}


</div>
</div>