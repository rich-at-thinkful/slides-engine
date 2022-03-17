# `async` callback

* `useEffect` callback cannot be an async function
* Must be within the `useEffect` callback

```js
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUser() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      setUser(await response.json())
    }
    loadUser()
  }, []);
```