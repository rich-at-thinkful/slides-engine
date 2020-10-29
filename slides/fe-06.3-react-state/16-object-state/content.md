# Object as State

* Use Spread (`...`) Operator to Update a Value
```
const [counts, setCounts] = useState({ heads: 0, tails: 0 });

const handleClick = (value) => {
  setResults([...results, value]);
  setCounts({
    ...counts,
    [value]: counts[value] + 1,
  });
};
```
