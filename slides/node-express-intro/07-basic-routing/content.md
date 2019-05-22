# Basic Routing

* [http://localhost:8000/pizza/pepperoni](http://localhost:8000/pizza/pepperoni)
* [http://localhost:8000/pizza/cheese](http://localhost:8000/pizza/cheese)
* [http://localhost:8000/burger](http://localhost:8000/burger)

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