const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
            // {
            //     test: /\.html$/,
            //     use: ["html-loader"]
            // },
            // {
            //     test: /\.(svg|png|jpg|gif)$/,
            //     loader: "file-loader",
            //     options: {
            //         name: "[name].[hash].[ext]",
            //         outputPath: "images"
            //     }
            // }
        ]
    },
    devServer: {
        historyApiFallback: true,
       },
    plugins: [new MiniCssExtractPlugin()]
}