const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".js", ".tsx"]
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(css|sass)$/,
        use: {
          loader: "css-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};
