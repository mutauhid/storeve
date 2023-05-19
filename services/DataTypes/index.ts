export interface CategoriesTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemsTypes {
  _id: string;
  name: string;
  status: string;
  thumbnail: string;
  category: CategoriesTypes;
}

export interface BankTypes {
  _id: string;
  name: string;
  noRekening: string;
  bankName: string;
  type: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BankTypes[];
}

export interface NominalTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  phoneNumber: string;
  avatar: string;
}

export interface CheckoutTypes {
  accountUser: string;
  nominal: string;
  voucher: string;
  name: string;
  payment: string;
  bank: string;
}

export interface HistoryVoucherTopupTypes {
  gameName: string;
  category: string;
  thumbnail: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}

export interface historyTransactionTypes {
  _id: string;
  value: number;
  status: string;
  name: string;
  accountUser: string;
  tax: number;
  historyVoucherTopup: HistoryVoucherTopupTypes;
  historyPayment: BankTypes;
}

export interface historyCategoriesTypes {
  _id: string;
  value: number;
  name: string;
}
