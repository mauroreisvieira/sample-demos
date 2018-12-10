## Set

The `Set` object lets you store unique values of any type, whether primitive values or object references.\
Set objects are collections of values. You can iterate through the elements of a set in insertion order.\
A value in the Set may only occur once; it is unique in the Set's collection.

```js
    const duplicates = [1, 2, 3, 4, 1, 3, 4, 5];
    const uniques = Array.from(new Set(duplicates));
    console.log(uniques); //[1, 2, 3, 4, 5]
```
```js
    const duplicates = [1, 2, 3, 4, 1, 3, 4, 5];
    const uniques = Array.from(new Set(duplicates));
    console.log(uniques); //[1, 2, 3, 4, 5]
```

```js
    const mySet = new Set();
    const o = {a: 1, b: 2};

    mySet.add(1); // Set [ 1 ]
    mySet.add(5); // Set [ 1, 5 ]
    mySet.add(5); // Set [ 1, 5 ]
    mySet.add('some text'); // Set [ 1, 5, 'some text' ]
    mySet.add(o);

    mySet.add({a: 1, b: 2}); // o is referencing a different object so this is okay

    mySet.has(1); // true
    mySet.has(3); // false, 3 has not been added to the set
    mySet.has(5);              // true
    mySet.has(Math.sqrt(25));  // true
    mySet.has('Some Text'.toLowerCase()); // true
    mySet.has(o); // true

    mySet.size; // 5

    mySet.delete(5); // removes 5 from the set
    mySet.has(5);    // false, 5 has been removed

    mySet.size; // 4, we just removed one value
    console.log(mySet); // Set [ 1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2} ]
```
