# Conditional Rendering

`if` statement
```
// Greeting.js
function Greeting({ language }) {
  if (language === "es") {
    return <h1>Hola!</h1>;
  }
  return <h1>Hello!</h1>;
}
```
Inline (ternary)
```
// Greeting.js
function Greeting({ language }) {
  return <h1>{language === "es" ? "Hola" : "Hello"}!</h1>;
}
```