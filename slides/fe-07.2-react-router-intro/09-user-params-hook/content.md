# The `useParams()` hook

## Returns an object of key/value pairs of route parameters

```js
<Route path="/user/:userId/post/:postId">
  <UserProfile />
</Route>
```

```js
import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const params = useParams();
  return <p>{params.userId} - {params.postId}</p>;
}
```