# Event handlers

```js
class ContentToggle extends React.Component {
    render() {
        return <button onClick={e => console.log('Click')}>Click me</button>;
    }
}
```

```js
class ContentToggle extends React.Component {
    // Use methods to move logic out of render
    // Note: Arrow function makes binding of "this" consistent
    handleClick = e => {
        console.log('Click');
    };

    render() {
        return <button onClick={this.handleClick}>Click me</button>;
    }
}
```
