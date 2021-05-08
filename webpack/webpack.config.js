const path = require('path')
const LogPlugin = require('./logPlugin')
console.log(LogPlugin)
module.exports = {
  entry: './webpack/webpack-1.js',
  output: {
    filename: 'webpack.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader:{
    // 去哪些目录下寻找 Loader，有先后顺序之分
    // modules: [path.resolve(__dirname, 'loaders/')],
    
  },
  
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tp$/,
        use: path.resolve(__dirname, 'tj-loader.js')
      }
    ]
  },
  plugins: [
    new LogPlugin({
      username: 'dylan',
      mail: '949440946@qq.com'
    })
  ]
}