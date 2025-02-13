// // 5) Зачада
// // нужно создать функцию поиска минимального и максимального значений в массиве, возвращать она должна 2 этих элемента и даже если в массиве только одно значение итоговой результат должен содержать 2




// console.log(minMax([3, 2, 7, 4, 5]));
// console.log(minMax([5]));


































// function minMax(arr) {
// 	return [Math.min(...arr), Math.max(...arr)];
// }

//  console.log(minMax([7, 2, 3, 4, 5]));

//  function minMax(arr) {
// 	let res = [];
// 	let minValue = Math.min.apply(null, arr);
// 	let maxValue = Math.max.apply(null, arr);
// 	console.log('minValue', minValue);
// 	console.log('maxValue', maxValue);
// 	res.push(minValue);
//   res.push(maxValue);
//   return res;
//  }

// function minMax(arr) {
// 	let min = arr[0];
// 	let max = arr[0];
// 	for (let i = 1; i < arr.length; i++) {
// 			if (arr[i] < min) {
// 					min = arr[i];
// 			}
// 			if (arr[i] > max) {
// 					max = arr[i];
// 			}
// 	}

// 	return [min, max];
// }

// const minMax = arr => [Math.min(...arr), Math.max(...arr)]

// function minMax(arr) {
// 	console.log(Math.min.apply(null, arr))
// 	return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
// }
