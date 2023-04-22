// const lib = require('./GT-Lib');

// let obj = {
//     number: 10,
//     str: 'Hello World',
//     func: function () {
//         console.log('I am a function');
//     },
//     obj: {
//         inner_number: 20,
//         inner_str: 'Inner string',
//         func2: function (x, y) {
//             return x + y;
//         },
//         func3: function (x, y) {
//             return [x, y];
//         }
//     },
//     arr: [
//         {
//             hi: 123,
//             z: {
//                 s: 321
//             }
//         },
//         123,
//         {
//             non: 2,
//             inner_obj: {
//                 inner_inner_obj: {
//                     x: 10,
//                     arr: [
//                         {
//                             x: 10
//                         },
//                         {
//                             y: 10,
//                             arr: [],
//                             obj: {
//                                 obj: {
//                                     obj: {
//                                         class: new Object()
//                                     }
//                                 }
//                             }
//                         }
//                     ]
//                 }
//             }
//         }
//     ]
// }

// // let x = JSON.stringify(obj, null, 2);
// // console.log(x)
// let resp = lib.stringify(obj);
// console.log({ resp });

// let resp2 = lib.parse(resp);
// // console.log({ resp2 })


// function Object() {
//     this.x = 10;
//     this.y = 20;
//     this.in = {
//         x: 10
//     }
// }