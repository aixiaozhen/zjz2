const path = require('path')

module.exports={
  entry:{
    app:'./app/js/main.js'
  },
  module:{
    loaders:[
      {
        test:/\.html$/,//表示识别文件的正则表达式
        loader:'html-loader'
      },
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.scss$/,
        loader:'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins:[],
  output:{
    filename:'[name].min.js',
    path:path.resolve(__dirname,'dist')
  }
}
