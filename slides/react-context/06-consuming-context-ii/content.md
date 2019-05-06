# Consuming context values

## The hard way - allows consuming multiple contexts

```js
class GreatGreatGrandChild extends React.Component {
    render() {
        // Wrap items to render in consumer
        // Pass callback as props.children, which will receive
        // context as an argument
        return (
            <UserContext.Consumer>
                {({name, setName}) => (
                    <div className="user" onClick={() => setName('Chris')}>
                        {name}
                    </div>
                )}
            </UserContext.Consumer>
        );
    }
}
```
