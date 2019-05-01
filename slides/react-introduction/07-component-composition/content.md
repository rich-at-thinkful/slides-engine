# Component composition

```js
// These two components are identical
function PersonList() {
    return (
        <div className="personList">
            <h3>Person List</h3>
            <Person />
            <Person />
            <Person />
        </div>
    );
}
```

```js
function PersonList() {
    // You can use JSX as a regular variable
    const person = <Person />;
    const people = [<Person />, <Person />]; // Arrays are rendered too
    return (
         <div className="personList">
            <h3>Person List</h3>
            {person}
            {people}
        </div>
    );
};
```
