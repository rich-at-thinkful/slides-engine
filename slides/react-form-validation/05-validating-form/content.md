# Validating an entire form

```js
class SsnForm extends React.Component {
    state = {
        name: '', nameValid: false, // More than one field
        ssn: '', ssnValid: false,
        formValid: false,  // Add boolean to say if entire form is valid
        validationMessages: {}
    };
    setSsn = ssn => {
        this.setState({ssn}, () => this.validateSsn(ssn));
    };
    validateSsn = ssn => {
        // Validation logic...
        // Revalidate the entire form when we validate a single field
        this.setState({validationMessages, ssnValid}, this.validateForm);
    }
    validateForm = () => {
        this.setState({
            formValid: this.state.nameValid && this.state.ssnValid
        });
    }
    render() {
        // Render logic...
            <button disabled={!this.state.formValid}>Submit SSN</button>
        </form>
    }
}
```
