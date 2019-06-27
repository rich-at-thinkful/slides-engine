# Render the errors

```js
class SsnForm extends React.Component {
    ...
    render() {
        return (
            <form>
                <label htmlFor="ssn">
                    Social Security Number
                    // If there is an error, show it!
                    <p className="error">{this.validateSsn()}</p>
                </label>
                <input id="ssn" type="text" value={this.state.ssn.value}
                    onChange={e => this.setSsn(e.target.value)} />
                <button>Submit SSN</button>
            </form>
        );
    }
}
```
