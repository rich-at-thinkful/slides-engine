# Securing Endpoints

* We often want an endpoint to only return data if we've validated that the client is authorized to see the data
* There are many authorization strategies
* Today, we're going to use the "Bearer Token"

<div class="fragment" data-index="1">

### Bearer

* The server holds onto a secret `API_TOKEN` token (like a unique id)
* The client must set an HTTP header with every request
  * e.g. `Authorization: Bearer 893hjhks-s87s9fh-8sdfhb-iy8778bhk`
  * (yes, the header value is the word "Bearer" preceded by a token) {.smallest}
* If no header provided, or value mismatches, server returns `401 Unauthorized`

</div>