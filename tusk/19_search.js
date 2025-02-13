//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 19) Напиши функцию, которая принимает  отсортированный массив с числами и число. Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть -1
//// работаем с index
//// используем бинарный поиск
//// учитывай что это цикл выполняется по кругу пока не вернём true и start будет с каждом обходом обновляться
//// нужно постоянно делить массив на пополам и искать искомый элемент




// console.log(search([1, 3, 6, 7, 8, 9, 10, 11, 13, 17], 13));
// console.log(search([1, 3, 6, 13, 17], 18));
// console.log(search([1, 3, 6, 13, 17], 12));
// console.log(search([], 12));































// function search(array, target) {
//   let start = 0;
//   let end = array.length - 1;

//   while (start <= end) {
//     if (array.length === 0) {
//       return -1;
//     }

//     const middle = Math.floor((start + end) / 2);

//     if (array[middle] === target) {
//       return middle;
//     }

//     if (array[middle] < target) {
//       start = middle + 1;
//     }

//     if (array[middle] > target) {
//       end = middle - 1;
//     }
//   }

//   return -1;
// }
























// Линейный поиск
// function search(array, target) {
// 	for ( let i = 0; i < array.length; i++) {
// 		if(array[i] === target) {
// 			return i;
// 		}
// 	}
// 	return -1;
// }

// бинарный поиск

// function search(array, target) {
//   let start = 0;
//   let end = array.length - 1;

//   while (start <= end) {
//     const middle = Math.floor((start + end) / 2);

//     if (array[middle] === target) {
//       return middle;
//     }

//     if (array[middle] > target) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }

//   return -1;
// }

// console.log(search([1, 3, 6, 13, 17], 13));
// console.log(search([1, 3, 6, 13, 17], 12));

// function search(array, target) {
//   let start = 0;
//   let end = array.length - 1;
//   if (target < array[start] || target > array[end]) {
//     return -1;
//   }

//   while (true) {

//     if (target === array[start]) {

//       return start;
//     }

//     if (target === array[end]) {

//       return end;
//     }

//     if (end - start <= 1) {

//       return -1;
//     }

//     const middle = Math.floor(start + end) / 2;

//     if (target > array[middle]) {

//       start = middle + 1;
//     } else if (target < array[middle]) {

//       end = middle - 1;
//     } else {

//       return middle;
//     }
//   }
// }
