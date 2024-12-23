![GitHub License](https://img.shields.io/github/license/rightsoftend/unilib)
![NPM Version](https://img.shields.io/npm/v/@nerv_uk/unilib)

# @nerv_uk/unilib

## Installation

```
npm install @nervuk/unilib
```

## Usage

```
const { isString } = require "@nerv_uk/unilib/dist/strings";
import { isString } from '@nerv_uk/unilib/dist/strings';
```
### Modules

- dates
- numbers
- strings
- universal

## Documentation

### Dates

**dayDiff** - get the number of days between the dates

**dayInYear** - get the number of this day in the year

### Numbers

**average** - calculate average

### Strings

**generateRandomString** - generate a random string

**isString** - check if the value is a string

### Crypt

**hashPassword_sha512** - use an algorithm sha512 and get an object with a hash and salt:

```json
{
  salt: '87678eb28f0fbf0983fc852f58d01ec1',
  hash: '29a12437606a2badd198052c09f3ac8c081aa5b35eaacf9c18d029b012d237b8d7ec7fa4eca6a1fa1528fb70937bc93676bc3a617e013bd25e52025b3b2b1f1e'
}
```

### Universal

**uniqueArray** - get an array of unique elements

## License

Copyright © 2024 [Volodymyr Nerovnia](https://github.com/nerovnia); Released under the [MIT](./LICENSE) license.
