# ceil.js

Ceils the given value to the specified number of decimal places.

## Install

```sh
npm install ceil
```

## API

### ceil(value)

Returns the smallest integer greater than or equal to `value`.

```js
var ceil = require('ceil');

ceil(.95); // 1
ceil(4); // 4
ceil(7.004); // 8
```

### ceil(value, scale)

Returns the smallest integer greater than or equal to `value` to `scale` (+/-) number of decimal places.

```js
var ceil = require('ceil');

ceil(55.51, -1); // 55.6
ceil(51, 1); // 60
ceil(-55.59, -1); // -55.5
ceil(-59, 1); // -50

ceil(12489.9482, 5); //100000
ceil(12489.9482, 4); //20000
ceil(12489.9482, 3); //13000
ceil(12489.9482, 2); //12500
ceil(12489.9482, 1); //12490
ceil(12489.9482, 0); //12490
```