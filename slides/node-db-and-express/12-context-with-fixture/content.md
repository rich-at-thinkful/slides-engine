# Context

<div class='row'>
<div class='cell-4'>

```js {#context-1}
describe('GET /articles', () => {
  context('Given articles exist', () => {
    beforeEach(() => {});
    
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

they'll be deleted after every test because we have already set that up with `afterEach` {.annotation data-for=context-1 data-line=3}

</div>
</div>
