# Named Parameters

## Convention:

* Use named parameters for **identifying a resource**
* Use parameters in querystring to **modify a request**

<div class="fragment" data-index="1">

### Identify resource BOOK of ID 1234... and fetch
```
GET /books/1234
```

</div>

<div class="fragment" data-index="2">

### Modify request for resource BOOKS as SORT BY TITLE... and fetch
```
GET /books?sort=title
```

</div>