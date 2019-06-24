# Component composition

```js
function App() {
    return (
        <div className="app">
            <Header />
            <PersonList />
            <Footer />
        </div>
    );
}
```

<div class="row">

<div class="cell-3">

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

</div>

<div class="cell-3">

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

</div>
</div>
