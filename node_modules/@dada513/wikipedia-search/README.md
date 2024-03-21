# wikipedia-search

Simple wikipedia search module.  
NPM: https://www.npmjs.com/package/@dada513/wikipedia-search

### Installation

```bash
yarn add @dada513/wikipedia-search # or npm install @dada513/wikipedia-search
```

### Usage

```js
const wikipedia = require("./esm");

async function app() {
  const res = await wikipedia.search("Hello, world", "en");
  console.log(res);
}

app();
```

### API

The JSDoc can be accessed at https://dada513.github.io/wikipedia-search/
