# Render props

## `match`/`history`/`location` with `render`

```js
<Route
    exact
    path="/settings/email"
    render={({match, history, location}) => (
        <EmailSettings
            match={match}
            history={history}
            location={location}
            email="jturner@thinkful.com"
        />
    )}
/>
```

```js
// Spread operator shorthand
<Route
    exact
    path="/settings/email"
    render={props => <EmailSettings {...props} email="jturner@thinkful.com" />}
/>
```


