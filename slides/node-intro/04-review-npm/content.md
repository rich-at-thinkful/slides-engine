# Review: NPM

* Node Package Manager
* Begin a new project:

<div class='row'>
<div class='cell-4'>

```bash {#npm-1}
$ npm init

$ npm init -y
```

</div>
<div class='cell-2 smallest'>

create `package.json` and prompt for meta data {.annotation data-for=npm-1 data-line=1 .fragment data-index=1}

create `package.json` with defaults {.annotation data-for=npm-1 data-line=3 .fragment data-index=2}

</div>
</div>

<div class=fragment data-index=3>

* `package.json` holds all information on a project
  * dependency manifest
  * start, test, and other scripts
  * meta info
* `node_modules` holds all the local libraries

</div>