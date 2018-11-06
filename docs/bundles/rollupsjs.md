## Rollup
Is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.

It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES6 modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries.

This will eventually be possible natively, but **Rollup** lets you do it today.

## Quick start
Install with `npm install --global rollup`

```js
    rollup main.js --file bundle.js --format cjs
```

## Configuration Files
Rollup configuration files are optional, but they are powerful and convenient and thus **recommended**.

A config file is an ES6 module that exports a default object with the desired options. Typically, it is called `rollup.config.js` and sits in the root directory of your project.
```js
    module.exports = {
        input: 'src/main.js',
        output: {
            file: 'bundle.js',
            format: 'cjs'
        }
    };
```
