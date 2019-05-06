# Navigation - links

```js
import {Link} from 'react-router-dom';

function SettingsNavigation() {
    return (
        <nav>
            <ul>
                // Always use <Link> instead of <a> to navigate locally
                // It saves a round-trip to the server
                <li><Link to="/settings/profile">Profile</Link></li>
                <li><Link to="/settings/email">Email</Link></li>
            </ul>
        </nav>
    );
}
```
