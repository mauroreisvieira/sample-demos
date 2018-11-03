## Array.prototype.filter()

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

```js
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6);
    console.log(result); //["exuberant", "destruction", "present"]
```
