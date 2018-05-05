// webpack.config.js
module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['es2015'],
            },
        },{
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                // options: {
                //   attrs: [':data-src']
                // }
            },
            exclude: /node_modules/,
        }
    ]
  }
};
