// заметка
// решить тремя способами 1) через reduce 2) reduce + тернарный оператор 3) через Object.fromEntries new Set
// Object.fromEntries - преобразовывает массив в объект
// Object.fromEntries([[1, 'a'],[2, 'b']]) => {1: 'a', 2: 'b'}
// // https://www.youtube.com/watch?v=498UIks8UOk
// // 7) Зачада
// // Сколько раз каждый элемент встречается в массиве ? на выходе должен получится объект {kiwi: 3, apple: 2}

// const fruits = ['kiwi', 'apple', 'banan', 'kiwi']




// console.log(fruitCount(fruits));


































// const fruitCount = Object.fromEntries(Array.from(new Set(fruits)).map(fruit => [fruit, fruits.filter(f => f === fruit).length]))

// function countFruits(list) {
// 	return list.reduce((acc, current) => {
// 	acc[current] = (acc[current] || 0) + 1
// 	return acc
// 	}, {})
// }

// console.log(countFruits(fruits))
// const fruitCount = Object.fromEntries(Array.from(new Set(fruits)).map(fruit => [fruit, fruits.filter(f => fruit === f).length]))
// console.log(fruitCount);

// function countFruits(list) {
// 	let result = {};
// 	list.forEach(f => {
// 		if(!result[f]) {
//       result[f] = 1;
//     } else {
//       result[f] ++;
//     }
// 	})
// 	return result;
// }
// function countFruits(list) {
//   return list.reduce((acc, fruit) => {
// 		console.log(`acc[fruit]`, acc[fruit])
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
//   }, {});
// }
