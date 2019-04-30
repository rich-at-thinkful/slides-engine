# Snapshot testing

## Has the output of a component changed?

```js
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
    it('renders without crashing', () => {
        // Render the component, as JSON
        const tree = renderer.create(<App />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});
```
