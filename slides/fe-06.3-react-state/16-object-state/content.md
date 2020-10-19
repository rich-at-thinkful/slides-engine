# Object as State

* Use Spread (`...`) Operator to Update a Value
```
const [counts, setCounts] = useState({ H: 0, T: 0 });

const handleClick = (value) => {
  setResults([...results, value]);
  setCounts({
    ...counts,
    [value]: counts[value] + 1,
  });
};
```
