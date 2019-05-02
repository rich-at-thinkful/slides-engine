# Array example

```js
function averageSales(){
  // Declaring and initializing array salesAmt
  const salesAmt = [3000, 10000, 4000, 5000, 4000, 9000, 11000, 15000, 2000, 5000];
  let sum = 0;

  // What is the stopping condition for my loop here?  
  for(let i=0; i<salesAmt.length; i++){
    sum += salesAmt[i]; // Accessing each element (sales amt) of the array
  }
  // How do I find the average?
  return sum / salesAmt.length;
}

console.log(averageSales());
```
