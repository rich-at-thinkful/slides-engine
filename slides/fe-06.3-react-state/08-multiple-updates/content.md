# Multiple Updates

* Setting state multiple times can introduce errors

```
<button
  onClick={() => {
    setSubscribedCount(subscribedCount + 1);
    setSubscribedCount(subscribedCount + 1);
  }}
>
  Subscribe
</button>
```

