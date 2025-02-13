//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 13)  преобразовать вложенный массив в одномерный массив
// Array.isArray(el) - проверка на массив


// console.log(flatten([[1], [[2, 3]], [[[4]]]]));
// console.log(flatten([[1], [[2, 3]]]));
// console.log(flatten([[[2, 3]]]));







// 1,



























// function flatten(array) {
//   const res = [];
//   for(let i = 0; i < array.length; i++) {
// 		const flat = flatten(array[i])
//     if(Array.isArray(array[i])) {
//         for (let j = 0; j < flat.length; j++) {
//           res.push(flat[j])
//         }
//     } else {
//       res.push(array[i])
//     }
//   }
//   return res;
// }

// function flatten(array) {
// 	console.log('array', array)
// 	return array.reduce((acc, value) => {
// 			if (Array.isArray(value)) {
// 					const flat = flatten(value);
// 					flat.forEach(item => acc.push(item));
// 			} else {
// 					acc.push(value);
// 			}
// 			return acc;
// 	}, []);
// }

// function flatten(array) {
// 	return array.reduce((acc, value) => {
// 			return acc.concat(Array.isArray(value) ? flatten(value) : value);
// 	}, []);
// }
// console.log(flatten([[1], [[2, 3]], [[[[4]]]]]));

// function flatten(array) {
//   const res = [];
//   for(let i = 0; i < array.length; i++) {
//     if(Array.isArray(array[i])) {
//         const flat = flatten(array[i])
//         for (let j = 0; j < flat.length; j++) {
//           res.push(flat[j])
//         }
//     } else {
//       res.push(array[i])
//     }
//   }
//   return res;
// }
