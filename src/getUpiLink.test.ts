import { getUPILink } from "./getUpiLink"; // Assuming the filename is getUpiLink.ts
import { describe, expect, test } from "@jest/globals";
import { UPIObject } from "./types";

describe("getUpiLink", () => {
  it("should create a valid UPI link", () => {
    const upiObject: UPIObject = {
      vpa: null,
      merchantName: "Lakshmanan P",
      merchantCode: "lakshmanoni1234-2@okhdfcbank",
      currency: null,
      amount: null,
      tn: null,
    };
    const amount: number = 125.75;
    const message: string = "Order #12345";

    const upiLink = getUPILink(upiObject, amount, message);

    // Assert that the generated UPI link starts with 'upi://pay?'
    expect(upiLink.startsWith("upi://pay?")).toBe(true);
    expect(upiLink).toEqual(
      "upi://pay?vpa=&pn=Lakshmanan+P&pa=lakshmanoni1234-2%40okhdfcbank&am=125.75&tn=Order+%2312345",
    );
    // Add more assertions as needed to validate the structure of the UPI link
  });
});
