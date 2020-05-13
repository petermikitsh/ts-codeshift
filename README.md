# ts-codeshift

With babel, it's possible to transform TypeScript files.

## Getting Started

```
yarn i
yarn build
```

Input:

```ts
const add = (a: number, b: number) => {
  return a + b;
};

export default add;
```

Output:

```ts
const add = (z: number, b: number) => {
  return z + b;
};

export default add;
```

Plugin to convert identifiers named 'a' to 'z':

```js
module.exports = function () {
  return {
    visitor: {
      Identifier({ node }) {
        if (node.name === "a") {
          node.name = "z";
        }
      },
    },
  };
};
```
