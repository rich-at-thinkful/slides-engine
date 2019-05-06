# The problem of prop drilling

<div class="small">

```js
class Parent extends React.Component {
    state = {name: 'Joe'};
    render() {
        return (
            <Child name={this.state.name}
                   setName={name => this.setState({name})} />
        );
    }
}

function Child(props) {
    return <GrandChild name={props.name} setName={props.setName}/>;
}

function GrandChild(props) {
    return <GreatGrandChild name={props.name} setName={props.setName}/>;
}

function GreatGrandChild(props) {
    return <GreatGreatGrandChild name={props.name} setName={props.setName} />;
}

function GreatGreatGrandChild(props) {
    const {name, setName} = props; // Take values from props
    return (
        <div className="user" onClick={() => setName('Chris')}>
            {name}
        </div>
    );
}
```

</div>
