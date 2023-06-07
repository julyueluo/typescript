// let data1: Object = new Set<string>()
// let data2: {} = new Set<string>()
// //联合类型 |
// let str: string | number = 'abc'
// console.log('str', str)
// //交叉类型 &
// type Obj1 = { username: string }
// type Obj2 = { age: number }

// let obj: { username: string } = { username: 'abc' }
// let obj2: { age: number } = { age: 23 }

// let obj3: Obj1 & Obj2 = { username: 'wg', age: 40 }
//只能同类型交叉，如上两个对象类型，不能数值和字符串之类的

//字面量数据类型
// type A=number | string
// let a:A="Abc"
// type num=number
// let n:num=3;

// type num1=1|2|3
// let k:num1 =4   //因为num1中没有4

//字面量数据类型实际应用如下：
// type increaseFlag = 0 | 1
// function isStartUp(increase: increaseFlag) {
//   if (increase) {
//     console.log('open')
//   } else {
//     console.log('close')
//   }
// }
// isStartUp(3)  //只允许输入0、1