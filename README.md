# JSLib
A simple library for mundane and bloaty functions
This will be a (hopefully public) library for simple yet bloaty functions that might be useful in projects

First install the library using npm:
```cli
npm i gtlib
```
Set up the library by calling 'gtlib' like the following:
```js
const lib = require('gtlib');
```

Some examples of the functions available:

difference(value1, value2, precision):
```js
let currentPrice = 20, startPrice = 10;
let diff = lib.difference(currentPrice, startPrice);    // returns the difference in percentage
console.log(diff); // => 100

// and for control over how many decimal points you want, you can use the third parameter 'precision'
let currentPrice_2 = 21, startPrice_2 = 5.69; // expected answer 269.06854130052716
let precision = 4;
let diff_2 = lib.difference(currentPrice_2, startPrice_2, precision);
console.log(diff_2); // => 269.0685
```

time(millis?, date?, 24hour?, millis_Precision):
```js
let time_string = lib.time();                           // => 10:45 PM
let time_with_millis = lib.time(true);                  // => 10:45:50.487 PM
let date_time = lib.time(false, true);                  // => 9/25/2022, 10:47 PM
let date_time_with_millis = lib.time(true, true);       // => 9/25/2022, 10:47:36.185 PM
...
let time_24hour_format = lib.time(false, false, true);  // => 22:48
```

checkArrayEquality(array_1, array_2, etc...)
```js
// example 1
let arr_1 = [0, 1, 2, 'hello'];
let arr_2 = [0, 1, 2, 'hello'];
let arr_3 = [0, 1, 'hello', 2];
// they are equal
let isEqual = lib.checkArrayEquality(arr_1, arr_2, arr_3);
console.log(isEqual); // => true

// example 2
let arr_4 = [0, 1, 2, 'hello'];
let arr_5 = [0, 1, 2, 3];
// not equal
let isEqual_2 = lib.checkArrayEquality(arr_4, arr_5);
console.log(isEqual); // => false
```

seperateDigits(number, seperator):
```js
let number_0 = 123456789;
let seperated_number_0 = lib.seperateDigits(number, ','); // => 123,456,789

let number_1 = 1234567890
let seperated_number_1 = lib.seperateDigits(number, ','); // => 1,234,567,890
```


Ever been in need to stringify an object, used the normal 'JSON.stringify()' and had it return only a portion of your initial object and ignoring properties children objects and functions?
stringify(object):
```js
let obj = {
    number: 10,
    str: 'Hello World',
    func: function() {
        console.log('I am a function');
    },
    obj: {
        inner_number: 20,
        inner_str: 'Inner string'
    }
}

let normalStringify = JSON.stringify(obj, null, 2);

// normalStringify response:
// {
//   "number": 10,
//   "str": "Hello World",
//   "obj": {
//     "inner_number": 20,
//     "inner_str": "Inner string"
//   }
// }

// library's stringify: 
// {
//   "number": 10,
//   "str": "Hello World",
//   "func": FUNCTION ("","{
//         console.log('I am a function');
//     "),
//   "obj": {
//     "inner_number": 20,
//     "inner_str": "Inner string"
//   }
// }

// this library's stringify can then be turned back into an object using this library's JSON.parse equivalent 'parse()'
```