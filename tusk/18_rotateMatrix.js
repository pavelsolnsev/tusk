//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 18) Напиши функцию, которая принимает  матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.
/// напишите ещё 2 функции которые переворачивают на 180 и 270

// 0.0 0.1 0.2			 0.2 1.2 2.2
// 1.0 1.1 1.2  ==>  0.1 1.1 2.1
// 2.0 2.1 2.2			 0.0 1.0 2.0

// 1 2 3			 7 4 1
// 4 5 6  ==>  8 5 2
// 7 8 9       9 6 3


// const matrix = [
// 			[1, 2 ,3], 
// 			[4, 5, 6], 
// 			[7, 8, 9]
// ]



// console.log(rotateMatrix(matrix))
// print(rotateMatrix(matrix))
// console.log('--------')
// print(rotateMatrix180(matrix))
// console.log('--------')
// print(rotateMatrix270(matrix))



























// function rotateMatrix(matrix) {
//   const rotated = matrix[0].map((_, index) => matrix.map(row => row[index]).reverse());
//   return rotated;
// }

// function rotateMatrix(source) {
// 	const rotated = source[0].map(_ => [])
// 	for (let i = 0; i < source.length; i++) {
// 		for (let j = 0; j < source[i].length; j++) {
// 			  rotated[j][source.length - 1 - i] = source[i][j]
// 		}
// 	}
// 	return rotated
// }

// function rotateMatrix180(source) {
//   const rotated = rotateMatrix(source)
//   return rotateMatrix(rotated)
// }

// function rotateMatrix270(source) {
//   const rotated = rotateMatrix(source)
//   return rotateMatrix180(rotated)
// }

// function print(array) {
// 	array.forEach(row => console.log(row.join(' ')))
// }

