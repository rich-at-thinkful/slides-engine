# `var` scope challenge: What gets printed?

<div class="row">
<div class="cell-3">

```js
var x = 10;
var y = 20;

var z = function() {
    console.log(x);
    x += 5;
    y += 5;

    console.log(x);

    var x = 20;
    console.log(x);

    return x + y;
};

console.log(z());
```

</div>
<div class="cell-3 fragment">

Behind the scenes:

```js
var x = undefined;
var y = undefined;
var z = undefined;

x = 10;
y = 20;

z = function() {
    var x = undefined;
    console.log(x);
    
    x += 5;
    y += 5;

    console.log(x);

    x = 20;
    console.log(x);

    return x + y;
};

console.log(z());
```

</div>
</div>
