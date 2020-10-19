# Browser Router

```js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    // Wraps the entire app - any component can now contain Route components
    <Router>
      <div className="App"></div>
    </Router>
  );
}
```