// type 类型定义关键字
//枚举应用
export enum EnumAuditStatus {
  MANAGER_AUDIT_FAIL = -1, //第一个常量值设置为-1
  NO_AUDIT, //第二个常量值自动递增为0
  MANAGER_AUDIT_SUCCESS, //1
  FINAL_AUDIT_SUCCESS, //2
}

type Expense = {
  id: number
  events: string
  time: Date
  enumAuditStatus: EnumAuditStatus
}
// const Status = {
//   MANAGER_AUDIT_FAIL: -1,
//   NO_AUDIT: 0,
//   MANAGER_AUDIT_SUCCESS: 1,
//   FINAL_AUDIT_SUCCESS: 2,
// }
//审核类
class MyAudit {
  // getAuditStatus(status: number): void {
  getAuditStatus(status: EnumAuditStatus): void {
    if (status === EnumAuditStatus.NO_AUDIT) {
      console.log('没有审核')
    } else if (status === EnumAuditStatus.MANAGER_AUDIT_SUCCESS) {
      console.log('经理审核通过')
    } else if (status === EnumAuditStatus.FINAL_AUDIT_SUCCESS) {
      console.log('财务审核通过')
    }
  }
}
const audit = new MyAudit()
audit.getAuditStatus(EnumAuditStatus.NO_AUDIT)
