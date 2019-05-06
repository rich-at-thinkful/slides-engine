# Validating a field

```js
class SsnForm extends React.Component {
    // Add boolean to say if it's vali and dplace to store error messages
    state = {ssn: '', ssnValid: false, validationMessages: {}};
    setSsn = ssn => {
        // Validate after we set the value
        this.setState({ssn}, () => this.validateSsn(ssn));
    };
    validateSsn = ssn => {
        const validationMessages = {...this.state.validationMessages};
        let ssnValid = true;

        ssn = ssn.replace(/[\s-]/g, ''); // Remove whitespace and dashes
        if (ssn.length !== 9) { // Check if it's 9 characters long
            validationMessages.ssn = 'SSN must be 9 digits long';
            ssnValid = false;
        } else if (!/^\d+$/.test(ssn)) { // Check if it's just digits
            validationMessages.ssn = 'SSN must only contain numbers';
            ssnValid = false;
        }
        this.setState({validationMessages, ssnValid});
    }
    render() {
        // Render logic...
    }
}
```
