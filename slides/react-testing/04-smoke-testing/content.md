# Smoke testing

## Did a component render without crashing?

```js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

describe('<App />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<App />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
});
```
