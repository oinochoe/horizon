var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./src/landing.js",
  output: {
    filename: "landing.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "cheap-eval-source-map",
  devServer: {
    port: 9000,
    hot: true, // 바로바로 스타일시트가 반영
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(frag|vert|glsl)$/,
        use: [
          {
            loader: "glsl-shader-loader",
            options: {},
          },
        ],
      },
    ],
  },
};
