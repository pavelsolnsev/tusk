//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 17) Напиши функцию, которая проверяет, являются ли все элементы в массиве анаграммами


















// console.log(allAnagrams(["abcd", "bdac", "bdca"]));
// console.log(allAnagrams(["abcd", "bdag"]));
































// function allAnagrams(array) {
// 	const sorted = array.map(el => el.split('').sort().join(''))
// 	for (let i = 1; i < sorted.length; i++) {
// 		if(sorted[i] !== sorted[0]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
