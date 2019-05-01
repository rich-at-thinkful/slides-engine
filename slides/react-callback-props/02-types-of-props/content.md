# Anything can be a prop!

```
<Task
    text="Learn React" // A string
    complete={true} // A boolean
    subtasks={[ // An array
        "Sign up for Thinkful",
        "Attend workshops",
        "Complete pairings"
    ]}
    helpers={{ // An object
        instructors: true,
        tas: true,
        netflix: false
    }}
    whenComplete={() => console.log('Celebrate')} // A function?!?!?
/>
```
