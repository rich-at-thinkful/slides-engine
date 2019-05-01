# A React component

```js
import React from 'react';
import ReactDOM from 'react-dom';

// Simplest React component is a function
function Person() {
    const name  = 'Joe';
    // Component must return JSX
    // Here we display the person's name
    // Curly brackets ({}) do variable substitution
    return (
        <div className="person">
            {name}
        </div>
    );
};

// Render the component into an element with id 'root'
// Generally only do this once per app if the entire app uses React
ReactDOM.render(<Person />, document.getElementById('root'));
```
