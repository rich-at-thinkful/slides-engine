# State as Props

```
// In App.js
<Content loggedIn={loggedIn} text="My content." />;

// Content.js
function Content({ loggedIn, text }) {
  return loggedIn && <p>{text}</p>;
}
```