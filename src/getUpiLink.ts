import { UPIObject } from "./types";

export function getUPILink(
  upiObject: UPIObject,
  amount: string,
  message: string,
): string {
  // amount = parseInt(amount.toFixed(2).replace(".", ""), 10) || 0;

  const urlParams = new URLSearchParams({
    vpa: upiObject.vpa || "",
    pn: upiObject.merchantName || "",
    pa: upiObject.merchantId || "",
    am: amount,
    tn: message || "",
    mc: upiObject.merchantCode || "",
  });

  return `upi://pay?${urlParams.toString()}`;
}

// const upiObject: UPIObject = {
//   vpa: null,
//   merchantName: "Lakshmanan P",
//   merchantCode: "lakshmanoni1234-2@okhdfcbank",
//   currency: null,
//   amount: null,
//   tn: null,
// };
// const amount: number = 125.75;
// const message: string = "Order #12345";
//
// const upiLink = getUpiLink(upiObject, amount, message);
//
// console.log(upiLink);
