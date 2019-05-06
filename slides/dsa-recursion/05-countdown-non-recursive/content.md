# Countdown program - non-recursive

```js
//write a function that count numbers down
const countDown = function(from) {
    for(let i=from; i>0; i--){
        console.log(`counting numbers ${i}`);
    }
}
countDown(5);
```

*How would you write this using recursion?* {.bigger}
