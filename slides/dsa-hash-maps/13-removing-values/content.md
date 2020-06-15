# Removing values

## Separate chaining

* Find the key in the linked list
* Remove the item from the linked list

## Open adressing

* Set a flag which says that the key has been removed
* Don't copy the value on resize
* Or, remove the value, and rearrange

```js
{
    key: 'gregg',
    value: 'drums',
    deleted: true
}
```
