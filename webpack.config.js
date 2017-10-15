const path = require('path')

const EXAMPLES_DIR = path.join(__dirname, 'examples');

console.log(EXAMPLES_DIR)
console.log(path.join(EXAMPLES_DIR, 'basic', 'app.js'))

module.exports = {
  entry: {
    'app': path.join(EXAMPLES_DIR, 'basic', 'app.js'),
  },
  output: {
    path: path.join(__dirname, 'examples/__build__'),
    chunkFilename: '[id].chunk.js',
    filename: '[name].js',
    publicPath: '/__build__/'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader",
      }
    ]
  }
}
