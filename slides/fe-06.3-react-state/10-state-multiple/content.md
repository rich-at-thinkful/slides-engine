# Managing State Over Multiple Components

```
function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
```
```
// Header.js
function Header() {
  return (
    <button onClick={/* TODO */}>{loggedIn ? "Log Out" : "Log In"}</button>
  );
}

// Content.js
function Content() {
  return loggedIn && <p>CONTENT</p>;
}
```