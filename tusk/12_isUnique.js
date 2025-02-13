
//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 12) Зачада
//// Напишите функцию, которая определяет уникальны ли все символы в строке . Регистр должен учитываться: а и А разные символы (вернуть false или true)
// решить тремя способами 1) ...new Set 2) size  3) lastIndexOf



// console.log(isUnique("abcA"));
// console.log(isUnique("abcadef"));
























// function isUnique(string) {
//   for (let i = 0; i < string.length; i++) {
//     if (string.lastIndexOf(a) !== 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function isUnique(string) {
// 	return new Set(string).size === string.length;
// }

// console.log(isUnique("abcA"));
// console.log(isUnique("abcadef"));