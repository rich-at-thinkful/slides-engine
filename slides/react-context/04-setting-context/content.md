# Setting context values

```js
class Parent extends React.Component {
    state = {name: 'Joe'};
    render() {
        // Wrap components in Provider
        // Value prop replaces the default values in the context
        // Any children (grandchildren, great-grandchildren etc.) can
        // consume the values
        return (
            <UserContext.Provider value={{
                name: this.state.name,
                setName: name => this.setState({name})
            }}>
                <Child /> // No longer passing down through every layer
            </UserContext.Provider>
        );
    }
}
```
