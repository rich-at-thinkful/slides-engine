# Seed Data Separately

* Don't put your seed instructions in the migration files

* Seeding should always be a separate task and specific to the database environment (test, dev, production...)

* [Blogful Seed File](https://raw.githubusercontent.com/Thinkful-Ed/blogful-api/get-articles/seeds/seed.blogful_articles.sql){target=_blank}

<div class="row">
<div class="cell-4">

```bash {#db-setup-1}
$ createdb blogful                                      
$ npm run migrate                                       
$ psql -d blogful -f ./seeds/seed.blogful_articles.sql 
```

</div>
<div class="cell-2">
<div class="tiny">

create development database {.annotation data-for=db-setup-1 data-line=1 .fragment data-index=1 data-style=in-out}

run migrations (set schema) {.annotation data-for=db-setup-1 data-line=2 .fragment data-index=2 data-style=in-out}

seed database {.annotation data-for=db-setup-1 data-line=3 .fragment data-index=3 data-style=in-out}

</div>
</div>
</div>
