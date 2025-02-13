//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 24) Напишите функцию, которая складывает 2 числа. Работать функция должна как показано в примере ниже:
// пометка - пустые вызовы несут в себе false ответ в аргументах
// пометка - все вызовы () - это каждый вызов предыдущего вызова 





// console.log(add(20)()()(22));
// console.log(add(20, 22));
// console.log(add(20)()()()()()()()()()()()(22));
// console.log(add()()(20)()(22));
// console.log(add()()()()(20)(22));
// console.log(add()(20)()(22));
// console.log(add()()()()()(20)()()()(22));


























// function add(a, b) {

//   if (!a) {
//     return add;
//   }

//   if (!b) {
//     return function calc(c) {
//       if (!c) return calc;
//       return a + c;
//     }
//   }

//   return a + b;
// }

// console.log(add(20)(22));
// console.log(add(20, 22));
// console.log(add(20)()()()(22));
// console.log(add(20)()()()()()()()()()()()(22));
// console.log(add()(20)(22));
// console.log(add()()()()(20)(22));
// console.log(add()(20)()(22));
// console.log(add()()()()()(20)()()()(22));