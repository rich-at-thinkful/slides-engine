# How it works

That was nice and smooth, but when multiple developers are working on a project, it won't always be that simple. What if Alice is busy working on a feature in her own branch?

Alice also confirms she has the latest `master` and then starts her own branch and makes commits.

```sh {data-span="2 .highlight; 3 .highlight"}
$ git lg
* 796ff14 (HEAD -> user-logins) include lib in index
* b7c4f22 create loginFunctions.js
  * 6fbba36 (smartbot) add extra bot functions
  * 648be02 import bot functions to index.html
  * 43dd387 add bot functions

* 74224ab (master) add greet function
* db2aeed link js script to html page
```


Notice now `smartbot` and `user-logins` branches are both extending off `master`.
