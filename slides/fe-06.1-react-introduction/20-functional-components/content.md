# Functional Components

`WelcomeBack.js`
```
import React from 'react';

export default function WelcomeBack() {
  return <p>Welcome back, valued customer!</p>;
}
```

`index.js`
```
ReactDOM.render(
  <div>
    <WelcomeBack />
    <WelcomeBack />
  </div>,
  document.getElementById("root")
);
```