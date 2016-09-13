# compare-week [![Build Status](https://travis-ci.org/kevva/compare-week.svg?branch=master)](https://travis-ci.org/kevva/compare-week)

> Check if two dates are within the same week


## Install

```
$ npm install --save compare-week
```


## Usage

```js
const compareWeek = require('compare-week');

compareWeek(new Date(), new Date());
//=> true

compareWeek(new Date(), new Date(new Date() - (1000 * 60 * 60 * 24 * 7)));
//=> false
```


## API

### compareWeek(a, b)

#### a, b

Type: `number` `Date`

Accepts a Unix timestamp or a `Date` object.


## License

MIT © [Kevin Martensson](https://github.com/kevva)
