//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 15) Напиши функцию, которая принимает 2 строки. Верните true если строки я являются перевёрнутыми вариантом друг друга.
// 2 способа через 1) slice()  2) includes



// console.log(isStringRotated('javascript', 'scriptjava'))


// console.log(isStringRotated('javascript', 'scriptjavaa')) 

















// function isStringRotated(source, test) {

// 	if(source.length !== test.length) {
// 		return false
// 	}

// 	for(let i = 0; i < source.length; i++) {
// 		const rotate = source.slice(i, source.length) + source.slice(0, i)
// 		console.log(rotate)

// 		if(rotate === test) {
// 			return true
// 		}
// 	}

// 	return false;
// }


//  function isStringRotated(source, test) {
// 	console.log('source.includes(java)', source.includes('script'))
// 	return (source + source).includes(test) && source.length === test.length
// }
// console.log(isStringRotated('javascript', 'scriptjava'))