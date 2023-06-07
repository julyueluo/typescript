// 2 - 20 函数和函数类型 rest参数

// function info(name: string, age: number): number {
//   console.log('name:', name, ' age:', age)
//   return 3
// }
// info('wangwu', 23)

// let info = function (name: string, age: number) {
//   console.log('name:', name, ' age', age)
//   return 3
// }
// info('wangwu', 34)

// let info: (name: string, age: number) => number = function (
//   name: string,
//   age: number
// ) {
//   console.log('name:', name, ' age', age)
//   return 3
// }
// info('wangwu', 34)

// type TypeInfoFun = (name: string, age: number) => number
// let info:TypeInfoFun =
//  function (name,  age ) {
//   console.log('name:', name, ' age', age)
//   return 3
// }
// info('wangwu', 34)

//rest 参数

// function info(name: string, age: number, ...rest: any) {
//   console.log('name:', name, ' age', age, 'rest:', rest)
//   return 3
// }
// info('wangwu', 34, '1111', 'beijing', 23)
