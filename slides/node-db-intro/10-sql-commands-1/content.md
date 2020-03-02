# SQL Commands

<div class='row'>
<div class='cell-4'>

## Create a Table

```sql {#table-1 data-span="2:16:21 .fragment data-style=highlight-in-out data-index=1; 2:26:36 .fragment data-style=highlight-in-out data-index=2; 6:34:38 .fragment data-style=highlight-in data-index=3"}
CREATE TABLE items (
  id           SERIAL       PRIMARY KEY,
  name         TEXT         NOT NULL,
  description  TEXT,
  completed    BOOLEAN      DEFAULT false,  
  created      TIMESTAMPTZ  DEFAULT now()
);
```

</div>
<div class='cell-2 smallest'>

creates auto incrementing sequence of integers {.annotation data-for=table-1 data-line=2 .fragment data-index=1 data-style=in-out}

denotes a unique, non-null value {.annotation data-for=table-1 data-line=2 .fragment data-index=2 data-style=in-out}

SQL has built-in functions for computed data {.annotation data-for=table-1 data-line=6 .fragment data-index=3 data-style=in-out}

</div>
</div><!-- end row -->

<div class='row'>
<div class='cell-4'>

## Drop a Table

``` {#table-2}
DROP TABLE items;
DROP TABLE IF EXISTS items;
```

</div>
<div class='cell-2 smallest'>

avoid error by only executing command if you can {.annotation data-for=table-2 data-line=2 .fragment data-index=4}

</div>
</div><!-- end row -->


