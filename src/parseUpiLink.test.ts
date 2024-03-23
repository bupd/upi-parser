import { parseUPILink } from "./parseUpiLink"; // Assuming the filename is getUpiLink.ts
import { describe, expect, test } from "@jest/globals";
import { UPIObject } from "./types";

describe("parseUPILink", () => {
  it("should parse a valid UPI Link", () => {
    const upiLink: string =
      "upi://pay?pa=bupdprasanth@oksbi&pn=Prasanth%20B&am=200&cu=INR&tn=Vanakkam&";

    const upiObject = parseUPILink(upiLink);

    const UPiObject: UPIObject = {
      vpa: null,
      merchantName: "Prasanth B",
      merchantCode: "bupdprasanth@oksbi",
      currency: "INR",
      amount: "200",
      tn: "Vanakkam",
    };

    expect(upiObject).toEqual(UPiObject);
  });
});
