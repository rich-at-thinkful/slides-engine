<div class="row">
<div class="cell-3">

### User requirements

<div class="smaller">

* Users can search for Pokemon by name or type
  * The endpoint is `GET /pokemon` {.smaller}
  * name and type are querystring params {.smaller}
  * **name** is case insensitive and partial string match {.smaller}
  * **type** must be one of valid types {.smaller}
  * Response: array of full pokedex entries for search result {.smaller}
* Users can request a list of all the valid types of Pokemon.
  * The endpoint is `GET /types` {.smaller}
* Both endpoints only respond when given a valid Authorization header with a Bearer API token value
* Both endpoints should have general security in place

</div>
</div>

<div class="cell-3 fragment" data-index="1">

### First steps

* Create new project
* Initialize git, ignore `node_modules`
* Install Express, Morgan, and Nodemon
* Setup `package.json` scripts (start, dev)
* Create starting `server.js`

</div>

</div>