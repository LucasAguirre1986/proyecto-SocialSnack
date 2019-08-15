module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: __dirname + '/../back/src/public'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            "@babel/preset-react",
            "@babel/env"
          ]
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.jsx?$/
        },
        use: ['babel-loader', '@svgr/webpack', 'url-loader']
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
      },
      {
        test: /\.gif(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/gif'
      }
    ]
  },
  devtool: 'source-map'
}
