# Resolving conflicts

Merges are frictionless when the modified files in both branches are different. But what if each developer made changes to the **same file** on their own branch and you try to merge?


Earlier in the day, Bob merged `smartbot` into `master` but both he and Alice made changes to `index.html`. She checks out to `master` and tries to merge `user-logins`.

```sh
$ git merge user-logins
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed: fix conflicts and then commit the result
```

Alice opens up `index.html` and sees that Git has placed markers where the problem is:

```html
<body>
    <h1>Hello World!</h1>

<<<<<<< HEAD
    <script src="botFunctions.js"></script>
=======
    <script src="loginFunctions.js"></script>
>>>>>>> user-logins
    <script src="main.js"></script>
</body>
```

Alice can now decide which pieces between the markers she wants to keep or remove. When she's made those changes, she can re-commit the files and successfully merge to `master`.
