# Process Object

* `process` is a global object
* `process.env` is an object representing the environment variables on your operating system
* `process.argv` is an array that includes the arguments provided at the command line

### From command line:
```bash
$ node my-program.js hello goodbye
```

### my-program.js
```javascript
process.argv[2]   // => 'hello'
process.argv[3]   // => 'goodbye'
```
