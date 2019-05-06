# Using the error boundary

```js
function App() {
    // ErrorPage handles errors thrown when rendering HomePage or ProfilePage
    return (
        <div className="app">
            <h1>My app</h1>
            <ErrorPage>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/profile" component={ProfilePage} />
            </ErrorPage>
        </div>
    );
}
```
