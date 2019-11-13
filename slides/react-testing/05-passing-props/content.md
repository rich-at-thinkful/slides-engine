# Passing props

<div class="row">
<div class="cell-3">

```js
import React from 'react';

export default function Person(props) {
    // Component requires two props: name and favorites
    return (
        <div className="person">
            {props.name}
            <ul className="person-favorite-things">
                {props.favorites.map(thing => (
                    <li key={thing.id}>{thing.name}</li>
                ))}
            </ul>
        </div>
    );
}
```

</div>
<div class="cell-3">

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Person from './Person';

describe('<Person />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        // Pass required props in the usual way
        ReactDOM.render(
            <Person
                name="Joe"
                favorites={[
                    {id: 1, name: 'Raindrops on roses'},
                    {id: 2, name: 'Whiskers on kittens'}
                ]}
            />,
            div
        );

        ReactDOM.unmountComponentAtNode(div);
    });
});
```

</div>
</div>
