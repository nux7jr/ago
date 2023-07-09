const path = require("path");


module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          knownHelpersOnly: false,
          inlineRequires: "/src/images/",
        },
      },
    ],
  },

  entry: "./public/src/js/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.js",
  },
  watch: true,
};
