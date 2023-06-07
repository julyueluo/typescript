//TS 函数类型解构
//使info不那么分散的传参
type TypStuobj = { username: string, age: number, phone: string }
// function info(name: string, age: number) {
function info(stuObj:TypStuobj) {
  console.log('name:', stuObj.username, ' age:', stuObj.age)
  return 3
}

let stuObj: TypStuobj={username:"wangwu", age: 23, phone: "111"}
info(stuObj)