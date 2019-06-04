# Registration Validation (cont.)

<div class='row'>
<div class='cell-4'>

```js {#register-4}
const clubs = [
  'Cache Valley Stone Society',
  'Ogden Curling Club',
  'Park City Curling Club',
  'Salt City Curling Club',
  'Utah Olympic Oval Curling Club'
];

if (!clubs.includes(favoriteClub)) {
  return res
    .status(400)
    .send('Not a valid club');
}
```

</div>
<div class='cell-2 smallest'>

setup valid clubs array {.annotation data-for=register-4 data-line=1 .fragment data-index=1}

check for inclusion and return 400 if not {.annotation data-for=register-4 data-line=9 .fragment data-index=2}

</div>
</div>


