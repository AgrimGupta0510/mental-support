# Support

Mental-Support is a Node.js module that provides mental health tips and inspirational quotes for developers and anyone looking to maintain a healthy mindset.

## Installation

You can install the `mental-support` module via npm:

```bash
npm install mental-support
```

## Usage
Example Usage in an Express Server

```js
import express from 'express';
import main from 'mental-support';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Mental-Support Module</h1>');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    main(); // Call main function to display mental health tips and quotes
});
