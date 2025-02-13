//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 23) Реализуйте функцию bind.
//// **Input**: Object, arguments
//// **Output**: Function

































// Function.prototype.myBind = function(context, ...args) {
// 	return (...rest) => {
// 		console.log(this)
//     return this.call(context, ...args.concat(rest))
//   }
// }

// function log(...props) {
// 	console.log('this', this, this.name, this.age, 'props', ...props)
// }

// const obj = {
// 	name: 'Pavel',
// 	age: 34
// }


// const test = log.myBind(obj, 'test')
// test('test2')


















// Function.prototype.myBind = function(context, ...args) {
//   return (...rest) => {
//     return this.call(context, ...args)
//   }
// }

// function log(...props) {
//   console.log(this.name, this.age, ...props)
// }

// const obj = {name: 'Pavel', age: 33}
// const bound = log.myBind(obj, '50', '12')
// bound()


// Function.prototype.myBind = function(context, ...args) {
//   return (...rest) => {
//     return this.call(context, ...args.concat(rest))
//   }
// }

// function log(...args) {
//   console.log(this, ...args)
// }

// const obj = {name: 'Pavel', age: 33}

// const bound = log.myBind(obj, '13', 13)
// bound('11', 11)
