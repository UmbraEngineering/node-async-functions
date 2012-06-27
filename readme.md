# async-functions

A simple, clean way of calling functions asynchronously

## Install

```bash
$ npm install async-functions
```

## Usage

```javascript
require('async-functions');

var foo = function(a, b) {
	console.log(a + b);
}

foo.async(1, 2);  // Logs "3", but async!

var bar = function(a, b) {
	console.log(this.baz);
	console.log(a + b);
};

var scope = { baz: 'Hello!' };

bar.bind(scope).async(1, 2);  // Logs "Hello!" and then "3"

// Also works in the .apply style
foo.asyncApply([1, 2]);
```

## How does it work?

How do you think..? I modified the `Function` prototype. Yes, I know, I'm going to hell..

## License

None. Public Domain.

