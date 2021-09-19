const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const BUILD_DIR = path.join(__dirname, "..","/build");


module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    output: {
        path: BUILD_DIR,
        filename: "index.bundle.[chunkhash].js"
    },
})