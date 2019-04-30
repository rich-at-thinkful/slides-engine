# Lifecycle methods

## Methods called automatically by React

```js
class App extends React.Component {
    constructor(props) { // Called before component mounts
        super(props);
    }

    componentDidMount() {} // Called after component mounts

    render() { // You know this one already
        return <div>Hello world</div>;
    }

    componentDidUpdate() {} // Called after each render

    componentWillUnmount() {} // Called before component unmounts
}
```
