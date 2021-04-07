# Array as State

* Use Spread (`...`) Operator to Add To an Array In State
```
const [results, setResults] = useState([]);

const handleClick = (value) => {
  setResults([...results, value]);
};
```
* Use `.map()` to Update a Value in an Array In State
```
const handleUpdate = (index, value) => {
  const newResults = results.map((result, i) => i === index ? value : result);
  setResults(newResults);
};
```

* Use `.filter()` to Delete a Value In State
```
const deleteToss = (indexToDelete) => {
  setResults((currentResults) =>
    currentResults.filter((ignored, index) => index !== indexToDelete)
  );
};
```
