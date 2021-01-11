# Event Listener Examples

Contains an event name and an event handler. When the event fires, the event handler is executed. 
* Event Name - event the listener is "listening" for
* Event Handler - function that is executed in response to an event occurring.

```
const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event);
});
```

OR 
```
firstBtn.addEventListener("click", buttonClickHandler);
```