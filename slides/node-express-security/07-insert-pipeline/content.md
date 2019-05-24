# Inserting into Pipeline

* Can add middleware to individual endpoints...

```js
app.get('/foo', validateBearerToken, handleFoo);
app.get('/bar', validateBearerToken, handleBar);
```

&nbsp;

<div class="fragment" data-index="1">

* ...or you can add it to ALL requests with `app.use` (thus, all endpoints)

<div class="row">
<div class="cell-4">

```js {#example-1 data-span="1:1:7 .highlight"}
app.use(validateBearerToken);

app.get('/foo', handleFoo);
app.get('/bar', handleBar);
```

</div>
<div class="cell-2">

default will apply to all routes; can specify route matcher as first arg {.smaller .fragment data-index="2" .annotation data-for="example-1" data-line="1"}

</div>
</div>
</div>

* Let's see it work with Node Debugger {.fragment data-index="3"}
* [Pokedex JSON Data](https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json){target="_blank"} {.fragment data-index="3"}
