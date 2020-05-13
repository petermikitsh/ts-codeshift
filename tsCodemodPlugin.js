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
