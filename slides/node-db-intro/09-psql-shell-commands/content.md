# PostgreSQL Shell Commands

## Start interactive shell {.smaller}

<div class="row">
<div class="cell-4">

```bash
$ psql -U dev -d my_database
```

## Execute commands from file {.smaller}

```bash
$ psql -U dev -d my_database -f ./data/my_script.sql
```

</div>
<div class="cell-2">
<div class="smaller">

</div>
</div>
</div>

<div class="row fragment" data-index="1">
<div class="cell-4">

## Inside the shell {.smaller}

```text {#shell-1}
postgres=# \l
postgres=# \conninfo
postgres=# \c another_db
postgres=# \du
postgres=# \dt
postgres=# \q
postgres=# \?
```

</div>

<div class="cell-2">

<div class="smallest">

list databases {.fragment .annotation data-index="2" data-for="shell-1" data-line="1"}

info on connection {.fragment .annotation data-index="2" data-for="shell-1" data-line="2"}

connect to different db {.fragment .annotation data-index="2" data-for="shell-1" data-line="3"}

list users {.fragment .annotation data-index="2" data-for="shell-1" data-line="4"}

list tables {.fragment .annotation data-index="2" data-for="shell-1" data-line="5"}

quit {.fragment .annotation data-index="2" data-for="shell-1" data-line="6"}

help {.fragment .annotation data-index="2" data-for="shell-1" data-line="7"}

</div>
</div>

</div>
