# What is the time complexity of this algorithm?

```js
function sumProduct(arr){
    let sum = 0;
    for(let i= 0; i<arr.length; i++){
        sum += arr[i];
    }

    let product = 1;
    for(let i= 0; i<arr.length; i++){
        product *= arr[i];
    }

    console.log(`Sum is ${sum} and product is ${product}`);
}
```


