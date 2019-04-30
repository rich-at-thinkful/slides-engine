# Passing arguments

```js
class ContentToggle extends React.Component {
    handleClick = celebration => {
        console.log("Let's celebrate", celebration);
    };

    render() {
        return (
            <div>
                // Make it an arrow function, then call the method
                <button onClick={() => this.handleClick('Wahoo')}>
                    Click me
                </button>
                <button onClick={() => this.handleClick('Wahey')}>
                    Or me
                </button>
            </div>
        );
    }
}
```
