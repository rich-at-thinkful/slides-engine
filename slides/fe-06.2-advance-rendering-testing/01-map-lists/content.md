# Displaying an Array

* Use `map` for a List

```
// GroceryList.jsx
function GroceryList({ items }) {
  const list = items.map((item, index) => <li key={index}>{item}</li>);
  return <ul>{list}</ul>;
}
```