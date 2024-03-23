// type for the return UPIObject from parse function
export interface UPIObject {
  vpa: string | null;
  merchantName: string | null;
  merchantCode: string | null;
  currency: string | null;
  amount: string | null;
  tn: string | null;
}
