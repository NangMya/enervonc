// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// module.exports = {
//   entry: '/animate.js', // Entry point for JS
//   output: {
//     filename: 'bundle.js', // Output JS file
//     path: path.resolve(__dirname, 'build'), // Output directory
//     clean: true, // Clean the output directory before each build
//   },
//   module: {
//     rules: [
//         {
//             test: /\.css$/i,
//             use: [
//               MiniCssExtractPlugin.loader, // Extracts CSS into separate files
//               'css-loader', // Translates CSS into CommonJS
//             ],
//           },
//     ],
//   },
//   optimization: {
//     minimize: true,
//     minimizer: [
//       new CssMinimizerPlugin(), // Minimize CSS
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: 'styles.css', // Name of the output CSS file
//     }),
//   ],
//   devtool: 'source-map', // Generate source maps for easier debugging
//   devServer: {
//     static: path.join(__dirname, 'build'),
//     compress: true,
//     port: 9000,
//   },
// };


const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",

  // ✅ FIXED ENTRY PATH
  entry: path.resolve(__dirname, "animate.js"),

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },

      // ✅ If you ever import images in JS (future-proof)
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],

  devtool: "source-map",
};
