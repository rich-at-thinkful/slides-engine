# Migrations

## What is a migration?

* Every migration is an instruction to alter the database schema
  * (e.g. add a table, rename a column, etc.)
* Each migration should have a complementary instruction to undo the change  
* aka. "schema migrations"
  * not to be confused with "database migrations," meaning to undertake the transfer of **data** from one database system to another