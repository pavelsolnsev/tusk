//// https://www.youtube.com/watch?v=498UIks8UOk
//// 11) Зачада
//// нам нужно получить единый массив из любимых пицц каждого друга


// const friends = [
//   { name: "alex", pizzas: ["cheese", "pepperoni"] },
//   { name: "mike", pizzas: ["salami", "margarita"] },
//   { name: "stas", pizzas: ["meat"] },
//   { name: "anna", pizzas: ["fish"] },
// ];


// console.log(theBestPizzas(friends));

























// function theBestPizzas(friends) {
//   return friends.reduce((pizzas, friend) => {
//     return pizzas.concat(friend.pizzas);
//   }, []);
// }
// console.log(theBestPizzas(friends));

// function theBestPizzas(friends) {
//   let result = [];
// 	friends.forEach((friend) => {
// 		result = result.concat(friend.pizzas);
// 	})
// 	return result;
// }
// console.log(theBestPizzas(friends));

// function theBestPizzas(friends) {
//   return friends.flatMap(friend => friend.pizzas);
// }
// console.log(theBestPizzas(friends));

// const allPizzas = friends.map(friend => friend.pizzas).flat();
// console.log(allPizzas);

// const allPizzas = friends.reduce((accum, current) => {
// 	return [...accum, ...current.pizzas];
// }, []);
// console.log(allPizzas);
