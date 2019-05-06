# Render the errors

```js
class SsnForm extends React.Component {
    // Add boolean to say if it's vali and dplace to store error messages
    state = {ssn: '', ssnValid: false, validationMessages: {}};
    ...
    render() {
        const {ssn, ssnValid, validationMessages} = this.state;
        return (
            <form>
                <label htmlFor="ssn">
                    Social Security Number
                    // If there is an error in the state, show it!
                    {!ssnValid && (
                        <p className="error">{validationMessages.ssn}</p>
                    )}
                </label>
                <input id="ssn" type="text" value={ssn}
                    onChange={e => this.setSsn(e.target.value)} />
                <button>Submit SSN</button>
            </form>
        );
    }
}
```
