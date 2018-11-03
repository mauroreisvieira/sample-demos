## Destructuring assignment

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js
    function logUser({email, name = 'anonymous', age}) {
        console.log(name, age)
    }

    logUser({name: 'Doe', age: 20});
    logUser({age: 40});

    const coords = [230, 500];
    const [x = 0, y = 0] = coords;

    console.log(x);
    console.log(y);
```
