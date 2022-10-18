module.exports = {
  presets: ['@babel/preset-env', ['@babel/preset-react', {rumtime: 'automatic'}]],
  plugins: [['@babel/plugin-transform-runtime']]
}