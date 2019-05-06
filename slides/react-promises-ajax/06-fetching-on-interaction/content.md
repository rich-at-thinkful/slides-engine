# AJAX in React: fetching in response to interaction

```js
class RepoList extends React.Component {
    state = {
        repos: []
    };

    fetchRepos = () => {
        // It's exactly the same!!!
        fetch('https://api.github.com/users/dhh/repos')
            .then(res => res.json())
            .then(repos => this.setState({repos}));
    }

    render() {
        const repos = this.state.repos.map(repo => <li>{repo.name}</li>);
        return (
            <div>
                <ul>{repos}</ul>
                <button onClick={this.fetchRepos}>Fetch repos</button>
            </div>
        );
    }
}
```
