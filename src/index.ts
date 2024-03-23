export function parseUPI(upiLink) {
  // Handle potential malformed links gracefully
  if (!upiLink.startsWith("upi://pay?")) {
    return null;
  }

  const urlParams = new URLSearchParams(upiLink.slice("upi://pay?".length));

  const upiObject = {
    vpa: urlParams.get("a"),
    merchantName: urlParams.get("pn"),
    merchantCode: urlParams.get("pa"),
    transactionRefId: urlParams.get("tn"),
    currency: urlParams.get("cu"),
    amount: urlParams.get("am"),
    tn: urlParams.get("tn"),
  };

  // Handle missing optional parameters
  for (const key in upiObject) {
    if (!upiObject[key]) {
      upiObject[key] = null;
    }
  }

  return upiObject;
}

const upiLink =
  "upi://pay?pa=bupdprasanth@oksbi&pn=Prasanth%20B&am=200&cu=INR&tn=Vanakkam&";
const upiData = parseUPI(upiLink);

console.log(upiData);

export function createUPI(upiObject, amount, message) {
  // Validate input
  if (!upiObject.vpa) {
    throw new Error("Missing VPA in upiObject");
  }

  // Sanitize amount (optional, adjust as needed)
  amount = parseInt(amount, 10) || 0; // Convert to integer and default to 0

  // Build the query string

  const urlParams = new URLSearchParams({
    vpa: upiObject.vpa,
    pn: upiObject.merchantName || "", // Include if available
    pa: upiObject.merchantCode || "", // Include if available
    am: amount, // Convert to paise (1 rupee = 100 paise)
    tn: message || "", // Include if provided
  });

  return `upi://pay?${urlParams.toString()}`;
}

const upiObject = { vpa: "xyz@ybl", merchantName: "Store XYZ" };
const amount = 125.75; // Example amount
const message = "Order #12345"; // Example message

try {
  const upiLink = createUPI(upiObject, amount, message);
  console.log(upiLink);
} catch (error) {
  console.error("Error creating UPI link:", error.message);
}

