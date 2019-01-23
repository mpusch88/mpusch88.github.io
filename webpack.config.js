const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  const CSSExtract = new MiniCssExtractPlugin({
    filename: 'styles.css'
  });

  return {
    entry: './src/app.js',
    target: 'electron-main',
    output: {
      path: path.join(__dirname, 'src', 'build'),
      filename: 'bundle.js'
    },
    mode: 'development',
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './',
      historyApiFallback: true,
      disableHostCheck: true
    }
  };
};
