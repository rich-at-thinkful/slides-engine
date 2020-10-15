# Combining Named and Default Exports

* Default and Named Exports

`contants.js`
```
export default const website = "https://www.thinkful.com/";
export const username = "Bob";
```

* Default and Named Imports
```
import website, { username } from "./constants";
```