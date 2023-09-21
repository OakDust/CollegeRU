const plugins = [];
if (process.env.NODE_ENV === 'development') {
  plugins.push('react-refresh/babel');
} // React hot reloading необходим только в режиме разработки

module.exports = {
  "presets": [
    ["@babel/preset-react", {
    "runtime": "automatic"
  }]
  ],
  // пресет для работы с React
  plugins
};
