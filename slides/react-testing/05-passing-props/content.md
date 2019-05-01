# Passing props

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Person from './Person';

describe('<Person />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        // Pass required props in the usual way
        ReactDOM.render(<Person name="Joe" username="jturner" />, div);

        ReactDOM.unmountComponentAtNode(div);
    });
});
```
