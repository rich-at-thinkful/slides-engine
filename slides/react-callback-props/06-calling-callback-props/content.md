# Calling a callback prop

```js
function Task(props) {
    return (
        <div
            className="task"
            onClick={() => {
                props.handleClick(props.id)
            }}>
            {props.text}
        </div>
    );
}
```
