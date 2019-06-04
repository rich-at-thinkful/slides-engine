# POST using AJAX

* More modern approach intercepts the HTML form and sends the POST request using asyncronous JavaScript {.smaller}

<div class='row'>
<div class='cell-4'>

```js {#ajax-1}
const formInput = document.getElementById('my-form');
const data = { user: formInput.user, pw: formInput.pw };

fetch('http://localhost:8000/auth/login', {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
}).then().catch();
```

</div>
<div class='cell-2 smallest'>

</div>
</div>

<div class="row fragment" data-index="1">
<div class="cell-4">

## Resulting HTTP Post: {.smaller}

```
POST /auth/login HTTP/1.1
Host: localhost:8000
Content-Type: application/json

{
    "user": "stan",
    "pw": "lee"
}
```

</div>
<div class="cell-2"></div>
</div>