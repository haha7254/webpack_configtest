var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: "./entry.js",
  output:{
    path: __dirname,
    filename:"bundle.js"
  },
  module:{
    rules:[
      { test:/\.css$/, use:[ 'style-loader', 'css-loader' ]},
      { test:/\.js$/, use:['jsx-loader?harmony']},
      // loaders 可以像 querystring 一樣接收參數
      { test:/\.js[x]?$/, exclude: /node_modules/, use:['babel-loader']}

    ]
  },
  resolve:{
    extensions : [".js", 'jsx', '.json', '.css']

  },
  
  plugins:[
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
