export enum AdminActionType {
  Clear2Fa = 'clear2fa',
  lockWithdraw = 'lockWithdraw',
  unLockWithdraw = 'unLockWithdraw',
  AccountProfileApproval = 'accountProfileApproval',
  CreateAdmin = 'createAdmin',
  CreateUser = 'createUser',
  DisableBankAccount = 'disableBankAccount',
  BankAccountApproval = 'bankAccountApproval',
  UpdateBankAccount = 'updateBankAccount',
  UpdateUser = 'updateUser',
  ApproveWalletTx = 'ApproveWalletTx',
  GetUserToken = 'getUserToken',
  DisableRequiredApproveWithdraw = 'disableRequiredApproveWithdraw',
  EnableRequiredApproveWithdraw = 'enableRequiredApproveWithdraw',
  lockTransfer = 'lockTransfer',
  unLockTransfer = 'unLockTransfer',
  CreateDepositFiatOrder = 'CreateDepositFiatOrder',
}
