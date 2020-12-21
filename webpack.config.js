const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const distName = 'wwwroot/dist';

module.exports = {
  entry: ['./wwwroot/css/site.css'],
  output: {
    path: path.resolve(__dirname, distName)
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
