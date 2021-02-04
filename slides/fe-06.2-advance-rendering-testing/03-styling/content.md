# Styling

```
/* styles.css */
.App {
  font-family: sans-serif;
  text-align: center;
}
```
```
// App.js
import "./styles.css";

import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
```