# AJAX in React: fetching on load

```js
class RepoList extends React.Component {
    state = {
        // Empty list of repos to start with
        // This gets populated when the fetch request resolves
        repos: []
    };

    componentDidMount() {
        // Start fetching the repos when the component is first displayed
        fetch('https://api.github.com/users/dhh/repos')
            .then(res => res.json())
            .then(repos => this.setState({repos}));
    }

    render() {
        const repos = this.state.repos.map(repo => <li>{repo.name}</li>);
        return <ul>{repos}</ul>;
    }
}
```
