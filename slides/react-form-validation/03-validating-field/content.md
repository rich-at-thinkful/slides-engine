# Validating a field

```js
class SsnForm extends React.Component {
    state = {ssn: {value: ''}};
    setSsn = ssn => {
        this.setState({ssn: {value: ssn}});
    };
    // Add a validation function
    validateSsn = ssn => {
        let ssn = this.state.ssn.value;
        ssn = ssn.replace(/[\s-]/g, ''); // Remove whitespace and dashes
        if (ssn.length !== 9) {
            // Check if it's 9 characters long
            return 'SSN must be 9 digits long';
        } else if (!/^\d+$/.test(ssn)) {
            // Check if it's just digits
            return 'SSN must only contain numbers';
        }
    }
    render() {
        // Render logic...
    }
}
```
