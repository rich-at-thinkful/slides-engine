# Checkbox Input Type

```js
<label htmlFor="subscription">
  Receive email notifications?
  <input
    id="subscription"
    type="checkbox"
    name="subscription"
    onChange={handleSubscriptionChange}
    checked={subscription}
    value="subscription"
  />
</label>
```
```js
const handleSubscriptionChange = (event) => {
  setSubscription(event.target.checked);
};
```

* Important! Checkbox uses the `checked` property on the input element