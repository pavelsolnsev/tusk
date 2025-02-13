//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 22) Напишите функцию, которая будет проверять на “глубокое” равенство 2 входящих параметра
// КОгда мы ищем свойство объекта через a[key] = кей это как переменная и в ней что-то есть
// КОгда мы ищем свойство объекта через a.key = мы ищем сам key












































// 	// Добавляем текущие объекты в seen, чтобы отследить циклы
//   seen.add(a);
//   seen.add(b);

// 	console.log('seen', seen)
// 	console.log('seen.has(a)', seen.has(a))
// 	console.log('seen.has(b)', seen.has(b))
// 	console.log('a', a)

// 	if(Array.isArray(a) !== Array.isArray(b)) {
// 		return false
// 	}

//   if (Array.isArray(a) && Array.isArray(b)) {
//     if (a.length !== b.length) {
//       return false;
//     }

//     for (let i = 0; i < a.length; i++) {
//       if (!deepEqual(a[i], b[i], seen)) {
//         return false;
//       }
//     }
//   }

//   if (Object.keys(a).length !== Object.keys(b).length) {
//     return false;
//   }

//   for (key of Object.keys(a)) {
//     if (!deepEqual(a[key], b[key], seen)) {
//       return false;
//     }
//   }

//   return true;
// };

// Примеры использования


// function deepEqual(a, b, seen = new Set()) {

// 	if(Number.isNaN(a) && Number.isNaN(b)) {
// 		return true
// 	}
	
// 	if(typeof a !== 'object' || a === null || b === null ) {
// 		return a === b
// 	}

// 	if(typeof a !== typeof b) {
// 		return 
// 	}

// 	if(Object.keys(a).length !==  Object.keys(b).length) {
// 		return false
// 	}

// 	if(seen.has(a) || seen.has(b)) {
// 		console.log('Циклическая ссылка обнаружена');
//     return true;
// 	}

// 	seen.add(a)
// 	seen.add(b)
	
// 	for(const key of Object.keys(a)) {
// 		if(!deepEqual(a[key], b[key], seen)) {
// 			return false
// 		}
// 	}

// 	if(Array.isArray(a) || Array.isArray(b)) {
// 		if(a.length !== b.length) {
// 			return false
// 		}

// 		for(let i = 0; i < a.length; i++) {
// 			if(!deepEqual(a[i], b[i], seen)) {
// 				return false
// 			}
// 		}
// 	}

// 	return true
// }




// const source = { a: 1, b: { c: 1 } };
// const secondObj = { a: 1, b: { c: 2 } };


// const firstObj = { a: 1, b: { c: 1 } };
// const thirdObj = { a: 1, b: { c: 2 }, d: 4 };
// const arrayObj = { 0: 1, 1: 2, 2: 3 };

// console.log("========== Объекты");
// console.log(deepEqual(source, firstObj)); // -> true
// console.log(deepEqual(source, secondObj)); // -> false
// console.log(deepEqual(source, thirdObj)); // -> false
// console.log(deepEqual({ a: undefined }, { a: undefined })); // -> true

// console.log("========== Примитивы");

// console.log(deepEqual(NaN, NaN)); // -> true
// console.log(deepEqual(13, NaN)); // -> false
// console.log(deepEqual("test", "test!")); // -> false
// console.log(deepEqual(42, "42")); // -> false
// console.log(deepEqual(null, null)); // -> true
// console.log(deepEqual(null, {})); // -> false

// console.log("========== Массивы");

// console.log(deepEqual([1, 2, 3], [1, 2, 4])); // -> false
// console.log(deepEqual([1, 2, 3], [1, 2, 3])); // -> true
// console.log(deepEqual([1, 2, 3], [1, 2, 3, 4])); // -> false
// console.log(deepEqual([1, 2, 3], arrayObj)); // -> false
// console.log("========== циклическая ссылка");
// const a = { name: "a" }; // { name: "a",  self: a}
// a.self = a;
// const b = { name: "a" };
// b.self = b;
// console.log(deepEqual(a, b)); // -> выбросит ошибку
