# Nested Routes

```js
//App.js
<Router>
  <Switch>
    <Route path="/users/:userId">
      <User />
    </Route>
    ...
  </Switch>
</Router>
```
```js
//User.js
 return (
  <Switch>
    <Route path={'/users/:userId/posts'}>
      <PostList posts={user.posts}/>
    </Route>
    <Route path={'/users/:userId'}>
      <UserProfile user={user}/>
    </Route>
  </Switch>
);
```