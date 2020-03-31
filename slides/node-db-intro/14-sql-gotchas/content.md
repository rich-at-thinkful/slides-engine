# SQL Gotchas

* Single quotes are for string constants only, while...

* Double quotes are for identifiers, e.g. table names, column names {.fragment data-index=1}
  * the quotation is necessary when using **non-standard** identifier format {.smaller .fragment data-index=1}
  * `"dunder-mifflin"` requires quotes as `-` is non-standard {.smaller .fragment data-index=1}
  * `dunder_mifflin` does not require quotes {.smaller .fragment data-index=1}
  * General rule: Avoid non-standard characters when possible! {.smaller .fragment data-index=2}

* Equals `=` is used as both a comparison **and** assignment operator depending on context {.fragment data-index=3}
  * `WHERE name = 'Coffee'` {.smaller .fragment data-index=4}
  * `SET name = 'Coffee'` {.smaller .fragment data-index=4}

* Semi-colons are not optional {.fragment data-index=5}
  * Seriously: DON'T FORGET THIS! {.red .smaller .fragment data-index=6}

<style>
.red {
  color: red;
}
</style>