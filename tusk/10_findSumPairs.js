//// https://www.youtube.com/watch?v=498UIks8UOk
//// 10) Зачада
//// написать функцию, которая принимает два аргумента: массив из уникальных целых чисел и сумму в виде целого числа. Если сумма двух любых чисел массива из аргумента равна числу, которое приходит вторым аргументом, функция должна вернуть новый массив из этих двух чисел в любом порядке. Если решение нет, вернуть пустой массив пример [-1, 11] или [11, -1] - так как -1 + 11 = 10
// если в функции выполнился return тогда он обрывает функцию и она останавливается 
// доплни функцианл чтобы показывал все числа с суммой в 10
// реши двумя способами

// const myNumbers = [4, 5, 4, 1, 5, 8, 11, 1, -1, 6];
// // const myNumbers = [7, 3];
// const sum = 10;



//  console.log(findSumPairs(myNumbers, sum)) 














//  function findSumPairs(array, number) {
// 	const res = []
// 	const set = [...new Set(array)]

// 	for(let i = 0; i < set.length; i++) {
// 		const el = set[i]
// 		const target = number - el
// 		if(set.includes(target)) {
// 			res.push([target, el])
// 			set.splice(i, 1);
//       set.splice(set.indexOf(target), 1);
//       i--;
// 		}
// 	}
// 	return res
// }



// function findSumPairs(array, targetSum) {
// 	for(let i = 0; i < array.length; i++) {
// 		for(let j = i + 1; j < array.length; j++) {
// 			if(array[i] + array[j] === targetSum) {
// 				return [array[i], array[j]]
// 			}
// 		}
// 	}
// 	return []
// }

// function findSumPairs(numbers, targetSum) {
//   const numObj = {};

//   for (let num of numbers) {
//     const potentialMatch = targetSum - num;
//     if (numObj[potentialMatch]) {
//       return [num, potentialMatch];
//     }
//     numObj[num] = num
//   }
//   return [];
// }

// const myNumbers = [3, 2, 6, 8, 11, 1, -1, 6];
// const sum = 10;

// function findSumPairs(numbers, targetSum) {
// const obj = {}
// 	numbers.forEach(num => {
// 		const currentNum = targetSum - num
// 		console.log(currentNum)
// 		if(obj[currentNum]) {
// 			return [num, currentNum]
// 		}
// 		obj[num] = num
// 	})
	
// 	return []
// }



// const findSumPairs = (numbers, targetSum) => {
// 	for(let i = 0; i < numbers.length; i++) {
// 		const numFirst = numbers[i];
// 		console.log('numFirst', numFirst)

// 		for(let j = i + 1; j < numbers.length; j++) {
// 			const numSecond = numbers[j];
// 			console.log('numSecond', numSecond)
//       if(numFirst + numSecond === targetSum) {
//         return [numFirst, numSecond];
//       }
// 		}
// 	}
// 	return [];
// }
// const result = findSumPairs(myNumbers, sum);
// console.log(result);