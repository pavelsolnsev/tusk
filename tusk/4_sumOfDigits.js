// // 4) Зачада
// // нужно создать функцию которая на вход будет принимать число а на выходе возвращать сумму всех цифр которая входит в состав числа
// нужно принимать как положительные числа так и отрицательные числа
// Math.abs - обработать отрицательные числа




// console.log(sumOfDigits(1234))
// console.log(sumOfDigits(-123))





















// function sumOfDigits(number) {
// 	let array = number.toString().split('')
// 	const result = array.reduce((acc, el) => {
// 		return acc + +el
// 	}, 0)
// 	return result
// }

// const sumOfDigits = number => number.toString().split('').reduce((acc, el) => acc + +el, 0) 

//  function sumOfDigits(number) {
// 	let moduleNumber = Math.abs(number);
// 	let str = moduleNumber.toString();
// 	let arr  = str.split('');
// 	let res = arr.reduce(function(sum, cur, i, arr){
// 		console.log('arr', arr)
// 		return +sum + +cur;
// 	}, 0);
// 	return res;
//  }

//  const sumOfDigits = number()

//  const sumOfDigits = number => number.toString().split('').reduce((acc, digit) => +acc + +digit, 0)

