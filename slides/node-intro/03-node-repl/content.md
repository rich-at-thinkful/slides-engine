# Node REPL

* Read-Eval-Print-Loop 
* Lets you type JavaScript directly in your terminal and see instant output
* Used for very simple experimentation and debugging
* Similar to the web browser DevTools console 
  * But there's no DOM, `window` object or `document` object!!

```bash
$ node
> console.log('hi');
hi
undefined
> Array(16).join('lol?'-1) + " BATMAN!!!";
'NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN BATMAN!!!'
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the repl
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file
```
