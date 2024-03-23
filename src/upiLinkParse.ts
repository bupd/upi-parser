import { UPIObject } from "./types";

export function parseUPI(upiLink: string): UPIObject | null {
  if (!upiLink.startsWith("upi://pay?")) {
    return null;
  }

  const urlParams = new URLSearchParams(upiLink.slice("upi://pay?".length));

  const upiObject: UPIObject = {
    vpa: urlParams.get("a"),
    merchantName: urlParams.get("pn"),
    merchantCode: urlParams.get("pa"),
    currency: urlParams.get("cu"),
    amount: urlParams.get("am"),
    tn: urlParams.get("tn"),
  };

  // Handle missing optional parameters
  for (const key in upiObject) {
    if (!upiObject[key as keyof UPIObject]) {
      upiObject[key as keyof UPIObject] = null;
    }
  }

  return upiObject;
}

const upiLink =
  "upi://pay?pa=bupdprasanth@oksbi&pn=Prasanth%20B&am=200&cu=INR&tn=Vanakkam&";
const upiData = parseUPI(upiLink);

console.log(upiData);

