## Array.prototype.flatMap()

The `flatMap()` method first maps each element using a mapping function, then flattens the result into a new array.

It is identical to a map followed by a flat of depth 1, but flatMap is often quite useful, as merging both into one method is slightly more efficient.

```js
    const pairs = [
        [2, 6],
        [8, 2],
        [5, 9]
    ];

    let result = [];

    result = pairs.map((pair) => {
        return [
        pair[0] + pair[1]
        ];
    })
    console.log(result); // [Array(1), Array(1), Array(1)]

    result = pairs.flatMap((pair, index) => {
        return [
        pair[0] + pair[1]
        ];
    })
    console.log(result); // [8, 10, 14]
```
