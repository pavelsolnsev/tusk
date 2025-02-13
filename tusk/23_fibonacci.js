//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 23) Напишите функцию, которая будет генерировать последовательность Фиббоначи длинны n, которую передали как аргумент.




// console.log(fibonacci(3));
// console.log(fibonacci(2));
// console.log(fibonacci(1));
// console.log(fibonacci(4));
// console.log(fibonacci(3));
// console.log(fibonacci(2));
// console.log(fibonacci(2));
// console.log(fibonacci(8));
// console.log(fibonacci(10));
// console.log(fibonacci(12));



































// const fibonacci = (function () {
//   const seq = [1, 1];
//   return function (n) {
//     if(n < 2) {
//       return seq.slice(0, n)
//     }
//     while (seq.length < n) {
//       const last = seq[seq.length - 1];
//       const prev = seq[seq.length - 2];
//       seq.push(last + prev);
//     }
//     return seq.slice(0, n);
//   };
// })();








// [1 .. ..]

// function fibonacci(n) {
//   const seq = [1, 1]
// 	if(n < 2) {
// 		return seq.slice(0, n)
// 	}

// 	while(seq.length < n) {
// 		const last = seq[seq.length - 1]
// 		const prev = seq[seq.length - 2]
// 		seq.push(last + prev)
// 	}
// 	return seq
// }

// const fibonacci = (function () {
//   const seq = [1, 1];
//   return function (n) {
//     if(n < 2) {
//       return seq.slice(0, n)
//     }
//     while (seq.length < n) {
//       const last = seq[seq.length - 1];
//       const prev = seq[seq.length - 2];
//       seq.push(last + prev);
//     }
//     return [...seq];
//   };
// })();

// // Вызов функции для генерации чисел Фибоначчи и вывод результата в консоль
