## JavaScript Array sort()
The `sort()` method sorts the elements of an array in place and returns the array.
Javascript sort algorithm on V8 is now stable. The default sort order is according to string Unicode code points.

```javascript
    var numbers = [4, 2, 5, 1, 3];
    numbers.sort(function(a, b) {
      return a - b;
    });
    console.log(numbers); // [1, 2, 3, 4, 5]
```

Objects can be sorted given the value of one of their properties.
```javascript
    const cats = [
        { name: 'Choco',   rating: 12 },
        { name: 'Devlin',  rating: 13 },
        { name: 'Eagle',   rating: 13 },
        { name: 'Jenny',   rating: 13 },
        { name: 'Kona',    rating: 13 },
        { name: 'Leila',   rating: 13 },
        { name: 'Milly',   rating: 14 },
        { name: 'Molly',   rating: 12 },
        { name: 'Nova',    rating: 12 },
        { name: 'Oliver',  rating: 13 },
        { name: 'Patches', rating: 14 },
    ];

    cats.sort((a, b) => b.rating - a.rating);
    console.log(cats);
```
