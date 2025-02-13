//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 14) Напиши функцию, которая принимает массив строк и возвращает самую частовстречающейся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право (вернуть строчку)
// используем через объект
// продумываем в задаче через чего мы можем реализовывать задачу = будь то массив или объект
// let array = ['a', 'b']     =>      array[0] = 'f'     =>      array = ['f', 'b']
// решить 2 способами 1) for()  2) reduce и тернарный оператор



// console.log(highestFrequency(["a", "b", "ccc", "ccc", "ccc", "e", "f", "f", "f", "f"]));
























// function highestFrequency(array) {
// 	const map = array.reduce((acc, value) => {
// 		acc[value] = (acc[value] || 0) + 1
// 		return acc
// 	}, {})
// 	let maxFrequency = 0
// 	let maxFrequencyStr = array[0]

// 	for(const key in map) {
// 		if(map[key] > maxFrequency) {
// 			maxFrequency = map[key]
// 			maxFrequencyStr = key
// 		}
// 	}
// 	return maxFrequencyStr
// }

// console.log(highestFrequency(['a', 'b', 'ccc', 'ccc', 'e', 'f']))
// function highestFrequency(array) {

// 	const map  = {}
// 	let maxFrequency = 0;
// 	let maxFrequencyStr = array[0];

// 	for(let i = 0; i < array.length; i++) {
// 		const current = array[i]

// 		if(map[current]) {
//       map[current]++
//     } else {
//       map[current] = 1
//     }

//     if(map[current] > maxFrequency) {
//       maxFrequency = map[current]
//       maxFrequencyStr = current
//     }
// 	}
// 	return maxFrequencyStr;
// }
// function highestFrequency(array) {
//   const frequencyMap = array.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
//   }, {});
//   let maxFrequency = 0;
//   let maxFrequencyStr = array[0];

//   for (const key in frequencyMap) {
//     if (frequencyMap[key] > maxFrequency) {
//       maxFrequency = frequencyMap[key];
//       maxFrequencyStr = key;
//     }
//   }

//   return maxFrequencyStr;
// }

// console.log(highestFrequency(['a', 'b', 'ccc', 'ccc', 'e', 'f']))
