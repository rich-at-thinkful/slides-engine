# Loading indicators

```js
class RepoList extends React.Component {
    state = {
        loading: false, // Extra state - tells us whether we are loading
        repos: []
    };
    componentDidMount() {
        this.setState({loading: true}); // AJAX request is starting
        fetch('https://api.github.com/users/dhh/repos')
            .then(res => res.json())
            .then(repos => this.setState({
                repos,
                loading: false // AJAX request is done
            }));
    }
    render() {
        // Render a message if the request is ongoing
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        const repos = this.state.repos.map(repo => <li>{repo.name}</li>);
        return <ul>{repos}</ul>;
    }
}
```
