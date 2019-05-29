# *app.test.js*

<div class="row">
<div class="cell-4">

```js
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

describe('GET /books', () => {
  it('should return an array of books');

  it('should be 400 if sort is incorrect');

  it('should sort by title');
});
```

&nbsp;

```bash
$ npm test -- -w
```

</div>
</div>