## Array.prototype.reduce()

The `reduce()` method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

```js
    const result = [1, 2, 3, 4].reduce((sum ,i) => sum + i);
    console.log(result); // 10
```
