# Using state

```js
class ContentToggle extends React.Component {
    // Set the initial state
    state = {
        isOpen: false
    };

    handleClick = () => {
        // State is updated using setState
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div className="contentToggle">
                <button onClick={this.handleClick}>Click me</button>
                {/* Conditional rendering: show the div if isOpen is true */}
                {this.state.isOpen && <div>I'm showing</div>}
            </div>
        );
    }
}
```
