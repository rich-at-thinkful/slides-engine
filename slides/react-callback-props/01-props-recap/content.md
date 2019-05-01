# Recap: props

## Pass information from parent to child

```js
class TaskList extends React.Component {
    state = {
        tasks: [
            {id: 0, text: 'Learn React', complete: false},
            {id: 1, text: '???', complete: false},
            {id: 2, text: 'Profit', complete: false}
        ]
    };

    render() {
        // Information about each task is passed to Task via props
        const tasks = this.state.tasks.map(task =>
            <Task key={task.id} id={task.id} text={task.text} complete={task.complete} />
        );
        const completed = this.state.tasks.reduce((sum, task) => sum + task.complete, 0); 
        return (
            <div className="taskList">
                {tasks}
                Completed {completed} out of {this.state.tasks.length} tasks
            </div>
        );
    }
}
```
