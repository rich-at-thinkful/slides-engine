# Multiple `useEffect()` calls

## Allows logically related code to be written together

```js
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(API_URL);
      setUser(await response.json())
    }
    loadUsers()
  }, []); // Passing [] so it only runs the effect once

  useEffect(() => {
    if (user.name) {
      document.title = `${user.name} : Edit Profile`;
    } else {
      document.title = "Edit Profile";
    }
  }, [user]); // Re-run this effect when the user changes
  ```