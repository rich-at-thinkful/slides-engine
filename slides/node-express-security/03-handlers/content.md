# Reusable handlers

* An Express route expects at least one handler function
* But it can have more (middleware)
* We've been using anonymous functions as the final handler...

```js {data-span="1:17:32 .highlight"}
app.get('/foo', (req, res) => {});
```

<div class="fragment" data-index="1">

* ...but you can also pass in named functions
* This allows for more modularity / reusability in future

```js {data-span="3:17:25 .highlight"}
function handleFoo(req, res) {}

app.get('/foo', handleFoo);
```

</div>

* Add the `GET /types` endpoint with named handler {.fragment data-index="2"}

```text {.fragment data-index="2"}
[`Bug`, `Dark`, `Dragon`, `Electric`, `Fairy`, `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, `Ground`, `Ice`, 
`Normal`, `Poison`, `Psychich`, `Rock`, `Steel`, `Water`]
```
