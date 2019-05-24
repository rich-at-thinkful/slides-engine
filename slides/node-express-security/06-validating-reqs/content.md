# Validating Requests Using Middleware

* Any time we want to perform work on multiple endpoints, we should consider creating a middleware function and inserting it into our pipeline

```js
function validateBearerToken(req, res, next) {}
```

<div class="fragment" data-index="1">

### Responsibilities

<div class="smaller">

* Look at value in request header 'Authorization' 
  * Capture token after the `'Bearer '`
* Compare request token to token held in environment
* If mismatch, respond with 401
* Otherwise, allow to proceed to next handler in pipeline 

</div>
</div>