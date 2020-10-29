# State and Event Handlers

```js
import React, { useState } from "react";

function App() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section>
      <p>Please click to subscribe to my updates!</p>
        <button onClick={() => setSubscribed(true)}>
        {subscribed ? "Unsubscribe" : "Subscribe"}
        </button>
    </section>
  );
}

export default App;
```