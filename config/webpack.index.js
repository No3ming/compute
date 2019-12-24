const path = require('path')

module.exports = {
  entry: "../src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: "compute",
    libraryTarget: "umd",
  },
  // externals: {
  //   lodash: {
  //     commonjs: 'lodash',
  //     commonjs2: 'lodash',
  //     amd: 'lodash',
  //     root: '_'
  //   }
  // },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {test: /\.ts?$/, use: "ts-loader", exclude: /node_modules/}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
}
