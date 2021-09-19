const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const BUILD_DIR = path.join(__dirname, "..","/build");


module.exports = merge(common, {
    mode: "development",
    devtool: "eval",
    output: {
        path: BUILD_DIR,
        filename: "index.bundle.js"
    },
    devServer: {
        port: process.env.port || 4000,
        watchContentBase: true
    }
})