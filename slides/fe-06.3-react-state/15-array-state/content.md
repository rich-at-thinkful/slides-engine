# Array as State

* Use Spread (`...`) Operator to Add To an Array In State
```
const [results, setResults] = useState([]);

const handleClick = (value) => {
  setResults([...results, value]);
};
```

* Use `.filter()` to Delete a Value In State
```const deleteToss = (indexToDelete) => {
  setResults((currentResults) =>
    currentResults.filter((ignored, index) => index !== indexToDelete)
  );
};
```