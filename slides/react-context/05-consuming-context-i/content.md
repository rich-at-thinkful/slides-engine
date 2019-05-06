# Consuming context values

## The easy way

```js
class GreatGreatGrandChild extends React.Component {
    // Tell the component that this.context should be the UserContext
    static contextType = UserContext;

    render() {
        // Take values from context
        const {name, setName} = this.context;
        return (
            <div className="user" onClick={() => setName('Chris')}>
                {name}
            </div>
        );
    }
}
```
