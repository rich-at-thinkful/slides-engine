# Component composition

```js
function App() {
    return (
        <div className="app">
            <Header />
            <WelcomeList />
            <Footer />
        </div>
    );
}
```

```js
function WelcomeList() {
    return (
        <div className="welcomeList">
            <h3>Welecome List</h3>
                <WelcomeBack name="Joe" />
                <WelcomeBack name="Anna" />
                <WelcomeBack name="Nancy" />
        </div>
    );
}
```

```js
function WelcomeBack({ name = "valued customer" }) {
  return <p>Welcome back, {name}!</p>;
}
```

