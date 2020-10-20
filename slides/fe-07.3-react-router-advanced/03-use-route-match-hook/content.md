# `useRouteMatch()` Hook

* Get information about the closest matching in the tree
* Includes the exact, strict, and sensitive options and URL parameters

```js
{
   "path":"/user/:userId/posts",
   "url":"/user/1/posts",
   "isExact":true,
   "params":{
      "userId":"1"
}
```
```js
const { url } = useRouteMatch();

<Route path={`${url}/:postId`}>
  <Post ... />
</Route>
```
