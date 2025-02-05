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
- arrays
- crypt
- universal

## Documentation

### Dates

**dayDiff(Date, Date)** - get the number of days between the dates

**dayInYear(Date)** - get the number of this day in the year

### Numbers

**average(...numbers)** - calculate average

**randomNumber = (min: number, max:number): number** - generates a random number between the specified min and max values, inclusive

### Strings

**generateRandomString(length: number)** - generate a random string

**isString(value: any)** - check if the value is a string

**isEmptyString(value: any)** - check if the value is empty string; throw Error if value is not a string

### Arrays

**isStringArray(arr: unknown[]): arr is string[]** -  check if an array is a string array

**isNumberArray(arr: unknown[]): arr is number[]** - check if an array is a number array

**getRandomIndex &lt;T&gt;(arr: T[]): number**  - return the random index of the array

**numberToArray(num: number): number[]** - convert a single number into an array of its digits

**arrayOfNumbersToNumber(arr: number[]): number** - concatenate a number array into a single number

#### For large arrays, avoid: "Uncaught RangeError: Maximum call stack size exceeded."

**maxNumberArray** - get the largest number in the array

**minNumberArray** - get the smallest number in the array

### Crypt

**getSaltAndHash(password, saltSize?: 16, options?: {})** - return an object with a hash and salt

options:

```json
{
  algorithm?: THashAlgorithm,
  iterations?: number, 
  keyLen?: number, 
  saltSize?: number,
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

### puppeteer

**getScreenshot = async (page: Page, viewport: TViewPort, path: string)** - get a screenshot of a web page

## License

Copyright © 2024 [Volodymyr Nerovnia](https://github.com/nerovnia); Released under the [MIT](./LICENSE) license.
