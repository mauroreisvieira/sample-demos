## Class declarations

One way to define a class is using a class declaration.

To declare a class, you use the class keyword with the name of the `class`.

```js
    class Rectangle {
        constructor(width, height, color) {
            this.__width = width;
            this.__height = height;
            this.__color = color;
        }

        get area () {
            return this.__width + this.__height
        }

        get color () {
            return this.__color;
        }

        set color (color) {
            this.__color = color;
        }
    }

    const rect = new Rectangle(10, 20, 'red')
    console.log('Area:', rect.area);
    console.log('Initial Color', rect.color);
    rect.color = 'blue';
    console.log('New Color:', rect.color);
```
