# Basic Routing

* Requests are routed differently based on their **HTTP method** and their **path**

<div class="row">
<div class="grid-2">

```text
GET /pizza/pepperoni HTTP/1.1
```

</div>

<div class="grid-4">

```js
app.get('/pizza/pepperoni', (req, res) => {});
```

</div>
</div>

<div class="fragment" data-index="1">

<div class="row" style="margin-top:100px">
<div class="grid-2">

```text
POST /pizza/pepperoni HTTP/1.1
Content-Type: application/json

{ "size":"12 inches" }
```

</div>

<div class="grid-4">

```js
app.post('/pizza/pepperoni', (req, res) => {});
```

</div>
</div>
</div>

