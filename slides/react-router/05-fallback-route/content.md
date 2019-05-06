# Fallback route

```js
function App() {
    return (
        <div className="app">
            // Switch only renders the first matching component
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/user/:username" component={User} />
                <Route path="/repo/:username/:repo" component={Repo} />
                // If we get this far, then we haven't matched anything
                // Route with no path matches any route
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}
```
