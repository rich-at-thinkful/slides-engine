# HTTP Method DELETE

* On the surface, simply the opposite of POST

* Instead of creating a record, you delete a record {.fragment data-index=1}

<div class='row fragment' data-index="2">
<div class='cell-4'>

```js {#delete-ex}
app.delete('/books/:bookId', (req, res) => {
  const indexOfBook = books.findIndex(book => book.id === req.params.bookId);
  books.splice(indexOfBook, 1);
  res
    .status(204)
    .end();
});
```

</div>
<div class='cell-2 smallest'>

Our data is stored in an array in memory, so to delete it, we need to find the index location and splice it out

use array method `findIndex` {.annotation data-for=delete-ex data-line=2 .fragment data-index=3}

splice from the index {.annotation data-for=delete-ex data-line=3 .fragment data-index=4}

respond successfully as `204 No Content` {.annotation data-for=delete-ex data-line=7 .fragment data-index=5}

</div>
</div>

* This works, but there are some considerations... {.fragment data-index=6}