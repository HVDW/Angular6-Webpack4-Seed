const path = require("path");
const webpack = require("webpack");
const { AngularCompilerPlugin } = require("@ngtools/webpack");

const loaders = [
  { test: /\.html$/, use: "html-loader" },
  { test: /\.scss$/, use: ["raw-loader", "sass-loader"] },
  { test: /\.(jpe?g|png|gif|svg)$/i, use: "file-loader" }
];

const plugins = [
  new webpack.ContextReplacementPlugin(
    /\@angular(\\|\/)core(\\|\/)fesm5/,
    path.resolve(__dirname, "src"),
    {}
  ),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
];

if (process.env.NODE_ENV === "production") {
  loaders.push({
    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
    use: ["@ngtools/webpack"]
  });

  plugins.push(
    new AngularCompilerPlugin({
      tsConfigPath: path.resolve(__dirname + "/tsconfig.json"),
      entryModule: path.resolve(__dirname + "/src/app/app.module#AppModule"),
      sourceMap: true
    })
  );
} else {
  loaders.push({
    test: /\.ts$/,
    use: ["awesome-typescript-loader", "angular2-template-loader"]
  });
  plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, "/notfound")
    )
  );
}

module.exports = {
  entry: {
    app: ["zone.js/dist/zone", "./src/main.ts"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    chunkFilename: "[name].bundle.js"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    port: 4000
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["src", "node_modules"]
  },
  module: {
    rules: loaders
  },
  plugins: plugins
};
