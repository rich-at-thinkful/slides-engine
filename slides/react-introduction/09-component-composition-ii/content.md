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

```js
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
function Person() {
    return (
        <div className="person">Joe</div>
    );
}
```

