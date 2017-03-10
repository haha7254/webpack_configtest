
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var webpack = require("webpack")

module.exports = {
  entry: {
    bundle1: './main10-1.jsx',
    bundle2: './main10-2.jsx',
    app: './main.js',
    vendor: ['jquery']
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:"./[name].js"
  },
  module:{
    rules:[
      { test:/\.css$/, use:[ 'style-loader', 'css-loader' ]},
      { test:/\.js$/, use:['jsx-loader?harmony']},
      // loaders 可以像 querystring 一樣接收參數
      { test:/\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['react', 'es2015']}},


    ]
  },
  devServer: {
    inline: true,
    port: 8888,
    contentBase:path.join(__dirname, "dist")
  },
  plugins:[
    new CommonsChunkPlugin(['init']),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
    // new CommonsChunkPlugin({names:['init', 'vendor'], filename:'[name].js'}),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery"
    // })

  ]
}
