# Class components

## Longer syntax for creating more powerful components

```js
class Person extends React.Component {
    render() {
        return (
            <div className="person">
                {/* this.props instead of props */}
                {this.props.name}
            </div>
        );
    }
};
```
