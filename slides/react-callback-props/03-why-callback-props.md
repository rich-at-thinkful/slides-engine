# Why do we need callback props?

```js
class TaskList extends React.Component {
    state = {
        tasks: [
            {id: 0, text: 'Learn React', complete: false},
            {id: 1, text: '???', complete: false},
            {id: 2, text: 'Profit', complete: false}
        ]
    };

    completeTask = (id) => { // Note: Arrow function
        // This needs calling when a <Task /> is clicked
        this.setState({
            tasks: this.state.tasks.map(
                task => task.id === id ? {...task, complete: true} : task
            )
        });
    };

    render() {
        ...
    }
}
```
