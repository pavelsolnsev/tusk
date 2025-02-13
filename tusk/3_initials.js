//  // 3) Зачада
//  // нужно создать функцию которая на вход будет принимать имя и возвращать инициалы, причём даже если имя написано с маленькой буквы, инициалы все ровно должны быть большой
//  // charAt() - берёт первый элемент у строки 
//  // slice(start, end)
// start (необязательный) — индекс, с которого начинается извлечение. Если не указан, начнётся с нулевого элемента.
// end (необязательный) — индекс, на котором нужно остановиться (не включая его). Если не указан, извлекаются все элементы до конца массива.






// console.log(toInitials('solnsev Pavel'))























// const toInitials = name => name.split(' ').map(el => el.slice(0, 1).toUpperCase() + '.').join(' ')  



// function toInitials(name) {
// 	let nameArr = name.split(' ');
// 	let firstLetterArr = nameArr.map(function(el) {
// 		return el.slice(0, 1).toUpperCase() + '.';
// 	});
// 	let initials = firstLetterArr.join(' ');
// 	console.log(initials)
// 	return initials;
// }

// console.log(toInitials('solnsev Pavel'))

// const toInitials = name => name.split(' ').map(function(el) {return el.slice(0, 1).toUpperCase() + '.'}).join(' ');
