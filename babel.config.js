module.exports = (api) => {
  api.cache(true);

  return {
    plugins: ["@babel/plugin-syntax-typescript", "./tsCodemodPlugin.js"],
  };
};
