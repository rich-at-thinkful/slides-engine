# `var` scope challenge: What gets printed?

<div class="grid">
<div class="cell">

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
<div class="cell fragment">

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
