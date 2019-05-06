# Error handling

```js
class RepoList extends React.Component {
    state = {
        loading: false,
        repos: [],
        error: null // Extra state - tells us if there was an error fetching
    };
    componentDidMount() {
        this.setState({loading: true, error: null}); // Reset any error
        fetch('https://api.github.com/users/dhh/repos')
            // Add error handling for the response
            .then(res => res.ok ? res.json() : Promise.reject('Something went wrong'))
            .then(repos => this.setState({repos, loading: false}))
            // Handle errors by setting state
            .catch(error => this.setState({error, loading: false}));
    }
    render() {
        // Render a message if there was an error
        if (this.state.error) {
            return <div>Error: {this.state.error}</div>;
        }
        else if (this.state.loading) {
            return <div>Loading...</div>;
        }
        const repos = this.state.repos.map(repo => <li>{repo.name}</li>);
        return <ul>{repos}</ul>;
    }
}
```
