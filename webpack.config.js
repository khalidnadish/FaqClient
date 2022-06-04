module.exports = {
  resolve: {
    fallback: {
      process: require.resolve("process/browser"),
      // path: require.resolve("path-browserify"),
      // fs: false,
    },
  },
};
