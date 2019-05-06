# Navigation - history

```js
class SingleRepo extends React.Component {
    state = {repo: {}};
    handleClick = () => {
        fetch('https://api.github.com/repo/dhh/rails', {
            method: 'DELETE'
        }).then(res => {
            // Navigate back to list of repos when we delete this one
            // props.history is passed in to components rendered by Route
            this.props.history.push('/repos')
        });
    };
    render() {
        return (
            <div>
                <h1>{this.state.repo.name}</h1>
                <button onClick={this.handleClick}>Delete repo</button>
            </div>
        );
    }
}
```
