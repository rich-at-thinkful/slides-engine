# PostgreSQL from Command Line

### Start and Stop Server

<div class="row">
<div class="cell-4">

```bash {#server-ctl}
$ pg_ctl -l "$PGDATA/server.log" start
$ pg_ctl stop
```

</div>
<div class="cell-2">
<div class="smaller">

`PGDATA` env variable must be set! {.annotation data-for="server-ctl" data-line="1" .fragment data-index="0"}

</div>
</div>
</div>

<div class="row fragment" data-index="1">
<div class="cell-4">

### Create and Drop a Role (User)

```bash
$ createuser -P --interactive
  Enter name of role to add: dev
  Enter password for new role: password
  Enter it again: password
  Shall the new role be a superuser? (y/n) y
```

```bash
$ dropuser dev
```

</div>

<div class="cell-2">
</div>

</div>


<div class="row fragment" data-index="2">
<div class="cell-4">

### Create and Drop a Database

```bash
$ createdb -U dev my_database
```

```bash
$ dropdb -U dev my_database
```

</div>

<div class="cell-2">
</div>

</div>
