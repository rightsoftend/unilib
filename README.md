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
- crypt
- universal

## Documentation

### Dates

**dayDiff(Date, Date)** - get the number of days between the dates

**dayInYear(Date)** - get the number of this day in the year

### Numbers

**average(...numbers)** - calculate average

### Strings

**generateRandomString(length: number)** - generate a random string

**isString(value: any)** - check if the value is a string

**isEmptyString(value: any)** - check if the value is empty string; throw Error if value is not a string

### Crypt

**getSaltAndHash(password, saltSize?: 16, options?: {})** - return an object with a hash and salt

options:

```json
{
  iterations?: number, 
  keyLen?: number, 
  algorithm?: THashAlgorithm,
}
```

algorithm:

- 'sha1'
- 'sha224'
- 'sha256'
- 'sha384'
- ...

Result:

```
{
  salt: '87678e...',
  hash: '29a12437606a2badd1...'
}
```

**isHashBelongPassword(password, salt, testHash, options)** - test if password's jash and testHash are equal 

### Universal

**uniqueArray([]: any)** - get an array of unique elements

## License

Copyright © 2024 [Volodymyr Nerovnia](https://github.com/nerovnia); Released under the [MIT](./LICENSE) license.
