const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");

module.exports = {
    entry: ["./src/app.js", "./src/scss/main.scss"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public/build")
    },
    devtool: "eval-cheap-module-source-map",
    watch: true,
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react", "stage-1"]
                }
            },
            {
                // regular css files
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ["css-loader"]
                })
            },
            {
                // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: "[name].bundle.css",
            allChunks: true
        }),
        new WebpackShellPlugin({
            onBuildEnd: ["nodemon server.js"]
        })
    ]
};