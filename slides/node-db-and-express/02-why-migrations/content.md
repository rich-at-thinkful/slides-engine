# Migrations

<div class="smaller">
  <div class="row">
    <div class="cell-3">

## What is a migration?

* Every migration comprises one or more SQL statements to alter the database schema 
  * (e.g. create a table, rename a column, etc.) {.smaller}

* Each migration should have complementary "undo" instructions to revert the change 

* AKA. "schema migrations"
  * not to be confused with "database migrations," a typically large undertaking of transferring data from one database system to another {.smaller}

    </div>
    <div class="cell-3">
      <div class="fragment" data-index="1">

## Why write migrations?

* Makes it easy to perpetually build and break down your db
  * for different developers running on their local machines {.smaller}
  * for different environments, e.g. test, dev, production {.smaller}

* Acts as documentation for your database's structure

* Allows changes over time as your application's features evolve

* One trait of a modern software-as-a-service, as defined in [12 Factor App](https://12factor.net/){target=_blank}
  * maximum portability between execution environments {.smaller}
  * suitable for deployment on cloud platforms {.smaller}

      </div>
    </div>
  </div>
</div>