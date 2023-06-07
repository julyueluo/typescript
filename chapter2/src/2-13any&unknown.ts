// 1. any、unknown可以是任何类型的父类

// let num:number = 1
// let num:string ="ab"
// let num: Array<string> = ['ab', 'df']
// let data: any = num
// let data:any = undefined
// let data:any = null

// 2.  不同点1 any可以是任何类型的子类，unknown不行
// 这里父类和子类是狭义的，以等号分界；
// let data: any = ['ab', 'dg']
// let num: number = data
//这个有什么用途呢？
//用处
// 前端 -> 后端 图书数组  前端向后端发送请求，
// let books: Books[] = data

// any 典型应用场景： 1. 自定义守卫， 2. 需要进行 as any 类型断言

// 3. 不同点2 不能拿unknown类型的变量来获取任何属性和方法，但是any类型的
// 变量可以获取任意名称的属性和任意名称的方法

// function getData(data:unknown){  写成unkown会出错 表示不明确 any是任意的

// function getData(data: any) {
//   console.log(data.name)
// }

// getData({ name: 'wanggu', age: 23 })

//unknown 一般用作函数参数： 用来接受任意类型的变量实参，但在函数内部只用于
// 再次传递或输出结果，不获取属性的场景

// function ref(value?: unknown) {
//   return createRef(value)
// }
// export {}

// Object 和any 有什么区别？

