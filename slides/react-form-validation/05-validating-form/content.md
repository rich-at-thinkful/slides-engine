# Validating an entire form

```js
class SsnForm extends React.Component {
    state = {
        name: {value: ''}, // More than one field
        ssn: {value: ''}
    };
    validateSsn() {
        // Validation logic...
    }
    validateName() {
        // Validation logic...
    }
    render() {
        // Render logic...
            <button disabled={
                this.validateName() ||
                this.validateSsn()
            }>Submit SSN</button>
        </form>
    }
}
```
