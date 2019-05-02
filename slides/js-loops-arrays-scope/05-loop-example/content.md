# Loop Example

* Create a function `countByThree` that counts by three starting from 3 to 30

```js
function countByThree(){
  const START = 3;
  const STOP = 30;
  const INCREMENT = 3;

  for(let i = START; i<=STOP; i+=INCREMENT){
    console.log(i);
  }
}

countByThree();
```
