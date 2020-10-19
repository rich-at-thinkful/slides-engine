# Routes

```js
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        // Exact route - will only match /
        <Route path="/" exact={true}>
          <Home />
        </Route>
        // Inexact route - will match /settings, /settings/profile
        // and /settings/email
        <Route path="/settings">
          <Settings />
        </Route>
      </div>
    </Router>
  );
}
```