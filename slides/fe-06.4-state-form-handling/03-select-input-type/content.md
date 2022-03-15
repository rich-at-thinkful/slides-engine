# Select Input Type

```js
function SubscriberForm() {
  const [referral, setReferral] = useState("");
  const handleReferralChange = (event) => setReferral(event.target.value);

  return (
    <form>
      <label htmlFor="referral">
        How did you hear about us?
        <select
          id="referral"
          name="referral"
          onChange={handleReferralChange}
          value={referral}
        >
          <option value="">-- Select an Option --</option>
          <option value="twitter">Twitter</option>
          <option value="wom">Word of Mouth</option>
          <option value="youtube">YouTube</option>
        </select>
      </label>
    </form>
  );
}
```