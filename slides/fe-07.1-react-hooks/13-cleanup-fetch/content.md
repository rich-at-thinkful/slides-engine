# Cleanup Pending `fetch()`

```js
useEffect(() => {
  setUser({});
  const abortController = new AbortController(); // Create a new AbortController

  async function loadUser() {
    try {
      const response = await fetch(
        `http://slowwly.robertomurray.co.uk/delay/1000/url/https://jsonplaceholder.typicode.com/users/${userID}`,
        { signal: abortController.signal } // Pass the AbortController signal to fetch
      );
      const userFromAPI = await response.json();
      setUser(userFromAPI);
    } catch (error) {
      if (error.name === "AbortError") {
        // ignore AbortError
        console.log("Aborted", userID);
      } else {
        throw error;
      }
    }
  }

  loadUser();

  return () => {
    console.log("cleanup", userID);
    abortController.abort(); // cancels any pending request or response
  };
}, [userID]);
```