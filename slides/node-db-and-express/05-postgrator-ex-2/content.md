# Postgrator CLI

<div class="row">
  <div class="cell-4">

## **DO:** Create type and add "style" column to blogful_articles table {.smaller}

```
./migrations/002.do.alter_articles_style.sql
```

```sql
CREATE TYPE article_category AS ENUM (
    'Listicle',
    'How-to',
    'News',
    'Interview',
    'Story'
);

ALTER TABLE blogful_articles
  ADD COLUMN
    style article_category;
```

  </div>
  <div class="cell-2">

  </div>
</div>

<div class="row fragment" data-index="1">
  <div class="cell-4">

## **UNDO:** Remove "style" column and drop data type {.smaller}

``` {.fragment data-index=1}
./migrations/002.undo.alter_articles_style.sql
```

```sql {.fragment data-index=1}
ALTER TABLE blogful_articles DROP COLUMN IF EXISTS style;
DROP TYPE IF EXISTS article_category;
```

  </div>
  <div class="cell-2">

  </div>
</div>
