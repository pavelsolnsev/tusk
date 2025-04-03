// https://www.youtube.com/watch?v=6LdQBI0anMQ&ab_channel=PurpleSchool%7CAntonLarichev

//1) функция принимает милисекунды на которые нужно задержать выполнение кода и вернутбь значение на которое мы задержали

const delay = (ms, value) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(value)
		}, ms)
	})
}

delay(2000).then(result => {
	console.log(result)
})

const values = [1, 2, 3]

for( const value of values) {
	console.log(value)
}

// values.forEach(async (value) => {
// 	const result = await delay(2000, value)
// 	console.log(result)
// })

console.log('done')