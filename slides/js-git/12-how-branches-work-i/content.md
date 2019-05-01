# How it works

Alice makes a few commits on her project.  This repos has a single linear branch.

```sh
$ git lg
* 74224ab (HEAD -> master) add greet function
* db2aeed link js script to html page
* f39488b add title and header
* d47aa27 add blank index.html
* 9150a6c hello world!
```

<div class="fragment">

Bob wants to work on a discrete feature for the app.  He first ensures he has the latest **`master` branch**.

```sh
$ git pull origin master
```

He then creates a new branch to work on:

<div class="row">
<div class="cell">

```sh
# Shorthand
$ git checkout -b smartbot
```

</div>
<div class="cell">

```sh
$ git branch smartbot
$ git checkout smartbot
```

</div>
</div>

</div>
