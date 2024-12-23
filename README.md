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
  hash: 'sha512',
  salt: 'abcdefghijklmnopqrstuvwxy'
}
```

### Universal

**uniqueArray** - get an array of unique elements

## License

Copyright © 2024 [Volodymyr Nerovnia](https://github.com/nerovnia); Released under the [MIT](./LICENSE) license.
