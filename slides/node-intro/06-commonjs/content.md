# CommonJS vs ES6 Modules

* Both are systems to allow importing and exporting of variables throughout our application
* Node uses CommonJS natively and requires tooling to use ES6 Modules

### Export from `my-module.js`
```javascript
// CommonJS export
module.exports = { myFunction, myString };

// ES6 export
export default { myFunction, myString };
```

### Import in `index.js`
```javascript
// CommonJS import
const { myFunction, myString } = require('./my-module');

// ES6 import
import { myFunction, myString } from './my-module';
```
