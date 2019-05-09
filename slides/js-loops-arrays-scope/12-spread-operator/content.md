# The spread operator: ...

## (Yes, it looks like an ellipsis)

Convert array elements into a **list**

<div class="row">
<div class="cell-4">

```js {#spread-operator data-span="7:19:22 .highlight; 7:37:40 .highlight"}
const dogs = ["Golden Retriever", "Husky"];
const cats = ["Bengal", "Persian", "Siamese"];

const animals = [...dogs, "squirrel", ...cats, "coyote", "fox"];
console.log(animals.length);   // => 8

const animals2 = [dogs, "squirrel", cats, "coyote", "fox"];
console.log(animals2.length);  // => 5
```

</div>
<div class="cell-2">

Without spread operator, this just places an array inside an array {.annotation data-for=spread-operator data-line=7 .fragment}

</div>
</div>

<div class="fragment" data-index="2">

Rest parameters (converting a **list** into an array)

```js
function getVolume(...dimensions) {
  return dimensions[0] * dimensions[1] * dimensions[2];
}

getVolume(5, 10, 3);
// => 150
```

</div>

