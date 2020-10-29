# Multiple Updates

* Setting State Multiple Times Can Introduce Errors

```
<button
  onClick={() => {
    setSubscribed(!subscribed);
    setSubscribedCount(subscribedCount + 1);
    setSubscribedCount(subscribedCount + 1);
    if (!alerts) setAlerts(true);
  }}
>
  {subscribed ? "Unsubscribe" : "Subscribe"}
</button>
```

