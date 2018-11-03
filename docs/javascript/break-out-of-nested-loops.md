## Breaking nested loops in JavaScript

Will break from all the nested loops and the parent and stop searching through the array unnecessarily.

```js
    const width = 3;
    const height = 4;

    for (let x = 1; x <= width; x++) {
        for (let y = 1; y <= height; y++) {
            if (x === 2 && y === 3) {
                break;
            }
            console.log(x + ', ' + y);
        }
    }

    outerLoop:
    for (let x = 1; x <= width; x++) {
        for (let y = 1; y <= height; y++) {
            if (x === 2 && y === 3) {
                break outerLoop;
            }
            console.warn(x + ', ' + y);
        }
    }
```

