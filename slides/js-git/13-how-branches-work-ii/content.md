# How it works

Bob makes more commits, knowing at any time he can revert back to `master`.

```sh {data-span="2 .highlight; 3 .highlight; 4 .highlight"}
$ git lg
* 6fbba36 (HEAD -> smartbot) add extra bot functions</span>
* 648be02 import bot functions to index.html</span>
* 43dd387 add bot functions</span>
* 74224ab (master) add greet function
* db2aeed link js script to html page
* f39488b add title and header
```

<div class="fragment">

When Bob's certain his branch is complete and ready to ship, he merges it back into `master`.

```sh
$ git checkout master
$ git merge smartbot
$ git branch -d smartbot   # deletes the branch after merging
```

</div>

