# Context

* `context` and `describe` are actually synonymous
* However, we conventionally use `context` for DRYing our tests

<div class='row fragment' data-index=0>
<div class='cell-4'>

```js {#context-1 data-span="3:24:45 .highlight"}
describe('GET /articles', () => {
  context('Given articles exist', () => {
    beforeEach(() => { /* use fixture here */ });
    
    it('some test here', () => {});
    it('another test here', () => {});
  });

  context('Given no articles exist', () => {
    it('some test here', () => {});
    it('another test here', () => {});
  });
});
```

</div>
<div class='cell-2 smallest'>

use our fixture to add articles to db {.annotation data-for=context-1 data-line=3}

the data will be deleted after every test because we have already set that up in the outer `describe` with `afterEach` {.annotation data-for=context-1 data-line=3}

</div>
</div>
