// // https://www.youtube.com/watch?v=498UIks8UOk
// // 8) Зачада
// // Создать Массив который содержит только уникальные значения то-есть не должен повторяться
// заметка 
// includes проверяем наличие элемента в массиве => true или false




// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];



// console.log(fruitsUnique(fruits))
























// function fruitsUnique(list) {
// 	// return Array.from(new Set(list))

// return list.reduce((acc, f) => {
// 		if(!acc.includes(f)) {
// 			acc.push(f)
// 		}
// 		return acc 
// 	}, [])

// }

// console.log(fruitsUnique(fruits));

// function fruitsUnique(list) {
//   let result = [];
//   list.forEach(function(f) {
// 		if(!result.includes(f)) {
// 			result.push(f);
// 		}
//   });
//   return result;
// }
// function fruitsUnique(list) {
//   console.log(...new Set(list))
//   return Array.from(new Set(list));
// }
