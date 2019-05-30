# *app.test.js*

<div class="smaller">

## *should sort by title*

* get response code 200 with JSON response body as array type
* array contents should be sorted by each item's title key

</div>

<div class="row">
<div class="cell-4">

```js
describe('GET /books', () => {
  it('should be sorted by title', () => {
    return request(app)
      .get('/books')
      .query({ sort: 'title' })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('array');
        let i = 0, sorted = true;
        while (sorted && i < res.body.length - 1) {
          sorted = sorted && res.body[i].title < res.body[i + 1].title;
          i++;
        }
        expect(sorted).to.be.true;
      })
    });
  });
});
```

</div>
</div>