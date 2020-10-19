# Programmatic Navigation

```js
history.goBack()
```
```js
history.goForward()
```
```js
history.go(0); // equal to refreshing the page
history.go(-1); // equal to history.goBack()
history.go(-2); // equal to calling history.goBack() twice
history.go(1); // equal to history.goForward()
history.go(3); // equal to calling history.goForward() 3 times
```
```js
history.push("/users"); // navigate to /users
history.push("/home?q=query"); // navigate to /home?q=query
```