# Passing a callback prop

```js
class TaskList extends React.Component {
    state = {
        tasks: [
            {id: 0, text: 'Learn React', complete: false},
            {id: 1, text: '???', complete: false},
            {id: 2, text: 'Profit', complete: false}
        ]
    };

    completeTask = (id) => {
        ...
    };

    render() {
        const tasks = this.state.tasks.map(task =>
            <Task
                key={task.id} id={task.id}
                text={task.text} complete={task.complete}
                handleClick={this.completeTask} /> // Callback prop!
        );

        ...
    }
}
```
