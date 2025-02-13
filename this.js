// console.log(this)

// function hello() { 
// 	console.log('hello', this)
// }

// const person = {
// 	name: 'Vladilen',
// 	age: 25,
// 	sayHello: hello,
// 	sayHelloWindow: hello.bind(this),
// 	logInfo: function(job, phone) {
// 		console.group(`${this.name} info: `)
// 		console.log(`Name is ${this.name}`)
// 		console.log(`Age is ${this.age}`)
// 		console.log(`Job is ${job}`)
// 		console.log(`Phone is ${phone}`)
// 		console.groupEnd()
// 	}
// }

// const lena = {
// 	name: 'Elena',
// 	age: 23
// }

// // const fnLenaInfoBlog = person.logInfo.bind(lena)
// // fnLenaInfoBlog('Fronted', '8-000-909-009')

// // person.logInfo.bind(lena, 'Fronted', '8-000-909-00222229')()

// // person.logInfo.call(lena, 'Fronted', '8-000-909-00222229')

// person.logInfo.apply(lena, ['Fronted', '8-000-909-00222229'])
