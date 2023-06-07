//可索引签名和2个容易忽略的重要细节

//可索引签名  处理那些不确定是否用上的属性
// interface Products{
//   name: string
//   price: number
//   account: number
//   [x:string]: any  //x代表未知属性名  支持string symbol number
  // [x:symbol]:any//只支持symbol
  // [x:number]:any//只支持number
  
// }

// let o:Products={
//   name:"ok",
//   price: 100,
//   account: 100,
//   descri1: "ok",
//   [Symbol("stockno")]:1000,
//   100:"Ok",
//   true:"ik"
// }
