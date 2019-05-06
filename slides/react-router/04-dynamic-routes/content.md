# Dynamic routes

```js
function App() {
    return (
        <div className="app">
            // Dynamic route - matches /user/joe, /user/tauhida, etc.
            <Route exact path="/user/:username" component={User} />
        </div>
    );
}
```

```js
class User extends React.Component {
    state = {user: {}};
    componentDidMount() {
        const API = 'https://api.github.com';
        // Get the variable part of the route from props.match.params
        fetch(`${API}/users/${this.props.match.params.username}`)
            .then(res => res.json())
            .then(user => this.setState({user}));
    }
    render() {
        return <div>{this.state.user.name}</div>;
    }
}
```
