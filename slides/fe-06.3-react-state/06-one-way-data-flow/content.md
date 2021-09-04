# One-Way Data Flow (One-Way Binding)

* Changes in props or state cascade downward
* State is the single source of truth
* If state variable is referenced in the owning component, it re-renders
* If state variable is referenced in a child component (as a prop), the child component re-renders
