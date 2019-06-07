# SQL Gotchas

* Single quotes are for string constants only, while...

* Double quotes are for identifiers, e.g. table names, column names {.fragment data-index=1}
  * the quotation is necessary when using **non-standard** format as defined by SQL spec, e.g. underscore `_` is permitted, dash `-` is not {.smaller .fragment data-index=1}

* Equals `=` is a comparison operator and not used for assignments {.fragment data-index=2}
  * e.g. `WHERE name = 'Coffee'` {.smaller .fragment data-index=2}

* Semi-colons are not optional! {.fragment data-index=3}

