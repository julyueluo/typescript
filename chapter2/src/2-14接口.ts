// interface Product {
// type Product{   用type 和interface的区别？
// 为何要用interface? 接口的独特，优点

// 和type 都是定义对象类型的
//   name: string
//   price: number
//   account: number
//   //只能定义不能实现
//   buy(): void
// }
// let p: Product = {
//    name: "phone",
//    price: 1200,
//    account: 10,
//     //要在此实现
//     buy(){}
// }

// 一些第三方包或者框架底层源码中有大量的接口类型
//接口独特优点？
//2 
// function getProduct(p:Product){
//   console.log(p);
// }
// 4.继承接口 interface可以继承
//所有宠物的共同属性和方法 个体的另写子类扩展继承
// type可以写很多值，但是不能继承
// interface Pet{ 
//   name: string,
//   love: number,
//   health: number,
//   toHealth(): void
// }
// interface Dog extends Pet{
//   strain: string
// }

//3 类需要实现接口
// interface List{
//   add():void,
//   remove():void
// }
//为所有类实现统一的方法名，通过快速修复快速写代码
//还可以避免后期修改了方法名，（会警示）
//3. 为多个同类别的类提供统一的方法和属性声明！！
// class ArrayList implements List{
//   add(): void {
//     throw new Error("Method not implemented.")
//   }
//   remove(): void {
//     throw new Error("Method not implemented.")
//   }

// }
// class LinkedList implements List{
//   add(): void {
//     throw new Error("Method not implemented.")
//   }
//   remove(): void {
//     throw new Error("Method not implemented.")
//   }

// }