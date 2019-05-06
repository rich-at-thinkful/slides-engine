# Routes

```js
import {Route} from 'react-router-dom';
function App() {
    return (
        <div className="app">
            // Exact route - will only match /
            <Route exact path="/" component={HomePage} />
            // Inexact route - will match /settings, /settings/profile
            // and /settings/email
            <Route path="/settings" component={SettingsNavigation} />
            <Route
                exact
                path="/settings/profile"
                component={ProfileSettings}
            />
            // If you want to pass props to the component, use the render prop
            <Route
                exact
                path="/settings/email"
                render={() => <EmailSettings email="jturner@thinkful.com" />}
            />
        </div>
    );
}
```
