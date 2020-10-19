# Lifting State

```js
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
      <Content loggedIn={loggedIn} />
    </div>
  );
}
```
```
// Header.js
function Header({ loggedIn, handleLoggedInClick }) {
  return (
    <button onClick={handleLoggedInClick}>
      {loggedIn ? "Log Out" : "Log In"}
    </button>
  );
}

// Content.js
function Content({ loggedIn }) {
  return loggedIn && <p>CONTENT</p>;
}
```