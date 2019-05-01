# Why do we need callback props?

```js
function Task(props) {
    return (
        <div
            className="task"
            onClick={() => {
                // How do I call completeTask in <TaskList />?
            }}>
            {props.text}
        </div>
    );
}
```
