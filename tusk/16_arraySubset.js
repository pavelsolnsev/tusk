//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 16) Напиши функцию, которая проверяет, является ли второй массив подмножеством первого. То есть есть ли элементы второго массива в первом. вернуть булен

// Метод splice() в JavaScript изменяет содержимое массива, добавляя, удаляя или заменяя элементы. Этот метод напрямую модифицирует исходный массив и возвращает массив удалённых элементов.

// Метод .every() в JavaScript проверяет, удовлетворяют ли все элементы массива условию, заданному в переданной функции. Он возвращает true, если каждый элемент массива проходит проверку, и false, если хотя бы один элемент не соответствует условию.

// в объекте ключи из цифр автоматически выстраиваются по порядку

// чтобы выйти из цикла и получить return нужно получить true в условие

// решить двумя методами 1) через объект 2) создать копию



// console.log(arraySubset([2, 1, 3], [1, 1])); // false

// console.log(arraySubset([2, 1, 3], [1, 2, 3])); // true

// console.log(arraySubset([2, 1, 4], [1, 2, 3])); // false

// console.log(arraySubset([1, 1, 1, 3], [1, 3])); // true














// function arraySubset(source, subset) {

// 	if(source.length < subset.length) {
// 		return false;
// 	}

// 	for(let i = 0; i < subset.length; i++) {
// 		const index = source.indexOf(subset[i])
// 		if(index === -1) {
// 			return false
// 		}
// 		delete source[index]
//   }
// 	return true
// }


// function arraySubset(source, subset) {
// 	let sourceCopy = [...source];

// 	for (let i = 0; i < subset.length; i++) {
// 			let index = sourceCopy.indexOf(subset[i]);
// 			if (index === -1) {
// 					return false;
// 			}
// 			sourceCopy.splice(index, 1);
// 	}

// 	return true;
// }



// function arraySubset(source, subset) {
// 	const sourceObj = {}
// 	const subsetObj = {}
	
// 	for(let key of source) {
// 		sourceObj[key] = (sourceObj[key] || 0) + 1
// 	}

// 	for(let key of subset) {
// 		subsetObj[key] = (subsetObj[key] || 0) + 1
// 	}


// 	for(let key in subsetObj) {
// 		if(!sourceObj[key] || sourceObj[key] < subsetObj[key]) {
// 			return false
// 		}
// 	}

// 	return true

// }
