# Children

* Nest elements and components 
* Only one top-level element

```js
const element = (
  <div>
    <h1>Hello World!</h1>
    <h2>Have a good day.</h2>
  </div>
);
```

* Can use a Fragment to avoid overuse of DOM elements where semantically appropriate

```js
const element = (
  <React.Fragment>
    <form>
      <input />
    </form>
    <p>This form must be completed in full.</p>
  </React.Fragment>
);
```
