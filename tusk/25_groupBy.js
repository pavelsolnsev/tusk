//// https://www.youtube.com/watch?v=x-EZy6gu_38&t=679s
//// 25) 





// console.log(groupBy(["one", "two", "three"], "length")); // -> { '3': ['one', 'two'], '5': ['three'] }
// console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // -> { '4': [4.2], '6': [6.1, 6.3] }





































// function groupBy(array, fn) {
//   const res = {}
//   for(let i = 0; i < array.length; i++) {
//     const current = array[i]
//     const key = typeof fn === 'function' ? fn(current) : current[fn]
//     if(!res[key]) {
//       res[key] = []
//     }
//     res[key].push(current)
//   }
//   return res
// }

// function groupBy(array, fn) {
//   return array.reduce((res, current) => {
//     const key = typeof fn === 'function' ? fn(current) : current[fn]

//     if (!res[key]) {
//       res[key] = []
//     }
//     res[key].push(current)

//     return res
//   }, {})
// }

// function groupBy(array, fn) {
//   return array.reduce((acc, current) => {
//     const key = typeof fn === "function" ? fn(current) : current[fn];
//     if (!acc[key]) {
//       acc[key] = [];
//     } else {
//       acc[key].push(current);
//     }

//     return acc;
//   }, {});
// }


