# Controlled inputs

## Store the value of the input in state

```js
class SsnForm extends React.Component {
    // Input values in state
    state = {ssn: ''};
    setSsn = ssn => {
        this.setState({ssn});
    };
    render() {
        return (
            <form>
                // Two props: value and onChange
                <label htmlFor="ssn">Social Security Number</label>
                <input id="ssn" type="text" value={this.state.ssn}
                    onChange={e => this.setSsn(e.target.value)} />
                <button>Submit SSN</button>
            </form>
        );
    }
}
```
