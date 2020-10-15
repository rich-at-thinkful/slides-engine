# Preventing Rendering

```
function Notifications({ notifications }) {
  return (
    notifications.length > 0 && (
      <p>You have {notifications.length} notifications today!</p>
    )
  );
}
```