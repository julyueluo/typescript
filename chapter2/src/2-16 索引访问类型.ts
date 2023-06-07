// const symid = Symbol("productno")
// interface Product {
//    [symid]:number
//     name: string
//     price: number
//     account: number
//     buy(): void
//   }
//   interface Product {
//     //同名接口合并
//     wechat: string
// }

//索引访问类型

// type A=Product["buy"]//获取单个
// type B=Product["price"|"name"]//获取多个
// type S=Product[typeof symid]

// type PKeys = keyof Product //keyof 一次获取所有
// "name"|"price"|"account"|"buy"|"typeof symmid"

// type AllKeys<T>=T extends any?T:never
// type Pkeys2 = AllKeys<keyof Product>//迭代