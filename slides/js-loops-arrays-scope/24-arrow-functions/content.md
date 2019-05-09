# Arrow functions `=>`

* An abbreviated syntax for working with functions
* AKA Fat arrow
* Make code more readable and compact

### Function

```js {data-span="1:19 .highlight"}
var studentList = function(students) {
    console.log(students);
}
studentList(["Joe", "Cindy", "Jeanne"]);
```


### Arrow function

```js {data-span="1:19:31 .highlight"}
var studentList = (students) => console.log(students);
studentList(["Joe", "Cindy", "Jeanne"]);
```
