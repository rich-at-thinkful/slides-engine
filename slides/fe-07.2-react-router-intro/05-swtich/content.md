# Switch

## Only render the first Route component that has a match 

```js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          // by convention `/` is listed first with exact={true}
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```