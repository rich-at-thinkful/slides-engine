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

``` {.fragment data-index=0}
//User.js
<Switch>
  <Route path="/users/:userId/posts">
    <PostList posts={user.posts}/>
  </Route>
  <Route path="/users/:userId">
    <UserProfile user={user}/>
  </Route>
</Switch>
```

* This is reusing the basepath which may change in the future! {.small .fragment data-index=1}
