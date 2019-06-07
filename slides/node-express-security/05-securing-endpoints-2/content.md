<h1>But how do we secure the <span style="text-decoration:underline;">token</span>?</h1>

* Typically, you might generate a unique token for every user
  * We're not doing this today, though {.smallest}

* Always keep secrets (like tokens) in the **environment** and not the codebase

* Use `dotenv` package and the `.env` file in your root project folder (ignored by Git)

&nbsp;

```js
require('dotenv').config();

console.log(process.env.API_TOKEN);
```
