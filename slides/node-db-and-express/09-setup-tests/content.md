# Setup Tests

<div class='row'>
<div class='cell-4'>

**Create test database**

```bash {#migrate-code}
$ createdb blogful_test
$ MIGRATION_DB_NAME=blogful_test npm run migrate
```

</div>
<div class='cell-2 smallest'>

runs script with env variable temporarily changed {.annotation data-for=migrate-code data-line=2}

</div>
</div>

<div class='row fragment' data-index=1>
<div class='cell-4'>

**./test/setup.js**

```diff {#setup-test}
+ require('dotenv').config()
  const { expect } = require('chai')
  const supertest = require('supertest')
```

</div>
<div class='cell-2 smallest'>

allows access env variables in tests {.annotation data-for=setup-test data-line=1}

</div>
</div>

<div class='row fragment' data-index=2>
<div class='cell-4'>

**./test/articles-endpoints.spec.js**
```js
const { expect } = require('chai')
const knex = require('knex')
const app = require('../src/app')

describe('Articles Endpoints', function() {});
```

</div>
<div class='cell-2 smallest'>

</div>
</div>

