const path = require('path');

module.exports = {
  mode: 'development',
  entry: './renderer/src/javascript/index.js',
  devtool: 'inline-source-map',
  target: ["web", "electron-renderer"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env', {
                targets: {
                  esmodules: true
                }
              }],
              '@babel/preset-react']
          }
        }
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    fallback: {
      "fs": false
    },
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'renderer', 'build', 'javascript'),
  },
};