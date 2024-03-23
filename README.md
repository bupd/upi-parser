# upi-parser
A Simple Upi Links Parser

## Description

upi-parser is a TypeScript library for parsing UPI (Unified Payments Interface) links and creating UPI links from UPI objects. UPI links are commonly used for peer-to-peer payments and are supported by various payment apps in India.

This package provides functions to parse UPI links and extract information such as the recipient's UPI ID, amount, and transaction note. Additionally, it allows for the creation of UPI links by providing a UPI object containing relevant details.

## Installation

You can install upiparser via npm:

```
npm install upi-parser
```

## Usage
### Parsing UPI Links
```typescript
import { parseUPI } from 'upiparser';

const upiLink = 'upi://pay?pa=johndoe@upi&pn=John%20Doe&am=100&cu=INR&tn=For%20dinner';

const parsedUPI = parseUPI(upiLink);

console.log(parsedUPI);
// Output: { pa: 'johndoe@upi', pn: 'John Doe', am: '100', cu: 'INR', tn: 'For dinner' }

```

### Creating UPI Links
```typescript

import { createUPI } from 'upiparser';

const upiObject = {
  pa: 'johndoe@upi',
  pn: 'John Doe',
  am: '100',
  cu: 'INR',
  tn: 'For dinner'
};

const generatedUPI = createUPI(upiObject);

console.log(generatedUPI);
// Output: 'upi://pay?pa=johndoe@upi&pn=John%20Doe&am=100&cu=INR&tn=For%20dinner'
```

## Testing
This package is tested using **Jest**. You can run the tests with the following command:

```bash
npm run test
```

## Contribution
Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the GitHub repository: [upi-parser](https://github.com/bupd/upi-parser)

Please make sure to follow the existing code style and add tests for any new features or bug fixes.

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/bupd/upi-parser/blob/main/LICENSE) file for details.

