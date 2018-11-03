## Object.defineProperty()

The static method `Object.defineProperty()` defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

```js
    const person = {
        name: 'Jane Doe',
        age: 28,
        occupation: 'Web Developer'
    }

    Object.defineProperty(person, 'born', {
        value: 'Portugal',
        writable: false
    });

    person.born = 'France'
    console.log(person); // {name: "Mauro", age: 28, occupation: "Web Developer", born: "Portugal"}
```
