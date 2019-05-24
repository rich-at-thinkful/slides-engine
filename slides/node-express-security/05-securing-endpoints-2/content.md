<h1>But how do we secure the <span style="text-decoration:underline;">token</span>?</h1>

* Unique token generated per user
  * We're not doing this today {.smallest}
  * DO NOT DO THIS IN A REAL API!  {.smallest style="color:red;"}

* Keep token in the environment and not the codebase

* Use `dotenv` package and the `.env` file in your root project folder (ignored by Git)

&nbsp;

```js
require('dotenv').config();

console.log(process.env.API_TOKEN);
```
