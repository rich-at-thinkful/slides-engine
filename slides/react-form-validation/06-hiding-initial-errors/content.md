# Hiding initial errors

```js
class SsnForm extends React.Component {
    state = {
        name: {value: '', touched: false} // Touched: whether field has changed
    };
    setSsn = ssn => {
        this.setState({ssn: {value: ssn, touched: true}}); // Switch touched to true
    };
    render() {
        <form>
            <label htmlFor="ssn">
                Social Security Number
                // Only show error if field has been touched
                {this.state.ssn.touched &&
                    <p className="error">{this.validateSsn()}</p>}
            </label>
            <input id="ssn" type="text" value={this.state.ssn.value}
                onChange={e => this.setSsn(e.target.value)} />
            <button>Submit SSN</button>
        </form>
    }
}
```
