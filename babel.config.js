// eslint-disable-next-line func-names
// eslint-disable-next-line space-before-function-paren
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
