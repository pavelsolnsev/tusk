// // 6) Зачада
// // нужно создать функцию которая на вход будет принимать строку, а на выходе это строка будет трансформироваться в набор дубликатов своих символов, причём количество повторений определённого символа зависит от порядкового номера в строке и должны быть разделены между собой тире, также первая буква символа будет заглавной а все остальные маленькие
// // можно использовать функцию repeat()
// // используем три способа map for reduce





// console.log(accum("abcd"));












































// function accum(string) {
//   return string.split("").reduce((acc, el, ind) => {
//     return (acc += (ind > 0 ? "-" : "") + el.toUpperCase() + el.repeat(ind));
//   }, "");
// }

// function accum(string) {
// 	return string = string.split('').map((el, i) => el.toUpperCase() + el.repeat(i)).join('-')
//  }

//  function accum(string) {
// 	 console.log(string.repeat(1));
// 	let arr = string.toUpperCase().split('');
// 	let repeatArr = arr.map(function(el, i) {
// 		return el += el.repeat(i).toLowerCase();
// 	})
// 	let resString = repeatArr.join('-');
// 	return resString
//  }
//  function accum(string) {
//   let result = string.toUpperCase().charAt(0);
//   for (let i = 1; i < string.length; i++) {
//     result += "-" + string.charAt(i).toUpperCase() + string.charAt(i).toLowerCase().repeat(i);
//   }
//   return result;
// }
// const accum = (string) => string.toUpperCase().split('').map(function(el, i) {return el +=  el.repeat(i).toLowerCase()}).join('-');

