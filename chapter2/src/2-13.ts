// 1. any、unknown可以是任何类型的父类

// let num:number = 1
// let num:string ="ab"
// let num: Array<string> = ['ab', 'df']
// let data: any = num
// let data:any = undefined
// let data:any = null

// 2.  any可以是任何类型的子类，unknown不行

let data: any = ['ab', 'dg']
let num: number = data

//用处
// 前端 -> 后端 图书数组
// let books: Books[] = data

// any 典型应用场景： 1. 自定义守卫， 2. 需要进行 as any 类型断言

// 3. 不能拿unknown类型的变量来获取任何属性和方法，但是any类型的
// 变量可以获取任意名称的属性和任意名称的方法

// function getData(data:unknown){  写成unkown会出错 表示不明确

function getData(data: any) {
  console.log(data.name)
}

getData({ name: 'wanggu', age: 23 })

//unknown 一般用作函数参数： 用来接受任意类型的变量实参，但在函数内部只用于
// 再次传递或输出结果，不获取属性的场景

function ref(value?: unknown) {
  return createRef(value)
}
export {}
