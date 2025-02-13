//// https://www.youtube.com/watch?v=498UIks8UOk
//// 9) Зачада
//// Создать функцию, которая сгруппирует студентов по возрасту. На выходе получить объект, где ключ - возраст, а значение - массив студентов
// Движок JS автоматически выстраивает ключи их чисел в порядке возрастания
// Строковые ключи, не являющиеся числовыми, сохраняются в порядке добавления.
// Символьные ключи (если используются Symbols) также сохраняются в порядке добавления.




// const students = [
// 	{name: 'alex', age:20},
// 	{name: 'mike', age:24},
// 	{name: 'masha', age:20},
// 	{name: 'stas', age:18}
// ]


// console.log(getStudent(students));






















// console.log(getStudent(students))
// function getStudent(list) {
// const result = {}
//   list.forEach(student => {
// 		if(!result[student.age]) {
// 			result[student.age] = [student]
// 		} else {
// 			result[student.age].push(student)
// 		}
// 	})
//   return result
// }
// function getStudent(list) {
//   return list.reduce((acc, student) => {
//     if (!acc[student.age]) {
//       acc[student.age] = [student];
//     } else {
//       acc[student.age].push(student);
//     }
//     return acc;
//   }, {});
// }
